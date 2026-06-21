/* ====================================================================
 * Sony - FY25 income statement (¥B)
 * Reconstructed from input/processed/sony-fy25.png as a fixed d3-sankey
 * layout with a reusable SVG Sony wordmark annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#777777';
  const BLACK = '#000000';
  const GRAY_LINK = '#8f8f8d';
  const ORANGE = '#d95f02';
  const ORANGE_LINK = '#e8b27f';
  const PINK = '#e7298a';
  const PINK_LINK = '#e58abd';
  const GOLD = '#c49d2a';
  const GOLD_LINK = '#ddce99';
  const BLUE = '#28445c';
  const BLUE_LINK = '#a2afb8';
  const DEEP_GREEN = '#023020';
  const DEEP_GREEN_LINK = '#8fa59b';
  const OTHER = '#666666';
  const OTHER_LINK = '#cfcfcf';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9acc99';
  const RED = '#cc0000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const sonyWordmark = BUSINESS_ICONS.sonyCompanyWordmark || `
    <text x="0" y="104" font-family="Times New Roman, Georgia, serif" font-size="116" font-weight="900" fill="${BLACK}"
      textLength="467" lengthAdjust="spacingAndGlyphs">SONY</text>`;

  function annotations(unitText) {
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="58" y="258" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
        <g transform="translate(801 334)">${sonyWordmark}</g>
      </g>`;
  }

  const annotationsEn = annotations('in yen');
  const annotationsZh = annotations('以日元计');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sony-fy25',
    name: 'Sony · FY25',
    company: 'Sony',
    meta: {
      company: 'Sony',
      title: 'Sony FY25 Income Statement',
      period: 'FY25',
      periodNote: 'Ending Mar. 2026',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/sony-fy25.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 1820,
      periodX: 2445,
      periodY: 252,
      periodNoteY: 306,
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
        source: GRAY_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.02645,
      nodes: {
        game_network: { x: 436, y: 410, width: 72 },
        music: { x: 436, y: 646, width: 72 },
        pictures: { x: 436, y: 823, width: 72 },
        technology: { x: 436, y: 969, width: 72 },
        imaging_sensing: { x: 436, y: 1144, width: 72 },
        other_revenue: { x: 436, y: 1300, width: 72 },
        segment_sales: { x: 811, y: 596, width: 72 },
        eliminations: { x: 1185, y: 1102, width: 72 },
        revenue: { x: 1185, y: 669, width: 72 },
        gross_profit: { x: 1560, y: 589, width: 72 },
        cost_of_sales: { x: 1560, y: 864, width: 72 },
        operating_profit: { x: 1936, y: 507, width: 72 },
        operating_expenses: { x: 1936, y: 733, width: 72 },
        net_profit: { x: 2308, y: 407, width: 72 },
        tax: { x: 2308, y: 626, width: 72 },
        other_after_operating: { x: 2308, y: 723, width: 72 },
        sga: { x: 2308, y: 831, width: 72 },
        other_expenses: { x: 2308, y: 1082, width: 72 },
      },
      labels: {
        game_network: {
          blocks: [
            {
              x: 471, top: 316, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: ORANGE },
                { text: '+0% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 386, top: 430, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Game & Network', size: 40, weight: 800, color: ORANGE },
                { text: '10% operating margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        music: {
          blocks: [
            {
              x: 471, top: 550, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: PINK },
                { text: '+15% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 386, top: 626, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Music', size: 40, weight: 800, color: PINK },
                { text: '21% operating margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        pictures: {
          blocks: [
            {
              x: 471, top: 746, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: GOLD },
                { text: '+0% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 386, top: 806, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Pictures', size: 40, weight: 800, color: GOLD },
                { text: '7% operating margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        technology: {
          blocks: [
            {
              x: 471, top: 880, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '(6%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 386, top: 960, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Technology', size: 40, weight: 800, color: BLUE },
                { text: '7% operating margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        imaging_sensing: {
          blocks: [
            {
              x: 471, top: 1055, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: DEEP_GREEN },
                { text: '+20% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 386, top: 1135, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Imaging & Sensing', size: 40, weight: 800, color: DEEP_GREEN },
                { text: '17% operating margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 471, top: 1210, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 39, weight: 400, color: OTHER },
                { text: '(8%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 386, top: 1286, anchor: 'end',
              lines: [{ text: 'Other', size: 40, weight: 800, color: OTHER }],
            },
          ],
        },
        segment_sales: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1221, top: 515, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Sales', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1221, top: 1130, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Elimination', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1596, top: 410, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '31% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1596, top: 1128, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of sales', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1972, top: 307, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '12% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1972, top: 803, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2398, top: 330, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '8% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2450, top: 596, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_after_operating: {
          blocks: [
            {
              x: 2450, top: 692, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2450, top: 844, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_expenses: {
          blocks: [
            {
              x: 2450, top: 1037, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'game_network', col: 0, order: 0, type: 'source', label: 'Game & Network', value: 4686, valueText: '¥4,686B', notes: ['+0% Y/Y', '10% operating margin'], color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK },
      { id: 'music', col: 0, order: 1, type: 'source', label: 'Music', value: 2120, valueText: '¥2,120B', notes: ['+15% Y/Y', '21% operating margin'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'pictures', col: 0, order: 2, type: 'source', label: 'Pictures', value: 1499, valueText: '¥1,499B', notes: ['+0% Y/Y', '7% operating margin'], color: GOLD, labelColor: GOLD, linkTint: GOLD_LINK },
      { id: 'technology', col: 0, order: 3, type: 'source', label: 'Technology', value: 2261, valueText: '¥2,261B', notes: ['(6%) Y/Y', '7% operating margin'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'imaging_sensing', col: 0, order: 4, type: 'source', label: 'Imaging & Sensing', value: 2152, valueText: '¥2,152B', notes: ['+20% Y/Y', '17% operating margin'], color: DEEP_GREEN, labelColor: DEEP_GREEN, linkTint: DEEP_GREEN_LINK },
      { id: 'other_revenue', col: 0, order: 5, type: 'source', label: 'Other', value: 89, valueText: '¥89B', notes: ['(8%) Y/Y'], color: OTHER, labelColor: OTHER, linkTint: OTHER_LINK },
      { id: 'segment_sales', col: 1, order: 0, type: 'hub', label: '', value: 12807, color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Elimination', value: 327, valueText: '(¥327B)' },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Sales', value: 12480, valueText: '¥12,480B', notes: ['+4% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3844, valueText: '¥3,844B', notes: ['31% margin', '+1pp Y/Y'] },
      { id: 'cost_of_sales', col: 3, order: 1, type: 'cost', label: 'Cost of sales', value: 8635, valueText: '(¥8,635B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 1448, valueText: '¥1,448B', notes: ['12% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: 'Operating expenses', value: 2397, valueText: '(¥2,397B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1055, valueText: '¥1,055B', notes: ['8% margin', '(1pp) Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 367, valueText: '(¥367B)' },
      { id: 'other_after_operating', col: 5, order: 2, type: 'cost', label: 'Other', value: 25, valueText: '(¥25B)' },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 2299, valueText: '(¥2,299B)' },
      { id: 'other_expenses', col: 5, order: 4, type: 'cost', label: 'Other expenses', value: 98, valueText: '(¥98B)' },
    ],

    links: [
      { source: 'game_network', target: 'segment_sales', value: 4686, targetOrder: 0, linkTint: { left: ORANGE_LINK, right: ORANGE_LINK } },
      { source: 'music', target: 'segment_sales', value: 2120, targetOrder: 1, linkTint: { left: PINK_LINK, right: PINK_LINK } },
      { source: 'pictures', target: 'segment_sales', value: 1499, targetOrder: 2, linkTint: { left: GOLD_LINK, right: GOLD_LINK } },
      { source: 'technology', target: 'segment_sales', value: 2261, targetOrder: 3, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'imaging_sensing', target: 'segment_sales', value: 2152, targetOrder: 4, linkTint: { left: DEEP_GREEN_LINK, right: DEEP_GREEN_LINK } },
      { source: 'other_revenue', target: 'segment_sales', value: 89, targetOrder: 5, linkTint: { left: OTHER_LINK, right: OTHER_LINK } },
      { source: 'segment_sales', target: 'revenue', value: 12480, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_sales', target: 'eliminations', value: 327, sourceOrder: 1, targetOrder: 0 },
      { source: 'revenue', target: 'gross_profit', value: 3844, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 8635, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 1448, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2397, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 1055, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 367, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_after_operating', value: 25, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2299, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_expenses', value: 98, sourceOrder: 1, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Sony · 2025 财年',
        meta: {
          title: 'Sony 2025 财年利润表',
          period: '2025 财年',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1540,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          game_network: { label: '游戏与网络', notes: ['同比 +0%', '营业利润率 10%'] },
          music: { label: '音乐', notes: ['同比 +15%', '营业利润率 21%'] },
          pictures: { label: '影视', notes: ['同比 +0%', '营业利润率 7%'] },
          technology: { label: '技术', notes: ['同比 (6%)', '营业利润率 7%'] },
          imaging_sensing: { label: '成像与传感', notes: ['同比 +20%', '营业利润率 17%'] },
          other_revenue: { label: '其他', notes: ['同比 (8%)'] },
          eliminations: { label: '抵销' },
          revenue: { label: '销售额', notes: ['同比 +4%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          other_after_operating: { label: '其他' },
          sga: { label: '销售、一般及行政' },
          other_expenses: { label: '其他费用' },
        },
        layout: {
          labels: {
            game_network: {
              blocks: [
                {
                  x: 471, top: 316, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: ORANGE },
                    { text: '同比 +0%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 386, top: 430, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '游戏与网络', size: 40, weight: 800, color: ORANGE },
                    { text: '营业利润率 10%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            music: {
              blocks: [
                {
                  x: 471, top: 550, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: PINK },
                    { text: '同比 +15%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 386, top: 626, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '音乐', size: 40, weight: 800, color: PINK },
                    { text: '营业利润率 21%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            pictures: {
              blocks: [
                {
                  x: 471, top: 746, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: GOLD },
                    { text: '同比 +0%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 386, top: 806, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '影视', size: 40, weight: 800, color: GOLD },
                    { text: '营业利润率 7%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            technology: {
              blocks: [
                {
                  x: 471, top: 880, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: BLUE },
                    { text: '同比 (6%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 386, top: 960, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '技术', size: 40, weight: 800, color: BLUE },
                    { text: '营业利润率 7%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            imaging_sensing: {
              blocks: [
                {
                  x: 471, top: 1055, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: DEEP_GREEN },
                    { text: '同比 +20%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 386, top: 1135, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '成像与传感', size: 40, weight: 800, color: DEEP_GREEN },
                    { text: '营业利润率 17%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 471, top: 1210, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 39, weight: 400, color: OTHER },
                    { text: '同比 (8%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 386, top: 1286, anchor: 'end',
                  lines: [{ text: '其他', size: 40, weight: 800, color: OTHER }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1221, top: 515, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '销售额', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +4%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            eliminations: {
              blocks: [
                {
                  x: 1221, top: 1130, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '抵销', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1596, top: 410, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 31%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1596, top: 1128, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售成本', size: 36, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 35, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1972, top: 307, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 12%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1972, top: 803, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 36, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 36, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 35, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2398, top: 330, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 8%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2450, top: 596, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other_after_operating: {
              blocks: [
                {
                  x: 2450, top: 692, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2450, top: 844, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售、一般及行政', size: 28, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other_expenses: {
              blocks: [
                {
                  x: 2450, top: 1037, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 30, weight: 400, color: RED_LABEL },
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
