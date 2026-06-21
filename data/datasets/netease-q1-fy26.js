/* ====================================================================
 * NetEase - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/netease-q1-fy26.png as a fixed
 * d3-sankey layout with reference crops retained for future vectorization.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#707070';
  const BLACK = '#050505';
  const SOURCE_LINK = '#8f8f8f';
  const GREEN = '#28a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9aca99';
  const RED = '#d90000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e58384';
  const GRAY_LABEL = '#5a5a5a';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'netease-q1-fy26',
    name: 'NetEase · Q1 FY26',
    company: 'NetEase',
    meta: {
      company: 'NetEase',
      title: 'NetEase Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/netease-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2220,
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
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    layout: {
      scale: 81,
      nodes: {
        games: { x: 491, y: 485, width: 72, height: 300 },
        cloud_music: { x: 491, y: 901, width: 72, height: 24 },
        youdao: { x: 491, y: 1052, width: 72, height: 16 },
        innovative_businesses: { x: 491, y: 1193, width: 72, height: 16 },
        revenue: { x: 958, y: 648, width: 72, height: 358 },
        gross_profit: { x: 1425, y: 538, width: 72, height: 252 },
        cost_of_revenue: { x: 1425, y: 1015, width: 72, height: 108 },
        operating_profit: { x: 1890, y: 432, width: 72, height: 146 },
        operating_expenses: { x: 1890, y: 800, width: 72, height: 106 },
        other: { x: 2244, y: 503, width: 72, height: 8 },
        net_profit: { x: 2360, y: 335, width: 72, height: 126 },
        tax: { x: 2360, y: 676, width: 72, height: 28 },
        rnd: { x: 2360, y: 900, width: 72, height: 57 },
        sm: { x: 2360, y: 1107, width: 72, height: 40 },
        ga: { x: 2360, y: 1273, width: 72, height: 8 },
      },
      labels: {
        games: {
          blocks: [
            {
              x: 473, top: 388, anchor: 'start', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 147, top: 714, anchor: 'start',
              lines: [{ text: '75% gross margin', size: 29, weight: 400, color: NOTE }],
            },
          ],
        },
        cloud_music: {
          blocks: [
            {
              x: 473, top: 802, anchor: 'start', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 147, top: 917, anchor: 'start',
              lines: [{ text: '37% gross margin', size: 29, weight: 400, color: NOTE }],
            },
          ],
        },
        youdao: {
          blocks: [
            {
              x: 473, top: 958, anchor: 'start', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 147, top: 1073, anchor: 'start',
              lines: [{ text: '45% gross margin', size: 29, weight: 400, color: NOTE }],
            },
          ],
        },
        innovative_businesses: {
          blocks: [
            {
              x: 473, top: 1106, anchor: 'start', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(5%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 222, top: 1138, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Innovative', size: 40, weight: 800, color: GRAY_LABEL },
                { text: 'Businesses', size: 40, weight: 800, color: GRAY_LABEL },
                { text: '& Others', size: 40, weight: 800, color: GRAY_LABEL },
              ],
            },
            {
              x: 147, top: 1304, anchor: 'start',
              lines: [{ text: '42% gross margin', size: 29, weight: 400, color: NOTE }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 994, top: 511, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1461, top: 353, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
                { text: '69% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1461, top: 1139, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1926, top: 247, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '41% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1928, top: 916, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2280, top: 528, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2534, top: 330, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '35% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2526, top: 655, anchor: 'middle', lineGap: 8,
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
              x: 2524, top: 875, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2524, top: 1057, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2524, top: 1239, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '2% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'games', col: 0, order: 0, type: 'source',
        label: 'Games and related value-added services', value: 3.7, notes: ['+7% Y/Y', '75% gross margin'],
        color: BLACK, labelColor: BLACK, linkTint: SOURCE_LINK,
      },
      {
        id: 'cloud_music', col: 0, order: 1, type: 'source',
        label: 'Cloud Music', value: 0.3, notes: ['+7% Y/Y', '37% gross margin'],
        color: BLACK, labelColor: GRAY_LABEL, linkTint: SOURCE_LINK,
      },
      {
        id: 'youdao', col: 0, order: 2, type: 'source',
        label: 'Youdao', value: 0.2, notes: ['+4% Y/Y', '45% gross margin'],
        color: BLACK, labelColor: GRAY_LABEL, linkTint: SOURCE_LINK,
      },
      {
        id: 'innovative_businesses', col: 0, order: 3, type: 'source',
        label: ['Innovative', 'Businesses', '& Others'], value: 0.2, notes: ['(5%) Y/Y', '42% gross margin'],
        color: BLACK, labelColor: GRAY_LABEL, linkTint: SOURCE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 4.4, notes: ['+6% Y/Y'],
        color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 3.1, notes: ['69% margin', '+5pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 1.4,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 1.8, notes: ['41% margin', '+5pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 1.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 4, order: 0, type: 'profit',
        label: 'Other', value: 0.1,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 1.6, notes: ['35% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 0.4,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 2, type: 'cost',
        label: 'R&D', value: 0.7, notes: ['15% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 3, type: 'cost',
        label: 'S&M', value: 0.5, notes: ['11% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'games', target: 'revenue', value: 3.7, width: 300, targetOrder: 0 },
      { source: 'cloud_music', target: 'revenue', value: 0.3, width: 24, targetOrder: 1 },
      { source: 'youdao', target: 'revenue', value: 0.2, width: 16, targetOrder: 2 },
      { source: 'innovative_businesses', target: 'revenue', value: 0.2, width: 16, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 3.1, width: 250, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.4, width: 108, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 1.8, width: 146, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.2, width: 106, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.5, width: 118, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.4, width: 28, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.1, width: 8, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 0.7, width: 57, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 0.5, width: 40, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.1, width: 9, sourceOrder: 2 },
    ],
    i18n: {
      zh: {
        name: 'NetEase · 2026 财年第一季度',
        meta: {
          title: 'NetEase 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        nodes: {
          games: { label: '游戏及相关增值服务', notes: ['同比 +7%', '毛利率 75%'] },
          cloud_music: { label: '云音乐', notes: ['同比 +7%', '毛利率 37%'] },
          youdao: { label: '有道', notes: ['同比 +4%', '毛利率 45%'] },
          innovative_businesses: { label: '创新业务及其他', notes: ['同比 (5%)', '毛利率 42%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 69%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 41%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 11%', '同比 +2 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            innovative_businesses: {
              blocks: [
                {
                  x: 473, top: 1106, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (5%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 222, top: 1162, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '创新业务', size: 40, weight: 800, color: GRAY_LABEL },
                    { text: '及其他', size: 40, weight: 800, color: GRAY_LABEL },
                  ],
                },
                {
                  x: 147, top: 1304, anchor: 'start',
                  lines: [{ text: '毛利率 42%', size: 29, weight: 400, color: NOTE }],
                },
              ],
            },
          },
        },
      },
    },
  });
})();
