# Disney Q2 FY26 By Segment Icon Crop Validation

Source: `input/processed/disney-q2-fy26-by-segment.png`

Validation date: 2026-06-27

## Accepted Crops

- `disney-company-wordmark`: Pass. The central The Walt Disney Company logo/text cluster is complete, centered, and free of title text, chart nodes, connectors, values, or publisher marks.
- `disney-business-entertainment-streaming-tv-cluster`: Pass. Disney+, Hulu, Disney Channel, ABC, and National Geographic are complete and centered; segment labels, values, chart marks, and attribution are excluded.
- `disney-business-entertainment-content-cluster`: Pass. Marvel Studios, Pixar, and Lucasfilm are complete and centered; segment labels, values, chart marks, and attribution are excluded.
- `disney-business-sports-espn-cluster`: Pass. ESPN and ESPN+ are complete and centered. Adjacent chart-node fragments at the right edge are excluded by the crop spec.
- `disney-business-experiences-parks-cluster`: Pass. Disney Parks, Disney Cruise Line, and Disney Vacation Club are complete and centered; segment labels, values, chart marks, and attribution are excluded.
- `disney-business-experiences-consumer-products-cluster`: Pass. The consumer-products character cluster is complete and centered; the Consumer Products label, values, chart marks, and publisher marks are excluded.

## Skipped Source Marks

- The bottom `HOW THEY MAKE MONEY` mark, `appeconomyinsights.com` URL, and App Economy Insights account/brand block are publisher attribution, not Disney income-statement semantics.
- Right-side SVOD/Other and Parks/Other split callouts are text-only financial annotations without independent reusable business icons.

All semantically relevant Disney company and business/segment icon clusters visible in the source image are accounted for.
