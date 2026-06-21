# TSMC Q1 FY26 Icon Crop Validation

Source: `input/processed/tsmc-q1-fy26.png`
Spec: `input/icon-crop-specs/tsmc-q1-fy26.json`

## Accepted Crops

- `company-logo.png`: pass. The TSMC wafer logo, wordmark, and underline are complete, centered, and free of adjacent Revenue text, title pixels, chart links, or publisher marks.

## Skipped Source Elements

- Business segment labels: skipped because the source uses plain text labels without independent business icon clusters.
- Publisher marks, website URL, social badge, and "how they make money" branding: skipped as non-company attribution content.
