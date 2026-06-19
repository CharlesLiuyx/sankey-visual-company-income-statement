/* ====================================================================
 *  NVIDIA Q1 FY25 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q1-fy25.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q1-fy25',
    period: 'Q1 FY25',
    periodNote: 'Ending Apr. 2024',
    width: 2988,
    height: 1462,
    logoVariant: 'compact',

    revenue: [
      { id: 'data_center', value: 22.6, notes: ['+23% Q/Q'] },
      { id: 'gaming', value: 2.6, notes: ['(8%) Q/Q'] },
      { id: 'professional_visualization', value: 0.4, notes: ['(8%) Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['+17% Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['(13%) Q/Q'] },
    ],
    revenueTotal: 26.0,
    revenueNotes: ['+18% Q/Q'],
    costOfRevenue: 5.6,
    grossProfit: 20.4,
    grossProfitNotes: ['78% margin', '+2pp Q/Q'],
    operatingExpenses: 3.5,
    rnd: 2.7,
    rndNotes: ['10% of revenue', '(1pp) Q/Q'],
    sga: 0.8,
    sgaNotes: ['3% of revenue', '(0pp) Q/Q'],
    operatingProfit: 16.9,
    operatingProfitNotes: ['65% margin', '+3pp Q/Q'],
    otherIncome: [{ id: 'other', label: 'Other', value: 0.4 }],
    tax: 2.4,
    netProfit: 14.9,
    netProfitNotes: ['57% margin', '+2pp Q/Q'],
  });

  dataset.layout.scale = 15.25;
  Object.assign(dataset.layout.nodes.data_center, { x: 506, y: 391, width: 82, height: 341 });
  Object.assign(dataset.layout.nodes.gaming, { x: 506, y: 883, width: 82, height: 37 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 506, y: 1058, width: 82, height: 6 });
  Object.assign(dataset.layout.nodes.automotive, { x: 506, y: 1215, width: 82, height: 6 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 506, y: 1376, width: 82, height: 2 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1040, y: 654, width: 80, height: 392 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1568, y: 551, width: 82, height: 308 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1568, y: 1080, width: 82, height: 84 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2104, y: 454, width: 81, height: 254 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2102, y: 894, width: 80, height: 50 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2636, y: 353, width: 82, height: 224 });
  Object.assign(dataset.layout.nodes.tax, { x: 2636, y: 789, width: 82, height: 34 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2636, y: 1017, width: 82, height: 39 });
  Object.assign(dataset.layout.nodes.sga, { x: 2636, y: 1269, width: 82, height: 10 });
  Object.assign(dataset.layout.nodes.other, { x: 2492, y: 642, width: 80, height: 3 });

  const setLinkWidth = (source, target, width) => {
    const link = dataset.links.find((item) => item.source === source && item.target === target);
    if (link) link.width = width;
  };
  [
    ['data_center', 'revenue', 341],
    ['gaming', 'revenue', 37],
    ['professional_visualization', 'revenue', 6],
    ['automotive', 'revenue', 6],
    ['oem_other', 'revenue', 2],
    ['revenue', 'gross_profit', 308],
    ['revenue', 'cost_of_revenue', 84],
    ['gross_profit', 'operating_profit', 254],
    ['gross_profit', 'operating_expenses', 50],
    ['operating_profit', 'net_profit', 224],
    ['operating_profit', 'tax', 34],
    ['operating_expenses', 'rnd', 39],
    ['operating_expenses', 'sga', 10],
    ['other', 'net_profit', 3],
  ].forEach(([source, target, width]) => setLinkWidth(source, target, width));

  Object.assign(dataset.meta, {
    titleX: 1494,
    titleY: 115,
    titleSize: 145,
    titleWeight: 700,
    titleTextLength: 2460,
    periodX: 2838,
    periodY: 215,
    periodNoteY: 270,
    logoWidth: 370,
    logoHeight: 225,
    logoY: 195,
  });

  Object.assign(dataset.layout.labels.data_center.icons, { x: 16, y: 500, size: 170 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 0, y: 808, size: 182 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 10, y: 982, size: 166 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 0, y: 1110, size: 182 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 8, y: 1285, size: 158 });

  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 357, top: 532, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 288, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 378, top: 881, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 775, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 327, top: 988, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 540, top: 955, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 356, top: 1201, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 1117, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 342, top: 1353, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 1274, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1080, top: 492, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1609, top: 343, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2145, top: 244, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2745, top: 360, anchor: 'start', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2533, top: 657, anchor: 'middle', nameSize: 34, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.tax.blocks = [
    { parts: ['name', 'value'], x: 2858, top: 756, anchor: 'middle', nameSize: 35, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1609, top: 1180, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2143, top: 963, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2863, top: 983, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2862, top: 1229, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];

  dataset.links.forEach((link) => {
    if (link.source === 'gross_profit' && link.target === 'operating_expenses') {
      link.y1 = 919;
    }
    if (link.source === 'operating_profit' && link.target === 'net_profit') {
      link.targetOrder = 0;
      link.y1 = 465;
    }
    if (link.source === 'other' && link.target === 'net_profit') {
      link.targetOrder = 1;
      link.width = 3;
      link.y0 = 644;
      link.y1 = 576;
      link.curve = { c1x: 2605, c2x: 2594 };
    }
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
