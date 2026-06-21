# PDD Holdings Icon Crop Validation

Source image: `input/processed/pdd-holdings-q1-fy26.png`

Crop spec: `input/icon-crop-specs/pdd-holdings-q1-fy26.json`

Validation date: 2026-06-21

Accepted crops:

- `pdd-holdings-company-logo-wordmark`: complete Pinduoduo company logo and wordmark, centered, with no title text, chart marks, connector fragments, or publisher marks.
- `pdd-holdings-business-pinduoduo-app-icon`: complete Pinduoduo app icon, centered, with no nearby labels, connector bars, or adjacent Temu icon pixels.
- `pdd-holdings-business-temu-app-icon`: complete Temu app icon, centered, with no nearby labels, connector bars, or adjacent Pinduoduo icon pixels.

Skipped source elements:

- The bottom `HOW THEY MAKE MONEY` badge, `appeconomyinsights.com`, social/account branding, and App Economy Insights attribution are publisher marks and were intentionally excluded.
- No independent icon is shown for Transaction Services beyond the Pinduoduo/Temu app cluster already extracted from the product area.

All accepted crops pass script validation in `crop-report.json` and visual/model validation against the generated validation sheets. The crops are reference/conversion assets only and are not used in d3 runtime output.
