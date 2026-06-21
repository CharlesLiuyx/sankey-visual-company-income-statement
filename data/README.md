# Data Directory

The `data/` directory is the source of truth for dataset records and reusable
data-adjacent assets.

English fields are the canonical/default data. Runtime i18n comes from
`src/i18n.js` plus optional `i18n.<language>` overlays in dataset adapters,
financial SSOT records, and company metadata records. Keep localized overlays
display-only: text and language-specific text layout adjustments are allowed;
financial values, links, node geometry, and verification semantics are not.

```text
data/
  README.md
  schema.md
  income-statements.js     # pure financial-statement SSOT
  company-metadata.js      # company profile SSOT
  datasets/
    <dataset-key>.js       # registered Sankey dataset adapters
  assets/
    icon-references/       # reusable icon reference crops and validation
```

Keep registered dataset adapters at `data/datasets/<dataset-key>.js`. The viewer,
standalone builder, and verification scripts load these files directly from
`index.html`, and the project workflow documents this path as the stable
dataset convention.

`company-metadata.js` powers both the Table company profile and the Company
navigator sort modes. In addition to the verifier-required profile fields, keep
`founded` and public-company `marketCap.valueUsd/asOf/sourceUrl` populated when
reliable sources are available. Latest net profit for sorting stays in
`income-statements.js`, not company metadata.

Use `data/assets/icon-references/<company>/` for reusable company and business
icon reference crops. These crops are conversion references only; d3 output must
use SVG/vector assets and must not embed these PNG crops.

For each company icon-reference folder, keep this shape:

```text
data/assets/icon-references/<company>/
  crops/
  validation-sheets/
  crop-report.json
  model-validation.md
```

The crop spec that regenerates these files belongs in
`input/icon-crop-specs/<dataset-key>.json`.
