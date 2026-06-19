/* ====================================================================
 *  NVIDIA — Q1 FY27 income statement (illustrative figures, $B)
 *  This is the reference dataset. Copy it to add another company.
 *  See data/schema.md for the full field reference.
 * ==================================================================== */
(window.DATASETS = window.DATASETS || []).push({
  key: 'nvidia-q1-fy27',
  name: 'NVIDIA · Q1 FY27',
  meta: {
    title: 'NVIDIA Q1 FY27 Income Statement',
    period: 'Q1 FY27',
    periodNote: 'Ending Apr. 2026',
    currency: '$',
    unit: 'B',
    decimals: 1,
    referenceImage: { src: 'input/processed/nvidia-q1-fy27.png', width: 2862, height: 1462 },
    logoWidth: 390,
    logoHeight: 279,
    logoY: 178,
    logoViewBox: '0 0 190 104',
    // official NVIDIA eye glyph (white on the brand green) + wordmark
    logoSvg: `
      <rect x="63" y="0" width="64" height="58" rx="7" fill="#76b900"/>
      <g transform="translate(72,6) scale(1.92)" fill="#ffffff">
        <path d="${window.SANKEY_BRAND.nvidia}"/>
      </g>
      <text x="95" y="94" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="27" font-weight="800" letter-spacing="-0.5" fill="#1d1d1d">NVIDIA<tspan font-size="11" baseline-shift="super">&#174;</tspan></text>
    `,
  },

  layout: {
    scale: 5.655,
    nodes: {
      hyperscale: { x: 339, y: 434, width: 82, height: 214 },
      ai_clouds: { x: 339, y: 826, width: 82, height: 210 },
      data_center: { x: 766, y: 544, width: 80, height: 426 },
      edge: { x: 766, y: 1219, width: 80, height: 35 },
      revenue: { x: 1192, y: 650, width: 80, height: 462 },
      gross_profit: { x: 1617, y: 543, width: 82, height: 346 },
      cost_of_revenue: { x: 1617, y: 1148, width: 82, height: 116 },
      investments: { x: 2309, y: 261, width: 81, height: 91 },
      operating_profit: { x: 2043, y: 445, width: 82, height: 303 },
      operating_expenses: { x: 2043, y: 953, width: 82, height: 42 },
      net_profit: { x: 2469, y: 287, width: 82, height: 330 },
      tax: { x: 2469, y: 787, width: 82, height: 65 },
      rnd: { x: 2469, y: 1044, width: 82, height: 35 },
      sga: { x: 2469, y: 1265, width: 82, height: 7 },
    },
    labels: {
      hyperscale: {
        blocks: [
          { parts: ['name'], x: 322, top: 524, anchor: 'end', nameSize: 40 },
          { parts: ['value', 'notes'], x: 380, top: 321, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
      },
      ai_clouds: {
        blocks: [
          { parts: ['name'], x: 330, top: 850, anchor: 'end', nameSize: 39, lineGap: 10 },
          { parts: ['value', 'notes'], x: 380, top: 714, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
      },
      data_center: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 806, top: 404, anchor: 'middle', nameSize: 42, valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['server'], x: 766, y: 250, size: 88, color: '#000000', strokeWidth: 2.15 },
      },
      edge: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 812, top: 1082, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['controller', 'eye', 'car', 'factory'], x: 165, y: 1174, size: 94, gap: 36, color: '#000000', strokeWidth: 2.15 },
      },
      revenue: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1232, top: 498, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      gross_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1658, top: 332, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      operating_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2084, top: 192, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      investments: {
        blocks: [
          { parts: ['name', 'value'], x: 2350, top: 164, anchor: 'middle', nameSize: 38, valueSize: 34 },
        ],
      },
      net_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2688, top: 358, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { parts: ['name', 'value'], x: 1658, top: 1298, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      operating_expenses: {
        blocks: [
          { parts: ['name', 'value'], x: 2084, top: 1036, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      tax: {
        blocks: [
          { parts: ['name', 'value'], x: 2688, top: 790, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      rnd: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2695, top: 1032, anchor: 'middle', nameSize: 36, valueSize: 34, noteSize: 31 },
        ],
      },
      sga: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2695, top: 1246, anchor: 'middle', nameSize: 36, valueSize: 34, noteSize: 31 },
        ],
      },
    },
  },

  nodes: [
    /* ---- revenue collection (teal) ---- */
    { id: 'hyperscale', col: 0, order: 0, type: 'source', labelSide: 'split-left',
      label: 'Hyperscale', value: 37.9, notes: ['+115% Y/Y'] },

    { id: 'ai_clouds', col: 0, order: 1, type: 'source', labelSide: 'split-left',
      label: ['AI Clouds,', 'Industrial,', '& Enterprise'], value: 37.4, notes: ['+74% Y/Y'] },

    { id: 'data_center', col: 1, order: 0, type: 'source', labelSide: 'above',
      label: 'Data Center', value: 75.2, notes: ['+92% Y/Y'], icons: ['server'], iconSize: 82, iconColor: '#000000' },

    { id: 'edge', col: 1, order: 1, type: 'source', labelSide: 'above',
      label: 'Edge Computing', value: 6.4, notes: ['+29% Y/Y'], color: '#76c043',
      labelColor: '#66af04', linkTint: '#b9dc8e', icons: ['controller', 'eye', 'car', 'factory'], iconSize: 80, iconColor: '#000000' },

    /* ---- hub ---- */
    { id: 'revenue', col: 2, order: 0, type: 'hub', labelSide: 'above',
      label: 'Revenue', value: 81.6, notes: ['+85% Y/Y'] },

    /* ---- gross profit split ---- */
    { id: 'gross_profit', col: 3, order: 0, type: 'profit', labelSide: 'above',
      label: 'Gross profit', value: 61.2, notes: ['75% margin', '+14pp Y/Y'] },

    { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', labelSide: 'below',
      label: ['Cost of', 'revenue'], value: 20.5 },

    /* ---- operating profit split ---- */
    { id: 'investments', col: 4, order: 0, type: 'profit', labelSide: 'above',
      label: 'Investments', value: 16.4 },

    { id: 'operating_profit', col: 4, order: 1, type: 'profit', labelSide: 'above',
      label: ['Operating', 'profit'], value: 53.5, notes: ['66% margin', '+16pp Y/Y'] },

    { id: 'operating_expenses', col: 4, order: 2, type: 'cost', labelSide: 'below',
      label: ['Operating', 'expenses'], value: 7.6 },

    /* ---- final results ---- */
    { id: 'net_profit', col: 5, order: 0, type: 'profit', labelSide: 'right',
      label: ['Net', 'profit'], value: 58.3, notes: ['71% margin', '+28pp Y/Y'] },

    { id: 'tax', col: 5, order: 1, type: 'cost', labelSide: 'right',
      label: 'Tax', value: 11.6 },

    { id: 'rnd', col: 5, order: 2, type: 'cost', labelSide: 'right',
      label: ['Research &', 'Development'], value: 6.3, notes: ['8% of revenue', '(1pp) Y/Y'] },

    { id: 'sga', col: 5, order: 3, type: 'cost', labelSide: 'right',
      label: ['Sales, General', '& Admin'], value: 1.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
  ],

  links: [
    { source: 'hyperscale', target: 'data_center', value: 37.9 },
    { source: 'ai_clouds', target: 'data_center', value: 37.4 },
    { source: 'data_center', target: 'revenue', value: 75.3 },
    { source: 'edge', target: 'revenue', value: 6.4 },

    { source: 'revenue', target: 'gross_profit', value: 61.2 },
    { source: 'revenue', target: 'cost_of_revenue', value: 20.5 },

    { source: 'gross_profit', target: 'operating_profit', value: 53.5 },
    { source: 'gross_profit', target: 'operating_expenses', value: 7.6 },

    { source: 'operating_profit', target: 'net_profit', value: 41.9, targetOrder: 1 },
    { source: 'operating_profit', target: 'tax', value: 11.6 },
    { source: 'investments', target: 'net_profit', value: 16.4, targetOrder: 0 },

    { source: 'operating_expenses', target: 'rnd', value: 6.3 },
    { source: 'operating_expenses', target: 'sga', value: 1.3 },
  ],
});
