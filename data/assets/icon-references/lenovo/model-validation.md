# Lenovo Q4 FY26 Icon Crop Validation

Validated against `data/assets/icon-references/lenovo/validation-sheets/lenovo-company-wordmark.png`.

## Accepted Crops

- `lenovo-company-wordmark` -> `crops/company-wordmark.png`
  - Main Lenovo wordmark is fully included.
  - Main structure is visually centered within the crop.
  - No unrelated title text, chart marks, connector fragments, website URL, or publisher attribution is included.
  - `crop-report.json` validation passed with `passes: true`.

## Skipped Source Regions

- `publisher-how-they-make-money`: source publisher branding, not Lenovo income-statement semantics.
- `publisher-app-economy-insights`: source publisher branding, website URL, social badge, and footer logo.

No Lenovo business/segment icon clusters are present in the source chart beyond text labels.
