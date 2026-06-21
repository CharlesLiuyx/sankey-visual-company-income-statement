/* ====================================================================
 * AMD - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/amd-q1-fy26.png as a fixed
 * d3-sankey layout with reusable SVG AMD annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLUE = '#4f8fa3';
  const BLUE_LINK = '#a7c1c8';
  const ORANGE = '#ed6a00';
  const ORANGE_LINK = '#efba83';
  const MAGENTA = '#bd0034';
  const MAGENTA_LINK = '#d78299';
  const TEAL = '#075d6d';
  const TEAL_LINK = '#9ab9c2';
  const GREEN = '#27a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d90000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon('amdDataCenterCluster', 58, 356, 188, 310, '0 0 197 325')}
      ${svgIcon('amdRyzenWordmark', 40, 785, 205, 123, '0 0 232 139')}
      ${svgIcon('amdRadeonBadge', 63, 988, 170, 139, '0 0 195 160')}
      ${svgIcon('amdXilinxWordmark', 55, 1194, 205, 69, '0 0 226 76')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amd-q1-fy26',
    name: 'AMD · Q1 FY26',
    company: 'AMD',
    meta: {
      company: 'AMD',
      title: 'AMD Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amd-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2035,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 430,
      logoHeight: 126,
      logoY: 315,
      logoViewBox: '0 0 468 138',
      logoSvg: BUSINESS_ICONS.amdCompanyWordmark || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE },
        hub: { node: '#050505', label: '#050505' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 36.1,
      nodes: {
        data_center: { x: 570, y: 426, width: 67, height: 210 },
        client: { x: 570, y: 790, width: 67, height: 103 },
        gaming: { x: 570, y: 1057, width: 67, height: 24 },
        embedded: { x: 570, y: 1243, width: 67, height: 29 },
        revenue: { x: 1010, y: 668, width: 67, height: 372 },
        gross_profit: { x: 1450, y: 563, width: 68, height: 196 },
        cost_of_revenue: { x: 1450, y: 966, width: 68, height: 174 },
        operating_profit: { x: 1893, y: 485, width: 67, height: 53 },
        operating_expenses: { x: 1891, y: 713, width: 67, height: 142 },
        other: { x: 2230, y: 512, width: 68, height: 5 },
        net_profit: { x: 2331, y: 427, width: 67, height: 49 },
        tax: { x: 2331, y: 632, width: 67, height: 7 },
        rnd: { x: 2331, y: 778, width: 67, height: 86 },
        sga: { x: 2331, y: 1005, width: 67, height: 44 },
        amortization: { x: 2331, y: 1212, width: 67, height: 8 },
      },
      labels: {
        data_center: {
          blocks: [
            {
              x: 604, top: 333, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+57% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 540, top: 520, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Data Center', size: 40, weight: 800 },
                { text: '28% operating margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        client: {
          blocks: [
            {
              x: 604, top: 702, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+26% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 535, top: 833, anchor: 'end', lineGap: 8,
              lines: [{ text: 'Client', size: 40, weight: 800 }],
            },
            {
              x: 534, top: 916, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Client and Gaming', size: 28, weight: 400, color: NOTE },
                { text: '16% operating margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gaming: {
          blocks: [
            {
              x: 604, top: 946, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 535, top: 1064, anchor: 'end', lineGap: 8,
              lines: [{ text: 'Gaming', size: 40, weight: 800 }],
            },
          ],
        },
        embedded: {
          blocks: [
            {
              x: 604, top: 1138, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 535, top: 1238, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Embedded', size: 40, weight: 800 },
                { text: '39% operating margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1044, top: 528, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+38% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1484, top: 398, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '53% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1484, top: 1145, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1926, top: 316, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '14% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1925, top: 884, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2220, top: 524, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2420, top: 428, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '13% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2502, top: 631, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2401, top: 784, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800 },
                { text: 'Development', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '23% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2401, top: 1005, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Sales, General', size: 31, weight: 800 },
                { text: '& Admin', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: 2401, top: 1210, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 31, weight: 800 },
                { text: 'of intangibles', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'data_center', col: 0, order: 0, type: 'source', label: 'Data Center', value: 5.8, notes: ['+57% Y/Y', '28% operating margin', '+3pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'client', col: 0, order: 1, type: 'source', label: 'Client', value: 2.9, notes: ['+26% Y/Y', 'Client and Gaming', '16% operating margin', '(1pp) Y/Y'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 0.7, notes: ['+11% Y/Y'], color: MAGENTA, labelColor: MAGENTA, linkTint: MAGENTA_LINK },
      { id: 'embedded', col: 0, order: 3, type: 'source', label: 'Embedded', value: 0.9, notes: ['+6% Y/Y', '39% operating margin', '(1pp) Y/Y'], color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 10.3, notes: ['+38% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 5.4, notes: ['53% margin', '+3pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.8 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 1.5, notes: ['14% margin', '+4pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.9 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, color: '#40a740', linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.4, notes: ['13% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.2 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: ['Research &', 'Development'], value: 2.4, notes: ['23% of revenue', '+0pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: ['Sales, General', '& Admin'], value: 1.3, notes: ['12% of revenue', '+0pp Y/Y'] },
      { id: 'amortization', col: 5, order: 4, type: 'cost', label: ['Amortization', 'of intangibles'], value: 0.3, notes: ['3% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'data_center', target: 'revenue', value: 5.8, targetOrder: 0 },
      { source: 'client', target: 'revenue', value: 2.9, targetOrder: 1 },
      { source: 'gaming', target: 'revenue', value: 0.7, targetOrder: 2 },
      { source: 'embedded', target: 'revenue', value: 0.9, targetOrder: 3 },
      { source: 'revenue', target: 'gross_profit', value: 5.4, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.9, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1.3, width: 44, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.1, width: 5, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LABEL, right: GREEN_LINK } },
      { source: 'operating_expenses', target: 'rnd', value: 2.4, width: 86, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.3, width: 44, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 0.3, width: 8, sourceOrder: 2, targetOrder: 0 },
    ],
  });
})();
