/* ====================================================================
 * Snap - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/snap-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const BLACK = '#000000';
  const NOTE = '#6f7073';
  const TITLE = '#154f79';
  const YELLOW = '#fff900';
  const YELLOW_LINK = '#f6f57f';
  const GREEN = '#279f26';
  const GREEN_LABEL = '#078f43';
  const GREEN_LINK = '#98ca96';
  const RED = '#d90000';
  const RED_LABEL = '#921000';
  const RED_LINK = '#e18484';
  const SCALE = 376 / 1529;
  const RIGHT_LABEL_X = 2432;
  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${Math.min(31, height / 4)}" fill="${BLACK}"/>
      ${lines
        .map(
          (line, index) =>
            `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const userStack = (labels) => `
    <g>
      <path d="M128 417L157 461H100Z" fill="${BLACK}"/>
      <rect x="60" y="461" width="132" height="707" rx="11" fill="${BLACK}"/>
      ${labels
        .map(
          (line) =>
            `<text x="126" y="${line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(34, 226, 187, 168, [
        { text: 'DAU', y: 57, size: 35, weight: 800 },
        { text: '483M', y: 103, size: 32, weight: 800 },
        { text: '+5% Y/Y', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '92M', y: 550, size: 35, weight: 800 },
        { text: '(7%) Y/Y', y: 588, size: 24 },
        { text: '97M', y: 843, size: 35, weight: 800 },
        { text: '(2%) Y/Y', y: 882, size: 24 },
        { text: '294M', y: 1070, size: 35, weight: 800 },
        { text: '+12% Y/Y', y: 1110, size: 24 },
      ])}
      ${kpiCard(332, 1145, 209, 135, [
        { text: 'ARPU', y: 48, size: 29, weight: 800 },
        { text: '$3.17', y: 82, size: 27 },
        { text: '+7% Y/Y', y: 116, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">DAU = Daily Active Users</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = Average Revenue Per User</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(34, 226, 187, 168, [
        { text: 'DAU', y: 57, size: 35, weight: 800 },
        { text: '483M', y: 103, size: 32, weight: 800 },
        { text: '同比 +5%', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '92M', y: 550, size: 35, weight: 800 },
        { text: '同比 (7%)', y: 588, size: 24 },
        { text: '97M', y: 843, size: 35, weight: 800 },
        { text: '同比 (2%)', y: 882, size: 24 },
        { text: '294M', y: 1070, size: 35, weight: 800 },
        { text: '同比 +12%', y: 1110, size: 24 },
      ])}
      ${kpiCard(332, 1145, 209, 135, [
        { text: 'ARPU', y: 48, size: 29, weight: 800 },
        { text: '$3.17', y: 82, size: 27 },
        { text: '同比 +7%', y: 116, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">DAU = 日活跃用户</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = 每用户平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'snap-q1-fy26',
    name: 'Snap · Q1 FY26',
    company: 'Snap',
    meta: {
      company: 'Snap',
      title: 'Snap Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/snap-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2028,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 208,
      logoHeight: 208,
      logoY: 231,
      logoViewBox: '0 0 208 208',
      logoSvg: BUSINESS_ICONS.snapLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: YELLOW, label: BLACK },
        hub: { node: YELLOW, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: YELLOW_LINK,
        hub: YELLOW_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        north_america: { x: 393, y: 455, width: 72, height: h(851) },
        europe: { x: 393, y: 819, width: 72, height: h(324) },
        rest_of_world: { x: 393, y: 1041, width: 72, height: h(354) },
        revenue: { x: 859, y: 622, width: 72, height: h(1529) },
        gross_profit: { x: 1324, y: 478, width: 72, height: h(864) },
        cost_of_revenue: { x: 1324, y: 949, width: 72, height: h(665) },
        operating_loss: { x: 1599, y: 905, width: 72, height: h(74) },
        operating_expenses: { x: 1794, y: 635, width: 73, height: h(938) },
        rnd: { x: 2261, y: 401, width: 72, height: h(478) },
        sm: { x: 2260, y: 752, width: 73, height: h(239) },
        ga: { x: 2261, y: 1092, width: 72, height: h(221) },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        north_america: {
          blocks: [
            {
              x: 428, top: 365, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 372, top: 515, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'North', size: 40, weight: 800 },
                { text: 'America', size: 40, weight: 800 },
              ],
            },
          ],
        },
        europe: {
          blocks: [
            {
              x: 428, top: 724, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+45% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 371, top: 838, anchor: 'end',
              lines: [{ text: 'Europe', size: 40, weight: 800 }],
            },
          ],
        },
        rest_of_world: {
          blocks: [
            {
              x: 428, top: 950, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+15% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 366, top: 1035, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Rest', size: 40, weight: 800 },
                { text: 'of world', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 895, top: 477, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1360, top: 299, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '57% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1361, top: 1135, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 33, weight: 800 },
                { text: 'revenue', size: 33, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1636, top: 947, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'loss', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '(5%) margin', size: 29, weight: 400, color: NOTE },
                { text: '+9pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1812, top: 478, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 392, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '31% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 740, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '16% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1078, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'north_america', col: 0, order: 0, type: 'source',
        label: ['North', 'America'], value: 851, notes: ['+2% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'europe', col: 0, order: 1, type: 'source',
        label: 'Europe', value: 324, notes: ['+45% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'rest_of_world', col: 0, order: 2, type: 'source',
        label: 'Rest of world', value: 354, notes: ['+15% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1529, notes: ['+12% Y/Y'],
        color: YELLOW, labelColor: BLACK, linkTint: YELLOW_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 864, notes: ['57% margin', '+3pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 665,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -74, notes: ['(5%) margin', '+9pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 938,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 0, type: 'cost',
        label: 'R&D', value: 478, notes: ['31% of revenue', '+0pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 1, type: 'cost',
        label: 'S&M', value: 239, notes: ['16% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 2, type: 'cost',
        label: 'G&A', value: 221, notes: ['14% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'north_america', target: 'revenue', value: 851, width: h(851), sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 324, width: h(324), sourceOrder: 0, targetOrder: 1 },
      { source: 'rest_of_world', target: 'revenue', value: 354, width: h(354), sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 864, width: h(864), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 665, width: h(665), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 864, width: h(864), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 74, width: h(74), sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 478, width: h(478), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 239, width: h(239), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 221, width: h(221), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Snap · 2026 财年第一季度',
        meta: {
          title: 'Snap 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1500,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +2%'] },
          europe: { label: '欧洲', notes: ['同比 +45%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +15%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 57%', '同比 +3 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (5%)', '同比 +9 个百分点'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 31%', '同比 +0 个百分点'] },
          sm: { label: '销售与营销', notes: ['占收入 16%', '同比 (3 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 14%', '同比 (3 个百分点)'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            north_america: {
              blocks: [
                {
                  x: 428, top: 365, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 344, top: 533, anchor: 'middle',
                  lines: [{ text: '北美', size: 40, weight: 800 }],
                },
              ],
            },
            europe: {
              blocks: [
                {
                  x: 428, top: 724, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +45%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 371, top: 838, anchor: 'end',
                  lines: [{ text: '欧洲', size: 40, weight: 800 }],
                },
              ],
            },
            rest_of_world: {
              blocks: [
                {
                  x: 428, top: 950, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +15%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 366, top: 1035, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '世界', size: 40, weight: 800 },
                    { text: '其他地区', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 895, top: 477, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1360, top: 299, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 57%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1361, top: 1135, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 33, weight: 800 },
                    { text: '成本', size: 33, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1636, top: 947, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 36, weight: 800 },
                    { text: '亏损', size: 36, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                    { text: '利润率 (5%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +9 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1812, top: 478, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 36, weight: 800 },
                    { text: '费用', size: 36, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 392, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 31%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 740, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 16%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1078, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 14%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 28, weight: 400, color: NOTE },
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
