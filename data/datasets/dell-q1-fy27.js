/* ====================================================================
 * Dell - Q1 FY27 income statement ($B)
 * Reconstructed from input/processed/dell-q1-fy27.png as a fixed
 * d3-sankey layout with a reusable SVG Dell logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const BLUE = '#007cbd';
  const BLUE_LABEL = '#007abd';
  const BLUE_LINK = '#83bbd8';
  const GREEN = '#23a323';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bd49d';
  const RED = '#d70000';
  const RED_LABEL = '#961100';
  const RED_LINK = '#e68383';
  const NOTE = '#6f6f6f';
  const RIGHT_LABEL_X = 2438;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'dell-q1-fy27',
    name: 'Dell - Q1 FY27',
    company: 'Dell',
    meta: {
      company: 'Dell',
      title: 'DELL Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/dell-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2055,
      periodX: 2265,
      periodY: 1268,
      periodNoteY: 1312,
      logoWidth: 936,
      logoHeight: 205,
      logoY: 235,
      logoViewBox: '0 0 936 205',
      logoSvg: BUSINESS_ICONS.dellLogo || '',
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
      type: { name: 39, value: 39, note: 28, lineGap: 9 },
    },

    layout: {
      scale: 8.58,
      nodes: {
        ai_optimized_servers: { x: 459, y: 436, width: 72, height: 138 },
        traditional_servers_networking: { x: 459, y: 703, width: 72, height: 73 },
        storage: { x: 459, y: 890, width: 72, height: 36 },
        isg: { x: 833, y: 601, width: 72, height: 249 },
        commercial: { x: 459, y: 1045, width: 72, height: 112 },
        consumer: { x: 459, y: 1291, width: 72, height: 14 },
        csg: { x: 833, y: 1077, width: 72, height: 125 },
        other_revenue: { x: 833, y: 1413, width: 72, height: 2 },
        revenue: { x: 1207, y: 719, width: 72, height: 376 },
        gross_profit: { x: 1583, y: 596, width: 72, height: 67 },
        cost_of_revenue: { x: 1580, y: 855, width: 72, height: 309 },
        operating_profit: { x: 1954, y: 510, width: 72, height: 31 },
        operating_expenses: { x: 1954, y: 750, width: 73, height: 35 },
        other: { x: 2192, y: 488, width: 72, height: 3 },
        net_profit: { x: 2328, y: 391, width: 72, height: 29 },
        tax: { x: 2327, y: 624, width: 73, height: 4 },
        sga: { x: 2327, y: 879, width: 73, height: 26 },
        rnd: { x: 2327, y: 1102, width: 73, height: 8 },
      },
      labels: {
        ai_optimized_servers: {
          blocks: [
            {
              x: 496, top: 336, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+757% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 443, top: 488, anchor: 'end',
              lines: [{ text: 'AI-optimized Servers', size: 38, weight: 800 }],
            },
          ],
        },
        traditional_servers_networking: {
          blocks: [
            {
              x: 496, top: 612, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+92% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 424, top: 700, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Traditional Servers', size: 38, weight: 800 },
                { text: '& Networking', size: 38, weight: 800 },
              ],
            },
          ],
        },
        storage: {
          blocks: [
            {
              x: 496, top: 803, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 424, top: 885, anchor: 'end',
              lines: [{ text: 'Storage', size: 38, weight: 800 }],
            },
          ],
        },
        commercial: {
          blocks: [
            {
              x: 496, top: 963, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 424, top: 1090, anchor: 'end',
              lines: [{ text: 'Commercial', size: 38, weight: 800 }],
            },
          ],
        },
        consumer: {
          blocks: [
            {
              x: 496, top: 1207, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 424, top: 1279, anchor: 'end',
              lines: [{ text: 'Consumer', size: 38, weight: 800 }],
            },
          ],
        },
        isg: {
          blocks: [
            {
              x: 870, top: 458, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'ISG (Infrastructure)', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+181% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        csg: {
          blocks: [
            {
              x: 870, top: 938, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'CSG (Client)', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 870, top: 1275, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(59%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1243, top: 576, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+88% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1619, top: 430, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '18% margin', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1616, top: 1192, anchor: 'middle', lineGap: 10,
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
              x: 1990, top: 326, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '8% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1990, top: 808, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2228, top: 494, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2466, top: 344, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '8% margin', size: 28, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2466, top: 592, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Tax', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 879, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'SG&A ($3.1B)', size: 32, weight: 800 },
                { text: '7% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(6pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1102, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'R&D ($1.0B)', size: 32, weight: 800 },
                { text: '2% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'ai_optimized_servers', col: 0, order: 0, type: 'source',
        label: 'AI-optimized Servers', value: 16.132, notes: ['+757% Y/Y'] },
      { id: 'traditional_servers_networking', col: 0, order: 1, type: 'source',
        label: ['Traditional Servers', '& Networking'], value: 8.543, notes: ['+92% Y/Y'] },
      { id: 'storage', col: 0, order: 2, type: 'source',
        label: 'Storage', value: 4.334, notes: ['+8% Y/Y'] },
      { id: 'isg', col: 1, order: 0, type: 'source',
        label: 'ISG (Infrastructure)', value: 29.009, notes: ['+181% Y/Y'] },
      { id: 'commercial', col: 0, order: 3, type: 'source',
        label: 'Commercial', value: 13.02, notes: ['+18% Y/Y'] },
      { id: 'consumer', col: 0, order: 4, type: 'source',
        label: 'Consumer', value: 1.589, notes: ['+9% Y/Y'] },
      { id: 'csg', col: 1, order: 1, type: 'source',
        label: 'CSG (Client)', value: 14.609, notes: ['+17% Y/Y'] },
      { id: 'other_revenue', col: 1, order: 2, type: 'source',
        label: 'Other', value: 0.224, notes: ['(59%) Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 43.842, notes: ['+88% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 7.782, notes: ['18% margin', '(3pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 36.06 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 3.656, notes: ['8% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 4.126 },
      { id: 'other', col: 5, order: 0, type: 'profit',
        label: 'Other', value: 0.292 },
      { id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 3.438, notes: ['8% margin', '+4pp Y/Y'] },
      { id: 'tax', col: 6, order: 1, type: 'cost',
        label: 'Tax', value: 0.51 },
      { id: 'sga', col: 6, order: 2, type: 'cost',
        label: 'SG&A', value: 3.143, notes: ['7% of revenue', '(6pp) Y/Y'] },
      { id: 'rnd', col: 6, order: 3, type: 'cost',
        label: 'R&D', value: 0.983, notes: ['2% of revenue', '(1pp) Y/Y'] },
    ],

    links: [
      { source: 'ai_optimized_servers', target: 'isg', value: 16.132, width: 138 },
      { source: 'traditional_servers_networking', target: 'isg', value: 8.543, width: 73 },
      { source: 'storage', target: 'isg', value: 4.334, width: 36 },
      { source: 'isg', target: 'revenue', value: 29.009, width: 249, targetOrder: 0 },
      { source: 'commercial', target: 'csg', value: 13.02, width: 112 },
      { source: 'consumer', target: 'csg', value: 1.589, width: 14 },
      { source: 'csg', target: 'revenue', value: 14.609, width: 125, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 0.224, width: 2, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 7.782, width: 67 },
      { source: 'revenue', target: 'cost_of_revenue', value: 36.06, width: 309 },

      { source: 'gross_profit', target: 'operating_profit', value: 3.656, width: 31 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.126, width: 35 },

      { source: 'operating_profit', target: 'net_profit', value: 3.146, width: 27, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.51, width: 4 },
      { source: 'other', target: 'net_profit', value: 0.292, width: 3, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sga', value: 3.143, width: 27 },
      { source: 'operating_expenses', target: 'rnd', value: 0.983, width: 8 },
    ],

    i18n: {
      zh: {
        name: 'Dell · 2027 财年第一季度',
        meta: {
          title: 'DELL 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 5 月',
        },
        nodes: {
          ai_optimized_servers: { label: 'AI 优化服务器', notes: ['同比 +757%'] },
          traditional_servers_networking: { label: '传统服务器与网络', notes: ['同比 +92%'] },
          storage: { label: '存储', notes: ['同比 +8%'] },
          isg: { label: 'ISG（基础设施）', notes: ['同比 +181%'] },
          commercial: { label: '商业', notes: ['同比 +18%'] },
          consumer: { label: '消费者', notes: ['同比 +9%'] },
          csg: { label: 'CSG（客户端）', notes: ['同比 +17%'] },
          other_revenue: { label: '其他', notes: ['同比 (59%)'] },
          revenue: { label: '收入', notes: ['同比 +88%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 18%', '同比 (3 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 +4 个百分点'] },
          tax: { label: '税费' },
          sga: { label: '销售、一般及行政', notes: ['占收入 7%', '同比 (6 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            traditional_servers_networking: {
              blocks: [
                {
                  x: 496, top: 612, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +92%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 424, top: 700, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '传统服务器', size: 38, weight: 800 },
                    { text: '与网络', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2418, top: 863, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售、一般及行政', size: 30, weight: 800 },
                    { text: '($3.1B)', size: 30, weight: 800 },
                    { text: '占收入 7%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (6 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1102, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '研发 ($1.0B)', size: 32, weight: 800 },
                    { text: '占收入 2%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
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
