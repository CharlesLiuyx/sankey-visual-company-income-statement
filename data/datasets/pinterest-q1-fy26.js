/* ====================================================================
 * Pinterest - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/pinterest-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const NOTE = '#6f7073';
  const TITLE = '#154f79';
  const BLUE = '#183078';
  const BLUE_LINK = '#909bbb';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#078f43';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#901000';
  const RED_LINK = '#e08585';
  const SCALE = 343 / 1008;
  const RIGHT_LABEL_X = 2520;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${Math.min(31, height / 4)}" fill="${RED}"/>
      ${lines
        .map(
          (line) =>
            `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const userStack = (labels) => `
    <g>
      <path d="M128 417L157 461H100Z" fill="${RED}"/>
      <rect x="60" y="461" width="132" height="707" rx="11" fill="${RED}"/>
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
        { text: 'MAU', y: 57, size: 35, weight: 800 },
        { text: '631M', y: 103, size: 32, weight: 800 },
        { text: '+11% Y/Y', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '106M', y: 540, size: 35, weight: 800 },
        { text: '+4% Y/Y', y: 580, size: 24 },
        { text: '159M', y: 863, size: 35, weight: 800 },
        { text: '+7% Y/Y', y: 903, size: 24 },
        { text: '367M', y: 1089, size: 35, weight: 800 },
        { text: '+15% Y/Y', y: 1129, size: 24 },
      ])}
      ${kpiCard(321, 1128, 209, 151, [
        { text: 'ARPU', y: 64, size: 29, weight: 800 },
        { text: '$1.61', y: 98, size: 27 },
        { text: '+6% Y/Y', y: 132, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">MAU = Monthly Active Users</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = Average Revenue Per User</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(34, 226, 187, 168, [
        { text: 'MAU', y: 57, size: 35, weight: 800 },
        { text: '631M', y: 103, size: 32, weight: 800 },
        { text: '同比 +11%', y: 141, size: 20, weight: 500 },
      ])}
      ${userStack([
        { text: '106M', y: 540, size: 35, weight: 800 },
        { text: '同比 +4%', y: 580, size: 24 },
        { text: '159M', y: 863, size: 35, weight: 800 },
        { text: '同比 +7%', y: 903, size: 24 },
        { text: '367M', y: 1089, size: 35, weight: 800 },
        { text: '同比 +15%', y: 1129, size: 24 },
      ])}
      ${kpiCard(321, 1128, 209, 151, [
        { text: 'ARPU', y: 64, size: 29, weight: 800 },
        { text: '$1.61', y: 98, size: 27 },
        { text: '同比 +6%', y: 132, size: 21 },
      ])}
      <text x="250" y="1316" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">MAU = 月活跃用户</text>
      <text x="278" y="1356" text-anchor="middle" font-size="28" font-weight="400" fill="${NOTE}">ARPU = 每用户平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'pinterest-q1-fy26',
    name: 'Pinterest · Q1 FY26',
    company: 'Pinterest',
    meta: {
      company: 'Pinterest',
      title: 'Pinterest Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/pinterest-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2248,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 220,
      logoHeight: 220,
      logoY: 220,
      logoViewBox: '0 0 208 208',
      logoSvg: BUSINESS_ICONS.pinterestLogo || '',
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
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        us_canada: { x: 432, y: 422, width: 73, height: 255 },
        europe: { x: 432, y: 839, width: 73, height: 63 },
        rest_of_world: { x: 432, y: 1046, width: 73, height: 24 },
        revenue: { x: 899, y: 583, width: 72, height: 343 },
        gross_profit: { x: 1367, y: 421, width: 71, height: 260 },
        cost_of_revenue: { x: 1367, y: 982, width: 71, height: 80 },
        operating_loss: { x: 1587, y: 978, width: 72, height: 26 },
        operating_expenses: { x: 1834, y: 588, width: 72, height: 288 },
        rnd: { x: 2301, y: 412, width: 72, height: 128 },
        sm: { x: 2301, y: 713, width: 72, height: 107 },
        ga: { x: 2301, y: 984, width: 72, height: 34 },
        restructuring: { x: 2301, y: 1198, width: 72, height: 15 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        us_canada: {
          blocks: [
            {
              x: 468, top: 330, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+13% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 392, top: 512, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'US &', size: 40, weight: 800 },
                { text: 'Canada', size: 40, weight: 800 },
              ],
            },
          ],
        },
        europe: {
          blocks: [
            {
              x: 468, top: 741, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+27% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 392, top: 852, anchor: 'end',
              lines: [{ text: 'Europe', size: 40, weight: 800 }],
            },
          ],
        },
        rest_of_world: {
          blocks: [
            {
              x: 468, top: 953, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+59% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 392, top: 1028, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'Rest of', size: 40, weight: 800 },
                { text: 'the world', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 935, top: 438, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1403, top: 239, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '76% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1403, top: 1088, anchor: 'middle', lineGap: 8,
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
              x: 1623, top: 1028, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'loss', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '(8%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1870, top: 424, anchor: 'middle', lineGap: 9,
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
              x: RIGHT_LABEL_X, top: 421, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '38% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 721, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '32% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 986, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '10% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1204, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '5% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'us_canada', col: 0, order: 0, type: 'source',
        label: ['US &', 'Canada'], value: 750, notes: ['+13% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'europe', col: 0, order: 1, type: 'source',
        label: 'Europe', value: 186, notes: ['+27% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'rest_of_world', col: 0, order: 2, type: 'source',
        label: ['Rest of', 'the world'], value: 72, notes: ['+59% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1008, valueText: '$1,008M', notes: ['+18% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 769, notes: ['76% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 239,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -80, notes: ['(8%) margin', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 849,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 0, type: 'cost',
        label: 'R&D', value: 381, notes: ['38% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 1, type: 'cost',
        label: 'S&M', value: 318, notes: ['32% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 2, type: 'cost',
        label: 'G&A', value: 104, notes: ['10% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'restructuring', col: 5, order: 3, type: 'cost',
        label: 'Restructuring', value: 47, notes: ['5% of revenue', '+5pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'us_canada', target: 'revenue', value: 750, width: 255, sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 186, width: 63, sourceOrder: 0, targetOrder: 1 },
      { source: 'rest_of_world', target: 'revenue', value: 72, width: 24, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 769, width: 260, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 239, width: 80, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 769, width: 260, sourceOrder: 0, targetOrder: 0, linkTint: RED_LINK },
      { source: 'operating_loss', target: 'operating_expenses', value: 80, width: 26, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 381, width: 128, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 318, width: 107, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 104, width: 34, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 47, width: 15, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Pinterest · 2026 财年第一季度',
        meta: {
          title: 'Pinterest 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1660,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          us_canada: { label: '美国和加拿大', notes: ['同比 +13%'] },
          europe: { label: '欧洲', notes: ['同比 +27%'] },
          rest_of_world: { label: '世界其他地区', notes: ['同比 +59%'] },
          revenue: { label: '收入', notes: ['同比 +18%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 76%', '同比 0 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_loss: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (4 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          rnd: { label: '研发', notes: ['占收入 38%', '同比 (1 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 32%', '同比 +2 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
          restructuring: { label: '重组', notes: ['占收入 5%', '同比 +5 个百分点'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            us_canada: {
              blocks: [
                {
                  x: 468, top: 330, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +13%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 392, top: 526, anchor: 'end', lineGap: 10,
                  lines: [
                    { text: '美国和', size: 40, weight: 800 },
                    { text: '加拿大', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            europe: {
              blocks: [
                {
                  x: 468, top: 741, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +27%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 392, top: 852, anchor: 'end',
                  lines: [{ text: '欧洲', size: 40, weight: 800 }],
                },
              ],
            },
            rest_of_world: {
              blocks: [
                {
                  x: 468, top: 953, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +59%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 392, top: 1028, anchor: 'end', lineGap: 10,
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
                  x: 935, top: 438, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +18%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1403, top: 239, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 76%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1403, top: 1088, anchor: 'middle', lineGap: 8,
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
                  x: 1623, top: 1028, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 36, weight: 800 },
                    { text: '亏损', size: 36, weight: 800 },
                    { text: '$value', size: 34, weight: 400 },
                    { text: '利润率 (8%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1870, top: 424, anchor: 'middle', lineGap: 9,
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
                  x: RIGHT_LABEL_X, top: 421, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 38%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 721, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 32%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 986, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 10%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            restructuring: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1204, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '重组', size: 31, weight: 800 },
                    { text: '$value', size: 29, weight: 400 },
                    { text: '占收入 5%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 28, weight: 400, color: NOTE },
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
