/* ====================================================================
 *  NVIDIA Q4 FY23 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q4-fy23.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q4-fy23',
    period: 'Q4 FY23',
    periodNote: 'Ending Jan. 2023',
    periodStamp: 'bottom-center',
    width: 2930,
    height: 1428,
    revenueHeight: 330,

    revenue: [
      { id: 'data_center', value: 3.6, notes: ['(6%) Q/Q'] },
      { id: 'gaming', value: 1.8, notes: ['+16% Q/Q'] },
      { id: 'professional_visualization', value: 0.2, notes: ['+13% Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['+17% Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['+15% Q/Q'] },
    ],
    revenueTotal: 6.1,
    revenueNotes: ['+2% Q/Q'],
    costOfRevenue: 2.2,
    grossProfit: 3.8,
    grossProfitNotes: ['63% margin', '+10pp Q/Q'],
    operatingExpenses: 2.6,
    rnd: 2.0,
    sga: 0.6,
    operatingProfit: 1.3,
    operatingProfitNotes: ['21% margin', '+11pp Q/Q'],
    otherIncome: [
      { id: 'other', label: 'Other', value: 0.032, valueText: '$32M' },
      { id: 'tax_benefit', label: 'Tax benefit', value: 0.1, valueText: '$0.1B' },
    ],
    tax: 0,
    netProfit: 1.4,
    netProfitNotes: ['23% margin', '+12pp Q/Q'],
  });

  dataset.layout.scale = 48.6;
  Object.assign(dataset.layout.nodes.data_center, { x: 509, y: 381, width: 80, height: 174 });
  Object.assign(dataset.layout.nodes.gaming, { x: 509, y: 719, width: 81, height: 88 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 509, y: 986, width: 80, height: 11 });
  Object.assign(dataset.layout.nodes.automotive, { x: 509, y: 1168, width: 80, height: 13 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 509, y: 1377, width: 81, height: 4 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1025, y: 660, width: 80, height: 293 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1538, y: 555, width: 80, height: 185 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1535, y: 989, width: 80, height: 107 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2059, y: 410, width: 80, height: 61 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2062, y: 721, width: 81, height: 125 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2594, y: 234, width: 81, height: 68 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2594, y: 909, width: 81, height: 94 });
  Object.assign(dataset.layout.nodes.sga, { x: 2594, y: 1246, width: 81, height: 30 });
  Object.assign(dataset.layout.nodes.other, { x: 2260, y: 495, width: 80, height: 3 });
  Object.assign(dataset.layout.nodes.tax_benefit, { x: 2406, y: 604, width: 80, height: 5 });
  const setLinkWidth = (source, target, width) => {
    const link = dataset.links.find((item) => item.source === source && item.target === target);
    if (link) link.width = width;
  };
  [
    ['data_center', 'revenue', 174],
    ['gaming', 'revenue', 88],
    ['revenue', 'gross_profit', 185],
    ['revenue', 'cost_of_revenue', 107],
    ['gross_profit', 'operating_profit', 60],
    ['gross_profit', 'operating_expenses', 125],
    ['operating_expenses', 'rnd', 94],
    ['operating_expenses', 'sga', 30],
    ['operating_profit', 'net_profit', 60],
    ['other', 'net_profit', 3],
    ['tax_benefit', 'net_profit', 5],
  ].forEach(([source, target, width]) => setLinkWidth(source, target, width));
  Object.assign(dataset.meta, { logoWidth: 324, logoHeight: 232, logoY: 198 });
  dataset.meta.logoSvg = `
        <rect x="140" y="0" width="166" height="178" fill="#76b900"/>
        <g transform="translate(140,10) scale(6.8)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="273" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA</text>
      `;
  Object.assign(dataset.layout.labels.data_center.icons, { x: 24, y: 382, size: 150 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 6, y: 685, size: 170 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 20, y: 904, size: 170 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 0, y: 1056, size: 178 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 21, y: 1265, size: 156 });
  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 343, top: 461, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 555, top: 273, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 10 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 386, top: 746, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 552, top: 617, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 320, top: 941, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 554, top: 876, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 336, top: 1154, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 543, top: 1064, anchor: 'middle', valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 338, top: 1358, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 533, top: 1263, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1064, top: 492, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1577, top: 342, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2093, top: 197, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2698, top: 258, anchor: 'start', nameSize: 40, valueSize: 43, noteSize: 31, lineGap: 16 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1580, top: 1117, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2098, top: 873, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2800, top: 921, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2804, top: 1223, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2317, top: 512, anchor: 'middle', nameSize: 34, valueSize: 34 },
  ];
  dataset.layout.labels.tax_benefit.blocks = [
    { parts: ['name', 'value'], x: 2434, top: 634, anchor: 'middle', nameSize: 34, valueSize: 34, lineGap: 15 },
  ];

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
