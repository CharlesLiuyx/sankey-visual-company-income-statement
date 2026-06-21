/* ====================================================================
 * CoreWeave - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/coreweave-q1-fy26.png as a fixed
 * d3-sankey layout with a reusable SVG CoreWeave logo annotation.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#767676';
  const GRAY_LINK = '#8d8d8b';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cf99';
  const RED = '#d60000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38283';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const RIGHT_LABEL_X = 2390;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <svg x="650" y="230" width="530" height="330" viewBox="0 0 530 330" overflow="visible">
        ${BUSINESS_ICONS.coreweaveCompanyLogo || ''}
      </svg>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coreweave-q1-fy26',
    name: 'CoreWeave · Q1 FY26',
    company: 'CoreWeave',
    meta: {
      company: 'CoreWeave',
      title: 'CoreWeave Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/coreweave-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2400,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 183,
      nodes: {
        united_states: { x: 398, y: 596, width: 73, height: 348 },
        rest_of_world: { x: 398, y: 1150, width: 73, height: 33 },
        revenue: { x: 866, y: 711, width: 73, height: 380 },
        gross_profit: { x: 1332, y: 596, width: 73, height: 249 },
        cost_of_revenue: { x: 1332, y: 1058, width: 73, height: 131 },
        operating_loss: { x: 1582, y: 1059, width: 73, height: 26 },
        operating_expenses: { x: 1799, y: 707, width: 73, height: 276 },
        rnd: { x: 2268, y: 580, width: 73, height: 233 },
        ga: { x: 2268, y: 945, width: 73, height: 30 },
        sm: { x: 2268, y: 1109, width: 73, height: 13 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 434, top: 509, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+105% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 353, top: 742, anchor: 'end', lines: [{ text: 'United States', size: 40, weight: 800 }] },
          ],
        },
        rest_of_world: {
          blocks: [
            {
              x: 434, top: 1058, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+236% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 353, top: 1157, anchor: 'end', lines: [{ text: 'Rest of World', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 902, top: 564, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+112% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1369, top: 406, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '66% margin', size: 28, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1369, top: 1212, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1619, top: 1088, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '(7%) margin', size: 28, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1835, top: 558, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 650, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D ($1.3B)', size: 30, weight: 800 },
                { text: '61% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 920, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($0.2M)', size: 30, weight: 800 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(10pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1098, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($0.1B)', size: 30, weight: 800 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'united_states', col: 0, order: 0, type: 'source',
        label: 'United States', value: 1.9, notes: ['+105% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'rest_of_world', col: 0, order: 1, type: 'source',
        label: 'Rest of World', value: 0.178, notes: ['+236% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 2.078, notes: ['+112% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 1.362, notes: ['66% margin', '(8pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 0.716,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -0.144, notes: ['(7%) margin', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 1.506,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 0, type: 'cost',
        label: 'R&D', value: 1.273, notes: ['61% of revenue', '+4pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 1, type: 'cost',
        label: 'G&A', value: 0.164, valueText: '($0.2M)', notes: ['8% of revenue', '(10pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 0.069, notes: ['3% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 1.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'rest_of_world', target: 'revenue', value: 0.178, sourceOrder: 1, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 1.362, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.716, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 1.362, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.144, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 1.273, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.164, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.069, sourceOrder: 2, targetOrder: 0 },
    ],
  });
})();
