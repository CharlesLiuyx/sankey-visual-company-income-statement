# Marriott Icon Crop Validation

## Accepted Crops

- `crops/company-logo.png`
  - Source: `input/processed/marriott-q1-fy26.png`
  - Spec: `input/icon-crop-specs/marriott-q1-fy26.json`
  - Validation sheet: `validation-sheets/marriott-company-logo.png`
  - Script result: passes automated validation in `crop-report.json`.
  - Visual check: the Marriott logo and wordmark are complete, visually centered, and free of flow labels, connector fragments, KPI cards, watermarks, or neighboring chart marks.

## Skipped Source Regions

- `publisher-how-they-make-money`: source publisher branding, not part of Marriott's income-statement semantics.
- `publisher-app-economy-insights`: source publisher website, social badge, and footer logo are intentionally excluded.
- `publisher-sankey-illustration`: footer illustration belongs to the publisher branding block, not Marriott.
- `marriott-business-clusters`: the source chart does not contain independent company-internal business or segment icon clusters for the revenue or expense lines.
