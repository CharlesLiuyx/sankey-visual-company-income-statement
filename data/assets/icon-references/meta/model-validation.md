# Meta Q1 FY26 Icon Crop Validation

Source: `input/processed/meta-q1-fy26.png`
Spec: `input/icon-crop-specs/meta-q1-fy26.json`

## Accepted Crops

- `meta-company-logo` -> `crops/company-logo.png`
  - Complete Meta logo structure is included.
  - Main structure is visually centered.
  - No unrelated text, chart marks, connector fragments, watermarks, or neighboring icon parts are included.
- `meta-business-family-apps-cluster` -> `crops/business-family-apps-cluster.png`
  - Facebook, Instagram, WhatsApp, and Messenger icon cluster is fully included.
  - The four-icon cluster is visually centered.
  - No adjacent revenue labels, chart bars, connector fragments, or publisher marks are included.
- `meta-business-reality-labs-quest-wordmark` -> `crops/business-reality-labs-quest-wordmark.png`
  - Meta Quest wordmark and symbol are fully included.
  - Wordmark is visually centered.
  - No adjacent Reality Labs label, connector fragments, or publisher marks are included.

## Explicitly Skipped

- `appeconomyinsights.com` website text.
- `APP ECONOMY INSIGHTS` publisher mark.
- `HOW THEY MAKE MONEY` attribution/brand mark.
- Generic source-chart attribution badges and social/creator branding.
