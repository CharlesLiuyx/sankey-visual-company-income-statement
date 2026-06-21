/* ====================================================================
 * Lenovo - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/lenovo-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#6b6c6e';
  const PURPLE = '#881178';
  const PURPLE_LINK = '#be8ab8';
  const ORANGE = '#ff614f';
  const ORANGE_LINK = '#f3b0a8';
  const BLUE = '#3148ba';
  const BLUE_LINK = '#9ca8dc';
  const HUB = '#000000';
  const HUB_LINK = '#8e8e8b';
  const GREEN = '#28a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccf99';
  const RED = '#df0000';
  const RED_LABEL = '#971900';
  const RED_LINK = '#e98283';
  const RIGHT_LABEL_X = 2408;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="689" y="394" font-family="Arial Black,Arial,sans-serif" font-size="152" font-weight="900" textLength="526" lengthAdjust="spacingAndGlyphs" fill="#e60012">Lenovo</text>
      <g fill="${NOTE}" font-weight="700">
        <text x="1900" y="1184" text-anchor="middle" font-size="42">Q4 FY26</text>
        <text x="1900" y="1231" text-anchor="middle" font-size="30" font-weight="500">Ending Apr. 2026</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'lenovo-q4-fy26',
    name: 'Lenovo · Q4 FY26',
    company: 'Lenovo',
    meta: {
      company: 'Lenovo',
      title: 'Lenovo Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/lenovo-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2178,
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
        source: { node: PURPLE, label: PURPLE },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PURPLE_LINK,
        hub: HUB_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 21.55,
      nodes: {
        idg: { x: 397, y: 453, width: 71, height: 315 },
        isg: { x: 397, y: 936, width: 71, height: 120 },
        ssg: { x: 396, y: 1217, width: 72, height: 54 },
        gross_revenue: { x: 770, y: 545, width: 71, height: 491 },
        revenue: { x: 1144, y: 629, width: 71, height: 465 },
        eliminations: { x: 1144, y: 1247, width: 71, height: 26 },
        gross_profit: { x: 1518, y: 550, width: 71, height: 75 },
        cost_of_revenue: { x: 1518, y: 787, width: 71, height: 389 },
        other: { x: 1776, y: 532, width: 74, height: 4 },
        operating_profit: { x: 1891, y: 444, width: 72, height: 18 },
        operating_expenses: { x: 1896, y: 668, width: 72, height: 57 },
        net_profit: { x: 2265, y: 333, width: 72, height: 12 },
        financial: { x: 2265, y: 553, width: 72, height: 4 },
        tax: { x: 2265, y: 665, width: 72, height: 2 },
        selling_distribution: { x: 2265, y: 848, width: 72, height: 22 },
        administrative: { x: 2265, y: 1046, width: 72, height: 17 },
        rnd: { x: 2265, y: 1232, width: 72, height: 15 },
      },
      labels: {
        idg: {
          blocks: [
            {
              x: 356, top: 500, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'IDG', size: 40, weight: 800 },
                { text: 'Intelligent', size: 40, weight: 800 },
                { text: 'Devices', size: 40, weight: 800 },
                { text: 'Group', size: 40, weight: 800 },
              ],
            },
            {
              x: 432, top: 360, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+24% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 170, top: 708, anchor: 'middle',
              lines: [{ text: '7% operating margin', size: 28, weight: 400, color: NOTE }],
            },
          ],
        },
        isg: {
          blocks: [
            {
              x: 356, top: 846, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'ISG', size: 40, weight: 800 },
                { text: 'Infrastructure', size: 40, weight: 800 },
                { text: 'Solutions', size: 40, weight: 800 },
                { text: 'Group', size: 40, weight: 800 },
              ],
            },
            {
              x: 434, top: 846, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+37% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 173, top: 1058, anchor: 'middle',
              lines: [{ text: '4% operating margin', size: 28, weight: 400, color: NOTE }],
            },
          ],
        },
        ssg: {
          blocks: [
            {
              x: 356, top: 1118, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'SSG', size: 40, weight: 800 },
                { text: 'Solutions &', size: 40, weight: 800 },
                { text: 'Services', size: 40, weight: 800 },
                { text: 'Group', size: 40, weight: 800 },
              ],
            },
            {
              x: 434, top: 1118, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 178, top: 1317, anchor: 'middle',
              lines: [{ text: '22% operating margin', size: 28, weight: 400, color: NOTE }],
            },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1178, top: 487, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+27% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1179, top: 1297, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Eliminations', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1554, top: 365, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '16% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1553, top: 1200, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 34, weight: 800 },
                { text: 'revenue', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 1815, top: 552, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$0.1B', size: 30, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1927, top: 267, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '4% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1932, top: 746, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 34, weight: 800 },
                { text: 'expenses', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 274, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '3% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        financial: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 538, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Financial', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 654, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        selling_distribution: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 846, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Selling &', size: 31, weight: 800 },
                { text: 'Distribution', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '5% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        administrative: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1027, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Administrative', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1196, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'idg', col: 0, order: 0, type: 'source',
        label: ['IDG', 'Intelligent', 'Devices', 'Group'],
        value: 14.6, color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK,
      },
      {
        id: 'isg', col: 0, order: 1, type: 'source',
        label: ['ISG', 'Infrastructure', 'Solutions', 'Group'],
        value: 5.6, color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'ssg', col: 0, order: 2, type: 'source',
        label: ['SSG', 'Solutions &', 'Services', 'Group'],
        value: 2.6, color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_revenue', col: 1, order: 0, type: 'hub',
        label: 'Gross revenue', value: 22.8, color: HUB, labelColor: HUB, linkTint: HUB_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 21.6, color: HUB, labelColor: HUB, linkTint: HUB_LINK,
      },
      {
        id: 'eliminations', col: 2, order: 1, type: 'cost',
        label: 'Eliminations', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 3.5, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 18.0, valueText: '($18.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 4, order: 0, type: 'profit',
        label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 1, type: 'profit',
        label: 'Operating profit', value: 0.9, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 2, type: 'cost',
        label: ['Operating', 'expenses'], value: 2.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 0.6, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'financial', col: 5, order: 1, type: 'cost',
        label: 'Financial', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 5, order: 2, type: 'cost',
        label: 'Tax', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'selling_distribution', col: 5, order: 3, type: 'cost',
        label: ['Selling &', 'Distribution'], value: 1.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'administrative', col: 5, order: 4, type: 'cost',
        label: 'Administrative', value: 0.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 5, type: 'cost',
        label: 'R&D', value: 0.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'idg', target: 'gross_revenue', value: 14.6, width: 315, targetOrder: 0, linkTint: { left: PURPLE_LINK, right: PURPLE_LINK } },
      { source: 'isg', target: 'gross_revenue', value: 5.6, width: 120, targetOrder: 1, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'ssg', target: 'gross_revenue', value: 2.6, width: 54, targetOrder: 2, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'gross_revenue', target: 'revenue', value: 21.6, width: 465, sourceOrder: 0, targetOrder: 0, linkTint: { left: HUB_LINK, right: HUB_LINK } },
      { source: 'gross_revenue', target: 'eliminations', value: 1.2, width: 26, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 3.5, width: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 18.0, width: 389, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.8, width: 17, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'operating_profit', value: 0.1, width: 3, sourceOrder: 0, targetOrder: 1 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.7, width: 57, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.6, width: 12, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'financial', value: 0.2, width: 4, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'selling_distribution', value: 1.1, width: 22, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'administrative', value: 0.9, width: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.7, width: 15, sourceOrder: 2, targetOrder: 0 },
    ],
  });
})();
