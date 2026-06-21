/* ====================================================================
 *  ServiceNow - Q1 FY26 income statement ($B)
 *  Reconstructed from input/processed/servicenow-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const DARK = '#233f40';
  const DARK_LABEL = '#243d3d';
  const TEAL = '#82c7b6';
  const TEAL_LINK = '#b8ded5';
  const GRAY_LINK = '#9fa9a8';
  const GREEN = '#25a329';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#99cf98';
  const RED = '#d60000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e48486';
  const NOTE = '#6d6d6d';
  const RIGHT_COST_LABEL_X = 2480;

  const kpiCard = (x, width, title, value, note, rx = 28) => `
    <g>
      <rect x="${x}" y="1146" width="${width}" height="168" rx="${rx}" fill="${DARK}"/>
      <text x="${x + width / 2}" y="1199" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="1242" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="1287" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(39, 146, 'cRPO', '$12.6B', '+23% Y/Y', 30)}
      ${kpiCard(201, 325, 'Renewal rate', '97%', '(1pp) Y/Y', 26)}
      ${kpiCard(542, 377, 'Customers &gt; $5M', '630', '+22% Y/Y', 26)}
      <text x="98" y="1351" font-size="29" font-weight="500" fill="${NOTE}">cRPO = Current Remaining Performance Obligation</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'servicenow-q1-fy26',
    name: 'ServiceNow - Q1 FY26',
    meta: {
      title: 'ServiceNow Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/servicenow-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 132,
      titleWeight: 700,
      titleTextLength: 2460,
      logoWidth: 800,
      logoHeight: 142,
      logoY: 268,
      logoViewBox: '0 0 800 142',
      logoSvg: `
        <text x="0" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">service</text>
        <text x="365" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">n</text>
        <circle cx="478" cy="77" r="34" fill="none" stroke="${TEAL}" stroke-width="23"/>
        <text x="516" y="107" font-family="Arial,Helvetica,sans-serif" font-size="108" font-weight="800" fill="${DARK_LABEL}">w</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: '#12506f',
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DARK, label: DARK_LABEL },
        hub: { node: DARK, label: DARK_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
    },
    annotationsSvg: annotations,

    layout: {
      scale: 86,
      nodes: {
        subscription: { x: 370, y: 546, width: 73, height: 318 },
        professional_services: { x: 370, y: 1058, width: 73, height: 9 },
        revenue: { x: 837, y: 645, width: 73, height: 327 },
        gross_profit: { x: 1302, y: 546, width: 73, height: 241 },
        cost_of_revenue: { x: 1302, y: 987, width: 73, height: 77 },
        operating_profit: { x: 1772, y: 459, width: 73, height: 43 },
        operating_expenses: { x: 1772, y: 680, width: 73, height: 198 },
        interest: { x: 2114, y: 379, width: 73, height: 17 },
        net_profit: { x: 2250, y: 312, width: 73, height: 43 },
        tax: { x: 2250, y: 561, width: 73, height: 17 },
        sm: { x: 2250, y: 807, width: 73, height: 103 },
        rnd: { x: 2250, y: 1030, width: 73, height: 69 },
        ga: { x: 2250, y: 1232, width: 73, height: 26 },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 399, top: 444, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 41, weight: 400 },
                { text: '+22% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 205, top: 668, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Subscription', size: 41, weight: 800 },
                { text: '78% gross margin', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 400, top: 965, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400, color: TEAL },
                { text: '+19% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
            {
              x: 200, top: 1005, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Professional', size: 39, weight: 800, color: TEAL },
                { text: 'services', size: 39, weight: 800, color: TEAL },
                { text: '(21%) gross margin', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 873, top: 505, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Revenue', size: 41, weight: 800 },
                { text: '$value', size: 41, weight: 400 },
                { text: '+22% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1340, top: 360, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '75% margin', size: 30, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1340, top: 1089, anchor: 'middle', lineGap: 10,
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
              x: 1810, top: 278, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '13% margin', size: 30, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1810, top: 913, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2148, top: 412, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Interest', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2430, top: 278, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '12% margin', size: 30, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2430, top: 544, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 817, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '32% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 1014, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '22% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 1210, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 30, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 3.7, color: DARK, labelColor: DARK_LABEL, linkTint: GRAY_LINK,
      },
      {
        id: 'professional_services', col: 0, order: 1, type: 'source',
        label: ['Professional', 'services'], value: 0.1, color: TEAL, labelColor: TEAL, linkTint: TEAL_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 3.8, color: DARK, labelColor: DARK_LABEL,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 2.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 2.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 4, order: 0, type: 'profit',
        label: 'Interest', value: 0.2, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 0.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 3.7, width: 318 },
      { source: 'professional_services', target: 'revenue', value: 0.1, width: 9 },

      { source: 'revenue', target: 'gross_profit', value: 2.8, width: 241 },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.9, width: 77 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.5, width: 43 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.3, width: 198 },

      { source: 'operating_profit', target: 'net_profit', value: 0.3, width: 26, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 17, sourceOrder: 1 },
      { source: 'interest', target: 'net_profit', value: 0.2, width: 17, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 1.2, width: 103 },
      { source: 'operating_expenses', target: 'rnd', value: 0.8, width: 69 },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 26 },
    ],
  });
})();
