# Berkshire Hathaway Q1 FY26 Icon Crop Validation

Source image: `input/processed/berkshire-hathaway-q1-fy26.png`

## Accepted crops

- `berkshire-hathaway-company-wordmark` (`crops/company-wordmark.png`): accepted. The Berkshire Hathaway wordmark is complete, visually centered, and isolated from the title, revenue label, flows, and publisher marks.
- `berkshire-hathaway-business-insurance-cluster` (`crops/business-insurance-cluster.png`): accepted. The GEICO and Berkshire insurance logo cluster is complete, centered, and isolated from the Insurance label, values, and flow marks.
- `berkshire-hathaway-business-bnsf-logo` (`crops/business-bnsf-logo.png`): accepted. The BNSF Railway logo is complete, centered, and isolated from the BNSF label, values, and flow marks.
- `berkshire-hathaway-business-bhe-logo` (`crops/business-bhe-logo.png`): accepted. The BHE triangular logo is complete, centered, and isolated from the BHE label, values, and flow marks.
- `berkshire-hathaway-business-pilot-logo` (`crops/business-pilot-logo.png`): accepted. The Pilot wordmark is complete, centered, and isolated from the Pilot label, values, and flow marks.
- `berkshire-hathaway-business-manufacturing-cluster` (`crops/business-manufacturing-cluster.png`): accepted. The PCC and Lubrizol manufacturing logo cluster is complete, centered, and isolated from the Manufacturing label, values, and flow marks.
- `berkshire-hathaway-business-mclane-logo` (`crops/business-mclane-logo.png`): accepted. The McLane logo is complete, centered, and isolated from the McLane label, values, and flow marks.
- `berkshire-hathaway-business-services-retailing-cluster` (`crops/business-services-retailing-cluster.png`): accepted. The FlightSafety, NetJets, Borsheims, and See's Candies cluster is complete, centered, and isolated from the Services & retailing label, values, publisher marks, website, and social badge.

## Skipped source marks

- Source publisher marks at the bottom of the image (`HOW THEY MAKE MONEY`, `appeconomyinsights.com`, and the App Economy Insights badge) were intentionally excluded as attribution, not Berkshire Hathaway or business-segment semantics.
- No separate crop was created for the generic source Sankey mark beside `HOW THEY MAKE MONEY`; it is publisher branding, not a Berkshire business or segment icon.

## Runtime mode

All accepted crops passed `scripts/extract_icon_crops.py` validation. The validation sheets show the original source image, highlighted crop boxes, and extracted transparent crops. The `icon-references/` crops remain reusable review/conversion references. `data/assets/raster-annotations/berkshire-hathaway/` contains the explicit runtime image-annotation copies used by `berkshire-hathaway-q1-fy26` in image embedding mode.

All semantically relevant Berkshire Hathaway company and business/segment icon clusters visible in the source image are accounted for.
