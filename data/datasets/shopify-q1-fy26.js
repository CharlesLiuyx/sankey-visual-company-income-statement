/* ====================================================================
 * Shopify - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/shopify-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#707070';
  const SHOP_GREEN = '#95bf47';
  const SHOP_DARK_GREEN = '#5e8e3e';
  const GREEN = '#21a52d';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#98ca99';
  const SOURCE_LINK = '#bdd39c';
  const RED = '#d60000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e38284';
  const BLACK = '#000000';
  const SCALE = 119;
  const RIGHT_LABEL_X = 2425;

  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const shopifyBagLogo = `
    <g transform="translate(8 8)">
      <path d="M68 33C71 10 88 -1 104 3C112 5 119 12 123 24C131 19 140 20 148 27C159 36 164 53 166 74L143 77C142 57 138 43 130 36C127 33 124 32 121 34C122 43 122 54 120 67L100 69C103 51 103 37 100 26C98 18 95 14 91 13C83 11 74 21 72 36L68 33Z" fill="${SHOP_GREEN}"/>
      <path d="M55 68L153 82L175 291L84 322L17 270L55 68Z" fill="${SHOP_GREEN}"/>
      <path d="M153 82L205 91L230 274L175 291L153 82Z" fill="${SHOP_DARK_GREEN}"/>
      <path d="M113 128C96 119 75 122 63 137C50 154 52 179 68 192C80 202 97 206 108 215C119 224 117 239 105 247C91 257 70 253 53 242L44 274C63 287 91 292 114 282C142 270 151 238 134 216C124 203 109 197 96 191C82 185 77 175 82 165C88 154 104 154 123 164L113 128Z" fill="#ffffff"/>
    </g>`;

  const merchantCluster = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif" transform="translate(145 610)">
      <rect x="0" y="0" width="570" height="284" rx="142" fill="${SHOP_GREEN}" stroke="#59852e" stroke-width="4"/>
      <text x="43" y="170" font-size="62" font-style="italic" font-weight="800" fill="#ffffff">${labels.shopify}</text>
      <g font-size="34" font-style="italic" font-weight="500" fill="#ffffff">
        <text x="332" y="58">${labels.capital}</text>
        <text x="332" y="94">${labels.appStore}</text>
        <text x="332" y="130">${labels.payments}</text>
        <text x="332" y="166">${labels.fulfillment}</text>
        <text x="332" y="202">${labels.balance}</text>
        <text x="332" y="238">${labels.markets}</text>
      </g>
    </g>`;

  const shopifyPlusWordmark = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif" transform="translate(78 1038)">
      <text x="0" y="0" font-size="45" font-style="italic" font-weight="900" fill="${BLACK}">${labels.shopifyPlus}</text>
    </g>`;

  const annotations = (labels) => `
    <g>
      ${merchantCluster(labels)}
      ${shopifyPlusWordmark(labels)}
    </g>`;

  const annotationsEn = annotations({
    shopify: 'shopify',
    shopifyPlus: 'shopifyplus',
    capital: 'Capital',
    appStore: 'App Store',
    payments: 'Payments',
    fulfillment: 'Fulfillment',
    balance: 'Balance',
    markets: 'Markets',
  });

  const annotationsZh = annotations({
    shopify: 'Shopify',
    shopifyPlus: 'Shopify Plus',
    capital: '资金',
    appStore: '应用商店',
    payments: '支付',
    fulfillment: '履约',
    balance: '余额',
    markets: '市场',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'shopify-q1-fy26',
    name: 'Shopify · Q1 FY26',
    company: 'Shopify',
    meta: {
      company: 'Shopify',
      title: 'Shopify Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/shopify-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2195,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 305,
      logoHeight: 325,
      logoY: 215,
      logoViewBox: '0 0 240 330',
      logoSvg: shopifyBagLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: SHOP_GREEN, label: SHOP_GREEN },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: GREEN_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        merchant_solutions: { x: 768, y: 610, width: 72, height: 286 },
        shopify_plus: { x: 395, y: 1023, width: 72, height: 24 },
        other_subscription: { x: 395, y: 1225, width: 72, height: 61 },
        subscription_solutions: { x: 768, y: 1119, width: 72, height: 89 },
        revenue: { x: 1145, y: 713, width: 72, height: 377 },
        gross_profit: { x: 1516, y: 532, width: 72, height: 184 },
        cost_of_revenue: { x: 1516, y: 1015, width: 72, height: 193 },
        operating_profit: { x: 1890, y: 501, width: 72, height: 46 },
        net_loss: { x: 2131, y: 387, width: 72, height: 69 },
        investments: { x: 2264, y: 400, width: 73, height: 115 },
        tax: { x: 2264, y: 643, width: 73, height: 3 },
        operating_expenses: { x: 1890, y: 718, width: 72, height: 139 },
        merchant_cost: { x: 1748, y: 1034, width: 72, height: 176 },
        subscription_cost: { x: 1748, y: 1285, width: 72, height: 18 },
        sm: { x: 2264, y: 761, width: 73, height: 59 },
        rnd: { x: 2264, y: 944, width: 73, height: 52 },
        ga: { x: 2264, y: 1119, width: 73, height: 14 },
        loan_losses: { x: 2264, y: 1291, width: 73, height: 14 },
      },
      labels: {
        merchant_solutions: {
          blocks: [
            {
              x: 804, top: 410, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Merchant', size: 40, weight: 800 },
                { text: 'Solutions', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+39% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        shopify_plus: {
          blocks: [
            {
              x: 431, top: 934, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_subscription: {
          blocks: [
            {
              x: 431, top: 1123, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 250, top: 1236, anchor: 'middle', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        subscription_solutions: {
          blocks: [
            {
              x: 805, top: 1215, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: 'Solutions', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+21% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1181, top: 566, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+34% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1552, top: 311, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross', size: 40, weight: 800 },
                { text: 'profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '49% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1552, top: 1217, anchor: 'middle', lineGap: 8,
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
              x: 1926, top: 280, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '12% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_loss: {
          blocks: [
            {
              x: 2167, top: 285, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        investments: {
          blocks: [
            {
              x: 2468, top: 420, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Investments', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2455, top: 604, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1926, top: 573, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        merchant_cost: {
          blocks: [
            {
              x: 1992, top: 1084, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Merchant', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '39% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        subscription_cost: {
          blocks: [
            {
              x: 1985, top: 1257, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Subscription', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '80% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 745, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '16% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 918, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '14% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1100, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '4% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        loan_losses: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1265, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Loan losses', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '4% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'merchant_solutions', col: 0, order: 0, type: 'source', label: ['Merchant', 'Solutions'], value: 2.420, valueText: '$2.4B', notes: ['+39% Y/Y'], color: SHOP_GREEN, labelColor: SHOP_GREEN, linkTint: SOURCE_LINK },
      { id: 'shopify_plus', col: 0, order: 1, type: 'source', label: 'Shopify Plus', value: 0.242, valueText: '$0.2B', notes: ['+21% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'other_subscription', col: 0, order: 2, type: 'source', label: 'Other', value: 0.508, valueText: '$0.5B', notes: ['+21% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'subscription_solutions', col: 1, order: 0, type: 'source', label: ['Subscription', 'Solutions'], value: 0.750, valueText: '$0.8B', notes: ['+21% Y/Y'], color: SHOP_DARK_GREEN, labelColor: SHOP_DARK_GREEN, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 3.170, valueText: '$3.2B', notes: ['+34% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: ['Gross', 'profit'], value: 1.546, valueText: '$1.5B', notes: ['49% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 1.624, valueText: '($1.6B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: ['Operating', 'profit'], value: 0.382, valueText: '$0.4B', notes: ['12% margin', '+3pp Y/Y'] },
      { id: 'net_loss', col: 5, order: 0, type: 'cost', label: 'Net loss', value: -0.581, valueText: '($0.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'investments', col: 6, order: 0, type: 'cost', label: 'Investments', value: 0.941, valueText: '($0.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 6, order: 1, type: 'cost', label: 'Tax', value: 0.022, valueText: '($22M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 1.164, valueText: '($1.2B)' },
      { id: 'merchant_cost', col: 5, order: 1, type: 'cost', label: 'Merchant', value: 1.476, valueText: '($1.5B)', notes: ['39% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'subscription_cost', col: 5, order: 2, type: 'cost', label: 'Subscription', value: 0.148, valueText: '($0.1B)', notes: ['80% gross margin'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 2, type: 'cost', label: 'S&M', value: 0.496, valueText: '($0.5B)', notes: ['16% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 0.437, valueText: '($0.4B)', notes: ['14% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 4, type: 'cost', label: 'G&A', value: 0.115, valueText: '($0.1B)', notes: ['4% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'loan_losses', col: 6, order: 5, type: 'cost', label: 'Loan losses', value: 0.116, valueText: '($0.1B)', notes: ['4% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'merchant_solutions', target: 'revenue', value: 2.420, width: 286, sourceOrder: 0, targetOrder: 0 },
      { source: 'shopify_plus', target: 'subscription_solutions', value: 0.242, width: 24, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription_solutions', value: 0.508, width: 61, sourceOrder: 0, targetOrder: 1 },
      { source: 'subscription_solutions', target: 'revenue', value: 0.750, width: 89, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 1.546, width: 184, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 1.624, width: 193, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.382, width: 46, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 1.164, width: 139, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'investments', value: 0.382, percent: 39.7, width: 46, sourceOrder: 0, targetOrder: 1, linkTint: RED_LINK, y0: 524, y1: 491.5, curve: { x1: 2268, c1x: 2078, c1y: 524, c2x: 2168, c2y: 480 } },
      { source: 'net_loss', target: 'investments', value: 0.581, percent: 60.3, width: 69, sourceOrder: 0, targetOrder: 0, y0: 421.5, y1: 435, curve: { x1: 2268, c1x: 2223, c1y: 421.5, c2x: 2242, c2y: 435 } },
      { source: 'operating_profit', target: 'tax', value: 0.022, width: 2, sourceOrder: 1, targetOrder: 0, y0: 547, y1: 644, curve: { c1x: 2040, c1y: 547, c2x: 2170, c2y: 644 } },

      { source: 'cost_of_revenue', target: 'merchant_cost', value: 1.476, width: 176, sourceOrder: 0, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'subscription_cost', value: 0.148, width: 18, sourceOrder: 1, targetOrder: 0, curve: { c1x: 1618, c1y: 1200, c2x: 1690, c2y: 1294 } },

      { source: 'operating_expenses', target: 'sm', value: 0.496, width: 59, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.437, width: 52, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.115, width: 14, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'loan_losses', value: 0.116, width: 14, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Shopify · 2026 财年第一季度',
        meta: {
          title: 'Shopify 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
          titleSize: 112,
          titleTextLength: 1860,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          merchant_solutions: { label: '商家解决方案', notes: ['同比 +39%'] },
          shopify_plus: { label: 'Shopify Plus 方案', notes: ['同比 +21%'] },
          other_subscription: { label: '其他', notes: ['同比 +21%'] },
          subscription_solutions: { label: '订阅解决方案', notes: ['同比 +21%'] },
          revenue: { label: '收入', notes: ['同比 +34%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +3 个百分点'] },
          net_loss: { label: '净亏损' },
          investments: { label: '投资' },
          tax: { label: '税费' },
          operating_expenses: { label: '营业费用' },
          merchant_cost: { label: '商家', notes: ['毛利率 39%'] },
          subscription_cost: { label: '订阅', notes: ['毛利率 80%'] },
          sm: { label: '销售与市场', notes: ['占收入 16%', '同比 (1 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 14%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 4%', '同比 (1 个百分点)'] },
          loan_losses: { label: '贷款损失', notes: ['占收入 4%', '同比 +0 个百分点'] },
        },
        layout: {
          labels: {
            merchant_solutions: {
              blocks: [
                {
                  x: 804, top: 425, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '商家', size: 40, weight: 800 },
                    { text: '解决方案', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +39%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            shopify_plus: {
              blocks: [
                {
                  x: 431, top: 934, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +21%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_subscription: {
              blocks: [
                {
                  x: 431, top: 1123, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +21%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 250, top: 1236, anchor: 'middle', lines: [{ text: '其他', size: 40, weight: 800 }] },
              ],
            },
            subscription_solutions: {
              blocks: [
                {
                  x: 805, top: 1215, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '订阅', size: 40, weight: 800 },
                    { text: '解决方案', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +21%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1181, top: 566, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +34%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1552, top: 359, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 49%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1552, top: 1235, anchor: 'middle', lineGap: 8,
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
                  x: 1926, top: 328, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 12%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            net_loss: {
              blocks: [
                {
                  x: 2167, top: 285, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净亏损', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            investments: {
              blocks: [
                {
                  x: 2468, top: 420, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '投资', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2455, top: 604, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1926, top: 573, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            merchant_cost: {
              blocks: [
                {
                  x: 1992, top: 1084, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '商家', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '毛利率 39%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            subscription_cost: {
              blocks: [
                {
                  x: 1985, top: 1257, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '订阅', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '毛利率 80%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 745, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 16%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 918, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1100, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 4%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            loan_losses: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1265, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '贷款损失', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 4%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
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
