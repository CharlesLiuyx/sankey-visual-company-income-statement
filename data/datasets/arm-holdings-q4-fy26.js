/* ====================================================================
 * Arm Holdings - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/arm-holdings-q4-fy26.png as a fixed
 * d3-sankey layout with reusable SVG/text Arm annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const BLUE = '#0095bd';
  const BLUE_LINK = '#82c5d7';
  const GREEN = '#27a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cf98';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon('armHoldingsCompanyWordmark', 695, 274, 530, 188, '0 0 565 205')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'arm-holdings-q4-fy26',
    name: 'Arm Holdings · Q4 FY26',
    company: 'Arm Holdings',
    meta: {
      company: 'Arm Holdings',
      title: 'Arm Holdings Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/arm-holdings-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 118,
      titleWeight: 800,
      titleTextLength: 2398,
      periodX: 2382,
      periodY: 257,
      periodNoteY: 300,
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
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 39, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 0.198,
      nodes: {
        license_other: { x: 303, y: 643, width: 72, height: 162 },
        royalty: { x: 303, y: 997, width: 72, height: 132 },
        revenue_by_type: { x: 613, y: 738, width: 72, height: 295 },
        external_customers: { x: 925, y: 652, width: 72, height: 215 },
        related_parties: { x: 925, y: 1062, width: 72, height: 82 },
        revenue: { x: 1236, y: 739, width: 72, height: 295 },
        gross_profit: { x: 1549, y: 636, width: 72, height: 289 },
        cost_of_sales: { x: 1549, y: 1147, width: 72, height: 6 },
        operating_profit: { x: 1859, y: 556, width: 72, height: 87 },
        operating_expenses: { x: 1859, y: 833, width: 72, height: 203 },
        other: { x: 2062, y: 566, width: 72, height: 8 },
        net_profit: { x: 2174, y: 453, width: 72, height: 62 },
        tax: { x: 2174, y: 752, width: 72, height: 34 },
        rnd: { x: 2174, y: 925, width: 72, height: 139 },
        sga: { x: 2174, y: 1226, width: 72, height: 64 },
      },
      labels: {
        license_other: {
          blocks: [
            {
              x: 339, top: 559, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 224, top: 648, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'License', size: 39, weight: 800 },
                { text: '& Other', size: 39, weight: 800 },
                { text: 'Support &', size: 28, weight: 400, color: NOTE },
                { text: 'Maintenance', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        royalty: {
          blocks: [
            {
              x: 339, top: 904, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 224, top: 1002, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Royalty', size: 39, weight: 800 },
                { text: 'Percentage', size: 28, weight: 400, color: NOTE },
                { text: 'or fixed', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue_by_type: {
          blocks: [
            {
              x: 649, top: 596, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+20% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        external_customers: {
          blocks: [
            {
              x: 961, top: 507, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'External Customers', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        related_parties: {
          blocks: [
            {
              x: 961, top: 1160, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Related parties', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+85% Y/Y', size: 28, weight: 400, color: NOTE },
                { text: 'Arm China', size: 28, weight: 400, color: NOTE },
                { text: 'Equity method investments', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1272, top: 596, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+20% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1585, top: 462, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '98% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1586, top: 1177, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of sales', size: 33, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1875, top: 377, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '29% margin', size: 28, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1895, top: 1057, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 34, weight: 800 },
                { text: 'expenses', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2055, top: 596, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2298, top: 440, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '21% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2398, top: 735, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2398, top: 930, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '47% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2398, top: 1228, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '21% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'license_other', col: 0, order: 0, type: 'source', label: ['License', '& Other'], value: 819, notes: ['+29% Y/Y', 'Support & Maintenance'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'royalty', col: 0, order: 1, type: 'source', label: 'Royalty', value: 671, notes: ['+11% Y/Y', 'Percentage or fixed'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue_by_type', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1490, notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'external_customers', col: 2, order: 0, type: 'source', label: 'External Customers', value: 1079, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      {
        id: 'related_parties',
        col: 2,
        order: 1,
        type: 'source',
        label: 'Related parties',
        value: 411,
        notes: ['+85% Y/Y', 'Arm China', 'Equity method investments'],
        color: BLUE,
        labelColor: BLUE,
        linkTint: BLUE_LINK,
      },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 1490, notes: ['+20% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 1458, notes: ['98% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_sales', col: 4, order: 1, type: 'cost', label: 'Cost of sales', value: 32, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 438, notes: ['29% margin', '(4pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1020, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 6, order: 0, type: 'profit', label: 'Other', value: 43, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 6, order: 1, type: 'profit', label: 'Net profit', value: 313, notes: ['21% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 168, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 698, notes: ['47% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 6, order: 4, type: 'cost', label: 'SG&A', value: 322, notes: ['21% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'license_other', target: 'revenue_by_type', value: 819, width: 162, targetOrder: 0 },
      { source: 'royalty', target: 'revenue_by_type', value: 671, width: 132, targetOrder: 1 },
      { source: 'revenue_by_type', target: 'external_customers', value: 1079, width: 215, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue_by_type', target: 'related_parties', value: 411, width: 82, sourceOrder: 1, targetOrder: 0 },
      { source: 'external_customers', target: 'revenue', value: 1079, width: 215, sourceOrder: 0, targetOrder: 0 },
      { source: 'related_parties', target: 'revenue', value: 411, width: 82, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 1458, width: 289, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 32, width: 6, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 438, width: 87, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1020, width: 203, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 270, width: 54, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 43, width: 8, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 168, width: 33, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 698, width: 139, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 322, width: 64, sourceOrder: 1, targetOrder: 0 },
    ],
  });
})();
