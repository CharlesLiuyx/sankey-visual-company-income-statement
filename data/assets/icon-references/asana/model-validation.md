# Asana icon crop validation

Reviewed on 2026-06-27.

## Accepted crops

| Crop | Reference crop | Validation sheet | Result |
|------|----------------|------------------|--------|
| `asana-company-logo` | `data/assets/icon-references/asana/crops/company-logo.png` | `data/assets/icon-references/asana/validation-sheets/asana-company-logo.png` | Pass |

## Visual/model checks

- Main structure is fully included: the Asana three-dot symbol and wordmark are complete.
- Main structure is visually centered: `crop-report.json` reports center offset `{ "x": -0.0012, "y": -0.0039 }`.
- No unrelated chart labels, connector fragments, website URL, social badges, source publisher marks, or attribution content are included.
- Relevant icon accounting: the source image contains one semantically relevant company logo cluster. There are no independent company-internal business or segment icon clusters. Bottom source publisher marks, `appeconomyinsights.com`, social badges, and the `How They Make Money` mark are intentionally skipped as non-financial attribution content.

The accepted crop is a reference/conversion asset only. The d3 runtime dataset uses a pure SVG/vector logo and does not reference this crop.
