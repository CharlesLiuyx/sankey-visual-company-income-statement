# Netflix Q1 FY26 Icon Crop Validation

Validated on 2026-06-21 against `input/processed/netflix-q1-fy26.png`.

## Accepted crops

- `netflix-company-wordmark`: complete Netflix wordmark; centered; no title, chart marks, or publisher branding included.
- `netflix-region-ucan-globe`: complete UCAN globe icon; centered; no region label or value text included.
- `netflix-region-emea-globe`: complete EMEA globe icon; centered; no region label or value text included.
- `netflix-region-latam-globe`: complete LATAM globe icon; centered; no region label or value text included.
- `netflix-region-apac-globe`: complete APAC globe icon; centered; no region label or value text included.

## Skipped source elements

- `publisher-how-they-make-money`: source publisher branding and not part of Netflix's income-statement semantics.
- `publisher-app-economy-insights`: source publisher website URL, social badge, and attribution are not part of Netflix's income-statement semantics.

All accepted crops pass script validation in `crop-report.json` and visual/model validation.
