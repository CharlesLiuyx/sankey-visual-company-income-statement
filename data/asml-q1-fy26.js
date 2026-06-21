/* ====================================================================
 * ASML - Q1 FY26 income statement (€B)
 * Reconstructed from input/processed/asml-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NAVY = '#0f238c';
  const NAVY_LINK = '#8d97c7';
  const ORANGE = '#ff7f45';
  const ORANGE_LINK = '#f5ba9d';
  const BLUE = '#1c7ddb';
  const BLUE_LINK = '#8ebce7';
  const DRY_GREEN = '#34b233';
  const DRY_LINK = '#a8d9a4';
  const YELLOW = '#fcd12a';
  const YELLOW_LABEL = '#f0a000';
  const YELLOW_LINK = '#f0dc92';
  const LIGHT_BLUE = '#8ad2f5';
  const LIGHT_BLUE_LINK = '#bde5f5';
  const PROFIT_GREEN = '#2ca02c';
  const PROFIT_LABEL = '#008f47';
  const PROFIT_LINK = '#98ca95';
  const RED = '#cc0000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#df7f82';
  const NOTE = '#757575';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="1221" y="385" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="162" font-weight="900" textLength="446" lengthAdjust="spacingAndGlyphs" fill="${NAVY}">ASML</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asml-q1-fy26',
    name: 'ASML · Q1 FY26',
    company: 'ASML',
    meta: {
      company: 'ASML',
      title: 'ASML Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/asml-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2070,
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
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: PROFIT_GREEN, label: PROFIT_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: PROFIT_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 44.3,
      nodes: {
        euv: { x: 437, y: 462, width: 71, height: 183 },
        arfi: { x: 437, y: 756, width: 71, height: 62 },
        arf_dry: { x: 437, y: 929, width: 71, height: 4 },
        krf: { x: 437, y: 1034, width: 71, height: 14 },
        i_line: { x: 437, y: 1151, width: 71, height: 4 },
        metrology_inspection: { x: 437, y: 1273, width: 71, height: 4 },
        net_system_sales: { x: 810, y: 637, width: 71, height: 277 },
        installed_base_management: { x: 811, y: 1083, width: 70, height: 109 },
        revenue: { x: 1184, y: 710, width: 71, height: 388 },
        gross_profit: { x: 1558, y: 632, width: 71, height: 204 },
        cost_of_sales: { x: 1558, y: 1008, width: 71, height: 181 },
        operating_profit: { x: 1932, y: 543, width: 71, height: 139 },
        operating_expenses: { x: 1932, y: 866, width: 71, height: 64 },
        other: { x: 2234, y: 638, width: 36, height: 3 },
        net_profit: { x: 2305, y: 463, width: 72, height: 116 },
        tax: { x: 2305, y: 752, width: 72, height: 23 },
        rnd: { x: 2305, y: 980, width: 72, height: 50 },
        sga: { x: 2305, y: 1248, width: 72, height: 11 },
      },
      labels: {
        euv: {
          blocks: [
            { x: 474, top: 399, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: ORANGE }] },
            {
              x: 397, top: 522, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'EUV', size: 40, weight: 800, color: ORANGE },
                { text: 'Extreme Ultraviolet', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arfi: {
          blocks: [
            { x: 475, top: 696, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: BLUE }] },
            {
              x: 397, top: 757, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArFi', size: 40, weight: 800, color: BLUE },
                { text: 'Argon Fluoride immersion', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        arf_dry: {
          blocks: [
            { x: 475, top: 878, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: DRY_GREEN }] },
            {
              x: 397, top: 891, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'ArF Dry', size: 38, weight: 800, color: DRY_GREEN },
                { text: 'Argon Fluoride Dry', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        krf: {
          blocks: [
            { x: 475, top: 963, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: NAVY }] },
            {
              x: 397, top: 1000, anchor: 'end', lineGap: 15,
              lines: [
                { text: 'KrF', size: 38, weight: 800, color: NAVY },
                { text: 'Krypton Fluoride', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        i_line: {
          blocks: [
            { x: 475, top: 1086, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: YELLOW }] },
            { x: 397, top: 1135, anchor: 'end', lines: [{ text: 'I-line', size: 39, weight: 800, color: YELLOW }] },
          ],
        },
        metrology_inspection: {
          blocks: [
            { x: 475, top: 1204, anchor: 'middle', lines: [{ text: '$value', size: 39, weight: 400, color: LIGHT_BLUE }] },
            {
              x: 397, top: 1226, anchor: 'end', lineGap: 7,
              lines: [
                { text: 'Metrology', size: 39, weight: 800, color: LIGHT_BLUE },
                { text: '& Inspection', size: 39, weight: 800, color: LIGHT_BLUE },
              ],
            },
          ],
        },
        net_system_sales: {
          blocks: [
            {
              x: 844, top: 443, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net system', size: 41, weight: 800 },
                { text: 'sales', size: 41, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        installed_base_management: {
          blocks: [
            {
              x: 846, top: 1208, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Installed base', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: 'management', size: 39, weight: 800, color: YELLOW_LABEL },
                { text: '$value', size: 39, weight: 400, color: YELLOW_LABEL },
                { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1220, top: 569, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net sales', size: 42, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1594, top: 453, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '53% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1594, top: 1216, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of sales', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1968, top: 355, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '36% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1968, top: 954, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2197, top: 648, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: PROFIT_LABEL },
                { text: '$value', size: 31, weight: 400, color: PROFIT_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2399, top: 455, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '30% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2464, top: 730, anchor: 'middle', lineGap: 8,
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
              x: 2464, top: 965, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2464, top: 1208, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'euv', col: 0, order: 0, type: 'source', label: 'EUV', value: 4.1, notes: ['Extreme Ultraviolet'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'arfi', col: 0, order: 1, type: 'source', label: 'ArFi', value: 1.4, notes: ['Argon Fluoride immersion'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'arf_dry', col: 0, order: 2, type: 'source', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'], color: DRY_GREEN, labelColor: DRY_GREEN, linkTint: DRY_LINK },
      { id: 'krf', col: 0, order: 3, type: 'source', label: 'KrF', value: 0.4, notes: ['Krypton Fluoride'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'i_line', col: 0, order: 4, type: 'source', label: 'I-line', value: 0.1, color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK },
      {
        id: 'metrology_inspection',
        col: 0,
        order: 5,
        type: 'source',
        label: ['Metrology', '& Inspection'],
        value: 0.1,
        color: LIGHT_BLUE,
        labelColor: LIGHT_BLUE,
        linkTint: LIGHT_BLUE_LINK,
      },
      { id: 'net_system_sales', col: 1, order: 0, type: 'source', label: ['Net system', 'sales'], value: 6.3, notes: ['+9% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'installed_base_management', col: 1, order: 1, type: 'source', label: ['Installed base', 'management'], value: 2.5, notes: ['+24% Y/Y'], color: YELLOW, labelColor: YELLOW_LABEL, linkTint: YELLOW_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Net sales', value: 8.8, notes: ['+13% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.6, notes: ['53% margin', '(1pp) Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 4.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 3.2, notes: ['36% margin', '+1pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 5, order: 0, type: 'profit', label: 'Other', value: 0.041, valueText: '€41M', color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'net_profit', col: 5, order: 1, type: 'profit', label: 'Net profit', value: 2.7, notes: ['30% margin', '+0pp Y/Y'], color: PROFIT_GREEN, labelColor: PROFIT_LABEL, linkTint: PROFIT_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 4, type: 'cost', label: 'SG&A', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'euv', target: 'net_system_sales', value: 4.1, width: 183, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'arfi', target: 'net_system_sales', value: 1.4, width: 62, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'arf_dry', target: 'net_system_sales', value: 0.1, width: 4, targetOrder: 2, linkTint: { left: DRY_LINK, right: DRY_LINK } },
      { source: 'krf', target: 'net_system_sales', value: 0.4, width: 14, targetOrder: 3, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'i_line', target: 'net_system_sales', value: 0.1, width: 4, targetOrder: 4, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'metrology_inspection', target: 'net_system_sales', value: 0.1, width: 4, targetOrder: 5, linkTint: { left: LIGHT_BLUE_LINK, right: LIGHT_BLUE_LINK } },
      { source: 'net_system_sales', target: 'revenue', value: 6.3, width: 277, sourceOrder: 0, targetOrder: 0 },
      { source: 'installed_base_management', target: 'revenue', value: 2.5, width: 109, sourceOrder: 0, targetOrder: 1, linkTint: { left: YELLOW_LINK, right: YELLOW_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 4.6, width: 204, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 4.1, width: 181, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 3.2, width: 139, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.5, width: 64, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 2.7, width: 114, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.041, width: 2, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.5, width: 23, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.2, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.3, width: 11, sourceOrder: 1, targetOrder: 0 },
    ],
  });
})();
