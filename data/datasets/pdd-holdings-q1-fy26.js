/* ====================================================================
 * PDD Holdings - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/pdd-holdings-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#737373';
  const BLACK = '#000000';
  const SOURCE_LINK = '#8f8f8f';
  const GREEN = '#25a525';
  const GREEN_LABEL = '#00924a';
  const GREEN_LINK = '#99cd99';
  const RED = '#d70000';
  const RED_LABEL = '#8c1000';
  const RED_LINK = '#e28183';

  const heartLogo = (x, y, width, height, centerTextSize = 36) => `
    <g transform="translate(${x} ${y}) scale(${width / 220} ${height / 184})">
      <path d="M110 182 L10 100 C-20 70 8 18 54 12 C78 9 98 25 110 44 C122 25 142 9 166 12 C212 18 240 70 210 100 Z" fill="#ef2a24"/>
      <path d="M110 44 L110 182 M10 100 L110 44 L210 100 M54 12 L54 138 M166 12 L166 138 M10 100 L110 100 L210 100 M55 58 L110 100 L165 58 M55 138 L110 100 L165 138" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="110" y="113" text-anchor="middle" font-family="Arial,sans-serif" font-size="${centerTextSize}" font-weight="900" fill="#ffffff">拼</text>
    </g>`;

  const pinduoduoAppIcon = `
    <g transform="translate(68 834)">
      <rect width="142" height="142" rx="22" fill="#ff0808"/>
      ${heartLogo(18, 19, 106, 88, 26)}
    </g>`;

  const temuAppIcon = `
    <g transform="translate(219 831)">
      <rect width="147" height="148" rx="24" fill="#ff7900"/>
      <g fill="#ffffff" opacity="0.98">
        <path d="M34 39 C45 28 58 32 54 47 C64 45 70 53 63 62 C50 74 27 66 23 54 C21 47 26 43 34 39 Z"/>
        <path d="M70 34 C82 28 95 37 91 50 C88 61 76 63 66 57 C57 51 59 39 70 34 Z"/>
        <path d="M108 35 C117 30 124 34 123 44 C122 58 105 66 90 65 C96 56 101 44 108 35 Z"/>
        <rect x="124" y="38" width="31" height="26" rx="7"/>
      </g>
      <text x="73.5" y="102" text-anchor="middle" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-size="47" font-weight="900" fill="#ffffff">TEMU</text>
    </g>`;

  const buildAnnotations = (wordmark) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${heartLogo(818, 242, 214, 180, 38)}
      <text x="666" y="510" font-family="Arial Black,Arial,sans-serif" font-size="82" font-weight="900" fill="#000000">${wordmark}</text>
      ${pinduoduoAppIcon}
      ${temuAppIcon}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pdd-holdings-q1-fy26',
    name: 'PDD Holdings · Q1 FY26',
    company: 'PDD Holdings',
    meta: {
      company: 'PDD Holdings',
      title: 'PDD Holdings Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/pdd-holdings-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1195,
      titleY: 184,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2205,
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
    annotationsSvg: buildAnnotations('Pinduoduo'),

    layout: {
      scale: 27.65,
      nodes: {
        online_marketing: { x: 437, y: 622, width: 74, height: 198 },
        transaction_services: { x: 437, y: 1000, width: 74, height: 226 },
        revenue: { x: 905, y: 710, width: 74, height: 426 },
        gross_profit: { x: 1376, y: 618, width: 74, height: 238 },
        cost_of_revenue: { x: 1376, y: 1037, width: 74, height: 188 },
        operating_profit: { x: 1847, y: 510, width: 74, height: 78 },
        operating_expenses: { x: 1847, y: 781, width: 74, height: 160 },
        net_profit: { x: 2308, y: 406, width: 74, height: 50 },
        tax: { x: 2308, y: 615, width: 74, height: 17 },
        other: { x: 2308, y: 722, width: 74, height: 11 },
        sm: { x: 2308, y: 842, width: 74, height: 136 },
        rnd: { x: 2308, y: 1112, width: 74, height: 17 },
        ga: { x: 2308, y: 1263, width: 74, height: 6 },
      },
      labels: {
        online_marketing: {
          blocks: [
            {
              x: 473, top: 524, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 190, top: 654, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Online Marketing', size: 38, weight: 800 },
                { text: '& Others', size: 38, weight: 800 },
                { text: 'Performance-based services', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        transaction_services: {
          blocks: [
            {
              x: 473, top: 900, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 176, top: 1044, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Transaction', size: 40, weight: 800 },
                { text: 'Services', size: 40, weight: 800 },
                { text: 'Merchant fee', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 943, top: 570, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1412, top: 432, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '56% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1413, top: 1244, anchor: 'middle', lineGap: 8,
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
              x: 1884, top: 284, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '18% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1885, top: 958, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2501, top: 318, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '12% margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2501, top: 568, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2501, top: 708, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2501, top: 844, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '32% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2501, top: 1060, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '4% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2501, top: 1240, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '1% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'online_marketing', col: 0, order: 0, type: 'source',
        label: ['Online Marketing', '& Others'], value: 7.2, notes: ['+2% Y/Y', 'Performance-based services'],
        color: BLACK, labelColor: BLACK, linkTint: SOURCE_LINK,
      },
      {
        id: 'transaction_services', col: 0, order: 1, type: 'source',
        label: ['Transaction', 'Services'], value: 8.2, notes: ['+20% Y/Y', 'Merchant fee'],
        color: BLACK, labelColor: BLACK, linkTint: SOURCE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 15.4, notes: ['+11% Y/Y'],
        color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 8.6, notes: ['56% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 6.8,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 2.8, notes: ['18% margin', '+2pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 5.8,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 1.8, notes: ['12% margin', '(4pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 4, order: 1, type: 'cost',
        label: 'Tax', value: 0.6,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 4, order: 2, type: 'cost',
        label: 'Other', value: 0.4,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 4, order: 3, type: 'cost',
        label: ['Sales &', 'marketing'], value: 4.9, notes: ['32% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 4, order: 4, type: 'cost',
        label: 'R&D', value: 0.6, notes: ['4% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 5, type: 'cost',
        label: 'G&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'online_marketing', target: 'revenue', value: 7.2, width: 198, targetOrder: 0 },
      { source: 'transaction_services', target: 'revenue', value: 8.2, width: 226, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 8.6, width: 238, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 6.8, width: 188, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 2.8, width: 78, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 5.8, width: 160, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1.8, width: 50, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.6, width: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 0.4, width: 11, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'sm', value: 4.9, width: 136, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.6, width: 17, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.2, width: 6, sourceOrder: 2, targetOrder: 0 },
    ],
    i18n: {
      zh: {
        name: 'PDD Holdings · 2026 财年第一季度',
        meta: {
          title: 'PDD Holdings 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        annotationsSvg: buildAnnotations('拼多多'),
        nodes: {
          online_marketing: { label: ['在线营销', '及其他'], notes: ['同比 +2%', '基于绩效的服务'] },
          transaction_services: { label: ['交易', '服务'], notes: ['同比 +20%', '商户费用'] },
          revenue: { label: '收入', notes: ['同比 +11%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (1 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 12%', '同比 (4 个百分点)'] },
          tax: { label: '税费' },
          other: { label: '其他' },
          sm: { label: '销售与市场', notes: ['占收入 32%', '同比 (3 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 4%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
        },
        layout: {
          labels: {
            online_marketing: {
              blocks: [
                {
                  x: 473, top: 524, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 190, top: 654, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '在线营销', size: 38, weight: 800 },
                    { text: '及其他', size: 38, weight: 800 },
                    { text: '基于绩效的服务', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            transaction_services: {
              blocks: [
                {
                  x: 473, top: 900, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +20%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 176, top: 1044, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '交易', size: 40, weight: 800 },
                    { text: '服务', size: 40, weight: 800 },
                    { text: '商户费用', size: 29, weight: 400, color: NOTE },
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
