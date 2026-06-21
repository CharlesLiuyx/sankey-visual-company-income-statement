# Amazon Q1 FY26 Icon Crop Validation

Source image: `input/processed/amazon-q1-fy26.png`
Spec: `input/icon-crop-specs/amazon-q1-fy26.json`
Report: `data/assets/icon-references/amazon/crop-report.json`

## Accepted Crops

- `amazon-company-wordmark` -> `crops/company-wordmark.png`
- `amazon-business-online-stores` -> `crops/business-online-stores.png`
- `amazon-business-physical-store` -> `crops/business-physical-store.png`
- `amazon-business-advertising` -> `crops/business-advertising.png`
- `amazon-business-subscription` -> `crops/business-subscription.png`
- `amazon-business-aws-left` -> `crops/business-aws-left.png`
- `amazon-business-aws-callout` -> `crops/business-aws-callout.png`

All accepted crops passed `scripts/extract_icon_crops.py` validation. The validation sheets show the original source image, the highlighted crop box, and the extracted transparent crop. The main icon structures are included and isolated from values, flow marks, publisher marks, and neighboring financial labels.

## Skipped Source Elements

- The left-side `Other` revenue line is text-only and has no independent business icon.
- The callout `Other` text is not an icon and was excluded from the small AWS callout crop.
- `HOW THEY MAKE MONEY`, the mini-Sankey mark, `appeconomyinsights.com`, the App Economy Insights badge, and social/publisher branding are attribution or explanatory marks, not company income-statement semantics.

## Notes

- Physical Store, Advertising, Subscription, and the small AWS callout are close to adjacent labels in the source image. Their crop specs deliberately use tight crop boxes and narrower validation border bands to keep unrelated text out while preserving the icon structures.
- Reference crops are conversion aids only and must not be used as runtime d3 render assets.
