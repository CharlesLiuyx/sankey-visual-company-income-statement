/* ====================================================================
 *  NVIDIA Q3 FY23 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q3-fy23.png with the
 *  NVIDIA quarterly income-statement helper and fixed source geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.nvidiaQuarterlyDataset({
    key: 'nvidia-q3-fy23',
    period: 'Q3 FY23',
    periodNote: 'Ending Oct. 2022',
    periodStamp: 'none',
    width: 2890,
    height: 1396,
    revenueHeight: 275,

    revenue: [
      { id: 'data_center', value: 3.8, notes: ['+1% Q/Q'] },
      { id: 'gaming', value: 1.6, notes: ['(23%) Q/Q'] },
      { id: 'professional_visualization', value: 0.2, notes: ['(60%) Q/Q'] },
      { id: 'automotive', value: 0.3, notes: ['+14% Q/Q'] },
      { id: 'oem_other', value: 0.1, notes: ['(48%) Q/Q'] },
    ],
    revenueTotal: 5.9,
    revenueNotes: ['(12%) Q/Q'],
    costOfRevenue: 2.8,
    grossProfit: 3.2,
    grossProfitNotes: ['54% margin', '+10pp Q/Q'],
    operatingExpenses: 2.6,
    rnd: 1.9,
    sga: 0.6,
    operatingProfit: 0.6,
    operatingProfitNotes: ['10% margin', '+3pp Q/Q'],
    otherIncome: [
      { id: 'other', label: 'Other', value: 0.012, valueText: '$12M' },
      { id: 'tax_benefit', label: 'Tax benefit', value: 0.067, valueText: '$67M' },
    ],
    tax: 0,
    netProfit: 0.7,
    netProfitNotes: ['11% margin', '+2pp Q/Q'],
  });

  Object.assign(dataset.layout.nodes.data_center, { x: 507, y: 398, width: 79 });
  Object.assign(dataset.layout.nodes.gaming, { x: 507, y: 726, width: 80 });
  Object.assign(dataset.layout.nodes.professional_visualization, { x: 507, y: 969, width: 80 });
  Object.assign(dataset.layout.nodes.automotive, { x: 507, y: 1156, width: 79 });
  Object.assign(dataset.layout.nodes.oem_other, { x: 507, y: 1348, width: 79 });
  Object.assign(dataset.layout.nodes.revenue, { x: 1028, y: 677, width: 78 });
  Object.assign(dataset.layout.nodes.gross_profit, { x: 1563, y: 560, width: 80 });
  Object.assign(dataset.layout.nodes.cost_of_revenue, { x: 1566, y: 936, width: 79 });
  Object.assign(dataset.layout.nodes.operating_profit, { x: 2119, y: 471, width: 79 });
  Object.assign(dataset.layout.nodes.operating_expenses, { x: 2116, y: 712, width: 79 });
  Object.assign(dataset.layout.nodes.net_profit, { x: 2561, y: 372, width: 79 });
  Object.assign(dataset.layout.nodes.rnd, { x: 2564, y: 947, width: 79 });
  Object.assign(dataset.layout.nodes.sga, { x: 2564, y: 1266, width: 79 });
  Object.assign(dataset.layout.nodes.other, { x: 2170, y: 575, width: 80, height: 1.5 });
  Object.assign(dataset.layout.nodes.tax_benefit, { x: 2366, y: 641, width: 80, height: 3 });
  Object.assign(dataset.meta, { titleX: 1462, titleY: 117, titleSize: 143, titleTextLength: 2421 });
  Object.assign(dataset.layout.labels.data_center.icons, { x: 34, y: 385 });
  Object.assign(dataset.layout.labels.gaming.icons, { x: 17, y: 685 });
  Object.assign(dataset.layout.labels.professional_visualization.icons, { x: 23, y: 897 });
  Object.assign(dataset.layout.labels.automotive.icons, { x: 16, y: 1047 });
  Object.assign(dataset.layout.labels.oem_other.icons, { x: 18, y: 1220 });
  dataset.layout.labels.data_center.blocks = [
    { parts: ['name'], x: 351, top: 444, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 545, top: 291, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 10 },
  ];
  dataset.layout.labels.gaming.blocks = [
    { parts: ['name'], x: 387, top: 730, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 550, top: 618, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.professional_visualization.blocks = [
    { parts: ['name'], x: 320, top: 914, anchor: 'middle', nameSize: 40, lineGap: 10 },
    { parts: ['value', 'notes'], x: 537, top: 859, anchor: 'middle', valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.automotive.blocks = [
    { parts: ['name'], x: 337, top: 1131, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 537, top: 1044, anchor: 'middle', valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.oem_other.blocks = [
    { parts: ['name'], x: 336, top: 1321, anchor: 'middle', nameSize: 40 },
    { parts: ['value', 'notes'], x: 549, top: 1240, anchor: 'middle', valueSize: 43, noteSize: 31, lineGap: 17 },
  ];
  dataset.layout.labels.gross_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1596, top: 348, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.operating_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2155, top: 260, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.cost_of_revenue.blocks = [
    { parts: ['name', 'value'], x: 1597, top: 1065, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.operating_expenses.blocks = [
    { parts: ['name', 'value'], x: 2141, top: 836, anchor: 'middle', nameSize: 38, valueSize: 37, lineGap: 18 },
  ];
  dataset.layout.labels.revenue.blocks = [
    { parts: ['name', 'value', 'notes'], x: 1065, top: 506, anchor: 'middle', nameSize: 40, valueSize: 43, noteSize: 31 },
  ];
  dataset.layout.labels.net_profit.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2646, top: 310, anchor: 'start', nameSize: 40, valueSize: 43, noteSize: 31, lineGap: 16 },
  ];
  dataset.layout.labels.rnd.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2758, top: 928, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.sga.blocks = [
    { parts: ['name', 'value', 'notes'], x: 2757, top: 1218, anchor: 'middle', nameSize: 34, valueSize: 34, noteSize: 31, lineGap: 13 },
  ];
  dataset.layout.labels.other.blocks = [
    { parts: ['name', 'value'], x: 2195, top: 575, anchor: 'middle', nameSize: 34, valueSize: 34 },
  ];
  dataset.layout.labels.tax_benefit.blocks = [
    { parts: ['name', 'value'], x: 2430, top: 648, anchor: 'middle', nameSize: 34, valueSize: 34 },
  ];
  dataset.meta.logoY = 203;
  dataset.meta.logoSvg = `
        <rect x="58" y="0" width="233" height="178" fill="#76b900"/>
        <g transform="translate(58,10) scale(6.8)" fill="#ffffff">
          <path d="${window.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="190" y="242" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="82" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA</text>
      `;

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
