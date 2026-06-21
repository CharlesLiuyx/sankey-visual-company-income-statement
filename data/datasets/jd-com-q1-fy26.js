/* ====================================================================
 * JD.com - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/jd-com-q1-fy26.png as a fixed
 * d3-sankey layout with crop-backed JD business annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#686868';
  const SOURCE = '#666666';
  const SOURCE_LINK = '#b5b5b3';
  const GREEN = '#28a428';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9aca99';
  const RED = '#d80000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e58384';
  const RIGHT_LABEL_X = 2496;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'jd-com-q1-fy26',
    name: 'JD.com · Q1 FY26',
    company: 'JD.com',
    meta: {
      company: 'JD.com',
      title: 'JD.com Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/jd-com-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2160,
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
        source: { node: SOURCE, label: SOURCE },
        hub: { node: SOURCE, label: SOURCE },
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
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/jd-com/company-wordmark.png',
        x: 680,
        y: 238,
        width: 300,
        height: 236,
      },
      {
        key: 'business-retail-jdcom',
        href: 'data/assets/raster-annotations/jd-com/business-retail-jdcom.png',
        x: 198,
        y: 620,
        width: 198,
        height: 78,
      },
      {
        key: 'business-jd-health',
        href: 'data/assets/raster-annotations/jd-com/business-jd-health.png',
        x: 140,
        y: 702,
        width: 246,
        height: 70,
      },
      {
        key: 'business-logistics',
        href: 'data/assets/raster-annotations/jd-com/business-logistics.png',
        x: 76,
        y: 924,
        width: 316,
        height: 80,
      },
      {
        key: 'business-new-businesses-cluster',
        href: 'data/assets/raster-annotations/jd-com/business-new-businesses-cluster.png',
        x: 42,
        y: 1118,
        width: 346,
        height: 90,
      },
    ],

    layout: {
      scale: 8.28,
      nodes: {
        jd_retail: { x: 412, y: 447, width: 72, height: 323 },
        jd_logistics: { x: 412, y: 956, width: 72, height: 73 },
        new_businesses: { x: 412, y: 1219, width: 72, height: 8 },
        gross_revenue: { x: 786, y: 539, width: 72, height: 404 },
        revenue: { x: 1160, y: 648, width: 72, height: 379 },
        intersegment_eliminations: { x: 1160, y: 1163, width: 72, height: 24 },
        gross_profit: { x: 1534, y: 546, width: 72, height: 64 },
        cost_of_revenue: { x: 1534, y: 797, width: 72, height: 315 },
        operating_profit: { x: 1912, y: 469, width: 72, height: 5 },
        operating_expenses: { x: 1905, y: 646, width: 72, height: 59 },
        other: { x: 2170, y: 436, width: 72, height: 4 },
        net_profit: { x: 2282, y: 377, width: 72, height: 7 },
        tax: { x: 2282, y: 571, width: 72, height: 2 },
        fulfillment: { x: 2282, y: 752, width: 72, height: 28 },
        marketing: { x: 2282, y: 923, width: 72, height: 18 },
        rnd: { x: 2282, y: 1070, width: 72, height: 8 },
        ga: { x: 2282, y: 1215, width: 72, height: 4 },
      },
      labels: {
        jd_retail: {
          blocks: [
            {
              x: 442, top: 356, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 286, top: 469, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'JD Retail', size: 40, weight: 800, color: SOURCE },
                { text: '6% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        jd_logistics: {
          blocks: [
            {
              x: 442, top: 872, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 238, top: 1014, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '2% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        new_businesses: {
          blocks: [
            {
              x: 426, top: 1134, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 212, top: 1212, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'New businesses', size: 40, weight: 800, color: SOURCE },
                { text: '(165%) operating margin', size: 29, weight: 400, color: NOTE },
                { text: '(188pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1195, top: 506, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: SOURCE },
                { text: '$value', size: 40, weight: 400, color: SOURCE },
                { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intersegment_eliminations: {
          blocks: [
            {
              x: 1226, top: 1193, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Intrasegment', size: 34, weight: 800, color: RED_LABEL },
                { text: 'eliminations', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 32, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1570, top: 364, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '17% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1570, top: 1134, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 40, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1948, top: 286, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '1% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1938, top: 727, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
                { text: '$value', size: 40, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2196, top: 462, anchor: 'middle', lineGap: 6,
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
              x: 2498, top: 335, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '2% margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 562, anchor: 'middle',
              lines: [{ text: 'Tax ($0.2B)', size: 31, weight: 800, color: RED_LABEL }],
            },
          ],
        },
        fulfillment: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 733, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Fulfillment', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        marketing: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 902, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Marketing', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1040, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1166, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'General &', size: 31, weight: 800, color: RED_LABEL },
                { text: 'admin', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'jd_retail', col: 0, order: 0, type: 'source',
        label: 'JD Retail', value: 38.9, notes: ['+2% Y/Y', '6% operating margin', '+1pp Y/Y'],
        color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK,
      },
      {
        id: 'jd_logistics', col: 0, order: 1, type: 'source',
        label: 'JD Logistics', value: 8.8, notes: ['+29% Y/Y', '2% operating margin', '+2pp Y/Y'],
        color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK,
      },
      {
        id: 'new_businesses', col: 0, order: 2, type: 'source',
        label: 'New Businesses', value: 0.9, notes: ['+9% Y/Y', '(165%) operating margin', '(188pp) Y/Y'],
        color: SOURCE, labelColor: SOURCE, linkTint: SOURCE_LINK,
      },
      {
        id: 'gross_revenue', col: 1, order: 0, type: 'hub',
        label: '', value: 48.6,
        color: SOURCE, labelColor: SOURCE,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 45.8, notes: ['+5% Y/Y'],
        color: SOURCE, labelColor: SOURCE,
      },
      {
        id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost',
        label: ['Intrasegment', 'eliminations'], value: 2.9,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 7.7, notes: ['17% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 38.1,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 0.6, notes: ['1% margin', '(2pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 7.1,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 5, order: 0, type: 'profit',
        label: 'Other', value: 0.5,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 0.8, notes: ['2% margin', '(2pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 6, order: 1, type: 'cost',
        label: 'Tax', value: 0.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'fulfillment', col: 6, order: 2, type: 'cost',
        label: 'Fulfillment', value: 3.4,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'marketing', col: 6, order: 3, type: 'cost',
        label: 'Marketing', value: 2.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 6, order: 4, type: 'cost',
        label: 'R&D', value: 1.0,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 5, type: 'cost',
        label: 'General & admin', value: 0.5,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'jd_retail', target: 'gross_revenue', value: 38.9, width: 323, targetOrder: 0 },
      { source: 'jd_logistics', target: 'gross_revenue', value: 8.8, width: 73, targetOrder: 1 },
      { source: 'new_businesses', target: 'gross_revenue', value: 0.9, width: 8, targetOrder: 2 },

      { source: 'gross_revenue', target: 'revenue', value: 45.8, width: 379, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 2.9, width: 24, sourceOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 7.7, width: 64, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 38.1, width: 315, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 5, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 7.1, width: 59, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 0.3, width: 3, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.2, width: 2, sourceOrder: 1 },
      { source: 'other', target: 'net_profit', value: 0.5, width: 4, targetOrder: 1 },

      { source: 'operating_expenses', target: 'fulfillment', value: 3.4, width: 28, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 2.2, width: 18, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 1.0, width: 8, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'ga', value: 0.5, width: 4, sourceOrder: 3 },
    ],

    i18n: {
      zh: {
        name: 'JD.com · 2026 财年第一季度',
        meta: {
          title: 'JD.com 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        nodes: {
          jd_retail: { label: '京东零售', notes: ['同比 +2%', '营业利润率 6%', '同比 +1 个百分点'] },
          jd_logistics: { label: '京东物流', notes: ['同比 +29%', '营业利润率 2%', '同比 +2 个百分点'] },
          new_businesses: { label: '新业务', notes: ['同比 +9%', '营业利润率 (165%)', '同比 (188 个百分点)'] },
          gross_revenue: { label: '' },
          revenue: { label: '收入', notes: ['同比 +5%'] },
          intersegment_eliminations: { label: '分部间抵销' },
          gross_profit: { label: '毛利润', notes: ['利润率 17%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 (2 个百分点)'] },
          tax: { label: '税费' },
          fulfillment: { label: '履约' },
          marketing: { label: '营销' },
          rnd: { label: '研发' },
          ga: { label: '管理费用' },
        },
        layout: {
          labels: {
            jd_retail: {
              blocks: [
                {
                  x: 442, top: 356, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 286, top: 469, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '京东零售', size: 40, weight: 800, color: SOURCE },
                    { text: '营业利润率 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            jd_logistics: {
              blocks: [
                {
                  x: 442, top: 872, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +29%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 238, top: 1014, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润率 2%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            new_businesses: {
              blocks: [
                {
                  x: 426, top: 1134, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 212, top: 1212, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '新业务', size: 40, weight: 800, color: SOURCE },
                    { text: '营业利润率 (165%)', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (188 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1195, top: 506, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: SOURCE },
                    { text: '$value', size: 40, weight: 400, color: SOURCE },
                    { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            intersegment_eliminations: {
              blocks: [
                {
                  x: 1226, top: 1193, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '分部间', size: 34, weight: 800, color: RED_LABEL },
                    { text: '抵销', size: 34, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 32, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1570, top: 364, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 17%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1570, top: 1134, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800, color: RED_LABEL },
                    { text: '成本', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1948, top: 286, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 1%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1938, top: 727, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 40, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 40, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 40, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2196, top: 462, anchor: 'middle', lineGap: 6,
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
                  x: 2498, top: 335, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 2%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 562, anchor: 'middle',
                  lines: [{ text: '税费 ($0.2B)', size: 31, weight: 800, color: RED_LABEL }],
                },
              ],
            },
            fulfillment: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 733, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '履约', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            marketing: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 902, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营销', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1040, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1166, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理', size: 31, weight: 800, color: RED_LABEL },
                    { text: '费用', size: 31, weight: 800, color: RED_LABEL },
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
