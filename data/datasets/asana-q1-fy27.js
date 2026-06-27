/* ====================================================================
 * Asana - Q1 FY27 income statement ($M)
 * Reconstructed from input/processed/asana-q1-fy27.png as a fixed d3-sankey
 * layout with pure SVG annotations.
 * ==================================================================== */
(function () {
  const PINK = '#ff4f83';
  const PINK_LINK = '#f0a1ba';
  const GREEN = '#25a427';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#98cb96';
  const RED = '#d60000';
  const RED_LABEL = '#941000';
  const RED_LINK = '#df8082';
  const NOTE = '#6d6d6d';
  const TITLE = '#15527a';
  const WORDMARK = '#172636';
  const RIGHT_LABEL_X = 2395;

  const asanaLogo = `
    <defs>
      <linearGradient id="asana-dot-a" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ff4f83"/>
        <stop offset="100%" stop-color="#ffad2f"/>
      </linearGradient>
      <linearGradient id="asana-dot-b" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff9c35"/>
        <stop offset="100%" stop-color="#ff4f83"/>
      </linearGradient>
      <linearGradient id="asana-dot-c" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ff8d38"/>
        <stop offset="100%" stop-color="#ff4f83"/>
      </linearGradient>
    </defs>
    <circle cx="205" cy="33" r="31" fill="url(#asana-dot-a)"/>
    <circle cx="165" cy="103" r="31" fill="url(#asana-dot-b)"/>
    <circle cx="246" cy="103" r="31" fill="url(#asana-dot-c)"/>
    <text x="205" y="250" text-anchor="middle" font-family="Montserrat,Arial,sans-serif"
      font-size="112" font-weight="800" fill="${WORDMARK}">asana</text>
  `;

  const kpiCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="30" fill="${PINK}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${y + 48 + index * 42}" text-anchor="middle"
          font-size="28" font-weight="${index === 0 ? 800 : 500}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const customerCard = (lines) => `
    <g>
      <rect x="246" y="1135" width="559" height="163" rx="30" fill="${PINK}"/>
      ${lines.map((line, index) => `
        <text x="280" y="${1196 + index * 44}" text-anchor="start"
          font-size="29" font-weight="800" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const annotationsEn = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(72, 1139, 164, 164, ['DBNR', '96%', 'Flat Q/Q'])}
      ${customerCard([
        'Customers &gt; $5K <tspan font-weight="500">26,103 (+7% Y/Y)</tspan>',
        'Customers &gt; $100K <tspan font-weight="500">817 (+12% Y/Y)</tspan>',
      ])}
      <text x="80" y="1342" font-size="29" font-weight="500" fill="${NOTE}">DBNR = Dollar Based Net Retention</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${kpiCard(72, 1139, 164, 164, ['DBNR', '96%', '环比持平'])}
      ${customerCard([
        '&gt;$5K 客户 <tspan font-weight="500">26,103（同比 +7%）</tspan>',
        '&gt;$100K 客户 <tspan font-weight="500">817（同比 +12%）</tspan>',
      ])}
      <text x="80" y="1342" font-size="29" font-weight="500" fill="${NOTE}">DBNR = 美元口径净留存率</text>
    </g>`;

  const zhLayoutLabels = {
    united_states: {
      blocks: [
        {
          x: 402, top: 430, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +8%', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 345, top: 608, anchor: 'end', lines: [{ text: '美国', size: 42, weight: 800 }] },
      ],
    },
    international: {
      blocks: [
        {
          x: 402, top: 858, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +12%', size: 28, weight: 400, color: NOTE },
          ],
        },
        { x: 345, top: 1012, anchor: 'end', lines: [{ text: '国际', size: 42, weight: 800 }] },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 870, top: 493, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '同比 +10%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_profit: {
      blocks: [
        {
          x: 1337, top: 354, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '毛利润', size: 39, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
            { text: '利润率 88%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: {
      blocks: [
        {
          x: 1336, top: 1100, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 35, weight: 800 },
            { text: '成本', size: 35, weight: 800 },
            { text: '$value', size: 35, weight: 400 },
          ],
        },
      ],
    },
    operating_loss: {
      blocks: [
        {
          x: 1577, top: 1023, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业', size: 39, weight: 800 },
            { text: '亏损', size: 39, weight: 800 },
            { text: '$value', size: 38, weight: 400 },
            { text: '利润率 (7%)', size: 28, weight: 400, color: NOTE },
            { text: '同比 +16 个百分点', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1804, top: 477, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '运营', size: 40, weight: 800 },
            { text: '费用', size: 40, weight: 800 },
            { text: '$value', size: 39, weight: 400 },
          ],
        },
      ],
    },
    sm: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 445, anchor: 'start', lineGap: 8,
          lines: [
            { text: '销售与市场', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 45%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (8 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    rnd: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 810, anchor: 'start', lineGap: 8,
          lines: [
            { text: '研发', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 32%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (8 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    ga: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 1128, anchor: 'start', lineGap: 8,
          lines: [
            { text: '管理费用', size: 31, weight: 800 },
            { text: '$value', size: 31, weight: 400 },
            { text: '占收入 18%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (2 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'asana-q1-fy27',
    name: 'Asana · Q1 FY27',
    company: 'Asana',
    meta: {
      company: 'Asana',
      title: 'Asana Q1 FY27 Income Statement',
      period: 'Q1 FY27',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/asana-q1-fy27.png', width: 2667, height: 1500 },
      titleX: 1262,
      titleY: 198,
      titleSize: 126,
      titleWeight: 800,
      titleTextLength: 1968,
      periodX: 2406,
      periodY: 306,
      periodNoteY: 352,
      logoWidth: 410,
      logoHeight: 254,
      logoY: 218,
      logoViewBox: '0 0 410 254',
      logoSvg: asanaLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: PINK, label: PINK },
        hub: { node: PINK, label: PINK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: PINK_LINK,
        hub: PINK_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,

    layout: {
      scale: 1,
      nodes: {
        united_states: { x: 367, y: 532, width: 71, height: 194 },
        international: { x: 367, y: 958, width: 71, height: 136 },
        revenue: { x: 834, y: 635, width: 72, height: 331 },
        gross_profit: { x: 1301, y: 537, width: 71, height: 289 },
        cost_of_revenue: { x: 1301, y: 1047, width: 71, height: 40 },
        operating_loss: { x: 1541, y: 974, width: 72, height: 23 },
        operating_expenses: { x: 1768, y: 634, width: 71, height: 315 },
        sm: { x: 2235, y: 446, width: 72, height: 149 },
        rnd: { x: 2232, y: 821, width: 72, height: 105 },
        ga: { x: 2235, y: 1140, width: 72, height: 58 },
      },
      labels: {
        united_states: {
          blocks: [
            {
              x: 402, top: 430, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 345, top: 608, anchor: 'end', lines: [{ text: 'United States', size: 42, weight: 800 }] },
          ],
        },
        international: {
          blocks: [
            {
              x: 402, top: 858, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            { x: 345, top: 1012, anchor: 'end', lines: [{ text: 'International', size: 42, weight: 800 }] },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 870, top: 493, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+10% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1337, top: 354, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '88% margin', size: 28, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1336, top: 1100, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 35, weight: 800 },
                { text: 'revenue', size: 35, weight: 800 },
                { text: '$value', size: 35, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1577, top: 1023, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'loss', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '(7%) margin', size: 28, weight: 400, color: NOTE },
                { text: '+16pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1804, top: 477, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 445, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '45% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 810, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '32% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(8pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1128, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '18% of revenue', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'united_states', col: 0, order: 0, type: 'source', label: 'United States', value: 120, notes: ['+8% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'international', col: 0, order: 1, type: 'source', label: 'International', value: 85, notes: ['+12% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 205, notes: ['+10% Y/Y'], color: PINK, labelColor: PINK, linkTint: PINK_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 180, notes: ['88% margin', '(2pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 25, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_loss', col: 3, order: 1, type: 'cost', label: ['Operating', 'loss'], value: -15, notes: ['(7%) margin', '+16pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_expenses', col: 4, order: 0, type: 'cost', label: ['Operating', 'expenses'], value: 195, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sm', col: 5, order: 0, type: 'cost', label: 'S&M', value: 92, notes: ['45% of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 1, type: 'cost', label: 'R&D', value: 66, notes: ['32% of revenue', '(8pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 2, type: 'cost', label: 'G&A', value: 36, notes: ['18% of revenue', '(2pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'united_states', target: 'revenue', value: 120, width: 194, sourceOrder: 0, targetOrder: 0 },
      { source: 'international', target: 'revenue', value: 85, width: 136, sourceOrder: 0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 180, width: 289, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 25, width: 40, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 180, width: 289, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 15, width: 23, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 92, width: 149, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 66, width: 105, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 36, width: 58, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Asana · 2027 财年第一季度',
        meta: {
          title: 'Asana 2027 财年第一季度利润表',
          period: '2027 财年第一季度',
          periodNote: '截至 2026 年 4 月',
          titleSize: 108,
          titleTextLength: 1620,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          united_states: { label: '美国', notes: ['同比 +8%'] },
          international: { label: '国际', notes: ['同比 +12%'] },
          revenue: { label: '收入', notes: ['同比 +10%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 88%', '同比 (2 个百分点)'] },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_loss: { label: ['营业', '亏损'], notes: ['利润率 (7%)', '同比 +16 个百分点'] },
          operating_expenses: { label: ['运营', '费用'] },
          sm: { label: '销售与市场', notes: ['占收入 45%', '同比 (8 个百分点)'] },
          rnd: { label: '研发', notes: ['占收入 32%', '同比 (8 个百分点)'] },
          ga: { label: '管理费用', notes: ['占收入 18%', '同比 (2 个百分点)'] },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
