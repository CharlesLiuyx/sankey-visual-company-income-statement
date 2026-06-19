/* ====================================================================
 *  NVIDIA Q2 FY26 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q2-fy26.png with the
 *  high-level income-statement helper and fixed source-image geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.fromIncomeStatement({
    key: 'nvidia-q2-fy26',
    name: 'NVIDIA · Q2 FY26',
    meta: {
      title: 'NVIDIA Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending July 2025',
      periodX: 2860,
      periodY: 210,
      periodNoteY: 264,
      titleSize: 146,
      titleY: 114,
      titleTextLength: 2461,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nvidia-q2-fy26.png', width: 3002, height: 1484 },
      logoWidth: 390,
      logoHeight: 279,
      logoY: 157,
      logoViewBox: '0 0 390 279',
      logoSvg: `
        <rect x="140" y="0" width="166" height="178" fill="#76b900"/>
        <g transform="translate(151,25) scale(6.2)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="281" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#1d1d1d">NVIDIA<tspan font-size="38" baseline-shift="super">&#174;</tspan></text>
      `,
    },

    revenue: [
      {
        id: 'data_center',
        label: 'Data Center',
        value: 41.1,
        notes: ['+56% Y/Y'],
        icons: ['server'],
        iconSize: 34,
        labelSide: 'left',
        color: '#0e7451',
        labelColor: '#0e7451',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        value: 4.3,
        notes: ['+49% Y/Y'],
        icons: ['controller'],
        iconSize: 32,
        labelSide: 'left',
        color: '#a5db57',
        labelColor: '#66af04',
      },
      {
        id: 'professional_visualization',
        label: ['Professional', 'Visualization'],
        value: 0.6,
        notes: ['+32% Y/Y'],
        icons: ['eye'],
        iconSize: 32,
        labelSide: 'left',
        color: '#49006f',
        labelColor: '#49006f',
      },
      {
        id: 'automotive',
        label: 'Automotive',
        value: 0.6,
        notes: ['+69% Y/Y'],
        icons: ['car'],
        iconSize: 32,
        labelSide: 'left',
        color: '#095ab8',
        labelColor: '#095ab8',
      },
      {
        id: 'oem_other',
        label: 'OEM & Other',
        value: 0.2,
        notes: ['+97% Y/Y'],
        icons: ['factory'],
        iconSize: 32,
        labelSide: 'left',
        color: '#740046',
        labelColor: '#740046',
      },
    ],
    costOfRevenue: 12.9,
    opex: [
      { id: 'rnd', label: ['Research &', 'Development'], value: 4.3, notes: ['9% of revenue', '(1pp) Y/Y'] },
      { id: 'sga', label: ['Sales, General', '& Admin'], value: 1.1, notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],
    tax: 4.8,
    otherIncome: [{ id: 'other', label: 'Other', value: 2.8 }],

    derived: {
      revenueHub: { value: 46.7, notes: ['+56% Y/Y'] },
      grossProfit: { value: 33.9, notes: ['72% margin', '(3pp) Y/Y'] },
      operatingProfit: { label: 'Operating profit', value: 28.4, notes: ['61% margin', '(1pp) Y/Y'] },
      operatingExpenses: { value: 5.4 },
      netProfit: { label: 'Net profit', value: 26.4, notes: ['57% margin', '+1pp Y/Y'] },
    },
  });

  const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));
  dataset.render = {
    width: 3002,
    height: 1484,
    background: '#efefef',
    titleColor: '#123e65',
    subtitleColor: '#535353',
    noteColor: '#535353',
    palette: {
      source: { node: '#0e7451', label: '#0e7451' },
      hub: { node: '#000000', label: '#000000' },
      profit: { node: '#289321', label: '#128040' },
      cost: { node: '#be0004', label: '#800003' },
    },
    linkTint: {
      source: '#88b7a3',
      hub: null,
      profit: '#93c68b',
      cost: '#de8577',
    },
    linkOpacity: 1,
  };

  dataset.layout = {
    scale: 9.08,
    nodes: {
      data_center: { x: 519, y: 410, width: 81, height: 375 },
      gaming: { x: 519, y: 930, width: 81, height: 40 },
      professional_visualization: { x: 519, y: 1104, width: 81, height: 7 },
      automotive: { x: 519, y: 1253, width: 81, height: 7 },
      oem_other: { x: 519, y: 1394, width: 81, height: 2 },
      revenue: { x: 1051, y: 633, width: 81, height: 426 },
      gross_profit: { x: 1584, y: 531, width: 81, height: 307 },
      cost_of_revenue: { x: 1583, y: 1090, width: 82, height: 116 },
      operating_profit: { x: 2116, y: 419, width: 81, height: 257 },
      operating_expenses: { x: 2116, y: 915, width: 82, height: 48 },
      other: { x: 2513, y: 589, width: 81, height: 23 },
      net_profit: { x: 2648, y: 300, width: 82, height: 239 },
      tax: { x: 2648, y: 800, width: 82, height: 42 },
      rnd: { x: 2648, y: 1051, width: 82, height: 37 },
      sga: { x: 2648, y: 1335, width: 82, height: 9 },
    },
    labels: {
      data_center: {
        blocks: [
          { parts: ['name'], x: 363, top: 579, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 560, top: 297, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['server'], x: 52, y: 524, size: 96, color: '#000000', strokeWidth: 2.15 },
      },
      gaming: {
        blocks: [
          { parts: ['name'], x: 359, top: 922, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 560, top: 819, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['controller'], x: 50, y: 915, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      professional_visualization: {
        blocks: [
          { parts: ['name'], x: 352, top: 1015, anchor: 'middle', nameSize: 40, lineGap: 10 },
          { parts: ['value', 'notes'], x: 560, top: 996, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['eye'], x: 49, y: 1074, size: 110, color: '#000000', strokeWidth: 2.15 },
      },
      automotive: {
        blocks: [
          { parts: ['name'], x: 357, top: 1227, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 560, top: 1143, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['car'], x: 51, y: 1204, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      oem_other: {
        blocks: [
          { parts: ['name'], x: 352, top: 1362, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 560, top: 1286, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['factory'], x: 54, y: 1325, size: 102, color: '#000000', strokeWidth: 2.15 },
      },
      revenue: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1092, top: 462, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      gross_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1624, top: 313, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      operating_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2157, top: 203, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      other: {
        blocks: [
          { parts: ['name', 'value'], x: 2555, top: 630, anchor: 'middle', nameSize: 34, valueSize: 34 },
        ],
      },
      net_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2758, top: 308, anchor: 'start', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { parts: ['name', 'value'], x: 1624, top: 1217, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      operating_expenses: {
        blocks: [
          { parts: ['name', 'value'], x: 2165, top: 979, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      tax: {
        blocks: [
          { parts: ['name', 'value'], x: 2845, top: 777, anchor: 'start', nameSize: 35, valueSize: 34 },
        ],
      },
      rnd: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2872, top: 995, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
      sga: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2872, top: 1253, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
    },
  };

  Object.assign(byId.data_center || {}, { linkTint: '#98bfae' });
  Object.assign(byId.gaming || {}, { linkTint: '#bde586' });
  Object.assign(byId.professional_visualization || {}, { linkTint: '#b99bd1' });
  Object.assign(byId.automotive || {}, { linkTint: '#96c4e9' });
  Object.assign(byId.oem_other || {}, { linkTint: '#cf91b4' });

  if (byId.cost_of_revenue) byId.cost_of_revenue.valueText = '($12.9B)';
  if (byId.operating_expenses) byId.operating_expenses.valueText = '($5.4B)';
  if (byId.net_profit) byId.net_profit.valueText = '$26.4B';

  dataset.links.forEach((link) => {
    if (link.source === 'operating_profit' && link.target === 'net_profit') link.targetOrder = 0;
    if (link.source === 'other' && link.target === 'net_profit') link.targetOrder = 1;
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
