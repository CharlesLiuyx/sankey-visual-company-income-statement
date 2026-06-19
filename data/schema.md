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
  profit: {
    gross: { id: 'gross_profit', label: 'Gross profit', value: 61.2 },
    operating: { id: 'operating_profit', label: 'Operating profit', value: 53.5 },
    net: { id: 'net_profit', label: 'Net profit', value: 58.3 },
  },
}
```

The `id` fields should match the relevant Sankey node ids when a corresponding
node exists. The verifier checks every `index.html` dataset script has a
matching SSOT record, compares key totals and line items against Sankey node
values, and allows small published-rounding differences via `roundingTolerance`.

---

## Low-level format

```js
{
  key:  'nvidia-q1-fy27',                 // id used for export filenames
  name: 'NVIDIA · Q1 FY27',               // label in the dataset dropdown
  meta: { … },                            // titles, period, currency, logo
  nodes: [ … ],
  links: [ … ],
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
