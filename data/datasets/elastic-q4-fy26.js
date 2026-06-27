/* ====================================================================
 * Elastic - Q4 FY26 income statement ($M)
 * Reconstructed from input/processed/elastic-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0b82a6';
  const BLUE_LINK = '#85bbc9';
  const TITLE = '#155277';
  const NOTE = '#707070';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#009247';
  const GREEN_LINK = '#9bcd9b';
  const RED = '#d90000';
  const RED_LABEL = '#981100';
  const RED_LINK = '#e48082';
  const DARK = '#000000';
  const RIGHT_LABEL_X = 2428;

  const elasticLogo = `
    <g transform="translate(6 10) scale(0.87)" stroke="#ffffff" stroke-width="7" stroke-linejoin="round">
      <path d="M88 0C112 -10 149 3 161 29C172 53 158 83 130 104L85 139L40 114L32 65C27 32 50 9 88 0Z" fill="#fcca00"/>
      <path d="M22 24C40 15 62 24 68 45L61 80L22 108C1 95 -6 73 5 52C8 44 14 33 22 24Z" fill="#ef4b93"/>
      <path d="M1 82C16 64 43 62 61 80L52 124L11 156C-9 145 -15 117 1 82Z" fill="#20a8df"/>
      <path d="M53 117L102 137L112 189C92 210 49 209 27 184C4 158 11 127 53 117Z" fill="#2db9ad"/>
      <path d="M116 105L150 73C173 74 192 91 193 115C193 140 173 158 150 161L108 138Z" fill="#0078a8"/>
      <path d="M112 184L118 145L150 161C158 184 145 205 120 207C113 205 109 199 112 184Z" fill="#a6d854"/>
    </g>
    <text x="197" y="136" font-family="Arial,Helvetica,sans-serif" font-size="120" font-weight="400" fill="${DARK}"
      textLength="315" lengthAdjust="spacingAndGlyphs">elastic</text>
  `;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1135" width="${width}" height="162" rx="35" fill="${BLUE}"/>
      ${lines.map((line) => `<text x="${x + width / 2}" y="${1135 + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`).join('')}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(34, 177, [
        { text: 'DBNE', y: 51, size: 30, weight: 800 },
        { text: '112%', y: 94, size: 32 },
        { text: labels.dbneTrend, y: 137, size: 29 },
      ])}
      ${kpiCard(221, 465, [
        { text: labels.customers, y: 51, size: 30, weight: 800 },
        { text: '1,720', y: 94, size: 32 },
        { text: labels.customerGrowth, y: 137, size: 29 },
      ])}
      <text x="127" y="1342" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbneTrend: 'Flat Q/Q',
    customers: 'Customers &gt; $100K',
    customerGrowth: '+14% Y/Y',
    dbnrFootnote: 'DBNR = Dollar Based Net Expansion',
  });

  const annotationsZh = annotations({
    dbneTrend: '环比持平',
    customers: '客户 &gt; $100K',
    customerGrowth: '同比 +14%',
    dbnrFootnote: 'DBNR = 基于美元的净扩张率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'elastic-q4-fy26',
    name: 'Elastic · Q4 FY26',
    company: 'Elastic',
    meta: {
      company: 'Elastic',
      title: 'Elastic Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/elastic-q4-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 199,
      titleSize: 123,
      titleWeight: 700,
      titleTextLength: 2114,
      periodX: 2396,
      periodY: 318,
      periodNoteY: 365,
      logoWidth: 650,
      logoHeight: 210,
      logoY: 230,
      logoViewBox: '0 0 650 210',
      logoSvg: elasticLogo,
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
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        cloud: { x: 364, y: 466, width: 71, height: 184 },
        other_subscription: { x: 364, y: 844, width: 71, height: 174 },
        subscription: { x: 737, y: 576, width: 72, height: 360 },
        service: { x: 737, y: 1137, width: 72, height: 23 },
        revenue: { x: 1111, y: 669, width: 71, height: 383 },
        gross_profit: { x: 1485, y: 575, width: 71, height: 289 },
        cost_of_revenue: { x: 1485, y: 1061, width: 71, height: 94 },
        operating_loss: { x: 1710, y: 1041, width: 71, height: 12 },
        operating_expenses: { x: 1858, y: 670, width: 72, height: 303 },
        sm: { x: 2232, y: 493, width: 72, height: 158 },
        rnd: { x: 2232, y: 829, width: 72, height: 102 },
        ga: { x: 2232, y: 1120, width: 72, height: 41 },
      },
      labels: {
        cloud: {
          blocks: [
            {
              x: 399, top: 372, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+20% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 206, top: 494, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Cloud', size: 40, weight: 800 },
                { text: '48% of revenue', size: 32, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 32, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_subscription: {
          blocks: [
            {
              x: 399, top: 754, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 207, top: 893, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 40, weight: 800 },
                { text: 'subscription', size: 40, weight: 800 },
              ],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 773, top: 431, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Subscription', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        service: {
          blocks: [
            {
              x: 773, top: 994, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Service', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1146, top: 527, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1521, top: 394, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '75% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1521, top: 1175, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1722, top: 1080, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'loss', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '(4%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1889, top: 509, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 502, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '41% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 824, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '27% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1110, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'cloud', col: 0, order: 0, type: 'source', label: 'Cloud', value: 217, notes: ['+20% Y/Y', '48% of revenue', '+2pp Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_subscription', col: 0, order: 1, type: 'source', label: 'Other subscription', value: 205, notes: ['+14% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'subscription', col: 1, order: 0, type: 'source', label: 'Subscription', value: 423, notes: ['+17% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'service', col: 1, order: 1, type: 'source', label: 'Service', value: 28, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 451, notes: ['+16% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 340, notes: ['75% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 111, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -16, notes: ['(4%) margin', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 356, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 6, order: 0, type: 'cost', label: 'S&M', value: 186, notes: ['41% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 6, order: 1, type: 'cost', label: 'R&D', value: 120, notes: ['27% of revenue', '+2pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 6, order: 2, type: 'cost', label: 'G&A', value: 50, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'cloud', target: 'subscription', value: 217, width: 184, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_subscription', target: 'subscription', value: 205, width: 174, sourceOrder: 0, targetOrder: 1 },

      { source: 'subscription', target: 'revenue', value: 423, width: 360, sourceOrder: 0, targetOrder: 0 },
      { source: 'service', target: 'revenue', value: 28, width: 23, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 340, width: 289, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 111, width: 94, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 340, width: 289, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 16, width: 12, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 186, width: 158, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 120, width: 102, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 50, width: 41, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Elastic · 2026 财年第四季度',
        meta: {
          title: 'Elastic 2026 财年第四季度利润表',
          period: '2026 财年第四季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 112,
          titleTextLength: 2030,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          cloud: { label: '云', notes: ['同比 +20%', '占收入 48%', '同比 +2 个百分点'] },
          other_subscription: { label: '其他订阅', notes: ['同比 +14%'] },
          subscription: { label: '订阅', notes: ['同比 +17%'] },
          service: { label: '服务', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 75%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (4%)', '同比 (0 个百分点)'] },
          operating_expenses: { label: '营业费用' },
          sm: { label: '销售与市场', notes: ['占收入 41%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 27%', '同比 +2 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            cloud: {
              blocks: [
                {
                  x: 399, top: 372, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +20%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 206, top: 494, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '云', size: 40, weight: 800 },
                    { text: '占收入 48%', size: 32, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 32, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_subscription: {
              blocks: [
                {
                  x: 399, top: 754, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 207, top: 906, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '其他', size: 40, weight: 800 },
                    { text: '订阅', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            subscription: {
              blocks: [
                {
                  x: 773, top: 431, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '订阅', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            service: {
              blocks: [
                {
                  x: 773, top: 994, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '服务', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +6%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1146, top: 527, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1521, top: 394, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 75%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1521, top: 1175, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1722, top: 1080, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '亏损', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 (4%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1889, top: 509, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 502, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与市场', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 41%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 824, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 27%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1110, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
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
