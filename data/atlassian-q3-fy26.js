/* ====================================================================
 * Atlassian - Q3 FY26 income statement ($M)
 * Reconstructed from input/processed/atlassian-q3-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0052cc';
  const BLUE_LIGHT = '#2684ff';
  const BLUE_TITLE = '#15527a';
  const BLUE_LINK = '#80a6dc';
  const NOTE = '#6f7073';
  const GREEN = '#28a026';
  const GREEN_LABEL = '#00944c';
  const GREEN_LINK = '#9acd97';
  const RED = '#d40000';
  const RED_LABEL = '#8d1300';
  const RED_LINK = '#e48283';
  const RIGHT_LABEL_X = 2455;

  const atlassianLogo = `
    <g fill="${BLUE_LIGHT}">
      <path d="M149 10c5-10 20-10 25 0l79 160c4 8-2 17-11 17h-74c-6 0-11-3-14-8l-43-88c-3-6-3-13 0-19z"/>
    </g>
    <g fill="${BLUE}">
      <path d="M91 78c6-10 20-10 25 0l38 91c4 9-2 18-12 18H31c-10 0-16-11-11-19z"/>
    </g>
    <text x="136" y="230" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="31" font-weight="800" fill="${BLUE}">ATLASSIAN</text>`;

  const kpiCard = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="73" y="1193" width="543" height="162" rx="42" fill="${BLUE}"/>
      <text x="344" y="1266" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">Customers &gt; $10K Cloud ARR</text>
      <text x="344" y="1307" text-anchor="middle" font-size="31" font-weight="400" fill="#ffffff">56K +10% Y/Y</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'atlassian-q3-fy26',
    name: 'Atlassian · Q3 FY26',
    company: 'Atlassian',
    meta: {
      company: 'Atlassian',
      title: 'Atlassian Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/atlassian-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1124,
      titleY: 204,
      titleSize: 128,
      titleTextLength: 1908,
      periodX: 2426,
      periodY: 276,
      periodNoteY: 321,
      logoWidth: 270,
      logoHeight: 245,
      logoY: 252,
      logoViewBox: '0 0 270 245',
      logoSvg: atlassianLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
      titleColor: BLUE_TITLE,
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
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: kpiCard,

    layout: {
      scale: 0.172,
      nodes: {
        cloud: { x: 378, y: 537, width: 75, height: 194.8 },
        data_center: { x: 378, y: 861, width: 75, height: 96.5 },
        marketplace_services: { x: 378, y: 1088, width: 75, height: 16.2 },
        revenue: { x: 845, y: 672, width: 75, height: 307.5 },
        gross_profit: { x: 1312, y: 536, width: 74, height: 262.2 },
        cost_of_revenue: { x: 1312, y: 1036, width: 74, height: 45.2 },
        operating_loss: { x: 1583, y: 1035, width: 74, height: 9.6 },
        operating_expenses: { x: 1784, y: 665, width: 75, height: 272 },
        rnd: { x: 2248, y: 532, width: 75, height: 159.5 },
        sm: { x: 2248, y: 824, width: 75, height: 75.5 },
        ga: { x: 2248, y: 1047, width: 75, height: 37 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        cloud: {
          blocks: [
            {
              x: 419, top: 444, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 223, top: 622, anchor: 'middle',
              lines: [{ text: 'Cloud', size: 40, weight: 800 }],
            },
          ],
        },
        data_center: {
          blocks: [
            {
              x: 419, top: 771, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+44% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 225, top: 894, anchor: 'middle',
              lines: [{ text: 'Data Center', size: 40, weight: 800 }],
            },
          ],
        },
        marketplace_services: {
          blocks: [
            {
              x: 419, top: 1006, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 224, top: 1043, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Marketplace', size: 40, weight: 800 },
                { text: '& Services', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 882, top: 528, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+32% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1349, top: 356, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '85% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1349, top: 1096, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1620, top: 1068, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'loss', size: 36, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '(3%) margin', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1822, top: 471, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 546, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '52% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 827, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '25% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1027, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '12% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'cloud', col: 0, order: 0, type: 'source',
        label: 'Cloud', value: 1132, valueText: '$1,132M', notes: ['+29% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'data_center', col: 0, order: 1, type: 'source',
        label: 'Data Center', value: 561, valueText: '$561M', notes: ['+44% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'marketplace_services', col: 0, order: 2, type: 'source',
        label: ['Marketplace', '& Services'], value: 94, valueText: '$94M', notes: ['+7% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1787, valueText: '$1,787M', notes: ['+32% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 1524, valueText: '$1,524M', notes: ['85% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 263, valueText: '($263M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -56, valueText: '($56M)', notes: ['(3%) margin', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 1580, valueText: '($1,580M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 0, type: 'cost',
        label: 'R&D', value: 927, valueText: '($927M)', notes: ['52% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 1, type: 'cost',
        label: 'S&M', value: 439, valueText: '($439M)', notes: ['25% of revenue', '+3pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 2, type: 'cost',
        label: 'G&A', value: 215, valueText: '($215M)', notes: ['12% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'cloud', target: 'revenue', value: 1132, width: 194.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'data_center', target: 'revenue', value: 561, width: 96.5, sourceOrder: 1, targetOrder: 1 },
      { source: 'marketplace_services', target: 'revenue', value: 94, width: 16.2, sourceOrder: 2, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 1524, width: 262.2, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 263, width: 45.2, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 1524, width: 262.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 56, width: 9.8, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 927, width: 159.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 439, width: 75.5, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 215, width: 37, sourceOrder: 2, targetOrder: 0 },
    ],
  });
})();
