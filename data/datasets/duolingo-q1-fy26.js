/* ====================================================================
 * Duolingo - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/duolingo-q1-fy26.png as a fixed
 * d3-sankey layout with validated runtime raster annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#6c6c6c';
  const DUO = '#58cc02';
  const DUO_LINK = '#ace187';
  const BLACK = '#000000';
  const GRAY_LINK = '#8e8e8c';
  const GREEN = '#28a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#98ca97';
  const RED = '#d80000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38384';
  const SCALE = 1.3;

  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="150" rx="24" fill="${DUO}"/>
      ${lines
        .map(
          (line) =>
            `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const annotations = (paidSubscribers, bookings, yoy) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(33, 1212, 210, [
        { text: 'DAU', y: 54, size: 30, weight: 800 },
        { text: '56.5M', y: 94, size: 30 },
        { text: yoy ? `${yoy} +21%` : '+21% Y/Y', y: 126, size: 23 },
      ])}
      ${kpiCard(258, 1212, 355, [
        { text: paidSubscribers, y: 54, size: 30, weight: 800 },
        { text: '12.5M', y: 94, size: 30 },
        { text: yoy ? `${yoy} +21%` : '+21% Y/Y', y: 126, size: 23 },
      ])}
      ${kpiCard(627, 1212, 210, [
        { text: bookings, y: 54, size: 30, weight: 800 },
        { text: '$308.5M', y: 94, size: 30 },
        { text: yoy ? `${yoy} +14%` : '+14% Y/Y', y: 126, size: 23 },
      ])}
    </g>`;

  const annotationsEn = annotations('Paid subscribers', 'Bookings', '');
  const annotationsZh = annotations('付费订阅用户', '预订额', '同比');

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'duolingo-q1-fy26',
    name: 'Duolingo · Q1 FY26',
    company: 'Duolingo',
    meta: {
      company: 'Duolingo',
      title: 'Duolingo Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/duolingo-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2290,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
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
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/duolingo/company-wordmark.png',
        x: 628,
        y: 296,
        width: 595,
        height: 158,
      },
      {
        key: 'subscription-mascot',
        href: 'data/assets/raster-annotations/duolingo/subscription-mascot.png',
        x: 176,
        y: 564,
        width: 204,
        height: 170,
      },
    ],

    layout: {
      scale: SCALE,
      nodes: {
        subscription: { x: 425, y: 539, width: 72, height: h(250.908) },
        other_revenue: { x: 425, y: 1045, width: 72, height: h(41.059) },
        revenue: { x: 895, y: 631, width: 72, height: h(291.967) },
        gross_profit: { x: 1365, y: 539, width: 72, height: h(213.096) },
        cost_of_revenue: { x: 1365, y: 996, width: 72, height: h(78.871) },
        operating_profit: { x: 1837, y: 457, width: 72, height: h(44.527) },
        operating_expenses: { x: 1837, y: 710, width: 72, height: h(168.569) },
        interest: { x: 2158, y: 460, width: 72, height: h(11.811) },
        net_profit: { x: 2309, y: 370, width: 72, height: h(43.46) },
        tax_other: { x: 2309, y: 606, width: 72, height: h(12.878) },
        rnd: { x: 2309, y: 766, width: 72, height: h(82.974) },
        ga: { x: 2309, y: 994, width: 72, height: h(46.346) },
        sm: { x: 2309, y: 1196, width: 72, height: h(39.249) },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 461, top: 441, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400, color: BLACK },
                { text: '+31% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 278, top: 748, anchor: 'middle',
              lines: [{ text: 'Subscription', size: 40, weight: 800, color: DUO }],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 461, top: 954, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 125, top: 1020, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Advertising', size: 28, weight: 400, color: NOTE },
                { text: 'English Test', size: 28, weight: 400, color: NOTE },
                { text: 'In-app Purchase', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 296, top: 1036, anchor: 'middle',
              lines: [{ text: 'Other', size: 40, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 931, top: 480, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+27% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1401, top: 348, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '73% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1401, top: 1123, anchor: 'middle', lineGap: 8,
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
              x: 1873, top: 270, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '15% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1874, top: 953, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2192, top: 493, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2427, top: 349, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '15% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax_other: {
          blocks: [
            {
              x: 2427, top: 576, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax & Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2428, top: 774, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2428, top: 1002, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '16% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2428, top: 1193, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '13% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 250.908, valueText: '$251M', notes: ['+31% Y/Y'],
        color: DUO, labelColor: DUO, linkTint: DUO_LINK,
      },
      {
        id: 'other_revenue', col: 0, order: 1, type: 'source',
        label: 'Other', value: 41.059, valueText: '$41M',
        notes: ['+3% Y/Y', 'Advertising', 'English Test', 'In-app Purchase'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 291.967, valueText: '$292M', notes: ['+27% Y/Y'],
        color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 213.096, valueText: '$213M', notes: ['73% margin', '+2pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 78.871, valueText: '($79M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 44.527, valueText: '$45M', notes: ['15% margin', '+5pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 168.569, valueText: '($169M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 4, order: 0, type: 'profit',
        label: 'Interest', value: 11.811, valueText: '$12M',
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 43.46, valueText: '$43M', notes: ['15% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax_other', col: 5, order: 1, type: 'cost',
        label: 'Tax & Other', value: 12.878, valueText: '($13M)',
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 2, type: 'cost',
        label: 'R&D', value: 82.974, valueText: '($83M)', notes: ['28% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 3, type: 'cost',
        label: 'G&A', value: 46.346, valueText: '($46M)', notes: ['16% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 4, type: 'cost',
        label: 'S&M', value: 39.249, valueText: '($39M)', notes: ['13% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 250.908, width: h(250.908), sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue', value: 41.059, width: h(41.059), sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 213.096, width: h(213.096), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 78.871, width: h(78.871), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 44.527, width: h(44.527), sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 168.569, width: h(168.569), sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 31.649, width: h(31.649), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax_other', value: 12.878, width: h(12.878), sourceOrder: 1, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 11.811, width: h(11.811), sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 82.974, width: h(82.974), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 46.346, width: h(46.346), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 39.249, width: h(39.249), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Duolingo · 2026 财年第一季度',
        meta: {
          title: 'Duolingo 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1680,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +31%'] },
          other_revenue: { label: '其他', notes: ['同比 +3%', '广告', '英语测试', '应用内购买'] },
          revenue: { label: '收入', notes: ['同比 +27%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 73%', '同比 +2 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 15%', '同比 +5 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
          tax_other: { label: '税费及其他' },
          rnd: { label: '研发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 16%', '同比 (3 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 13%', '同比 +2 个百分点'] },
        },
        layout: {
          labels: {
            subscription: {
              blocks: [
                {
                  x: 461, top: 441, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400, color: BLACK },
                    { text: '同比 +31%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 278, top: 748, anchor: 'middle',
                  lines: [{ text: '订阅', size: 40, weight: 800, color: DUO }],
                },
              ],
            },
            other_revenue: {
              blocks: [
                {
                  x: 461, top: 954, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +3%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 125, top: 1020, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '广告', size: 28, weight: 400, color: NOTE },
                    { text: '英语测试', size: 28, weight: 400, color: NOTE },
                    { text: '应用内购买', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 296, top: 1036, anchor: 'middle',
                  lines: [{ text: '其他', size: 40, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 931, top: 480, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +27%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1401, top: 348, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 73%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1401, top: 1123, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '成本', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1873, top: 270, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1874, top: 953, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2192, top: 493, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2427, top: 349, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax_other: {
              blocks: [
                {
                  x: 2427, top: 576, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '税费及其他', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2428, top: 774, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2428, top: 1002, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 16%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2428, top: 1193, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 13%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
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
