# Synopsys Q2 FY26 Icon Crop Validation

Source image: `input/processed/synopsys-q2-fy26.png`
Spec: `input/icon-crop-specs/synopsys-q2-fy26.json`

## Accepted crops

- `synopsys-company-wordmark` -> `crops/company-wordmark.png`
  - Main structure fully included, including the registered mark.
  - Wordmark is visually centered with adequate padding.
  - No unrelated title text, chart marks, connector fragments, publisher branding, website text, or social/account branding included.
  - `crop-report.json` validation passes: true.

## Skipped source marks

- "HOW THEY MAKE MONEY", `appeconomyinsights.com`, and "APP ECONOMY INSIGHTS" are publisher/source attribution marks and are intentionally excluded from runtime output.
- The source image contains no independent Synopsys business/segment icon clusters beyond the company wordmark.
