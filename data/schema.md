# Data schema

Two ways to author a chart. Both produce the same `{ meta, nodes, links }`
object that `SankeyEngine.render(selector, data)` consumes.

- **High-level** — `SankeyEngine.fromIncomeStatement(figures)`. You give the
  raw line items; it derives Revenue / Gross / Operating / Net profit and wires
  every flow. Best for "drop in a company's numbers". See the bottom section.
- **Low-level** — write `nodes` + `links` by hand for full control over
  columns, ordering and label placement. See below.

Separately, `data/income-statements.js` is the pure financial-statement SSOT.
Every registered real dataset should have one matching record there. Keep it to
reported totals, line items, notes, currency, units, and source metadata only;
do not put `nodes`, `links`, `layout`, `render`, SVG, colors, or pixel geometry
in that file. Run `pnpm verify:ssot` after adding or materially changing a
dataset.

`data/company-metadata.js` is the company-profile SSOT. Add or update it before
registering a new company's first dataset so Table mode can show company-level
context separately from period-specific financial statements.

`src/i18n.js` defines the project-wide language list. English fields are the
canonical/default data used for verification. For every non-default supported
language, add `i18n.<language>` overlays on datasets, financial SSOT records,
and company metadata records when precise wording or language-specific layout
is needed. Do not create parallel dataset files per language.

---

## Pure data SSOT

```js
{
  key: 'nvidia-q1-fy27',
  company: 'NVIDIA',
  period: 'Q1 FY27',
  periodNote: 'Ending Apr. 2026',
  currency: '$',
  unit: 'B',
  decimals: 1,
  sourceImage: 'input/processed/nvidia-q1-fy27.png',
  roundingTolerance: 0.15,
  revenue: {
    total: 81.6,
    notes: ['+85% Y/Y'],
    items: [
      {
        id: 'data_center',
        label: 'Data Center',
        value: 75.2,
        children: [
          { id: 'hyperscale', label: 'Hyperscale', value: 37.9 },
        ],
      },
    ],
  },
  costs: {
    costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.5 },
    operatingExpenses: {
      total: 7.6,
      items: [
        { id: 'rnd', label: 'Research & Development', value: 6.3 },
      ],
    },
    tax: { id: 'tax', label: 'Tax', value: 11.6 },
  },
  otherIncome: {
    total: 16.4,
    items: [{ id: 'investments', label: 'Investments', value: 16.4 }],
  },
  otherExpenses: {
    total: 0,
    items: [],
  },
  profit: {
    gross: { id: 'gross_profit', label: 'Gross profit', value: 61.2 },
    operating: { id: 'operating_profit', label: 'Operating profit', value: 53.5 },
    net: { id: 'net_profit', label: 'Net profit', value: 58.3 },
  },
  i18n: {
    zh: {
      periodNote: '截至 2026 年 4 月',
      revenue: {
        items: [
          { id: 'data_center', label: '数据中心' },
        ],
      },
      profit: {
        gross: { label: '毛利润' },
        operating: { label: '营业利润' },
        net: { label: '净利润' },
      },
    },
  },
}
```

Use `otherIncome` for non-operating gains that add to net profit, and
`otherExpenses` for non-operating costs that subtract from net profit. The `id`
fields should match the relevant Sankey node ids when a corresponding node
exists. The verifier checks every `index.html` dataset script has a matching
SSOT record, compares key totals and line items against Sankey node values, and
allows small published-rounding differences via `roundingTolerance`. It also
checks every company in the financial SSOT has a matching
`data/company-metadata.js` entry.

---

## Company metadata SSOT

```js
{
  key: 'nvidia',
  name: 'NVIDIA',
  legalName: 'NVIDIA Corporation',
  ticker: 'NVDA',
  exchange: 'NASDAQ',
  marketCap: {
    valueUsd: 3000000000000,
    asOf: '2026-06-18',
    source: 'StockAnalysis',
    sourceUrl: 'https://stockanalysis.com/stocks/nvda/market-cap/',
  },
  sector: 'Information Technology',
  industry: 'Semiconductors',
  founded: '1993',
  headquarters: 'Santa Clara, California, United States',
  fiscalYearEnd: 'Last Sunday in January',
  website: 'https://www.nvidia.com/',
  description: 'Short company profile used by Table mode.',
  sourceUrls: [
    'https://www.nvidia.com/en-us/about-nvidia/',
  ],
  i18n: {
    zh: {
      sector: '信息技术',
      industry: '半导体',
      headquarters: '美国加利福尼亚州圣克拉拉',
      fiscalYearEnd: '1 月最后一个星期日',
      description: 'Table 模式使用的本地化公司简介。',
    },
  },
}
```

Required fields for verification are `key`, `name`, `sector`, `industry`,
`description`, and a non-empty `sourceUrls` array. Other fields should be filled
when they can be found from reliable public sources. For the Company list and
Table view, also keep `founded`, `headquarters`, `fiscalYearEnd`, `website`,
`ticker`, `exchange`, and public-company `marketCap` data current enough for
sorting and display. Do not duplicate period-specific financials in company
metadata; latest-period revenue, currency, unit, and net profit belong in
`data/income-statements.js`.

### Company list sorting fields

The Company navigator currently supports these sort modes. Keep the data source
for each mode stable so the sidebar list, Table view, CSV export, and
localization overlays describe the same company.

| sort mode | source fields | notes |
|---|---|---|
| Alphabetical | `name`; optional `i18n.<language>.displayName` | Uses the localized display company name. Use `aliases` only for matching financial records to metadata, not for display ordering. |
| Recently updated | Dataset `meta.period`, dataset key, and `meta.periodNote` | Prefer parseable `Qn FYyy` / `Qn FYyyyy` period text or dataset keys. If no fiscal period is found, the UI falls back to month/year text in `periodNote`, then registration order. |
| Market cap | `marketCap.valueUsd`, `marketCap.asOf`, `marketCap.source`, `marketCap.sourceUrl` | Store the full market capitalization as a USD number, descending in the UI. Missing values sort after companies with values and display as missing metadata. |
| Net profit | Latest matching `data/income-statements.js` record: `profit.net.value`, `currency`, `unit`, and parseable period fields | The UI selects the latest dataset for the company, converts the reported net profit to USD using `src/app.js` currency constants, and sorts descending. Do not add latest net profit to company metadata. |
| Founded date | `founded` | The first four-digit year in the string is used for ascending sort. Keep the human-readable string precise enough for Table display. |

When a sort value is missing, the company sorts after companies with a numeric
value for that mode. Ties fall back to localized company name, then the
canonical company name, then latest-period recency.

---

## Low-level format

```js
{
  key:  'nvidia-q1-fy27',                 // id used for export filenames
  name: 'NVIDIA · Q1 FY27',               // label in the dataset dropdown
  meta: { … },                            // titles, period, currency, logo
  nodes: [ … ],
  links: [ … ],
  i18n: { … },                            // localized display overlays
}
```

### meta

| field         | type    | notes                                                        |
|---------------|---------|--------------------------------------------------------------|
| `title`       | string  | big heading                                                  |
| `period`      | string  | top-right stamp, line 1 (e.g. `"Q1 FY27"`)                   |
| `periodNote`  | string  | top-right stamp, line 2 (e.g. `"Ending Apr. 2026"`)          |
| `currency`    | string  | prepended to values, default `"$"`                           |
| `unit`        | string  | appended to values (e.g. `"B"`, `"M"`)                       |
| `decimals`    | number  | decimal places for non-integers, default `1`                 |
| `referenceImage` | object \| string | processed PNG for Reference mode, e.g. `{ src, width, height }` |
| `logoSvg`     | string  | inner SVG markup drawn above the hub node (optional)         |
| `logoViewBox` / `logoWidth` / `logoHeight` | — | size/coords for `logoSvg`              |

### i18n overlay

Dataset overlays are keyed by language code:

```js
i18n: {
  zh: {
    name: 'NVIDIA · 2027 财年第一季度',
    meta: {
      title: 'NVIDIA 2027 财年第一季度利润表',
      period: '2027 财年第一季度',
      periodNote: '截至 2026 年 4 月',
      titleTextLength: 2100,
    },
    nodes: {
      revenue: { label: '收入', notes: ['同比 +85%'] },
      gross_profit: { label: '毛利润', notes: ['毛利率 75%', '同比 +14 个百分点'] },
    },
    layout: {
      labels: {
        revenue: {
          blocks: [
            { lines: [{ text: '收入' }, { text: '$value' }, { text: '同比 +85%' }] },
          ],
        },
      },
    },
  },
}
```

Allowed overlay content is display-only: localized strings and text layout
adjustments such as title sizing or fixed-label line text. Overlays must not
change financial values, `nodes[].value`, `links`, source images, node geometry,
or any field that changes SSOT/d3 verification semantics.

For fixed-layout datasets, every explicit `layout.labels.*.blocks[].lines[].text`
that is not `$value` should have a localized equivalent. For helper-built
datasets, node labels and notes are usually sufficient because the renderer
builds label blocks from node text.

### node

| field        | type              | notes                                                       |
|--------------|-------------------|-------------------------------------------------------------|
| `id`         | string            | unique; referenced by links                                 |
| `label`      | string \| string[]| the name; an array renders as multiple lines                |
| `value`      | number            | the displayed amount (sign handled by `type`)               |
| `valueText`  | string            | override the formatted value entirely (optional)            |
| `notes`      | string[]          | small grey lines under the value (margins, Y/Y, % of rev…)  |
| `type`       | string            | `source` · `hub` · `profit` · `cost` → drives colour        |
| `col`        | number            | column index (0 = far left). Controls horizontal placement  |
| `order`      | number            | vertical order within the column (top = smallest)           |
| `labelSide`  | string            | `left` · `right` · `above` · `below` (auto if omitted)      |
| `color` / `labelColor` | string  | per-node overrides of the type palette                      |
| `icons`      | string[]          | icon names from `src/icons.js` drawn next to the label      |
| `iconSize`   | number            | px, default 30                                              |

`type` semantics:
- `source` (teal) — revenue segments feeding in from the left
- `hub` (black) — the central Revenue node
- `profit` (green) — value retained: gross/operating/net profit, other income
- `cost` (red) — outflows: cost of revenue, opex, tax, R&D, SG&A — shown `($X)`

### link

```js
{ source: 'hyperscale', target: 'data_center', value: 37.9 }
```

Link colour is derived automatically from the two endpoints' types (a teal→teal,
green→green, or green→salmon gradient), so you only specify the flow amount.
Keep flows conserved (sum of a node's inflows ≈ its outflows) for clean bars.

---

## High-level format — `fromIncomeStatement(figures)`

```js
SankeyEngine.fromIncomeStatement({
  key, name, meta,                  // same meta as above
  revenue: [                        // one entry per revenue line
    { label, value?, notes?, icons?, color?, labelColor?,
      children?: [ { label, value, notes? }, … ] },   // optional sub-segments
  ],
  costOfRevenue: 20.5,              // number, or { value, label?, notes? }
  opex: [ { label, value, notes? }, … ],   // R&D, S&M, G&A … (the breakdown)
  tax: 11.6,                        // number, or { value, label?, notes? }
  otherIncome: [ { label, value, notes? }, … ],   // optional → flows into net
  derived: {                        // labels/notes for the computed subtotals
    revenueHub:        { notes? },
    grossProfit:       { value?, notes? },   // value override = reported figure
    operatingProfit:   { value?, notes? },
    operatingExpenses: { value?, notes? },
    netProfit:         { value?, notes? },
  },
})
```

It computes:

```
revenueTotal    = Σ revenue
grossProfit     = revenueTotal − costOfRevenue
operatingProfit = grossProfit − Σ opex
netProfit       = operatingProfit − tax + Σ otherIncome
```

A `revenue` line with `children` adds an extra column of sub-segments on the
left (e.g. Hyperscale + AI Clouds → Data Center). A `derived.*.value` override
lets a subtotal display a company's *reported* figure while the flow widths stay
arithmetically conserved (handy when published numbers are rounded).
