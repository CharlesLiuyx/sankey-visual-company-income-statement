/* ====================================================================
 *  NVIDIA Q4 FY24 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q4-fy24.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q4-fy24',
    period: 'Q4 FY24',
    periodNote: 'Ending Jan. 2024',
    width: 2924,
    height: 1436,

    revenue: [
      { id: 'data_center', value: 18.4, notes: ['+27% Q/Q'] },
      { id: 'gaming', value: 2.9, notes: ['+0% Q/Q'] },
      { id: 'professional_visualization', value: 0.5, notes: ['+11% Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['+8% Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['+23% Q/Q'] },
    ],
    revenueTotal: 22.1,
    revenueNotes: ['+22% Q/Q'],
    costOfRevenue: 5.3,
    grossProfit: 16.8,
    grossProfitNotes: ['76% margin', '+2pp Q/Q'],
    operatingExpenses: 3.2,
    rnd: 2.5,
    rndNotes: ['11% of revenue', '(2pp) Y/Y'],
    sga: 0.7,
    sgaNotes: ['3% of revenue', '(1pp) Y/Y'],
    operatingProfit: 13.6,
    operatingProfitNotes: ['62% margin', '+4pp Q/Q'],
    otherIncome: [{ id: 'other', label: 'Other', value: 0.5 }],
    tax: 1.8,
    netProfit: 12.3,
    netProfitNotes: ['56% margin', '+5pp Q/Q'],
  });

  dataset.layout.scale = 18.15;
  Object.assign(dataset.layout.nodes.data_center, { x: 500, y: 391, width: 80, height: 333 });
  Object.assign(dataset.layout.nodes.gaming, { x: 500, y: 863, width: 80, height: 50 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 500, y: 1054, width: 80, height: 7 });
  Object.assign(dataset.layout.nodes.automotive, { x: 500, y: 1221, width: 80, height: 6 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 500, y: 1385, width: 80, height: 2 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1019, y: 643, width: 79, height: 402 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1549, y: 558, width: 80, height: 305 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1548, y: 1043, width: 81, height: 96 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2065, y: 476, width: 79, height: 246 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2062, y: 887, width: 80, height: 57 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2586, y: 381, width: 80, height: 222 });
  Object.assign(dataset.layout.nodes.tax, { x: 2586, y: 791, width: 80, height: 32 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2586, y: 994, width: 80, height: 44 });
  Object.assign(dataset.layout.nodes.sga, { x: 2586, y: 1306, width: 80, height: 12 });
  Object.assign(dataset.layout.nodes.other, { x: 2435, y: 651, width: 80, height: 7 });

  const setLinkWidth = (source, target, width) => {
    const link = dataset.links.find((item) => item.source === source && item.target === target);
    if (link) link.width = width;
  };
  [
    ['data_center', 'revenue', 333],
    ['gaming', 'revenue', 50],
    ['professional_visualization', 'revenue', 7],
    ['automotive', 'revenue', 6],
    ['oem_other', 'revenue', 2],
    ['revenue', 'gross_profit', 305],
    ['revenue', 'cost_of_revenue', 96],
    ['gross_profit', 'operating_profit', 246],
    ['gross_profit', 'operating_expenses', 57],
    ['operating_profit', 'net_profit', 222],
    ['operating_profit', 'tax', 32],
    ['operating_expenses', 'rnd', 44],
    ['operating_expenses', 'sga', 12],
    ['other', 'net_profit', 7],
  ].forEach(([source, target, width]) => setLinkWidth(source, target, width));

  Object.assign(dataset.meta, {
    titleX: 1463,
    titleY: 119,
    titleSize: 144,
    titleWeight: 700,
    titleTextLength: 2418,
    periodX: 2793,
    periodY: 228,
    periodNoteY: 284,
    logoWidth: 370,
    logoHeight: 227,
    logoY: 199,
  });
  dataset.meta.logoSvg = `
        <rect x="140" y="0" width="166" height="178" fill="#76b900"/>
        <g transform="translate(140,10) scale(6.8)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="279" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA</text>
      `;

  Object.assign(dataset.layout.labels.data_center.icons, { x: 22, y: 455, size: 150 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 5, y: 806, size: 170 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 12, y: 975, size: 160 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 0, y: 1093, size: 178 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 8, y: 1275, size: 156 });

  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 371, top: 489, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 537, top: 284, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 382, top: 859, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 541, top: 754, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 338, top: 990, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 537, top: 946, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 339, top: 1191, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 542, top: 1117, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 314, top: 1340, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 541, top: 1276, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1058, top: 493, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1591, top: 350, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2105, top: 264, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2692, top: 377, anchor: 'start', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2484, top: 668, anchor: 'middle', nameSize: 34, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.tax.blocks = [
    { parts: ['name', 'value'], x: 2726, top: 755, anchor: 'middle', nameSize: 35, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1587, top: 1156, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2105, top: 965, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2803, top: 975, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2779, top: 1213, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];

  dataset.links.forEach((link) => {
    if (link.source === 'gross_profit' && link.target === 'operating_expenses') {
      link.y1 = 915.5;
    }
    if (link.source === 'operating_profit' && link.target === 'net_profit') {
      link.sourceOrder = 0;
      link.targetOrder = 0;
    }
    if (link.source === 'operating_profit' && link.target === 'tax') {
      link.sourceOrder = 1;
      link.y0 = 705.5;
    }
    if (link.source === 'other' && link.target === 'net_profit') {
      link.targetOrder = 1;
      link.width = 7;
      link.y0 = 654.5;
      link.y1 = 602.5;
      link.curve = { c1x: 2575, c2x: 2586 };
    }
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
