/* ====================================================================
 * Paycom - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/paycom-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#707070';
  const GRAY_LINK = '#8f8f8c';
  const GREEN = '#29a329';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9acd99';
  const RED = '#d60000';
  const RED_LABEL = '#961600';
  const RED_LINK = '#e28183';
  const RIGHT_LABEL_X = 2380;

  const paycomLogo = `
    <defs>
      <linearGradient id="paycom-logo-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#b5d96a"/>
        <stop offset="0.42" stop-color="#35ad4b"/>
        <stop offset="1" stop-color="#008340"/>
      </linearGradient>
    </defs>
    <g>
      <rect x="0" y="10" width="140" height="140" rx="10" fill="url(#paycom-logo-gradient)"/>
      <path d="M3 146 L139 10 L139 45 L36 150 Z" fill="#008d42" opacity="0.16"/>
      <path d="M42 50 Q42 38 54 38 H96 Q108 38 108 50 V88 Q108 100 96 100 H72 Q61 100 61 111 V132 H42 Z" fill="#ffffff"/>
      <path d="M74 100 H112 V125 Q112 138 99 138 H74 Z" fill="#008843"/>
      <text x="178" y="114" font-family="Arial Rounded MT Bold,Arial Black,Arial,sans-serif"
        font-size="98" font-weight="900" fill="#000000"
        textLength="430" lengthAdjust="spacingAndGlyphs">paycom</text>
      <text x="618" y="65" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="700" fill="#000000">®</text>
    </g>`;

  const zhLayoutLabels = {
    recurring: {
      blocks: [
        {
          x: 408, top: 505, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
          ],
        },
        { x: 270, top: 735, anchor: 'end', lines: [{ text: '经常性收入', size: 40, weight: 800, color: BLACK }] },
      ],
    },
    implementation_other: {
      blocks: [
        {
          x: 408, top: 1027, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 (9%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 270, top: 1084, anchor: 'end', lineGap: 8,
          lines: [
            { text: '实施及', size: 40, weight: 800, color: BLACK },
            { text: '其他', size: 40, weight: 800, color: BLACK },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 875, top: 570, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '收入', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1342, top: 426, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '毛利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 85%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1341, top: 1168, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 35, weight: 800, color: RED_LABEL },
            { text: '成本', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    operating_profit: {
      blocks: [
        {
          x: 1811, top: 333, anchor: 'middle', lineGap: 10,
          lines: [
            { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 37%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +2 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1811, top: 1025, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业', size: 38, weight: 800, color: RED_LABEL },
            { text: '费用', size: 38, weight: 800, color: RED_LABEL },
            { text: '$value', size: 36, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    other: {
      blocks: [
        {
          x: 2120, top: 575, anchor: 'start', lineGap: 8,
          lines: [
            { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: 2340, top: 405, anchor: 'start', lineGap: 10,
          lines: [
            { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 27%', size: 29, weight: 400, color: NOTE },
            { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2430, top: 660, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '税费', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 773, anchor: 'start', lineGap: 8,
          lines: [
            { text: '销售与市场', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: '占收入 21%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 967, anchor: 'start', lineGap: 8,
          lines: [
            { text: '一般及行政', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: '占收入 12%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1122, anchor: 'start', lineGap: 8,
          lines: [
            { text: '研发', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
            { text: '占收入 11%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    depreciation: {
      blocks: [
        {
          x: 2338, top: 1297, anchor: 'start', lineGap: 8,
          lines: [
            { text: '折旧摊销', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'paycom-q1-fy26',
    name: 'Paycom · Q1 FY26',
    company: 'Paycom',
    meta: {
      company: 'Paycom',
      title: 'Paycom Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/paycom-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 200,
      titleSize: 133,
      titleWeight: 800,
      titleTextLength: 2220,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
      logoWidth: 710,
      logoHeight: 165,
      logoY: 270,
      logoViewBox: '0 0 710 165',
      logoSvg: paycomLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },

    layout: {
      scale: 0.555,
      nodes: {
        recurring: { x: 372, y: 602, width: 71, height: 302 },
        implementation_other: { x: 372, y: 1125, width: 71, height: 14 },
        revenue: { x: 839, y: 722, width: 71, height: 317 },
        gross_profit: { x: 1305, y: 614, width: 73, height: 268 },
        cost_of_revenue: { x: 1305, y: 1085, width: 72, height: 47 },
        operating_profit: { x: 1775, y: 523, width: 72, height: 116 },
        operating_expenses: { x: 1773, y: 851, width: 72, height: 152 },
        other: { x: 2105, y: 552, width: 72, height: 3 },
        net_profit: { x: 2240, y: 413, width: 72, height: 85 },
        tax: { x: 2240, y: 681, width: 72, height: 32 },
        sm: { x: 2240, y: 781, width: 72, height: 64 },
        ga: { x: 2240, y: 961, width: 72, height: 37 },
        rnd: { x: 2240, y: 1118, width: 72, height: 33 },
        depreciation: { x: 2240, y: 1294, width: 72, height: 13 },
      },
      labels: {
        recurring: {
          blocks: [
            {
              x: 408, top: 505, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 270, top: 735, anchor: 'end', lines: [{ text: 'Recurring', size: 40, weight: 800 }] },
          ],
        },
        implementation_other: {
          blocks: [
            {
              x: 408, top: 1027, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '(9%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 330, top: 1084, anchor: 'end',
              lines: [{ text: 'Implementation', size: 36, weight: 800 }],
            },
            {
              x: 270, top: 1134, anchor: 'end',
              lines: [{ text: 'and other', size: 38, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 875, top: 570, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1342, top: 426, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '85% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1341, top: 1168, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 35, weight: 800 },
                { text: 'revenue', size: 35, weight: 800 },
                { text: '$value', size: 33, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1811, top: 333, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '37% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1811, top: 1025, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2120, top: 575, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2340, top: 405, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '27% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2430, top: 660, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 773, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '21% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 967, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '12% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1122, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '11% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        depreciation: {
          blocks: [
            {
              x: 2338, top: 1297, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Depreciation', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'recurring', col: 0, order: 0, type: 'source', label: 'Recurring', value: 544.0, notes: ['+9% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'implementation_other', col: 0, order: 1, type: 'source', label: ['Implementation', 'and other'], value: 27.8, notes: ['(9%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 571.9, notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 484.5, notes: ['85% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 87.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 210.2, notes: ['37% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 274.3, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 5.0, valueText: '$4M', color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 155.7, notes: ['27% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 59.5, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 117.6, notes: ['21% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 3, type: 'cost', label: 'G&A', value: 69.4, notes: ['12% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 60.7, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'depreciation', col: 5, order: 5, type: 'cost', label: 'Depreciation', value: 26.7, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'recurring', target: 'revenue', value: 544.0, width: 302, sourceOrder: 0, targetOrder: 0 },
      { source: 'implementation_other', target: 'revenue', value: 27.8, width: 14, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 484.5, width: 268, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 87.3, width: 47, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 210.2, width: 116, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 274.3, width: 152, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 150.7, width: 82, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 59.5, width: 33, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other',
        target: 'net_profit',
        value: 5.0,
        width: 3,
        sourceOrder: 0,
        targetOrder: 1,
        curve: { c1x: 2185, c1y: 552, c2x: 2210, c2y: 498 },
      },
      { source: 'operating_expenses', target: 'sm', value: 117.6, width: 65, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 69.4, width: 38, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 60.7, width: 34, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'depreciation', value: 26.7, width: 15, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Paycom · 2026 财年第一季度',
        meta: {
          title: 'Paycom 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1780,
        },
        nodes: {
          recurring: { label: '经常性收入', notes: ['同比 +9%'] },
          implementation_other: { label: ['实施及', '其他'], notes: ['同比 (9%)'] },
          revenue: { label: '收入', notes: ['同比 +8%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 85%', '同比 +1 个百分点'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
          operating_expenses: { label: ['营业', '费用'] },
          other: { label: '其他' },
          net_profit: { label: '净利润', notes: ['利润率 27%', '同比 +1 个百分点'] },
          tax: { label: '税费' },
          sm: { label: '销售与市场', notes: ['占收入 21%', '同比 (0 个百分点)'] },
          ga: { label: '一般及行政', notes: ['占收入 12%', '同比 (0 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
          depreciation: { label: '折旧摊销' },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
