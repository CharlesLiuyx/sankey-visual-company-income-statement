/* ====================================================================
 * Disney - Q2 FY26 by segment ($B)
 * Reconstructed from input/processed/disney-q2-fy26-by-segment.png as a
 * fixed d3-sankey layout with validated raster icon annotations.
 * ==================================================================== */
(function () {
  const TITLE = '#15527a';
  const BLUE = '#237eb6';
  const BLUE_LABEL = '#177aba';
  const BLUE_LINK = '#91bdd7';
  const CYAN = '#22b7c5';
  const CYAN_LABEL = '#16b6c5';
  const CYAN_LINK = '#85d5da';
  const BLACK = '#050505';
  const GRAY_LINK = '#8c8c89';
  const GREEN = '#2aa42a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9aca99';
  const RED = '#d90000';
  const RED_LABEL = '#941000';
  const RED_LINK = '#e58384';
  const NOTE = '#666666';

  const buildCallouts = ({ svod = 'SVOD', other = 'Other', parks = 'Parks' } = {}) => `
    <g font-family="Montserrat,Arial,sans-serif" fill="none" stroke="${BLUE_LABEL}" stroke-width="3">
      <path d="M2308 485 L2356 458 Q2356 438 2378 438 H2624 Q2646 438 2646 460 V512 Q2646 533 2624 533 H2378 Q2356 533 2356 512 Z" fill="#efefef"/>
      <path d="M2310 1041 L2358 1014 Q2358 993 2380 993 H2624 Q2646 993 2646 1015 V1067 Q2646 1089 2624 1089 H2380 Q2358 1089 2358 1067 Z" fill="#efefef" stroke="${CYAN_LABEL}"/>
    </g>
    <g font-family="Montserrat,Arial,sans-serif" font-size="28" font-weight="800">
      <text x="2522" y="476" text-anchor="end" fill="${BLUE_LABEL}">${svod}</text>
      <text x="2560" y="476" fill="${GREEN_LABEL}" font-weight="500">$0.6B</text>
      <text x="2522" y="518" text-anchor="end" fill="${BLUE_LABEL}">${other}</text>
      <text x="2560" y="518" fill="${GREEN_LABEL}" font-weight="500">$0.7B</text>
      <text x="2522" y="1031" text-anchor="end" fill="${CYAN_LABEL}">${parks}</text>
      <text x="2560" y="1031" fill="${GREEN_LABEL}" font-weight="500">$2.1B</text>
      <text x="2522" y="1072" text-anchor="end" fill="${CYAN_LABEL}">${other}</text>
      <text x="2560" y="1072" fill="${GREEN_LABEL}" font-weight="500">$0.5B</text>
    </g>`;

  const annotationsEn = buildCallouts();
  const annotationsZh = buildCallouts({ svod: '订阅视频', other: '其他', parks: '乐园' });

  const labelsEn = {
    subscription: {
      blocks: [
        {
          x: 538, top: 242, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '+14% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 232, top: 382, anchor: 'start',
          lines: [{ text: 'Subscription', size: 40, weight: 800, color: BLUE_LABEL }],
        },
      ],
    },
    advertising: {
      blocks: [
        {
          x: 538, top: 463, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '+5% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 549, anchor: 'start',
          lines: [{ text: 'Advertising', size: 40, weight: 800, color: BLUE_LABEL }],
        },
      ],
    },
    content_sales_licensing: {
      blocks: [
        {
          x: 538, top: 601, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '+8% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 477, top: 676, anchor: 'end', lineGap: 10,
          lines: [
            { text: 'Content Sales', size: 36, weight: 800, color: BLUE_LABEL },
            { text: 'Licensing', size: 36, weight: 800, color: BLUE_LABEL },
          ],
        },
      ],
    },
    entertainment_other: {
      blocks: [
        {
          x: 538, top: 742, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '(18%) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 468, top: 812, anchor: 'end',
          lines: [{ text: 'Other', size: 40, weight: 800, color: BLUE_LABEL }],
        },
      ],
    },
    entertainment_total: {
      blocks: [
        {
          x: 882, top: 333, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Entertainment', size: 40, weight: 800, color: BLUE_LABEL },
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '+10% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sports: {
      blocks: [
        {
          x: 882, top: 697, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Sports', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '+2% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    parks_experiences: {
      blocks: [
        {
          x: 538, top: 895, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: CYAN_LABEL },
            { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 477, top: 994, anchor: 'end', lineGap: 10,
          lines: [
            { text: 'Parks &', size: 36, weight: 800, color: CYAN_LABEL },
            { text: 'Experiences', size: 36, weight: 800, color: CYAN_LABEL },
          ],
        },
      ],
    },
    consumer_products: {
      blocks: [
        {
          x: 538, top: 1118, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: CYAN_LABEL },
            { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 469, top: 1161, anchor: 'end', lineGap: 10,
          lines: [
            { text: 'Consumer', size: 36, weight: 800, color: CYAN_LABEL },
            { text: 'Products', size: 36, weight: 800, color: CYAN_LABEL },
          ],
        },
      ],
    },
    experiences_total: {
      blocks: [
        {
          x: 882, top: 1214, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Experiences', size: 40, weight: 800, color: CYAN_LABEL },
            { text: '$value', size: 40, weight: 400, color: CYAN_LABEL },
            { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_segment_revenue: { blocks: [] },
    revenue: {
      blocks: [
        {
          x: 1555, top: 544, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Revenue', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '+7% Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    eliminations: {
      blocks: [
        {
          x: 1632, top: 1187, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Eliminations', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    segment_operating_profit: {
      blocks: [
        {
          x: 1920, top: 304, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Segment', size: 40, weight: 800, color: GREEN_LABEL },
            { text: 'operating', size: 40, weight: 800, color: GREEN_LABEL },
            { text: 'profit', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '18% margin', size: 29, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1915, top: 1156, anchor: 'middle', lineGap: 9,
          lines: [
            { text: 'Segment', size: 40, weight: 800, color: RED_LABEL },
            { text: 'Costs &', size: 40, weight: 800, color: RED_LABEL },
            { text: 'expenses', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    entertainment_profit: {
      blocks: [
        {
          x: 2242, top: 294, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Entertainment', size: 40, weight: 800, color: BLUE_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '11% margin', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sports_profit: {
      blocks: [
        {
          x: 2384, top: 707, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Sports', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '14% margin', size: 29, weight: 400, color: NOTE },
            { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    experiences_profit: {
      blocks: [
        {
          x: 2230, top: 1089, anchor: 'middle', lineGap: 8,
          lines: [
            { text: 'Experiences', size: 40, weight: 800, color: CYAN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '28% margin', size: 29, weight: 400, color: NOTE },
            { text: '(0pp) Y/Y', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  const labelsZh = {
    subscription: {
      blocks: [
        {
          x: 538, top: 242, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '同比 +14%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 232, top: 382, anchor: 'start',
          lines: [{ text: '订阅', size: 40, weight: 800, color: BLUE_LABEL }],
        },
      ],
    },
    advertising: {
      blocks: [
        {
          x: 538, top: 463, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '同比 +5%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 549, anchor: 'start',
          lines: [{ text: '广告', size: 40, weight: 800, color: BLUE_LABEL }],
        },
      ],
    },
    content_sales_licensing: {
      blocks: [
        {
          x: 538, top: 601, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '同比 +8%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 676, anchor: 'start', lineGap: 10,
          lines: [
            { text: '内容销售', size: 40, weight: 800, color: BLUE_LABEL },
            { text: '授权', size: 40, weight: 800, color: BLUE_LABEL },
          ],
        },
      ],
    },
    entertainment_other: {
      blocks: [
        {
          x: 538, top: 742, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '同比 (18%)', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 812, anchor: 'start',
          lines: [{ text: '其他', size: 40, weight: 800, color: BLUE_LABEL }],
        },
      ],
    },
    entertainment_total: {
      blocks: [
        {
          x: 882, top: 333, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '娱乐', size: 40, weight: 800, color: BLUE_LABEL },
            { text: '$value', size: 40, weight: 400, color: BLUE_LABEL },
            { text: '同比 +10%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sports: {
      blocks: [
        {
          x: 882, top: 697, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '体育', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 +2%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    parks_experiences: {
      blocks: [
        {
          x: 538, top: 895, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: CYAN_LABEL },
            { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 994, anchor: 'start', lineGap: 10,
          lines: [
            { text: '乐园及', size: 40, weight: 800, color: CYAN_LABEL },
            { text: '体验', size: 40, weight: 800, color: CYAN_LABEL },
          ],
        },
      ],
    },
    consumer_products: {
      blocks: [
        {
          x: 538, top: 1118, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '$value', size: 40, weight: 400, color: CYAN_LABEL },
            { text: '同比 +3%', size: 29, weight: 400, color: NOTE },
          ],
        },
        {
          x: 248, top: 1161, anchor: 'start', lineGap: 10,
          lines: [
            { text: '消费品', size: 40, weight: 800, color: CYAN_LABEL },
          ],
        },
      ],
    },
    experiences_total: {
      blocks: [
        {
          x: 882, top: 1214, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '体验', size: 40, weight: 800, color: CYAN_LABEL },
            { text: '$value', size: 40, weight: 400, color: CYAN_LABEL },
            { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    gross_segment_revenue: { blocks: [] },
    revenue: {
      blocks: [
        {
          x: 1555, top: 544, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '收入', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: BLACK },
            { text: '同比 +7%', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    eliminations: {
      blocks: [
        {
          x: 1632, top: 1187, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '抵销', size: 32, weight: 800, color: RED_LABEL },
            { text: '$value', size: 31, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    segment_operating_profit: {
      blocks: [
        {
          x: 1920, top: 304, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '分部', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '营业', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '利润', size: 40, weight: 800, color: GREEN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 18%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    operating_expenses: {
      blocks: [
        {
          x: 1915, top: 1156, anchor: 'middle', lineGap: 9,
          lines: [
            { text: '分部', size: 40, weight: 800, color: RED_LABEL },
            { text: '成本及', size: 40, weight: 800, color: RED_LABEL },
            { text: '费用', size: 40, weight: 800, color: RED_LABEL },
            { text: '$value', size: 40, weight: 400, color: RED_LABEL },
          ],
        },
      ],
    },
    entertainment_profit: {
      blocks: [
        {
          x: 2242, top: 294, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '娱乐', size: 40, weight: 800, color: BLUE_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 11%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    sports_profit: {
      blocks: [
        {
          x: 2425, top: 707, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '体育', size: 40, weight: 800, color: BLACK },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 14%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (1 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
    experiences_profit: {
      blocks: [
        {
          x: 2230, top: 1089, anchor: 'middle', lineGap: 8,
          lines: [
            { text: '体验', size: 40, weight: 800, color: CYAN_LABEL },
            { text: '$value', size: 40, weight: 400, color: GREEN_LABEL },
            { text: '利润率 28%', size: 29, weight: 400, color: NOTE },
            { text: '同比 (0 个百分点)', size: 29, weight: 400, color: NOTE },
          ],
        },
      ],
    },
  };

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'disney-q2-fy26-by-segment',
    name: 'Disney · Q2 FY26 by Segment',
    company: 'Disney',
    meta: {
      company: 'Disney',
      title: 'Disney Q2 FY26 by Segment',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/disney-q2-fy26-by-segment.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 1715,
      periodX: 2395,
      periodY: 155,
      periodNoteY: 197,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: BLUE_LABEL },
        hub: { node: BLACK, label: BLACK },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: BLUE_LINK,
        hub: GRAY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotationsEn,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/disney/company-wordmark.png',
        x: 1177,
        y: 231,
        width: 531,
        height: 283,
      },
      {
        key: 'business-entertainment-streaming-tv-cluster',
        href: 'data/assets/raster-annotations/disney/business-entertainment-streaming-tv-cluster.png',
        x: 3,
        y: 345,
        width: 209,
        height: 257,
      },
      {
        key: 'business-entertainment-content-cluster',
        href: 'data/assets/raster-annotations/disney/business-entertainment-content-cluster.png',
        x: 25,
        y: 622,
        width: 181,
        height: 147,
      },
      {
        key: 'business-sports-espn-cluster',
        href: 'data/assets/raster-annotations/disney/business-sports-espn-cluster.png',
        x: 660,
        y: 810,
        width: 190,
        height: 120,
      },
      {
        key: 'business-experiences-parks-cluster',
        href: 'data/assets/raster-annotations/disney/business-experiences-parks-cluster.png',
        x: 68,
        y: 897,
        width: 174,
        height: 234,
      },
      {
        key: 'business-experiences-consumer-products-cluster',
        href: 'data/assets/raster-annotations/disney/business-experiences-consumer-products-cluster.png',
        x: 105,
        y: 1138,
        width: 160,
        height: 116,
      },
    ],
    layout: {
      scale: 14.5,
      nodes: {
        subscription: { x: 505, y: 337, width: 66, height: 112 },
        advertising: { x: 505, y: 559, width: 66, height: 24 },
        content_sales_licensing: { x: 505, y: 697, width: 66, height: 24 },
        entertainment_other: { x: 505, y: 835, width: 66, height: 7 },
        entertainment_total: { x: 849, y: 478, width: 66, height: 170 },
        sports: { x: 849, y: 843, width: 66, height: 65 },
        parks_experiences: { x: 505, y: 989, width: 66, height: 123 },
        consumer_products: { x: 505, y: 1213, width: 66, height: 13 },
        experiences_total: { x: 848, y: 1056, width: 67, height: 137 },
        gross_segment_revenue: { x: 1193, y: 622, width: 65, height: 374 },
        eliminations: { x: 1536, y: 1160, width: 67, height: 8 },
        revenue: { x: 1537, y: 682, width: 65, height: 365 },
        segment_operating_profit: { x: 1882, y: 588, width: 67, height: 65 },
        operating_expenses: { x: 1880, y: 834, width: 66, height: 299 },
        entertainment_profit: { x: 2224, y: 475, width: 66, height: 18 },
        sports_profit: { x: 2224, y: 769, width: 66, height: 8 },
        experiences_profit: { x: 2224, y: 1027, width: 66, height: 37 },
      },
      labels: labelsEn,
    },

    nodes: [
      {
        id: 'subscription', col: 0, order: 0, type: 'source',
        label: 'Subscription', value: 7.8, notes: ['+14% Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'advertising', col: 0, order: 1, type: 'source',
        label: 'Advertising', value: 1.7, notes: ['+5% Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'content_sales_licensing', col: 0, order: 2, type: 'source',
        label: ['Content Sales', 'Licensing'], value: 1.7, notes: ['+8% Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'entertainment_other', col: 0, order: 3, type: 'source',
        label: 'Other', value: 0.5, notes: ['(18%) Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'entertainment_total', col: 1, order: 0, type: 'source',
        label: 'Entertainment', value: 11.7, notes: ['+10% Y/Y'],
        color: BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK,
      },
      {
        id: 'sports', col: 1, order: 1, type: 'source',
        label: 'Sports', value: 4.6, notes: ['+2% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'parks_experiences', col: 0, order: 4, type: 'source',
        label: 'Parks & Experiences', value: 8.5, notes: ['+7% Y/Y'],
        color: CYAN, labelColor: CYAN_LABEL, linkTint: CYAN_LINK,
      },
      {
        id: 'consumer_products', col: 0, order: 5, type: 'source',
        label: 'Consumer Products', value: 1.0, valueText: '$1.0B', notes: ['+3% Y/Y'],
        color: CYAN, labelColor: CYAN_LABEL, linkTint: CYAN_LINK,
      },
      {
        id: 'experiences_total', col: 1, order: 2, type: 'source',
        label: 'Experiences', value: 9.5, notes: ['+7% Y/Y'],
        color: CYAN, labelColor: CYAN_LABEL, linkTint: CYAN_LINK,
      },
      {
        id: 'gross_segment_revenue', col: 2, order: 0, type: 'hub',
        label: 'Company segment revenue before eliminations', value: 25.8,
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'eliminations', col: 3, order: 1, type: 'cost',
        label: 'Eliminations', value: 0.7,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'revenue', col: 3, order: 0, type: 'hub',
        label: 'Revenue', value: 25.2, notes: ['+7% Y/Y'],
        color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'segment_operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Segment operating profit', value: 4.6, notes: ['18% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: 'Segment Costs & expenses', value: 20.6,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'entertainment_profit', col: 5, order: 0, type: 'profit',
        label: 'Entertainment', value: 1.3, notes: ['11% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: BLUE_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'sports_profit', col: 5, order: 1, type: 'profit',
        label: 'Sports', value: 0.7, notes: ['14% margin', '(1pp) Y/Y'],
        color: GREEN, labelColor: BLACK, linkTint: GREEN_LINK,
      },
      {
        id: 'experiences_profit', col: 5, order: 2, type: 'profit',
        label: 'Experiences', value: 2.6, notes: ['28% margin', '(0pp) Y/Y'],
        color: GREEN, labelColor: CYAN_LABEL, linkTint: GREEN_LINK,
      },
    ],

    links: [
      { source: 'subscription', target: 'entertainment_total', value: 7.8, width: 112, targetOrder: 0 },
      { source: 'advertising', target: 'entertainment_total', value: 1.7, width: 24, targetOrder: 1 },
      { source: 'content_sales_licensing', target: 'entertainment_total', value: 1.7, width: 24, targetOrder: 2 },
      { source: 'entertainment_other', target: 'entertainment_total', value: 0.5, width: 7, targetOrder: 3 },

      { source: 'parks_experiences', target: 'experiences_total', value: 8.5, width: 123, targetOrder: 0, linkTint: { left: CYAN_LINK, right: CYAN_LINK } },
      { source: 'consumer_products', target: 'experiences_total', value: 1.0, width: 13, targetOrder: 1, linkTint: { left: CYAN_LINK, right: CYAN_LINK } },

      { source: 'entertainment_total', target: 'gross_segment_revenue', value: 11.7, width: 170, sourceOrder: 0, targetOrder: 0, linkTint: { left: BLUE_LINK, right: GRAY_LINK } },
      { source: 'sports', target: 'gross_segment_revenue', value: 4.6, width: 65, sourceOrder: 0, targetOrder: 1, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'experiences_total', target: 'gross_segment_revenue', value: 9.5, width: 137, sourceOrder: 0, targetOrder: 2, linkTint: { left: CYAN_LINK, right: GRAY_LINK } },

      { source: 'gross_segment_revenue', target: 'revenue', value: 25.2, width: 365, sourceOrder: 0, targetOrder: 0, linkTint: { left: GRAY_LINK, right: GRAY_LINK } },
      { source: 'gross_segment_revenue', target: 'eliminations', value: 0.7, width: 8, sourceOrder: 1, targetOrder: 0, linkTint: { left: RED_LINK, right: RED_LINK } },

      { source: 'revenue', target: 'segment_operating_profit', value: 4.6, width: 65, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'operating_expenses', value: 20.6, width: 299, sourceOrder: 1, targetOrder: 0 },

      { source: 'segment_operating_profit', target: 'entertainment_profit', value: 1.3, width: 18, sourceOrder: 0, targetOrder: 0 },
      { source: 'segment_operating_profit', target: 'sports_profit', value: 0.7, width: 8, sourceOrder: 1, targetOrder: 0 },
      { source: 'segment_operating_profit', target: 'experiences_profit', value: 2.6, width: 37, sourceOrder: 2, targetOrder: 0 },
    ],

    i18n: {
      zh: {
        name: 'Disney · 2026 财年第二季度（按分部）',
        meta: {
          title: 'Disney 2026 财年第二季度分部',
          period: '2026 财年第二季度',
          periodNote: '截至 2026 年 3 月',
        },
        nodes: {
          subscription: { label: '订阅', notes: ['同比 +14%'] },
          advertising: { label: '广告', notes: ['同比 +5%'] },
          content_sales_licensing: { label: '内容销售授权', notes: ['同比 +8%'] },
          entertainment_other: { label: '其他', notes: ['同比 (18%)'] },
          entertainment_total: { label: '娱乐', notes: ['同比 +10%'] },
          sports: { label: '体育', notes: ['同比 +2%'] },
          parks_experiences: { label: '乐园及体验', notes: ['同比 +7%'] },
          consumer_products: { label: '消费品', notes: ['同比 +3%'] },
          experiences_total: { label: '体验', notes: ['同比 +7%'] },
          gross_segment_revenue: { label: '分部抵销前收入' },
          eliminations: { label: '抵销' },
          revenue: { label: '收入', notes: ['同比 +7%'] },
          segment_operating_profit: { label: '分部营业利润', notes: ['利润率 18%', '同比 (1 个百分点)'] },
          operating_expenses: { label: '分部成本及费用' },
          entertainment_profit: { label: '娱乐', notes: ['利润率 11%', '同比 (0 个百分点)'] },
          sports_profit: { label: '体育', notes: ['利润率 14%', '同比 (1 个百分点)'] },
          experiences_profit: { label: '体验', notes: ['利润率 28%', '同比 (0 个百分点)'] },
        },
        layout: { labels: labelsZh },
        annotationsSvg: annotationsZh,
      },
    },
  });
})();
