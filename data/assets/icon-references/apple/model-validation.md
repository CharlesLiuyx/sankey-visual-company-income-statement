# Apple Q2 FY26 Icon Crop Validation

Source: `input/processed/apple-q2-fy26.png`
Spec: `input/icon-crop-specs/apple-q2-fy26.json`

## Accepted Crops

- `company-logo.png`: pass. The Apple logo is complete, centered, and free of unrelated text or chart marks.
- `business-iphone-wordmark.png`: pass. The iPhone wordmark cluster is complete, centered, and excludes the adjacent flow node.
- `business-wearables-wordmark.png`: pass. The Apple Watch / AirPods wordmark cluster is complete, centered, and excludes adjacent values and links.
- `business-services-app-cluster.png`: pass. The seven Services app icons are complete, centered, and exclude the publisher attribution block below.

## Skipped Source Elements

- Mac and iPad: skipped because the source uses plain text labels without an independent business icon cluster.
- Publisher marks, website URL, social badge, and "how they make money" branding: skipped as non-company attribution content.
