# Pinterest Q1 FY26 Icon Crop Validation

Source image: `input/processed/pinterest-q1-fy26.png`  
Spec: `input/icon-crop-specs/pinterest-q1-fy26.json`

## Accepted Crops

| Key | Crop | Validation sheet | Result |
| --- | --- | --- | --- |
| `pinterest-company-logo` | `data/assets/icon-references/pinterest/crops/company-logo.png` | `data/assets/icon-references/pinterest/validation-sheets/pinterest-company-logo.png` | Pass |

## Visual Checks

- `pinterest-company-logo`: The red Pinterest mark and surrounding circular badge are complete, visually centered, and free of unrelated title text, labels, chart marks, connector fragments, watermarks, or neighboring icon parts.

## Vector Asset Check

- Runtime vector asset: `src/icons.js` / `SANKEY_BUSINESS_ICONS.pinterestLogo`.
- The d3 runtime references the vector asset through `meta.logoSvg`; the crop PNG is not referenced by the rendered chart.
- Vector render compared against `data/assets/icon-references/pinterest/crops/company-logo.png` after compositing both images on the source background color `#f2f2f2`.
- Metrics: `mae=34.0793`, `similarity=0.866356`, `rootMeanSquareError=81.2586`, `maxChannelDiff=255`, `samePixelRatio=0.274731`, `changedPixelRatio=0.725269`, `diffBoundingBox={x:7,y:0,width:219,height:214}`.
- Accepted residual: the reusable SVG brand path and browser antialiasing differ from the source bitmap, but the Pinterest mark remains complete, centered, and readable inside the circular badge.

## Accounted-For Source Icon Clusters

- Extracted: Pinterest company logo.
- Skipped: source publisher "How They Make Money" branding, app economy insights website URL, social badge, and App Economy Insights wordmark because they are attribution/publisher marks rather than Pinterest income-statement semantics.

No company-internal business or segment icon clusters are present in the Pinterest source image.
