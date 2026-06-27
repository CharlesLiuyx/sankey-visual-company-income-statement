/* ====================================================================
 * Warner Bros. Discovery - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/warner-bros-q1-fy26.png as a fixed
 * d3-sankey layout with validated crop-backed business annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#0020af';
  const BLUE_LINK = '#8593d3';
  const TITLE = '#155077';
  const NOTE = '#727272';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#11955c';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#8d1400';
  const RED_LINK = '#e08585';
  const RIGHT_LABEL_X = 2500;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'warner-bros-q1-fy26',
    name: 'Warner Bros. Discovery · Q1 FY26',
    company: 'Warner Bros. Discovery',
    meta: {
      company: 'Warner Bros. Discovery',
      title: 'Warner Bros. Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/warner-bros-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 195,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 2428,
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/warner-bros/company-wordmark.png',
        x: 560,
        y: 258,
        width: 748,
        height: 270,
      },
      {
        key: 'business-studios-cluster',
        href: 'data/assets/raster-annotations/warner-bros/business-studios-cluster.png',
        x: 26,
        y: 360,
        width: 169,
        height: 177,
      },
      {
        key: 'business-networks-cluster',
        href: 'data/assets/raster-annotations/warner-bros/business-networks-cluster.png',
        x: 24,
        y: 640,
        width: 162,
        height: 251,
      },
      {
        key: 'business-streaming-cluster',
        href: 'data/assets/raster-annotations/warner-bros/business-streaming-cluster.png',
        x: 51,
        y: 1000,
        width: 106,
        height: 190,
      },
    ],

    layout: {
      scale: 39.05,
      nodes: {
        studios: { x: 428, y: 413, width: 72, height: 122 },
        networks: { x: 428, y: 700, width: 72, height: 170 },
        streaming: { x: 428, y: 1039, width: 72, height: 114 },
        gross_revenue: { x: 802, y: 572, width: 72, height: 406 },
        revenue: { x: 1176, y: 677, width: 71, height: 347 },
        eliminations: { x: 1176, y: 1152, width: 71, height: 59 },
        gross_profit: { x: 1548, y: 574, width: 70, height: 166 },
        cost_of_revenue: { x: 1550, y: 938, width: 71, height: 181 },
        operating_loss: { x: 1753, y: 874, width: 71, height: 96 },
        operating_expenses: { x: 1921, y: 667, width: 72, height: 262 },
        sga: { x: 2297, y: 422, width: 72, height: 96 },
        amortization: { x: 2297, y: 684, width: 72, height: 46 },
        other: { x: 2297, y: 924, width: 72, height: 7 },
        netflix_termination_fee: { x: 2297, y: 1105, width: 72, height: 108 },
      },
      labels: {
        gross_revenue: { blocks: [] },
        studios: {
          blocks: [
            {
              x: 464, top: 319, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+35% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 405, top: 417, anchor: 'end',
              lines: [{ text: 'Studios', size: 40, weight: 800 }],
            },
            {
              x: 405, top: 475, anchor: 'end', lineGap: 8,
              lines: [
                { text: '25% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '+14pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        networks: {
          blocks: [
            {
              x: 464, top: 604, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(8%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 405, top: 731, anchor: 'end',
              lines: [{ text: 'Networks', size: 40, weight: 800 }],
            },
            {
              x: 405, top: 790, anchor: 'end', lineGap: 8,
              lines: [
                { text: '37% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        streaming: {
          blocks: [
            {
              x: 464, top: 943, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 405, top: 1053, anchor: 'end',
              lines: [{ text: 'Streaming', size: 40, weight: 800 }],
            },
            {
              x: 405, top: 1114, anchor: 'end', lineGap: 8,
              lines: [
                { text: '15% adj. margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1212, top: 529, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        eliminations: {
          blocks: [
            {
              x: 1212, top: 1231, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Eliminations', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1583, top: 392, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '48% margin', size: 29, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1586, top: 1145, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 40, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1789, top: 988, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Operating', size: 34, weight: 800, color: RED_LABEL },
                { text: 'loss', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: '(28%) margin', size: 29, weight: 400, color: NOTE },
                { text: '(27pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1888, top: 506, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 415, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: '28% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 657, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: '14% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 889, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: '2% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        netflix_termination_fee: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1092, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Netflix', size: 34, weight: 800, color: RED_LABEL },
                { text: 'Termination', size: 34, weight: 800, color: RED_LABEL },
                { text: 'Fee', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                { text: 'New', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'studios', col: 0, order: 0, type: 'source', label: 'Studios', value: 3.125, notes: ['+35% Y/Y', '25% adj. margin', '+14pp Y/Y'] },
      { id: 'networks', col: 0, order: 1, type: 'source', label: 'Networks', value: 4.377, notes: ['(8%) Y/Y', '37% adj. margin', '(0pp) Y/Y'] },
      { id: 'streaming', col: 0, order: 2, type: 'source', label: 'Streaming', value: 2.887, notes: ['+9% Y/Y', '15% adj. margin', '+2pp Y/Y'] },
      { id: 'gross_revenue', col: 1, order: 0, type: 'hub', label: 'Gross revenue', value: 10.389 },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 8.893, notes: ['(1%) Y/Y'] },
      { id: 'eliminations', col: 2, order: 1, type: 'cost', label: 'Eliminations', value: 1.497 },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 4.265, notes: ['48% margin', '+5pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 4.628 },
      { id: 'operating_loss', col: 4, order: 1, type: 'cost', label: ['Operating', 'loss'], value: 2.469, notes: ['(28%) margin', '(27pp) Y/Y'] },
      { id: 'operating_expenses', col: 5, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 6.734 },
      { id: 'sga', col: 6, order: 0, type: 'cost', label: 'SG&A', value: 2.469, notes: ['28% of revenue', '+3pp Y/Y'] },
      { id: 'amortization', col: 6, order: 1, type: 'cost', label: 'Amortization', value: 1.247, notes: ['14% of revenue', '(3pp) Y/Y'] },
      { id: 'other', col: 6, order: 2, type: 'cost', label: 'Other', value: 0.218, notes: ['2% of revenue', '+0pp Y/Y'] },
      { id: 'netflix_termination_fee', col: 6, order: 3, type: 'cost', label: 'Netflix Termination Fee', value: 2.8, notes: ['New'] },
    ],

    links: [
      { source: 'studios', target: 'gross_revenue', value: 3.125, width: 122, sourceOrder: 0, targetOrder: 0 },
      { source: 'networks', target: 'gross_revenue', value: 4.377, width: 170, sourceOrder: 0, targetOrder: 1 },
      { source: 'streaming', target: 'gross_revenue', value: 2.887, width: 114, sourceOrder: 0, targetOrder: 2 },

      { source: 'gross_revenue', target: 'revenue', value: 8.893, width: 347, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'eliminations', value: 1.497, width: 59, sourceOrder: 1, targetOrder: 0 },

      {
        source: 'revenue',
        target: 'gross_profit',
        value: 4.265,
        width: 166,
        sourceOrder: 0,
        targetOrder: 0,
        linkTint: { left: GREEN_LINK, right: GREEN_LINK },
      },
      { source: 'revenue', target: 'cost_of_revenue', value: 4.628, width: 181, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 4.265, width: 166, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 2.469, width: 96, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sga', value: 2.469, width: 96, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'amortization', value: 1.247, width: 46, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other', value: 0.218, width: 7, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'netflix_termination_fee', value: 2.8, width: 108, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Warner Bros. Discovery · 2026 财年第一季度',
        meta: {
          title: 'Warner Bros. 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 2160,
        },
        nodes: {
          studios: { label: '影视工作室', notes: ['同比 +35%', '调整后利润率 25%', '同比 +14 个百分点'] },
          networks: { label: '线性网络', notes: ['同比 (8%)', '调整后利润率 37%', '同比 (0 个百分点)'] },
          streaming: { label: '流媒体', notes: ['同比 +9%', '调整后利润率 15%', '同比 +2 个百分点'] },
          gross_revenue: { label: '总收入' },
          revenue: { label: '收入', notes: ['同比 (1%)'] },
          eliminations: { label: '抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['经营', '亏损'], notes: ['利润率 (28%)', '同比 (27 个百分点)'] },
          operating_expenses: { label: ['经营', '费用'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 28%', '同比 +3 个百分点'] },
          amortization: { label: '摊销', notes: ['占收入 14%', '同比 (3 个百分点)'] },
          other: { label: '其他', notes: ['占收入 2%', '同比 +0 个百分点'] },
          netflix_termination_fee: { label: 'Netflix 解约费', notes: ['新增'] },
        },
        layout: {
          labels: {
            studios: {
              blocks: [
                {
                  x: 464, top: 319, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +35%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 405, top: 417, anchor: 'end',
                  lines: [{ text: '影视工作室', size: 40, weight: 800 }],
                },
                {
                  x: 405, top: 475, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 25%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +14 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            networks: {
              blocks: [
                {
                  x: 464, top: 604, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (8%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 405, top: 731, anchor: 'end',
                  lines: [{ text: '线性网络', size: 40, weight: 800 }],
                },
                {
                  x: 405, top: 790, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 37%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            streaming: {
              blocks: [
                {
                  x: 464, top: 943, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 405, top: 1053, anchor: 'end',
                  lines: [{ text: '流媒体', size: 40, weight: 800 }],
                },
                {
                  x: 405, top: 1114, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '调整后利润率 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1212, top: 529, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (1%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            eliminations: {
              blocks: [
                {
                  x: 1212, top: 1231, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '抵销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1583, top: 392, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 48%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1586, top: 1145, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: RED_LABEL },
                    { text: '成本', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 1789, top: 988, anchor: 'middle', lineGap: 7,
                  lines: [
                    { text: '经营', size: 34, weight: 800, color: RED_LABEL },
                    { text: '亏损', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                    { text: '利润率 (28%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (27 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1888, top: 506, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '经营', size: 40, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2512, top: 415, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售、一般及行政', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                    { text: '占收入 28%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +3 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            amortization: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 657, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '摊销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                    { text: '占收入 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 889, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                    { text: '占收入 2%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            netflix_termination_fee: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1092, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: 'Netflix 解约费', size: 32, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 33, weight: 400, color: RED_LABEL },
                    { text: '新增', size: 29, weight: 400, color: NOTE },
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
