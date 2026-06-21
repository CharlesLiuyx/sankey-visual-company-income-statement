# JD.com Q1 FY26 Icon Crop Validation

Source image: `input/processed/jd-com-q1-fy26.png`
Spec: `input/icon-crop-specs/jd-com-q1-fy26.json`
Report: `data/assets/icon-references/jd-com/crop-report.json`

## Accepted Crops

- `jd-com-company-wordmark` -> `crops/company-wordmark.png`
- `jd-com-business-retail-jdcom` -> `crops/business-retail-jdcom.png`
- `jd-com-business-jd-health` -> `crops/business-jd-health.png`
- `jd-com-business-logistics` -> `crops/business-logistics.png`
- `jd-com-business-new-businesses-cluster` -> `crops/business-new-businesses-cluster.png`

All accepted crops passed `scripts/extract_icon_crops.py` validation. The validation sheets show the source image, highlighted crop box, and extracted transparent crop. The main icon structures are complete, visually centered, and isolated from values, connector fragments, financial labels, publisher marks, and neighboring icon clusters.

## Skipped Source Elements

- The `JD Retail`, `JD Logistics`, and `New businesses` segment names are text labels rather than reusable icons.
- The source publisher block `HOW THEY MAKE MONEY`, the mini-Sankey mark, `appeconomyinsights.com`, and the App Economy Insights badge are attribution or explanatory marks and are intentionally excluded.

## Notes

- The JD Logistics crop was tightened after visual review to remove residual operating-margin text below the logo.
- `icon-references/` crops remain reusable review/conversion references.
- `data/assets/raster-annotations/jd-com/` contains the explicit runtime image-annotation copies used by `jd-com-q1-fy26` in image embedding mode.
