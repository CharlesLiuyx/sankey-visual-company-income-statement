/* ====================================================================
 * Paramount - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/paramount-q1-fy26.png as a fixed
 * d3-sankey layout with crop-backed Paramount business annotations.
 * ==================================================================== */
(function () {
  const NAVY = '#06083f';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const SOURCE_LINK = '#9294a7';
  const GREEN = '#28a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9fd39e';
  const RED = '#d80000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e68184';
  const CARD = '#05083f';
  const RIGHT_LABEL_X = 2420;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="52" y="1160" width="570" height="160" rx="26" fill="${CARD}"/>
      <text x="337" y="1209" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">Paramount+</text>
      <text x="337" y="1251" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">Subscribers 79.6M (+0.7M Q/Q)</text>
      <text x="337" y="1292" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">ARPU +14% Y/Y</text>
      <text x="116" y="1348" font-size="29" font-weight="400" fill="${NOTE}">ARPU = Average Revenue Per User</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="52" y="1160" width="570" height="160" rx="26" fill="${CARD}"/>
      <text x="337" y="1209" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">Paramount+</text>
      <text x="337" y="1251" text-anchor="middle" font-size="28" font-weight="400" fill="#ffffff">订阅用户 7960 万（环比 +70 万）</text>
      <text x="337" y="1292" text-anchor="middle" font-size="29" font-weight="400" fill="#ffffff">ARPU 同比 +14%</text>
      <text x="116" y="1348" font-size="29" font-weight="400" fill="${NOTE}">ARPU = 每用户平均收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paramount-q1-fy26',
    name: 'Paramount · Q1 FY26',
    company: 'Paramount',
    meta: {
      company: 'Paramount',
      title: 'Paramount Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/paramount-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2425,
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
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: SOURCE_LINK,
        hub: SOURCE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/paramount/company-wordmark.png',
        x: 786,
        y: 258,
        width: 700,
        height: 226,
      },
      {
        key: 'business-filmed-entertainment-cluster',
        href: 'data/assets/raster-annotations/paramount/business-filmed-entertainment-cluster.png',
        x: 16,
        y: 288,
        width: 196,
        height: 142,
      },
      {
        key: 'business-tv-media-cluster',
        href: 'data/assets/raster-annotations/paramount/business-tv-media-cluster.png',
        x: 10,
        y: 644,
        width: 190,
        height: 160,
      },
      {
        key: 'business-direct-to-consumer-cluster',
        href: 'data/assets/raster-annotations/paramount/business-direct-to-consumer-cluster.png',
        x: 18,
        y: 854,
        width: 198,
        height: 206,
      },
    ],

    layout: {
      scale: 46.5,
      nodes: {
        filmed_entertainment: { x: 442, y: 427, width: 71, height: 58 },
        tv_media: { x: 442, y: 655, width: 71, height: 170 },
        direct_to_consumer: { x: 442, y: 964, width: 71, height: 110 },
        segment_revenue: { x: 909, y: 590, width: 71, height: 342 },
        revenue: { x: 1376, y: 690, width: 71, height: 342 },
        operating_profit: { x: 1843, y: 592, width: 71, height: 28 },
        operating_expenses: { x: 1843, y: 837, width: 72, height: 314 },
        net_profit: { x: 2310, y: 465, width: 72, height: 6 },
        other: { x: 2310, y: 685, width: 72, height: 12 },
        tax: { x: 2310, y: 805, width: 72, height: 6 },
        operating: { x: 2310, y: 861, width: 72, height: 226 },
        sga: { x: 2310, y: 1134, width: 72, height: 64 },
        restructuring: { x: 2310, y: 1258, width: 72, height: 15 },
        amortization: { x: 2310, y: 1347, width: 72, height: 4 },
      },
      labels: {
        filmed_entertainment: {
          blocks: [
            {
              x: 432, top: 337, anchor: 'start', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 405, top: 394, anchor: 'end', lineGap: 13,
              lines: [
                { text: 'Filmed', size: 40, weight: 800 },
                { text: 'Entertainment', size: 40, weight: 800 },
              ],
            },
            {
              x: 392, top: 502, anchor: 'end', lineGap: 8,
              lines: [
                { text: '13% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tv_media: {
          blocks: [
            {
              x: 432, top: 565, anchor: 'start', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(6%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 433, top: 690, anchor: 'end',
              lines: [{ text: 'TV Media', size: 40, weight: 800 }],
            },
            {
              x: 426, top: 742, anchor: 'end', lineGap: 8,
              lines: [
                { text: '29% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        direct_to_consumer: {
          blocks: [
            {
              x: 432, top: 875, anchor: 'start', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 405, top: 967, anchor: 'end', lineGap: 13,
              lines: [
                { text: 'Direct to', size: 40, weight: 800 },
                { text: 'consumer', size: 40, weight: 800 },
              ],
            },
            {
              x: 392, top: 1073, anchor: 'end', lineGap: 8,
              lines: [
                { text: '10% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '+11pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        segment_revenue: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1394, top: 550, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1878, top: 410, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '8% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1848, top: 1176, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Costs and', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 420, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '2% margin', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 657, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 778, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 944, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Operating', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1163, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1236, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1319, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'filmed_entertainment', col: 0, order: 0, type: 'source',
        label: ['Filmed', 'Entertainment'], value: 1.3,
        notes: ['+11% Y/Y', '13% adj. margin', '+6pp Y/Y'],
        color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK,
      },
      {
        id: 'tv_media', col: 0, order: 1, type: 'source',
        label: 'TV Media', value: 3.7,
        notes: ['(6%) Y/Y', '29% adj. margin', '+3pp Y/Y'],
        color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK,
      },
      {
        id: 'direct_to_consumer', col: 0, order: 2, type: 'source',
        label: ['Direct to', 'consumer'], value: 2.4,
        notes: ['+11% Y/Y', '10% adj. margin', '+11pp Y/Y'],
        color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK,
      },
      { id: 'segment_revenue', col: 1, order: 0, type: 'hub', label: '', value: 7.4, color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 7.4, notes: ['+2% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: SOURCE_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['8% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Costs and', 'expenses'], value: 6.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.2, notes: ['2% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating', col: 4, order: 3, type: 'cost', label: 'Operating', value: 4.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 4, order: 4, type: 'cost', label: 'SG&A', value: 1.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 4, order: 5, type: 'cost', label: 'Restructuring', value: 0.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'amortization', col: 4, order: 6, type: 'cost', label: 'Amortization', value: 0.1, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'filmed_entertainment', target: 'segment_revenue', value: 1.3, width: 58, targetOrder: 0 },
      { source: 'tv_media', target: 'segment_revenue', value: 3.7, width: 170, targetOrder: 1 },
      { source: 'direct_to_consumer', target: 'segment_revenue', value: 2.4, width: 110, targetOrder: 2 },

      { source: 'segment_revenue', target: 'revenue', value: 7.4, width: 342 },
      { source: 'revenue', target: 'operating_profit', value: 0.6, width: 28, sourceOrder: 0, y0: 704, y1: 606 },
      { source: 'revenue', target: 'operating_expenses', value: 6.7, width: 314, sourceOrder: 1, y0: 875, y1: 994 },

      { source: 'operating_profit', target: 'net_profit', value: 0.2, width: 8, sourceOrder: 0, targetOrder: 0, y0: 596, y1: 468 },
      { source: 'operating_profit', target: 'other', value: 0.3, width: 12, sourceOrder: 1, y0: 606, y1: 691 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 6, sourceOrder: 2, y0: 615, y1: 808 },

      { source: 'operating_expenses', target: 'operating', value: 4.9, width: 226, sourceOrder: 0, y0: 950, y1: 974 },
      { source: 'operating_expenses', target: 'sga', value: 1.4, width: 64, sourceOrder: 1, y0: 1097, y1: 1166 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.4, width: 15, sourceOrder: 2, y0: 1139, y1: 1266 },
      { source: 'operating_expenses', target: 'amortization', value: 0.1, width: 4, sourceOrder: 3, y0: 1149, y1: 1349 },
    ],

    i18n: {
      zh: {
        name: 'Paramount · 2026 财年第一季度',
        meta: {
          title: 'Paramount 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          filmed_entertainment: { label: ['影视', '娱乐'], notes: ['同比 +11%', '调整后利润率 13%', '同比 +6 个百分点'] },
          tv_media: { label: '电视媒体', notes: ['同比 (6%)', '调整后利润率 29%', '同比 +3 个百分点'] },
          direct_to_consumer: { label: ['直接面向', '消费者'], notes: ['同比 +11%', '调整后利润率 10%', '同比 +11 个百分点'] },
          segment_revenue: { label: '' },
          revenue: { label: '收入', notes: ['同比 +2%'] },
          operating_profit: { label: '营业利润', notes: ['利润率 8%', '同比 +1 个百分点'] },
          operating_expenses: { label: ['成本和', '费用'] },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 +0 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          operating: { label: '运营成本' },
          sga: { label: '销售、一般及行政' },
          restructuring: { label: '重组' },
          amortization: { label: '摊销' },
        },
        layout: {
          labels: {
            filmed_entertainment: {
              blocks: [
                {
                  x: 432, top: 337, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +11%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 405, top: 394, anchor: 'end', lineGap: 13,
                  lines: [
                    { text: '影视', size: 40, weight: 800 },
                    { text: '娱乐', size: 40, weight: 800 },
                  ],
                },
                {
                  x: 392, top: 502, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 13%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tv_media: {
              blocks: [
                {
                  x: 432, top: 565, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (6%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 433, top: 690, anchor: 'end',
                  lines: [{ text: '电视媒体', size: 40, weight: 800 }],
                },
                {
                  x: 426, top: 742, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 29%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            direct_to_consumer: {
              blocks: [
                {
                  x: 432, top: 875, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +11%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 405, top: 967, anchor: 'end', lineGap: 13,
                  lines: [
                    { text: '直接面向', size: 40, weight: 800 },
                    { text: '消费者', size: 40, weight: 800 },
                  ],
                },
                {
                  x: 392, top: 1073, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +11 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            segment_revenue: { blocks: [] },
            revenue: {
              blocks: [
                {
                  x: 1394, top: 550, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1878, top: 410, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 8%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1848, top: 1176, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '成本和', size: 40, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 420, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 2%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 657, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 778, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 944, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '运营成本', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1163, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: 'SG&A 费用', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            restructuring: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1236, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '重组', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1319, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '摊销', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
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
