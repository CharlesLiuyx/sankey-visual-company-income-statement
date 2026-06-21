# Dell Icon Crop Validation

Dataset: `dell-q1-fy27`

Source image: `input/processed/dell-q1-fy27.png`

## Accepted Crops

- `dell-company-wordmark`
  - Output: `crops/company-wordmark.png`
  - Validation sheet: `validation-sheets/dell-company-wordmark.png`
  - Crop-report status: `passes: true`
  - Visual/model review: accepted. The Dell wordmark and TM mark are complete, centered, and free of title text, chart marks, connector fragments, publisher marks, or neighboring icon parts.

## Skipped Source Marks

- `HOW THEY MAKE MONEY`, `appeconomyinsights.com`, App Economy Insights branding, and social/publisher marks are attribution or publisher branding and are intentionally excluded from reusable company/business assets and d3 runtime output.
- The source chart has no independent Dell business/segment icon clusters; the business items are text-only segment labels.
