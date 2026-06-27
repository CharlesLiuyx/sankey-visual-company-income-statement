/* ====================================================================
 * Palantir - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/palantir-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#155277';
  const NOTE = '#707070';
  const GRAY_LINK = '#8d8f8f';
  const GREEN = '#2aa329';
  const GREEN_LABEL = '#00964a';
  const GREEN_LINK = '#9bcd9b';
  const RED = '#d70000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const CARD = '#171a20';
  const RIGHT_LABEL_X = 2443;

  const palantirLogo = `
    <g transform="translate(-30 0)">
    <g transform="translate(3 5)" fill="none" stroke="${BLACK}" stroke-linejoin="round">
      <circle cx="64" cy="54" r="41" stroke-width="15"/>
      <path d="M19 109L64 129L109 109" stroke-width="14"/>
    </g>
    <text x="146" y="117" font-family="Arial,Helvetica,sans-serif" font-size="109" font-weight="400" fill="${BLACK}"
      textLength="445" lengthAdjust="spacingAndGlyphs">Palantir</text>
    </g>
  `;

  const annotations = (labels) => `
    <g font-family="Montserrat,Arial,sans-serif">
      <rect x="86" y="1122" width="216" height="165" rx="29" fill="${CARD}"/>
      <text x="194" y="1177" text-anchor="middle" font-size="31" font-weight="800" fill="#ffffff">${labels.dbnr}</text>
      <text x="194" y="1219" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">150%</text>
      <text x="194" y="1261" text-anchor="middle" font-size="29" font-weight="500" fill="#ffffff">${labels.dbnrGrowth}</text>

      <rect x="311" y="1125" width="413" height="160" rx="26" fill="${CARD}"/>
      <text x="518" y="1175" text-anchor="middle" font-size="30" font-weight="800" fill="#ffffff">${labels.usCommercialRdv}</text>
      <text x="518" y="1217" text-anchor="middle" font-size="31" font-weight="500" fill="#ffffff">$4.9B</text>
      <text x="518" y="1259" text-anchor="middle" font-size="28" font-weight="500" fill="#ffffff">${labels.rdvGrowth}</text>

      <text x="102" y="1323" font-size="29" font-weight="500" fill="${NOTE}">${labels.dbnrFootnote}</text>
      <text x="102" y="1365" font-size="29" font-weight="500" fill="${NOTE}">${labels.rdvFootnote}</text>
    </g>`;

  const annotationsEn = annotations({
    dbnr: 'DBNR',
    dbnrGrowth: '+26pp Y/Y',
    usCommercialRdv: 'US Commercial RDV',
    rdvGrowth: '+112% Y/Y &amp; +12% Q/Q',
    dbnrFootnote: 'DBNR = Dollar Based Net Retention',
    rdvFootnote: 'RDV = Remaining Deal Value',
  });

  const annotationsZh = annotations({
    dbnr: '美元净留存',
    dbnrGrowth: '同比 +26点',
    usCommercialRdv: '美国商业 RDV',
    rdvGrowth: '同比 +112% / 环比 +12%',
    dbnrFootnote: 'DBNR = 美元净留存率',
    rdvFootnote: 'RDV = 剩余交易价值',
  });

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'palantir-q1-fy26',
    name: 'Palantir · Q1 FY26',
    company: 'Palantir',
    meta: {
      company: 'Palantir',
      title: 'Palantir Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/palantir-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2220,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 635,
      logoHeight: 158,
      logoY: 272,
      logoViewBox: '0 0 640 150',
      logoSvg: palantirLogo,
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
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        commercial: { x: 384, y: 513, width: 71, height: 182 },
        government: { x: 384, y: 892, width: 71, height: 202 },
        revenue: { x: 851, y: 616, width: 71, height: 385 },
        gross_profit: { x: 1318, y: 514, width: 71, height: 335 },
        cost_of_revenue: { x: 1318, y: 1042, width: 71, height: 51 },
        operating_profit: { x: 1785, y: 418, width: 71, height: 177 },
        operating_expenses: { x: 1785, y: 787, width: 71, height: 156 },
        interest: { x: 2081, y: 309, width: 70, height: 13 },
        other: { x: 2131, y: 572, width: 70, height: 14 },
        net_profit: { x: 2252, y: 337, width: 72, height: 206 },
        tax: { x: 2252, y: 722, width: 72, height: 2 },
        sm: { x: 2252, y: 828, width: 72, height: 75 },
        ga: { x: 2252, y: 1035, width: 72, height: 42 },
        rnd: { x: 2252, y: 1219, width: 72, height: 37 },
      },
      labels: {
        commercial: {
          blocks: [
            {
              x: 420, top: 418, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+95% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 335, top: 560, anchor: 'end', lines: [{ text: 'Commercial', size: 36, weight: 800 }] },
          ],
        },
        government: {
          blocks: [
            {
              x: 420, top: 797, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+76% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 335, top: 950, anchor: 'end', lines: [{ text: 'Government', size: 36, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 887, top: 461, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+85% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1354, top: 326, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '87% margin', size: 29, weight: 400, color: NOTE },
                { text: '+6pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1354, top: 1112, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 37, weight: 800 },
                { text: 'revenue', size: 37, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1821, top: 222, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '46% margin', size: 29, weight: 400, color: NOTE },
                { text: '+26pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1821, top: 968, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2116, top: 222, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2166, top: 609, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2350, top: 369, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '54% margin', size: 29, weight: 400, color: NOTE },
                { text: '+29pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 691, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 827, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '20% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1034, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1196, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '10% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(5pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'commercial', col: 0, order: 0, type: 'source', label: 'Commercial', value: 774, notes: ['+95% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'government', col: 0, order: 1, type: 'source', label: 'Government', value: 858, notes: ['+76% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 1633, valueText: '$1,633M', notes: ['+85% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 1417, valueText: '$1,417M', notes: ['87% margin', '+6pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 216, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 754, notes: ['46% margin', '+26pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 663, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 66, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other', col: 4, order: 1, type: 'profit', label: 'Other', value: 68, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 876, notes: ['54% margin', '+29pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 12, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 319, notes: ['20% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 183, notes: ['11% of revenue', '(7pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 161, notes: ['10% of revenue', '(5pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'commercial', target: 'revenue', value: 774, width: 182, sourceOrder: 0, targetOrder: 0 },
      { source: 'government', target: 'revenue', value: 858, width: 202, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 1417, width: 335, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 216, width: 51, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 754, width: 177, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 663, width: 156, sourceOrder: 1, targetOrder: 0 },

      { source: 'interest', target: 'net_profit', value: 66, width: 13, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 754, width: 177, sourceOrder: 0, targetOrder: 1 },
      {
        source: 'other',
        target: 'net_profit',
        value: 68,
        width: 14,
        sourceOrder: 0,
        targetOrder: 2,
        curve: { c1x: 2210, c1y: 579, c2x: 2220, c2y: 536 },
      },
      {
        source: 'operating_profit',
        target: 'tax',
        value: 12,
        width: 2,
        sourceOrder: 1,
        targetOrder: 0,
        curve: { c1x: 1994, c1y: 596, c2x: 2135, c2y: 722 },
      },

      { source: 'operating_expenses', target: 'sm', value: 319, width: 75, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 183, width: 42, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 161, width: 37, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Palantir · 2026 财年第一季度',
        meta: {
          title: 'Palantir 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleSize: 112,
          titleTextLength: 1880,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          commercial: { label: '商业', notes: ['同比 +95%'] },
          government: { label: '政府', notes: ['同比 +76%'] },
          revenue: { label: '收入', notes: ['同比 +85%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 87%', '同比 +6 个百分点'] },
          cost_of_revenue: { label: '收入成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 46%', '同比 +26 个百分点'] },
          operating_expenses: { label: '营业费用' },
          interest: { label: '利息' },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 54%', '同比 +29 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与营销', notes: ['占收入 20%', '同比 (7 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 11%', '同比 (7 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 10%', '同比 (5 个百分点)'] },
        },
        layout: {
          labels: {
            commercial: {
              blocks: [
                {
                  x: 420, top: 418, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +95%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 335, top: 560, anchor: 'end', lines: [{ text: '商业', size: 36, weight: 800 }] },
              ],
            },
            government: {
              blocks: [
                {
                  x: 420, top: 797, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +76%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                { x: 335, top: 950, anchor: 'end', lines: [{ text: '政府', size: 36, weight: 800 }] },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 887, top: 461, anchor: 'middle', lineGap: 9,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '同比 +85%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: {
              blocks: [
                {
                  x: 1354, top: 326, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '毛利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 87%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +6 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            cost_of_revenue: {
              blocks: [
                {
                  x: 1354, top: 1129, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '收入', size: 37, weight: 800 },
                    { text: '成本', size: 37, weight: 800 },
                    { text: '$value', size: 36, weight: 400 },
                  ],
                },
              ],
            },
            operating_profit: {
              blocks: [
                {
                  x: 1821, top: 222, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 46%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +26 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1821, top: 985, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '营业', size: 40, weight: 800 },
                    { text: '费用', size: 40, weight: 800 },
                    { text: '$value', size: 38, weight: 400 },
                  ],
                },
              ],
            },
            interest: {
              blocks: [
                {
                  x: 2116, top: 222, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '利息', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            other: {
              blocks: [
                {
                  x: 2166, top: 609, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2350, top: 369, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '净利润', size: 40, weight: 800 },
                    { text: '$value', size: 39, weight: 400 },
                    { text: '利润率 54%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +29 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 691, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                  ],
                },
              ],
            },
            sm: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 827, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '销售与营销', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 20%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (7 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1034, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (7 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            rnd: {
              blocks: [
                {
                  x: RIGHT_LABEL_X, top: 1196, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '研发', size: 31, weight: 800 },
                    { text: '$value', size: 30, weight: 400 },
                    { text: '占收入 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (5 个百分点)', size: 29, weight: 400, color: NOTE },
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
