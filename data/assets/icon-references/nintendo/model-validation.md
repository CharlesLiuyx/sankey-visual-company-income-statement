# Nintendo FY26 Icon Crop Validation

Source image: `input/processed/nintendo-fy26.png`
Spec: `input/icon-crop-specs/nintendo-fy26.json`
Report: `data/assets/icon-references/nintendo/crop-report.json`

## Accepted Crops

All accepted crops were reviewed against their validation sheets on 2026-06-27. The icon subject is complete, visually centered, and free of unrelated chart text, connector fragments, publisher marks, neighboring icons, and attribution content.

| Crop | Validation sheet | Runtime copy | Result |
| --- | --- | --- | --- |
| Nintendo company logo | `data/assets/icon-references/nintendo/validation-sheets/nintendo-company-logo.png` | `data/assets/raster-annotations/nintendo/company-logo.png` | Pass |
| Nintendo Switch controller icon | `data/assets/icon-references/nintendo/validation-sheets/nintendo-switch-console-icon.png` | `data/assets/raster-annotations/nintendo/switch-console-icon.png` | Pass |
| Nintendo Switch wordmark | `data/assets/icon-references/nintendo/validation-sheets/nintendo-switch-wordmark.png` | `data/assets/raster-annotations/nintendo/switch-wordmark.png` | Pass |
| App Store and Google Play icon cluster | `data/assets/icon-references/nintendo/validation-sheets/nintendo-mobile-store-icons.png` | `data/assets/raster-annotations/nintendo/mobile-store-icons.png` | Pass |

## Accounted Skips

- Mario character artwork: skipped as a decorative Nintendo IP illustration rather than an independent financial line or segment icon. A complete rectangular crop also intersects the App Economy Insights controller attribution at the lower right, so it cannot be accepted as a clean reusable crop.
- "HOW THEY MAKE MONEY", `appeconomyinsights.com`, and "APP ECONOMY INSIGHTS": skipped as source publisher attribution.
- Bottom-left miniature Sankey mark and bottom-right controller badge: skipped as source publisher branding.
