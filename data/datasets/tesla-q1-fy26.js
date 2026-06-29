/* ====================================================================
 * Tesla - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/tesla-q1-fy26.png as a fixed
 * d3-sankey layout with SVG-only Tesla annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#6f6f6f';
  const GRAY_LINK = '#8f8f8d';
  const GREEN = '#27a126';
  const GREEN_LABEL = '#079248';
  const GREEN_LINK = '#9ccc99';
  const RED = '#d60000';
  const RED_LABEL = '#991600';
  const RED_LINK = '#e38184';
  const TESLA_RED = '#e51a3d';
  const TESLA_LOGO_PATH =
    'M12 0C7.7 0 3.9.9 1.1 2.6l1.5 2.6C5 4 8.3 3.3 12 3.3S19 4 21.4 5.2l1.5-2.6C20.1.9 16.3 0 12 0ZM6.4 6.1C8.1 5.7 9.9 5.5 12 5.5s3.9.2 5.6.6l-1.2 2.7c-.9-.2-1.8-.3-2.8-.4L12.7 24h-1.4l-.9-15.6c-1 0-1.9.2-2.8.4L6.4 6.1Z';
  const teslaPath = (window.SANKEY_BRAND && window.SANKEY_BRAND.tesla) || TESLA_LOGO_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  function metricCard(x, title, value, note) {
    return `
      <g>
        <rect x="${x}" y="1225" width="188" height="145" rx="24" fill="#ee1743"/>
        <text x="${x + 94}" y="1275" text-anchor="middle" font-size="28" font-weight="800" fill="#ffffff">${title}</text>
        <text x="${x + 94}" y="1323" text-anchor="middle" font-size="30" font-weight="500" fill="#ffffff">${value}</text>
        <text x="${x + 94}" y="1356" text-anchor="middle" font-size="21" font-weight="700" fill="#ffffff">${note}</text>
      </g>`;
  }

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(52 566) scale(0.78)">${businessIcons.teslaAutoCluster || ''}</g>
      <g transform="translate(34 1094) scale(0.95)">${businessIcons.teslaEnergyCluster || ''}</g>
      <g transform="translate(640 1254) scale(0.82)">${businessIcons.teslaCharger || ''}</g>
      ${metricCard(2058, 'Production', '408K', '+13% Y/Y')}
      ${metricCard(2255, 'Deliveries', '358K', '+6% Y/Y')}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tesla-q1-fy26',
    name: 'Tesla - Q1 FY26',
    company: 'Tesla',
    meta: {
      company: 'Tesla',
      title: 'Tesla Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tesla-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 148,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2040,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 250,
      logoHeight: 215,
      logoY: 252,
      logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${teslaPath}" fill="${TESLA_RED}"/>`,
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
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 20.4,
      nodes: {
        auto_sales: { x: 452, y: 428, width: 72, height: 316 },
        regulatory_credits: { x: 452, y: 868, width: 72, height: 8 },
        leasing: { x: 452, y: 1002, width: 72, height: 8 },
        auto: { x: 827, y: 548, width: 72, height: 330 },
        energy_generation_storage: { x: 630, y: 1123, width: 72, height: 49 },
        services: { x: 907, y: 1264, width: 72, height: 76 },
        revenue: { x: 1200, y: 646, width: 72, height: 458 },
        gross_profit: { x: 1574, y: 543, width: 73, height: 95 },
        cost_of_revenue: { x: 1575, y: 838, width: 72, height: 362 },
        operating_profit: { x: 1948, y: 469, width: 72, height: 18 },
        operating_expenses: { x: 1952, y: 655, width: 72, height: 78 },
        interest: { x: 2214, y: 441, width: 72, height: 6 },
        net_profit: { x: 2322, y: 394, width: 72, height: 16 },
        other: { x: 2322, y: 579, width: 72, height: 10 },
        tax: { x: 2322, y: 705, width: 72, height: 6 },
        rnd: { x: 2322, y: 846, width: 72, height: 39 },
        sga: { x: 2322, y: 1060, width: 72, height: 37 },
      },
      labels: {
        auto_sales: {
          blocks: [
            {
              x: 488, top: 330, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+20% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 287, top: 506, anchor: 'middle',
              lines: [{ text: 'Auto sales', size: 40, weight: 800 }],
            },
          ],
        },
        regulatory_credits: {
          blocks: [
            {
              x: 488, top: 778, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(36%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 447, top: 868, anchor: 'end',
              lines: [{ text: 'Regulatory credits', size: 38, weight: 800 }],
            },
          ],
        },
        leasing: {
          blocks: [
            {
              x: 488, top: 912, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(15%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 447, top: 989, anchor: 'end',
              lines: [{ text: 'Leasing', size: 38, weight: 800 }],
            },
          ],
        },
        auto: {
          blocks: [
            {
              x: 864, top: 399, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Auto', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        energy_generation_storage: {
          blocks: [
            {
              x: 666, top: 1026, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '(12%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 248, top: 1108, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Energy generation', size: 38, weight: 800 },
                { text: '& storage', size: 38, weight: 800 },
              ],
            },
          ],
        },
        services: {
          blocks: [
            {
              x: 943, top: 1174, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+42% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 802, top: 1290, anchor: 'middle',
              lines: [{ text: 'Services', size: 40, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1236, top: 505, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1611, top: 352, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 38, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '21% margin', size: 28, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1611, top: 1215, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1988, top: 282, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '4% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1978, top: 747, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2250, top: 466, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2532, top: 320, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 38, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '2% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2498, top: 548, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2498, top: 674, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2500, top: 839, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '9% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2500, top: 1061, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'auto_sales', col: 0, order: 0, type: 'source', label: 'Auto sales', value: 15.5, notes: ['+20% Y/Y'] },
      {
        id: 'regulatory_credits',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Regulatory credits',
        value: 0.4,
        notes: ['(36%) Y/Y'],
      },
      { id: 'leasing', col: 0, order: 2, type: 'source', label: 'Leasing', value: 0.4, notes: ['(15%) Y/Y'] },
      { id: 'auto', col: 1, order: 0, type: 'source', label: 'Auto', value: 16.2, notes: ['+16% Y/Y'] },
      {
        id: 'energy_generation_storage',
        col: 1,
        order: 1,
        type: 'source',
        label: ['Energy generation', '& storage'],
        value: 2.4,
        notes: ['(12%) Y/Y'],
      },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 3.7, notes: ['+42% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 22.4, notes: ['+16% Y/Y'] },
      {
        id: 'gross_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Gross profit',
        value: 4.7,
        notes: ['21% margin', '+5pp Y/Y'],
      },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 17.7 },
      {
        id: 'operating_profit',
        col: 4,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 0.9,
        notes: ['4% margin', '+2pp Y/Y'],
      },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 3.8 },
      { id: 'interest', col: 5, order: 0, type: 'profit', label: 'Interest', value: 0.3 },
      {
        id: 'net_profit',
        col: 6,
        order: 0,
        type: 'profit',
        label: 'Net profit',
        value: 0.5,
        notes: ['2% margin', '+0pp Y/Y'],
      },
      { id: 'other', col: 6, order: 1, type: 'cost', label: 'Other', value: 0.5 },
      { id: 'tax', col: 6, order: 2, type: 'cost', label: 'Tax', value: 0.3 },
      { id: 'rnd', col: 6, order: 3, type: 'cost', label: 'R&D', value: 1.9, notes: ['9% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 6, order: 4, type: 'cost', label: 'SG&A', value: 1.8, notes: ['8% of revenue', '+2pp Y/Y'] },
    ],

    links: [
      { source: 'auto_sales', target: 'auto', value: 15.5, width: 316, targetOrder: 0 },
      { source: 'regulatory_credits', target: 'auto', value: 0.4, width: 8, targetOrder: 1 },
      { source: 'leasing', target: 'auto', value: 0.4, width: 8, targetOrder: 2 },
      { source: 'auto', target: 'revenue', value: 16.2, width: 330, targetOrder: 0 },
      { source: 'energy_generation_storage', target: 'revenue', value: 2.4, width: 49, targetOrder: 1 },
      { source: 'services', target: 'revenue', value: 3.7, width: 76, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 4.7, width: 96, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 17.7, width: 362, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 0.9, width: 18, sourceOrder: 0, y0: 552, y1: 478 },
      { source: 'gross_profit', target: 'operating_expenses', value: 3.8, width: 78, sourceOrder: 1 },

      {
        source: 'interest',
        target: 'net_profit',
        value: 0.3,
        width: 6,
        targetOrder: 1,
        curve: { c1x: 2290, c1y: 446, c2x: 2310, c2y: 407 },
      },
      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 0.5,
        width: 4,
        sourceOrder: 0,
        targetOrder: 0,
        y0: 469,
        curve: { c1x: 2130, c1y: 469, c2x: 2250, c2y: 399 },
      },
      {
        source: 'operating_profit',
        target: 'other',
        value: 0.5,
        width: 10,
        sourceOrder: 1,
        y0: 476,
        curve: { c1x: 2110, c1y: 476, c2x: 2238, c2y: 584 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 0.3,
        width: 6,
        sourceOrder: 2,
        y0: 484,
        curve: { c1x: 2110, c1y: 484, c2x: 2240, c2y: 708 },
      },
      { source: 'operating_expenses', target: 'rnd', value: 1.9, width: 39, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.8, width: 37, sourceOrder: 1 },
    ],

    i18n: {
      zh: {
        name: 'Tesla · 2026 财年第一季度',
        meta: {
          title: 'Tesla 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        annotationsSvg: `
          <g font-family="Montserrat,Arial,sans-serif">
            <g transform="translate(52 566) scale(0.78)">${businessIcons.teslaAutoCluster || ''}</g>
            <g transform="translate(34 1094) scale(0.95)">${businessIcons.teslaEnergyCluster || ''}</g>
            <g transform="translate(640 1254) scale(0.82)">${businessIcons.teslaCharger || ''}</g>
            ${metricCard(2058, '产量', '408K', '同比 +13%')}
            ${metricCard(2255, '交付量', '358K', '同比 +6%')}
          </g>`,
        nodes: {
          auto_sales: { label: '汽车销售', notes: ['同比 +20%'] },
          regulatory_credits: { label: '监管积分', notes: ['同比 (36%)'] },
          leasing: { label: '租赁', notes: ['同比 (15%)'] },
          auto: { label: '汽车业务', notes: ['同比 +16%'] },
          energy_generation_storage: { label: '能源发电与储能', notes: ['同比 (12%)'] },
          services: { label: '服务', notes: ['同比 +42%'] },
          revenue: { label: '收入', notes: ['同比 +16%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 21%', '同比 +5 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 4%', '同比 +2 个百分点'] },
          operating_expenses: { label: '运营费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 2%', '同比 +0 个百分点'] },
          other: { label: '其他' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 9%', '同比 +1 个百分点'] },
          sga: { label: '销售及管理', notes: ['占收入 8%', '同比 +2 个百分点'] },
        },
        layout: {
          labels: {
            auto_sales: {
              blocks: [
                {
                  x: 488, top: 330, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +20%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 287, top: 506, anchor: 'middle',
                  lines: [{ text: '汽车销售', size: 40, weight: 800 }],
                },
              ],
            },
            regulatory_credits: {
              blocks: [
                {
                  x: 488, top: 778, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (36%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 447, top: 868, anchor: 'end',
                  lines: [{ text: '监管积分', size: 38, weight: 800 }],
                },
              ],
            },
            leasing: {
              blocks: [
                {
                  x: 488, top: 912, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (15%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 447, top: 989, anchor: 'end',
                  lines: [{ text: '租赁', size: 38, weight: 800 }],
                },
              ],
            },
            auto: {
              blocks: [
                {
                  x: 864, top: 399, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '汽车业务', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +16%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            energy_generation_storage: {
              blocks: [
                {
                  x: 666, top: 1026, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 (12%)', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 625, top: 1108, anchor: 'end', lineGap: 8,
                  lines: [
                    { text: '能源发电', size: 38, weight: 800 },
                    { text: '与储能', size: 38, weight: 800 },
                  ],
                },
              ],
            },
            services: {
              blocks: [
                {
                  x: 943, top: 1174, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +42%', size: 28, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 802, top: 1290, anchor: 'middle',
                  lines: [{ text: '服务', size: 40, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1236, top: 505, anchor: 'middle', lineGap: 11,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +16%', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1611, top: 352, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '毛利润', size: 38, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 21%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +5 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1611, top: 1215, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 38, weight: 800 },
                    { text: '成本', size: 38, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1988, top: 282, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 4%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1978, top: 747, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '运营', size: 38, weight: 800 },
                    { text: '费用', size: 38, weight: 800 },
                    { text: '$value', size: 37, weight: 400 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2250, top: 466, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 32, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2532, top: 320, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 38, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                    { text: '利润率 2%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2498, top: 548, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2498, top: 674, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: 2508, top: 839, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 9%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 28, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sga: {
              blocks: [
                {
                  x: 2508, top: 1061, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售及管理', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 8%', size: 28, weight: 400, color: NOTE },
                    { text: '同比 +2 个百分点', size: 28, weight: 400, color: NOTE },
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
