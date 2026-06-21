/* ====================================================================
 * IBM - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/ibm-q1-fy26.png as a fixed
 * d3-sankey layout with reusable SVG IBM logo annotation.
 * ==================================================================== */
(function () {
  const BLUE = '#2874bf';
  const BLUE_LABEL = '#1f70c1';
  const BLUE_LINK = '#8db7dd';
  const GREEN = '#26a128';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ace99';
  const RED = '#d60000';
  const RED_LABEL = '#8e1300';
  const RED_LINK = '#df8082';
  const NOTE = '#666666';
  const TITLE = '#15527a';
  const RIGHT_LABEL_X = 2398;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'ibm-q1-fy26',
    name: 'IBM · Q1 FY26',
    company: 'IBM',
    meta: {
      company: 'IBM',
      title: 'IBM Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/ibm-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1958,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 460,
      logoHeight: 210,
      logoY: 288,
      logoViewBox: '0 0 460 210',
      logoSvg: BUSINESS_ICONS.ibmLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
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
      linkOpacity: 1,
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },

    layout: {
      scale: 17.6,
      nodes: {
        software: { x: 390, y: 517, width: 72, height: 124 },
        consulting: { x: 390, y: 767, width: 72, height: 93 },
        infrastructure: { x: 390, y: 976, width: 72, height: 58 },
        financing: { x: 390, y: 1150, width: 72, height: 4 },
        other_revenue: { x: 390, y: 1276, width: 72, height: 1 },
        revenue: { x: 857, y: 733, width: 72, height: 280 },
        gross_profit: { x: 1325, y: 631, width: 71, height: 156 },
        cost_of_revenue: { x: 1324, y: 1018, width: 72, height: 122 },
        intellectual_property: { x: 1570, y: 1007, width: 72, height: 4 },
        operating_profit: { x: 1792, y: 537, width: 71, height: 31 },
        operating_expenses: { x: 1791, y: 795, width: 73, height: 128 },
        net_profit: { x: 2259, y: 443, width: 72, height: 20 },
        interest: { x: 2259, y: 681, width: 72, height: 8 },
        tax: { x: 2259, y: 793, width: 72, height: 2 },
        sga: { x: 2259, y: 982, width: 72, height: 89 },
        rnd: { x: 2259, y: 1243, width: 72, height: 38 },
      },
      labels: {
        software: {
          blocks: [
            {
              x: 292, top: 555, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Software', size: 39, weight: 800 },
                { text: '83% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 426, top: 430, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        consulting: {
          blocks: [
            {
              x: 292, top: 782, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Consulting', size: 39, weight: 800 },
                { text: '28% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 426, top: 678, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        infrastructure: {
          blocks: [
            {
              x: 292, top: 976, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Infrastructure', size: 39, weight: 800 },
                { text: '57% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 426, top: 888, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        financing: {
          blocks: [
            {
              x: 292, top: 1120, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Financing', size: 39, weight: 800 },
                { text: '43% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 426, top: 1060, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 272, top: 1254, anchor: 'end',
              lines: [{ text: 'Other', size: 37, weight: 800 }],
            },
            {
              x: 434, top: 1214, anchor: 'middle',
              lines: [{ text: '$value', size: 36, weight: 400 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 893, top: 592, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1360, top: 449, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '56% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1360, top: 1166, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 38, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        intellectual_property: {
          blocks: [
            {
              x: 1592, top: 1033, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Intellectual', size: 30, weight: 800, color: GREEN_LABEL },
                { text: 'property', size: 30, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 29, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1827, top: 357, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '12% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1828, top: 945, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 393, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '8% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 654, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 763, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 981, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '32% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1219, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'software', col: 0, order: 0, type: 'source', label: 'Software', value: 7.1, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'consulting', col: 0, order: 1, type: 'source', label: 'Consulting', value: 5.3, notes: ['+4% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'infrastructure', col: 0, order: 2, type: 'source', label: 'Infrastructure', value: 3.3, notes: ['+15% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'financing', col: 0, order: 3, type: 'source', label: 'Financing', value: 0.2, notes: ['+15% Y/Y'], color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.048, valueText: '$48M', color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 15.9, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE_LABEL },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.0, notes: ['56% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 7.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'intellectual_property', col: 3, order: 2, type: 'profit', label: ['Intellectual', 'property'], value: -0.2, valueText: '$0.2B', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1.9, notes: ['12% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 7.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.2, notes: ['8% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 5, order: 1, type: 'cost', label: 'Interest', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 5.1, notes: ['32% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 2.2, notes: ['14% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'software', target: 'revenue', value: 7.1, width: 124, targetOrder: 0 },
      { source: 'consulting', target: 'revenue', value: 5.3, width: 93, targetOrder: 1 },
      { source: 'infrastructure', target: 'revenue', value: 3.3, width: 58, targetOrder: 2 },
      { source: 'financing', target: 'revenue', value: 0.2, width: 4, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.048, width: 1, targetOrder: 4 },
      { source: 'revenue', target: 'gross_profit', value: 9.0, width: 156, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.0, width: 122, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 1.9, width: 33, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.1, width: 124, sourceOrder: 1, targetOrder: 0 },
      { source: 'intellectual_property', target: 'operating_expenses', value: 0.2, width: 4, targetOrder: 1, leftTint: GREEN_LINK, rightTint: GREEN_LINK },
      { source: 'operating_profit', target: 'net_profit', value: 1.2, width: 20, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'interest', value: 0.5, width: 8, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 3, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'sga', value: 5.1, width: 89, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.2, width: 38, sourceOrder: 1 },
    ],
  });
})();
