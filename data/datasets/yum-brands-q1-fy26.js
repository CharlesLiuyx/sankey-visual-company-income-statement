/* ====================================================================
 * Yum! Brands - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/yum-brands-q1-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Yum! Brands annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLACK = '#050505';
  const GRAY_LINK = '#8f8f8f';
  const KFC = '#68c4e4';
  const KFC_LINK = '#b7ddea';
  const TACO = '#10b7ad';
  const TACO_LINK = '#80d4cf';
  const PIZZA = '#ffc400';
  const PIZZA_LINK = '#f4df86';
  const HABIT = '#006a78';
  const HABIT_LINK = '#8ab4bb';
  const GREEN = '#26a226';
  const GREEN_LABEL = '#078f47';
  const GREEN_LINK = '#99cf98';
  const RED = '#d60000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e48283';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('yumCompanySpeechBubble', 610, 229, 0.91)}
      ${icon('yumKfcLogo', 125, 444, 0.96)}
      ${icon('yumTacoBellLogo', 136, 684, 0.91)}
      ${icon('yumPizzaHutLogo', 148, 955, 0.87)}
      ${icon('yumHabitLogo', 141, 1138, 0.78)}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'yum-brands-q1-fy26',
    name: 'Yum! Brands · Q1 FY26',
    company: 'Yum! Brands',
    meta: {
      company: 'Yum! Brands',
      title: 'Yum! Brands Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/yum-brands-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 196,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2440,
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
        source: { node: KFC, label: KFC },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: KFC_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 155,
      nodes: {
        kfc: { x: 397, y: 511, width: 73, height: 140 },
        taco_bell: { x: 397, y: 786, width: 73, height: 124 },
        pizza_hut: { x: 397, y: 1047, width: 73, height: 47 },
        habit: { x: 397, y: 1236, width: 73, height: 16 },
        revenue: { x: 773, y: 730, width: 72, height: 326 },
        company_sales: { x: 1147, y: 523, width: 71, height: 123 },
        franchise_property: { x: 1147, y: 896, width: 71, height: 134 },
        franchise_contributions: { x: 1147, y: 1260, width: 71, height: 65 },
        reported_revenue: { x: 1521, y: 742, width: 71, height: 327 },
        other_income: { x: 1687, y: 611, width: 73, height: 7 },
        operating_profit: { x: 1895, y: 633, width: 71, height: 100 },
        operating_expenses: { x: 1894, y: 928, width: 72, height: 231 },
        net_profit: { x: 2268, y: 525, width: 72, height: 68 },
        other: { x: 2268, y: 727, width: 72, height: 19 },
        tax: { x: 2268, y: 833, width: 72, height: 13 },
        company_restaurants: { x: 2268, y: 959, width: 72, height: 107 },
        franchise_expenses: { x: 2268, y: 1151, width: 72, height: 72 },
        ga: { x: 2268, y: 1317, width: 72, height: 52 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
      },
      labels: {
        kfc: {
          blocks: [
            {
              x: 435, top: 418, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: KFC },
                { text: '+14% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        taco_bell: {
          blocks: [
            {
              x: 435, top: 692, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: TACO },
                { text: '+21% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        pizza_hut: {
          blocks: [
            {
              x: 435, top: 963, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: PIZZA },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        habit: {
          blocks: [
            {
              x: 435, top: 1154, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: HABIT },
                { text: '+2% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 808, top: 577, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        company_sales: {
          blocks: [
            {
              x: 1184, top: 370, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Company sales', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        franchise_property: {
          blocks: [
            {
              x: 1184, top: 697, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Franchise', size: 39, weight: 800 },
                { text: '& property', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        franchise_contributions: {
          blocks: [
            {
              x: 1184, top: 1054, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Franchise', size: 39, weight: 800 },
                { text: 'contributions', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        reported_revenue: {
          blocks: [
            {
              x: 1557, top: 555, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 1725, top: 507, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1927, top: 447, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '31% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1930, top: 1155, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 37, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 37, weight: 800, color: RED_LABEL },
                { text: '$value', size: 36, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2448, top: 488, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '21% margin', size: 28, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2479, top: 724, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2479, top: 829, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        company_restaurants: {
          blocks: [
            {
              x: 2479, top: 965, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Company', size: 31, weight: 800, color: RED_LABEL },
                { text: 'restaurants', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        franchise_expenses: {
          blocks: [
            {
              x: 2479, top: 1146, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Franchise', size: 31, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2479, top: 1324, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        cost_of_revenue: { blocks: [] },
        gross_profit: { blocks: [] },
      },
    },

    nodes: [
      { id: 'kfc', col: 0, order: 0, type: 'source', label: 'KFC', value: 0.9, color: KFC, labelColor: KFC, linkTint: KFC_LINK },
      { id: 'taco_bell', col: 0, order: 1, type: 'source', label: 'Taco Bell', value: 0.8, color: TACO, labelColor: TACO, linkTint: TACO_LINK },
      { id: 'pizza_hut', col: 0, order: 2, type: 'source', label: 'Pizza Hut', value: 0.3, color: PIZZA, labelColor: PIZZA, linkTint: PIZZA_LINK },
      { id: 'habit', col: 0, order: 3, type: 'source', label: 'The Habit Burger Grill', value: 0.1, color: HABIT, labelColor: HABIT, linkTint: HABIT_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.1, notes: ['+15% Y/Y'] },
      { id: 'company_sales', col: 2, order: 0, type: 'hub', label: 'Company sales', value: 0.8, notes: ['+29% Y/Y'] },
      { id: 'franchise_property', col: 2, order: 1, type: 'hub', label: ['Franchise', '& property'], value: 0.9, notes: ['+9% Y/Y'] },
      { id: 'franchise_contributions', col: 2, order: 2, type: 'hub', label: ['Franchise', 'contributions'], value: 0.4, notes: ['+6% Y/Y'] },
      { id: 'reported_revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 2.1, notes: ['+15% Y/Y'] },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.046, valueText: '$46M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 5, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['31% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.5, valueText: '($1.5B)' },
      { id: 'net_profit', col: 6, order: 0, type: 'profit', label: 'Net profit', value: 0.4, notes: ['21% margin', '+7pp Y/Y'] },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)' },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.1, valueText: '($0.1B)' },
      { id: 'company_restaurants', col: 6, order: 3, type: 'cost', label: ['Company', 'restaurants'], value: 0.7, valueText: '($0.7B)' },
      { id: 'franchise_expenses', col: 6, order: 4, type: 'cost', label: ['Franchise', 'expenses'], value: 0.4, valueText: '($0.4B)' },
      { id: 'ga', col: 6, order: 5, type: 'cost', label: 'G&A', value: 0.3, valueText: '($0.3B)' },
      { id: 'cost_of_revenue', col: 7, order: 0, type: 'cost', label: 'Cost of revenue', value: 0, valueText: '($0.0B)' },
      { id: 'gross_profit', col: 7, order: 1, type: 'profit', label: 'Gross profit', value: 2.1 },
    ],

    links: [
      { source: 'kfc', target: 'revenue', value: 0.9, width: 140, targetOrder: 0, linkTint: { left: KFC_LINK, right: KFC_LINK } },
      { source: 'taco_bell', target: 'revenue', value: 0.8, width: 124, targetOrder: 1, linkTint: { left: TACO_LINK, right: TACO_LINK } },
      { source: 'pizza_hut', target: 'revenue', value: 0.3, width: 46, targetOrder: 2, linkTint: { left: PIZZA_LINK, right: PIZZA_LINK } },
      { source: 'habit', target: 'revenue', value: 0.1, width: 16, targetOrder: 3, linkTint: { left: HABIT_LINK, right: HABIT_LINK } },
      { source: 'revenue', target: 'company_sales', value: 0.8, width: 123, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'franchise_property', value: 0.9, width: 134, sourceOrder: 1, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'revenue', target: 'franchise_contributions', value: 0.4, width: 65, sourceOrder: 2, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'company_sales', target: 'reported_revenue', value: 0.8, width: 123, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'franchise_property', target: 'reported_revenue', value: 0.9, width: 134, sourceOrder: 0, targetOrder: 1, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'franchise_contributions', target: 'reported_revenue', value: 0.4, width: 65, sourceOrder: 0, targetOrder: 2, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'reported_revenue', target: 'operating_profit', value: 0.554, width: 93, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'reported_revenue', target: 'operating_expenses', value: 1.5, width: 231, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'other_income', target: 'operating_profit', value: 0.046, width: 7, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 0.4, width: 68, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'other', value: 0.1, width: 19, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.1, width: 13, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'company_restaurants', value: 0.7, width: 107, sourceOrder: 0, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'franchise_expenses', value: 0.4, width: 72, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 52, sourceOrder: 2, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Yum! Brands · 2026 财年第一季度',
        meta: {
          title: 'Yum! Brands 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        nodes: {
          kfc: { label: 'KFC' },
          taco_bell: { label: '塔可钟' },
          pizza_hut: { label: '必胜客' },
          habit: { label: 'Habit 汉堡烤吧' },
          revenue: { label: '收入', notes: ['同比 +15%'] },
          company_sales: { label: '公司销售额', notes: ['同比 +29%'] },
          franchise_property: { label: '特许经营及物业', notes: ['同比 +9%'] },
          franchise_contributions: { label: '特许经营贡献', notes: ['同比 +6%'] },
          reported_revenue: { label: '收入', notes: ['同比 +15%'] },
          other_income: { label: '其他' },
          operating_profit: { label: '营业利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 21%', '同比 +7 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          company_restaurants: { label: '公司自营餐厅' },
          franchise_expenses: { label: '特许经营费用' },
          ga: { label: '管理费用' },
          cost_of_revenue: { label: '收入成本' },
          gross_profit: { label: '毛利润' },
        },
        layout: {
          labels: {
            company_sales: {
              blocks: [
                {
                  x: 1184, top: 370, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '公司销售额', size: 39, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +29%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            franchise_property: {
              blocks: [
                {
                  x: 1184, top: 697, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '特许经营及', size: 39, weight: 800 },
                    { text: '物业', size: 39, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +9%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            franchise_contributions: {
              blocks: [
                {
                  x: 1184, top: 1054, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '特许经营', size: 39, weight: 800 },
                    { text: '贡献', size: 39, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +6%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            company_restaurants: {
              blocks: [
                {
                  x: 2479, top: 965, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '公司自营', size: 31, weight: 800, color: RED_LABEL },
                    { text: '餐厅', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 30, weight: 400, color: RED_LABEL },
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
