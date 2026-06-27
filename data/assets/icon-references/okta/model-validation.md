# Okta Q1 FY27 Icon Crop Validation

Source image: `input/processed/okta-q1-fy27.png`

## Accepted Crops

- `okta-company-logo-wordmark`
  - Crop: `data/assets/icon-references/okta/crops/company-logo-wordmark.png`
  - Validation sheet: `data/assets/icon-references/okta/validation-sheets/okta-company-logo-wordmark.png`
  - Report status: passes
  - Visual/model check: accepted. The Okta wordmark is fully included, visually centered, and free of unrelated Revenue text, chart flows, KPI cards, website URL, "How They Make Money" mark, or App Economy Insights attribution.

## Accounted-For Icon Clusters

- Extracted: Okta company logo wordmark.
- Skipped: App Economy Insights mark, appeconomyinsights.com URL, and "How They Make Money" mark because they are source publisher/attribution elements unrelated to Okta income-statement semantics.
- Skipped: no independent company-internal business or segment icon clusters appear for Subscription, Professional services, Interest, Tax, Sales & marketing, Research & development, or General & admin.

## Runtime Use

The crop is a reference/conversion asset only. The dataset renders the Okta wordmark as pure SVG text and does not reference this PNG at runtime.
