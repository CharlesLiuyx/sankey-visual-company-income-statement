/* ====================================================================
 *  Uber - Q1 FY26 income statement ($B)
 *  Reconstructed from input/processed/uber-q1-fy26.png as a fixed d3-sankey
 *  layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const GREEN = '#289321';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#a1cf99';
  const RED = '#be0004';
  const RED_LABEL = '#800003';
  const RED_LINK = '#e99485';
  const GRAY_LINK = '#8f8f8f';
  const NOTE = '#5f6062';
  const RIGHT_COST_LABEL_X = 2628;

  const card = (x, width, title, value, note, extra = '') => `
    <g>
      <rect x="${x}" y="1196" width="${width}" height="165" rx="30" fill="#000000"/>
      <text x="${x + width / 2}" y="1255" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${title}</text>
      ${value ? `<text x="${x + width / 2}" y="1298" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">${value}</text>` : ''}
      ${note ? `<text x="${x + width / 2}" y="1332" text-anchor="middle" font-size="23" font-weight="700" fill="#ffffff">${note}</text>` : ''}
      ${extra}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="151" y="294" width="124" height="124" rx="18" fill="#000000"/>
      <text x="213" y="373" text-anchor="middle" font-family="Arial,sans-serif" font-size="42" font-weight="500" fill="#ffffff">uber</text>

      <text x="69" y="795" font-family="Arial,sans-serif" font-size="58" font-weight="500" fill="#001f28">Uber</text>
      <text x="216" y="795" font-family="Arial,sans-serif" font-size="58" font-weight="800" fill="#09c64f">Eats</text>
      <text x="68" y="1090" font-family="Arial,sans-serif" font-size="50" font-weight="500" fill="#000000">Uber Freight</text>

      ${card(9, 176, 'Trips', '3.6B', '+20% Y/Y')}
      ${card(191, 191, 'MAPC', '199M', '+17% Y/Y')}
      ${card(389, 369, 'Gross Bookings', '$53.7B', '+25% Y/Y')}
      ${card(
        767,
        423,
        'Take rate',
        '',
        '',
        `
          <text x="805" y="1292" font-size="30" font-weight="500" fill="#ffffff">Mobility 25.8% (-4.9pp Y/Y)</text>
          <text x="805" y="1335" font-size="30" font-weight="500" fill="#ffffff">Delivery 19.5% (+1.0pp Y/Y)</text>
        `
      )}
      <text x="69" y="1403" font-size="33" font-weight="500" fill="${NOTE}">MAPC = Monthly active users completing ride or delivery</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uber-q1-fy26',
    name: 'Uber - Q1 FY26',
    meta: {
      title: 'Uber Q1 FY26 Income Statement',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/uber-q1-fy26.png', width: 2892, height: 1456 },
      titleX: 1466,
      titleY: 119,
      titleSize: 143,
      titleWeight: 700,
      titleTextLength: 2270,
      logoWidth: 560,
      logoHeight: 175,
      logoY: 190,
      logoViewBox: '0 0 560 175',
      logoSvg: `
        <text x="280" y="160" text-anchor="middle" font-family="Arial,sans-serif" font-size="194" font-weight="500" fill="#000000">Uber</text>
      `,
    },
    render: {
      width: 2892,
      height: 1456,
      background: '#efefef',
      titleColor: '#123e65',
      noteColor: NOTE,
      palette: {
        source: { node: BLACK, label: BLACK },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GRAY_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      labelYOffset: -9,
    },
    annotationsSvg: annotations,

    layout: {
      scale: 33.5,
      nodes: {
        mobility: { x: 397, y: 348, width: 80, height: 227 },
        delivery: { x: 397, y: 763, width: 80, height: 168 },
        freight: { x: 397, y: 1116, width: 80, height: 44 },
        revenue: { x: 919, y: 615, width: 79, height: 443 },
        gross_profit: { x: 1439, y: 492, width: 81, height: 199 },
        cost_of_revenue: { x: 1439, y: 922, width: 81, height: 243 },
        operating_profit: { x: 1964, y: 394, width: 80, height: 64 },
        operating_expenses: { x: 1961, y: 660, width: 81, height: 134 },
        net_profit: { x: 2482, y: 333, width: 81, height: 9 },
        other: { x: 2482, y: 461, width: 81, height: 48 },
        tax: { x: 2482, y: 615, width: 81, height: 6 },
        sm: { x: 2482, y: 736, width: 81, height: 44 },
        rnd: { x: 2482, y: 926, width: 81, height: 31 },
        operations: { x: 2482, y: 1078, width: 81, height: 25 },
        ga: { x: 2482, y: 1246, width: 81, height: 26 },
        da: { x: 2482, y: 1399, width: 81, height: 5 },
      },
      labels: {
        mobility: {
          blocks: [
            {
              x: 430, top: 247, anchor: 'middle', lineGap: 14,
              lines: [
                { text: '$value', size: 43, weight: 400 },
                { text: '+5% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
            {
              x: 214, top: 444, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Mobility', size: 45, weight: 800 },
                { text: '30% adjusted margin', size: 31, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        delivery: {
          blocks: [
            {
              x: 430, top: 662, anchor: 'middle', lineGap: 14,
              lines: [
                { text: '$value', size: 43, weight: 400 },
                { text: '+34% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
            {
              x: 183, top: 810, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Delivery', size: 44, weight: 800 },
                { text: '19% adjusted margin', size: 31, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        freight: {
          blocks: [
            {
              x: 430, top: 1014, anchor: 'middle', lineGap: 14,
              lines: [
                { text: '$value', size: 43, weight: 400 },
                { text: '+6% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
            {
              x: 184, top: 1106, anchor: 'middle', lineGap: 13,
              lines: [
                { text: '0% adjusted margin', size: 31, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 959, top: 454, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Revenue', size: 44, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
                { text: '+14% Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1480, top: 286, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
                { text: '45% margin', size: 31, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 2004, top: 193, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
                { text: '15% margin', size: 31, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2615, top: 263, anchor: 'start', lineGap: 11,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1459, top: 1187, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 2001, top: 822, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 42, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2697, top: 446, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2697, top: 567, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Tax', size: 34, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 731, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'S&M ($1.3B)', size: 34, weight: 800 },
                { text: '10% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 891, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'R&D ($1.0B)', size: 34, weight: 800 },
                { text: '7% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operations: {
          blocks: [
            {
              x: 2575, top: 1044, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Operations ($0.8B)', size: 32, weight: 800 },
                { text: '6% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 1190, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'G&A ($0.8B)', size: 34, weight: 800 },
                { text: '6% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        da: {
          blocks: [
            {
              x: RIGHT_COST_LABEL_X, top: 1335, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'D&A ($0.2B)', size: 34, weight: 800 },
                { text: '1% of revenue', size: 31, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 31, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'mobility', col: 0, order: 0, type: 'source',
        label: 'Mobility', value: 6.8, notes: ['+5% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'delivery', col: 0, order: 1, type: 'source',
        label: 'Delivery', value: 5.1, notes: ['+34% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'freight', col: 0, order: 2, type: 'source',
        label: 'Uber Freight', value: 1.3, notes: ['+6% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 13.2, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 5.9, notes: ['45% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 7.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 1.9, notes: ['15% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 4.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'net_profit', col: 4, order: 0, type: 'profit',
        label: 'Net profit', value: 0.3, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'other', col: 4, order: 1, type: 'cost',
        label: 'Other', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 4, order: 2, type: 'cost',
        label: 'Tax', value: 0.2, valueText: '($1.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 4, order: 3, type: 'cost',
        label: 'S&M', value: 1.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 4, order: 4, type: 'cost',
        label: 'R&D', value: 1.0, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operations', col: 4, order: 5, type: 'cost',
        label: 'Operations', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 4, order: 6, type: 'cost',
        label: 'G&A', value: 0.8, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'da', col: 4, order: 7, type: 'cost',
        label: 'D&A', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'mobility', target: 'revenue', value: 6.8, width: 227 },
      { source: 'delivery', target: 'revenue', value: 5.1, width: 168 },
      { source: 'freight', target: 'revenue', value: 1.3, width: 44 },

      { source: 'revenue', target: 'gross_profit', value: 5.9, width: 199 },
      { source: 'revenue', target: 'cost_of_revenue', value: 7.3, width: 243 },

      { source: 'gross_profit', target: 'operating_profit', value: 1.9, width: 64 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.0, width: 134 },

      { source: 'operating_profit', target: 'net_profit', value: 0.3, width: 9, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other', value: 1.4, width: 48, sourceOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 6, sourceOrder: 2 },

      { source: 'operating_expenses', target: 'sm', value: 1.3, width: 44, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, width: 31, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'operations', value: 0.8, width: 25, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.8, width: 26, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'da', value: 0.2, width: 5, sourceOrder: 4 },
    ],

    i18n: {
      zh: {
        name: 'Uber · 2026 财年第一季度',
        meta: {
          title: 'Uber 2026 财年第一季度利润表',
        },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <rect x="151" y="294" width="124" height="124" rx="18" fill="#000000"/>
            <text x="213" y="373" text-anchor="middle" font-family="Arial,sans-serif" font-size="42" font-weight="500" fill="#ffffff">uber</text>

            <text x="69" y="795" font-family="Arial,sans-serif" font-size="58" font-weight="500" fill="#001f28">Uber</text>
            <text x="216" y="795" font-family="Arial,sans-serif" font-size="58" font-weight="800" fill="#09c64f">Eats</text>
            <text x="68" y="1090" font-family="Arial,sans-serif" font-size="50" font-weight="500" fill="#000000">Uber Freight</text>

            ${card(9, 176, '行程', '3.6B', '同比 +20%')}
            ${card(191, 191, '月活用户', '199M', '同比 +17%')}
            ${card(389, 369, '总预订额', '$53.7B', '同比 +25%')}
            ${card(
              767,
              423,
              '抽成率',
              '',
              '',
              `
                <text x="785" y="1292" font-size="30" font-weight="500" fill="#ffffff">出行 25.8%（-4.9 个百分点）</text>
                <text x="785" y="1335" font-size="30" font-weight="500" fill="#ffffff">配送 19.5%（+1.0 个百分点）</text>
              `
            )}
            <text x="69" y="1403" font-size="33" font-weight="500" fill="${NOTE}">MAPC = 完成出行或配送的月活跃用户</text>
          </g>`,
        nodes: {
          mobility: { label: '出行', notes: ['同比 +5%'] },
          delivery: { label: '配送', notes: ['同比 +34%'] },
          freight: { label: 'Uber Freight 货运', notes: ['同比 +6%'] },
          revenue: { label: '收入', notes: ['同比 +14%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 45%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润' },
          other: { label: '其他' },
          tax: { label: '税费' },
          sm: { label: '销售与市场' },
          rnd: { label: '研发' },
          operations: { label: '运营' },
          ga: { label: '管理费用' },
          da: { label: '折旧与摊销' },
        },
        layout: {
          labels: {
            sm: {
              blocks: [
                {
                  x: 2570, top: 731, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '销售与市场 ($1.3B)', size: 34, weight: 800 },
                    { text: '占收入 10%', size: 31, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 31, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2570, top: 891, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '研发 ($1.0B)', size: 34, weight: 800 },
                    { text: '占收入 7%', size: 31, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 31, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2570, top: 1190, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '管理费用 ($0.8B)', size: 34, weight: 800 },
                    { text: '占收入 6%', size: 31, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 31, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            da: {
              blocks: [
                {
                  x: 2570, top: 1335, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '折旧与摊销 ($0.2B)', size: 34, weight: 800 },
                    { text: '占收入 1%', size: 31, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 31, weight: 400, color: NOTE },
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
