/* ====================================================================
 * Amazon - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/amazon-q1-fy26.png as a fixed
 * d3-sankey layout with reusable SVG/text Amazon business annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff9900';
  const ORANGE_LINK = '#f7ca7f';
  const GREEN = '#25a126';
  const GREEN_LABEL = '#009a4b';
  const GREEN_LINK = '#9aca99';
  const RED = '#d60000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e18182';
  const NOTE = '#666666';
  const TITLE = '#15527a';
  const RIGHT_LABEL_X = 2352;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('amazonCompanyWordmark', 702, 287, 0.98)}
      ${icon('amazonDotCom', 101, 417, 0.72)}
      ${icon('amazonPhysicalStores', 96, 562, 0.72)}
      ${icon('amazonAdvertisingCluster', 77, 897, 0.48)}
      ${icon('amazonSubscriptionCluster', 106, 1040, 0.47)}
      ${icon('amazonAws', 205, 1148, 0.46)}

      <g transform="translate(1716 516)">
        <path d="M38 108H248C264 108 273 99 273 83V38C273 24 264 15 248 15H126L104 0L82 15H38C24 15 15 24 15 38V83C15 99 24 108 38 108Z"
          fill="#f2f2f2" stroke="#1d1d1d" stroke-width="4"/>
        ${icon('amazonAws', 40, 30, 0.17)}
        <text x="150" y="58" font-size="33" font-weight="400" fill="${GREEN_LABEL}">$14.2B</text>
        <text x="40" y="90" font-size="34" font-weight="800" fill="#333333">Other</text>
        <text x="150" y="91" font-size="28" font-weight="400" fill="${GREEN_LABEL}">$9.7B</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'amazon-q1-fy26',
    name: 'Amazon · Q1 FY26',
    company: 'Amazon',
    meta: {
      company: 'Amazon',
      title: 'Amazon Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/amazon-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2245,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: '#111111' },
        hub: { node: ORANGE, label: '#111111' },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 38, value: 38, note: 27, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 2.14,
      nodes: {
        online_stores: { x: 392, y: 356, width: 72, height: 138 },
        physical_store: { x: 392, y: 599, width: 72, height: 12 },
        third_party_seller_services: { x: 392, y: 717, width: 72, height: 89 },
        advertising: { x: 392, y: 894, width: 72, height: 37 },
        subscription: { x: 392, y: 1026, width: 72, height: 29 },
        aws: { x: 392, y: 1155, width: 72, height: 81 },
        other_revenue: { x: 392, y: 1330, width: 72, height: 4 },
        revenue: { x: 860, y: 649, width: 72, height: 389 },
        gross_profit: { x: 1325, y: 537, width: 72, height: 202 },
        cost_of_sales: { x: 1325, y: 982, width: 72, height: 188 },
        operating_profit: { x: 1795, y: 450, width: 72, height: 51 },
        operating_expenses: { x: 1795, y: 739, width: 72, height: 150 },
        other_income: { x: 2145, y: 432, width: 72, height: 34 },
        net_profit: { x: 2262, y: 365, width: 72, height: 65 },
        tax: { x: 2262, y: 588, width: 72, height: 21 },
        technology_content: { x: 2262, y: 718, width: 72, height: 63 },
        fulfillment: { x: 2262, y: 895, width: 72, height: 58 },
        sm: { x: 2262, y: 1067, width: 72, height: 22 },
        ga: { x: 2262, y: 1218, width: 72, height: 6 },
        other_opex: { x: 2262, y: 1340, width: 72, height: 2 },
      },
      labels: {
        online_stores: {
          blocks: [
            {
              x: 345, top: 356, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Online Stores', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 428, top: 282, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+12% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        physical_store: {
          blocks: [
            {
              x: 345, top: 517, anchor: 'end',
              lines: [{ text: 'Physical Store', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 532, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+5% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        third_party_seller_services: {
          blocks: [
            {
              x: 345, top: 695, anchor: 'end', lineGap: 9,
              lines: [
                { text: '3rd party', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers', size: 38, weight: 800, color: '#111111' },
                { text: 'sellers services', size: 38, weight: 800, color: '#111111' },
              ],
            },
            {
              x: 428, top: 643, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+14% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 345, top: 858, anchor: 'end',
              lines: [{ text: 'Advertising', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 828, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+24% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 345, top: 1005, anchor: 'end',
              lines: [{ text: 'Subscription', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 948, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+15% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        aws: {
          blocks: [
            {
              x: 428, top: 1072, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+28% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 250, top: 1312, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: '#111111' }],
            },
            {
              x: 428, top: 1235, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 34, weight: 400, color: '#111111' },
                { text: '+25% Y/Y', size: 23, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 895, top: 493, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: '#111111' },
                { text: '$value', size: 38, weight: 400, color: '#111111' },
                { text: '+17% Y/Y', size: 26, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1363, top: 355, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '52% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1362, top: 1187, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Cost of sales', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1830, top: 260, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '13% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1827, top: 912, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 39, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 39, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2142, top: 470, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 32, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2408, top: 339, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 42, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '17% margin', size: 28, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2477, top: 560, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        technology_content: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 714, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Technology &', size: 29, weight: 800, color: RED_LABEL },
                { text: 'content ($29.6B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        fulfillment: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 903, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Fulfillment ($27.3B)', size: 28, weight: 800, color: RED_LABEL },
                { text: '15% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1056, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($10.3B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '6% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1213, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($2.6B)', size: 29, weight: 800, color: RED_LABEL },
                { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1340, anchor: 'start',
              lines: [
                { text: 'Other opex ($0.5B)', size: 27, weight: 800, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'online_stores', col: 0, order: 0, type: 'source', label: 'Online Stores', value: 64.3, notes: ['+12% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'physical_store', col: 0, order: 1, type: 'source', label: 'Physical Store', value: 5.8, notes: ['+5% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'third_party_seller_services', col: 0, order: 2, type: 'source', label: '3rd party sellers services', value: 41.6, notes: ['+14% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'advertising', col: 0, order: 3, type: 'source', label: 'Advertising', value: 17.2, notes: ['+24% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'subscription', col: 0, order: 4, type: 'source', label: 'Subscription', value: 13.4, notes: ['+15% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'aws', col: 0, order: 5, type: 'source', label: 'AWS', value: 37.6, notes: ['+28% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 1.6, notes: ['+25% Y/Y'], color: ORANGE, linkTint: ORANGE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 181.5, notes: ['+17% Y/Y'], color: ORANGE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 94.1, notes: ['52% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 2, order: 1, type: 'cost', label: 'Cost of sales', value: 87.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 23.9, notes: ['13% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'Operating expenses', value: 70.2 },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 16.0, valueText: '$16.0B' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 30.3, notes: ['17% margin', '+6pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 9.6 },
      { id: 'technology_content', col: 5, order: 2, type: 'cost', label: 'Technology & content', value: 29.6, notes: ['16% of revenue', '+2pp Y/Y'] },
      { id: 'fulfillment', col: 5, order: 3, type: 'cost', label: 'Fulfillment', value: 27.3, notes: ['15% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 4, type: 'cost', label: 'S&M', value: 10.3, notes: ['6% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 5, type: 'cost', label: 'G&A', value: 2.6, notes: ['1% of revenue', '(0pp) Y/Y'] },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other opex', value: 0.5 },
    ],

    links: [
      { source: 'online_stores', target: 'revenue', value: 64.3, targetOrder: 0 },
      { source: 'physical_store', target: 'revenue', value: 5.8, targetOrder: 1 },
      { source: 'third_party_seller_services', target: 'revenue', value: 41.6, targetOrder: 2 },
      { source: 'advertising', target: 'revenue', value: 17.2, targetOrder: 3 },
      { source: 'subscription', target: 'revenue', value: 13.4, targetOrder: 4 },
      { source: 'aws', target: 'revenue', value: 37.6, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 1.6, targetOrder: 6 },
      { source: 'revenue', target: 'gross_profit', value: 94.1, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 87.5, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 23.9, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 70.2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 14.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 9.6, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 16.0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'technology_content', value: 29.6, targetOrder: 0 },
      { source: 'operating_expenses', target: 'fulfillment', value: 27.3, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 10.3, targetOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 2.6, targetOrder: 3 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.5, targetOrder: 4 },
    ],
  });
})();
