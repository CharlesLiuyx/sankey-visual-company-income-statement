# Atlassian icon crop validation

Dataset: `atlassian-q3-fy26`

## Accepted crops

- `atlassian-company-logo` -> `crops/company-logo.png`
  - Validation sheet: `validation-sheets/atlassian-company-logo.png`
  - Result: pass
  - Notes: The Atlassian company logo mark and wordmark are fully included and visually centered. The crop excludes revenue labels, flow marks, the bottom "how they make money" mark, website URL, and App Economy Insights branding.

## Skipped source elements

- Bottom "how they make money" mark, appeconomyinsights.com URL, and App Economy Insights badge are publisher/creator attribution and intentionally excluded.
- Revenue segments in the source image are text-only; no independent business/segment icon clusters are present.
