# Costco Q3 FY26 Icon Crop Validation

Dataset: `costco-q3-fy26`
Source image: `input/processed/costco-q3-fy26.png`
Spec: `input/icon-crop-specs/costco-q3-fy26.json`

## Accepted Crops

- `costco-company-wordmark` -> `crops/company-wordmark.png`
  - Validation sheet: `validation-sheets/costco-company-wordmark.png`
  - Result: Pass. The full Costco Wholesale wordmark is included, centered, and separated from the title, chart labels, flows, and publisher marks.
- `costco-membership-card-cluster` -> `crops/membership-card-cluster.png`
  - Validation sheet: `validation-sheets/costco-membership-card-cluster.png`
  - Result: Pass. Both Gold Star Member and Executive Member cards are included, centered, and separated from the Membership Fee label/value, KPI cards, flows, and publisher marks.

## Skipped Regions

- Bottom-left "How They Make Money" mark, bottom-center website, and bottom-right App Economy Insights mark are publisher/attribution elements and intentionally excluded.
- Bottom KPI cards are chart annotations, not reusable company or business icon assets.

All semantically relevant company and membership-card icon clusters in the source image are accounted for.
