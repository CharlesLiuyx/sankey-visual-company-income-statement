/* ====================================================================
 *  NVIDIA Q3 FY26 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q3-fy26.png with the
 *  high-level income-statement helper and fixed source-image geometry.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.fromIncomeStatement({
    key: 'nvidia-q3-fy26',
    name: 'NVIDIA · Q3 FY26',
    meta: {
      title: 'NVIDIA Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Oct 2025',
      periodX: 2860,
      periodY: 210,
      periodNoteY: 264,
      titleSize: 142,
      titleY: 118,
      titleTextLength: 2461,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nvidia-q3-fy26.png', width: 2996, height: 1488 },
      logoWidth: 390,
      logoHeight: 279,
      logoY: 163,
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
        value: 51.2,
        notes: ['+66% Y/Y'],
        icons: ['server'],
        iconSize: 34,
        labelSide: 'left',
        color: '#0e7451',
        labelColor: '#0e7451',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        value: 4.3,
        notes: ['+30% Y/Y'],
        icons: ['controller'],
        iconSize: 32,
        labelSide: 'left',
        color: '#a5db57',
        labelColor: '#66af04',
      },
      {
        id: 'professional_visualization',
        label: ['Professional', 'Visualization'],
        value: 0.8,
        notes: ['+56% Y/Y'],
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
        notes: ['+32% Y/Y'],
        icons: ['car'],
        iconSize: 32,
        labelSide: 'left',
        color: '#095ab8',
        labelColor: '#095ab8',
      },
      {
        id: 'oem_other',
        label: 'OEM & Other',
        value: 0.2,
        notes: ['+79% Y/Y'],
        icons: ['factory'],
        iconSize: 32,
        labelSide: 'left',
        color: '#740046',
        labelColor: '#740046',
      },
    ],
    costOfRevenue: 15.2,
    opex: [
      { id: 'rnd', label: ['Research &', 'Development'], value: 4.7, notes: ['8% of revenue', '(1pp) Y/Y'] },
      { id: 'sga', label: ['Sales, General', '& Admin'], value: 1.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],
    tax: 6.0,
    otherIncome: [{ id: 'other', label: 'Other', value: 1.9 }],

    derived: {
      revenueHub: { value: 57.0, notes: ['+62% Y/Y'] },
      grossProfit: { value: 41.8, notes: ['73% margin', '(1pp) Y/Y'] },
      operatingProfit: { value: 36.0, notes: ['63% margin', '+1pp Y/Y'] },
      operatingExpenses: { value: 5.8 },
      netProfit: { value: 31.9, notes: ['56% margin', '+1pp Y/Y'] },
    },
  });

  const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));
  dataset.render = {
    width: 2996,
    height: 1488,
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
    scale: 7.735,
    nodes: {
      data_center: { x: 511, y: 411, width: 81, height: 396 },
      gaming: { x: 511, y: 948, width: 81, height: 30 },
      professional_visualization: { x: 511, y: 1116, width: 81, height: 5 },
      automotive: { x: 511, y: 1260, width: 81, height: 2 },
      oem_other: { x: 511, y: 1401, width: 81, height: 1.5 },
      revenue: { x: 1044, y: 646, width: 80, height: 441 },
      gross_profit: { x: 1575, y: 543, width: 82, height: 324 },
      cost_of_revenue: { x: 1575, y: 1083, width: 82, height: 116 },
      operating_profit: { x: 2108, y: 448, width: 81, height: 278 },
      operating_expenses: { x: 2108, y: 940, width: 81, height: 44 },
      other: { x: 2505, y: 595, width: 80, height: 11 },
      net_profit: { x: 2640, y: 339, width: 82, height: 246 },
      tax: { x: 2640, y: 781, width: 82, height: 46 },
      rnd: { x: 2640, y: 1058, width: 82, height: 34 },
      sga: { x: 2640, y: 1342, width: 82, height: 7 },
    },
    labels: {
      data_center: {
        blocks: [
          {
            x: 363, top: 571, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'Data Center', size: 40, weight: 700, color: '#0e7451' }],
          },
          {
            x: 552, top: 305, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$51.2B', size: 43, weight: 400, color: '#0e7451' },
              { text: '+66% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['server'], x: 52, y: 524, size: 96, color: '#000000', strokeWidth: 2.15 },
      },
      gaming: {
        blocks: [
          {
            x: 359, top: 931, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'Gaming', size: 40, weight: 700, color: '#66af04' }],
          },
          {
            x: 552, top: 842, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$4.3B', size: 43, weight: 400, color: '#a5db57' },
              { text: '+30% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['controller'], x: 50, y: 915, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      professional_visualization: {
        blocks: [
          {
            x: 352, top: 1047, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Professional', size: 40, weight: 700, color: '#49006f' },
              { text: 'Visualization', size: 40, weight: 700, color: '#49006f' },
            ],
          },
          {
            x: 552, top: 1006, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$0.8B', size: 43, weight: 400, color: '#49006f' },
              { text: '+56% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['eye'], x: 49, y: 1074, size: 110, color: '#000000', strokeWidth: 2.15 },
      },
      automotive: {
        blocks: [
          {
            x: 357, top: 1228, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'Automotive', size: 40, weight: 700, color: '#095ab8' }],
          },
          {
            x: 552, top: 1157, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$0.6B', size: 43, weight: 400, color: '#095ab8' },
              { text: '+32% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['car'], x: 51, y: 1204, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      oem_other: {
        blocks: [
          {
            x: 352, top: 1375, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'OEM & Other', size: 40, weight: 700, color: '#740046' }],
          },
          {
            x: 552, top: 1301, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$0.2B', size: 43, weight: 400, color: '#740046' },
              { text: '+79% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['factory'], x: 54, y: 1325, size: 102, color: '#000000', strokeWidth: 2.15 },
      },
      revenue: {
        blocks: [
          {
            x: 1084, top: 480, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 40, weight: 700, color: '#000000' },
              { text: '$57.0B', size: 43, weight: 400, color: '#000000' },
              { text: '+62% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      gross_profit: {
        blocks: [
          {
            x: 1616, top: 330, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross profit', size: 40, weight: 700, color: '#128040' },
              { text: '$41.8B', size: 43, weight: 400, color: '#128040' },
              { text: '73% margin', size: 31, weight: 400, color: '#535353' },
              { text: '(1pp) Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      operating_profit: {
        blocks: [
          {
            x: 2148, top: 237, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 40, weight: 700, color: '#128040' },
              { text: '$36.0B', size: 43, weight: 400, color: '#128040' },
              { text: '63% margin', size: 31, weight: 400, color: '#535353' },
              { text: '+1pp Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      other: {
        blocks: [
          {
            x: 2538, top: 622, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Other', size: 34, weight: 700, color: '#128040' },
              { text: '$1.9B', size: 34, weight: 400, color: '#128040' },
            ],
          },
        ],
      },
      net_profit: {
        blocks: [
          {
            x: 2750, top: 365, anchor: 'start', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 40, weight: 700, color: '#128040' },
              { text: '$31.9B', size: 43, weight: 400, color: '#128040' },
              { text: '56% margin', size: 31, weight: 400, color: '#535353' },
              { text: '+1pp Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      cost_of_revenue: {
        blocks: [
          {
            x: 1616, top: 1218, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 700, color: '#800003' },
              { text: 'revenue', size: 38, weight: 700, color: '#800003' },
              { text: '($15.2B)', size: 37, weight: 400, color: '#800003' },
            ],
          },
        ],
      },
      operating_expenses: {
        blocks: [
          {
            x: 2148, top: 1003, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 38, weight: 700, color: '#800003' },
              { text: 'expenses', size: 38, weight: 700, color: '#800003' },
              { text: '($5.8B)', size: 37, weight: 400, color: '#800003' },
            ],
          },
        ],
      },
      tax: {
        blocks: [
          {
            x: 2816, top: 770, anchor: 'start', lineGap: 10,
            lines: [
              { text: 'Tax', size: 35, weight: 700, color: '#800003' },
              { text: '($6.0B)', size: 34, weight: 400, color: '#800003' },
            ],
          },
        ],
      },
      rnd: {
        blocks: [
          {
            x: 2870, top: 1007, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Research &', size: 34, weight: 700, color: '#800003' },
              { text: 'Development', size: 34, weight: 700, color: '#800003' },
              { text: '($4.7B)', size: 34, weight: 400, color: '#800003' },
              { text: '8% of revenue', size: 31, weight: 400, color: '#535353' },
              { text: '(1pp) Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      sga: {
        blocks: [
          {
            x: 2870, top: 1260, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Sales, General', size: 34, weight: 700, color: '#800003' },
              { text: '& Admin', size: 34, weight: 700, color: '#800003' },
              { text: '($1.1B)', size: 34, weight: 400, color: '#800003' },
              { text: '2% of revenue', size: 31, weight: 400, color: '#535353' },
              { text: '(1pp) Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
    },
  };

  Object.assign(byId.data_center || {}, { linkTint: '#98bfae' });
  Object.assign(byId.gaming || {}, { linkTint: '#bde586' });
  Object.assign(byId.professional_visualization || {}, { linkTint: '#b99bd1' });
  Object.assign(byId.automotive || {}, { linkTint: '#96c4e9' });
  Object.assign(byId.oem_other || {}, { linkTint: '#cf91b4' });

  if (byId.cost_of_revenue) byId.cost_of_revenue.valueText = '($15.2B)';
  if (byId.operating_expenses) byId.operating_expenses.valueText = '($5.8B)';
  if (byId.tax) byId.tax.valueText = '($6.0B)';
  if (byId.rnd) byId.rnd.valueText = '($4.7B)';
  if (byId.sga) byId.sga.valueText = '($1.1B)';
  if (byId.net_profit) byId.net_profit.valueText = '$31.9B';

  dataset.links.forEach((link) => {
    if (link.source === 'revenue' && link.target === 'gross_profit') link.value = 41.8;
    if (link.source === 'revenue' && link.target === 'cost_of_revenue') link.value = 15.2;
    if (link.source === 'gross_profit' && link.target === 'operating_profit') link.value = 36.0;
    if (link.source === 'gross_profit' && link.target === 'operating_expenses') link.value = 5.8;
    if (link.source === 'operating_profit' && link.target === 'net_profit') {
      link.value = 30.0;
      link.targetOrder = 0;
    }
    if (link.source === 'operating_profit' && link.target === 'tax') link.value = 6.0;
    if (link.source === 'other' && link.target === 'net_profit') {
      link.targetOrder = 1;
      link.width = 11;
      link.y0 = 600.5;
      link.y1 = 576.5;
      link.curve = { c1x: 2618, c2x: 2606 };
    }
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
