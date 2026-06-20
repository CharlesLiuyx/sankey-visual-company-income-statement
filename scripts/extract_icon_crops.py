#!/usr/bin/env python3
"""Generic icon crop extractor for income-statement reference images.

The script is intentionally data-driven. A dataset-specific JSON spec provides
safe search regions and optional color filters; this file owns the reusable
crop algorithm and validation.
"""

from __future__ import annotations

import argparse
import json
from collections import deque
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from statistics import median
from typing import Any

from PIL import Image, ImageDraw

try:
    import numpy as np
except Exception:  # pragma: no cover - fallback for hosts without numpy
    np = None


ROOT = Path(__file__).resolve().parents[1]


@dataclass(frozen=True)
class Box:
    x0: int
    y0: int
    x1: int
    y1: int

    @property
    def width(self) -> int:
        return self.x1 - self.x0

    @property
    def height(self) -> int:
        return self.y1 - self.y0

    @classmethod
    def from_search(cls, raw: dict[str, int]) -> "Box":
        return cls(raw["x"], raw["y"], raw["x"] + raw["width"], raw["y"] + raw["height"])

    def to_json(self) -> dict[str, int]:
        return {"x0": self.x0, "y0": self.y0, "x1": self.x1, "y1": self.y1}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Extract validated icon crops from a reference image.")
    parser.add_argument("--spec", required=True, help="Path to an icon crop spec JSON file.")
    return parser.parse_args()


def project_path(value: str) -> Path:
    path = Path(value)
    return path if path.is_absolute() else ROOT / path


def sample_background(image: Image.Image, blocks: list[list[int]] | None = None) -> tuple[int, int, int]:
    width, height = image.size
    sample_blocks = blocks or [
        [0, 0, 36, 36],
        [width - 36, 0, 36, 36],
        [0, height - 36, 36, 36],
        [width - 36, height - 36, 36, 36],
    ]
    pixels: list[tuple[int, int, int]] = []
    rgb = image.convert("RGB")
    for sx, sy, sw, sh in sample_blocks:
        for y in range(max(0, sy), min(height, sy + sh), 3):
            for x in range(max(0, sx), min(width, sx + sw), 3):
                pixels.append(rgb.getpixel((x, y)))
    if not pixels:
        raise ValueError("Cannot estimate background: no valid sample pixels.")
    return (
        int(median([pixel[0] for pixel in pixels])),
        int(median([pixel[1] for pixel in pixels])),
        int(median([pixel[2] for pixel in pixels])),
    )


def in_range(values: Any, range_spec: Any) -> Any:
    if range_spec is None:
        return True
    if isinstance(range_spec, list):
        low, high = range_spec
    else:
        low, high = range_spec.get("min", 0), range_spec.get("max", 255)
    return (values >= low) & (values <= high) if np is not None and hasattr(values, "shape") else low <= values <= high


def filter_mask_array(arr: Any, filter_spec: dict[str, Any] | None) -> Any:
    if not filter_spec:
        return np.ones(arr.shape[:2], dtype=bool)
    if "any" in filter_spec:
        out = np.zeros(arr.shape[:2], dtype=bool)
        for item in filter_spec["any"]:
            out |= filter_mask_array(arr, item)
        return out
    out = np.ones(arr.shape[:2], dtype=bool)
    channels = filter_spec.get("channels", {})
    for index, name in enumerate(("r", "g", "b")):
        if name in channels:
            out &= in_range(arr[:, :, index], channels[name])
    return out


def filter_pixel(color: tuple[int, int, int], filter_spec: dict[str, Any] | None) -> bool:
    if not filter_spec:
        return True
    if "any" in filter_spec:
        return any(filter_pixel(color, item) for item in filter_spec["any"])
    channels = filter_spec.get("channels", {})
    return all(in_range(color[index], channels.get(name)) for index, name in enumerate(("r", "g", "b")))


def foreground_mask(image: Image.Image, box: Box, spec: dict[str, Any], background: tuple[int, int, int]) -> list[bytearray]:
    threshold = spec.get("threshold", 24)
    crop = image.crop((box.x0, box.y0, box.x1, box.y1)).convert("RGB")

    if np is not None:
        arr = np.asarray(crop, dtype=np.int16)
        bg = np.asarray(background, dtype=np.int16)
        distance = np.max(np.abs(arr - bg), axis=2)
        mask = distance >= threshold
        mask &= filter_mask_array(arr, spec.get("foreground"))
        return [bytearray(row.astype(np.uint8).tolist()) for row in mask]

    rows: list[bytearray] = []
    for y in range(crop.height):
        row = bytearray(crop.width)
        for x in range(crop.width):
            color = crop.getpixel((x, y))
            distance = max(abs(color[i] - background[i]) for i in range(3))
            if distance >= threshold and filter_pixel(color, spec.get("foreground")):
                row[x] = 1
        rows.append(row)
    return rows


def connected_components(mask: list[bytearray], origin: Box, min_area: int) -> list[dict[str, int]]:
    height = len(mask)
    width = len(mask[0]) if height else 0
    visited = [bytearray(width) for _ in range(height)]
    components: list[dict[str, int]] = []

    for y in range(height):
        for x in range(width):
            if not mask[y][x] or visited[y][x]:
                continue
            queue: deque[tuple[int, int]] = deque([(x, y)])
            visited[y][x] = 1
            area = 0
            min_x = max_x = x
            min_y = max_y = y
            while queue:
                cx, cy = queue.pop()
                area += 1
                min_x = min(min_x, cx)
                max_x = max(max_x, cx)
                min_y = min(min_y, cy)
                max_y = max(max_y, cy)
                for nx, ny in ((cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)):
                    if nx < 0 or ny < 0 or nx >= width or ny >= height:
                        continue
                    if visited[ny][nx] or not mask[ny][nx]:
                        continue
                    visited[ny][nx] = 1
                    queue.append((nx, ny))
            if area >= min_area:
                components.append(
                    {
                        "area": area,
                        "x0": origin.x0 + min_x,
                        "y0": origin.y0 + min_y,
                        "x1": origin.x0 + max_x + 1,
                        "y1": origin.y0 + max_y + 1,
                    }
                )
    return components


def union_box(components: list[dict[str, int]]) -> Box:
    return Box(
        min(component["x0"] for component in components),
        min(component["y0"] for component in components),
        max(component["x1"] for component in components),
        max(component["y1"] for component in components),
    )


def clamp_box(box: Box, bounds: Box) -> Box:
    x0, y0, x1, y1 = box.x0, box.y0, box.x1, box.y1
    if x0 < bounds.x0:
        x1 += bounds.x0 - x0
        x0 = bounds.x0
    if y0 < bounds.y0:
        y1 += bounds.y0 - y0
        y0 = bounds.y0
    if x1 > bounds.x1:
        x0 -= x1 - bounds.x1
        x1 = bounds.x1
    if y1 > bounds.y1:
        y0 -= y1 - bounds.y1
        y1 = bounds.y1
    return Box(max(bounds.x0, x0), max(bounds.y0, y0), min(bounds.x1, x1), min(bounds.y1, y1))


def centered_crop_box(subject: Box, spec: dict[str, Any], image_size: tuple[int, int]) -> Box:
    padding = spec.get("padding", 30)
    center_x = (subject.x0 + subject.x1) / 2
    center_y = (subject.y0 + subject.y1) / 2
    crop_width = subject.width + padding * 2
    crop_height = subject.height + padding * 2
    box = Box(
        round(center_x - crop_width / 2),
        round(center_y - crop_height / 2),
        round(center_x + crop_width / 2),
        round(center_y + crop_height / 2),
    )
    image_bounds = Box(0, 0, image_size[0], image_size[1])
    box = clamp_box(box, image_bounds)
    if spec.get("cropWithinSearchBox"):
        box = clamp_box(box, Box.from_search(spec["searchBox"]))
    return box


def count_forbidden_pixels(
    crop: Image.Image,
    threshold: int,
    background: tuple[int, int, int],
    filters: list[dict[str, Any]],
) -> int:
    if not filters:
        return 0
    rgb = crop.convert("RGB")
    if np is not None:
        arr = np.asarray(rgb, dtype=np.int16)
        bg = np.asarray(background, dtype=np.int16)
        distance = np.max(np.abs(arr - bg), axis=2)
        mask = distance >= threshold
        color_mask = np.zeros(arr.shape[:2], dtype=bool)
        for filter_spec in filters:
            color_mask |= filter_mask_array(arr, filter_spec)
        return int(np.count_nonzero(mask & color_mask))

    count = 0
    for y in range(rgb.height):
        for x in range(rgb.width):
            color = rgb.getpixel((x, y))
            distance = max(abs(color[i] - background[i]) for i in range(3))
            if distance >= threshold and any(filter_pixel(color, item) for item in filters):
                count += 1
    return count


def validate_crop(
    image: Image.Image,
    spec: dict[str, Any],
    crop_box: Box,
    subject: Box,
    background: tuple[int, int, int],
) -> dict[str, Any]:
    threshold = spec.get("threshold", 24)
    validation = spec.get("validation", {})
    border_band = validation.get("borderBand", 3)
    max_center_offset = validation.get("maxCenterOffset", 0.02)
    max_forbidden_pixels = validation.get("maxForbiddenForegroundPixels", 0)
    crop = image.crop((crop_box.x0, crop_box.y0, crop_box.x1, crop_box.y1)).convert("RGB")
    target_mask = foreground_mask(image, crop_box, spec, background)

    foreground_pixels = 0
    edge_foreground_pixels = 0
    for y, row in enumerate(target_mask):
        for x, value in enumerate(row):
            if not value:
                continue
            foreground_pixels += 1
            if x < border_band or y < border_band or x >= crop.width - border_band or y >= crop.height - border_band:
                edge_foreground_pixels += 1

    relative = Box(subject.x0 - crop_box.x0, subject.y0 - crop_box.y0, subject.x1 - crop_box.x0, subject.y1 - crop_box.y0)
    margins = {
        "left": relative.x0,
        "right": crop.width - relative.x1,
        "top": relative.y0,
        "bottom": crop.height - relative.y1,
    }
    subject_center_x = (relative.x0 + relative.x1) / 2
    subject_center_y = (relative.y0 + relative.y1) / 2
    center_offset = {
        "x": round((subject_center_x - crop.width / 2) / crop.width, 4),
        "y": round((subject_center_y - crop.height / 2) / crop.height, 4),
    }
    forbidden_pixels = count_forbidden_pixels(
        crop,
        threshold,
        background,
        validation.get("forbiddenForeground", []),
    )
    passes = (
        edge_foreground_pixels == 0
        and abs(center_offset["x"]) <= max_center_offset
        and abs(center_offset["y"]) <= max_center_offset
        and forbidden_pixels <= max_forbidden_pixels
    )
    return {
        "width": crop.width,
        "height": crop.height,
        "foregroundPixels": foreground_pixels,
        "edgeForegroundPixels": edge_foreground_pixels,
        "forbiddenForegroundPixels": forbidden_pixels,
        "margins": margins,
        "centerOffset": center_offset,
        "passes": passes,
    }


def draw_validation_sheet(
    image: Image.Image,
    crop: Image.Image,
    crop_box: Box,
    output_path: Path,
    title: str,
) -> None:
    source_max = (1040, 640)
    crop_max = (430, 430)
    margin = 36
    gutter = 34
    header_height = 58

    source_scale = min(source_max[0] / image.width, source_max[1] / image.height)
    source_size = (round(image.width * source_scale), round(image.height * source_scale))
    source_preview = image.resize(source_size, Image.Resampling.LANCZOS)

    crop_scale = min(crop_max[0] / crop.width, crop_max[1] / crop.height)
    crop_size = (round(crop.width * crop_scale), round(crop.height * crop_scale))
    crop_preview = crop.resize(crop_size, Image.Resampling.LANCZOS)

    canvas_width = margin * 2 + source_size[0] + gutter + crop_max[0]
    canvas_height = margin * 2 + header_height + max(source_size[1], crop_size[1])
    sheet = Image.new("RGB", (canvas_width, canvas_height), (248, 248, 248))
    draw = ImageDraw.Draw(sheet)

    draw.text((margin, 20), title, fill=(28, 35, 42))
    draw.text((margin, 40), "Original reference with crop box", fill=(88, 94, 100))
    crop_x = margin + source_size[0] + gutter
    draw.text((crop_x, 40), "Extracted crop", fill=(88, 94, 100))

    source_x = margin
    source_y = margin + header_height
    sheet.paste(source_preview, (source_x, source_y))
    rect = [
        source_x + round(crop_box.x0 * source_scale),
        source_y + round(crop_box.y0 * source_scale),
        source_x + round(crop_box.x1 * source_scale),
        source_y + round(crop_box.y1 * source_scale),
    ]
    for offset in range(3):
        draw.rectangle(
            [rect[0] - offset, rect[1] - offset, rect[2] + offset, rect[3] + offset],
            outline=(230, 49, 35),
        )

    crop_y = source_y + max(0, (source_size[1] - crop_size[1]) // 2)
    sheet.paste(crop_preview, (crop_x, crop_y))
    draw.rectangle(
        [crop_x - 1, crop_y - 1, crop_x + crop_size[0] + 1, crop_y + crop_size[1] + 1],
        outline=(180, 186, 192),
    )

    output_path.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(output_path)


def normalize_spec(raw: dict[str, Any], index: int) -> dict[str, Any]:
    key = raw.get("key")
    if not key:
        raise ValueError(f"crops[{index}] is missing key")
    if not raw.get("output"):
        raise ValueError(f"{key}: missing output")
    search = raw.get("searchBox")
    if not search:
        raise ValueError(f"{key}: missing searchBox")
    for field in ("x", "y", "width", "height"):
        if not isinstance(search.get(field), int):
            raise ValueError(f"{key}: searchBox.{field} must be an integer")
    if raw.get("cropBox"):
        for field in ("x", "y", "width", "height"):
            if not isinstance(raw["cropBox"].get(field), int):
                raise ValueError(f"{key}: cropBox.{field} must be an integer")
    return raw


def main() -> None:
    args = parse_args()
    spec_path = project_path(args.spec)
    config = json.loads(spec_path.read_text())
    source_path = project_path(config["source"])
    output_dir = project_path(config["outputDir"])
    output_dir.mkdir(parents=True, exist_ok=True)
    validation_sheet_dir = project_path(config["validationSheetDir"]) if config.get("validationSheetDir") else None

    image = Image.open(source_path).convert("RGB")
    background = tuple(config.get("background") or sample_background(image, config.get("backgroundSampleBlocks")))
    report: dict[str, Any] = {
        "source": str(source_path.relative_to(ROOT)),
        "spec": str(spec_path.relative_to(ROOT)),
        "background": list(background),
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "crops": [],
    }

    for index, raw in enumerate(config["crops"]):
        spec = normalize_spec(raw, index)
        search_box = Box.from_search(spec["searchBox"])
        mask = foreground_mask(image, search_box, spec, background)
        components = connected_components(mask, search_box, spec.get("minComponentArea", 35))
        if not components:
            raise RuntimeError(f"{spec['key']}: no foreground components found")
        subject = union_box(components)
        crop_box = Box.from_search(spec["cropBox"]) if spec.get("cropBox") else centered_crop_box(subject, spec, image.size)
        crop = image.crop((crop_box.x0, crop_box.y0, crop_box.x1, crop_box.y1))
        output_path = output_dir / spec["output"]
        crop.save(output_path)
        validation_sheet_path = None
        if validation_sheet_dir:
            validation_sheet_path = validation_sheet_dir / f"{spec['key']}.png"
            draw_validation_sheet(image, crop, crop_box, validation_sheet_path, spec["key"])
        validation = validate_crop(image, spec, crop_box, subject, background)
        item = {
            "key": spec["key"],
            "output": str(output_path.relative_to(ROOT)),
            "searchBox": spec["searchBox"],
            "componentCount": len(components),
            "subjectBox": subject.to_json(),
            "cropBox": crop_box.to_json(),
            "validation": validation,
            "note": spec.get("note", ""),
        }
        if validation_sheet_path:
            item["validationSheet"] = str(validation_sheet_path.relative_to(ROOT))
        report["crops"].append(item)
        status = "ok" if validation["passes"] else "failed"
        print(f"{status} {spec['key']}: {spec['output']} {validation['width']}x{validation['height']}")

    report_path = output_dir / config.get("report", "crop-report.json")
    report_path.write_text(json.dumps(report, indent=2) + "\n")
    print(f"report: {report_path.relative_to(ROOT)}")
    failed = [item["key"] for item in report["crops"] if not item["validation"]["passes"]]
    if failed:
        raise RuntimeError(f"Crop validation failed: {', '.join(failed)}")


if __name__ == "__main__":
    main()
