/* ====================================================================
 *  NVIDIA Q1 FY27 — built with the high-level helper from raw figures.
 *  This is the "drop in a company's numbers" workflow: you provide the
 *  line items and the helper derives Revenue, Gross/Operating/Net profit
 *  and wires every flow. Compare against nvidia-q1-fy27.js (hand-authored)
 *  — they render the same picture.
 * ==================================================================== */
(window.DATASETS = window.DATASETS || []).push(
  window.SankeyEngine.fromIncomeStatement({
    key: 'nvidia-from-figures',
    name: 'NVIDIA · Q1 FY27 (from figures)',
    meta: {
      title: 'NVIDIA Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      logoWidth: 168,
      logoHeight: 92,
      logoViewBox: '0 0 168 92',
      // reuse the logo defined by the hand-authored NVIDIA dataset
      logoSvg:
        ((window.DATASETS.find((d) => d.key === 'nvidia-q1-fy27') || {}).meta || {})
          .logoSvg || undefined,
    },

    // --- the only inputs you supply for a new company ---
    revenue: [
      {
        label: 'Data Center', value: 75.2, notes: ['+92% Y/Y'],
        icons: ['server'], iconSize: 34,
        children: [
          { label: 'Hyperscale', value: 37.9, notes: ['+115% Y/Y'] },
          { label: ['AI Clouds,', 'Industrial,', '& Enterprise'], value: 37.4, notes: ['+74% Y/Y'] },
        ],
      },
      {
        label: 'Edge Computing', value: 6.4, notes: ['+29% Y/Y'], labelSide: 'below',
        color: '#76c043', labelColor: '#5fa628',
        icons: ['controller', 'eye', 'car', 'factory'], iconSize: 30,
      },
    ],
    costOfRevenue: 20.5,
    opex: [
      { label: ['Research &', 'Development'], value: 6.3, notes: ['8% of revenue', '(1pp) Y/Y'] },
      { label: ['Sales, General', '& Admin'], value: 1.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],
    tax: 11.6,
    otherIncome: [{ label: 'Investments', value: 16.4 }],

    // labels/notes for the derived subtotals (value override optional)
    derived: {
      revenueHub: { notes: ['+85% Y/Y'] },
      grossProfit: { value: 61.2, notes: ['75% margin', '+14pp Y/Y'] },
      operatingProfit: { notes: ['66% margin', '+16pp Y/Y'] },
      netProfit: { notes: ['71% margin', '+28pp Y/Y'] },
    },
  })
);
