/* ====================================================================
 * AppFolio - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/appfolio-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#6f7073';
  const GRAY_LINK = '#8e8e8d';
  const GREEN = '#2aa028';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d40000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const WORDMARK = '#191c29';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="871" y="439" text-anchor="middle" font-family="Arial Rounded MT Bold,Arial Black,Arial,sans-serif" font-size="165" font-weight="900" textLength="535" lengthAdjust="spacingAndGlyphs" fill="${WORDMARK}">appfolio</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'appfolio-q1-fy26',
    name: 'AppFolio · Q1 FY26',
    company: 'AppFolio',
    meta: {
      company: 'AppFolio',
      title: 'Appfolio Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/appfolio-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
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
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 1.6,
      nodes: {
        core_solutions: { x: 386, y: 535, width: 72, height: 93 },
        value_added_services: { x: 386, y: 789, width: 72, height: 322 },
        other_revenue: { x: 386, y: 1260, width: 72, height: 4 },
        revenue: { x: 853, y: 698, width: 72, height: 420 },
        gross_profit: { x: 1321, y: 615, width: 72, height: 268 },
        cost_of_revenue: { x: 1321, y: 1090, width: 72, height: 152 },
        operating_profit: { x: 1788, y: 533, width: 72, height: 81 },
        operating_expenses: { x: 1788, y: 810, width: 72, height: 186 },
        interest: { x: 2142, y: 476, width: 72, height: 4 },
        net_profit: { x: 2258, y: 350, width: 72, height: 68 },
        tax: { x: 2258, y: 635, width: 72, height: 17 },
        rnd: { x: 2258, y: 747, width: 72, height: 79 },
        sm: { x: 2258, y: 919, width: 72, height: 60 },
        ga: { x: 2258, y: 1115, width: 72, height: 39 },
        depreciation: { x: 2258, y: 1270, width: 72, height: 8 },
      },
      labels: {
        core_solutions: {
          blocks: [
            {
              x: 422, top: 437, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 342, top: 572, anchor: 'end', lines: [{ text: 'Core solutions', size: 40, weight: 800 }] },
          ],
        },
        value_added_services: {
          blocks: [
            {
              x: 422, top: 690, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 342, top: 910, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Value Added', size: 40, weight: 800 },
                { text: 'Services', size: 40, weight: 800 },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 422, top: 1136, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '(25%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 342, top: 1242, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 889, top: 556, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1357, top: 436, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '64% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1357, top: 1262, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 37, weight: 800 },
                { text: 'revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1824, top: 316, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '19% margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1824, top: 1019, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 37, weight: 800 },
                { text: 'expenses', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2185, top: 493, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2360, top: 319, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '16% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2443, top: 608, anchor: 'middle', lineGap: 8,
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
              x: 2443, top: 742, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '19% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2443, top: 922, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2443, top: 1108, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        depreciation: {
          blocks: [
            {
              x: 2443, top: 1262, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Depreciation', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'core_solutions', col: 0, order: 0, type: 'source', label: 'Core solutions', value: 58.222, notes: ['+18% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'value_added_services', col: 0, order: 1, type: 'source', label: ['Value Added', 'Services'], value: 201.363, notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'other_revenue', col: 0, order: 2, type: 'source', label: 'Other', value: 2.629, notes: ['(25%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 262.214, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 167.239, notes: ['64% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 94.975, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 50.748, notes: ['19% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 116.491, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 2.353, valueText: '$2M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 42.424, notes: ['16% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 10.677, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 49.629, valueText: '($49M)', notes: ['19% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 37.501, notes: ['14% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 24.341, notes: ['9% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 5, type: 'cost', label: 'Depreciation', value: 5.02, notes: ['2% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'core_solutions', target: 'revenue', value: 58.222, width: 93, sourceOrder: 0, targetOrder: 0 },
      { source: 'value_added_services', target: 'revenue', value: 201.363, width: 322, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 2.629, width: 4, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 167.239, width: 268, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 94.975, width: 152, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 50.748, width: 81, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 116.491, width: 186, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'interest',
        target: 'net_profit',
        value: 2.353,
        width: 4,
        sourceOrder: 0,
        targetOrder: 1,
        curve: { c1x: 2228, c1y: 478, c2x: 2242, c2y: 418 },
      },
      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 40.071,
        width: 64,
        sourceOrder: 0,
        targetOrder: 0,
        curve: { c1x: 2000, c1y: 563, c2x: 2115, c2y: 376 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 10.677,
        width: 17,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1998, c1y: 606, c2x: 2135, c2y: 646 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 49.629, width: 79, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 37.501, width: 60, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 24.341, width: 39, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 5.02, width: 8, sourceOrder: 3, targetOrder: 0 },
    ],
  });
})();
