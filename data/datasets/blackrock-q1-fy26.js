/* ====================================================================
 *  BlackRock - Q1 FY26 income statement ($B)
 *  Reconstructed from input/processed/blackrock-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155077';
  const NOTE = '#737373';
  const GRAY_LINK = '#858585';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#990e00';
  const RED_LINK = '#e08585';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <path d="M2148 517H2222C2244 517 2232 423 2276 423" fill="none" stroke="${GREEN_LINK}" stroke-width="3" stroke-linecap="round"/>
      <text x="2141" y="564" font-size="32" font-weight="800" fill="${GREEN_LABEL}">Other</text>
      <text x="2141" y="604" font-size="29" font-weight="500" fill="${GREEN_LABEL}">$28M</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'blackrock-q1-fy26',
    name: 'BlackRock - Q1 FY26',
    company: 'BlackRock',
    meta: {
      company: 'BlackRock',
      title: 'BlackRock Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/blackrock-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2360,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 720,
      logoHeight: 134,
      logoY: 310,
      logoViewBox: '0 0 720 134',
      logoSvg: `
        <text x="360" y="104" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="112" font-weight="900" textLength="710" lengthAdjust="spacingAndGlyphs" fill="#000000">BlackRock</text>
        <text x="724" y="100" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="#000000">&#174;</text>
      `,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 45.4,
      nodes: {
        investment_advisory_fees: { x: 408, y: 466, width: 72, height: 245 },
        performance_fees: { x: 408, y: 839, width: 72, height: 14 },
        technology_services: { x: 408, y: 974, width: 72, height: 23 },
        distribution_fees: { x: 408, y: 1120, width: 72, height: 18 },
        advisory_other: { x: 408, y: 1267, width: 72, height: 5 },
        revenue: { x: 1030, y: 681, width: 72, height: 304 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        operating_profit: { x: 1653, y: 482, width: 72, height: 127 },
        operating_expenses: { x: 1653, y: 927, width: 72, height: 176 },
        net_profit: { x: 2276, y: 317, width: 72, height: 105 },
        other: { x: -1000, y: -1000, width: 1, height: 1 },
        tax: { x: 2276, y: 687, width: 72, height: 23 },
        compensation_benefits: { x: 2276, y: 825, width: 72, height: 100 },
        sales_asset_account_expenses: { x: 2276, y: 1034, width: 72, height: 59 },
        amortization_other: { x: 2276, y: 1206, width: 72, height: 14 },
        ga: { x: 2276, y: 1341, width: 72, height: 5 },
      },
      labels: {
        investment_advisory_fees: {
          blocks: [
            {
              x: 444, top: 387, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 521, anchor: 'end', lineGap: 11,
              lines: [
                { text: 'Investment', size: 38, weight: 800, color: BLACK },
                { text: 'advisory, fees &', size: 38, weight: 800, color: BLACK },
                { text: 'securities lending', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        performance_fees: {
          blocks: [
            {
              x: 444, top: 760, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+353% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 778, anchor: 'end', lineGap: 11,
              lines: [
                { text: 'Investment', size: 38, weight: 800, color: BLACK },
                { text: 'advisory', size: 38, weight: 800, color: BLACK },
                { text: 'performance fees', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        technology_services: {
          blocks: [
            {
              x: 444, top: 895, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 942, anchor: 'end', lineGap: 11,
              lines: [
                { text: 'Technology', size: 38, weight: 800, color: BLACK },
                { text: 'services', size: 38, weight: 800, color: BLACK },
              ],
            },
          ],
        },
        distribution_fees: {
          blocks: [
            {
              x: 444, top: 1041, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 1110, anchor: 'end',
              lines: [{ text: 'Distribution fees', size: 38, weight: 800, color: BLACK }],
            },
          ],
        },
        advisory_other: {
          blocks: [
            {
              x: 444, top: 1188, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 370, top: 1251, anchor: 'end',
              lines: [{ text: 'Advisory & other', size: 38, weight: 800, color: BLACK }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1066, top: 524, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLACK },
                { text: '$value', size: 38, weight: 400, color: BLACK },
                { text: '+27% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1689, top: 289, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '42% margin', size: 29, weight: 400, color: NOTE },
                { text: '+10pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1689, top: 1127, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2505, top: 287, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net income', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '35% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2505, top: 663, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        compensation_benefits: {
          blocks: [
            {
              x: 2506, top: 815, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Compensation &', size: 33, weight: 800, color: RED_LABEL },
                { text: 'benefits', size: 33, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sales_asset_account_expenses: {
          blocks: [
            {
              x: 2506, top: 1000, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales, asset &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'Account expenses', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        amortization_other: {
          blocks: [
            {
              x: 2506, top: 1161, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Amortization &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2506, top: 1314, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'G&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'investment_advisory_fees', col: 0, order: 0, type: 'source',
        label: ['Investment advisory,', 'fees & securities lending'],
        value: 5.4, notes: ['+24% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'performance_fees', col: 0, order: 1, type: 'source',
        label: ['Investment advisory', 'performance fees'],
        value: 0.3, notes: ['+353% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'technology_services', col: 0, order: 2, type: 'source',
        label: 'Technology services',
        value: 0.5, notes: ['+22% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'distribution_fees', col: 0, order: 3, type: 'source',
        label: 'Distribution fees',
        value: 0.4, notes: ['+21% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'advisory_other', col: 0, order: 4, type: 'source',
        label: 'Advisory & other',
        value: 0.1, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 6.7, notes: ['+27% Y/Y'], color: BLACK, labelColor: BLACK,
      },
      {
        id: 'cost_of_revenue', col: 4, order: 98, type: 'cost',
        label: '', value: 0, color: 'transparent', labelColor: 'transparent', linkTint: 'transparent',
      },
      {
        id: 'gross_profit', col: 4, order: 99, type: 'profit',
        label: '', value: 6.7, color: 'transparent', labelColor: 'transparent', linkTint: 'transparent',
      },
      {
        id: 'operating_profit', col: 2, order: 0, type: 'profit',
        label: 'Operating profit', value: 2.8, notes: ['42% margin', '+10pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 2, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 3.9,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 3, order: 0, type: 'profit',
        label: 'Net income', value: 2.3, notes: ['35% margin', '+6pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'other', col: 4, order: 97, type: 'profit',
        label: '', value: 0.028, valueText: '$28M', color: 'transparent', labelColor: 'transparent', linkTint: 'transparent',
      },
      {
        id: 'tax', col: 3, order: 1, type: 'cost',
        label: 'Tax', value: 0.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'compensation_benefits', col: 3, order: 2, type: 'cost',
        label: ['Compensation &', 'benefits'], value: 2.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sales_asset_account_expenses', col: 3, order: 3, type: 'cost',
        label: ['Sales, asset &', 'Account expenses'], value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization_other', col: 3, order: 4, type: 'cost',
        label: ['Amortization &', 'other'], value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 3, order: 5, type: 'cost',
        label: 'G&A', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'investment_advisory_fees', target: 'revenue', value: 5.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'performance_fees', target: 'revenue', value: 0.3, sourceOrder: 0, targetOrder: 1 },
      { source: 'technology_services', target: 'revenue', value: 0.5, sourceOrder: 0, targetOrder: 2 },
      { source: 'distribution_fees', target: 'revenue', value: 0.4, sourceOrder: 0, targetOrder: 3 },
      { source: 'advisory_other', target: 'revenue', value: 0.1, sourceOrder: 0, targetOrder: 4 },

      { source: 'revenue', target: 'operating_profit', value: 2.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 3.9, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 2.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.5, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_expenses', target: 'compensation_benefits', value: 2.2, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_asset_account_expenses', value: 1.3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization_other', value: 0.3, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.1, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'BlackRock · 2026 财年第一季度',
        meta: {
          title: 'BlackRock 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        nodes: {
          investment_advisory_fees: { label: '投资顾问、费用及证券借贷', notes: ['同比 +24%'] },
          performance_fees: { label: '投资顾问绩效费', notes: ['同比 +353%'] },
          technology_services: { label: '技术服务', notes: ['同比 +22%'] },
          distribution_fees: { label: '分销费用', notes: ['同比 +21%'] },
          advisory_other: { label: '顾问及其他', notes: ['同比 +19%'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 42%', '同比 +10 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          compensation_benefits: { label: '薪酬与福利' },
          sales_asset_account_expenses: { label: '销售、资产及账户费用' },
          amortization_other: { label: '摊销及其他' },
          ga: { label: '管理费用' },
        },
      },
    },
  });
})();
