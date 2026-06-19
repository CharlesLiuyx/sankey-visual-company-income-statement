/* ====================================================================
 *  Salesforce — Q1 FY27 income statement ($B)
 *  Reconstructed from input/processed/salesforce-q1-fy27.png as a fixed d3-sankey
 *  layout.
 * ==================================================================== */
(function () {
  const BLUE = '#118fd9';
  const BLUE_LABEL = '#009bd8';
  const BLUE_LINK = '#97cbe4';
  const GREEN = '#289321';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#a1cf99';
  const RED = '#be0004';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e99485';
  const NOTE = '#5f6062';
  const RIGHT_COST_LABEL_X = 2756;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'salesforce-q1-fy27',
    name: 'Salesforce · Q1 FY27',
    meta: {
      title: 'Salesforce Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/salesforce-q1-fy27.png', width: 2958, height: 1490 },
      logoWidth: 380,
      logoHeight: 210,
      logoY: 205,
      logoViewBox: '0 0 360 190',
      logoSvg: `
        <g fill="#0aa5df">
          <circle cx="105" cy="88" r="58"/>
          <circle cx="160" cy="70" r="64"/>
          <circle cx="220" cy="88" r="58"/>
          <circle cx="182" cy="118" r="58"/>
          <ellipse cx="247" cy="94" rx="68" ry="58"/>
          <ellipse cx="84" cy="112" rx="65" ry="53"/>
        </g>
        <text x="180" y="109" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="52" font-weight="600" fill="#ffffff">salesforce</text>
      `,
    },
    render: {
      width: 3050,
      height: 1490,
      background: '#efefef',
      titleColor: '#154f79',
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLUE, label: BLUE_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
    },

    layout: {
      scale: 42.55,
      nodes: {
        agentforce_apps: { x: 480, y: 468, width: 82, height: 294 },
        data360_platform: { x: 480, y: 990, width: 82, height: 154 },
        subscription_support: { x: 907, y: 583, width: 80, height: 451 },
        professional_services: { x: 907, y: 1234, width: 80, height: 20 },
        revenue: { x: 1333, y: 670, width: 80, height: 474 },
        gross_profit: { x: 1759, y: 579, width: 80, height: 364 },
        cost_of_revenue: { x: 1759, y: 1135, width: 80, height: 107 },
        operating_profit: { x: 2185, y: 459, width: 80, height: 99 },
        operating_expenses: { x: 2185, y: 760, width: 80, height: 264 },
        other: { x: 2490, y: 478, width: 80, height: 13 },
        net_profit: { x: 2610, y: 360, width: 82, height: 88 },
        tax: { x: 2610, y: 633, width: 82, height: 23 },
        sm: { x: 2610, y: 779, width: 82, height: 158 },
        rnd: { x: 2610, y: 1038, width: 82, height: 67 },
        ga: { x: 2610, y: 1204, width: 82, height: 30 },
        restructuring: { x: 2610, y: 1359, width: 82, height: 4 },
      },
      labels: {
        agentforce_apps: {
          blocks: [
            {
              x: 250, top: 478, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Agentforce', size: 44, weight: 700 },
                { text: 'Apps', size: 44, weight: 700 },
                { text: 'Sales, Service, Marketing,', size: 28, weight: 500, color: NOTE },
                { text: 'Commerce, Slack', size: 28, weight: 500, color: NOTE },
              ],
            },
            {
              x: 520, top: 350, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 45, weight: 400 },
                { text: '+9% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        data360_platform: {
          blocks: [
            {
              x: 250, top: 930, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Data 360', size: 44, weight: 700 },
                { text: 'Headless Platform', size: 44, weight: 700 },
                { text: '& Other', size: 44, weight: 700 },
                { text: 'Informatica, Mulesoft, Tableau', size: 28, weight: 500, color: NOTE },
              ],
            },
            {
              x: 520, top: 860, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 45, weight: 400 },
                { text: '+25% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription_support: {
          blocks: [
            {
              x: 950, top: 356, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Subscription', size: 44, weight: 700 },
                { text: 'and support', size: 44, weight: 700 },
                { text: '$value', size: 43, weight: 400 },
                { text: '+14% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 950, top: 1280, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Professional', size: 40, weight: 700 },
                { text: 'services', size: 40, weight: 700 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+2% Y/Y', size: 30, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1373, top: 500, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 44, weight: 700 },
                { text: '$value', size: 43, weight: 400 },
                { text: '+13% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1799, top: 365, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 700 },
                { text: '$value', size: 43, weight: 400 },
                { text: '77% margin', size: 31, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 2225, top: 250, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 700 },
                { text: '$value', size: 43, weight: 400 },
                { text: '21% margin', size: 31, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2530, top: 520, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 34, weight: 700 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2724, top: 348, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 700 },
                { text: '$value', size: 43, weight: 400 },
                { text: '19% margin', size: 31, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1799, top: 1270, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 38, weight: 700 },
                { text: 'revenue', size: 38, weight: 700 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 2225, top: 1045, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 38, weight: 700 },
                { text: 'expenses', size: 38, weight: 700 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2760, top: 594, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Tax', size: 35, weight: 700 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 792, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'S&M ($3.8B)', size: 34, weight: 700 },
                { text: '34% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 1003, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'R&D ($1.6B)', size: 34, weight: 700 },
                { text: '15% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 1150, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'G&A ($0.7B)', size: 34, weight: 700 },
                { text: '7% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 1300, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Restructuring', size: 34, weight: 700 },
                { text: '($0.1B)', size: 34, weight: 400 },
                { text: '1% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'agentforce_apps', col: 0, order: 0, type: 'source',
        label: ['Agentforce', 'Apps'], value: 6.9, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'data360_platform', col: 0, order: 1, type: 'source',
        label: ['Data 360', 'Headless Platform', '& Other'], value: 3.7, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'subscription_support', col: 1, order: 0, type: 'source',
        label: ['Subscription', 'and support'], value: 10.6, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'professional_services', col: 1, order: 1, type: 'source',
        label: ['Professional', 'services'], value: 0.5, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 11.1, color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 8.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 2.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 2.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 6.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 5, order: 0, type: 'profit',
        label: 'Other', value: 0.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 2.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 6, order: 1, type: 'cost',
        label: 'Tax', value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 6, order: 2, type: 'cost',
        label: 'S&M', value: 3.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 3, type: 'cost',
        label: 'R&D', value: 1.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 4, type: 'cost',
        label: 'G&A', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'restructuring', col: 6, order: 5, type: 'cost',
        label: 'Restructuring', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'agentforce_apps', target: 'subscription_support', value: 6.9, width: 294 },
      { source: 'data360_platform', target: 'subscription_support', value: 3.7, width: 154 },
      { source: 'subscription_support', target: 'revenue', value: 10.6, width: 451 },
      { source: 'professional_services', target: 'revenue', value: 0.5, width: 20 },

      { source: 'revenue', target: 'gross_profit', value: 8.5, width: 364 },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.6, width: 107 },

      { source: 'gross_profit', target: 'operating_profit', value: 2.3, width: 99 },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.2, width: 264 },

      { source: 'operating_profit', target: 'net_profit', value: 1.7, width: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 23, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.4, width: 13, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 3.8, width: 158 },
      { source: 'operating_expenses', target: 'rnd', value: 1.6, width: 67 },
      { source: 'operating_expenses', target: 'ga', value: 0.7, width: 30 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.1, width: 4 },
    ],
  });
})();
