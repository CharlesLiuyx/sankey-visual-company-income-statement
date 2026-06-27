# Datadog Icon Crop Validation

Source image: `input/processed/datadog-q1-fy26.png`

Crop spec: `input/icon-crop-specs/datadog-q1-fy26.json`

| Crop key | Reference crop | Validation sheet | Result |
| --- | --- | --- | --- |
| `datadog-company-wordmark` | `data/assets/icon-references/datadog/crops/company-wordmark.png` | `data/assets/icon-references/datadog/validation-sheets/datadog-company-wordmark.png` | Pass |

Visual/model check:

- The Datadog dog mark and wordmark are fully included.
- The combined logo subject is visually centered in the crop.
- No chart nodes, connector fragments, revenue labels, title text, website URL, "How They Make Money" mark, or App Economy Insights attribution are included.
- No additional semantically relevant Datadog business or segment icon clusters appear in the source image; bottom publisher and attribution graphics were intentionally skipped.
