/* ====================================================================
 * Klarna - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/klarna-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const NOTE = '#666666';
  const TITLE = '#155077';
  const BLACK = '#000000';
  const PINK_LINK = '#f2c6dc';
  const KLARNA_PINK = '#ffb1d1';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2490;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="${KLARNA_PINK}"/>
      ${lines
        .map(
          (line) =>
            `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size || 30}" font-weight="${line.weight || 500}" fill="${BLACK}">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const klarnaLogoSvg = `
    <rect x="0" y="0" width="552" height="232" rx="76" fill="${KLARNA_PINK}"/>
    <text x="276" y="159" text-anchor="middle" font-family="Arial Black, Montserrat, Arial, sans-serif" font-size="136" font-weight="900" fill="#0b051d">Klarna</text>
  `;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(62, 1144, 190, 159, [
        { text: 'GMV', y: 48, size: 30, weight: 800 },
        { text: '$33.7B', y: 86, size: 30, weight: 500 },
        { text: '+22% Y/Y LfL', y: 126, size: 28, weight: 500 },
      ])}
      ${kpiCard(262, 1144, 380, 159, [
        { text: 'Active Consumers', y: 48, size: 30, weight: 800 },
        { text: '119M', y: 86, size: 30, weight: 500 },
        { text: '+21% Y/Y', y: 126, size: 28, weight: 500 },
      ])}
      ${kpiCard(650, 1144, 248, 159, [
        { text: 'Merchants', y: 48, size: 30, weight: 800 },
        { text: '1,075K', y: 86, size: 30, weight: 500 },
        { text: '+49% Y/Y', y: 126, size: 28, weight: 500 },
      ])}
      <text x="124" y="1350" font-size="30" font-weight="500" fill="${NOTE}">GMV = Gross Merchandise Value</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(62, 1144, 190, 159, [
        { text: 'GMV', y: 48, size: 30, weight: 800 },
        { text: '$33.7B', y: 86, size: 30, weight: 500 },
        { text: '同比 +22% LfL', y: 126, size: 26, weight: 500 },
      ])}
      ${kpiCard(262, 1144, 380, 159, [
        { text: '活跃消费者', y: 48, size: 30, weight: 800 },
        { text: '119M', y: 86, size: 30, weight: 500 },
        { text: '同比 +21%', y: 126, size: 28, weight: 500 },
      ])}
      ${kpiCard(650, 1144, 248, 159, [
        { text: '商户', y: 48, size: 30, weight: 800 },
        { text: '1,075K', y: 86, size: 30, weight: 500 },
        { text: '同比 +49%', y: 126, size: 28, weight: 500 },
      ])}
      <text x="124" y="1350" font-size="30" font-weight="500" fill="${NOTE}">GMV = 商品交易总额</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'klarna-q1-fy26',
    name: 'Klarna · Q1 FY26',
    company: 'Klarna',
    meta: {
      company: 'Klarna',
      title: 'Klarna Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/klarna-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1260,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2025,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 566,
      logoHeight: 232,
      logoY: 246,
      logoViewBox: '0 0 566 232',
      logoSvg: klarnaLogoSvg,
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
        source: PINK_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 340 / 1012,
      nodes: {
        transaction_revenue: { x: 367, y: 442, width: 72, height: 225 },
        interest: { x: 367, y: 796, width: 72, height: 95 },
        consumer_revenue: { x: 367, y: 1032, width: 72, height: 19 },
        revenue: { x: 835, y: 647, width: 72, height: 340 },
        transaction_margin: { x: 1305, y: 512, width: 73, height: 131 },
        processing_servicing_costs: { x: 1306, y: 899, width: 71, height: 89 },
        provision_credit_losses: { x: 1306, y: 1090, width: 71, height: 63 },
        funding_costs: { x: 1306, y: 1258, width: 71, height: 57 },
        operating_profit: { x: 1773, y: 426, width: 71, height: 6 },
        operating_expenses: { x: 1773, y: 657, width: 72, height: 125 },
        net_profit: { x: 2240, y: 335, width: 72, height: 1 },
        other: { x: 2240, y: 511, width: 72, height: 5 },
        tech_product_development: { x: 2240, y: 622, width: 72, height: 43 },
        sales_marketing: { x: 2240, y: 780, width: 72, height: 35 },
        general_administrative: { x: 2240, y: 934, width: 72, height: 27 },
        customer_service_operations: { x: 2240, y: 1080, width: 72, height: 19 },
        other_operating_expense: { x: 2240, y: 1210, width: 72, height: 1 },
      },
      labels: {
        transaction_revenue: {
          blocks: [
            {
              x: 403, top: 350, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+29% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 220, top: 526, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Transaction', size: 42, weight: 800 },
                { text: 'revenue', size: 42, weight: 800 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 403, top: 706, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+56% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 221, top: 824, anchor: 'middle',
              lines: [{ text: 'Interest', size: 42, weight: 800 }],
            },
          ],
        },
        consumer_revenue: {
          blocks: [
            {
              x: 403, top: 946, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: 'New Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 217, top: 1008, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Consumer', size: 42, weight: 800 },
                { text: 'Revenue', size: 42, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 872, top: 502, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+44% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        transaction_margin: {
          blocks: [
            {
              x: 1342, top: 315, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Transaction', size: 38, weight: 800 },
                { text: 'margin dollars', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+44% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        processing_servicing_costs: {
          blocks: [
            {
              x: 1395, top: 897, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Processing and', size: 33, weight: 800 },
                { text: 'servicing costs', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        provision_credit_losses: {
          blocks: [
            {
              x: 1410, top: 1078, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Provision for', size: 33, weight: 800 },
                { text: 'credit losses', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        funding_costs: {
          blocks: [
            {
              x: 1396, top: 1256, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Funding costs', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1779, top: 245, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '1% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1781, top: 803, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 268, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '0% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 482, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tech_product_development: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 589, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tech & product', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sales_marketing: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 741, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Sales &', size: 31, weight: 800 },
                { text: 'marketing', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        general_administrative: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 893, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'General &', size: 31, weight: 800 },
                { text: 'administrative', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        customer_service_operations: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1039, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Customer service', size: 30, weight: 800 },
                { text: '& operations', size: 30, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        other_operating_expense: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1226, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'transaction_revenue', col: 0, order: 0, type: 'source',
        label: ['Transaction', 'revenue'], value: 671, notes: ['+29% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: PINK_LINK,
      },
      {
        id: 'interest', col: 0, order: 1, type: 'source',
        label: 'Interest', value: 284, notes: ['+56% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: PINK_LINK,
      },
      {
        id: 'consumer_revenue', col: 0, order: 2, type: 'source',
        label: ['Consumer', 'Revenue'], value: 57, notes: ['New Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: PINK_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1012, valueText: '$1,012M', notes: ['+44% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: PINK_LINK,
      },
      {
        id: 'transaction_margin', col: 2, order: 0, type: 'profit',
        label: ['Transaction', 'margin dollars'], value: 389, notes: ['+44% Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'processing_servicing_costs', col: 2, order: 1, type: 'cost',
        label: ['Processing and', 'servicing costs'], value: 266,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'provision_credit_losses', col: 2, order: 2, type: 'cost',
        label: ['Provision for', 'credit losses'], value: 186,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'funding_costs', col: 2, order: 3, type: 'cost',
        label: 'Funding costs', value: 171,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 17, notes: ['1% margin', '+6pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 372,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 1, notes: ['0% margin', '+6pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'other', col: 4, order: 1, type: 'cost',
        label: 'Other', value: 16,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tech_product_development', col: 4, order: 2, type: 'cost',
        label: ['Tech & product', 'development'], value: 129,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sales_marketing', col: 4, order: 3, type: 'cost',
        label: ['Sales &', 'marketing'], value: 105,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'general_administrative', col: 4, order: 4, type: 'cost',
        label: ['General &', 'administrative'], value: 81,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'customer_service_operations', col: 4, order: 5, type: 'cost',
        label: ['Customer service', '& operations'], value: 55,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_operating_expense', col: 4, order: 6, type: 'cost',
        label: 'Other', value: 2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'transaction_revenue', target: 'revenue', value: 671, width: 225, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'revenue', value: 284, width: 96, sourceOrder: 0, targetOrder: 1 },
      { source: 'consumer_revenue', target: 'revenue', value: 57, width: 19, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'transaction_margin', value: 389, width: 131, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'processing_servicing_costs', value: 266, width: 89, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'provision_credit_losses', value: 186, width: 63, sourceOrder: 2, targetOrder: 0 },
      { source: 'revenue', target: 'funding_costs', value: 171, width: 57, sourceOrder: 3, targetOrder: 0 },

      { source: 'transaction_margin', target: 'operating_profit', value: 17, width: 6, sourceOrder: 0, targetOrder: 0 },
      { source: 'transaction_margin', target: 'operating_expenses', value: 372, width: 125, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 1, width: 1, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 16, width: 5, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_expenses', target: 'tech_product_development', value: 129, width: 43, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sales_marketing', value: 105, width: 35, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'general_administrative', value: 81, width: 27, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'customer_service_operations', value: 55, width: 19, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_operating_expense', value: 2, width: 1, sourceOrder: 4, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Klarna · 2026 财年第一季度',
        meta: {
          title: 'Klarna 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 116,
          titleTextLength: 1540,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          transaction_revenue: { label: ['交易', '收入'], notes: ['同比 +29%'] },
          interest: { label: '利息', notes: ['同比 +56%'] },
          consumer_revenue: { label: ['消费者', '收入'], notes: ['同比新增'] },
          revenue: { label: '收入', notes: ['同比 +44%'] },
          transaction_margin: { label: ['交易', '毛利额'], notes: ['同比 +44%'] },
          processing_servicing_costs: { label: ['处理和', '服务成本'] },
          provision_credit_losses: { label: ['信用损失', '准备金'] },
          funding_costs: { label: '融资成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 +6 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 0%', '同比 +6 个百分点'] },
          other: { label: '其他' },
          tech_product_development: { label: ['技术与产品', '开发'] },
          sales_marketing: { label: '销售与营销' },
          general_administrative: { label: '一般及行政' },
          customer_service_operations: { label: '客服与运营' },
          other_operating_expense: { label: '其他' },
        },
        layout: {
          labels: {
            transaction_revenue: {
              blocks: [
                {
                  x: 403, top: 350, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +29%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 220, top: 526, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '交易', size: 42, weight: 800 },
                    { text: '收入', size: 42, weight: 800 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 403, top: 706, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +56%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 221, top: 824, anchor: 'middle',
                  lines: [{ text: '利息', size: 42, weight: 800 }],
                },
              ],
            },
            consumer_revenue: {
              blocks: [
                {
                  x: 403, top: 946, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比新增', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 217, top: 1008, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '消费者', size: 42, weight: 800 },
                    { text: '收入', size: 42, weight: 800 },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 872, top: 502, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +44%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            transaction_margin: {
              blocks: [
                {
                  x: 1342, top: 315, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '交易', size: 38, weight: 800 },
                    { text: '毛利额', size: 38, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +44%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            processing_servicing_costs: {
              blocks: [
                {
                  x: 1395, top: 897, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '处理和', size: 33, weight: 800 },
                    { text: '服务成本', size: 33, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            provision_credit_losses: {
              blocks: [
                {
                  x: 1410, top: 1078, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '信用损失', size: 33, weight: 800 },
                    { text: '准备金', size: 33, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            funding_costs: {
              blocks: [
                {
                  x: 1396, top: 1256, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '融资成本', size: 33, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1779, top: 245, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 38, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 1%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1781, top: 803, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 268, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 38, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 0%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 482, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            tech_product_development: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 589, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '技术与产品', size: 31, weight: 800 },
                    { text: '开发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            sales_marketing: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 741, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与', size: 31, weight: 800 },
                    { text: '营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            general_administrative: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 893, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '一般及', size: 31, weight: 800 },
                    { text: '行政', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            customer_service_operations: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1039, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '客服与', size: 30, weight: 800 },
                    { text: '运营', size: 30, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            other_operating_expense: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1226, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
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
