/* ====================================================================
 *  NVIDIA Q4 FY26 income statement ($B)
 *  Reconstructed from input/processed/nvidia-q4-fy26.png with the
 *  high-level income-statement helper.
 * ==================================================================== */
(function () {
  const dataset = window.SankeyEngine.fromIncomeStatement({
    key: 'nvidia-q4-fy26',
    name: 'NVIDIA · Q4 FY26',
    meta: {
      title: 'NVIDIA Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Jan. 2026',
      titleSize: 142,
      titleY: 127,
      titleTextLength: 2472,
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/nvidia-q4-fy26.png', width: 3004, height: 1496 },
      logoWidth: 390,
      logoHeight: 279,
      logoY: 171,
      logoViewBox: '0 0 190 104',
      logoSvg:
        ((window.DATASETS.find((d) => d.key === 'nvidia-q1-fy27') || {}).meta || {})
          .logoSvg || undefined,
    },

    revenue: [
      {
        id: 'data_center',
        label: 'Data Center',
        value: 62.3,
        notes: ['+75% Y/Y'],
        icons: ['server'],
        iconSize: 34,
        labelSide: 'left',
        color: '#0e7451',
        labelColor: '#0e7451',
      },
      {
        id: 'gaming',
        label: 'Gaming',
        value: 3.7,
        notes: ['+47% Y/Y'],
        icons: ['controller'],
        iconSize: 32,
        labelSide: 'left',
        color: '#76c900',
        labelColor: '#66af04',
      },
      {
        id: 'professional_visualization',
        label: ['Professional', 'Visualization'],
        value: 1.3,
        notes: ['+159% Y/Y'],
        icons: ['eye'],
        iconSize: 32,
        labelSide: 'left',
        color: '#5b1787',
        labelColor: '#5b1787',
      },
      {
        id: 'automotive',
        label: 'Automotive',
        value: 0.6,
        notes: ['+6% Y/Y'],
        icons: ['car'],
        iconSize: 32,
        labelSide: 'left',
        color: '#0072c6',
        labelColor: '#0072c6',
      },
      {
        id: 'oem_other',
        label: 'OEM & Other',
        value: 0.2,
        notes: ['+28% Y/Y'],
        icons: ['factory'],
        iconSize: 32,
        labelSide: 'left',
        color: '#8f145c',
        labelColor: '#8f145c',
      },
    ],
    costOfRevenue: 17.0,
    opex: [
      { id: 'rnd', label: ['Research &', 'Development'], value: 5.5, notes: ['8% of revenue', '(1pp) Y/Y'] },
      { id: 'sga', label: ['Sales, General', '& Admin'], value: 1.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],
    tax: 7.4,
    otherIncome: [{ id: 'other', label: 'Other', value: 6.1 }],

    derived: {
      revenueHub: { notes: ['+73% Y/Y'] },
      grossProfit: { value: 51.1, notes: ['75% margin', '+2pp Y/Y'] },
      operatingProfit: { value: 44.3, notes: ['65% margin', '+4pp Y/Y'] },
      operatingExpenses: { value: 6.8 },
      netProfit: { value: 43.0, notes: ['63% margin', '+7pp Y/Y'] },
    },
  });

  const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));
  dataset.render = {
    width: 3004,
    height: 1496,
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
    scale: 6.696,
    nodes: {
      data_center: { x: 513, y: 406, width: 81, height: 417 },
      gaming: { x: 513, y: 970, width: 81, height: 25 },
      professional_visualization: { x: 513, y: 1135, width: 81, height: 9 },
      automotive: { x: 513, y: 1281, width: 81, height: 4 },
      oem_other: { x: 513, y: 1422, width: 81, height: 1.5 },
      revenue: { x: 1046, y: 651, width: 80, height: 456 },
      gross_profit: { x: 1578, y: 547, width: 81, height: 340 },
      cost_of_revenue: { x: 1578, y: 1138, width: 81, height: 111 },
      operating_profit: { x: 2111, y: 451, width: 80, height: 297 },
      operating_expenses: { x: 2111, y: 994, width: 80, height: 43 },
      other: { x: 2496, y: 659, width: 80, height: 39 },
      net_profit: { x: 2643, y: 354, width: 81, height: 288 },
      tax: { x: 2643, y: 887, width: 81, height: 47 },
      rnd: { x: 2643, y: 1138, width: 81, height: 36 },
      sga: { x: 2643, y: 1379, width: 81, height: 7 },
    },
    labels: {
      data_center: {
        blocks: [
          {
            x: 358, top: 585, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'Data Center', size: 40, weight: 700, color: '#0e7451' }],
          },
          {
            x: 553, top: 290, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$62.3B', size: 43, weight: 400, color: '#0e7451' },
              { text: '+75% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['server'], x: 53, y: 556, size: 96, color: '#000000', strokeWidth: 2.15 },
      },
      gaming: {
        blocks: [
          {
            x: 360, top: 930, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'Gaming', size: 40, weight: 700, color: '#66af04' }],
          },
          {
            x: 553, top: 856, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$3.7B', size: 43, weight: 400, color: '#a5db57' },
              { text: '+47% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['controller'], x: 50, y: 915, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      professional_visualization: {
        blocks: [
          {
            x: 355, top: 1055, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Professional', size: 40, weight: 700, color: '#49006f' },
              { text: 'Visualization', size: 40, weight: 700, color: '#49006f' },
            ],
          },
          {
            x: 553, top: 1023, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$1.3B', size: 43, weight: 400, color: '#49006f' },
              { text: '+159% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['eye'], x: 49, y: 1074, size: 110, color: '#000000', strokeWidth: 2.15 },
      },
      automotive: {
        blocks: [
          {
            x: 355, top: 1243, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'Automotive', size: 40, weight: 700, color: '#095ab8' }],
          },
          {
            x: 553, top: 1165, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$0.6B', size: 43, weight: 400, color: '#095ab8' },
              { text: '+6% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['car'], x: 51, y: 1204, size: 108, color: '#000000', strokeWidth: 2.15 },
      },
      oem_other: {
        blocks: [
          {
            x: 352, top: 1379, anchor: 'middle', lineGap: 10,
            lines: [{ text: 'OEM & Other', size: 40, weight: 700, color: '#740046' }],
          },
          {
            x: 553, top: 1305, anchor: 'middle', lineGap: 10,
            lines: [
              { text: '$0.2B', size: 43, weight: 400, color: '#740046' },
              { text: '+28% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
        icons: { names: ['factory'], x: 54, y: 1325, size: 102, color: '#000000', strokeWidth: 2.15 },
      },
      revenue: {
        blocks: [
          {
            x: 1086, top: 477, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Revenue', size: 40, weight: 700, color: '#000000' },
              { text: '$68.1B', size: 43, weight: 400, color: '#000000' },
              { text: '+73% Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      gross_profit: {
        blocks: [
          {
            x: 1618, top: 330, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Gross profit', size: 40, weight: 700, color: '#128040' },
              { text: '$51.1B', size: 43, weight: 400, color: '#128040' },
              { text: '75% margin', size: 31, weight: 400, color: '#535353' },
              { text: '+2pp Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      operating_profit: {
        blocks: [
          {
            x: 2151, top: 232, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating profit', size: 40, weight: 700, color: '#128040' },
              { text: '$44.3B', size: 43, weight: 400, color: '#128040' },
              { text: '65% margin', size: 31, weight: 400, color: '#535353' },
              { text: '+4pp Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      other: {
        blocks: [
          {
            x: 2536, top: 720, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Other', size: 34, weight: 700, color: '#128040' },
              { text: '$6.1B', size: 34, weight: 400, color: '#128040' },
            ],
          },
        ],
      },
      net_profit: {
        blocks: [
          {
            x: 2752, top: 396, anchor: 'start', lineGap: 10,
            lines: [
              { text: 'Net profit', size: 40, weight: 700, color: '#128040' },
              { text: '$43.0B', size: 43, weight: 400, color: '#128040' },
              { text: '63% margin', size: 31, weight: 400, color: '#535353' },
              { text: '+7pp Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      cost_of_revenue: {
        blocks: [
          {
            x: 1618, top: 1273, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Cost of', size: 38, weight: 700, color: '#800003' },
              { text: 'revenue', size: 38, weight: 700, color: '#800003' },
              { text: '($17.0B)', size: 37, weight: 400, color: '#800003' },
            ],
          },
        ],
      },
      operating_expenses: {
        blocks: [
          {
            x: 2151, top: 1046, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Operating', size: 38, weight: 700, color: '#800003' },
              { text: 'expenses', size: 38, weight: 700, color: '#800003' },
              { text: '($6.8B)', size: 37, weight: 400, color: '#800003' },
            ],
          },
        ],
      },
      tax: {
        blocks: [
          {
            x: 2820, top: 871, anchor: 'start', lineGap: 10,
            lines: [
              { text: 'Tax', size: 35, weight: 700, color: '#800003' },
              { text: '($7.4B)', size: 34, weight: 400, color: '#800003' },
            ],
          },
        ],
      },
      rnd: {
        blocks: [
          {
            x: 2872, top: 1040, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Research &', size: 34, weight: 700, color: '#800003' },
              { text: 'Development', size: 34, weight: 700, color: '#800003' },
              { text: '($5.5B)', size: 34, weight: 400, color: '#800003' },
              { text: '8% of revenue', size: 31, weight: 400, color: '#535353' },
              { text: '(1pp) Y/Y', size: 31, weight: 400, color: '#535353' },
            ],
          },
        ],
      },
      sga: {
        blocks: [
          {
            x: 2872, top: 1258, anchor: 'middle', lineGap: 10,
            lines: [
              { text: 'Sales, General', size: 34, weight: 700, color: '#800003' },
              { text: '& Admin', size: 34, weight: 700, color: '#800003' },
              { text: '($1.3B)', size: 34, weight: 400, color: '#800003' },
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

  if (byId.cost_of_revenue) byId.cost_of_revenue.valueText = '($17.0B)';
  if (byId.net_profit) byId.net_profit.valueText = '$43.0B';

  dataset.links.forEach((link) => {
    if (link.source === 'operating_profit' && link.target === 'net_profit') link.targetOrder = 0;
    if (link.source === 'other' && link.target === 'net_profit') link.targetOrder = 1;
  });

  (window.DATASETS = window.DATASETS || []).push(dataset);
})();
