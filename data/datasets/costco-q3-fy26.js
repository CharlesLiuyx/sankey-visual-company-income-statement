/* ====================================================================
 * Costco - Q3 FY26 income statement ($B)
 * Reconstructed from input/processed/costco-q3-fy26.png as a fixed
 * d3-sankey layout with reusable SVG Costco logo/member-card annotations.
 * ==================================================================== */
(function () {
  const COSTCO_BLUE = '#0060a9';
  const BLUE_LINK = '#84b1d2';
  const KPI_BLUE = '#0060aa';
  const TITLE = '#15527a';
  const NOTE = '#6b6b6b';
  const GREEN = '#25a126';
  const GREEN_LABEL = '#008c45';
  const GREEN_LINK = '#9ccd9a';
  const RED = '#d60000';
  const RED_LABEL = '#9d1908';
  const RED_LINK = '#e28484';
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const icon = (name, x, y, scale = 1) => `
    <g transform="translate(${x} ${y}) scale(${scale})">${BUSINESS_ICONS[name] || ''}</g>`;

  const kpiCard = (x, width, lines) => `
    <g>
      <rect x="${x}" y="1215" width="${width}" height="142" rx="24" fill="${KPI_BLUE}"/>
      ${lines.map((line, index) => `
        <text x="${x + width / 2}" y="${1257 + index * 37}" text-anchor="middle"
          font-size="${index === 2 ? 28 : 29}" font-weight="${index === 2 ? 500 : 800}" fill="#ffffff">${line}</text>
      `).join('')}
    </g>`;

  const membershipCardsZh = (x, y) => `
    <g transform="translate(${x} ${y})">
      <g>
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#ffffff" stroke="#9ea3a8" stroke-width="1.4"/>
        <text x="15" y="39" font-family="Arial Black, Arial, sans-serif" font-size="29" font-style="italic" font-weight="900"
          fill="#e31837">COSTCO</text>
        <text x="43" y="58" font-family="Arial Black, Arial, sans-serif" font-size="18" font-style="italic" font-weight="900"
          fill="#0060a9">WHOLESALE</text>
        <g fill="#0060a9">
          <rect x="6" y="55" width="74" height="4"/>
          <rect x="6" y="62" width="83" height="4"/>
          <rect x="6" y="69" width="91" height="4"/>
        </g>
        <path d="M72 65l6 15h16l-13 9 5 15-14-9-13 9 5-15-13-9h16z" fill="#f8b21a"/>
        <text x="73" y="84" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#e31837">金星会员</text>
      </g>
      <g transform="translate(168 0)">
        <rect x="0" y="5" width="145" height="96" rx="8" fill="#070707" stroke="#2e2e2e" stroke-width="1.4"/>
        <g fill="none" stroke="#c9a24c" stroke-width="2" opacity="0.92">
          <ellipse cx="72" cy="53" rx="55" ry="27"/>
          <ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(33 72 53)"/>
          <ellipse cx="72" cy="53" rx="31" ry="53" transform="rotate(-33 72 53)"/>
          <line x1="12" y1="53" x2="132" y2="53"/>
        </g>
        <text x="32" y="40" font-family="Arial Black, Arial, sans-serif" font-size="23" font-style="italic" font-weight="900"
          fill="#e31837" stroke="#ffffff" stroke-width="2" paint-order="stroke">COSTCO</text>
        <text x="49" y="56" font-family="Arial Black, Arial, sans-serif" font-size="14" font-style="italic" font-weight="900"
          fill="#0060a9" stroke="#ffffff" stroke-width="1.4" paint-order="stroke">WHOLESALE</text>
        <text x="72" y="82" text-anchor="middle" font-family="Arial,'Microsoft YaHei',sans-serif" font-size="13" font-weight="800" fill="#f6d37a">行政会员</text>
      </g>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${icon('costcoCompanyWordmark', 560, 235, 1)}
      ${icon('costcoMembershipCards', 45, 1072, 1)}
      ${kpiCard(36, 276, ['Adj. US', 'Comp sales', '+6.8% Y/Y'])}
      ${kpiCard(320, 330, ['Adj. Company', 'Comp sales', '+6.6% Y/Y'])}
      ${kpiCard(660, 276, ['Adj.', 'Digitally-Enabled', '+20.8% Y/Y'])}
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,'Microsoft YaHei',sans-serif">
      ${icon('costcoCompanyWordmark', 560, 235, 1)}
      ${membershipCardsZh(45, 1072)}
      ${kpiCard(36, 276, ['调整后美国', '可比销售额', '同比 +6.8%'])}
      ${kpiCard(320, 330, ['调整后公司', '可比销售额', '同比 +6.6%'])}
      ${kpiCard(660, 276, ['调整后', '数字化可比销售额', '同比 +20.8%'])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'costco-q3-fy26',
    name: 'Costco · Q3 FY26',
    company: 'Costco',
    meta: {
      company: 'Costco',
      title: 'Costco Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending May 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/costco-q3-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 194,
      titleSize: 132,
      titleWeight: 800,
      titleTextLength: 2165,
      periodX: 2225,
      periodY: 1265,
      periodNoteY: 1313,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: COSTCO_BLUE, label: COSTCO_BLUE },
        hub: { node: COSTCO_BLUE, label: COSTCO_BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 6.21,
      nodes: {
        net_sales: { x: 405, y: 544, width: 72, height: 429.7 },
        membership_fee: { x: 405, y: 1148, width: 72, height: 8.7 },
        revenue: { x: 872, y: 638, width: 72, height: 437.8 },
        gross_profit: { x: 1340, y: 538, width: 72, height: 55.9 },
        merchandise_costs: { x: 1340, y: 778, width: 72, height: 381.9 },
        operating_profit: { x: 1808, y: 453, width: 72, height: 17.4 },
        operating_expenses: { x: 1808, y: 648, width: 72, height: 38.5 },
        interest: { x: 2138, y: 433, width: 72, height: 1 },
        net_profit: { x: 2268, y: 369, width: 72, height: 13.7 },
        tax: { x: 2268, y: 589, width: 72, height: 4.3 },
      },
      labels: {
        net_sales: {
          blocks: [
            {
              x: 440, top: 430, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 207, top: 709, anchor: 'middle',
              lines: [{ text: 'Net Sales', size: 40, weight: 800, color: COSTCO_BLUE }],
            },
          ],
        },
        membership_fee: {
          blocks: [
            {
              x: 210, top: 1015, anchor: 'middle',
              lines: [{ text: 'Membership Fee', size: 38, weight: 800, color: COSTCO_BLUE }],
            },
            {
              x: 437, top: 1052, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
                { text: '+11% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 910, top: 489, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: COSTCO_BLUE },
                { text: '$value', size: 39, weight: 400, color: COSTCO_BLUE },
                { text: '+12% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1376, top: 338, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '12.8% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0.2pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        merchandise_costs: {
          blocks: [
            {
              x: 1375, top: 1173, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Merchandise', size: 35, weight: 800, color: RED_LABEL },
                { text: 'costs', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1844, top: 266, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '4.0% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0.0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1844, top: 704, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 35, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 35, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 2174, top: 459, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Interest', size: 31, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2485, top: 312, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
                { text: '3.1% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0.1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2470, top: 554, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'net_sales', col: 0, order: 0, type: 'source', label: 'Net Sales', value: 69.2, notes: ['+12% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'membership_fee', col: 0, order: 1, type: 'source', label: 'Membership Fee', value: 1.4, notes: ['+11% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 70.5, notes: ['+12% Y/Y'], color: COSTCO_BLUE, labelColor: COSTCO_BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 9.0, notes: ['12.8% margin', '(0.2pp) Y/Y'] },
      { id: 'merchandise_costs', col: 2, order: 1, type: 'cost', label: 'Merchandise costs', value: 61.5 },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 2.8, notes: ['4.0% margin', '(0.0pp) Y/Y'] },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: 'SG&A expenses', value: 6.2 },
      { id: 'interest', col: 4, order: 0, type: 'profit', label: 'Interest', value: 0.1 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 2.2, notes: ['3.1% margin', '+0.1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.7 },
    ],

    links: [
      { source: 'net_sales', target: 'revenue', value: 69.2, targetOrder: 0 },
      { source: 'membership_fee', target: 'revenue', value: 1.4, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 9.0, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'revenue', target: 'merchandise_costs', value: 61.5, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'gross_profit', target: 'operating_profit', value: 2.8, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'gross_profit', target: 'operating_expenses', value: 6.2, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'operating_profit', target: 'net_profit', value: 2.1, sourceOrder: 0, targetOrder: 0, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
      { source: 'operating_profit', target: 'tax', value: 0.7, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },
      { source: 'interest', target: 'net_profit', value: 0.1, sourceOrder: 0, targetOrder: 1, linkTint: { left: GREEN_LINK, right: GREEN_LINK } },
    ],

    i18n: {
      zh: {
        name: 'Costco · 2026 财年第三季度',
        meta: {
          title: 'Costco 2026 财年第三季度利润表',
          period: '2026 财年第三季度',
          periodNote: '截至 2026 年 5 月',
          titleTextLength: 1770,
        },
        annotationsSvg: annotationsZh,
        nodes: {
          net_sales: { label: '净销售额', notes: ['同比 +12%'] },
          membership_fee: { label: '会员费', notes: ['同比 +11%'] },
          revenue: { label: '收入', notes: ['同比 +12%'] },
          gross_profit: { label: '毛利润', notes: ['利润率 12.8%', '同比 (0.2 个百分点)'] },
          merchandise_costs: { label: '商品成本' },
          operating_profit: { label: '营业利润', notes: ['利润率 4.0%', '同比 (0.0 个百分点)'] },
          operating_expenses: { label: '销售、一般及行政费用' },
          interest: { label: '利息' },
          net_profit: { label: '净利润', notes: ['利润率 3.1%', '同比 +0.1 个百分点'] },
          tax: { label: '税费' },
        },
      },
    },
  });
})();
