/* ====================================================================
 * Datadog - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/datadog-q1-fy26.png as a fixed
 * d3-sankey layout with validated runtime raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155277';
  const PURPLE = '#6730ad';
  const PURPLE_LINK = '#b39ad0';
  const GREEN = '#28a229';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#a5d4a5';
  const RED = '#d90000';
  const RED_LABEL = '#971100';
  const RED_LINK = '#e38284';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2464;

  const kpiCards = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="101" y="1142" width="207" height="168" rx="34" fill="${PURPLE}"/>
      <text x="205" y="1217" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.dbnr}</text>
      <text x="205" y="1262" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">&gt;120%</text>

      <rect x="320" y="1142" width="518" height="168" rx="34" fill="${PURPLE}"/>
      <text x="579" y="1217" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${labels.customers}</tspan><tspan font-weight="500"> 33,200 ${labels.customerGrowth}</tspan>
      </text>
      <text x="579" y="1262" text-anchor="middle" font-size="30" fill="#ffffff">
        <tspan font-weight="800">${labels.largeCustomers}</tspan><tspan font-weight="500"> ${labels.largeCustomerGrowth}</tspan>
      </text>

      <text x="210" y="1348" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = kpiCards({
    dbnr: 'DBNR',
    customers: 'Customers',
    customerGrowth: '+9% Y/Y',
    largeCustomers: '&gt; $100K 4,550',
    largeCustomerGrowth: '+21% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = kpiCards({
    dbnr: 'DBNR',
    customers: '客户数',
    customerGrowth: '同比 +9%',
    largeCustomers: '&gt;$100K 客户 4,550',
    largeCustomerGrowth: '同比 +21%',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'datadog-q1-fy26',
    name: 'Datadog · Q1 FY26',
    company: 'Datadog',
    meta: {
      company: 'Datadog',
      title: 'Datadog Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/datadog-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2260,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
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
        hub: GREEN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/datadog/company-wordmark.png',
        x: 540,
        y: 285,
        width: 620,
        height: 170,
      },
    ],

    layout: {
      scale: 1,
      nodes: {
        north_america: { x: 385, y: 528, width: 73, height: 278 },
        international: { x: 385, y: 984, width: 73, height: 108 },
        revenue: { x: 852, y: 613, width: 73, height: 387 },
        gross_profit: { x: 1319, y: 530, width: 73, height: 306 },
        cost_of_revenue: { x: 1319, y: 1015, width: 73, height: 79 },
        operating_profit: { x: 1786, y: 458, width: 73, height: 3 },
        operating_expenses: { x: 1786, y: 634, width: 73, height: 303 },
        other: { x: 2135, y: 414, width: 71, height: 19 },
        net_profit: { x: 2254, y: 371, width: 72, height: 19 },
        tax: { x: 2254, y: 578, width: 72, height: 2 },
        rnd: { x: 2254, y: 671, width: 72, height: 167 },
        sm: { x: 2254, y: 952, width: 72, height: 106 },
        ga: { x: 2254, y: 1192, width: 72, height: 28 },
      },
      labels: {
        north_america: {
          blocks: [
            {
              x: 421, top: 436, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+36% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 220, top: 636, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'North', size: 40, weight: 800 },
                { text: 'America', size: 40, weight: 800 },
              ],
            },
          ],
        },
        international: {
          blocks: [
            {
              x: 421, top: 891, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+24% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 220, top: 1026, anchor: 'middle', lines: [{ text: 'International', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 889, top: 471, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+32% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1356, top: 349, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '79% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1356, top: 1124, anchor: 'middle', lineGap: 8,
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
              x: 1834, top: 275, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '1% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1823, top: 959, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2171, top: 453, anchor: 'middle', lineGap: 8,
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
              x: 2405, top: 342, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '5% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 553, anchor: 'middle', lineGap: 8,
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
              x: RIGHT_LABEL_X, top: 686, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '43% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 954, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1164, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '7% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'north_america', col: 0, order: 0, type: 'source',
        label: 'North America', value: 724, notes: ['+36% Y/Y'],
        color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK,
      },
      {
        id: 'international', col: 0, order: 1, type: 'source',
        label: 'International', value: 282, notes: ['+24% Y/Y'],
        color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1006, valueText: '$1,006M', notes: ['+32% Y/Y'],
        color: PURPLE, labelColor: PURPLE, linkTint: PURPLE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 797, notes: ['79% margin', '(0pp) Y/Y'],
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: 'Cost of revenue', value: 209,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 7, notes: ['1% margin', '+2pp Y/Y'],
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: 'Operating expenses', value: 790,
      },
      {
        id: 'other', col: 4, order: 0, type: 'profit',
        label: 'Other', value: 52,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 53, notes: ['5% margin', '+6pp Y/Y'],
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 6,
      },
      {
        id: 'rnd', col: 5, order: 2, type: 'cost',
        label: 'R&D', value: 435, notes: ['43% of revenue', '(2pp) Y/Y'],
      },
      {
        id: 'sm', col: 5, order: 3, type: 'cost',
        label: 'S&M', value: 280, notes: ['28% of revenue', '(0pp) Y/Y'],
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 75, notes: ['7% of revenue', '(1pp) Y/Y'],
      },
    ],

    links: [
      { source: 'north_america', target: 'revenue', value: 724, width: 278, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 282, width: 108, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 797, width: 306, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 209, width: 80, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 7, width: 3, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 790, width: 303, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 7, width: 3, y0: 459.5, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6, width: 2, y0: 459.5, y1: 579, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 52, width: 20, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 435, width: 167, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 280, width: 106, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 75, width: 28, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Datadog · 2026 财年第一季度',
        meta: {
          title: 'Datadog 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1900,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +36%'] },
          international: { label: '国际', notes: ['同比 +24%'] },
          revenue: { label: '收入', notes: ['同比 +32%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 79%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 5%', '同比 +6 个百分点'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 43%', '同比 (2 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 28%', '同比 (0 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 7%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            north_america: {
              blocks: [
                {
                  x: 421, top: 436, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +36%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 220, top: 674, anchor: 'middle', lines: [{ text: '北美', size: 40, weight: 800 }] },
              ],
            },
            international: {
              blocks: [
                {
                  x: 421, top: 891, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +24%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 220, top: 1026, anchor: 'middle', lines: [{ text: '国际', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 889, top: 471, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +32%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1356, top: 349, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 79%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1356, top: 1142, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 37, weight: 800 },
                    { text: '成本', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1834, top: 275, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 1%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1823, top: 976, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2171, top: 453, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2405, top: 342, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 5%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 553, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 686, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 43%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 954, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1164, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 7%', size: 29, weight: 400, color: NOTE },
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
