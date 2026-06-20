# Icon Crop Specs

Icon extraction is spec-driven so the workflow can be reused across companies.
The Python script contains the generic crop and validation logic; each JSON spec
contains only source-image-specific coordinates, color filters, and output
names.

Run:

```bash
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json
```

Spec conventions:

- `source` points to the full reference PNG used as the visual standard.
- `outputDir` should be `data/assets/icon-references/<company>/`.
- `runtimeOutputDir` may be set to `data/assets/raster-annotations/<company>/`
  when accepted crops are intentionally used as runtime raster annotations. The
  extractor writes compressed runtime copies using each crop's file name, unless
  a crop overrides it with `runtimeOutput`.
- `validationSheetDir` should be
  `data/assets/icon-references/<company>/validation-sheets/` when visual/model
  validation artifacts should be retained.
- Each crop `key` should be stable and company-scoped, for example
  `<company>-company-wordmark` or `<company>-business-<segment>-cluster`.
- Each crop `output` should normally write to `crops/<asset-name>.png` under the
  company output directory.
- `searchBox` should tightly cover the target icon subject and exclude nearby
  labels, values, connectors, publisher marks, and adjacent icon groups.
- Include every semantically relevant company and business/segment icon cluster
  in the source image unless the task explicitly narrows the scope.
- Skip publisher/creator marks, website URLs, social badges, attribution blocks,
  "how they make money" marks, and segments with no independent business icon.
- Use `foreground` color filters only when the search area contains possible
  non-target foreground pixels.
- Use `forbiddenForeground` validation filters for colors that should never
  appear in the final crop, such as nearby label text.
- Crop PNGs and validation sheets are compressed by default. The extractor
  writes optimized PNGs, tries palette PNG candidates, and keeps only candidates
  that pass conservative visual-difference limits against the uncompressed crop.
  Runtime raster annotation copies are compressed with the same settings.
  Override this per spec with a top-level `compression` object when a source
  image needs stricter or looser limits, or run with `--no-compress` for a
  lossless debugging pass.
- After each crop is cut, the extractor removes the solid background color and
  writes a transparent PNG by default. It samples the crop corners, finds pixels
  within the configured tolerance, and only removes matching pixels connected to
  the crop edge. Override this per spec or per crop with `backgroundRemoval`, or
  run with `--keep-background` for an opaque debugging pass.
- Keep crops as reference/conversion assets only; convert accepted icons to
  SVG/vector assets before using them in d3 output.

Compression options:

```json
{
  "compression": {
    "enabled": true,
    "paletteColors": [256, 192, 128, 96, 64, 48, 32, 24, 16],
    "maxMeanAbsoluteError": 1.2,
    "maxRootMeanSquareError": 3.0,
    "maxP99AbsoluteError": 12.0,
    "maxMaxChannelDiff": 72
  }
}
```

The generated `crop-report.json` records the chosen compression mode and visual
error metrics for each crop image and validation sheet.

Background removal options:

```json
{
  "backgroundRemoval": {
    "enabled": true,
    "mode": "edge-connected",
    "tolerance": 6
  }
}
```

Use `"backgroundRemoval": false` when a crop must remain opaque. Use
`"mode": "all-matching"` only when all pixels matching the sampled background
color should become transparent, including enclosed holes.

After script validation passes, do a visual/model validation with the generated
validation sheet for each crop. The sheet contains the original reference image,
the highlighted crop box, and the extracted crop. The checklist must confirm:

- complete subject structure;
- centered subject;
- no unrelated text, chart marks, connectors, watermarks, or neighboring icons.

Record the final visual/model result in
`data/assets/icon-references/<company>/model-validation.md`.
