/* ====================================================================
 * Meta - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/meta-q1-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Meta annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0b6fe8';
  const BLUE_LABEL = '#07558b';
  const BLUE_LINK = '#86b5e6';
  const GREEN = '#25a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bce99';
  const RED = '#d80000';
  const RED_LABEL = '#8d1300';
  const RED_LINK = '#df8082';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(84 516) scale(1.36)">${BUSINESS_ICONS.metaFamilyAppsCluster || ''}</g>
      <g transform="translate(500 1188)">${BUSINESS_ICONS.metaQuestWordmark || ''}</g>

      <g transform="translate(1829 222)">
        <path d="M18 0H288C302 0 310 9 310 23V78C310 92 302 101 288 101H178L155 122L132 101H18C6 101 0 92 0 78V23C0 9 6 0 18 0Z" fill="none" stroke="${BLUE_LABEL}" stroke-width="4"/>
        <text x="70" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">FoA</text>
        <text x="70" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${GREEN_LABEL}">$26.9B</text>
        <text x="225" y="40" text-anchor="middle" font-size="30" font-weight="800" fill="${BLUE_LABEL}">RL</text>
        <text x="225" y="78" text-anchor="middle" font-size="30" font-weight="500" fill="${RED_LABEL}">($4.0B)</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'meta-q1-fy26',
    name: 'Meta - Q1 FY26',
    company: 'Meta',
    meta: {
      company: 'Meta',
      title: 'Meta Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/meta-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2060,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 300,
      logoHeight: 235,
      logoY: 252,
      logoViewBox: '0 0 270 220',
      logoSvg: BUSINESS_ICONS.metaLogo || '',
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
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 5.78,
      nodes: {
        advertising: { x: 488, y: 519, width: 72, height: 318 },
        other_revenue: { x: 488, y: 1020, width: 72, height: 6 },
        family_of_apps: { x: 852, y: 621, width: 72, height: 323 },
        reality_labs: { x: 852, y: 1224, width: 72, height: 3 },
        revenue: { x: 1214, y: 703, width: 72, height: 325 },
        gross_profit: { x: 1580, y: 624, width: 72, height: 266 },
        cost_of_revenue: { x: 1580, y: 1072, width: 72, height: 59 },
        operating_profit: { x: 1948, y: 542, width: 72, height: 132 },
        operating_expenses: { x: 1948, y: 841, width: 72, height: 134 },
        tax_benefit: { x: 2200, y: 637, width: 72, height: 29 },
        net_profit: { x: 2305, y: 479, width: 72, height: 155 },
        other: { x: 2305, y: 791, width: 72, height: 6 },
        rnd: { x: 2305, y: 903, width: 72, height: 102 },
        sm: { x: 2305, y: 1098, width: 72, height: 17 },
        ga: { x: 2305, y: 1278, width: 72, height: 15 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        advertising: {
          blocks: [
            {
              x: 524, top: 373, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Advertising', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+33% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 524, top: 884, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+74% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 154, top: 1011, anchor: 'start',
              lines: [{ text: 'Payments infrastructure', size: 23, weight: 400, color: NOTE }],
            },
          ],
        },
        family_of_apps: {
          blocks: [
            {
              x: 888, top: 423, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Family of Apps', size: 40, weight: 800 },
                { text: '(FoA)', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+33% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        reality_labs: {
          blocks: [
            {
              x: 888, top: 1026, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Reality Labs', size: 40, weight: 800 },
                { text: '(RL)', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(2%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1250, top: 554, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+33% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1616, top: 443, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross Profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '82% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1616, top: 1140, anchor: 'middle', lineGap: 9,
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
              x: 2010, top: 354, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '41% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1984, top: 1008, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        tax_benefit: {
          blocks: [
            {
              x: 2250, top: 684, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax benefit', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2418, top: 488, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '48% margin', size: 28, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2511, top: 756, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2511, top: 906, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '31% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2511, top: 1098, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '5% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2511, top: 1274, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '5% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      { id: 'advertising', col: 0, order: 0, type: 'source', label: 'Advertising', value: 55.0, valueText: '$55.0B', notes: ['+33% Y/Y'] },
      { id: 'other_revenue', col: 0, order: 1, type: 'source', label: 'Other', value: 0.9, notes: ['+74% Y/Y'] },
      { id: 'family_of_apps', col: 1, order: 0, type: 'source', label: ['Family of Apps', '(FoA)'], value: 55.9, notes: ['+33% Y/Y'] },
      { id: 'reality_labs', col: 1, order: 1, type: 'source', label: ['Reality Labs', '(RL)'], value: 0.4, notes: ['(2%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 56.3, notes: ['+33% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross Profit', value: 46.1, notes: ['82% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 10.2 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 22.9, notes: ['41% margin', '(1pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 23.2 },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax benefit', value: 5.0, valueText: '$5.0B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 26.8, notes: ['48% margin', '+8pp Y/Y'] },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 1.1 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 17.7, notes: ['31% of revenue', '+3pp Y/Y'] },
      { id: 'sm', col: 6, order: 3, type: 'cost', label: 'S&M', value: 2.9, notes: ['5% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 2.6, notes: ['5% of revenue', '(1pp) Y/Y'] },
      { id: 'tax', col: 6, order: 5, type: 'cost', label: 'Tax', value: 0, valueText: '' },
    ],

    links: [
      { source: 'advertising', target: 'family_of_apps', value: 55.0, targetOrder: 0 },
      { source: 'other_revenue', target: 'family_of_apps', value: 0.9, targetOrder: 1 },
      { source: 'family_of_apps', target: 'revenue', value: 55.9, targetOrder: 0 },
      { source: 'reality_labs', target: 'revenue', value: 0.4, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 46.1, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 10.2, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 22.9, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 23.2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 21.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 1.1, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 5.0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 17.7, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 2.9, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 2.6, targetOrder: 2 },
    ],
  });
})();
