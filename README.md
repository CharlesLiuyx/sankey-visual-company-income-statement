# sankey-visual-company-income-statement

A small, reusable engine that renders a company's income statement as a polished
Sankey flow diagram — in the style of the NVIDIA "Q1 FY27 Income Statement"
infographic. Green = value retained, red = costs, teal = revenue collection.

Drop in a new company's numbers and you get the same chart.

![what it makes](docs/preview.png)

## Run it

It's a static site for development and local preview. Either:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

…or just **double-click `index.html`** — d3 and d3-sankey are vendored locally
in `vendor/`, so it works offline as long as the repository files are present.

For a single self-contained HTML file that does not depend on sibling CSS, JS,
font, vendor, data, or reference PNG files, build the standalone artifact:

```bash
pnpm build:standalone
pnpm verify:standalone
```

The generated file is
`output/sankey-visual-company-income-statement.html`. It inlines the viewer CSS,
all ordered scripts, local Montserrat font files, and datasets. It does not
inline or request processed reference PNGs; those remain verification inputs
only.

Pick datasets from the left Company / Data point time navigator, and
use the top **Sankey / Table** switch to choose the view. Sankey mode exports
the current d3-sankey chart as SVG/PNG at 2× resolution. Table mode shows the
company metadata table and the period-level income statement table, with CSV
exports for both.

The viewer supports app-wide language switching through `src/i18n.js`. English
data is the canonical verification source, while Sankey and Table mode project
localized display text at runtime. Dataset-specific wording can be refined with
`i18n.<language>` overlays on dataset adapters, financial SSOT records, and
company metadata records.

For fixed-layout Sankey datasets, localizing the node labels is not the same as
localizing the rendered chart text. Any explicit
`layout.labels.*.blocks[].lines[].text`, KPI card text, `annotationsSvg` text,
or other fixed-position SVG copy needs a dataset-level language overlay when it
changes in translation. Acronyms and punctuation-heavy labels such as `R&D`,
`SG&A`, `G&A`, `D&A`, and labels using `&` or money suffixes should be treated
as high-risk strings: either preserve them intentionally or override the exact
localized lines instead of relying on generic phrase replacement.

## Visual loop workflow

Use this workflow when a new reference image is added and the chart needs
another fidelity loop:

1. Put new, unprocessed source PNGs in `input/pending/`.
2. Before processing anything, run the pending guard:

   ```bash
   pnpm check:pending
   ```

   If it reports an exact processed-image match or an existing-key collision,
   stop before moving images, editing data, extracting icons, or running the d3
   loop for that pending image. If you choose a different final dataset key than
   the script's candidate, check that final key against `input/processed/`,
   `data/datasets/`, `data/income-statements.js`, and `index.html` before
   continuing.
3. After processing, move the durable reference image to `input/processed/` and
   name it with the dataset key, for example `salesforce-q1-fy27.png`.
4. Set `meta.referenceImage` on the matching dataset to that processed path.
5. If this is a new company, add the company profile to
   `data/company-metadata.js` first: description, sector, industry, founded
   date, headquarters, fiscal year end, website, ticker/exchange, market cap
   with as-of/source when available, and source URLs.
6. If the source contains company or business/segment icons that need to be
   reproduced, create `input/icon-crop-specs/<dataset-key>.json` and run:

   ```bash
   python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json
   ```

   The spec-driven script writes reusable reference crops to
   `data/assets/icon-references/<company>/crops/`, validation sheets to
   `data/assets/icon-references/<company>/validation-sheets/`, and metrics to
   `crop-report.json`. Review every validation sheet with the original image,
   crop box, and extracted crop visible together, then record the pass/fail
   decision in `model-validation.md`. Extract every semantically relevant
   business cluster unless the task explicitly narrows the scope.
7. Add or update the matching pure-data record in
   `data/income-statements.js`. This file is the comparable financial
   statement SSOT: reported totals, line items, notes, currency and units only,
   with no Sankey layout or render settings.
8. Add localized display text for every non-default language in
   `window.SANKEY_I18N.languageCodes`:
   - `data/datasets/<dataset-key>.js`: `name`, `meta.title`, period labels,
     node labels/notes, and explicit fixed-layout label text.
   - `data/income-statements.js`: financial line-item labels and notes used by
     Table mode.
   - `data/company-metadata.js`: company profile fields when the company is new
     or profile text changes.
   Language overlays may tune text layout such as `titleTextLength`, but should
   not change values, links, node positions, or financial semantics.
   For datasets with fixed `layout.labels`, include localized `layout.labels`
   blocks for every visible text line that should differ from English. Do not
   rely on the global phrase dictionary to translate fixed-position chart text.
   After localization, render the non-default language and inspect the actual
   SVG text bounds for mixed-language leftovers, malformed acronym output,
   overlap, and canvas overflow.
9. Install the pinned local tooling once:

   ```bash
   pnpm install --frozen-lockfile
   pnpm exec playwright install chromium
   ```

10. Run the deterministic data, i18n, and d3 checks:

   ```bash
   pnpm verify:ssot
   pnpm verify:i18n -- --strict <dataset-key>
   pnpm verify:d3 -- <dataset-key>
   ```

For non-default languages, `verify:i18n --strict` confirms overlay coverage but
does not prove that fixed text fits. For edge-sensitive text such as right-side
`anchor: 'start'` labels, left-side `anchor: 'end'` labels, titles, KPI cards,
and annotations, inspect the localized rendered SVG with `getBBox()` or an
equivalent browser check and make sure text stays within
`meta.referenceImage.width` and `meta.referenceImage.height`.

The verifier starts its own static server, renders a bare d3 SVG for the
dataset, screenshots `#chart > svg`, asserts that no source image or unapproved
SVG `<image>` is present, computes pixel metrics against `meta.referenceImage`,
and cleans `compare/`. Datasets that explicitly set
`render.allowRasterAnnotations` may render approved runtime images from
`data/assets/raster-annotations/`. Use `pnpm verify:d3 -- <dataset-key> --keep`
when you need to inspect the candidate PNG.

`compare/` is a scratch directory. Keep incoming assets in `input/pending/` and
stable app references in `input/processed/`; do not rely on old files in
`compare/` between runs.

For a **d3-sankey fidelity loop**, the rendered output under comparison must be
the SVG produced by `SankeyEngine.render()` / d3-sankey. Do not compare against
Reference mode, a direct `<img>` of the source PNG, or ad hoc source-image crops
or raster overlays placed into the d3 output to cover mismatches. The source PNG
is only the standard to measure against, never part of the d3-sankey render
being scored. The allowed exception is explicit image embedding mode, where
validated semantic icon crops are written to `data/assets/raster-annotations/`
and gated by `render.allowRasterAnnotations`.

## Icon asset workflow

Icon extraction is intentionally generalized across companies. The reusable
logic lives in `scripts/extract_icon_crops.py`; each source image gets a small
JSON spec in `input/icon-crop-specs/` with only coordinates, filters, output
names, and notes.

Accepted reference assets live under:

```text
data/assets/icon-references/<company>/
  crops/
  validation-sheets/
  crop-report.json
  model-validation.md
```

Use these PNG crops only as references for SVG/vector conversion and reuse
decisions. They must not be embedded in d3 output, standalone artifacts, or
foreground overlays.

## Rendering

The viewer renders only the editable d3-sankey SVG from
`src/sankey-engine.js`. Processed reference PNGs are kept in
`input/processed/` and referenced by `meta.referenceImage` for the fidelity
verifier, but they are not part of the app runtime or standalone HTML artifact.

## Add your company

Create a file in `data/datasets/`, register it on the global `DATASETS` array,
add one `<script>` line in `index.html`, add the comparable financial statement
record to `data/income-statements.js`, and add company-level context to
`data/company-metadata.js` before registering the first dataset for that
company. Registered datasets are authored as high-fidelity adapters: define the
node/link graph explicitly, then tune `layout.nodes` and `layout.labels` against
the processed reference image.

```js
// data/datasets/my-company-fy25.js
const dataset = {
  key: 'my-company-fy25',
  name: 'My Company · FY25',
  meta: {
    title: 'My Company FY25 Income Statement',
    period: 'FY2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    referenceImage: {
      src: 'input/processed/my-company-fy25.png',
      width: 2862,
      height: 1536,
    },
  },
  nodes: [
    { id: 'product', label: 'Product', value: 800, type: 'revenue' },
    { id: 'services', label: 'Services', value: 200, type: 'revenue' },
    { id: 'revenue', label: 'Revenue', value: 1000, type: 'total' },
    { id: 'cost_of_revenue', label: 'Cost of revenue', value: 300, type: 'cost' },
    { id: 'gross_profit', label: 'Gross profit', value: 700, type: 'profit' },
  ],
  links: [
    { source: 'product', target: 'revenue', value: 800 },
    { source: 'services', target: 'revenue', value: 200 },
    { source: 'revenue', target: 'gross_profit', value: 700 },
    { source: 'revenue', target: 'cost_of_revenue', value: 300 },
  ],
  layout: {
    nodes: {
      product: { x: 120, y: 280, width: 80, height: 240 },
      services: { x: 120, y: 640, width: 80, height: 120 },
      revenue: { x: 760, y: 390, width: 80, height: 360 },
      gross_profit: { x: 1380, y: 330, width: 80, height: 260 },
      cost_of_revenue: { x: 1380, y: 760, width: 80, height: 100 },
    },
    labels: {
      product: {
        blocks: [{ x: 88, top: 300, anchor: 'end', lines: [{ text: 'Product' }, { text: '$800M' }] }],
      },
      services: {
        blocks: [{ x: 88, top: 660, anchor: 'end', lines: [{ text: 'Services' }, { text: '$200M' }] }],
      },
      revenue: {
        blocks: [{ x: 800, top: 320, anchor: 'middle', lines: [{ text: 'Revenue' }, { text: '$1.0B' }] }],
      },
    },
  },
};

(window.DATASETS = window.DATASETS || []).push(dataset);
```

```html
<!-- index.html, with the other dataset scripts -->
<script src="data/datasets/my-company-fy25.js"></script>
```

Keep `data/income-statements.js` updated with the same reported totals and line
items, then run `pnpm verify:ssot` to confirm the SSOT still covers every
registered dataset. See [`data/schema.md`](data/schema.md) for the full
low-level format. `data/datasets/nvidia-q1-fy27.js` is a compact hand-authored
example.

## How it's built

| file                        | role                                                          |
|-----------------------------|---------------------------------------------------------------|
| `index.html`                | static viewer shell and ordered script registration           |
| `src/app.css`               | viewer layout, controls, sidebar, and responsive styles       |
| `src/app.js`                | viewer app logic: navigation, mode switching, resizing, export |
| `src/sankey-engine.js`      | **d3-sankey** renderer: layout + custom nodes/links/labels/logo/interactions |
| `src/icons.js`              | Lucide icon set (inline SVG) + the NVIDIA brand glyph         |
| `scripts/build-standalone.mjs` | builds the self-contained HTML artifact                    |
| `scripts/verify-standalone.mjs` | opens the artifact via `file://` and checks d3 rendering |
| `scripts/script-sources.mjs`| shared script classification for page and verifier harnesses  |
| `scripts/extract_icon_crops.py` | spec-driven icon crop extraction and validation           |
| `data/income-statements.js` | pure financial-statement SSOT for totals and line items       |
| `data/company-metadata.js`  | company-profile SSOT for Table mode and onboarding checks     |
| `data/datasets/*.js`      | datasets (one per company/period)                             |
| `data/assets/`              | reusable icon references and validation records               |
| `vendor/`                   | d3 v7 and d3-sankey — vendored for offline use                |

Design choices that keep every chart **aligned and consistent**:

- **Columns are explicit** (`col` per node) so the layout matches the financial
  narrative (segments → revenue → gross → operating → net) instead of whatever
  d3's auto-layering produces.
- **Colour is semantic and automatic** — node colour comes from its `type`;
  link colour is a gradient derived from its endpoints. You never pick a link
  colour by hand.
- **Labels can't collide** — side labels are de-collided in a second pass, so
  even many small terminal nodes (Tax / R&D / SG&A) stay readable.
- **Display values are preserved** — d3-sankey overwrites node values with flow
  sums, so the engine keeps the author's reported figure for the label.

## Notes

- The NVIDIA figures here are **illustrative**, matching the source infographic;
  swap in audited numbers as needed.
- Icons are [Lucide](https://lucide.dev) (MIT). The NVIDIA eye glyph is a brand
  trademark of NVIDIA Corporation, used here only to reproduce the reference;
  swap `meta.logoSvg` for your own asset.
- d3-sankey is ISC licensed and is the only charting renderer vendored here.
- Commit messages follow the project convention in
  [`docs/commit-messages.md`](docs/commit-messages.md).
