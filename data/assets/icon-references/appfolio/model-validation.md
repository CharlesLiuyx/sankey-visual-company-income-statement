# AppFolio Q1 FY26 Icon Crop Validation

Validated on 2026-06-21 against `input/processed/appfolio-q1-fy26.png`.

## Accepted crops

- `appfolio-company-wordmark`: complete AppFolio wordmark; centered; no title, chart marks, values, or publisher branding included.

## Skipped source elements

- `publisher-how-they-make-money`: source publisher branding and not part of AppFolio's income-statement semantics.
- `publisher-app-economy-insights`: source publisher website URL, social badge, and attribution are not part of AppFolio's income-statement semantics.

All accepted crops pass script validation in `crop-report.json` and visual/model validation.
