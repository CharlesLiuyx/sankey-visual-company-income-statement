# Airbnb Icon Crop Validation

Dataset: `airbnb-q1-fy26`

## Accepted Crops

- `airbnb-company-logo` -> `crops/company-logo.png`
  - Validation sheet: `validation-sheets/airbnb-company-logo.png`
  - Result: pass
  - Visual check: the Airbnb app icon is complete, visually centered, and free of title fragments, revenue labels, connector fragments, chart marks, or publisher branding.
- `airbnb-region-north-america` -> `crops/region-north-america.png`
  - Validation sheet: `validation-sheets/airbnb-region-north-america.png`
  - Result: pass
  - Visual check: the North America house/tree/waves icon cluster is complete, visually centered, and free of label text, values, connector fragments, or neighboring icon parts.
- `airbnb-region-emea` -> `crops/region-emea.png`
  - Validation sheet: `validation-sheets/airbnb-region-emea.png`
  - Result: pass
  - Visual check: the EMEA tree/mountain/path icon cluster is complete, visually centered, and free of label text, values, connector fragments, or neighboring icon parts.
- `airbnb-region-latam` -> `crops/region-latam.png`
  - Validation sheet: `validation-sheets/airbnb-region-latam.png`
  - Result: pass
  - Visual check: the LATAM umbrella/sun icon cluster is complete, visually centered, and free of label text, values, connector fragments, or neighboring icon parts.
- `airbnb-region-apac` -> `crops/region-apac.png`
  - Validation sheet: `validation-sheets/airbnb-region-apac.png`
  - Result: pass
  - Visual check: the APAC island/palm/waves icon cluster is complete, visually centered, and free of label text, values, connector fragments, or neighboring icon parts.

## Skipped Regions

- Publisher "How they make money" footer mark: skipped as source publisher branding.
- App Economy Insights website, social badge, and footer logo: skipped as source publisher branding.
- Region text labels: chart text only, not reusable icon reference assets.
