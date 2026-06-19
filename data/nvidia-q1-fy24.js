/* ====================================================================
 *  NVIDIA Q1 FY24 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q1-fy24.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q1-fy24',
    period: 'Q1 FY24',
    periodNote: 'Ending Apr. 2023',
    periodStamp: 'bottom-center',
    width: 2920,
    height: 1418,
    revenueHeight: 370,

    revenue: [
      { id: 'data_center', value: 4.3, notes: ['+18% Q/Q'] },
      { id: 'gaming', value: 2.2, notes: ['+22% Q/Q'] },
      { id: 'professional_visualization', value: 0.3, notes: ['+31% Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['+1% Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['(8%) Q/Q'] },
    ],
    revenueTotal: 7.2,
    revenueNotes: ['+19% Q/Q'],
    costOfRevenue: 2.5,
    grossProfit: 4.6,
    grossProfitNotes: ['65% margin', '+1pp Q/Q'],
    operatingExpenses: 2.5,
    rnd: 1.9,
    sga: 0.6,
    operatingProfit: 2.1,
    operatingProfitNotes: ['30% margin', '+9pp Q/Q'],
    otherIncome: [{ id: 'other', label: 'Other', value: 0.069, valueText: '$69M' }],
    tax: 0.2,
    netProfit: 2.0,
    netProfitNotes: ['28% margin', '+5pp Q/Q'],
  });

  dataset.layout.scale = 46.9;
  Object.assign(dataset.layout.nodes.data_center, { x: 495, y: 387, width: 80, height: 201 });
  Object.assign(dataset.layout.nodes.gaming, { x: 495, y: 742, width: 81, height: 105 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 495, y: 1001, width: 80, height: 12 });
  Object.assign(dataset.layout.nodes.automotive, { x: 495, y: 1185, width: 80, height: 13 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 495, y: 1371, width: 80, height: 4 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1017, y: 655, width: 78, height: 338 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1529, y: 555, width: 80, height: 219 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1537, y: 988, width: 81, height: 120 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2042, y: 449, width: 80, height: 100 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2045, y: 748, width: 80, height: 118 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2580, y: 314, width: 81, height: 95 });
  Object.assign(dataset.layout.nodes.tax, { x: 2580, y: 718, width: 81, height: 7 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2580, y: 900, width: 81, height: 88 });
  Object.assign(dataset.layout.nodes.sga, { x: 2580, y: 1171, width: 81, height: 29 });
  Object.assign(dataset.layout.nodes.other, { x: 2424, y: 514, width: 81, height: 3 });

  const setLinkWidth = (source, target, width) => {
    const link = dataset.links.find((item) => item.source === source && item.target === target);
    if (link) link.width = width;
  };
  [
    ['data_center', 'revenue', 201],
    ['gaming', 'revenue', 105],
    ['professional_visualization', 'revenue', 12],
    ['automotive', 'revenue', 13],
    ['oem_other', 'revenue', 4],
    ['revenue', 'gross_profit', 219],
    ['revenue', 'cost_of_revenue', 120],
    ['gross_profit', 'operating_profit', 100],
    ['gross_profit', 'operating_expenses', 118],
    ['operating_profit', 'net_profit', 93],
    ['operating_profit', 'tax', 7],
    ['operating_expenses', 'rnd', 88],
    ['operating_expenses', 'sga', 29],
    ['other', 'net_profit', 3],
  ].forEach(([source, target, width]) => setLinkWidth(source, target, width));

  Object.assign(dataset.meta, {
    titleX: 1455,
    titleY: 110,
    titleSize: 142,
    titleTextLength: 2420,
    logoWidth: 317,
    logoHeight: 227,
    logoY: 196,
  });
  dataset.meta.logoSvg = `
        <rect x="140" y="0" width="166" height="178" fill="#76b900"/>
        <g transform="translate(140,10) scale(6.8)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="279" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA</text>
      `;
  Object.assign(dataset.layout.labels.data_center.icons, { x: 24, y: 397, size: 150 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 4, y: 728, size: 170 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 17, y: 932, size: 170 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 0, y: 1086, size: 178 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 8, y: 1262, size: 156 });
  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 345, top: 464, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 278, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 10 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 382, top: 766, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 643, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 320, top: 930, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 535, top: 893, anchor: 'middle', valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 337, top: 1163, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 1085, anchor: 'middle', valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 331, top: 1345, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 1262, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1056, top: 493, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1569, top: 349, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2073, top: 238, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2695, top: 330, anchor: 'start', nameSize: 40, valueSize: 43, noteSize: 31, lineGap: 16 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1577, top: 1125, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2085, top: 894, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2799, top: 920, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2786, top: 1138, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2460, top: 526, anchor: 'middle', nameSize: 34, valueSize: 34 },
  ];
  dataset.layout.labels.tax.blocks = [
    { parts: ['name', 'value'], x: 2746, top: 668, anchor: 'start', nameSize: 35, valueSize: 34 },
  ];

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
