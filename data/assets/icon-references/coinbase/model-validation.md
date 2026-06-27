# Coinbase Q1 FY26 Icon Validation

## Crops

- `coinbase-logo`: accepted.
  - Reference crop: `data/assets/icon-references/coinbase/crops/coinbase-logo.png`
  - Validation sheet: `data/assets/icon-references/coinbase/validation-sheets/coinbase-logo.png`
  - Subject complete: yes.
  - Subject centered: yes; crop report center offset `x=0.0`, `y=-0.0227`.
  - Unrelated content: none. The source title and publisher/footer marks are excluded.
  - Crop report: `data/assets/icon-references/coinbase/crops/crop-report.json`, `passes: true`.

## Business Clusters

- Extracted: Coinbase company logo.
- Skipped: no independent Coinbase business/segment icon clusters are present in the source image.
- Excluded as non-semantic attribution: "How They Make Money" mark, appeconomyinsights.com URL, and App Economy Insights footer branding.

## Vector Asset

- Runtime vector asset: `SANKEY_BUSINESS_ICONS.coinbaseLogo` in `src/icons.js`.
- Vector output purity: pure SVG circles/rectangle; no `<image>`, bitmap crop, canvas, or source-pixel overlay.
- Icon vector diff against accepted crop on `#f2f2f2` background:
  - `mae`: 7.9152
  - `similarity`: 0.9690
  - `maxChannelDiff`: 254
  - `samePixelRatio`: 0.7207
  - `changedPixelRatio`: 0.2793
  - `diffBoundingBox`: `{ "x": 13, "y": 0, "width": 226, "height": 240 }`
- Accepted residual: antialiasing and small geometric differences around the circular edges and the C-shaped cutout. The logo remains structurally centered, complete, and recognizable.
