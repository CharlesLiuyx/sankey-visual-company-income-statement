# Sony FY25 Icon Crop Validation

Source: `input/processed/sony-fy25.png`
Spec: `input/icon-crop-specs/sony-fy25.json`

## Accepted Crops

- `sony-company-wordmark` -> `crops/company-wordmark.png`
  - Main structure fully included: yes.
  - Visually centered in crop: yes.
  - Unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts included: no.

## Skipped Source Marks

- The bottom-left "How They Make Money" mark, center website, and bottom-right App Economy Insights mark are publisher/attribution branding and intentionally excluded from reusable assets and d3 output.
- The source image contains no company-internal business or segment icon clusters for Sony's segments.
