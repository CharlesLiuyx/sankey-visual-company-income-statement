/* ====================================================================
 * UiPath - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/uipath-q1-fy27.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const ORANGE = '#ff3f19';
  const ORANGE_LINK = '#f7a08d';
  const GREEN = '#29a32a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9dce9b';
  const RED = '#d60000';
  const RED_LABEL = '#8e1300';
  const RED_LINK = '#e38082';
  const NOTE = '#707070';
  const RIGHT_LABEL_X = 2440;

  const uipathLogo = `
    <g font-family="Montserrat,Arial,sans-serif" fill="${ORANGE}">
      <rect x="26" y="26" width="171" height="170" fill="${ORANGE}"/>
      <rect x="45" y="45" width="133" height="132" fill="#ffffff"/>
      <text x="57" y="158" font-size="116" font-weight="900">Ui</text>
      <text x="215" y="161" font-size="124" font-weight="900"
        textLength="270" lengthAdjust="spacingAndGlyphs">Path</text>
    </g>`;

  const pill = (x, y, width, height, rx, body) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${ORANGE}"/>
      ${body}
    </g>`;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      ${pill(87, 1126, 146, 159, 37, `
        <text x="160" y="1174" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">${labels.arr}</text>
        <text x="160" y="1217" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">$1.78B</text>
        <text x="160" y="1257" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${labels.arrGrowth}</text>
      `)}
      ${pill(241, 1128, 167, 156, 37, `
        <text x="325" y="1175" text-anchor="middle" font-size="29" font-weight="800" fill="#ffffff">DBNR</text>
        <text x="325" y="1218" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">107%</text>
        <text x="325" y="1258" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${labels.dbnrGrowth}</text>
      `)}
      ${pill(415, 1128, 505, 156, 37, `
        <text x="668" y="1190" text-anchor="middle" font-size="${labels.customerSize}" font-weight="500" fill="#ffffff">${labels.customersLine1}</text>
        <text x="668" y="1234" text-anchor="middle" font-size="${labels.customerSize}" font-weight="500" fill="#ffffff">${labels.customersLine2Prefix}<tspan font-weight="800">${labels.customersLine2Strong}</tspan>${labels.customersLine2Suffix}</text>
      `)}
      <text x="220" y="1325" font-size="29" font-weight="500" fill="${NOTE}">${labels.arrFootnote}</text>
      <text x="210" y="1361" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    arr: 'ARR',
    arrGrowth: '+11% Y/Y',
    dbnrGrowth: '(1pp) Q/Q',
    customerSize: 28,
    customersLine1: 'Customers &gt; $1M 333 +10% Y/Y',
    customersLine2Prefix: '&gt; ',
    customersLine2Strong: '$100K',
    customersLine2Suffix: ' 2,506 +12% Y/Y',
    arrFootnote: 'ARR = Annual Recurring Revenue',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
  });

  const annotationsZh = annotations({
    arr: 'ARR',
    arrGrowth: '同比 +11%',
    dbnrGrowth: '环比 (1点)',
    customerSize: 27,
    customersLine1: '客户 &gt; $1M 333，同比 +10%',
    customersLine2Prefix: '&gt; ',
    customersLine2Strong: '$100K',
    customersLine2Suffix: ' 2,506，同比 +12%',
    arrFootnote: 'ARR = 年度经常性收入',
    dbnrFootnote: 'DBNR = 美元净留存率',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'uipath-q1-fy27',
    name: 'UiPath · Q1 FY27',
    company: 'UiPath',
    meta: {
      company: 'UiPath',
      title: 'UiPath Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/uipath-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 2165,
      periodX: 1365,
      periodY: 1310,
      periodNoteY: 1350,
      logoWidth: 510,
      logoHeight: 222,
      logoY: 251,
      logoViewBox: '0 0 510 222',
      logoSvg: uipathLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: ORANGE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 0.68,
      nodes: {
        subscription: { x: 395, y: 454, width: 72, height: 172 },
        licenses: { x: 395, y: 776, width: 72, height: 101 },
        professional_services: { x: 395, y: 1023, width: 72, height: 10 },
        revenue: { x: 862, y: 648, width: 73, height: 284 },
        gross_profit: { x: 1332, y: 559, width: 72, height: 232 },
        cost_of_revenue: { x: 1329, y: 962, width: 72, height: 51 },
        operating_profit: { x: 1797, y: 453, width: 72, height: 18 },
        operating_expenses: { x: 1797, y: 665, width: 72, height: 213 },
        other: { x: 2150, y: 404, width: 72, height: 7 },
        net_profit: { x: 2264, y: 351, width: 72, height: 15 },
        tax: { x: 2264, y: 586, width: 72, height: 11 },
        sm: { x: 2264, y: 803, width: 72, height: 113 },
        rnd: { x: 2264, y: 1019, width: 72, height: 63 },
        ga: { x: 2264, y: 1188, width: 72, height: 35 },
      },
      labels: {
        subscription: {
          blocks: [
            {
              x: 238, top: 508, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Subscription', size: 39, weight: 800 },
                { text: '83% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 432, top: 363, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        licenses: {
          blocks: [
            {
              x: 238, top: 790, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Licenses', size: 39, weight: 800 },
                { text: '99% gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 432, top: 688, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        professional_services: {
          blocks: [
            {
              x: 236, top: 968, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Professional', size: 39, weight: 800 },
                { text: 'services', size: 39, weight: 800 },
                { text: '(93%) gross margin', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 432, top: 935, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+47% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 899, top: 502, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1368, top: 379, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '82% margin', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1833, top: 270, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '7% margin', size: 29, weight: 400, color: NOTE },
                { text: '+11pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2186, top: 431, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2420, top: 257, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '7% margin', size: 29, weight: 400, color: NOTE },
                { text: '+11pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2470, top: 562, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1365, top: 1036, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1833, top: 902, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 803, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '40% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 990, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '22% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(4pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1183, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '13% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(3pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 253, notes: ['+16% Y/Y', '83% gross margin'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'licenses', col: 0, order: 1, type: 'source',
        label: 'Licenses', value: 149, notes: ['+16% Y/Y', '99% gross margin'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'professional_services', col: 0, order: 2, type: 'source',
        label: ['Professional', 'services'], value: 16, notes: ['+47% Y/Y', '(93%) gross margin'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 418, notes: ['+17% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 341, notes: ['82% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 77,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 0, type: 'profit',
        label: 'Operating profit', value: 28, notes: ['7% margin', '+11pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 313,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other', col: 4, order: 0, type: 'profit',
        label: 'Other', value: 13, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 23, notes: ['7% margin', '+11pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 18, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 2, type: 'cost',
        label: 'S&M', value: 168, notes: ['40% of revenue', '(5pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 3, type: 'cost',
        label: 'R&D', value: 93, notes: ['22% of revenue', '(4pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: 'G&A', value: 53, notes: ['13% of revenue', '(3pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'revenue', value: 253, width: 172, sourceOrder: 0, targetOrder: 0 },
      { source: 'licenses', target: 'revenue', value: 149, width: 101, sourceOrder: 0, targetOrder: 1 },
      { source: 'professional_services', target: 'revenue', value: 16, width: 10, sourceOrder: 0, targetOrder: 2 },

      { source: 'revenue', target: 'gross_profit', value: 341, width: 232, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 77, width: 51, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 28, width: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 313, width: 213, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 10, width: 7, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 18, width: 11, sourceOrder: 1, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 13, width: 7, sourceOrder: 0, targetOrder: 1, curve: { c1x: 2226, c1y: 407, c2x: 2248, c2y: 362 } },

      { source: 'operating_expenses', target: 'sm', value: 168, width: 113, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 93, width: 63, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 53, width: 35, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'UiPath · 2027 财年第一季度',
        meta: {
          title: 'UiPath 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 112,
          titleTextLength: 1810,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +16%', '毛利率 83%'] },
          licenses: { label: '许可证', notes: ['同比 +16%', '毛利率 99%'] },
          professional_services: { label: '专业服务', notes: ['同比 +47%', '毛利率 (93%)'] },
          revenue: { label: '收入', notes: ['同比 +17%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 82%', '同比 (0 个百分点)'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 7%', '同比 +11 个百分点'] },
          operating_expenses: { label: '营业费用' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 7%', '同比 +11 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 40%', '同比 (5 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 22%', '同比 (4 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 13%', '同比 (3 个百分点)'] },
        },
        layout: {
          labels: {
            subscription: {
              blocks: [
                {
                  x: 238, top: 508, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '订阅', size: 39, weight: 800 },
                    { text: '毛利率 83%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 432, top: 363, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            licenses: {
              blocks: [
                {
                  x: 238, top: 790, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '许可证', size: 39, weight: 800 },
                    { text: '毛利率 99%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 432, top: 688, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +16%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            professional_services: {
              blocks: [
                {
                  x: 236, top: 968, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '专业', size: 39, weight: 800 },
                    { text: '服务', size: 39, weight: 800 },
                    { text: '毛利率 (93%)', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 432, top: 935, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +47%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 899, top: 502, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1368, top: 379, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 82%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1833, top: 270, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 7%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +11 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2186, top: 431, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2420, top: 257, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 7%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +11 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2470, top: 562, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1365, top: 1036, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 36, weight: 800 },
                    { text: '成本', size: 36, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1833, top: 902, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 39, weight: 800 },
                    { text: '费用', size: 39, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 803, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 40%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 990, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 22%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (4 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1183, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '一般及行政', size: 31, weight: 800 },
                    { text: '$value', size: 31, weight: 400 },
                    { text: '占收入 13%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (3 个百分点)', size: 29, weight: 400, color: NOTE },
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
