# NetEase Icon Crop Validation

Source image: `input/processed/netease-q1-fy26.png`

Crop spec: `input/icon-crop-specs/netease-q1-fy26.json`

Validation date: 2026-06-21

Accepted crops:

- `netease-company-wordmark`: complete NetEase company wordmark, centered, with no title text, chart marks, or publisher marks.
- `netease-business-games-cluster`: complete NetEase Games business cluster, including the games wordmark and game app icons, centered, with no values, gross-margin text, connectors, or attribution marks.
- `netease-business-cloud-music`: complete Cloud Music logo/text cluster, centered, with no financial values or chart marks.
- `netease-business-youdao-wordmark`: complete Youdao wordmark, centered, with no financial values or chart marks.
- `netease-business-innovative-cluster`: complete Innovative Businesses and Others product/logo cluster, centered, with no segment label, financial values, gross-margin text, or chart marks.

Skipped source elements:

- The bottom `HOW THEY MAKE MONEY` badge, `appeconomyinsights.com`, social/account branding, and App Economy Insights attribution are publisher marks and were intentionally excluded.

All accepted crops pass script validation in `crop-report.json` and visual/model validation against the generated validation sheets. The `icon-references/` crops remain reusable review/conversion references. `data/assets/raster-annotations/netease/` contains the explicit runtime image-annotation copies used by `netease-q1-fy26` in image embedding mode.
