# Microsoft Icon Crop Validation

Company asset folder: `data/assets/icon-references/microsoft/`

The latest `crop-report.json` in this folder is generated from
`input/icon-crop-specs/microsoft-q3-fy26.json` for the ByBiz source image. The
older ByBU validation sheets remain in the same folder because both datasets
share the Microsoft company asset directory.

## Q3 FY26 ByBiz

Source image: `input/processed/microsoft-q3-fy26.png`
Spec: `input/icon-crop-specs/microsoft-q3-fy26.json`
Report: `data/assets/icon-references/microsoft/crop-report.json`

Accepted crops:

- `microsoft-company-logo`: Microsoft four-pane company logo; complete, centered, and free of surrounding label or flow pixels.
- `microsoft-business-server-azure`: Azure-style Server icon; complete and isolated from the Server label and value text.
- `microsoft-business-microsoft-365-commercial`: Microsoft 365 Commercial icon; complete and isolated from label, value text, and connector pixels.
- `microsoft-business-gaming-xbox`: Xbox icon and wordmark; complete and isolated after tightening the right boundary to remove value-text fragments.
- `microsoft-business-linkedin`: LinkedIn app icon; complete, centered, and isolated.
- `microsoft-business-windows-devices`: Windows pane icon; complete, centered, and isolated.
- `microsoft-business-search-bing`: Bing/Search icon; complete and centered after crop-box adjustment.
- `microsoft-business-other-cluster`: Two business icons shown for the Other line; complete and isolated from the Other label, value text, and bottom publisher marks.

## Q3 FY26 ByBU

Source image: `input/processed/microsoft-q3-fy26-by-bu.png`
Spec: `input/icon-crop-specs/microsoft-q3-fy26-by-bu.json`

Accepted crops:

- `microsoft-bybu-company-logo`: Microsoft four-pane company logo above the Revenue hub; complete, centered, and free of surrounding label or flow pixels.
- `microsoft-bybu-productivity-business-processes`: Microsoft 365 and LinkedIn product marks; complete and isolated from the Productivity & Business Processes label, values, and flow marks.
- `microsoft-bybu-intelligent-cloud`: Azure product mark; complete, centered, and isolated from the Intelligent Cloud label, values, and flow marks.
- `microsoft-bybu-more-personal-computing`: Windows and Xbox product marks; complete and isolated from the More Personal Computing label, values, and flow marks.

## Skipped Source Marks

- Bottom-left "HOW THEY MAKE MONEY" publisher branding and decorative mini-Sankey mark.
- Bottom-center `appeconomyinsights.com` website text.
- Bottom-right App Economy Insights account/social branding.

All listed validation sheets were visually reviewed with the original source
image, crop box, and extracted crop visible together. The current
`crop-report.json` shows every ByBiz crop with `validation.passes: true`.
