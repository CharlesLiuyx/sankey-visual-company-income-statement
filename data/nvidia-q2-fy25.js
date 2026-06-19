/* ====================================================================
 *  NVIDIA Q2 FY25 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q2-fy25.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q2-fy25',
    period: 'Q2 FY25',
    periodNote: 'Ending July 2024',
    width: 2970,
    height: 1482,
    logoVariant: 'compact',

    revenue: [
      { id: 'data_center', value: 26.3, notes: ['+16% Q/Q'] },
      { id: 'gaming', value: 2.9, notes: ['+9% Q/Q'] },
      { id: 'professional_visualization', value: 0.5, notes: ['+6% Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['+5% Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['+13% Q/Q'] },
    ],
    revenueTotal: 30.0,
    revenueNotes: ['+15% Q/Q'],
    costOfRevenue: 7.5,
    grossProfit: 22.6,
    grossProfitNotes: ['75% margin', '(3pp) Q/Q'],
    operatingExpenses: 3.9,
    rnd: 3.1,
    rndNotes: ['10% of revenue', '(0pp) Q/Q'],
    sga: 0.8,
    sgaNotes: ['3% of revenue', '(0pp) Q/Q'],
    operatingProfit: 18.6,
    operatingProfitNotes: ['62% margin', '(3pp) Q/Q'],
    otherIncome: [{ id: 'other', label: 'Other', value: 0.6 }],
    tax: 2.6,
    netProfit: 16.6,
    netProfitNotes: ['55% margin', '(2pp) Q/Q'],
  });

  dataset.layout.scale = 13.9;
  Object.assign(dataset.layout.nodes.data_center, { x: 506, y: 422, width: 82, height: 366 });
  Object.assign(dataset.layout.nodes.gaming, { x: 506, y: 928, width: 82, height: 38 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 506, y: 1110, width: 82, height: 5 });
  Object.assign(dataset.layout.nodes.automotive, { x: 506, y: 1261, width: 82, height: 4 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 506, y: 1429, width: 82, height: 2 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1038, y: 660, width: 82, height: 418 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1565, y: 549, width: 82, height: 314 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1567, y: 1102, width: 82, height: 103 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2103, y: 454, width: 82, height: 260 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2100, y: 931, width: 82, height: 53 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2635, y: 348, width: 82, height: 231 });
  Object.assign(dataset.layout.nodes.tax, { x: 2635, y: 816, width: 82, height: 35 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2635, y: 1062, width: 82, height: 41 });
  Object.assign(dataset.layout.nodes.sga, { x: 2635, y: 1330, width: 82, height: 10 });
  Object.assign(dataset.layout.nodes.other, { x: 2492, y: 647, width: 80, height: 8 });

  const setLinkWidth = (source, target, width) => {
    const link = dataset.links.find((item) => item.source === source && item.target === target);
    if (link) link.width = width;
  };
  [
    ['data_center', 'revenue', 366],
    ['gaming', 'revenue', 38],
    ['professional_visualization', 'revenue', 5],
    ['automotive', 'revenue', 4],
    ['oem_other', 'revenue', 2],
    ['revenue', 'gross_profit', 314],
    ['revenue', 'cost_of_revenue', 103],
    ['gross_profit', 'operating_profit', 260],
    ['gross_profit', 'operating_expenses', 53],
    ['operating_profit', 'net_profit', 231],
    ['operating_profit', 'tax', 35],
    ['operating_expenses', 'rnd', 41],
    ['operating_expenses', 'sga', 10],
    ['other', 'net_profit', 8],
  ].forEach(([source, target, width]) => setLinkWidth(source, target, width));

  Object.assign(dataset.meta, {
    titleX: 1485,
    titleY: 115,
    titleSize: 145,
    titleWeight: 700,
    titleTextLength: 2460,
    periodX: 2838,
    periodY: 227,
    periodNoteY: 282,
    logoWidth: 390,
    logoHeight: 279,
    logoY: 167,
    logoViewBox: '0 0 390 279',
  });
  dataset.meta.logoSvg = `
        <g transform="translate(28,-43) scale(11.25)" fill="#76b900">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="191" y="281" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA<tspan font-size="38" baseline-shift="super">&#174;</tspan></text>
      `;

  Object.assign(dataset.layout.labels.data_center.icons, { x: 16, y: 500, size: 170 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 0, y: 881, size: 182 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 10, y: 1020, size: 166 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 0, y: 1168, size: 182 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 8, y: 1320, size: 158 });

  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 344, top: 560, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 545, top: 306, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 387, top: 922, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 817, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 322, top: 1035, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 540, top: 1001, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 342, top: 1231, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 1148, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 323, top: 1388, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 1306, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1080, top: 492, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1597, top: 332, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2131, top: 238, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2740, top: 360, anchor: 'start', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2533, top: 674, anchor: 'middle', nameSize: 34, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.tax.blocks = [
    { parts: ['name', 'value'], x: 2858, top: 793, anchor: 'middle', nameSize: 35, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1601, top: 1218, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2134, top: 994, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2718, top: 1012, anchor: 'start', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2718, top: 1245, anchor: 'start', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];

  dataset.links.forEach((link) => {
    if (link.source === 'gross_profit' && link.target === 'operating_expenses') {
      link.y1 = 957.5;
    }
    if (link.source === 'operating_profit' && link.target === 'net_profit') {
      link.sourceOrder = 0;
      link.targetOrder = 0;
      link.y1 = 463.5;
    }
    if (link.source === 'operating_profit' && link.target === 'tax') {
      link.sourceOrder = 1;
      link.y0 = 696;
    }
    if (link.source === 'other' && link.target === 'net_profit') {
      link.targetOrder = 1;
      link.width = 8;
      link.y0 = 651;
      link.y1 = 575;
      link.curve = { c1x: 2605, c2x: 2594 };
    }
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
