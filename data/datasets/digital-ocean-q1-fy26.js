/* ====================================================================
 * DigitalOcean - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/digital-ocean-q1-fy26.png as a
 * fixed d3-sankey layout with a validated reusable SVG logo asset.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#747474';
  const DO_BLUE = '#0080ff';
  const DO_LINK = '#7ebcf2';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d60000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};
  const SCALE = 1.25;

  const h = (value) => Math.round(value * SCALE * 10) / 10;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="32" fill="${DO_BLUE}"/>
      ${lines
        .map(
          (line) =>
            `<text x="${x + width / 2}" y="${y + line.y}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight || 500}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(86, 1116, 166, 166, [
        { text: labels.arr, y: 55, size: 30, weight: 800 },
        { text: '$1,032M', y: 98, size: 31 },
        { text: labels.arrGrowth, y: 137, size: 28 },
      ])}
      ${kpiCard(266, 1116, 166, 166, [
        { text: labels.dbnr, y: 55, size: 30, weight: 800 },
        { text: '101%', y: 98, size: 31 },
        { text: labels.dbnrGrowth, y: 137, size: 28 },
      ])}
      ${kpiCard(445, 1116, 275, 166, [
        { text: labels.customers, y: 55, size: 30, weight: 800 },
        { text: labels.customerThreshold, y: 98, size: 31 },
        { text: labels.customerGrowth, y: 137, size: 28 },
      ])}
      <text x="225" y="1326" font-size="29" font-weight="500" fill="${NOTE}">${labels.arrFootnote}</text>
      <text x="209" y="1362" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    arr: 'ARR',
    arrGrowth: '+22% Y/Y',
    dbnr: 'DBNR',
    dbnrGrowth: '+1pp Y/Y',
    customers: 'Customers',
    customerThreshold: '&gt;$100K ARR',
    customerGrowth: '+73% Y/Y',
    arrFootnote: 'ARR = Annual Run-Rate Revenue',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    arr: 'ARR',
    arrGrowth: '同比 +22%',
    dbnr: 'DBNR',
    dbnrGrowth: '同比 +1 个百分点',
    customers: '客户',
    customerThreshold: 'ARR &gt;$100K',
    customerGrowth: '同比 +73%',
    arrFootnote: 'ARR = 年化经常性收入',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'digital-ocean-q1-fy26',
    name: 'DigitalOcean · Q1 FY26',
    company: 'DigitalOcean',
    meta: {
      company: 'DigitalOcean',
      title: 'Digital Ocean Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/digital-ocean-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2460,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 390,
      logoHeight: 286,
      logoY: 228,
      logoViewBox: '0 0 404 296',
      logoSvg: BUSINESS_ICONS.digitalOceanCompanyLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: DO_BLUE, label: DO_BLUE },
        hub: { node: DO_BLUE, label: DO_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: DO_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: SCALE,
      nodes: {
        north_america: { x: 356, y: 384, width: 73, height: h(113) },
        europe: { x: 356, y: 632, width: 73, height: h(62) },
        asia: { x: 356, y: 824, width: 73, height: h(57) },
        other: { x: 356, y: 1018, width: 73, height: h(26) },
        revenue: { x: 824, y: 686, width: 73, height: h(258) },
        gross_profit: { x: 1291, y: 548, width: 73, height: h(145) },
        cost_of_revenue: { x: 1291, y: 952, width: 73, height: h(113) },
        operating_profit: { x: 1760, y: 433, width: 73, height: h(37) },
        operating_expenses: { x: 1760, y: 735, width: 73, height: h(108) },
        net_profit: { x: 2227, y: 320, width: 73, height: h(16) },
        interest: { x: 2227, y: 565, width: 73, height: h(12) },
        tax: { x: 2227, y: 684, width: 73, height: h(9) },
        rnd: { x: 2227, y: 854, width: 73, height: h(49) },
        ga: { x: 2227, y: 1078, width: 73, height: h(38) },
        sm: { x: 2227, y: 1280, width: 73, height: h(22) },
      },
      labels: {
        north_america: {
          blocks: [
            {
              x: 392, top: 294, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+19% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 298, top: 418, anchor: 'end', lineGap: 10,
              lines: [
                { text: 'North', size: 40, weight: 800 },
                { text: 'America', size: 40, weight: 800 },
              ],
            },
          ],
        },
        europe: {
          blocks: [
            {
              x: 392, top: 544, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(14%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 298, top: 657, anchor: 'end', lines: [{ text: 'Europe', size: 40, weight: 800 }] },
          ],
        },
        asia: {
          blocks: [
            {
              x: 392, top: 735, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(8%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 298, top: 848, anchor: 'end', lines: [{ text: 'Asia', size: 40, weight: 800 }] },
          ],
        },
        other: {
          blocks: [
            {
              x: 392, top: 930, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(9%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 298, top: 1036, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 861, top: 546, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+22% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1328, top: 368, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '56% margin', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1328, top: 1116, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1796, top: 253, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '14% margin', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1796, top: 891, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2376, top: 278, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '6% margin', size: 29, weight: 400, color: NOTE },
                { text: '(12pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2382, top: 532, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2382, top: 654, anchor: 'start', lineGap: 8,
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
              x: 2382, top: 844, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '19% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2382, top: 1056, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '15% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2382, top: 1264, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'north_america', col: 0, order: 0, type: 'source', label: ['North', 'America'], value: 113, notes: ['+19% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'europe', col: 0, order: 1, type: 'source', label: 'Europe', value: 62, notes: ['(14%) Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'asia', col: 0, order: 2, type: 'source', label: 'Asia', value: 57, notes: ['(8%) Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'other', col: 0, order: 3, type: 'source', label: 'Other', value: 26, notes: ['(9%) Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 258, notes: ['+22% Y/Y'], color: DO_BLUE, labelColor: DO_BLUE, linkTint: DO_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 145, notes: ['56% margin', '(5pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 113, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 37, notes: ['14% margin', '(3pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 108, valueText: '($108M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 16, notes: ['6% margin', '(12pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'interest', col: 4, order: 1, type: 'cost', label: 'Interest', value: 12, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 4, order: 3, type: 'cost', label: 'R&D', value: 49, notes: ['19% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 38, notes: ['15% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 4, order: 5, type: 'cost', label: 'S&M', value: 22, notes: ['8% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'north_america', target: 'revenue', value: 113, width: h(113), sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 62, width: h(62), sourceOrder: 0, targetOrder: 1 },
      { source: 'asia', target: 'revenue', value: 57, width: h(57), sourceOrder: 0, targetOrder: 2 },
      { source: 'other', target: 'revenue', value: 26, width: h(26), sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 145, width: h(145), sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 113, width: h(113), sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 37, width: h(37), sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 108, width: h(108), sourceOrder: 1, targetOrder: 0 },

      {
        source: 'operating_profit',
        target: 'net_profit',
        value: 16,
        width: h(16),
        sourceOrder: 0,
        targetOrder: 0,
        curve: { c1x: 1950, c1y: 451, c2x: 2090, c2y: 325 },
      },
      {
        source: 'operating_profit',
        target: 'interest',
        value: 12,
        width: h(12),
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1948, c1y: 463, c2x: 2090, c2y: 570 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 9,
        width: h(9),
        sourceOrder: 2,
        targetOrder: 0,
        curve: { c1x: 1948, c1y: 470, c2x: 2090, c2y: 690 },
      },

      { source: 'operating_expenses', target: 'rnd', value: 49, width: h(49), sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 38, width: h(38), sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 22, width: h(22), sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'DigitalOcean · 2026 财年第一季度',
        meta: {
          title: 'DigitalOcean 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1800,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          north_america: { label: '北美', notes: ['同比 +19%'] },
          europe: { label: '欧洲', notes: ['同比 (14%)'] },
          asia: { label: '亚洲', notes: ['同比 (8%)'] },
          other: { label: '其他', notes: ['同比 (9%)'] },
          revenue: { label: '收入', notes: ['同比 +22%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 56%', '同比 (5 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 14%', '同比 (3 个百分点)'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 6%', '同比 (12 个百分点)'] },
          interest: { label: '利息' },
          tax: { label: '税费' },
          rnd: { label: '研发', notes: ['占收入 19%', '同比 +0 个百分点'] },
          ga: { label: '管理费用', notes: ['占收入 15%', '同比 (1 个百分点)'] },
          sm: { label: '销售与营销', notes: ['占收入 8%', '同比 (1 个百分点)'] },
        },
        layout: {
          labels: {
            north_america: {
              blocks: [
                {
                  x: 392, top: 294, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +19%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 298, top: 441, anchor: 'end', lines: [{ text: '北美', size: 40, weight: 800 }] },
              ],
            },
            europe: {
              blocks: [
                {
                  x: 392, top: 544, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (14%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 298, top: 657, anchor: 'end', lines: [{ text: '欧洲', size: 40, weight: 800 }] },
              ],
            },
            asia: {
              blocks: [
                {
                  x: 392, top: 735, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (8%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 298, top: 848, anchor: 'end', lines: [{ text: '亚洲', size: 40, weight: 800 }] },
              ],
            },
            other: {
              blocks: [
                {
                  x: 392, top: 930, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 (9%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 298, top: 1036, anchor: 'end', lines: [{ text: '其他', size: 40, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 861, top: 546, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +22%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1328, top: 368, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 56%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1328, top: 1116, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1796, top: 253, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 14%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1796, top: 891, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2376, top: 278, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '利润率 6%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (12 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2382, top: 532, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2382, top: 654, anchor: 'start', lineGap: 8,
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
                  x: 2382, top: 844, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 19%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +0 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2382, top: 1056, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 15%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: 2382, top: 1264, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 8%', size: 29, weight: 400, color: NOTE },
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
