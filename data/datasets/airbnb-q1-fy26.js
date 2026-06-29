/* ====================================================================
 * Airbnb - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/airbnb-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/vector annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const PINK = '#ff315f';
  const PINK_LINK = '#f49aae';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccf9b';
  const RED = '#d60000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#df7f80';
  const NOTE = '#6a6a6a';
  const RIGHT_LABEL_X = 2375;

  const airbnbLogo = `
    <rect x="0" y="0" width="244" height="244" rx="38" fill="${PINK}"/>
    <path d="M122 48 C103 80 83 116 68 145 C56 169 73 193 99 183 C113 178 121 162 122 145 C123 162 131 178 145 183 C171 193 188 169 176 145 C161 116 141 80 122 48 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M122 145 C99 126 101 96 122 96 C143 96 145 126 122 145 Z" fill="none" stroke="#ffffff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`;

  const strokeIcon = (x, y, body, width = 96, height = 96) => `
    <g transform="translate(${x} ${y})" fill="none" stroke="#000000" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <svg width="${width}" height="${height}" viewBox="0 0 96 96" overflow="visible">${body}</svg>
    </g>`;

  const northAmericaIcon = strokeIcon(87, 410, `
    <path d="M8 48 L8 26 L28 10 L48 26 L48 48"/>
    <path d="M19 48 L19 32 L37 32 L37 48"/>
    <path d="M50 47 L74 47"/>
    <path d="M66 47 L66 12"/>
    <path d="M53 26 L66 16 L82 26"/>
    <path d="M53 38 L66 29 L82 38"/>
    <path d="M6 64 C18 56 30 72 42 64 C54 56 66 72 84 64"/>
    <path d="M6 82 C18 74 30 90 42 82 C54 74 66 90 84 82"/>
  `);

  const emeaIcon = strokeIcon(90, 652, `
    <path d="M8 75 L82 75"/>
    <path d="M30 75 L30 16"/>
    <path d="M16 32 L30 20 L46 32"/>
    <path d="M16 49 L30 38 L46 49"/>
    <path d="M42 75 L76 30 L92 46"/>
    <path d="M62 48 L76 30"/>
    <path d="M44 88 L78 88"/>
  `);

  const latamIcon = strokeIcon(100, 860, `
    <path d="M12 36 C26 10 70 10 84 36"/>
    <path d="M12 36 C32 41 45 41 84 36"/>
    <path d="M48 19 L48 82"/>
    <path d="M48 38 C41 60 36 72 31 82"/>
    <path d="M25 80 A11 11 0 1 0 25 58 A11 11 0 1 0 25 80"/>
    <path d="M29 36 C32 23 37 16 48 16"/>
    <path d="M64 36 C62 23 56 16 48 16"/>
  `, 82, 96);

  const apacIcon = strokeIcon(94, 1035, `
    <path d="M48 17 C36 10 22 13 15 24"/>
    <path d="M48 17 C60 9 76 12 84 24"/>
    <path d="M48 17 C42 29 39 43 44 57"/>
    <path d="M48 17 C56 31 59 43 54 58"/>
    <path d="M44 57 C30 54 18 61 10 74"/>
    <path d="M54 58 C68 54 80 61 88 74"/>
    <path d="M10 76 C22 68 34 84 46 76 C58 68 70 84 88 76"/>
    <path d="M10 91 C22 83 34 99 46 91 C58 83 70 99 88 91"/>
  `);

  const statsCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="${PINK}"/>
      ${lines
        .map((line, index) => `<text x="${x + width / 2}" y="${y + 42 + index * 35}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`)
        .join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${northAmericaIcon}
      ${emeaIcon}
      ${latamIcon}
      ${apacIcon}
      ${statsCard(102, 1175, 300, [
        { text: 'Nights booked', size: 26, weight: 800 },
        { text: '156M', size: 29, weight: 400 },
        { text: '+9% Y/Y', size: 21, weight: 400 },
      ])}
      ${statsCard(417, 1175, 156, [
        { text: 'GBV', size: 25, weight: 800 },
        { text: '$29.2B', size: 25, weight: 400 },
        { text: '+19% Y/Y', size: 19, weight: 400 },
      ])}
      <text x="253" y="1356" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">GBV = Gross Booking Value</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${northAmericaIcon}
      ${emeaIcon}
      ${latamIcon}
      ${apacIcon}
      ${statsCard(102, 1175, 300, [
        { text: '预订夜晚数', size: 26, weight: 800 },
        { text: '1.56 亿', size: 29, weight: 400 },
        { text: '同比 +9%', size: 21, weight: 400 },
      ])}
      ${statsCard(417, 1175, 156, [
        { text: 'GBV', size: 25, weight: 800 },
        { text: '$29.2B', size: 25, weight: 400 },
        { text: '同比 +19%', size: 19, weight: 400 },
      ])}
      <text x="253" y="1356" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">GBV = 总预订价值</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'airbnb-q1-fy26',
    name: 'Airbnb · Q1 FY26',
    company: 'Airbnb',
    meta: {
      company: 'Airbnb',
      title: 'Airbnb Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/airbnb-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 193,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2168,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 244,
      logoHeight: 244,
      logoY: 224,
      logoViewBox: '0 0 244 244',
      logoSvg: airbnbLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PINK, label: PINK },
        hub: { node: PINK, label: PINK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PINK_LINK,
        hub: PINK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 123,
      nodes: {
        north_america: { x: 397, y: 386, width: 72, height: 143 },
        emea: { x: 397, y: 654, width: 72, height: 92 },
        latam: { x: 397, y: 876, width: 72, height: 58 },
        apac: { x: 397, y: 1073, width: 72, height: 39 },
        revenue: { x: 864, y: 629, width: 72, height: 333 },
        gross_profit: { x: 1331, y: 537, width: 72, height: 260 },
        cost_of_revenue: { x: 1331, y: 992, width: 72, height: 73 },
        operating_profit: { x: 1797, y: 460, width: 72, height: 12 },
        operating_expenses: { x: 1797, y: 649, width: 72, height: 248 },
        other_income: { x: 2117, y: 444, width: 72, height: 12 },
        net_profit: { x: 2264, y: 383, width: 72, height: 24 },
        sm: { x: 2264, y: 688, width: 72, height: 99 },
        product: { x: 2264, y: 880, width: 72, height: 74 },
        support: { x: 2264, y: 1050, width: 72, height: 38 },
        ga: { x: 2264, y: 1198, width: 72, height: 37 },
      },
      labels: {
        north_america: {
          blocks: [
            {
              x: 433, top: 286, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 210, top: 407, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'North', size: 40, weight: 800 },
                { text: 'America', size: 40, weight: 800 },
              ],
            },
          ],
        },
        emea: {
          blocks: [
            {
              x: 433, top: 557, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+25% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 225, top: 674, anchor: 'start', lines: [{ text: 'EMEA', size: 40, weight: 800 }] },
          ],
        },
        latam: {
          blocks: [
            {
              x: 433, top: 779, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+32% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 225, top: 879, anchor: 'start', lines: [{ text: 'LATAM', size: 40, weight: 800 }] },
          ],
        },
        apac: {
          blocks: [
            {
              x: 433, top: 974, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+23% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 225, top: 1067, anchor: 'start', lines: [{ text: 'APAC', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 900, top: 489, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1367, top: 337, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '78% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1367, top: 1080, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1833, top: 259, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '3% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1833, top: 913, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2153, top: 478, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 32, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2400, top: 330, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '6% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 696, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'S&M ($0.8B)', size: 32, weight: 800 },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        product: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 881, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Product ($0.6B)', size: 32, weight: 800 },
                { text: '24% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        support: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1050, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Support ($0.3B)', size: 32, weight: 800 },
                { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1204, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'G&A ($0.3B)', size: 32, weight: 800 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: 'North America', value: 1.1, notes: ['+8% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 0.7, notes: ['+25% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'latam', col: 0, order: 2, type: 'source', label: 'LATAM', value: 0.5, notes: ['+32% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 0.3, notes: ['+23% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.7, notes: ['+18% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.1, notes: ['78% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0.6, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.1, notes: ['3% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.0, valueText: '($2.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.1, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['6% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'sm', col: 5, order: 1, type: 'cost', label: 'S&M', value: 0.8, notes: ['28% of revenue', '+3pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'product', col: 5, order: 2, type: 'cost', label: 'Product', value: 0.6, notes: ['24% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'support', col: 5, order: 3, type: 'cost', label: 'Support', value: 0.3, notes: ['12% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.3, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'north_america', target: 'revenue', value: 1.1, width: 143, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 0.7, width: 92, sourceOrder: 0, targetOrder: 1 },
      { source: 'latam', target: 'revenue', value: 0.5, width: 58, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'revenue', value: 0.3, width: 39, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 2.1, width: 260, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 0.6, width: 73, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.1, width: 12, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.0, width: 248, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 0.1, width: 12, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 0.1, width: 12, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 0.8, width: 99, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'product', value: 0.6, width: 74, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'support', value: 0.3, width: 38, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.3, width: 37, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Airbnb · 2026 财年第一季度',
        meta: {
          title: 'Airbnb 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +8%'] },
          emea: { label: '欧洲、中东和非洲', notes: ['同比 +25%'] },
          latam: { label: '拉美', notes: ['同比 +32%'] },
          apac: { label: '亚太', notes: ['同比 +23%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 78%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 3%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (1 个百分点)'] },
          sm: { label: '销售与市场', notes: ['占收入 28%', '同比 +3 个百分点'] },
          product: { label: '产品', notes: ['占收入 24%', '同比 (1 个百分点)'] },
          support: { label: '客服支持', notes: ['占收入 12%', '同比 (1 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            north_america: {
              blocks: [
                {
                  x: 433, top: 286, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 225, top: 407, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '北美', size: 40, weight: 800 },
                    { text: '地区', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            emea: {
              blocks: [
                {
                  x: 433, top: 557, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +25%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 225, top: 659, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '欧洲/中东', size: 34, weight: 800 },
                    { text: '和非洲', size: 34, weight: 800 },
                  ],
                },
              ],
            },
            latam: {
              blocks: [
                {
                  x: 433, top: 779, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +32%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 225, top: 879, anchor: 'start', lines: [{ text: '拉美', size: 40, weight: 800 }] },
              ],
            },
            apac: {
              blocks: [
                {
                  x: 433, top: 974, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +23%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 225, top: 1067, anchor: 'start', lines: [{ text: '亚太', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 900, top: 489, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1367, top: 337, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 78%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1367, top: 1080, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 38, weight: 800 },
                    { text: '成本', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1833, top: 259, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 3%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1833, top: 913, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 2153, top: 478, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '其他', size: 32, weight: 800 },
                    { text: '$value', size: 32, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2400, top: 330, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 696, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '销售与市场 ($0.8B)', size: 32, weight: 800 },
                    { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            product: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 881, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '产品 ($0.6B)', size: 32, weight: 800 },
                    { text: '占收入 24%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            support: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1050, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '客服支持 ($0.3B)', size: 32, weight: 800 },
                    { text: '占收入 12%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1204, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '管理费用 ($0.3B)', size: 32, weight: 800 },
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
