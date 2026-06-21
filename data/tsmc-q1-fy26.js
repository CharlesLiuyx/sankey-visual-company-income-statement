/* ====================================================================
 *  TSMC - Q1 FY26 income statement ($B)
 *  Reconstructed from input/processed/tsmc-q1-fy26.png as a fixed
 *  d3-sankey layout with an SVG-only TSMC logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLACK = '#000000';
  const GREEN = '#24a324';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#98cc96';
  const RED = '#d70000';
  const RED_LABEL = '#991100';
  const RED_LINK = '#e58383';
  const HPC = '#f5482a';
  const HPC_LINK = '#ef9f94';
  const SMARTPHONE = '#08008a';
  const SMARTPHONE_LINK = '#8585c3';
  const IOT = '#d2a729';
  const IOT_LINK = '#eadc9d';
  const AUTOMOTIVE = '#ff9f00';
  const AUTOMOTIVE_LINK = '#ffd082';
  const DCE = '#0099ff';
  const DCE_LINK = '#86cfff';
  const OTHERS = '#40d61d';
  const OTHERS_LINK = '#a7e98f';
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tsmc-q1-fy26',
    name: 'TSMC · Q1 FY26',
    company: 'TSMC',
    meta: {
      company: 'TSMC',
      title: 'TSMC Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tsmc-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2059,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 420,
      logoHeight: 259,
      logoY: 221,
      logoViewBox: '0 0 320 250',
      logoSvg: businessIcons.tsmcLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: HPC, label: HPC },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: HPC_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },

    layout: {
      scale: 9.72,
      nodes: {
        hpc: { x: 449, y: 404, width: 71, height: 212 },
        smartphones: { x: 448, y: 729, width: 72, height: 91 },
        iot: { x: 449, y: 933, width: 71, height: 19 },
        automotive: { x: 448, y: 1063, width: 72, height: 13 },
        dce: { x: 448, y: 1184, width: 72, height: 5 },
        others: { x: 448, y: 1292, width: 72, height: 7 },
        revenue: { x: 916, y: 625, width: 71, height: 350 },
        gross_profit: { x: 1382, y: 539, width: 73, height: 231 },
        cost_of_revenue: { x: 1382, y: 958, width: 72, height: 118 },
        operating_profit: { x: 1850, y: 459, width: 72, height: 202 },
        operating_expenses: { x: 1849, y: 838, width: 73, height: 28 },
        other: { x: 2185, y: 606, width: 72, height: 8 },
        net_profit: { x: 2317, y: 389, width: 72, height: 175 },
        tax: { x: 2316, y: 740, width: 73, height: 35 },
        rnd: { x: 2316, y: 916, width: 73, height: 20 },
        sga: { x: 2316, y: 1128, width: 73, height: 8 },
      },
      labels: {
        hpc: {
          blocks: [
            {
              x: 427, top: 440, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'High Performance', size: 40, weight: 800, color: HPC },
                { text: 'Computing', size: 40, weight: 800, color: HPC },
                { text: '61% of revenue +2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        smartphones: {
          blocks: [
            {
              x: 427, top: 730, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Smartphones', size: 40, weight: 800, color: SMARTPHONE },
                { text: '26% of revenue (2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        iot: {
          blocks: [
            {
              x: 427, top: 886, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Internet of Things', size: 38, weight: 800, color: IOT },
                { text: '6% of revenue +1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        automotive: {
          blocks: [
            {
              x: 427, top: 1032, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Automotive', size: 38, weight: 800, color: AUTOMOTIVE },
                { text: '4% of revenue (1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dce: {
          blocks: [
            {
              x: 427, top: 1137, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Digital Consumer', size: 37, weight: 800, color: DCE },
                { text: 'Electronics', size: 37, weight: 800, color: DCE },
                { text: '1% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 427, top: 1274, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Others', size: 38, weight: 800, color: OTHERS },
                { text: '2% of revenue Flat Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 952, top: 486, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+41% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1418, top: 354, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '66% margin', size: 28, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1418, top: 1095, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1886, top: 277, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '58% margin', size: 28, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1857, top: 891, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800 },
                { text: 'expenses', size: 35, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2185, top: 633, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2410, top: 402, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '51% margin', size: 28, weight: 400, color: NOTE },
                { text: '+8pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2505, top: 727, anchor: 'middle', lineGap: 8,
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
              x: 2507, top: 906, anchor: 'middle', lineGap: 8,
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
              x: 2507, top: 1110, anchor: 'middle', lineGap: 8,
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
      { id: 'hpc', col: 0, order: 0, type: 'source', label: ['High Performance', 'Computing'], value: 21.9, color: HPC, labelColor: HPC, linkTint: HPC_LINK },
      { id: 'smartphones', col: 0, order: 1, type: 'source', label: 'Smartphones', value: 9.3, color: SMARTPHONE, labelColor: SMARTPHONE, linkTint: SMARTPHONE_LINK },
      { id: 'iot', col: 0, order: 2, type: 'source', label: 'Internet of Things', value: 2.2, color: IOT, labelColor: IOT, linkTint: IOT_LINK },
      { id: 'automotive', col: 0, order: 3, type: 'source', label: 'Automotive', value: 1.4, color: AUTOMOTIVE, labelColor: AUTOMOTIVE, linkTint: AUTOMOTIVE_LINK },
      { id: 'dce', col: 0, order: 4, type: 'source', label: ['Digital Consumer', 'Electronics'], value: 0.4, color: DCE, labelColor: DCE, linkTint: DCE_LINK },
      { id: 'others', col: 0, order: 5, type: 'source', label: 'Others', value: 0.7, color: OTHERS, labelColor: OTHERS, linkTint: OTHERS_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 35.9, notes: ['+41% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 23.8, notes: ['66% margin', '+7pp Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 12.1 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 20.9, notes: ['58% margin', '+10pp Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.0 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 18.1, notes: ['51% margin', '+8pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 3.6 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 2.1 },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 0.8 },
    ],

    links: [
      { source: 'hpc', target: 'revenue', value: 21.9, targetOrder: 0, linkTint: { left: HPC_LINK, right: HPC_LINK } },
      { source: 'smartphones', target: 'revenue', value: 9.3, targetOrder: 1, linkTint: { left: SMARTPHONE_LINK, right: SMARTPHONE_LINK } },
      { source: 'iot', target: 'revenue', value: 2.2, targetOrder: 2, linkTint: { left: IOT_LINK, right: IOT_LINK } },
      { source: 'automotive', target: 'revenue', value: 1.4, targetOrder: 3, linkTint: { left: AUTOMOTIVE_LINK, right: AUTOMOTIVE_LINK } },
      { source: 'dce', target: 'revenue', value: 0.4, targetOrder: 4, linkTint: { left: DCE_LINK, right: DCE_LINK } },
      { source: 'others', target: 'revenue', value: 0.7, targetOrder: 5, linkTint: { left: OTHERS_LINK, right: OTHERS_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 23.8, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 12.1, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 20.9, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.0, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 17.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 3.6, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.9, targetOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 2.1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 0.8, targetOrder: 1 },
    ],
  });
})();
