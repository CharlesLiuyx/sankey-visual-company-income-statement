# Tencent Icon Crop Model Validation

Source reference: `input/pending/tencent-q1-fy26.png`

Validation prompt:

```text
Compare the original reference with the highlighted crop box and the extracted
crop. Validate that the target icon subject is complete, visually centered, and
free of unrelated text, chart marks, connector fragments, watermarks, publisher
branding, neighboring icon parts, or other non-subject content. Return pass only
when all checks pass.
```

| Asset | Validation sheet | Subject complete | Centered | No unrelated content | Result |
| --- | --- | --- | --- | --- | --- |
| `tencent-company-wordmark` | `validation-sheets/tencent-company-wordmark.png` | Pass | Pass | Pass | Pass |
| `tencent-business-gaming-cluster` | `validation-sheets/tencent-business-gaming-cluster.png` | Pass | Pass | Pass | Pass |
| `tencent-business-social-networks-cluster` | `validation-sheets/tencent-business-social-networks-cluster.png` | Pass | Pass | Pass | Pass |
| `tencent-business-marketing-services-cluster` | `validation-sheets/tencent-business-marketing-services-cluster.png` | Pass | Pass | Pass | Pass |
| `tencent-business-fintech-business-services-cluster` | `validation-sheets/tencent-business-fintech-business-services-cluster.png` | Pass | Pass | Pass | Pass |

Notes:

- `crops/company-wordmark.png` contains the full Tencent wordmark and
  excludes the revenue label, title text, nearby Sankey flow, and publisher
  marks.
- `crops/business-gaming-cluster.png` contains the full Gaming icon/logo cluster
  and excludes the business label, values, connectors, and adjacent clusters.
- `crops/business-social-networks-cluster.png` contains only the Social Networks
  icon cluster and excludes the business label, values, connectors, and adjacent
  business clusters.
- `crops/business-marketing-services-cluster.png` contains only the
  Marketing Services icon cluster and excludes the business label, values,
  connectors, and adjacent business clusters.
- `crops/business-fintech-business-services-cluster.png` contains only
  the FinTech & Business Services icon cluster and excludes the business label,
  values, connectors, and adjacent business clusters.
- `Others` has no independent business icon cluster in the source. The bottom
  "How they make money" mark is publisher/format branding and is intentionally
  excluded.
