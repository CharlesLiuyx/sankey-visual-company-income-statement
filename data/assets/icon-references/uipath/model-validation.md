# UiPath Q1 FY27 Icon Crop Validation

Source: `input/processed/uipath-q1-fy27.png`

Crop spec: `input/icon-crop-specs/uipath-q1-fy27.json`

Validation command:

```sh
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/uipath-q1-fy27.json
```

## Accepted Crops

- `uipath-company-wordmark` -> `crops/company-wordmark.png`
  - Complete subject structure: pass.
  - Centered subject: pass.
  - No unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts: pass.
  - Script validation: pass (`edgeForegroundPixels: 0`, `centerOffset: { "x": 0.0, "y": 0.0 }`).

## Vector Asset

- Reusable vector: inline `uipathLogo` SVG helper in `data/datasets/uipath-q1-fy27.js`.
- Rendered reference: `validation-sheets/company-logo-vector.png`.
- Vector diff image: `validation-sheets/company-logo-vector-diff-x4.png`.
- Crop-aligned vector diff over the source background:
  - `mae`: 16.8437
  - `similarity`: 0.933946
  - `maxChannelDiff`: 233
  - `samePixelRatio`: 0.583377
  - `changedPixelRatio`: 0.416623
  - `diffBoundingBox`: `{ "x": 25, "y": 24, "width": 459, "height": 174 }`
- Accepted residuals: the runtime chart uses pure SVG rectangles and local text rendering instead of embedding the proprietary bitmap wordmark. The mark remains complete, centered, unclipped, orange, and visually recognizable.

## Scope Notes

- The source image has no UiPath-internal business or segment icon clusters.
- The bottom-left "HOW THEY MAKE MONEY" mark, `appeconomyinsights.com`, and the bottom-right APP ECONOMY INSIGHTS badge are publisher/attribution marks and were intentionally skipped.
- The crop is retained as a reference/conversion asset only and is not used as a runtime raster asset.
