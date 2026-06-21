/* ====================================================================
 * Alphabet - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/alphabet-q1-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Google business annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#4285f4';
  const BLUE_LINK = '#9dbcf0';
  const YELLOW = '#fbbc05';
  const YELLOW_LINK = '#f6dc82';
  const GREEN = '#25a326';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcd98';
  const RED = '#d40000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#df7d80';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const RIGHT_LABEL_X = 2490;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('googleWordmark', 55, 500, 1.07)}
      ${icon('youtubeWordmark', 56, 782, 0.76)}
      ${icon('googleAdMobWordmark', 28, 903, 0.63)}
      ${icon('googlePlayWordmark', 236, 1034, 0.66)}
      ${icon('googleCloudWordmark', 386, 1214, 0.62)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alphabet-q1-fy26',
    name: 'Alphabet - Q1 FY26',
    company: 'Alphabet',
    meta: {
      company: 'Alphabet',
      title: 'Alphabet Q1 FY26 Income Statement',
      period: '',
      periodNote: '',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alphabet-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 166,
      titleSize: 120,
      titleWeight: 800,
      titleTextLength: 2310,
      logoWidth: 250,
      logoHeight: 250,
      logoY: 247,
      logoViewBox: '0 0 256 256',
      logoSvg: BUSINESS_ICONS.googleGMark || '',
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
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 3.11,
      nodes: {
        search_advertising: { x: 437, y: 506, width: 74, height: 188 },
        youtube: { x: 437, y: 810, width: 74, height: 31 },
        google_admob: { x: 437, y: 951, width: 74, height: 22 },
        ad_revenue: { x: 812, y: 620, width: 74, height: 240 },
        google_play_devices: { x: 613, y: 1064, width: 74, height: 39 },
        google_cloud: { x: 793, y: 1184, width: 74, height: 62 },
        other_revenue: { x: 977, y: 1320, width: 6, height: 1 },
        revenue: { x: 1185, y: 708, width: 74, height: 342 },
        gross_profit: { x: 1559, y: 616, width: 74, height: 213 },
        cost_of_revenue: { x: 1559, y: 1021, width: 74, height: 128 },
        operating_profit: { x: 1932, y: 531, width: 74, height: 124 },
        operating_expenses: { x: 1932, y: 800, width: 74, height: 90 },
        other_income: { x: 2174, y: 343, width: 74, height: 117 },
        cost_other: { x: 1823, y: 1088, width: 74, height: 81 },
        tac: { x: 1823, y: 1240, width: 74, height: 47 },
        net_profit: { x: 2306, y: 358, width: 74, height: 195 },
        tax: { x: 2306, y: 678, width: 74, height: 46 },
        rnd: { x: 2306, y: 853, width: 74, height: 53 },
        sm: { x: 2306, y: 1065, width: 74, height: 24 },
        ga: { x: 2306, y: 1260, width: 74, height: 13 },
      },
      labels: {
        search_advertising: {
          blocks: [
            {
              x: 474, top: 412, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 54, top: 635, anchor: 'start',
              lines: [{ text: 'Search advertising', size: 35, weight: 800 }],
            },
          ],
        },
        youtube: {
          blocks: [
            {
              x: 474, top: 724, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_admob: {
          blocks: [
            {
              x: 474, top: 863, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 28, top: 974, anchor: 'start',
              lines: [{ text: '+ AdSense & Google Ad Manager', size: 27, weight: 400, color: NOTE }],
            },
          ],
        },
        ad_revenue: {
          blocks: [
            {
              x: 849, top: 476, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Ad Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_play_devices: {
          blocks: [
            {
              x: 658, top: 979, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 264, top: 1118, anchor: 'start', lineGap: 7,
              lines: [
                { text: '+ Fitbit, Google Nest, Pixel,', size: 27, weight: 400, color: NOTE },
                { text: 'YouTube Premium & TV', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        google_cloud: {
          blocks: [
            {
              x: 850, top: 1092, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400, color: YELLOW },
                { text: '+63% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 401, top: 1285, anchor: 'start', lineGap: 7,
              lines: [
                { text: '+ Workspace, Enterprise Android', size: 27, weight: 400, color: NOTE },
                { text: 'Chrome OS, Other APIs', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 950, top: 1299, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 36, weight: 400, color: YELLOW },
                { text: 'Other', size: 38, weight: 800, color: YELLOW },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1221, top: 568, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1596, top: 436, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '62% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1596, top: 1167, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 39, weight: 800 },
                { text: 'revenues', size: 39, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1969, top: 351, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '36% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1968, top: 910, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2192, top: 227, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        cost_other: {
          blocks: [
            {
              x: 1932, top: 1096, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        tac: {
          blocks: [
            {
              x: 1946, top: 1238, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'TAC', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2404, top: 378, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '57% margin', size: 28, weight: 400, color: NOTE },
                { text: '+19pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 664, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 850, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '15% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1036, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '7% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1225, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'search_advertising', col: 0, order: 0, type: 'source', label: 'Search advertising', value: 60.4, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'youtube', col: 0, order: 1, type: 'source', label: 'YouTube', value: 9.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_admob', col: 0, order: 2, type: 'source', label: 'Google AdMob', value: 7.0, valueText: '$7.0B', color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'ad_revenue', col: 1, order: 0, type: 'source', label: 'Ad Revenue', value: 77.3, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'google_play_devices', col: 1, order: 1, type: 'source', label: 'Google Play', value: 12.4, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'google_cloud', col: 1, order: 2, type: 'source', label: 'Google Cloud', value: 20.0, valueText: '$20.0B', color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'other_revenue', col: 1, order: 3, type: 'source', label: 'Other', value: 0.2, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 109.9, color: BLUE, labelColor: BLUE },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 68.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenues'], value: 41.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 39.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 28.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 5, order: 0, type: 'profit', label: 'Other', value: 37.7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_other', col: 5, order: 1, type: 'cost', label: 'Other', value: 26.0, valueText: '($26.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tac', col: 5, order: 2, type: 'cost', label: 'TAC', value: 15.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 62.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 14.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 17.0, valueText: '($17.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 7.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 4.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'search_advertising', target: 'ad_revenue', value: 60.4, width: 188, targetOrder: 0 },
      { source: 'youtube', target: 'ad_revenue', value: 9.9, width: 31, targetOrder: 1 },
      { source: 'google_admob', target: 'ad_revenue', value: 7.0, width: 22, targetOrder: 2 },

      { source: 'ad_revenue', target: 'revenue', value: 77.3, width: 240, targetOrder: 0 },
      { source: 'google_play_devices', target: 'revenue', value: 12.4, width: 39, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'google_cloud', target: 'revenue', value: 20.0, width: 62, targetOrder: 2, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'other_revenue', target: 'revenue', value: 0.2, width: 1, targetOrder: 3, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },

      { source: 'revenue', target: 'gross_profit', value: 68.6, width: 213, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 41.3, width: 128, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 39.7, width: 124, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 28.9, width: 90, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 24.9, width: 77, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 14.8, width: 46, sourceOrder: 1 },
      { source: 'other_income', target: 'net_profit', value: 37.7, width: 117, targetOrder: 0 },

      { source: 'cost_of_revenue', target: 'cost_other', value: 26.0, width: 81, sourceOrder: 0 },
      { source: 'cost_of_revenue', target: 'tac', value: 15.2, width: 47, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 17.0, width: 53, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 7.6, width: 24, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 4.3, width: 13, sourceOrder: 2 },
    ],
  });
})();
