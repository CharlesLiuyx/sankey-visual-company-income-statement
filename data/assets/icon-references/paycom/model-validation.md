# Paycom Q1 FY26 Icon Crop Validation

Source image: `input/processed/paycom-q1-fy26.png`
Spec: `input/icon-crop-specs/paycom-q1-fy26.json`
Report: `data/assets/icon-references/paycom/crop-report.json`

## Accepted Crops

- `paycom-company-logo-wordmark` -> `crops/company-logo-wordmark.png`
  - The Paycom company logo and wordmark are fully included.
  - The main structure is visually centered within the crop.
  - No unrelated title text, chart labels, connector fragments, website URL, or publisher attribution is included.
  - `crop-report.json` validation passes: true.

## Skipped Source Elements

- `publisher-how-they-make-money`: source publisher branding, not Paycom income-statement semantics.
- `publisher-app-economy-insights`: source publisher website URL, social badge, and attribution.
- Business/segment icon clusters: none present in the source chart beyond text-only revenue categories and operating expense labels.
