/* ====================================================================
 * Microsoft - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/microsoft-q3-fy26.png as a fixed
 * d3-sankey layout with reusable SVG business annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#10a6dd';
  const BLUE_LINK = '#80c9e9';
  const PURPLE = '#8a63bf';
  const PURPLE_LINK = '#b9abd1';
  const GAMING = '#60c400';
  const GAMING_LINK = '#acd88b';
  const LINKEDIN = '#17a9df';
  const LINKEDIN_LINK = '#83d0ed';
  const WINDOWS = '#ffb900';
  const WINDOWS_LINK = '#ffd980';
  const SEARCH = '#9aa9bd';
  const SEARCH_LINK = '#a7b6c9';
  const OTHER = '#0a0a0a';
  const OTHER_LINK = '#8f8f8f';
  const HUB = '#666966';
  const GREEN = '#24a229';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#d90000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#df7e7e';
  const TITLE = '#154f79';
  const NOTE = '#606164';
  const RIGHT_LABEL_X = 2555;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('microsoftAzure', 317, 323, 0.77)}
      ${icon('microsoft365Commercial', 325, 564, 0.90)}
      ${icon('microsoftXbox', 317, 737, 0.88)}
      ${icon('microsoftLinkedIn', 334, 878, 1.00)}
      ${icon('microsoftWindows', 326, 996, 0.79)}
      ${icon('microsoftBing', 345, 1129, 0.83)}
      ${icon('microsoftOtherCluster', 321, 1275, 0.50)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q3-fy26',
    name: 'Microsoft - Q3 FY26',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2320,
      periodX: 986,
      periodY: 1224,
      periodNoteY: 1274,
      logoWidth: 193,
      logoHeight: 193,
      logoY: 239,
      logoViewBox: '0 0 193 193',
      logoSvg: BUSINESS_ICONS.microsoftLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: NOTE },
        hub: { node: HUB, label: NOTE },
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
      type: { name: 40, value: 40, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 4.82,
      nodes: {
        server: { x: 473, y: 305, width: 75, height: 166 },
        microsoft_365_commercial: { x: 473, y: 563, width: 75, height: 119 },
        gaming: { x: 473, y: 793, width: 75, height: 25 },
        linkedin: { x: 473, y: 925, width: 75, height: 22 },
        windows_devices: { x: 473, y: 1051, width: 75, height: 19 },
        search: { x: 473, y: 1183, width: 75, height: 18 },
        other_revenue: { x: 473, y: 1284, width: 75, height: 31 },
        revenue: { x: 941, y: 615, width: 73, height: 400 },
        gross_profit: { x: 1408, y: 517, width: 73, height: 270 },
        cost_of_revenue: { x: 1408, y: 1012, width: 73, height: 129 },
        operating_profit: { x: 1875, y: 413, width: 73, height: 185 },
        operating_expenses: { x: 1875, y: 781, width: 73, height: 85 },
        other: { x: 2229, y: 499, width: 78, height: 5 },
        net_profit: { x: 2345, y: 301, width: 73, height: 153 },
        tax: { x: 2345, y: 640, width: 73, height: 37 },
        rnd: { x: 2345, y: 845, width: 73, height: 43 },
        sm: { x: 2345, y: 1063, width: 73, height: 33 },
        ga: { x: 2345, y: 1278, width: 73, height: 9 },
      },
      labels: {
        server: {
          blocks: [
            {
              x: 260, top: 367, anchor: 'end',
              lines: [{ text: 'Server', size: 40, weight: 800, color: NOTE }],
            },
            {
              x: 510, top: 216, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+32% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        microsoft_365_commercial: {
          blocks: [
            {
              x: 150, top: 577, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Microsoft 365', size: 38, weight: 800, color: NOTE },
                { text: 'Commercial', size: 38, weight: 800, color: NOTE },
              ],
            },
            {
              x: 510, top: 480, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gaming: {
          blocks: [
            {
              x: 245, top: 775, anchor: 'end',
              lines: [{ text: 'Gaming', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 510, top: 706, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '(7%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        linkedin: {
          blocks: [
            {
              x: 245, top: 908, anchor: 'end',
              lines: [{ text: 'LinkedIn', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 510, top: 838, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        windows_devices: {
          blocks: [
            {
              x: 245, top: 998, anchor: 'end', lineGap: 11,
              lines: [
                { text: 'Windows', size: 38, weight: 800, color: NOTE },
                { text: '& Devices', size: 38, weight: 800, color: NOTE },
              ],
            },
            {
              x: 510, top: 970, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        search: {
          blocks: [
            {
              x: 245, top: 1146, anchor: 'end',
              lines: [{ text: 'Search', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 510, top: 1100, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 245, top: 1274, anchor: 'end',
              lines: [{ text: 'Other', size: 38, weight: 800, color: NOTE }],
            },
            {
              x: 510, top: 1203, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 978, top: 471, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 42, weight: 800, color: NOTE },
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1444, top: 337, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '68% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1444, top: 1136, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1911, top: 235, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '46% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1909, top: 883, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2239, top: 522, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2436, top: 315, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '38% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 629, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 830, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '11% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1044, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'S&M', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1240, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'G&A', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'server', col: 0, order: 0, type: 'source', label: 'Server', value: 35.6, color: BLUE, labelColor: NOTE, linkTint: BLUE_LINK },
      { id: 'microsoft_365_commercial', col: 0, order: 1, type: 'source', label: ['Microsoft 365', 'Commercial'], value: 25.6, color: PURPLE, labelColor: NOTE, linkTint: PURPLE_LINK },
      { id: 'gaming', col: 0, order: 2, type: 'source', label: 'Gaming', value: 5.3, color: GAMING, labelColor: NOTE, linkTint: GAMING_LINK },
      { id: 'linkedin', col: 0, order: 3, type: 'source', label: 'LinkedIn', value: 4.8, color: LINKEDIN, labelColor: NOTE, linkTint: LINKEDIN_LINK },
      { id: 'windows_devices', col: 0, order: 4, type: 'source', label: ['Windows', '& Devices'], value: 4.0, color: WINDOWS, labelColor: NOTE, linkTint: WINDOWS_LINK },
      { id: 'search', col: 0, order: 5, type: 'source', label: 'Search', value: 3.8, color: SEARCH, labelColor: NOTE, linkTint: SEARCH_LINK },
      { id: 'other_revenue', col: 0, order: 6, type: 'source', label: 'Other', value: 6.7, color: OTHER, labelColor: NOTE, linkTint: OTHER_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 82.9, color: HUB, labelColor: NOTE },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 56.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 26.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 38.4, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 31.8, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 7.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 8.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 6.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 1.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'server', target: 'revenue', value: 35.6, width: 166, targetOrder: 0 },
      {
        source: 'microsoft_365_commercial', target: 'revenue', value: 25.6, width: 119, targetOrder: 1,
        curve: { c1x: 790, c2x: 825 },
      },
      { source: 'gaming', target: 'revenue', value: 5.3, width: 25, targetOrder: 2 },
      { source: 'linkedin', target: 'revenue', value: 4.8, width: 22, targetOrder: 3 },
      { source: 'windows_devices', target: 'revenue', value: 4.0, width: 19, targetOrder: 4 },
      { source: 'search', target: 'revenue', value: 3.8, width: 18, targetOrder: 5 },
      { source: 'other_revenue', target: 'revenue', value: 6.7, width: 31, targetOrder: 6 },

      { source: 'revenue', target: 'gross_profit', value: 56.1, width: 270, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 26.8, width: 129, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 38.4, width: 185, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.7, width: 85, sourceOrder: 1 },

      { source: 'operating_profit', target: 'net_profit', value: 30.9, width: 149, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 7.6, width: 37, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.9, width: 4, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 8.9, width: 43, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.8, width: 33, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.9, width: 9, sourceOrder: 2 },
    ],
  });
})();
