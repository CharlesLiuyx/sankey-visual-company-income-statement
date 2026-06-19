/* ====================================================================
 *  NVIDIA Q2 FY24 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q2-fy24.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q2-fy24',
    period: 'Q2 FY24',
    periodNote: 'Ending July 2023',
    periodStamp: 'bottom-center',
    width: 2922,
    height: 1424,
    revenueHeight: 400,

    revenue: [
      { id: 'data_center', value: 10.3, notes: ['+141% Q/Q'] },
      { id: 'gaming', value: 2.5, notes: ['+11% Q/Q'] },
      { id: 'professional_visualization', value: 0.4, notes: ['+28% Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['(15%) Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['(14%) Q/Q'] },
    ],
    revenueTotal: 13.5,
    revenueNotes: ['+88% Q/Q'],
    costOfRevenue: 4.0,
    grossProfit: 9.5,
    grossProfitNotes: ['70% margin', '+5pp Q/Q'],
    operatingExpenses: 2.7,
    rnd: 2.0,
    sga: 0.6,
    operatingProfit: 6.8,
    operatingProfitNotes: ['50% margin', '+21pp Q/Q'],
    otherIncome: [{ id: 'other', label: 'Other', value: 0.2 }],
    tax: 0.8,
    netProfit: 6.2,
    netProfitNotes: ['46% margin', '+17pp Q/Q'],
  });

  dataset.layout.scale = 25.2;
  Object.assign(dataset.layout.nodes.data_center, { x: 495, y: 359, width: 80, height: 258 });
  Object.assign(dataset.layout.nodes.gaming, { x: 495, y: 797, width: 81, height: 61 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 500, y: 1025, width: 81, height: 8 });
  Object.assign(dataset.layout.nodes.automotive, { x: 495, y: 1205, width: 80, height: 5 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 495, y: 1368, width: 80, height: 2 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1017, y: 651, width: 78, height: 338 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1532, y: 553, width: 80, height: 238 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1534, y: 973, width: 81, height: 102 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2062, y: 447, width: 80, height: 170 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2059, y: 855, width: 80, height: 66 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2580, y: 358, width: 81, height: 155 });
  Object.assign(dataset.layout.nodes.tax, { x: 2580, y: 726, width: 81, height: 19 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2580, y: 988, width: 81, height: 50 });
  Object.assign(dataset.layout.nodes.sga, { x: 2580, y: 1243, width: 81, height: 15 });
  Object.assign(dataset.layout.nodes.other, { x: 2442, y: 573, width: 81, height: 3 });

  const setLinkWidth = (source, target, width) => {
    const link = dataset.links.find((item) => item.source === source && item.target === target);
    if (link) link.width = width;
  };
  [
    ['data_center', 'revenue', 258],
    ['gaming', 'revenue', 61],
    ['professional_visualization', 'revenue', 8],
    ['automotive', 'revenue', 5],
    ['oem_other', 'revenue', 2],
    ['revenue', 'gross_profit', 238],
    ['revenue', 'cost_of_revenue', 102],
    ['gross_profit', 'operating_profit', 170],
    ['gross_profit', 'operating_expenses', 66],
    ['operating_profit', 'net_profit', 151],
    ['operating_profit', 'tax', 19],
    ['operating_expenses', 'rnd', 50],
    ['operating_expenses', 'sga', 15],
    ['other', 'net_profit', 3],
  ].forEach(([source, target, width]) => setLinkWidth(source, target, width));

  Object.assign(dataset.meta, {
    titleX: 1453,
    titleY: 115,
    titleSize: 143,
    titleWeight: 700,
    titleTextLength: 2412,
    logoWidth: 317,
    logoHeight: 227,
    logoY: 199,
    periodX: 1433,
    periodY: 1358,
    periodNoteY: 1410,
  });
  dataset.meta.logoSvg = `
        <rect x="140" y="0" width="166" height="178" fill="#76b900"/>
        <g transform="translate(140,10) scale(6.8)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="279" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA</text>
      `;
  Object.assign(dataset.layout.labels.data_center.icons, { x: 24, y: 400, size: 150 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 5, y: 751, size: 170 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 17, y: 945, size: 170 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 0, y: 1088, size: 178 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 20, y: 1268, size: 156 });
  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 345, top: 468, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 251, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 10 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 382, top: 801, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 687, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 320, top: 967, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 535, top: 917, anchor: 'middle', valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 337, top: 1186, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 1097, anchor: 'middle', valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 331, top: 1350, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 535, top: 1262, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1056, top: 491, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1576, top: 342, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2100, top: 235, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2690, top: 344, anchor: 'start', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1571, top: 1090, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2095, top: 912, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 30 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2795, top: 945, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2790, top: 1177, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2478, top: 600, anchor: 'middle', nameSize: 34, valueSize: 34 },
  ];
  dataset.layout.labels.tax.blocks = [
    { parts: ['name', 'value'], x: 2732, top: 697, anchor: 'start', nameSize: 35, valueSize: 34 },
  ];

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
