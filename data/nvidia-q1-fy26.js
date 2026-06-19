/* ====================================================================
 *  NVIDIA Q1 FY26 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q1-fy26.png with the
 *  high-level income-statement helper and fixed source-image geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.fromIncomeStatement({
    key: 'nvidia-q1-fy26',
    name: 'NVIDIA · Q1 FY26',
    meta: {
      title: 'NVIDIA Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Apr. 2025',
      periodX: 2850,
      periodY: 232,
      periodNoteY: 287,
      titleSize: 142,
      titleX: 1490,
      titleY: 122,
      titleTextLength: 2473,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nvidia-q1-fy26.png', width: 2990, height: 1464 },
      logoWidth: 390,
      logoHeight: 279,
      logoY: 167,
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
        value: 39.1,
        notes: ['+10% Q/Q'],
        icons: ['server'],
        iconSize: 34,
        labelSide: 'left',
        color: '#0e7451',
        labelColor: '#0e7451',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        value: 3.8,
        notes: ['+48% Q/Q'],
        icons: ['controller'],
        iconSize: 32,
        labelSide: 'left',
        color: '#a5db57',
        labelColor: '#66af04',
      },
      {
        id: 'professional_visualization',
        label: ['Professional', 'Visualization'],
        value: 0.5,
        notes: ['(0%) Q/Q'],
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
        notes: ['(1%) Q/Q'],
        icons: ['car'],
        iconSize: 32,
        labelSide: 'left',
        color: '#095ab8',
        labelColor: '#095ab8',
      },
      {
        id: 'oem_other',
        label: 'OEM & Other',
        value: 0.1,
        notes: ['(12%) Q/Q'],
        icons: ['factory'],
        iconSize: 32,
        labelSide: 'left',
        color: '#740046',
        labelColor: '#740046',
      },
    ],
    costOfRevenue: 17.4,
    opex: [
      { id: 'rnd', label: ['Research &', 'Development'], value: 4.0, notes: ['9% of revenue', '(0pp) Q/Q'] },
      { id: 'sga', label: ['Sales, General', '& Admin'], value: 1.0, notes: ['2% of revenue', '(0pp) Q/Q'] },
    ],
    tax: 3.1,
    otherIncome: [{ id: 'other', label: 'Other', value: 0.3 }],

    derived: {
      revenueHub: { value: 44.1, notes: ['+12% Q/Q'] },
      grossProfit: { value: 26.7, notes: ['61% margin', '(13pp) Q/Q'] },
      operatingProfit: { label: 'Operating profit', value: 21.6, notes: ['49% margin', '(12pp) Q/Q'] },
      operatingExpenses: { value: 5.0 },
      netProfit: { label: 'Net profit', value: 18.9, notes: ['43% margin', '(14pp) Q/Q'] },
    },
  });

  const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));
  dataset.render = {
    width: 2990,
    height: 1464,
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
    scale: 9.61,
    nodes: {
      data_center: { x: 502, y: 435, width: 82, height: 377 },
      gaming: { x: 502, y: 948, width: 82, height: 35 },
      professional_visualization: { x: 502, y: 1117, width: 82, height: 5 },
      automotive: { x: 502, y: 1268, width: 82, height: 6 },
      oem_other: { x: 502, y: 1413, width: 82, height: 1.5 },
      revenue: { x: 1035, y: 643, width: 81, height: 424 },
      gross_profit: { x: 1567, y: 513, width: 82, height: 258 },
      cost_of_revenue: { x: 1567, y: 1024, width: 82, height: 167 },
      operating_profit: { x: 2100, y: 419, width: 81, height: 208 },
      operating_expenses: { x: 2100, y: 837, width: 81, height: 47 },
      other: { x: 2485, y: 576, width: 82, height: 2 },
      net_profit: { x: 2632, y: 319, width: 82, height: 180 },
      tax: { x: 2632, y: 727, width: 82, height: 29 },
      rnd: { x: 2632, y: 981, width: 82, height: 37 },
      sga: { x: 2632, y: 1270, width: 82, height: 9 },
    },
    labels: {
      data_center: {
        blocks: [
          { parts: ['name'], x: 363, top: 579, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 316, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['server'], x: 52, y: 524, size: 96, color: '#000000', strokeWidth: 2.15 },
      },
      gaming: {
        blocks: [
          { parts: ['name'], x: 359, top: 922, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 819, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['controller'], x: 50, y: 915, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      professional_visualization: {
        blocks: [
          { parts: ['name'], x: 352, top: 1015, anchor: 'middle', nameSize: 40, lineGap: 10 },
          { parts: ['value', 'notes'], x: 543, top: 996, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['eye'], x: 49, y: 1074, size: 110, color: '#000000', strokeWidth: 2.15 },
      },
      automotive: {
        blocks: [
          { parts: ['name'], x: 357, top: 1227, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 1143, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['car'], x: 51, y: 1204, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      oem_other: {
        blocks: [
          { parts: ['name'], x: 352, top: 1362, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 543, top: 1286, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['factory'], x: 54, y: 1325, size: 102, color: '#000000', strokeWidth: 2.15 },
      },
      revenue: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1076, top: 462, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      gross_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1608, top: 294, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      operating_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2141, top: 203, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      other: {
        blocks: [
          { parts: ['name', 'value'], x: 2526, top: 596, anchor: 'middle', nameSize: 34, valueSize: 34 },
        ],
      },
      net_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2745, top: 318, anchor: 'start', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { parts: ['name', 'value'], x: 1608, top: 1210, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      operating_expenses: {
        blocks: [
          { parts: ['name', 'value'], x: 2141, top: 914, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      tax: {
        blocks: [
          { parts: ['name', 'value'], x: 2808, top: 705, anchor: 'start', nameSize: 35, valueSize: 34 },
        ],
      },
      rnd: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2846, top: 958, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
      sga: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2846, top: 1253, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
    },
  };

  Object.assign(byId.data_center || {}, { linkTint: '#89b5a2' });
  Object.assign(byId.gaming || {}, { linkTint: '#bde586' });
  Object.assign(byId.professional_visualization || {}, { linkTint: '#b99bd1' });
  Object.assign(byId.automotive || {}, { linkTint: '#96c4e9' });
  Object.assign(byId.oem_other || {}, { linkTint: '#cf91b4' });

  if (byId.cost_of_revenue) byId.cost_of_revenue.valueText = '($17.4B)';
  if (byId.operating_expenses) byId.operating_expenses.valueText = '($5.0B)';
  if (byId.tax) byId.tax.valueText = '($3.1B)';
  if (byId.rnd) byId.rnd.valueText = '($4.0B)';
  if (byId.sga) byId.sga.valueText = '($1.0B)';
  if (byId.net_profit) byId.net_profit.valueText = '$18.9B';

  dataset.links.forEach((link) => {
    if (link.source === 'operating_profit' && link.target === 'net_profit') link.targetOrder = 0;
    if (link.source === 'other' && link.target === 'net_profit') {
      link.targetOrder = 1;
      link.width = 3;
      link.y0 = 577;
      link.y1 = 497;
      link.curve = { c1x: 2600, c2x: 2588 };
    }
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
