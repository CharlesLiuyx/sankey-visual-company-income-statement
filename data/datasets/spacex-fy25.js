/* ====================================================================
 * SpaceX - FY25 income statement ($B)
 * Reconstructed from input/processed/spacex-fy25.png as a fixed
 * d3-sankey layout with image asset-backed annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const BLUE = '#15527a';
  const NOTE = '#6b6b6b';
  const GREEN = '#279f24';
  const GREEN_LABEL = '#06914a';
  const GREEN_LINK = '#9fcd9b';
  const RED = '#d40000';
  const RED_LABEL = '#8c1000';
  const RED_LINK = '#e38182';
  const GRAY_LINK = '#8e8e8c';

  const spacexTitle = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="318" y="204" font-size="135" font-weight="800" fill="${BLUE}">How</text>
      <text x="2407" y="204" font-size="135" font-weight="800" fill="${BLUE}">Makes Money</text>
    </g>`;
  const spacexTitleZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="318" y="204" font-size="135" font-weight="800" fill="${BLUE}">如何</text>
      <text x="2407" y="204" font-size="135" font-weight="800" fill="${BLUE}">赚钱</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${spacexTitle}
    </g>`;
  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${spacexTitleZh}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'spacex-fy25',
    name: 'SpaceX · FY25',
    company: 'SpaceX',
    meta: {
      company: 'SpaceX',
      title: '',
      period: 'FY25',
      periodNote: 'Ending Dec. 2025',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/spacex-fy25.png', width: 4000, height: 2250 },
      periodX: 3780,
      periodY: 470,
      periodNoteY: 528,
    },
    render: {
      width: 4000,
      height: 2250,
      background: '#f2f2f2',
      allowRasterAnnotations: true,
      titleColor: BLUE,
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
      labelYOffset: 0,
      type: { name: 52, value: 48, note: 34, lineGap: 10 },
    },
    annotationsSvg: annotations,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/spacex/company-wordmark.png',
        x: 790,
        y: 100,
        width: 1430,
        height: 180,
      },
      {
        key: 'business-space-rocket',
        href: 'data/assets/raster-annotations/spacex/business-space-rocket.png',
        x: 130,
        y: 355,
        width: 350,
        height: 360,
      },
      {
        key: 'business-connectivity-starlink',
        href: 'data/assets/raster-annotations/spacex/business-connectivity-starlink.png',
        x: 165,
        y: 1010,
        width: 445,
        height: 245,
      },
      {
        key: 'business-ai-cluster',
        href: 'data/assets/raster-annotations/spacex/business-ai-cluster.png',
        x: 85,
        y: 1560,
        width: 500,
        height: 200,
      },
    ],

    layout: {
      scale: 31,
      nodes: {
        space: { x: 640, y: 700, width: 110, height: 127 },
        connectivity: { x: 640, y: 1120, width: 110, height: 353 },
        ai: { x: 640, y: 1700, width: 110, height: 99 },
        revenue: { x: 1350, y: 990, width: 108, height: 580 },
        gross_profit: { x: 2056, y: 798, width: 110, height: 285 },
        cost_of_revenue: { x: 2056, y: 1425, width: 110, height: 295 },
        operating_loss: { x: 2448, y: 1425, width: 108, height: 81 },
        operating_expenses: { x: 2788, y: 990, width: 110, height: 366 },
        rnd: { x: 3504, y: 705, width: 110, height: 267 },
        sga: { x: 3504, y: 1178, width: 110, height: 81 },
        restructuring: { x: 3504, y: 1464, width: 110, height: 16 },
        impairment: { x: 3504, y: 1695, width: 110, height: 2 },
      },
      labels: {
        space: {
          blocks: [
            {
              x: 695, top: 550, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 48, weight: 400 },
                { text: '+8% Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
            {
              x: 224, top: 726, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Space', size: 55, weight: 800 },
                { text: '67% gross margin', size: 34, weight: 400, color: NOTE },
                { text: '(16%) operating margin', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        connectivity: {
          blocks: [
            {
              x: 695, top: 1025, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 48, weight: 400 },
                { text: '+50% Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
            {
              x: 246, top: 1255, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Connectivity', size: 55, weight: 800 },
                { text: '48% gross margin', size: 34, weight: 400, color: NOTE },
                { text: '39% operating margin', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ai: {
          blocks: [
            {
              x: 695, top: 1578, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 48, weight: 400 },
                { text: '+22% Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
            {
              x: 268, top: 1750, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'AI', size: 55, weight: 800 },
                { text: '32% gross margin', size: 34, weight: 400, color: NOTE },
                { text: '(198%) operating margin', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1404, top: 785, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Revenue', size: 54, weight: 800 },
                { text: '$value', size: 49, weight: 400 },
                { text: '+33% Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 2110, top: 526, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 50, weight: 800 },
                { text: '$value', size: 49, weight: 400 },
                { text: '49% margin', size: 34, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 2110, top: 1745, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 45, weight: 800 },
                { text: 'revenue', size: 45, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 2502, top: 1516, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 45, weight: 800 },
                { text: 'loss', size: 45, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
                { text: '(14%) margin', size: 34, weight: 400, color: NOTE },
                { text: '(17pp) Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 2835, top: 770, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 45, weight: 800 },
                { text: 'expenses', size: 45, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 3772, top: 732, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'R&D', size: 42, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '46% of revenue', size: 34, weight: 400, color: NOTE },
                { text: '+22pp Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 3772, top: 1110, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'SG&A', size: 42, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '14% of revenue', size: 34, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: 3772, top: 1426, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Restructuring', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '3% of revenue', size: 34, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        impairment: {
          blocks: [
            {
              x: 3772, top: 1722, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Impairment', size: 40, weight: 800 },
                { text: '($38M)', size: 36, weight: 400 },
                { text: '0% of revenue', size: 34, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 34, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'space', col: 0, order: 0, type: 'source',
        label: 'Space', value: 4.1, notes: ['+8% Y/Y', '67% gross margin', '(16%) operating margin'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'connectivity', col: 0, order: 1, type: 'source',
        label: 'Connectivity', value: 11.4, notes: ['+50% Y/Y', '48% gross margin', '39% operating margin'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'ai', col: 0, order: 2, type: 'source',
        label: 'AI', value: 3.2, notes: ['+22% Y/Y', '32% gross margin', '(198%) operating margin'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 18.7, notes: ['+33% Y/Y'],
        color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 9.2, notes: ['49% margin', '+6pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 9.5,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -2.6, notes: ['(14%) margin', '(17pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 11.8,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 0, type: 'cost',
        label: 'R&D', value: 8.6, notes: ['46% of revenue', '+22pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sga', col: 5, order: 1, type: 'cost',
        label: 'SG&A', value: 2.6, notes: ['14% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'restructuring', col: 5, order: 2, type: 'cost',
        label: 'Restructuring', value: 0.5, notes: ['3% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'impairment', col: 5, order: 3, type: 'cost',
        label: 'Impairment', value: 0.038, valueText: '($38M)', notes: ['0% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'space', target: 'revenue', value: 4.1, width: 127, sourceOrder: 0, targetOrder: 0 },
      { source: 'connectivity', target: 'revenue', value: 11.4, width: 353, sourceOrder: 1, targetOrder: 1 },
      { source: 'ai', target: 'revenue', value: 3.2, width: 99, sourceOrder: 2, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 9.2, width: 285, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 9.5, width: 295, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 9.2, width: 285, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 2.6, width: 81, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 8.6, width: 267, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 2.6, width: 81, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.5, width: 16, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'impairment', value: 0.038, width: 2, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'SpaceX · 2025 财年',
        meta: {
          period: '2025 财年',
          periodNote: '截至 2025 年 12 月',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          space: { label: '航天', notes: ['同比 +8%', '毛利率 67%', '营业利润率 (16%)'] },
          connectivity: { label: '连接服务', notes: ['同比 +50%', '毛利率 48%', '营业利润率 39%'] },
          ai: { label: 'AI', notes: ['同比 +22%', '毛利率 32%', '营业利润率 (198%)'] },
          revenue: { label: '收入', notes: ['同比 +33%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 49%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (14%)', '同比 (17 个百分点)'] },
          operating_expenses: { label: ['营业', '费用'] },
          rnd: { label: '研发', notes: ['占收入 46%', '同比 +22 个百分点'] },
          sga: { label: '销售、一般及行政', notes: ['占收入 14%', '同比 +1 个百分点'] },
          restructuring: { label: '重组费用', notes: ['占收入 3%', '同比 +1 个百分点'] },
          impairment: { label: '减值', notes: ['占收入 0%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
        },
        layout: {
          labels: {
            space: {
              blocks: [
                {
                  x: 695, top: 550, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 48, weight: 400 },
                    { text: '同比 +8%', size: 34, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 224, top: 726, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '航天', size: 55, weight: 800 },
                    { text: '毛利率 67%', size: 34, weight: 400, color: NOTE },
                    { text: '营业利润率 (16%)', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            connectivity: {
              blocks: [
                {
                  x: 695, top: 1025, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 48, weight: 400 },
                    { text: '同比 +50%', size: 34, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 246, top: 1255, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '连接服务', size: 55, weight: 800 },
                    { text: '毛利率 48%', size: 34, weight: 400, color: NOTE },
                    { text: '营业利润率 39%', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ai: {
              blocks: [
                {
                  x: 695, top: 1578, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 48, weight: 400 },
                    { text: '同比 +22%', size: 34, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 268, top: 1750, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: 'AI', size: 55, weight: 800 },
                    { text: '毛利率 32%', size: 34, weight: 400, color: NOTE },
                    { text: '营业利润率 (198%)', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1404, top: 785, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '收入', size: 54, weight: 800 },
                    { text: '$value', size: 49, weight: 400 },
                    { text: '同比 +33%', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 2110, top: 526, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '毛利润', size: 50, weight: 800 },
                    { text: '$value', size: 49, weight: 400 },
                    { text: '利润率 49%', size: 34, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 2110, top: 1745, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 45, weight: 800 },
                    { text: '成本', size: 45, weight: 800 },
                    { text: '$value', size: 43, weight: 400 },
                  ],
                },
              ],
            },
            operating_loss: {
              blocks: [
                {
                  x: 2502, top: 1516, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业', size: 45, weight: 800 },
                    { text: '亏损', size: 45, weight: 800 },
                    { text: '$value', size: 43, weight: 400 },
                    { text: '利润率 (14%)', size: 34, weight: 400, color: NOTE },
                    { text: '同比 (17 个百分点)', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 2835, top: 770, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业', size: 45, weight: 800 },
                    { text: '费用', size: 45, weight: 800 },
                    { text: '$value', size: 43, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 3772, top: 732, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '研发', size: 42, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '占收入 46%', size: 34, weight: 400, color: NOTE },
                    { text: '同比 +22 个百分点', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 3772, top: 1110, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '销售、一般', size: 38, weight: 800 },
                    { text: '及行政', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '占收入 14%', size: 34, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            restructuring: {
              blocks: [
                {
                  x: 3772, top: 1426, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '重组费用', size: 40, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                    { text: '占收入 3%', size: 34, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 34, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            impairment: {
              blocks: [
                {
                  x: 3772, top: 1722, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '减值', size: 40, weight: 800 },
                    { text: '($38M)', size: 36, weight: 400 },
                    { text: '占收入 0%', size: 34, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 34, weight: 400, color: NOTE },
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
