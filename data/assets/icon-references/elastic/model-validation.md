# Elastic Q4 FY26 Icon Crop Validation

Source image: `input/processed/elastic-q4-fy26.png`

## Accepted Crops

| crop | validation sheet | result | notes |
|---|---|---|---|
| `crops/company-logo-wordmark.png` | `validation-sheets/elastic-company-logo-wordmark.png` | Pass | Elastic company icon and wordmark are complete, visually centered, and free of unrelated chart marks, labels, connector fragments, title text, watermarks, or neighboring icon parts. |

## Semantic Coverage

- Extracted: Elastic company logo and wordmark.
- No company-internal business or segment icon clusters appear in the source chart for Cloud, Other subscription, Subscription, or Service; those are text-only labels.
- Skipped as attribution/non-semantic marks: How They Make Money badge, appeconomyinsights.com URL, and App Economy Insights mark.

## Runtime Use

The crop is a reference/conversion asset only. The d3 runtime uses a pure SVG approximation in the dataset adapter and does not reference this PNG crop.
