/* ====================================================================
 * Qualcomm - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/qualcomm-q2-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Qualcomm annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const BLUE = '#3454d6';
  const BLUE_LINK = '#96a7e1';
  const GREEN = '#27a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const svgIcon = (name, x, y, width, height, viewBox) => `
    <svg x="${x}" y="${y}" width="${width}" height="${height}" viewBox="${viewBox}" overflow="visible">
      ${BUSINESS_ICONS[name] || ''}
    </svg>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${svgIcon('qualcommHandsetsPhone', 174, 531, 50, 91, '0 0 67 90')}
      ${svgIcon('qualcommAutomotiveCar', 148, 763, 103, 85, '0 0 124 102')}
      ${svgIcon('qualcommIotCluster', 153, 923, 98, 96, '0 0 114 112')}

      <g transform="translate(149 1238)">
        <rect x="0" y="0" width="467" height="113" rx="24" fill="${BLUE}"/>
        <text x="40" y="44" font-size="31" font-weight="800" fill="#ffffff">QCT: CDMA Technologies</text>
        <text x="40" y="86" font-size="31" font-weight="800" fill="#ffffff">QTL: Technology Licensing</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'qualcomm-q2-fy26',
    name: 'Qualcomm · Q2 FY26',
    company: 'Qualcomm',
    meta: {
      company: 'Qualcomm',
      title: 'Qualcomm Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/qualcomm-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2360,
      periodX: 2425,
      periodY: 267,
      periodNoteY: 321,
      logoWidth: 540,
      logoHeight: 126,
      logoY: 262,
      logoViewBox: '0 0 540 126',
      logoSvg: BUSINESS_ICONS.qualcommCompanyWordmark || '',
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
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 31.9,
      nodes: {
        handsets: { x: 363, y: 522, width: 72, height: 191 },
        automotive: { x: 363, y: 851, width: 72, height: 40 },
        iot: { x: 363, y: 1006, width: 72, height: 54 },
        qct: { x: 737, y: 598, width: 72, height: 289 },
        qtl: { x: 737, y: 1132, width: 72, height: 43 },
        other_revenue: { x: 737, y: 1357, width: 72, height: 4 },
        revenue: { x: 1110, y: 710, width: 73, height: 339 },
        gross_profit: { x: 1487, y: 597, width: 72, height: 182 },
        cost_of_revenue: { x: 1484, y: 1019, width: 73, height: 156 },
        operating_profit: { x: 1861, y: 518, width: 72, height: 72 },
        operating_expenses: { x: 1860, y: 797, width: 73, height: 107 },
        tax_benefit: { x: 2054, y: 351, width: 71, height: 164 },
        net_profit: { x: 2232, y: 377, width: 72, height: 234 },
        other_non_operating: { x: 2231, y: 747, width: 73, height: 3 },
        rnd: { x: 2231, y: 894, width: 73, height: 79 },
        sga: { x: 2231, y: 1105, width: 73, height: 28 },
        other_opex: { x: 2231, y: 1268, width: 73, height: 1 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        handsets: {
          blocks: [
            {
              x: 399, top: 430, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(13%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 192, top: 654, anchor: 'middle',
              lines: [{ text: 'Handsets', size: 40, weight: 800 }],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 399, top: 762, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+38% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 192, top: 855, anchor: 'middle',
              lines: [{ text: 'Automotive', size: 40, weight: 800 }],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 399, top: 916, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 193, top: 1018, anchor: 'middle',
              lines: [{ text: 'IoT', size: 40, weight: 800 }],
            },
          ],
        },
        qct: {
          blocks: [
            {
              x: 773, top: 416, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'QCT', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(4%) Y/Y', size: 28, weight: 400, color: NOTE },
                { text: '27% EBIT margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        qtl: {
          blocks: [
            {
              x: 773, top: 962, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'QTL', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
                { text: '72% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 773, top: 1263, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1146, top: 568, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(3%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1523, top: 359, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross', size: 40, weight: 800, color: GREEN_LABEL },
                { text: 'profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '54% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1520, top: 1211, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1880, top: 284, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '22% margin', size: 28, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1897, top: 925, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'Expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        tax_benefit: {
          blocks: [
            {
              x: 2090, top: 224, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 34, weight: 800 },
                { text: 'benefit', size: 34, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2427, top: 421, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '70% margin', size: 28, weight: 400, color: NOTE },
                { text: '+44pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_non_operating: {
          blocks: [
            {
              x: 2448, top: 717, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2450, top: 888, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '23% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2450, top: 1069, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2450, top: 1248, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '($29M)', size: 31, weight: 400 },
                { text: '0% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      { id: 'handsets', col: 0, order: 0, type: 'source', label: 'Handsets', value: 6.0, valueText: '$6.0B', notes: ['(13%) Y/Y'] },
      { id: 'automotive', col: 0, order: 1, type: 'source', label: 'Automotive', value: 1.3, notes: ['+38% Y/Y'] },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'IoT', value: 1.7, notes: ['+9% Y/Y'] },
      { id: 'qct', col: 1, order: 0, type: 'source', label: 'QCT', value: 9.1, notes: ['(4%) Y/Y', '27% EBIT margin'] },
      { id: 'qtl', col: 1, order: 1, type: 'source', label: 'QTL', value: 1.4, notes: ['+5% Y/Y', '72% margin'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source', label: 'Other', value: 0.1 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 10.6, notes: ['(3%) Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 5.7, notes: ['54% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.9 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.3, notes: ['22% margin', '(7pp) Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 3.4 },
      { id: 'tax_benefit', col: 5, order: 0, type: 'profit', label: 'Tax benefit', value: 5.1, valueText: '$5.1B' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 7.4, notes: ['70% margin', '+44pp Y/Y'] },
      { id: 'other_non_operating', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.1 },
      { id: 'rnd', col: 6, order: 2, type: 'cost', label: 'R&D', value: 2.5, notes: ['23% of revenue', '+3pp Y/Y'] },
      { id: 'sga', col: 6, order: 3, type: 'cost', label: 'SG&A', value: 0.9, notes: ['8% of revenue', '+2pp Y/Y'] },
      { id: 'other_opex', col: 6, order: 4, type: 'cost', label: 'Other', value: 0.029, valueText: '($29M)', notes: ['0% of revenue', '+0pp Y/Y'] },
      { id: 'tax', col: 6, order: 5, type: 'cost', label: 'Tax', value: 0, valueText: '' },
    ],

    links: [
      { source: 'handsets', target: 'qct', value: 6.0, targetOrder: 0 },
      { source: 'automotive', target: 'qct', value: 1.3, targetOrder: 1 },
      { source: 'iot', target: 'qct', value: 1.7, targetOrder: 2 },
      { source: 'qct', target: 'revenue', value: 9.1, targetOrder: 0 },
      { source: 'qtl', target: 'revenue', value: 1.4, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.1, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 5.7, sourceOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.9, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.3, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.4, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 2.2, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'other_non_operating', value: 0.1, sourceOrder: 1, linkTint: RED_LINK },
      { source: 'tax_benefit', target: 'net_profit', value: 5.1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 2.5, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.9, targetOrder: 1 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.029, targetOrder: 2 },
    ],
  });
})();
