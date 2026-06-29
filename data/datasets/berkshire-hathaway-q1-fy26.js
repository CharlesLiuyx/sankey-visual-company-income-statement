/* ====================================================================
 * Berkshire Hathaway - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/berkshire-hathaway-q1-fy26.png as
 * a fixed d3-sankey layout with crop-backed Berkshire business logos.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const NOTE = '#737373';
  const BLUE = '#00008b';
  const BLUE_LINK = '#8786c4';
  const GREEN = '#25a326';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d70000';
  const RED_LABEL = '#8e1200';
  const RED_LINK = '#e68184';
  const BG = '#f2f2f2';
  const RIGHT_LABEL_X = 2392;
  const RASTER = 'data/assets/raster-annotations/berkshire-hathaway/';

  const raster = (key, file, x, y, width, height) => ({
    key,
    href: `${RASTER}${file}`,
    x,
    y,
    width,
    height,
  });

  const zhLayoutLabels = {
    insurance: {
      blocks: [
        {
          x: 466, top: 254, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 (0%)', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 420, top: 356, anchor: 'end', lineGap: 8,
          lines: [
            { text: '保险业务', size: 39, weight: 800, color: BLUE },
            { text: '利润率 22%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    bnsf: {
      blocks: [
        {
          x: 466, top: 462, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 +5%', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 420, top: 519, anchor: 'end', lineGap: 8,
          lines: [
            { text: 'BNSF', size: 38, weight: 800, color: BLUE },
            { text: '利润率 30%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    bhe: {
      blocks: [
        {
          x: 466, top: 583, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 +5%', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 420, top: 638, anchor: 'end', lineGap: 8,
          lines: [
            { text: 'BHE', size: 38, weight: 800, color: BLUE },
            { text: '利润率 11%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    pilot: {
      blocks: [
        {
          x: 466, top: 703, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 +8%', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 420, top: 763, anchor: 'end', lineGap: 8,
          lines: [
            { text: 'Pilot 旅行中心', size: 34, weight: 800, color: BLUE },
            { text: '利润率 0%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    manufacturing: {
      blocks: [
        {
          x: 466, top: 830, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 +10%', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 420, top: 946, anchor: 'end', lineGap: 8,
          lines: [
            { text: '制造业务', size: 38, weight: 800, color: BLUE },
            { text: '利润率 15%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    mclane: {
      blocks: [
        {
          x: 466, top: 1033, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 (2%)', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 420, top: 1088, anchor: 'end', lineGap: 8,
          lines: [
            { text: 'McLane 配送', size: 35, weight: 800, color: BLUE },
            { text: '利润率 1%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    services_retailing: {
      blocks: [
        {
          x: 466, top: 1178, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 +8%', size: 27, weight: 400, color: NOTE },
          ],
        },
        {
          x: 420, top: 1241, anchor: 'end', lineGap: 8,
          lines: [
            { text: '服务与', size: 38, weight: 800, color: BLUE },
            { text: '零售', size: 38, weight: 800, color: BLUE },
            { text: '利润率 10%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    other_revenue: {
      blocks: [
        {
          x: 774, top: 1172, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '其他', size: 32, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    revenue: {
      blocks: [
        {
          x: 935, top: 438, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '收入', size: 40, weight: 800, color: BLUE },
            { text: '$value', size: 39, weight: 400, color: BLUE },
            { text: '同比 +4%', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    cost_of_revenue: { blocks: [] },
    gross_profit: { blocks: [] },
    operating_profit: {
      blocks: [
        {
          x: 1401, top: 323, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '营业利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
            { text: '利润率 13%', size: 28, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 28, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1467, top: 832, anchor: 'start', lineGap: 8,
          lines: [
            { text: '运营成本', size: 36, weight: 800, color: RED_LABEL },
            { text: '和费用', size: 36, weight: 800, color: RED_LABEL },
            { text: '$value', size: 34, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    net_profit_before_tax: {
      blocks: [
        {
          x: 1849, top: 258, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '税前', size: 39, weight: 800, color: GREEN_LABEL },
            { text: '净利润', size: 39, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    other_income: {
      blocks: [
        {
          x: 1736, top: 542, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '其他', size: 34, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    investment_losses: {
      blocks: [
        {
          x: 1850, top: 678, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '投资', size: 34, weight: 800, color: RED_LABEL },
            { text: '损失', size: 34, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    net_profit: {
      blocks: [
        {
          x: RIGHT_LABEL_X, top: 269, anchor: 'start', lineGap: 8,
          lines: [
            { text: '净利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
          ],
        },
      ],
    },
    tax: {
      blocks: [
        {
          x: 2486, top: 548, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '税费', size: 35, weight: 800, color: RED_LABEL },
            { text: '$value', size: 33, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'berkshire-hathaway-q1-fy26',
    name: 'Berkshire Hathaway - Q1 FY26',
    company: 'Berkshire Hathaway',
    meta: {
      company: 'Berkshire Hathaway',
      title: 'Berkshire Hathaway Q1 FY26',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/berkshire-hathaway-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 197,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 1810,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: BG,
      allowRasterAnnotations: true,
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
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 39, note: 28, lineGap: 8 },
    },
    rasterAnnotations: [
      raster('company-wordmark', 'company-wordmark.png', 682, 242, 496, 170),
      raster('business-insurance-cluster', 'business-insurance-cluster.png', 14, 328, 150, 116),
      raster('business-bnsf-logo', 'business-bnsf-logo.png', 8, 508, 146, 42),
      raster('business-bhe-logo', 'business-bhe-logo.png', 36, 610, 98, 102),
      raster('business-pilot-logo', 'business-pilot-logo.png', 16, 773, 140, 50),
      raster('business-manufacturing-cluster', 'business-manufacturing-cluster.png', 24, 982, 132, 90),
      raster('business-mclane-logo', 'business-mclane-logo.png', 14, 1106, 138, 74),
      raster('business-services-retailing-cluster', 'business-services-retailing-cluster.png', 14, 1224, 140, 174),
    ],

    nodes: [
      { id: 'insurance', label: 'Insurance', value: 25.3, notes: ['(0%) Y/Y', '22% margin'], type: 'source', col: 0, order: 0 },
      { id: 'bnsf', label: 'BNSF', value: 6.0, notes: ['+5% Y/Y', '30% margin'], type: 'source', col: 0, order: 1 },
      { id: 'bhe', label: 'BHE', value: 6.7, notes: ['+5% Y/Y', '11% margin'], type: 'source', col: 0, order: 2 },
      { id: 'pilot', label: 'Pilot', value: 11.2, notes: ['+8% Y/Y', '0% margin'], type: 'source', col: 0, order: 3 },
      { id: 'manufacturing', label: 'Manufacturing', value: 20.7, notes: ['+10% Y/Y', '15% margin'], type: 'source', col: 0, order: 4 },
      { id: 'mclane', label: 'McLane', value: 11.9, notes: ['(2%) Y/Y', '1% margin'], type: 'source', col: 0, order: 5 },
      { id: 'services_retailing', label: ['Services', '& retailing'], value: 11.0, notes: ['+8% Y/Y', '10% margin'], type: 'source', col: 0, order: 6 },
      { id: 'other_revenue', label: 'Other', value: 0.9, type: 'profit', col: 1, order: 7, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'revenue', label: 'Revenue', value: 93.7, notes: ['+4% Y/Y'], type: 'hub', col: 1, order: 0 },
      { id: 'cost_of_revenue', label: '', value: 0, type: 'cost', col: 5, order: 97, color: 'transparent', labelColor: 'transparent', linkTint: 'transparent' },
      { id: 'gross_profit', label: '', value: 93.7, type: 'profit', col: 5, order: 98, color: 'transparent', labelColor: 'transparent', linkTint: 'transparent' },
      { id: 'operating_profit', label: 'Operating profit', value: 12.4, notes: ['13% margin', '(1pp) Y/Y'], type: 'profit', col: 2, order: 0 },
      { id: 'operating_expenses', label: ['Operating costs', 'and expenses'], value: 81.3, type: 'cost', col: 2, order: 1 },
      { id: 'net_profit_before_tax', label: ['Net profit', 'before tax'], value: 12.3, type: 'profit', col: 3, order: 0 },
      { id: 'other_income', label: 'Other', value: 1.6, type: 'profit', col: 3, order: 1 },
      { id: 'investment_losses', label: ['Investment', 'losses'], value: 1.6, type: 'cost', col: 3, order: 2 },
      { id: 'net_profit', label: 'Net profit', value: 10.2, type: 'profit', col: 4, order: 0 },
      { id: 'tax', label: 'Tax', value: 2.1, type: 'cost', col: 4, order: 1 },
    ],
    links: [
      { source: 'insurance', target: 'revenue', value: 25.3, sourceOrder: 0, targetOrder: 0 },
      { source: 'bnsf', target: 'revenue', value: 6.0, sourceOrder: 0, targetOrder: 1 },
      { source: 'bhe', target: 'revenue', value: 6.7, sourceOrder: 0, targetOrder: 2 },
      { source: 'pilot', target: 'revenue', value: 11.2, sourceOrder: 0, targetOrder: 3 },
      { source: 'manufacturing', target: 'revenue', value: 20.7, sourceOrder: 0, targetOrder: 4 },
      { source: 'mclane', target: 'revenue', value: 11.9, sourceOrder: 0, targetOrder: 5 },
      { source: 'services_retailing', target: 'revenue', value: 11.0, sourceOrder: 0, targetOrder: 6 },
      {
        source: 'other_revenue',
        target: 'revenue',
        value: 0.9,
        width: 4,
        sourceOrder: 0,
        targetOrder: 7,
        y0: 1168,
        y1: 1013,
        curve: { c1x: 830, c1y: 1168, c2x: 850, c2y: 1013 },
        linkTint: { left: GREEN_LINK, right: GREEN_LINK },
      },
      { source: 'revenue', target: 'operating_profit', value: 12.4, width: 57, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 81.3, width: 372, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit_before_tax', value: 12.3, width: 56, sourceOrder: 0, targetOrder: 0 },
      {
        source: 'operating_profit',
        target: 'investment_losses',
        value: 1.6,
        width: 7,
        sourceOrder: 1,
        targetOrder: 0,
        y0: 548,
        y1: 665,
        curve: { c1x: 1516, c1y: 548, c2x: 1636, c2y: 665 },
      },
      {
        source: 'other_income',
        target: 'net_profit_before_tax',
        value: 1.6,
        width: 7,
        sourceOrder: 0,
        targetOrder: 1,
        y0: 535,
        y1: 462,
        curve: { c1x: 1786, c1y: 535, c2x: 1814, c2y: 505 },
        linkTint: { left: GREEN_LINK, right: GREEN_LINK },
      },
      { source: 'net_profit_before_tax', target: 'net_profit', value: 10.2, width: 47, sourceOrder: 0, targetOrder: 0 },
      { source: 'net_profit_before_tax', target: 'tax', value: 2.1, width: 10, sourceOrder: 1, targetOrder: 0 },
    ],
    layout: {
      scale: 4.58,
      nodes: {
        insurance: { x: 430, y: 340, width: 73, height: 116 },
        bnsf: { x: 430, y: 548, width: 73, height: 27 },
        bhe: { x: 430, y: 669, width: 73, height: 31 },
        pilot: { x: 430, y: 789, width: 73, height: 51 },
        manufacturing: { x: 430, y: 916, width: 73, height: 95 },
        mclane: { x: 430, y: 1119, width: 73, height: 55 },
        services_retailing: { x: 430, y: 1264, width: 73, height: 50 },
        other_revenue: { x: 738, y: 1164, width: 72, height: 4 },
        revenue: { x: 897, y: 585, width: 73, height: 429 },
        cost_of_revenue: { x: -1000, y: -1000, width: 1, height: 1 },
        gross_profit: { x: -1000, y: -1000, width: 1, height: 1 },
        operating_profit: { x: 1365, y: 493, width: 72, height: 57 },
        operating_expenses: { x: 1365, y: 749, width: 72, height: 372 },
        net_profit_before_tax: { x: 1814, y: 405, width: 72, height: 56 },
        other_income: { x: 1700, y: 531, width: 72, height: 7 },
        investment_losses: { x: 1814, y: 661, width: 72, height: 7 },
        net_profit: { x: 2298, y: 282, width: 72, height: 47 },
        tax: { x: 2298, y: 581, width: 72, height: 10 },
      },
      labels: {
        insurance: {
          blocks: [
            {
              x: 466, top: 254, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '(0%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 420, top: 356, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Insurance', size: 39, weight: 800, color: BLUE },
                { text: '22% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        bnsf: {
          blocks: [
            {
              x: 466, top: 462, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+5% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 420, top: 519, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'BNSF', size: 38, weight: 800, color: BLUE },
                { text: '30% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        bhe: {
          blocks: [
            {
              x: 466, top: 583, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+5% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 420, top: 638, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'BHE', size: 38, weight: 800, color: BLUE },
                { text: '11% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        pilot: {
          blocks: [
            {
              x: 466, top: 703, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 420, top: 763, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Pilot', size: 38, weight: 800, color: BLUE },
                { text: '0% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        manufacturing: {
          blocks: [
            {
              x: 466, top: 830, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+10% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 420, top: 946, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Manufacturing', size: 38, weight: 800, color: BLUE },
                { text: '15% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        mclane: {
          blocks: [
            {
              x: 466, top: 1033, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '(2%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 420, top: 1088, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'McLane', size: 38, weight: 800, color: BLUE },
                { text: '1% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        services_retailing: {
          blocks: [
            {
              x: 466, top: 1178, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+8% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 420, top: 1241, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Services', size: 38, weight: 800, color: BLUE },
                { text: '& retailing', size: 38, weight: 800, color: BLUE },
                { text: '10% margin', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 774, top: 1172, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 32, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 30, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 935, top: 438, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: BLUE },
                { text: '$value', size: 39, weight: 400, color: BLUE },
                { text: '+4% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: { blocks: [] },
        gross_profit: { blocks: [] },
        operating_profit: {
          blocks: [
            {
              x: 1401, top: 323, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '13% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1467, top: 832, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800, color: RED_LABEL },
                { text: 'costs and', size: 36, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 36, weight: 800, color: RED_LABEL },
                { text: '$value', size: 34, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit_before_tax: {
          blocks: [
            {
              x: 1849, top: 258, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: 'before tax', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 1736, top: 542, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 34, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 31, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        investment_losses: {
          blocks: [
            {
              x: 1850, top: 678, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Investment', size: 34, weight: 800, color: RED_LABEL },
                { text: 'losses', size: 34, weight: 800, color: RED_LABEL },
                { text: '$value', size: 31, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 269, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Net profit', size: 40, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 39, weight: 400, color: GREEN_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2486, top: 548, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
      },
    },

    i18n: {
      zh: {
        name: 'Berkshire Hathaway · 2026 财年第一季度',
        meta: {
          title: 'Berkshire Hathaway 2026 财年第一季度',
          period: '2026 财年第一季度',
          periodNote: '截至 2026 年 3 月',
          titleTextLength: 1800,
        },
        nodes: {
          insurance: { label: '保险业务', notes: ['同比 (0%)', '利润率 22%'] },
          bnsf: { label: 'BNSF', notes: ['同比 +5%', '利润率 30%'] },
          bhe: { label: 'BHE', notes: ['同比 +5%', '利润率 11%'] },
          pilot: { label: 'Pilot 旅行中心', notes: ['同比 +8%', '利润率 0%'] },
          manufacturing: { label: '制造业务', notes: ['同比 +10%', '利润率 15%'] },
          mclane: { label: 'McLane 配送', notes: ['同比 (2%)', '利润率 1%'] },
          services_retailing: { label: ['服务', '与零售'], notes: ['同比 +8%', '利润率 10%'] },
          other_revenue: { label: '其他' },
          revenue: { label: '收入', notes: ['同比 +4%'] },
          cost_of_revenue: { label: '' },
          gross_profit: { label: '' },
          operating_profit: { label: '营业利润', notes: ['利润率 13%', '同比 (1 个百分点)'] },
          operating_expenses: { label: ['运营成本', '和费用'] },
          net_profit_before_tax: { label: ['税前', '净利润'] },
          other_income: { label: '其他' },
          investment_losses: { label: ['投资', '损失'] },
          net_profit: { label: '净利润' },
          tax: { label: '税费' },
        },
        layout: { labels: zhLayoutLabels },
      },
    },
  });
})();
