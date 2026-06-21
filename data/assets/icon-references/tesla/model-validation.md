# Tesla Q1 FY26 Icon Crop Validation

Source: `input/processed/tesla-q1-fy26.png`
Spec: `input/icon-crop-specs/tesla-q1-fy26.json`

## Accepted Crops

- `company-logo.png`: pass. The Tesla T logo is complete, centered, and free of title text, chart marks, and publisher branding.
- `business-auto-sales-cars.png`: pass. The Auto sales vehicle cluster is complete, centered, and excludes adjacent labels, values, and connectors.
- `business-energy-powerwall.png`: pass. The Powerwall icon is complete, centered, and excludes the overlapping Energy generation & storage label.
- `business-energy-solar-panel.png`: pass. The solar-panel icon is complete, centered, and excludes the overlapping Energy generation & storage label.
- `business-services-charger.png`: pass. The wall-connector Services icon is complete, centered, and excludes adjacent labels, values, and connectors.

## Skipped Source Elements

- Regulatory credits and Leasing: skipped because the source uses plain text labels without independent business icon clusters.
- Publisher marks, website URL, social badge, and "how they make money" branding: skipped as non-company attribution content.
