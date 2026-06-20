# SpaceX FY25 Icon Crop Validation

Source image: `input/processed/spacex-fy25.png`

Spec: `input/icon-crop-specs/spacex-fy25.json`

Generated report: `data/assets/icon-references/spacex/crop-report.json`

## Accepted Crops

- `spacex-company-wordmark` -> `crops/company-wordmark.png`
  - Pass: SpaceX wordmark letterform is complete, centered, and isolated from the blue title text. The trailing launch arc is intentionally excluded where it overlaps the title.
- `spacex-business-space-rocket` -> `crops/business-space-rocket.png`
  - Pass: rocket illustration is complete and centered. The Space segment label, values, and connector marks are excluded.
- `spacex-business-connectivity-starlink` -> `crops/business-connectivity-starlink.png`
  - Pass: Starlink icon/wordmark cluster is complete and centered. The Connectivity label, revenue value, and Sankey node are excluded.
- `spacex-business-ai-cluster` -> `crops/business-ai-cluster.png`
  - Pass: xAI/Grok/X AI business cluster is complete and centered. The AI label, revenue value, and Sankey node are excluded.

All accepted crops have `validation.passes: true` in `crop-report.json`.

## Skipped Source Regions

- `publisher-how-they-make-money`: source publisher branding, not part of SpaceX income-statement semantics.
- `publisher-app-economy-insights`: source publisher branding, website URL, social badge, and footer logo.
