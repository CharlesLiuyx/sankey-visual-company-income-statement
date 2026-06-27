# DigitalOcean Q1 FY26 Icon Crop Validation

Source: `input/processed/digital-ocean-q1-fy26.png`

## Accepted Crops

- `digital-ocean-company-logo` -> `crops/company-logo.png`
  - Complete subject structure: pass.
  - Centered subject: pass.
  - No unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts: pass.
  - Script validation: pass (`edgeForegroundPixels: 0`, `centerOffset: { "x": -0.0025, "y": 0.0 }`).

## Vector Asset

- Reusable vector: `SANKEY_BUSINESS_ICONS.digitalOceanCompanyLogo` in `src/icons.js`.
- Rendered reference: `validation-sheets/company-logo-vector.png`.
- Vector diff image: `validation-sheets/company-logo-vector-diff-x4.png`.
- Crop-aligned vector diff over the source background:
  - `mae`: 19.3849
  - `similarity`: 0.923981
  - `maxChannelDiff`: 242
  - `samePixelRatio`: 0.685493
  - `changedPixelRatio`: 0.314507
  - `diffBoundingBox`: `{ "x": 11, "y": 6, "width": 388, "height": 289 }`
- Accepted residuals: source font and official logo curvature are approximated with pure SVG/text geometry; the asset is complete, centered, unclipped, and visually recognizable.

## Scope Notes

- The source image has no company-internal business or segment icon clusters; the regional revenue labels are text categories, not reusable business icons.
- Publisher/creator marks, the website URL, social/attribution badges, and the "How They Make Money" mark were intentionally skipped.
- The crop is retained as a reference/conversion asset only and is not used as a runtime raster asset.
