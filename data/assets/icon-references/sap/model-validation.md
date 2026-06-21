# SAP Q1 FY26 Icon Crop Validation

Source image: `input/processed/sap-q1-fy26.png`

## Accepted Crops

- `sap-company-logo` -> `crops/company-logo.png`
  - Subject: SAP company logo, including the registered mark.
  - Validation sheet: `validation-sheets/sap-company-logo.png`
  - Result: accepted.
  - Checks: the logo is complete, visually centered, and free of chart labels, Sankey marks, title text, website marks, and publisher attribution.

## Skipped Regions

- Publisher "How They Make Money" mark: skipped as source publisher branding.
- `appeconomyinsights.com`, App Economy Insights footer logo/social badge: skipped as publisher attribution and not SAP income-statement semantics.
- Business clusters: none present beyond textual SAP revenue categories.
