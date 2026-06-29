# Shopify Q1 FY26 Icon Crop Validation

Source: `input/processed/shopify-q1-fy26.png`

Spec: `input/icon-crop-specs/shopify-q1-fy26.json`

Validation date: 2026-06-29

## Accepted Crops

- `shopify-company-bag` -> `crops/company-bag.png`
  - Pass. The Shopify bag is fully included, centered, and free of title text, revenue text, flows, and publisher branding.
- `shopify-merchant-solutions-cluster` -> `crops/merchant-solutions-cluster.png`
  - Pass. The Merchant Solutions branded cluster is complete, centered, and excludes surrounding revenue labels, connectors, and publisher marks.
- `shopify-plus-wordmark` -> `crops/shopify-plus-wordmark.png`
  - Pass. The Shopify Plus wordmark is complete, centered, and excludes the adjacent value/Y/Y text, connector, and node.

## Skipped Source Regions

- `other-revenue-segment`: skipped because the source has no independent icon cluster for Other.
- `publisher-how-they-make-money`: skipped because it is publisher branding.
- `publisher-app-economy-insights`: skipped because the website URL, social badge, and footer logo are attribution content.

All semantically relevant company and business/segment icon clusters visible in the source image are accounted for.
