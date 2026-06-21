# Samsung icon crop validation

Company asset folder: `data/assets/icon-references/samsung/`

Spec: `input/icon-crop-specs/samsung-q1-fy26.json`

Report: `data/assets/icon-references/samsung/crop-report.json`

## Accepted crops

- `samsung-company-wordmark`: pass. The Samsung wordmark is complete, centered, and isolated from title text, values, flows, and publisher marks.
- `samsung-business-device-solutions-chip-cluster`: pass. The Device Solutions chip/package cluster is complete, centered, and isolated from the label, values, notes, and flow marks.
- `samsung-business-device-experience-device-cluster`: pass. The Device eXperience product cluster is complete and isolated from the label, values, notes, and flow marks; the small connecting strokes are part of the product illustration cluster.
- `samsung-business-display-wordmark`: pass. The Samsung Display wordmark is complete, centered, and isolated from the value, Y/Y note, flow marks, and adjacent Harman logo.
- `samsung-business-harman-wordmark`: pass. The Harman logo/wordmark is complete, centered, and isolated from the value, Y/Y note, flow marks, and bottom publisher marks.

## Skipped source marks

- The bottom-left "How they make money" mark, center website URL, social/account badge, and App Economy Insights attribution are source publisher marks and were intentionally excluded.
- No independent "Other" business segment icon appears in the Samsung source chart beyond the financial Other callout, so no extra business icon crop was created.

All accepted crops passed `scripts/extract_icon_crops.py` validation. The validation sheets show the original source image, highlighted crop box, and extracted transparent crop.
