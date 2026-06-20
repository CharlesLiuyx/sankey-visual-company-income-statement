# The New York Times Q1 FY26 Icon Crop Validation

Validated on 2026-06-20 against `input/processed/nyt-q1-fy26.png`.

## Accepted Crops

- `nyt-company-wordmark`: complete The New York Times company wordmark; centered; no title text, revenue labels, connectors, or publisher marks included.
- `nyt-business-digital-device`: complete Digital device icon; centered; no Digital label, revenue value, or connector fragments included.
- `nyt-business-print-newspapers`: complete Print newspaper stack icon; centered; no Print label, revenue value, or connector fragments included.
- `nyt-business-wirecutter-wordmark`: complete Wirecutter wordmark semantic cue for Other revenue; centered; no Other label, stats cards, or publisher marks included.

## Explicitly Skipped

- Publisher "How They Make Money" logo and mini Sankey mark.
- Publisher website `appeconomyinsights.com`.
- App Economy Insights footer logo/social badge.

All crop entries in `crop-report.json` show `passes: true`.
