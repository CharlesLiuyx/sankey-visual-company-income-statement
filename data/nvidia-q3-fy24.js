/* ====================================================================
 *  NVIDIA Q3 FY24 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q3-fy24.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q3-fy24',
    period: 'Q3 FY24',
    periodNote: 'Ending Oct. 2023',
    width: 2918,
    height: 1436,
    revenueHeight: 410,

    revenue: [
      { id: 'data_center', value: 14.5, notes: ['+41% Q/Q'] },
      { id: 'gaming', value: 2.9, notes: ['+15% Q/Q'] },
      { id: 'professional_visualization', value: 0.4, notes: ['+10% Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['+3% Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['+11% Q/Q'] },
    ],
    revenueTotal: 18.1,
    revenueNotes: ['+34% Q/Q'],
    costOfRevenue: 4.7,
    grossProfit: 13.4,
    grossProfitNotes: ['74% margin', '+4pp Q/Q'],
    operatingExpenses: 3.0,
    rnd: 2.3,
    rndNotes: ['13% of revenue', '(2pp) Y/Y'],
    sga: 0.7,
    sgaNotes: ['4% of revenue', '(1pp) Y/Y'],
    operatingProfit: 10.4,
    operatingProfitNotes: ['57% margin', '+7pp Q/Q'],
    otherIncome: [{ id: 'other', label: 'Other', value: 0.1 }],
    tax: 1.3,
    netProfit: 9.2,
    netProfitNotes: ['51% margin', '+5pp Q/Q'],
  });

  dataset.layout.scale = 21.25;
  Object.assign(dataset.layout.nodes.data_center, { x: 492, y: 364, width: 80, height: 308 });
  Object.assign(dataset.layout.nodes.gaming, { x: 492, y: 829, width: 80, height: 59 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 492, y: 1031, width: 81, height: 8 });
  Object.assign(dataset.layout.nodes.automotive, { x: 492, y: 1194, width: 80, height: 6 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 492, y: 1374, width: 80, height: 2 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1017, y: 646, width: 79, height: 386 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1532, y: 543, width: 80, height: 284 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1529, y: 1029, width: 81, height: 99 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2057, y: 458, width: 79, height: 219 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2065, y: 897, width: 80, height: 63 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2578, y: 361, width: 80, height: 196 });
  Object.assign(dataset.layout.nodes.tax, { x: 2578, y: 755, width: 80, height: 26 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2578, y: 990, width: 80, height: 48 });
  Object.assign(dataset.layout.nodes.sga, { x: 2578, y: 1245, width: 80, height: 14 });
  Object.assign(dataset.layout.nodes.other, { x: 2421, y: 621, width: 80, height: 2 });

  const setLinkWidth = (source, target, width) => {
    const link = dataset.links.find((item) => item.source === source && item.target === target);
    if (link) link.width = width;
  };
  [
    ['data_center', 'revenue', 308],
    ['gaming', 'revenue', 59],
    ['professional_visualization', 'revenue', 8],
    ['automotive', 'revenue', 6],
    ['oem_other', 'revenue', 2],
    ['revenue', 'gross_profit', 284],
    ['revenue', 'cost_of_revenue', 99],
    ['gross_profit', 'operating_profit', 219],
    ['gross_profit', 'operating_expenses', 63],
    ['operating_profit', 'net_profit', 196],
    ['operating_profit', 'tax', 26],
    ['operating_expenses', 'rnd', 48],
    ['operating_expenses', 'sga', 14],
    ['other', 'net_profit', 2],
  ].forEach(([source, target, width]) => setLinkWidth(source, target, width));

  Object.assign(dataset.meta, {
    titleX: 1451,
    titleY: 115,
    titleSize: 144,
    titleWeight: 700,
    titleTextLength: 2422,
    periodX: 2785,
    periodY: 224,
    periodNoteY: 279,
    logoWidth: 317,
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

  Object.assign(dataset.layout.labels.data_center.icons, { x: 20, y: 421, size: 150 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 5, y: 801, size: 170 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 12, y: 945, size: 160 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 0, y: 1075, size: 178 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 8, y: 1251, size: 168 });

  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 342, top: 489, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 529, top: 255, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 374, top: 829, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 540, top: 722, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 318, top: 965, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 535, top: 923, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 333, top: 1174, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 540, top: 1088, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 322, top: 1351, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 539, top: 1276, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1054, top: 475, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31, lineGap: 12 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1567, top: 331, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2097, top: 245, anchor: 'middle', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2684, top: 367, anchor: 'start', nameSize: 41, valueSize: 44, noteSize: 32, lineGap: 12 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2470, top: 633, anchor: 'middle', nameSize: 34, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.tax.blocks = [
    { parts: ['name', 'value'], x: 2795, top: 733, anchor: 'middle', nameSize: 35, valueSize: 34, lineGap: 12 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1569, top: 1146, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2103, top: 976, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2780, top: 971, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2783, top: 1209, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
