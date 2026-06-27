/* ====================================================================
 * Coinbase - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/coinbase-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const BLUE = '#0052fe';
  const BLUE_LINK = '#7ea0ea';
  const RED = '#d50000';
  const RED_LABEL = '#941506';
  const RED_LINK = '#df7f80';
  const NOTE = '#6f7073';
  const TITLE = '#155478';
  const RIGHT_LABEL_X = 2440;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'coinbase-q1-fy26',
    name: 'Coinbase - Q1 FY26',
    company: 'Coinbase',
    meta: {
      company: 'Coinbase',
      title: 'Coinbase Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/coinbase-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 178,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2290,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 253,
      logoHeight: 242,
      logoY: 200,
      logoViewBox: '0 0 253 242',
      logoSvg: BUSINESS_ICONS.coinbaseLogo || '',
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
        profit: { node: BLUE, label: BLUE },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: RED_LINK,
        profit: BLUE_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },

    layout: {
      scale: 0.227,
      nodes: {
        consumer: { x: 372, y: 362, width: 72, height: 128 },
        institutions: { x: 372, y: 604, width: 72, height: 30 },
        other_transaction: { x: 372, y: 732, width: 72, height: 12 },
        stablecoin: { x: 372, y: 867, width: 72, height: 68 },
        blockchain_rewards: { x: 372, y: 1047, width: 72, height: 22 },
        interest_finance_fee_income: { x: 372, y: 1177, width: 72, height: 15 },
        other_subscription: { x: 372, y: 1308, width: 72, height: 24 },
        transaction_based: { x: 840, y: 470, width: 71, height: 171 },
        subscription_services: { x: 840, y: 912, width: 71, height: 132 },
        other_revenue: { x: 840, y: 1296, width: 71, height: 15 },
        revenue: { x: 1306, y: 598, width: 72, height: 321 },
        operating_loss: { x: 1497, y: 1010, width: 72, height: 4 },
        operating_expenses: { x: 1774, y: 611, width: 71, height: 326 },
        technology: { x: 2241, y: 382, width: 72, height: 119 },
        ga: { x: 2241, y: 642, width: 72, height: 84 },
        sm: { x: 2241, y: 867, width: 72, height: 60 },
        transaction_costs: { x: 2241, y: 1076, width: 72, height: 43 },
        other_costs: { x: 2241, y: 1275, width: 72, height: 15 },
      },
      labels: {
        consumer: {
          blocks: [
            {
              x: 408, top: 270, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(48%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 420, anchor: 'end',
              lines: [{ text: 'Consumer', size: 40, weight: 800 }],
            },
          ],
        },
        institutions: {
          blocks: [
            {
              x: 408, top: 512, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+38% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 602, anchor: 'end',
              lines: [{ text: 'Institutions', size: 40, weight: 800 }],
            },
          ],
        },
        other_transaction: {
          blocks: [
            {
              x: 408, top: 645, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(22%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 718, anchor: 'end',
              lines: [{ text: 'Other', size: 40, weight: 800 }],
            },
          ],
        },
        stablecoin: {
          blocks: [
            {
              x: 408, top: 765, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 884, anchor: 'end',
              lines: [{ text: 'Stablecoin', size: 40, weight: 800 }],
            },
          ],
        },
        blockchain_rewards: {
          blocks: [
            {
              x: 408, top: 975, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(49%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 1013, anchor: 'end', lineGap: 5,
              lines: [
                { text: 'Blockchain', size: 40, weight: 800 },
                { text: 'rewards', size: 40, weight: 800 },
              ],
            },
          ],
        },
        interest_finance_fee_income: {
          blocks: [
            {
              x: 408, top: 1090, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 1128, anchor: 'end', lineGap: 5,
              lines: [
                { text: 'Interest', size: 40, weight: 800 },
                { text: '& finance fee', size: 40, weight: 800 },
                { text: 'income', size: 40, weight: 800 },
              ],
            },
          ],
        },
        other_subscription: {
          blocks: [
            {
              x: 408, top: 1216, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(23%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 310, top: 1302, anchor: 'end',
              lines: [{ text: 'Other sub', size: 40, weight: 800 }],
            },
          ],
        },
        transaction_based: {
          blocks: [
            {
              x: 876, top: 318, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Transaction-based', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(40%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription_services: {
          blocks: [
            {
              x: 876, top: 715, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '& Services', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(14%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 876, top: 1148, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(25%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1342, top: 448, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 42, weight: 800 },
                { text: '$value', size: 41, weight: 400 },
                { text: '(31%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1533, top: 1032, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'loss', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '(2%) margin', size: 28, weight: 400, color: NOTE },
                { text: '(36pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1810, top: 452, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        technology: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 393, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Technology', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '37% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+20pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 648, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '27% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 852, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '19% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+7pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        transaction_costs: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1056, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Transaction', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_costs: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1246, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Other costs', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'consumer', label: 'Consumer', value: 567, notes: ['(48%) Y/Y'], type: 'source', col: 0, order: 0 },
      { id: 'institutions', label: 'Institutions', value: 136, notes: ['+38% Y/Y'], type: 'source', col: 0, order: 1 },
      { id: 'other_transaction', label: 'Other', value: 53, notes: ['(22%) Y/Y'], type: 'source', col: 0, order: 2 },
      { id: 'stablecoin', label: 'Stablecoin', value: 305, notes: ['+11% Y/Y'], type: 'source', col: 0, order: 3 },
      { id: 'blockchain_rewards', label: ['Blockchain', 'rewards'], value: 101, notes: ['(49%) Y/Y'], type: 'source', col: 0, order: 4 },
      { id: 'interest_finance_fee_income', label: ['Interest', '& finance fee', 'income'], value: 68, notes: ['+8% Y/Y'], type: 'source', col: 0, order: 5 },
      { id: 'other_subscription', label: 'Other sub', value: 109, notes: ['(23%) Y/Y'], type: 'source', col: 0, order: 6 },
      { id: 'transaction_based', label: 'Transaction-based', value: 756, notes: ['(40%) Y/Y'], type: 'source', col: 1, order: 0 },
      { id: 'subscription_services', label: ['Subscription', '& Services'], value: 584, notes: ['(14%) Y/Y'], type: 'source', col: 1, order: 1 },
      { id: 'other_revenue', label: 'Other', value: 74, notes: ['(25%) Y/Y'], type: 'source', col: 1, order: 2 },
      { id: 'revenue', label: 'Revenue', value: 1413, valueText: '$1,413M', notes: ['(31%) Y/Y'], type: 'hub', col: 2, order: 0 },
      { id: 'operating_loss', label: ['Operating', 'loss'], value: -21, notes: ['(2%) margin', '(36pp) Y/Y'], type: 'cost', col: 3, order: 1 },
      { id: 'operating_expenses', label: ['Operating', 'expenses'], value: 1434, valueText: '($1,434M)', type: 'cost', col: 4, order: 0 },
      { id: 'technology', label: 'Technology', value: 526, notes: ['37% of revenue', '+20pp Y/Y'], type: 'cost', col: 5, order: 0 },
      { id: 'ga', label: 'G&A', value: 376, notes: ['27% of revenue', '+7pp Y/Y'], type: 'cost', col: 5, order: 1 },
      { id: 'sm', label: 'S&M', value: 267, notes: ['19% of revenue', '+7pp Y/Y'], type: 'cost', col: 5, order: 2 },
      { id: 'transaction_costs', label: 'Transaction', value: 196, notes: ['14% of revenue', '(1pp) Y/Y'], type: 'cost', col: 5, order: 3 },
      { id: 'other_costs', label: 'Other costs', value: 70, type: 'cost', col: 5, order: 4 },
    ],

    links: [
      { source: 'consumer', target: 'transaction_based', value: 567, width: 128, sourceOrder: 0, targetOrder: 0 },
      { source: 'institutions', target: 'transaction_based', value: 136, width: 30, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_transaction', target: 'transaction_based', value: 53, width: 12, sourceOrder: 0, targetOrder: 2 },
      { source: 'transaction_based', target: 'revenue', value: 756, width: 171, sourceOrder: 0, targetOrder: 0 },

      { source: 'stablecoin', target: 'subscription_services', value: 305, width: 68, sourceOrder: 0, targetOrder: 0 },
      { source: 'blockchain_rewards', target: 'subscription_services', value: 101, width: 23, sourceOrder: 0, targetOrder: 1 },
      { source: 'interest_finance_fee_income', target: 'subscription_services', value: 68, width: 15, sourceOrder: 0, targetOrder: 2 },
      { source: 'other_subscription', target: 'subscription_services', value: 109, width: 25, sourceOrder: 0, targetOrder: 3 },
      { source: 'subscription_services', target: 'revenue', value: 584, width: 132, sourceOrder: 0, targetOrder: 1 },
      { source: 'other_revenue', target: 'revenue', value: 74, width: 16, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'operating_expenses', value: 1413, width: 321, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 21, width: 5, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'technology', value: 526, width: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 376, width: 84, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 267, width: 60, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'transaction_costs', value: 196, width: 43, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_costs', value: 70, width: 16, sourceOrder: 4, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Coinbase · 2026 财年第一季度',
        meta: {
          title: 'Coinbase 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1820,
        },
        nodes: {
          consumer: { label: '消费者', notes: ['同比 (48%)'] },
          institutions: { label: '机构', notes: ['同比 +38%'] },
          other_transaction: { label: '其他', notes: ['同比 (22%)'] },
          stablecoin: { label: '稳定币', notes: ['同比 +11%'] },
          blockchain_rewards: { label: '区块链奖励', notes: ['同比 (49%)'] },
          interest_finance_fee_income: { label: '利息和金融手续费收入', notes: ['同比 +8%'] },
          other_subscription: { label: '其他订阅', notes: ['同比 (23%)'] },
          transaction_based: { label: '交易收入', notes: ['同比 (40%)'] },
          subscription_services: { label: '订阅与服务', notes: ['同比 (14%)'] },
          other_revenue: { label: '其他', notes: ['同比 (25%)'] },
          revenue: { label: '收入', notes: ['同比 (31%)'] },
          operating_loss: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (36 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          technology: { label: '技术', notes: ['占收入 37%', '同比 +20 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 27%', '同比 +7 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 19%', '同比 +7 个百分点'] },
          transaction_costs: { label: '交易', notes: ['占收入 14%', '同比 (1 个百分点)'] },
          other_costs: { label: '其他成本' },
        },
        layout: {
          labels: {
            consumer: {
              blocks: [
                {
                  x: 408, top: 270, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (48%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 420, anchor: 'end',
                  lines: [{ text: '消费者', size: 40, weight: 800 }],
                },
              ],
            },
            institutions: {
              blocks: [
                {
                  x: 408, top: 512, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +38%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 602, anchor: 'end',
                  lines: [{ text: '机构', size: 40, weight: 800 }],
                },
              ],
            },
            other_transaction: {
              blocks: [
                {
                  x: 408, top: 645, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (22%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 718, anchor: 'end',
                  lines: [{ text: '其他', size: 40, weight: 800 }],
                },
              ],
            },
            stablecoin: {
              blocks: [
                {
                  x: 408, top: 765, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +11%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 884, anchor: 'end',
                  lines: [{ text: '稳定币', size: 40, weight: 800 }],
                },
              ],
            },
            blockchain_rewards: {
              blocks: [
                {
                  x: 408, top: 975, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (49%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 1034, anchor: 'end',
                  lines: [{ text: '区块链奖励', size: 40, weight: 800 }],
                },
              ],
            },
            interest_finance_fee_income: {
              blocks: [
                {
                  x: 408, top: 1090, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 1138, anchor: 'end', lineGap: 5,
                  lines: [
                    { text: '利息和', size: 40, weight: 800 },
                    { text: '金融手续费', size: 40, weight: 800 },
                    { text: '收入', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            other_subscription: {
              blocks: [
                {
                  x: 408, top: 1216, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (23%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 310, top: 1302, anchor: 'end',
                  lines: [{ text: '其他订阅', size: 40, weight: 800 }],
                },
              ],
            },
            transaction_based: {
              blocks: [
                {
                  x: 876, top: 318, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '交易收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (40%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            subscription_services: {
              blocks: [
                {
                  x: 876, top: 738, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '订阅与服务', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (14%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 876, top: 1148, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '其他', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (25%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1342, top: 448, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 42, weight: 800 },
                    { text: '$value', size: 41, weight: 400 },
                    { text: '同比 (31%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1533, top: 1032, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '营业', size: 38, weight: 800 },
                    { text: '亏损', size: 38, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '利润率 (2%)', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (36 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1810, top: 452, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            technology: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 393, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '技术', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 37%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +20 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 648, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 27%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +7 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 852, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 19%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +7 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            transaction_costs: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1056, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '交易', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 14%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_costs: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1246, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '其他成本', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
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
