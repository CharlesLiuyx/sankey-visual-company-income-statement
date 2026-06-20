# Reddit Q1 FY26 Icon Crop Validation

Validated on 2026-06-20 against `input/processed/reddit-q1-fy26.png`.

## Accepted Crops

- `reddit-company-wordmark`: complete Reddit wordmark and mascot-head logo; centered; no revenue labels, title fragments, connectors, or publisher marks included.
- `reddit-region-united-states-flag`: complete United States flag icon; centered; no region label or value text included.
- `reddit-region-rest-of-world-globe`: complete globe icon; centered; no Rest of World label or value text included.
- `reddit-company-snoo-mascot`: complete Snoo mascot illustration; centered; no website URL or attribution marks included.

## Explicitly Skipped

- Publisher "How They Make Money" logo and mini Sankey mark.
- Publisher website `appeconomyinsights.com`.
- App Economy Insights footer logo/social badge.

All crop entries in `crop-report.json` show `passes: true`.
