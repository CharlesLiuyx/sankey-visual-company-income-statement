# Paramount Q1 FY26 Icon Crop Validation

Source: `input/processed/paramount-q1-fy26.png`
Spec: `input/icon-crop-specs/paramount-q1-fy26.json`

Validated on 2026-06-27 from generated validation sheets.

## Accepted Crops

- `company-wordmark.png`: Paramount Skydance company wordmark. The full wordmark and tagline are included, centered, and free of title, chart text, connector fragments, and publisher marks.
- `business-filmed-entertainment-cluster.png`: Filmed Entertainment brand cluster with Paramount and Nickelodeon. The cluster is complete and excludes segment text, values, margin notes, chart marks, and publisher marks.
- `business-tv-media-cluster.png`: TV Media brand cluster with CBS, Showtime, MTV, Paramount Network, and Nickelodeon. The crop was narrowed after initial review to remove a gray margin-text digit; the accepted crop is complete and free of unrelated text or chart marks.
- `business-direct-to-consumer-cluster.png`: Direct-to-consumer app and brand cluster with Paramount+, Showtime, Pluto TV, and BET+. The cluster is complete and excludes segment text, values, margin notes, chart marks, and publisher marks.

## Skipped Source Regions

- Bottom `HOW THEY MAKE MONEY`, `appeconomyinsights.com`, and `APP ECONOMY INSIGHTS` publisher/attribution marks were intentionally excluded.
- The Paramount+ subscriber/ARPU card is a semantic chart annotation and is redrawn as SVG/text in the dataset rather than cropped as an icon asset.

All accepted crops pass `scripts/extract_icon_crops.py` validation and were written as reference crops plus runtime raster annotation copies.
