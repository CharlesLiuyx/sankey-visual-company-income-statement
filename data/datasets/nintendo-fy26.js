/* ====================================================================
 * Nintendo - FY26 income statement (¥B)
 * Reconstructed from input/processed/nintendo-fy26.png as a fixed
 * d3-sankey layout with validated runtime raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#6f6f6f';
  const BLACK = '#000000';
  const GRAY_LINK = '#8f8f8d';
  const GREEN = '#25a525';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9aca99';
  const RED = '#d40000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';

  function annotations(unitText) {
    return `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="242" y="276" font-size="40" font-weight="800" fill="${TITLE}">${unitText}</text>
      </g>`;
  }

  const annotationsEn = annotations('in yen');
  const annotationsZh = annotations('以日元计');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nintendo-fy26',
    name: 'Nintendo · FY26',
    company: 'Nintendo',
    meta: {
      company: 'Nintendo',
      title: 'Nintendo FY26 Income Statement',
      period: 'FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '¥',
      unit: 'B',
      decimals: 0,
      referenceImage: { src: 'input/processed/nintendo-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2108,
      periodX: 1334,
      periodY: 1337,
      periodNoteY: 1380,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-logo',
        href: 'data/assets/raster-annotations/nintendo/company-logo.png',
        x: 880,
        y: 216,
        width: 622,
        height: 182,
      },
      {
        key: 'switch-console-icon',
        href: 'data/assets/raster-annotations/nintendo/switch-console-icon.png',
        x: 49,
        y: 552,
        width: 168,
        height: 176,
      },
      {
        key: 'switch-wordmark',
        href: 'data/assets/raster-annotations/nintendo/switch-wordmark.png',
        x: 705,
        y: 406,
        width: 248,
        height: 96,
      },
      {
        key: 'mobile-store-icons',
        href: 'data/assets/raster-annotations/nintendo/mobile-store-icons.png',
        x: 506,
        y: 1200,
        width: 210,
        height: 100,
      },
    ],

    layout: {
      scale: 0.197,
      nodes: {
        hardware: { x: 418, y: 480, width: 72, height: 294 },
        software: { x: 418, y: 971, width: 72, height: 147 },
        dedicated_video_game_platform: { x: 792, y: 599, width: 72, height: 441 },
        other_revenue: { x: 792, y: 1316, width: 72, height: 15 },
        revenue: { x: 1165, y: 688, width: 72, height: 456 },
        gross_profit: { x: 1538, y: 598, width: 72, height: 179 },
        cost_of_sales: { x: 1538, y: 952, width: 72, height: 277 },
        operating_profit: { x: 1913, y: 509, width: 72, height: 71 },
        operating_expenses: { x: 1913, y: 761, width: 72, height: 108 },
        other_income: { x: 2175, y: 392, width: 72, height: 36 },
        net_profit: { x: 2287, y: 410, width: 72, height: 61 },
        tax: { x: 2287, y: 628, width: 72, height: 46 },
        other_sga: { x: 2287, y: 819, width: 72, height: 45 },
        rnd: { x: 2287, y: 1052, width: 72, height: 35 },
        advertising: { x: 2287, y: 1284, width: 72, height: 29 },
      },
      labels: {
        hardware: {
          blocks: [
            {
              x: 454, top: 389, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+215% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 212, top: 482, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Hardware', size: 34, weight: 800 },
                { text: 'Switch 2', size: 29, weight: 400, color: NOTE },
                { text: '19.9M units', size: 29, weight: 400, color: NOTE },
                { text: '(New)', size: 29, weight: 400, color: NOTE },
                { text: '', size: 32, weight: 400, color: NOTE },
                { text: 'Switch 1', size: 29, weight: 400, color: NOTE },
                { text: '3.8M units', size: 29, weight: 400, color: NOTE },
                { text: '(65%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        software: {
          blocks: [
            {
              x: 454, top: 878, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 228, top: 998, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Software', size: 34, weight: 800 },
                { text: '186M units', size: 29, weight: 400, color: NOTE },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
                { text: '55% Digital', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        dedicated_video_game_platform: {
          blocks: [
            {
              x: 828, top: 504, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+107% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 828, top: 1222, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(10%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 657, top: 1306, anchor: 'start',
              lines: [{ text: 'Other', size: 34, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1201, top: 548, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+99% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1574, top: 421, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '39% margin', size: 29, weight: 400, color: NOTE },
                { text: '(22pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_sales: {
          blocks: [
            {
              x: 1574, top: 1252, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of sales', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1949, top: 332, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '16% margin', size: 29, weight: 400, color: NOTE },
                { text: '(9pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1949, top: 890, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 34, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2169, top: 309, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2384, top: 374, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '13% margin', size: 29, weight: 400, color: NOTE },
                { text: '(11pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2464, top: 618, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_sga: {
          blocks: [
            {
              x: 2472, top: 806, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Other SG&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2466, top: 1032, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'R&D', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 2466, top: 1246, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Advertising', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                { text: '6% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'hardware', col: 0, order: 0, type: 'source',
        label: 'Hardware', value: 1494, valueText: '¥1,494B',
        notes: ['+215% Y/Y', 'Switch 2: 19.9M units (New)', 'Switch 1: 3.8M units, (65%) Y/Y'],
      },
      {
        id: 'software', col: 0, order: 1, type: 'source',
        label: 'Software', value: 746, valueText: '¥746B',
        notes: ['+22% Y/Y', '186M units', '+19% Y/Y', '55% Digital'],
      },
      {
        id: 'dedicated_video_game_platform', col: 1, order: 0, type: 'hub',
        label: 'Dedicated video game platform', value: 2240, valueText: '¥2,240B', notes: ['+107% Y/Y'],
      },
      {
        id: 'other_revenue', col: 1, order: 1, type: 'source',
        label: 'Other', value: 74, valueText: '¥74B', notes: ['(10%) Y/Y'],
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 2313, valueText: '¥2,313B', notes: ['+99% Y/Y'],
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 909, valueText: '¥909B', notes: ['39% margin', '(22pp) Y/Y'],
      },
      {
        id: 'cost_of_sales', col: 3, order: 1, type: 'cost',
        label: 'Cost of sales', value: 1404, valueText: '(¥1,404B)',
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 360, valueText: '¥360B', notes: ['16% margin', '(9pp) Y/Y'],
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: 'Operating expenses', value: 549, valueText: '(¥549B)',
      },
      {
        id: 'other_income', col: 5, order: 0, type: 'profit',
        label: 'Other', value: 182, valueText: '¥182B',
      },
      {
        id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 310, valueText: '¥310B', notes: ['13% margin', '(11pp) Y/Y'],
      },
      {
        id: 'tax', col: 6, order: 1, type: 'cost',
        label: 'Tax', value: 232, valueText: '(¥232B)',
      },
      {
        id: 'other_sga', col: 6, order: 2, type: 'cost',
        label: 'Other SG&A', value: 226, valueText: '(¥226B)', notes: ['10% of revenue', '(7pp) Y/Y'],
      },
      {
        id: 'rnd', col: 6, order: 3, type: 'cost',
        label: 'R&D', value: 178, valueText: '(¥178B)', notes: ['8% of revenue', '(5pp) Y/Y'],
      },
      {
        id: 'advertising', col: 6, order: 4, type: 'cost',
        label: 'Advertising', value: 145, valueText: '(¥145B)', notes: ['6% of revenue', '(1pp) Y/Y'],
      },
    ],

    links: [
      { source: 'hardware', target: 'dedicated_video_game_platform', value: 1494, width: 294, targetOrder: 0 },
      { source: 'software', target: 'dedicated_video_game_platform', value: 746, width: 147, targetOrder: 1 },
      { source: 'dedicated_video_game_platform', target: 'revenue', value: 2240, width: 441, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 74, width: 15, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 909, width: 179, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_sales', value: 1404, width: 277, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 360, width: 71, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 549, width: 108, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 128, width: 25, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 232, width: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 182, width: 36, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_sga', value: 226, width: 45, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 178, width: 35, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'advertising', value: 145, width: 29, sourceOrder: 2 },
    ],

    i18n: {
      zh: {
        name: 'Nintendo · 2026 财年',
        meta: {
          title: 'Nintendo 2026 财年利润表',
          period: '2026 财年',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1760,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          hardware: { label: '硬件', notes: ['同比 +215%', 'Switch 2：1,990 万台（新机型）', 'Switch 1：380 万台，同比 (65%)'] },
          software: { label: '软件', notes: ['同比 +22%', '1.86 亿套', '同比 +19%', '数字版占 55%'] },
          dedicated_video_game_platform: { label: '专用游戏平台', notes: ['同比 +107%'] },
          other_revenue: { label: '其他', notes: ['同比 (10%)'] },
          revenue: { label: '收入', notes: ['同比 +99%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 39%', '同比 (22 个百分点)'] },
          cost_of_sales: { label: '销售成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 (9 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other_income: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 (11 个百分点)'] },
          tax: { label: '税费' },
          other_sga: { label: '其他销售及管理费用', notes: ['占收入 10%', '同比 (7 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 8%', '同比 (5 个百分点)'] },
          advertising: { label: '广告', notes: ['占收入 6%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            hardware: {
              blocks: [
                {
                  x: 454, top: 389, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +215%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 212, top: 482, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '硬件', size: 34, weight: 800 },
                    { text: 'Switch 2 主机', size: 29, weight: 400, color: NOTE },
                    { text: '1,990 万台', size: 29, weight: 400, color: NOTE },
                    { text: '（新机型）', size: 29, weight: 400, color: NOTE },
                    { text: '', size: 32, weight: 400, color: NOTE },
                    { text: 'Switch 1 主机', size: 29, weight: 400, color: NOTE },
                    { text: '380 万台', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (65%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            software: {
              blocks: [
                {
                  x: 454, top: 878, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +22%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 228, top: 998, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '软件', size: 34, weight: 800 },
                    { text: '1.86 亿套', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +19%', size: 29, weight: 400, color: NOTE },
                    { text: '数字版 55%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            dedicated_video_game_platform: {
              blocks: [
                {
                  x: 828, top: 504, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +107%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 828, top: 1222, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (10%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 657, top: 1306, anchor: 'start',
                  lines: [{ text: '其他', size: 34, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1201, top: 548, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +99%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1574, top: 421, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 39%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (22 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_sales: {
              blocks: [
                {
                  x: 1574, top: 1252, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '销售成本', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1949, top: 332, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 16%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (9 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1949, top: 890, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 34, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 34, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other_income: {
              blocks: [
                {
                  x: 2169, top: 309, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '其他', size: 31, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2384, top: 374, anchor: 'start', lineGap: 9,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 13%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (11 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2464, top: 618, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other_sga: {
              blocks: [
                {
                  x: 2492, top: 806, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '其他销售及管理费用', size: 28, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                    { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (7 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2480, top: 1032, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '研发', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                    { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            advertising: {
              blocks: [
                {
                  x: 2478, top: 1246, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '广告', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                    { text: '占收入 6%', size: 29, weight: 400, color: NOTE },
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
