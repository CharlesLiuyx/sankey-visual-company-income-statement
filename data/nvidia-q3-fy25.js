/* ====================================================================
 *  NVIDIA Q3 FY25 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q3-fy25.png with the
 *  high-level income-statement helper and fixed source-image geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.fromIncomeStatement({
    key: 'nvidia-q3-fy25',
    name: 'NVIDIA · Q3 FY25',
    meta: {
      title: 'NVIDIA Q3 FY25 Income Statement',
      period: 'Q3 FY25',
      periodNote: 'Ending Oct. 2024',
      periodX: 2840,
      periodY: 232,
      periodNoteY: 287,
      titleSize: 142,
      titleX: 1478,
      titleY: 117,
      titleTextLength: 2471,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nvidia-q3-fy25.png', width: 2976, height: 1486 },
      logoWidth: 390,
      logoHeight: 279,
      logoY: 173,
      logoViewBox: '0 0 390 279',
      logoSvg: `
        <rect x="140" y="0" width="166" height="178" fill="#76b900"/>
        <g transform="translate(47,17) scale(10.4,8)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="281" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA<tspan font-size="38" baseline-shift="super">&#174;</tspan></text>
      `,
    },

    revenue: [
      {
        id: 'data_center',
        label: 'Data Center',
        value: 30.8,
        notes: ['+17% Q/Q'],
        icons: ['server'],
        iconSize: 34,
        labelSide: 'left',
        color: '#0e7451',
        labelColor: '#0e7451',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        value: 3.3,
        notes: ['+14% Q/Q'],
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
        notes: ['+7% Q/Q'],
        icons: ['eye'],
        iconSize: 32,
        labelSide: 'left',
        color: '#49006f',
        labelColor: '#49006f',
      },
      {
        id: 'automotive',
        label: 'Automotive',
        value: 0.4,
        notes: ['+30% Q/Q'],
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
        notes: ['+10% Q/Q'],
        icons: ['factory'],
        iconSize: 32,
        labelSide: 'left',
        color: '#740046',
        labelColor: '#740046',
      },
    ],
    costOfRevenue: 8.9,
    opex: [
      { id: 'rnd', label: ['Research &', 'Development'], value: 3.4, notes: ['10% of revenue', '(1pp) Q/Q'] },
      { id: 'sga', label: ['Sales, General', '& Admin'], value: 0.9, notes: ['3% of revenue', '(0pp) Q/Q'] },
    ],
    tax: 3.0,
    otherIncome: [{ id: 'other', label: 'Other', value: 0.4 }],

    derived: {
      revenueHub: { value: 35.1, notes: ['+17% Q/Q'] },
      grossProfit: { value: 26.2, notes: ['75% margin', '(1pp) Q/Q'] },
      operatingProfit: { label: 'Operating profit', value: 21.9, notes: ['62% margin', '+0pp Q/Q'] },
      operatingExpenses: { value: 4.3 },
      netProfit: { label: 'Net profit', value: 19.3, notes: ['55% margin', '(0pp) Q/Q'] },
    },
  });

  const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));
  dataset.render = {
    width: 2976,
    height: 1486,
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
    scale: 12.0,
    nodes: {
      data_center: { x: 496, y: 420, width: 82, height: 370 },
      gaming: { x: 496, y: 932, width: 82, height: 40 },
      professional_visualization: { x: 496, y: 1102, width: 82, height: 6 },
      automotive: { x: 496, y: 1252, width: 82, height: 5 },
      oem_other: { x: 496, y: 1400, width: 82, height: 1.5 },
      revenue: { x: 1021, y: 665, width: 82, height: 421 },
      gross_profit: { x: 1557, y: 568, width: 82, height: 314 },
      cost_of_revenue: { x: 1557, y: 1107, width: 82, height: 107 },
      operating_profit: { x: 2100, y: 466, width: 82, height: 263 },
      operating_expenses: { x: 2100, y: 953, width: 82, height: 52 },
      other: { x: 2498, y: 650, width: 82, height: 5 },
      net_profit: { x: 2626, y: 362, width: 82, height: 232 },
      tax: { x: 2626, y: 832, width: 82, height: 36 },
      rnd: { x: 2626, y: 1080, width: 82, height: 41 },
      sga: { x: 2626, y: 1334, width: 82, height: 11 },
    },
    labels: {
      data_center: {
        blocks: [
          { parts: ['name'], x: 337, top: 579, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 537, top: 311, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['server'], x: 14, y: 496, size: 150, color: '#000000', strokeWidth: 2.5 },
      },
      gaming: {
        blocks: [
          { parts: ['name'], x: 379, top: 922, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 537, top: 834, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['controller'], x: 0, y: 886, size: 170, color: '#000000', strokeWidth: 2.7 },
      },
      professional_visualization: {
        blocks: [
          { parts: ['name'], x: 320, top: 1015, anchor: 'middle', nameSize: 40, lineGap: 10 },
          { parts: ['value', 'notes'], x: 537, top: 999, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['eye'], x: 0, y: 1035, size: 170, color: '#000000', strokeWidth: 2.7 },
      },
      automotive: {
        blocks: [
          { parts: ['name'], x: 337, top: 1227, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 537, top: 1149, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['car'], x: 0, y: 1169, size: 178, color: '#000000', strokeWidth: 2.7 },
      },
      oem_other: {
        blocks: [
          { parts: ['name'], x: 322, top: 1362, anchor: 'middle', nameSize: 40 },
          { parts: ['value', 'notes'], x: 537, top: 1286, anchor: 'middle', valueSize: 43, noteSize: 31 },
        ],
        icons: { names: ['factory'], x: 0, y: 1297, size: 156, color: '#000000', strokeWidth: 2.7 },
      },
      revenue: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1062, top: 499, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      gross_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 1598, top: 349, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      operating_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2141, top: 251, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      other: {
        blocks: [
          { parts: ['name', 'value'], x: 2522, top: 675, anchor: 'middle', nameSize: 34, valueSize: 34 },
        ],
      },
      net_profit: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2736, top: 382, anchor: 'start', nameSize: 40, valueSize: 43, noteSize: 31 },
        ],
      },
      cost_of_revenue: {
        blocks: [
          { parts: ['name', 'value'], x: 1598, top: 1232, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      operating_expenses: {
        blocks: [
          { parts: ['name', 'value'], x: 2141, top: 1028, anchor: 'middle', nameSize: 38, valueSize: 37 },
        ],
      },
      tax: {
        blocks: [
          { parts: ['name', 'value'], x: 2800, top: 812, anchor: 'start', nameSize: 35, valueSize: 34 },
        ],
      },
      rnd: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2842, top: 1026, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
      sga: {
        blocks: [
          { parts: ['name', 'value', 'notes'], x: 2842, top: 1284, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31 },
        ],
      },
    },
  };

  Object.assign(byId.data_center || {}, { linkTint: '#88b7a3' });
  Object.assign(byId.gaming || {}, { linkTint: '#add383' });
  Object.assign(byId.professional_visualization || {}, { linkTint: '#a07fb4' });
  Object.assign(byId.automotive || {}, { linkTint: '#82aad7' });
  Object.assign(byId.oem_other || {}, { linkTint: '#bc81a0' });

  if (byId.cost_of_revenue) byId.cost_of_revenue.valueText = '($8.9B)';
  if (byId.operating_expenses) byId.operating_expenses.valueText = '($4.3B)';
  if (byId.tax) byId.tax.valueText = '($3.0B)';
  if (byId.rnd) byId.rnd.valueText = '($3.4B)';
  if (byId.sga) byId.sga.valueText = '($0.9B)';
  if (byId.net_profit) byId.net_profit.valueText = '$19.3B';

  dataset.links.forEach((link) => {
    if (link.source === 'operating_profit' && link.target === 'net_profit') link.targetOrder = 0;
    if (link.source === 'other' && link.target === 'net_profit') {
      link.targetOrder = 1;
      link.y0 = 652.5;
      link.y1 = 590;
      link.width = 5;
      link.curve = { c1x: 2604, c2x: 2594 };
    }
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
