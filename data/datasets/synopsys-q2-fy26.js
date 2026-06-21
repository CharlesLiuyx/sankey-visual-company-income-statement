/* ====================================================================
 * Synopsys - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/synopsys-q2-fy26.png as a fixed
 * d3-sankey layout with a reusable SVG Synopsys wordmark.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const PURPLE = '#5a2d85';
  const PURPLE_LINK = '#aa98c2';
  const GREEN = '#2ba32b';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d90000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="1816" y="1376" font-size="30" font-weight="400" fill="${NOTE}">* Including restructuring charges</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'synopsys-q2-fy26',
    name: 'Synopsys · Q2 FY26',
    company: 'Synopsys',
    meta: {
      company: 'Synopsys',
      title: 'Synopsys Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/synopsys-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2300,
      periodX: 338,
      periodY: 1253,
      periodNoteY: 1296,
      logoWidth: 560,
      logoHeight: 126,
      logoY: 250,
      logoViewBox: '0 0 560 126',
      logoSvg: BUSINESS_ICONS.synopsysCompanyWordmark || '',
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
        hub: { node: PURPLE, label: PURPLE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PURPLE_LINK,
        hub: PURPLE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 157.5,
      nodes: {
        design_automation: { x: 356, y: 533, width: 72, height: 287 },
        design_ip: { x: 356, y: 1021, width: 72, height: 72 },
        revenue: { x: 824, y: 633, width: 72, height: 359 },
        gross_profit: { x: 1290, y: 532, width: 72, height: 260 },
        cost_of_revenue: { x: 1290, y: 988, width: 72, height: 99 },
        operating_profit: { x: 1757, y: 448, width: 72, height: 19 },
        operating_expenses: { x: 1757, y: 649, width: 72, height: 240 },
        net_profit: { x: 2225, y: 327, width: 72, height: 3 },
        tax: { x: 2225, y: 540, width: 72, height: 16 },
        rnd: { x: 2225, y: 742, width: 72, height: 110 },
        sm: { x: 2225, y: 938, width: 72, height: 60 },
        other_opex: { x: 2225, y: 1088, width: 72, height: 43 },
        ga: { x: 2225, y: 1246, width: 72, height: 27 },
      },
      labels: {
        design_automation: {
          blocks: [
            {
              x: 392, top: 435, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+62% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 579, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Design', size: 40, weight: 800 },
                { text: 'Automation', size: 40, weight: 800 },
                { text: 'Adjusted margin 41%', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        design_ip: {
          blocks: [
            {
              x: 392, top: 929, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 199, top: 1020, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Design IP', size: 40, weight: 800 },
                { text: 'Adjusted margin 14%', size: 29, weight: 400, color: NOTE },
                { text: '(23pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 860, top: 488, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+42% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1326, top: 354, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '72% margin', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1326, top: 1110, anchor: 'middle', lineGap: 9,
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
              x: 1793, top: 270, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '5% margin', size: 29, weight: 400, color: NOTE },
                { text: '(18pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1793, top: 914, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'Expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2444, top: 279, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '1% margin', size: 29, weight: 400, color: NOTE },
                { text: '(21pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2437, top: 515, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2355, top: 750, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D ($0.7B)', size: 31, weight: 800 },
                { text: '31% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2355, top: 930, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M ($0.4B)', size: 31, weight: 800 },
                { text: '17% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: 2355, top: 1071, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other * ($0.3B)', size: 31, weight: 800 },
                { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+12pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2355, top: 1212, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A ($0.2B)', size: 31, weight: 800 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'design_automation',
        col: 0,
        order: 0,
        type: 'source',
        label: ['Design', 'Automation'],
        value: 1.8218,
        valueText: '$1.8B',
        notes: ['+62% Y/Y', 'Adjusted margin 41%', '+5pp Y/Y'],
        color: PURPLE,
        labelColor: PURPLE,
        linkTint: PURPLE_LINK,
      },
      {
        id: 'design_ip',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Design IP',
        value: 0.4542,
        valueText: '$0.5B',
        notes: ['(6%) Y/Y', 'Adjusted margin 14%', '(23pp) Y/Y'],
        color: PURPLE,
        labelColor: PURPLE,
        linkTint: PURPLE_LINK,
      },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.275985, valueText: '$2.3B', notes: ['+42% Y/Y'], color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1.646135, valueText: '$1.6B', notes: ['72% margin', '(8pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.62985, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.120426, valueText: '$0.1B', notes: ['5% margin', '(18pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'Expenses'], value: 1.525709, valueText: '($1.5B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.017105, valueText: '$17M', notes: ['1% margin', '(21pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 4, order: 1, type: 'cost', label: 'Tax', value: 0.103321, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 2, type: 'cost', label: 'R&D', value: 0.700124, valueText: '($0.7B)', notes: ['31% of revenue', '(4pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 3, type: 'cost', label: 'S&M', value: 0.381998, valueText: '($0.4B)', notes: ['17% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 4, order: 4, type: 'cost', label: 'Other *', value: 0.271169, valueText: '($0.3B)', notes: ['12% of revenue', '+12pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 5, type: 'cost', label: 'G&A', value: 0.172418, valueText: '($0.2B)', notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'design_automation', target: 'revenue', value: 1.8218, width: 287, sourceOrder: 0, targetOrder: 0 },
      { source: 'design_ip', target: 'revenue', value: 0.4542, width: 72, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 1.646135, width: 260, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.62985, width: 99, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.120426, width: 19, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.525709, width: 240, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 0.017105,
        width: 3,
        sourceOrder: 0,
        targetOrder: 0,
        curve: { c1x: 1972, c1y: 448, c2x: 2086, c2y: 327 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 0.103321,
        width: 16,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1972, c1y: 468, c2x: 2085, c2y: 548 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 0.700124, width: 110, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.381998, width: 60, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.271169, width: 43, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.172418, width: 27, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Synopsys · 2026 财年第二季度',
        meta: {
          title: 'Synopsys 2026 财年第二季度利润表',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 4 月',
        },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <text x="1816" y="1376" font-size="30" font-weight="400" fill="${NOTE}">* 包括重组费用</text>
          </g>`,
        nodes: {
          design_automation: { label: ['设计', '自动化'], notes: ['同比 +62%', '调整后利润率 41%', '同比 +5 个百分点'] },
          design_ip: { label: '设计 IP', notes: ['同比 (6%)', '调整后利润率 14%', '同比 (23 个百分点)'] },
          revenue: { label: '收入', notes: ['同比 +42%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 72%', '同比 (8 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 5%', '同比 (18 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 1%', '同比 (21 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 31%', '同比 (4 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 17%', '同比 +3 个百分点'] },
          other_opex: { label: '其他 *', notes: ['占收入 12%', '同比 +12 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            rnd: {
              blocks: [
                {
                  x: 2355, top: 750, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发 ($0.7B)', size: 31, weight: 800 },
                    { text: '占收入 31%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2355, top: 930, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场 ($0.4B)', size: 31, weight: 800 },
                    { text: '占收入 17%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2355, top: 1212, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用 ($0.2B)', size: 31, weight: 800 },
                    { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
