/* ====================================================================
 * Samsung - Q1 FY26 income statement (KRW T)
 * Reconstructed from input/processed/samsung-q1-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Samsung business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLUE = '#2029a5';
  const BLUE_LINK = '#8f98cf';
  const GREEN = '#25a126';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cc98';
  const RED = '#d60000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e38283';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="198" y="272" font-size="42" font-weight="800" fill="${TITLE}">In KRW trillion</text>
      ${icon('samsungCompanyWordmark', 667, 330, 1)}
      ${icon('samsungDeviceSolutionsChipCluster', 201, 468, 1.05)}
      ${icon('samsungDeviceExperienceCluster', 56, 760, 1)}
      ${icon('samsungDisplayWordmark', 96, 1112, 0.94)}
      ${icon('samsungHarmanWordmark', 55, 1168, 0.98)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'samsung-q1-fy26',
    name: 'Samsung · Q1 FY26',
    company: 'Samsung',
    meta: {
      company: 'Samsung',
      title: 'Samsung Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '',
      unit: 'T',
      decimals: 1,
      referenceImage: { src: 'input/processed/samsung-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2295,
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
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 2.45,
      nodes: {
        device_solutions: { x: 434, y: 543, width: 72, height: 200 },
        device_experience: { x: 434, y: 878, width: 72, height: 129 },
        samsung_display: { x: 434, y: 1138, width: 72, height: 16 },
        harman: { x: 434, y: 1286, width: 72, height: 9 },
        segment_sales: { x: 810, y: 679, width: 72, height: 355 },
        eliminations: { x: 1184, y: 1177, width: 72, height: 27 },
        revenue: { x: 1184, y: 754, width: 72, height: 328 },
        gross_profit: { x: 1558, y: 675, width: 72, height: 201 },
        cost_of_revenue: { x: 1558, y: 1061, width: 72, height: 127 },
        operating_profit: { x: 1932, y: 591, width: 72, height: 140 },
        operating_expenses: { x: 1932, y: 895, width: 72, height: 61 },
        other: { x: 2192, y: 678, width: 72, height: 4 },
        net_profit: { x: 2306, y: 514, width: 72, height: 116 },
        tax: { x: 2306, y: 805, width: 72, height: 28 },
        sga: { x: 2306, y: 1007, width: 72, height: 33 },
        rnd: { x: 2306, y: 1245, width: 72, height: 28 },
      },
      labels: {
        device_solutions: {
          blocks: [
            {
              x: 469, top: 429, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+225% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 360, top: 587, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Device Solutions', size: 36, weight: 800, color: BLUE },
                { text: 'Memory, Foundry,', size: 28, weight: 400, color: NOTE },
                { text: '& System LSI', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        device_experience: {
          blocks: [
            {
              x: 469, top: 771, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+2% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 360, top: 878, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Device eXperience', size: 36, weight: 800, color: BLUE },
                { text: 'Digital TVs', size: 28, weight: 400, color: NOTE },
                { text: 'Refrigerators', size: 28, weight: 400, color: NOTE },
                { text: 'Mobile phones', size: 28, weight: 400, color: NOTE },
                { text: 'Communication systems', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        samsung_display: {
          blocks: [
            {
              x: 469, top: 1059, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+14% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        harman: {
          blocks: [
            {
              x: 469, top: 1205, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '+12% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1220, top: 589, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales', size: 40, weight: 800, color: BLUE },
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+69% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1220, top: 1231, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 32, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1595, top: 465, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '61% margin', size: 28, weight: 400, color: NOTE },
                { text: '+24pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1595, top: 1215, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1968, top: 387, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '43% margin', size: 28, weight: 400, color: NOTE },
                { text: '+34pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1968, top: 993, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2262, top: 711, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2420, top: 498, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '35% margin', size: 28, weight: 400, color: NOTE },
                { text: '+24pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2508, top: 807, anchor: 'middle', lineGap: 8,
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
              x: 2508, top: 983, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales, general', size: 31, weight: 800, color: RED_LABEL },
                { text: '& admin', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2508, top: 1193, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Research &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'development', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'device_solutions', col: 0, order: 0, type: 'source', label: 'Device Solutions', value: 81.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'device_experience', col: 0, order: 1, type: 'source', label: 'Device eXperience', value: 52.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'samsung_display', col: 0, order: 2, type: 'source', label: 'Samsung Display', value: 6.7, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'harman', col: 0, order: 3, type: 'source', label: 'Harman', value: 3.8, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 144.9, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 11.0, valueText: '(11.0T)' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 133.9, notes: ['+69% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 81.9, notes: ['61% margin', '+24pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 52.0, valueText: '(52.0T)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 57.2, notes: ['43% margin', '+34pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 24.7 },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 1.6 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 47.2, notes: ['35% margin', '+24pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 11.6, valueText: '(11.6B)' },
      { id: 'sga', col: 6, order: 2, type: 'cost', label: ['Sales, general', '& admin'], value: 13.4, notes: ['10% of revenue', '(6pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: ['Research &', 'development'], value: 11.3, notes: ['8% of revenue', '(3pp) Y/Y'] },
    ],

    links: [
      { source: 'device_solutions', target: 'segment_sales', value: 81.7, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'device_experience', target: 'segment_sales', value: 52.7, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'samsung_display', target: 'segment_sales', value: 6.7, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'harman', target: 'segment_sales', value: 3.8, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 133.9, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'segment_sales', target: 'eliminations', value: 11.0, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 81.9, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 52.0, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 57.2, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 24.7, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 45.6, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 11.6, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'sga', value: 13.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 11.3, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 1.6, targetOrder: 1 },
    ],
  });
})();
