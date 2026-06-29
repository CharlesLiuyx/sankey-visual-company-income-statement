/* ====================================================================
 * Marriott - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/marriott-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const GREY = '#9c948f';
  const GREY_LABEL = '#9a928e';
  const GREY_LINK = '#c8c4c1';
  const GREEN = '#29a32b';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#9ccf9b';
  const RED = '#d80000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e68184';
  const NOTE = '#666666';
  const BLACK = '#000000';

  const marriottLogo = `
    <g fill="${BLACK}">
      <text x="1038" y="345" font-family="Arial Black,Montserrat,Arial,sans-serif" font-size="145" font-weight="900" letter-spacing="-7">Marriott</text>
      <text x="1139" y="407" font-family="Montserrat,Arial,sans-serif" font-size="43" font-weight="800" letter-spacing="8" textLength="500" lengthAdjust="spacingAndGlyphs">INTERNATIONAL</text>
    </g>`;

  const statsCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="${BLACK}"/>
      ${lines
        .map((line, index) => `<text x="${x + width / 2}" y="${y + 48 + index * 37}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`)
        .join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${marriottLogo}
      ${statsCard(98, 1164, 305, [
        { text: 'Comparable', size: 27, weight: 800 },
        { text: 'Systemwide RevPAR', size: 26, weight: 800 },
        { text: '+4% Y/Y', size: 24, weight: 400 },
      ])}
      ${statsCard(416, 1164, 330, [
        { text: '9,926 properties', size: 27, weight: 800 },
        { text: '1.796M rooms', size: 27, weight: 800 },
      ])}
      <text x="357" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = Revenue Per Available Room</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${marriottLogo}
      ${statsCard(98, 1164, 305, [
        { text: '可比', size: 27, weight: 800 },
        { text: '全系统 RevPAR', size: 25, weight: 800 },
        { text: '同比 +4%', size: 24, weight: 400 },
      ])}
      ${statsCard(416, 1164, 330, [
        { text: '9,926 处物业', size: 27, weight: 800 },
        { text: '179.6 万间客房', size: 27, weight: 800 },
      ])}
      <text x="357" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = 每间可售客房收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'marriott-q1-fy26',
    name: 'Marriott · Q1 FY26',
    company: 'Marriott',
    meta: {
      company: 'Marriott',
      title: 'Marriott Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Quarter ended Mar. 31, 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/marriott-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2246,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: GREY, label: GREY_LABEL },
        hub: { node: GREY, label: GREY_LABEL },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: GREY_LINK,
        hub: GREY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 47.3,
      nodes: {
        base_management_fees: { x: 368, y: 397, width: 73, height: 17 },
        franchise_fees: { x: 368, y: 550, width: 73, height: 41 },
        incentive_management_fees: { x: 368, y: 727, width: 73, height: 10 },
        gross_fee_revenue: { x: 835, y: 522, width: 73, height: 68 },
        contract_investment_amortization: { x: 1110, y: 515, width: 72, height: 1 },
        owned_leased_and_other_revenue: { x: 836, y: 767, width: 72, height: 19 },
        cost_reimbursement: { x: 836, y: 927, width: 72, height: 231 },
        revenue: { x: 1302, y: 660, width: 73, height: 315 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        operating_profit: { x: 1768, y: 520, width: 71, height: 49 },
        operating_expenses: { x: 1769, y: 844, width: 73, height: 264 },
        net_profit: { x: 2237, y: 320, width: 72, height: 29 },
        tax: { x: 2237, y: 502, width: 72, height: 10 },
        other_nonoperating: { x: 2237, y: 595, width: 72, height: 9 },
        owned_leased_other_direct_costs: { x: 2237, y: 736, width: 73, height: 18 },
        ga: { x: 2237, y: 873, width: 73, height: 10 },
        da: { x: 2237, y: 1006, width: 72, height: 2 },
        reimbursed_expenses: { x: 2236, y: 1119, width: 73, height: 234 },
      },
      labels: {
        base_management_fees: {
          blocks: [
            {
              x: 405, top: 305, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 218, top: 337, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Base', size: 40, weight: 800 },
                { text: 'management', size: 40, weight: 800 },
                { text: 'fees', size: 40, weight: 800 },
              ],
            },
          ],
        },
        franchise_fees: {
          blocks: [
            {
              x: 405, top: 458, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 200, top: 528, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Franchise', size: 40, weight: 800 },
                { text: 'fees', size: 40, weight: 800 },
              ],
            },
          ],
        },
        incentive_management_fees: {
          blocks: [
            {
              x: 405, top: 635, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 195, top: 662, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Incentive', size: 40, weight: 800 },
                { text: 'management', size: 40, weight: 800 },
                { text: 'fees', size: 40, weight: 800 },
              ],
            },
          ],
        },
        gross_fee_revenue: {
          blocks: [
            {
              x: 852, top: 324, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Gross fee', size: 40, weight: 800 },
                { text: 'Revenue', size: 40, weight: 800 },
              ],
            },
            {
              x: 852, top: 431, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+12% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        contract_investment_amortization: {
          blocks: [
            {
              x: 1146, top: 429, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Amortization', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        owned_leased_and_other_revenue: {
          blocks: [
            {
              x: 852, top: 673, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 675, top: 709, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Owned,', size: 40, weight: 800 },
                { text: 'leased', size: 40, weight: 800 },
                { text: 'and other', size: 40, weight: 800 },
              ],
            },
          ],
        },
        cost_reimbursement: {
          blocks: [
            {
              x: 852, top: 835, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '+4% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 656, top: 1006, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Cost', size: 40, weight: 800 },
                { text: 'reimbursement', size: 40, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1350, top: 515, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: { blocks: [] },
        operating_profit: {
          blocks: [
            {
              x: 1804, top: 338, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '16% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1806, top: 1138, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 39, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 39, weight: 800, color: RED_LABEL },
                { text: '$value', size: 38, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2427, top: 274, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                { text: '10% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2444, top: 476, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        other_nonoperating: {
          blocks: [
            {
              x: 2444, top: 568, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        owned_leased_other_direct_costs: {
          blocks: [
            {
              x: 2350, top: 715, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Owned, lease and', size: 31, weight: 800, color: RED_LABEL },
                { text: 'other direct costs', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2444, top: 867, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        da: {
          blocks: [
            {
              x: 2444, top: 1000, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'D&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        reimbursed_expenses: {
          blocks: [
            {
              x: 2444, top: 1184, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Reimbursed', size: 31, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'base_management_fees', col: 0, order: 0, type: 'source', label: ['Base', 'management fees'], value: 0.339, valueText: '$0.3B', notes: ['+4% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'franchise_fees', col: 0, order: 1, type: 'source', label: 'Franchise fees', value: 0.872, valueText: '$0.9B', notes: ['+17% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'incentive_management_fees', col: 0, order: 2, type: 'source', label: ['Incentive', 'management fees'], value: 0.222, valueText: '$0.2B', notes: ['+9% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'gross_fee_revenue', col: 1, order: 0, type: 'hub', label: ['Gross fee', 'Revenue'], value: 1.433, valueText: '$1.4B', notes: ['+12% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'contract_investment_amortization', col: 2, order: 0, type: 'cost', label: 'Amortization', value: 0.035, valueText: '($35M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'owned_leased_and_other_revenue', col: 1, order: 1, type: 'source', label: ['Owned, leased', 'and other'], value: 0.412, valueText: '$0.4B', notes: ['+14% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'cost_reimbursement', col: 1, order: 2, type: 'source', label: ['Cost', 'reimbursement'], value: 4.844, valueText: '$4.8B', notes: ['+4% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'revenue', col: 3, order: 0, type: 'hub', label: 'Revenue', value: 6.654, valueText: '$6.7B', notes: ['+6% Y/Y'], color: GREY, labelColor: GREY_LABEL, linkTint: GREY_LINK },
      { id: 'gross_profit', col: 4, order: 0, type: 'profit', label: 'Gross profit', value: 6.654, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_profit', col: 4, order: 1, type: 'profit', label: 'Operating profit', value: 1.064, valueText: '$1.1B', notes: ['16% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 2, type: 'cost', label: ['Operating', 'expenses'], value: 5.590, valueText: '($5.6B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.665, valueText: '$0.6B', notes: ['10% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.191, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_nonoperating', col: 5, order: 2, type: 'cost', label: 'Other', value: 0.208, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'owned_leased_other_direct_costs', col: 5, order: 3, type: 'cost', label: ['Owned, lease and', 'other direct costs'], value: 0.377, valueText: '($0.4B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.219, valueText: '($0.2B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 5, order: 5, type: 'cost', label: 'D&A', value: 0.054, valueText: '($0.1M)', notes: ['Source chart label uses M; official statement reports $54M.'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'reimbursed_expenses', col: 5, order: 6, type: 'cost', label: ['Reimbursed', 'expenses'], value: 4.936, valueText: '($4.9B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'base_management_fees', target: 'gross_fee_revenue', value: 0.339, width: 17, targetOrder: 0 },
      { source: 'franchise_fees', target: 'gross_fee_revenue', value: 0.872, width: 41, targetOrder: 1 },
      { source: 'incentive_management_fees', target: 'gross_fee_revenue', value: 0.222, width: 10, targetOrder: 2 },

      { source: 'gross_fee_revenue', target: 'contract_investment_amortization', value: 0.035, width: 1, sourceOrder: 0, y0: 522, y1: 515, curve: { c1x: 960, c1y: 522, c2x: 1045, c2y: 515 } },
      { source: 'gross_fee_revenue', target: 'revenue', value: 1.398, width: 67, sourceOrder: 1, targetOrder: 0 },
      { source: 'owned_leased_and_other_revenue', target: 'revenue', value: 0.412, width: 19, targetOrder: 1 },
      { source: 'cost_reimbursement', target: 'revenue', value: 4.844, width: 231, targetOrder: 2 },

      { source: 'revenue', target: 'operating_profit', value: 1.064, width: 49, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 5.590, width: 264, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 0.665, width: 29, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.191, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.208, width: 9, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'owned_leased_other_direct_costs', value: 0.377, width: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.219, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.054, width: 2, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'reimbursed_expenses', value: 4.936, width: 234, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Marriott · 2026 财年第一季度',
        meta: {
          title: 'Marriott 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月 31 日的季度',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          base_management_fees: { label: '基础管理费', notes: ['同比 +4%'] },
          franchise_fees: { label: '特许经营费', notes: ['同比 +17%'] },
          incentive_management_fees: { label: '激励管理费', notes: ['同比 +9%'] },
          gross_fee_revenue: { label: '总费用收入', notes: ['同比 +12%'] },
          contract_investment_amortization: { label: '摊销' },
          owned_leased_and_other_revenue: { label: '自有、租赁及其他', notes: ['同比 +14%'] },
          cost_reimbursement: { label: '成本报销', notes: ['同比 +4%'] },
          revenue: { label: '收入', notes: ['同比 +6%'] },
          gross_profit: { label: '毛利润' },
          operating_profit: { label: '营业利润', notes: ['利润率 16%', '同比 +1 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 10%', '同比 (1 个百分点)'] },
          tax: { label: '税费' },
          other_nonoperating: { label: '其他' },
          owned_leased_other_direct_costs: { label: '自有、租赁及其他直接成本' },
          ga: { label: '管理费用' },
          da: { label: '折旧与摊销', notes: ['来源图使用 M；官方报表列示为 $54M。'] },
          reimbursed_expenses: { label: '报销费用' },
        },
        layout: {
          labels: {
            base_management_fees: {
              blocks: [
                {
                  x: 405, top: 305, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 218, top: 355, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '基础', size: 40, weight: 800 },
                    { text: '管理费', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            franchise_fees: {
              blocks: [
                {
                  x: 405, top: 458, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +17%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 200, top: 555, anchor: 'middle',
                  lines: [{ text: '特许经营费', size: 40, weight: 800 }],
                },
              ],
            },
            incentive_management_fees: {
              blocks: [
                {
                  x: 405, top: 635, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +9%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 195, top: 690, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '激励', size: 40, weight: 800 },
                    { text: '管理费', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            gross_fee_revenue: {
              blocks: [
                {
                  x: 852, top: 348, anchor: 'middle',
                  lines: [{ text: '总费用收入', size: 40, weight: 800 }],
            },
            {
              x: 852, top: 431, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400 },
                { text: '同比 +12%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            contract_investment_amortization: {
              blocks: [
                {
                  x: 1146, top: 429, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '摊销', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            owned_leased_and_other_revenue: {
              blocks: [
                {
                  x: 852, top: 673, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 675, top: 735, anchor: 'middle', lineGap: 13,
                  lines: [
                    { text: '自有、租赁', size: 40, weight: 800 },
                    { text: '及其他', size: 40, weight: 800 },
                  ],
                },
              ],
            },
            cost_reimbursement: {
              blocks: [
                {
                  x: 852, top: 835, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +4%', size: 29, weight: 400, color: NOTE },
                  ],
                },
                {
                  x: 656, top: 1033, anchor: 'middle',
                  lines: [{ text: '成本报销', size: 40, weight: 800 }],
                },
              ],
            },
            revenue: {
              blocks: [
                {
                  x: 1350, top: 515, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '收入', size: 40, weight: 800 },
                    { text: '$value', size: 40, weight: 400 },
                    { text: '同比 +6%', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            gross_profit: { blocks: [] },
            operating_profit: {
              blocks: [
                {
                  x: 1804, top: 338, anchor: 'middle', lineGap: 10,
                  lines: [
                    { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 16%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 +1 个百分点', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            operating_expenses: {
              blocks: [
                {
                  x: 1806, top: 1165, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '运营费用', size: 39, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 38, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            net_profit: {
              blocks: [
                {
                  x: 2427, top: 274, anchor: 'start', lineGap: 10,
                  lines: [
                    { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
                    { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
                    { text: '利润率 10%', size: 29, weight: 400, color: NOTE },
                    { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
                  ],
                },
              ],
            },
            tax: {
              blocks: [
                {
                  x: 2444, top: 476, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '税费', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            other_nonoperating: {
              blocks: [
                {
                  x: 2444, top: 568, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '其他', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            owned_leased_other_direct_costs: {
              blocks: [
                {
                  x: 2350, top: 715, anchor: 'start', lineGap: 8,
                  lines: [
                    { text: '自有、租赁及', size: 31, weight: 800, color: RED_LABEL },
                    { text: '其他直接成本', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            ga: {
              blocks: [
                {
                  x: 2444, top: 867, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '管理费用', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            da: {
              blocks: [
                {
                  x: 2444, top: 1000, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '折旧摊销', size: 31, weight: 800, color: RED_LABEL },
                    { text: '$value', size: 31, weight: 400, color: RED_LABEL },
                  ],
                },
              ],
            },
            reimbursed_expenses: {
              blocks: [
                {
                  x: 2444, top: 1184, anchor: 'middle', lineGap: 8,
                  lines: [
                    { text: '报销费用', size: 31, weight: 800, color: RED_LABEL },
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
