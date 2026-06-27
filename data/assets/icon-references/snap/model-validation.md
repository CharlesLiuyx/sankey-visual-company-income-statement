# Snap Q1 FY26 Icon Crop Validation

Source image: `input/processed/snap-q1-fy26.png`  
Spec: `input/icon-crop-specs/snap-q1-fy26.json`

## Accepted Crops

| Key | Crop | Validation sheet | Result |
| --- | --- | --- | --- |
| `snap-company-logo` | `data/assets/icon-references/snap/crops/company-logo.png` | `data/assets/icon-references/snap/validation-sheets/snap-company-logo.png` | Pass |

## Visual Checks

- `snap-company-logo`: The yellow rounded-square Snap logo and ghost mark are fully included, visually centered, and free of unrelated text, Sankey paths, connector fragments, watermarks, or neighboring icon parts.

## Vector Asset Check

- Runtime vector asset: `src/icons.js` / `SANKEY_BUSINESS_ICONS.snapLogo`.
- The d3 runtime references the vector asset through `meta.logoSvg`; the crop PNG is not referenced by the rendered chart.
- Vector render compared against `data/assets/icon-references/snap/crops/company-logo.png` after compositing both images on the source background color `#f2f2f2`.
- Metrics: `mae=14.5232`, `similarity=0.943046`, `rootMeanSquareError=55.3266`, `maxChannelDiff=255`, `samePixelRatio=0.254909`, `changedPixelRatio=0.745091`, `diffBoundingBox={x:14,y:10,width:210,height:209}`.
- Accepted residual: the simplified ghost silhouette and browser/SVG antialiasing differ from the source bitmap, but the yellow rounded-square Snap logo and ghost identity are stable, centered, and readable.

## Accounted-For Source Icon Clusters

- Extracted: Snap company logo.
- Skipped: source publisher "How They Make Money" branding, app economy insights website URL, social badge, and App Economy Insights wordmark because they are attribution/publisher marks rather than Snap income-statement semantics.

No company-internal business or segment icon clusters are present in the Snap source image.
