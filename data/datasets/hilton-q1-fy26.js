/* ====================================================================
 * Hilton - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/hilton-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const BLUE = '#213e99';
  const BLUE_LINK = '#94a1c9';
  const GREEN = '#2ca02c';
  const GREEN_LABEL = '#008f51';
  const GREEN_LINK = '#99cd99';
  const RED = '#cc0000';
  const RED_LABEL = '#941100';
  const RED_LINK = '#e08585';
  const NOTE = '#757575';

  const hiltonLogo = `
    <g transform="translate(830 238)" fill="none" stroke="${BLUE}" stroke-linecap="round" stroke-linejoin="round">
      <ellipse cx="236" cy="87" rx="120" ry="80" stroke-width="8"/>
      <ellipse cx="236" cy="113" rx="62" ry="51" stroke-width="7"/>
      <path d="M118 126 C91 72 132 25 208 17" stroke-width="7"/>
      <path d="M355 124 C381 74 342 24 267 17" stroke-width="7"/>
      <rect x="200" y="35" width="35" height="89" fill="${BLUE}" stroke="none"/>
      <rect x="253" y="35" width="35" height="100" fill="${BLUE}" stroke="none"/>
      <rect x="222" y="76" width="43" height="12" fill="${BLUE}" stroke="none"/>
    </g>
    <text x="1066" y="535" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="151" font-weight="700" textLength="430" lengthAdjust="spacingAndGlyphs" fill="${BLUE}">Hilton</text>`;

  const statsCard = (x, y, width, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="148" rx="24" fill="${BLUE}"/>
      ${lines
        .map((line, index) => `<text x="${x + width / 2}" y="${y + 48 + index * 37}" text-anchor="middle" font-size="${line.size}" font-weight="${line.weight}" fill="#ffffff">${line.text}</text>`)
        .join('')}
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${hiltonLogo}
      ${statsCard(96, 1161, 305, [
        { text: 'Comparable', size: 27, weight: 800 },
        { text: 'Systemwide RevPAR', size: 24, weight: 800 },
        { text: '+3.6% Y/Y', size: 24, weight: 400 },
      ])}
      ${statsCard(412, 1161, 330, [
        { text: '9,260 properties', size: 27, weight: 800 },
        { text: '1.36M rooms', size: 27, weight: 800 },
      ])}
      <text x="329" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = Revenue Per Available Room</text>
    </g>`;

  const annotationsZh = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${hiltonLogo}
      ${statsCard(96, 1161, 305, [
        { text: '可比', size: 27, weight: 800 },
        { text: '全系统 RevPAR', size: 24, weight: 800 },
        { text: '同比 +3.6%', size: 24, weight: 400 },
      ])}
      ${statsCard(412, 1161, 330, [
        { text: '9,260 处物业', size: 27, weight: 800 },
        { text: '1.36M 间客房', size: 27, weight: 800 },
      ])}
      <text x="329" y="1344" text-anchor="middle" font-size="29" font-weight="400" fill="${NOTE}">RevPAR = 每间可售客房收入</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hilton-q1-fy26',
    name: 'Hilton · Q1 FY26',
    company: 'Hilton',
    meta: {
      company: 'Hilton',
      title: 'Hilton Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/hilton-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 174,
      titleSize: 130,
      titleWeight: 800,
      titleTextLength: 2116,
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
        source: { node: BLUE, label: BLUE },
        hub: { node: BLUE, label: BLUE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: BLUE_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 98,
      nodes: {
        franchise_fees: { x: 407, y: 297, width: 71, height: 66 },
        base_management_fees: { x: 407, y: 468, width: 71, height: 9 },
        incentive_management_fees: { x: 407, y: 577, width: 71, height: 8 },
        owned_leased_and_other: { x: 407, y: 700, width: 71, height: 22 },
        other_revenue: { x: 407, y: 841, width: 71, height: 6 },
        managed_franchised_other_revenue: { x: 407, y: 965, width: 71, height: 171 },
        revenue: { x: 1029, y: 731, width: 72, height: 288 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        operating_profit: { x: 1652, y: 556, width: 72, height: 65 },
        operating_expenses: { x: 1652, y: 970, width: 72, height: 222 },
        net_profit: { x: 2275, y: 325, width: 71, height: 36 },
        other_nonoperating: { x: 2275, y: 535, width: 72, height: 14 },
        tax: { x: 2275, y: 648, width: 72, height: 12 },
        owned_leased_hotels: { x: 2275, y: 771, width: 72, height: 21 },
        ga: { x: 2275, y: 911, width: 72, height: 10 },
        da: { x: 2275, y: 1036, width: 72, height: 5 },
        managed_franchised_other_expenses: { x: 2275, y: 1170, width: 72, height: 183 },
      },
      labels: {
        franchise_fees: {
          blocks: [
            {
              x: 443, top: 207, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+11% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 354, top: 313, anchor: 'end', lines: [{ text: 'Franchise fees', size: 40, weight: 800 }] },
          ],
        },
        base_management_fees: {
          blocks: [
            {
              x: 443, top: 388, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 354, top: 405, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Base', size: 34, weight: 800 },
                { text: 'management fees', size: 34, weight: 800 },
              ],
            },
          ],
        },
        incentive_management_fees: {
          blocks: [
            {
              x: 443, top: 497, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 354, top: 548, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Incentive', size: 34, weight: 800 },
                { text: 'management fees', size: 34, weight: 800 },
              ],
            },
          ],
        },
        owned_leased_and_other: {
          blocks: [
            {
              x: 443, top: 620, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 354, top: 676, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Owned, leased', size: 34, weight: 800 },
                { text: 'and other', size: 34, weight: 800 },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 443, top: 761, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+43% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            { x: 354, top: 833, anchor: 'end', lines: [{ text: 'Other', size: 40, weight: 800 }] },
          ],
        },
        managed_franchised_other_revenue: {
          blocks: [
            {
              x: 443, top: 880, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 354, top: 951, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Other revenue', size: 34, weight: 800 },
                { text: 'from managed &', size: 34, weight: 800 },
                { text: 'franchised', size: 34, weight: 800 },
                { text: 'properties', size: 34, weight: 800 },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1065, top: 586, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+9% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: { blocks: [] },
        cost_of_revenue: { blocks: [] },
        operating_profit: {
          blocks: [
            {
              x: 1688, top: 372, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '23% margin', size: 29, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1688, top: 1213, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2400, top: 282, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '13% margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_nonoperating: {
          blocks: [
            {
              x: 2443, top: 504, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2443, top: 617, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        owned_leased_hotels: {
          blocks: [
            {
              x: 2460, top: 748, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Owned, leased', size: 31, weight: 800 },
                { text: 'hotels', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2443, top: 905, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        da: {
          blocks: [
            {
              x: 2443, top: 1028, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'D&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        managed_franchised_other_expenses: {
          blocks: [
            {
              x: 2489, top: 1163, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other expenses', size: 31, weight: 800 },
                { text: 'from managed', size: 31, weight: 800 },
                { text: '& franchised', size: 31, weight: 800 },
                { text: 'properties', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'franchise_fees', col: 0, order: 0, type: 'source', label: 'Franchise fees', value: 0.696, notes: ['+11% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'base_management_fees', col: 0, order: 1, type: 'source', label: ['Base', 'management fees'], value: 0.095, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'incentive_management_fees', col: 0, order: 2, type: 'source', label: ['Incentive', 'management fees'], value: 0.076, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'owned_leased_and_other', col: 0, order: 3, type: 'source', label: ['Owned, leased', 'and other'], value: 0.249, notes: ['+6% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'other_revenue', col: 0, order: 4, type: 'source', label: 'Other', value: 0.066, notes: ['+43% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'managed_franchised_other_revenue', col: 0, order: 5, type: 'source', label: ['Other revenue', 'from managed &', 'franchised', 'properties'], value: 1.755, notes: ['+8% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 2.937, notes: ['+9% Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 2.937, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 0, valueText: '($0.0B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 0.678, notes: ['23% margin', '+3pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.259, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 4, order: 0, type: 'profit', label: 'Net profit', value: 0.383, notes: ['13% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_nonoperating', col: 4, order: 1, type: 'cost', label: 'Other', value: 0.160, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 4, order: 2, type: 'cost', label: 'Tax', value: 0.135, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'owned_leased_hotels', col: 4, order: 3, type: 'cost', label: ['Owned, leased', 'hotels'], value: 0.235, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 4, order: 4, type: 'cost', label: 'G&A', value: 0.103, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'da', col: 4, order: 5, type: 'cost', label: 'D&A', value: 0.050, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'managed_franchised_other_expenses', col: 4, order: 6, type: 'cost', label: ['Other expenses', 'from managed', '& franchised', 'properties'], value: 1.871, notes: ['Includes reimbursed expenses and other expenses.'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'franchise_fees', target: 'revenue', value: 0.696, width: 66, sourceOrder: 0, targetOrder: 0 },
      { source: 'base_management_fees', target: 'revenue', value: 0.095, width: 9, sourceOrder: 0, targetOrder: 1 },
      { source: 'incentive_management_fees', target: 'revenue', value: 0.076, width: 7, sourceOrder: 0, targetOrder: 2 },
      { source: 'owned_leased_and_other', target: 'revenue', value: 0.249, width: 24, sourceOrder: 0, targetOrder: 3 },
      { source: 'other_revenue', target: 'revenue', value: 0.066, width: 6, sourceOrder: 0, targetOrder: 4 },
      { source: 'managed_franchised_other_revenue', target: 'revenue', value: 1.755, width: 172, sourceOrder: 0, targetOrder: 5 },

      { source: 'revenue', target: 'operating_profit', value: 0.678, width: 65, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'operating_expenses', value: 2.259, width: 222, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 0.383, width: 36, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.160, width: 14, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.135, width: 13, sourceOrder: 2, targetOrder: 0 },

      { source: 'operating_expenses', target: 'owned_leased_hotels', value: 0.235, width: 21, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.103, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'da', value: 0.050, width: 5, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'managed_franchised_other_expenses', value: 1.871, width: 184, sourceOrder: 3, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Hilton · 2026 财年第一季度',
        meta: {
          title: 'Hilton 2026 财年第一季度利润表',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
        },
        annotationsSvg: annotationsZh,
        nodes: {
          franchise_fees: { label: '特许经营费', notes: ['同比 +11%'] },
          base_management_fees: { label: '基础管理费', notes: ['同比 +8%'] },
          incentive_management_fees: { label: '激励管理费', notes: ['同比 +6%'] },
          owned_leased_and_other: { label: '自有、租赁及其他', notes: ['同比 +6%'] },
          other_revenue: { label: '其他', notes: ['同比 +43%'] },
          managed_franchised_other_revenue: { label: '管理和特许经营物业的其他收入', notes: ['同比 +8%'] },
          revenue: { label: '收入', notes: ['同比 +9%'] },
          gross_profit: { label: '毛利润' },
          cost_of_revenue: { label: ['收入', '成本'] },
          operating_profit: { label: '营业利润', notes: ['利润率 23%', '同比 +3 个百分点'] },
          operating_expenses: { label: '运营费用' },
          net_profit: { label: '净利润', notes: ['利润率 13%', '同比 +2 个百分点'] },
          other_nonoperating: { label: '其他' },
          tax: { label: '税费' },
          owned_leased_hotels: { label: '自有及租赁酒店' },
          ga: { label: '管理费用' },
          da: { label: '折旧与摊销' },
          managed_franchised_other_expenses: {
            label: '管理和特许经营物业的其他费用',
            notes: ['包括报销费用和其他费用。'],
          },
        },
      },
    },
  });
})();
