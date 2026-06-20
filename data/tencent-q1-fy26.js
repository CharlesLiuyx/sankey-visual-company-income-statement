/* ====================================================================
 *  Tencent - Q1 FY26 income statement (RMB B)
 *  Reconstructed from input/processed/tencent-q1-fy26.png as a fixed
 *  d3-sankey layout with crop-backed business annotations.
 * ==================================================================== */
(function () {
  const YELLOW = '#f5a923';
  const YELLOW_LINK = '#f2d08e';
  const SOCIAL_BLUE = '#0637d0';
  const SOCIAL_LINK = '#759be2';
  const OLIVE = '#6f9b10';
  const OLIVE_LINK = '#b1ca85';
  const CORAL = '#f56254';
  const CORAL_LINK = '#f4afa4';
  const HUB = '#0c57a8';
  const GREEN = '#279321';
  const GREEN_LABEL = '#078a43';
  const GREEN_LINK = '#92c68b';
  const RED = '#be0005';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#de8578';
  const GRAY = '#535353';
  const GRAY_LINK = '#b9b9b9';
  const TITLE = '#124f78';

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'tencent-q1-fy26',
    name: 'Tencent · Q1 FY26',
    company: 'Tencent',
    meta: {
      company: 'Tencent',
      title: 'Tencent Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/tencent-q1-fy26.png', width: 4686, height: 2634 },
      titleX: 2343,
      titleY: 336,
      titleSize: 224,
      titleWeight: 800,
      titleTextLength: 3920,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 4686,
      height: 2634,
      background: '#efefef',
      allowRasterAnnotations: true,
      titleColor: TITLE,
      subtitleColor: GRAY,
      noteColor: GRAY,
      palette: {
        source: { node: HUB, label: HUB },
        hub: { node: HUB, label: HUB },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: HUB,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 70, value: 56, note: 37, lineGap: 10 },
    },
    annotationsSvg: `
      <g font-family="Montserrat,Arial,sans-serif">
        <text x="146" y="496" text-anchor="middle" font-size="70" font-weight="800" fill="${TITLE}">in RMB</text>
      </g>`,
    rasterAnnotations: [
      {
        key: 'company-wordmark',
        href: 'data/assets/raster-annotations/tencent/company-wordmark.png',
        x: 1237,
        y: 481,
        width: 963,
        height: 217,
      },
      {
        key: 'business-gaming-cluster',
        href: 'data/assets/raster-annotations/tencent/business-gaming-cluster.png',
        x: 60,
        y: 633,
        width: 406,
        height: 238,
      },
      {
        key: 'business-social-networks-cluster',
        href: 'data/assets/raster-annotations/tencent/business-social-networks-cluster.png',
        x: 115,
        y: 1012,
        width: 260,
        height: 258,
      },
      {
        key: 'business-marketing-services-cluster',
        href: 'data/assets/raster-annotations/tencent/business-marketing-services-cluster.png',
        x: 130,
        y: 1382,
        width: 246,
        height: 235,
      },
      {
        key: 'business-fintech-business-services-cluster',
        href: 'data/assets/raster-annotations/tencent/business-fintech-business-services-cluster.png',
        x: 142,
        y: 1779,
        width: 239,
        height: 235,
      },
    ],

    layout: {
      scale: 2.895,
      nodes: {
        gaming: { x: 908, y: 657, width: 121, height: 186 },
        social_networks: { x: 908, y: 1095, width: 121, height: 92 },
        marketing_services: { x: 908, y: 1460, width: 121, height: 110 },
        fintech_business_services: { x: 908, y: 1823, width: 121, height: 174 },
        others: { x: 908, y: 2262, width: 121, height: 7 },
        revenue: { x: 1693, y: 1073, width: 119, height: 569 },
        gross_profit: { x: 2475, y: 894, width: 121, height: 322 },
        cost_of_revenue: { x: 2475, y: 1550, width: 121, height: 246 },
        other_operating_gains: { x: 2887, y: 1452, width: 116, height: 4 },
        operating_profit: { x: 3263, y: 771, width: 121, height: 196 },
        operating_expenses: { x: 3260, y: 1261, width: 121, height: 130 },
        investments: { x: 3847, y: 852, width: 120, height: 18 },
        net_profit: { x: 4042, y: 630, width: 121, height: 171 },
        tax: { x: 4042, y: 1075, width: 121, height: 42 },
        rnd: { x: 4042, y: 1360, width: 121, height: 64 },
        sm: { x: 4042, y: 1731, width: 121, height: 31 },
        ga: { x: 4042, y: 2094, width: 121, height: 31 },
      },
      labels: {
        gaming: {
          blocks: [
            {
              x: 981, top: 494, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 56, weight: 400 },
                { text: '+8% Y/Y', size: 37, weight: 400, color: GRAY },
              ],
            },
            {
              x: 854, top: 705, anchor: 'end',
              lines: [{ text: 'Gaming', size: 70, weight: 800 }],
            },
          ],
        },
        social_networks: {
          blocks: [
            {
              x: 981, top: 944, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 56, weight: 400 },
                { text: '(2%) Y/Y', size: 37, weight: 400, color: GRAY },
              ],
            },
            {
              x: 842, top: 1053, anchor: 'end', lineGap: 12,
              lines: [
                { text: 'Social', size: 70, weight: 800 },
                { text: 'Networks', size: 70, weight: 800 },
              ],
            },
          ],
        },
        marketing_services: {
          blocks: [
            {
              x: 981, top: 1298, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 56, weight: 400 },
                { text: '+20% Y/Y', size: 37, weight: 400, color: GRAY },
              ],
            },
            {
              x: 842, top: 1427, anchor: 'end', lineGap: 12,
              lines: [
                { text: 'Marketing', size: 70, weight: 800 },
                { text: 'Services', size: 70, weight: 800 },
              ],
            },
          ],
        },
        fintech_business_services: {
          blocks: [
            {
              x: 981, top: 1674, anchor: 'middle', lineGap: 11,
              lines: [
                { text: '$value', size: 56, weight: 400 },
                { text: '+9% Y/Y', size: 37, weight: 400, color: GRAY },
              ],
            },
            {
              x: 842, top: 1783, anchor: 'end', lineGap: 12,
              lines: [
                { text: 'FinTech &', size: 64, weight: 800 },
                { text: 'Business', size: 64, weight: 800 },
                { text: 'Services', size: 64, weight: 800 },
              ],
            },
          ],
        },
        others: {
          blocks: [
            {
              x: 981, top: 2106, anchor: 'middle', lineGap: 10,
              lines: [
                { text: '$value', size: 56, weight: 400, color: GRAY },
                { text: '+103% Y/Y', size: 36, weight: 400, color: GRAY },
              ],
            },
            {
              x: 842, top: 2226, anchor: 'end',
              lines: [{ text: 'Others', size: 70, weight: 800, color: GRAY }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1760, top: 790, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 70, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '+9% Y/Y', size: 39, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 2536, top: 548, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 66, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '57% margin', size: 39, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 39, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 2537, top: 1838, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Cost of', size: 64, weight: 800 },
                { text: 'revenue', size: 64, weight: 800 },
                { text: '$value', size: 56, weight: 400 },
              ],
            },
          ],
        },
        other_operating_gains: {
          blocks: [
            {
              x: 2925, top: 1486, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Other', size: 45, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 3325, top: 447, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 62, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '34% margin', size: 39, weight: 400, color: GRAY },
                { text: '+2pp Y/Y', size: 39, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 3350, top: 1430, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating', size: 64, weight: 800 },
                { text: 'expenses', size: 64, weight: 800 },
                { text: '$value', size: 56, weight: 400 },
              ],
            },
          ],
        },
        investments: {
          blocks: [
            {
              x: 3897, top: 900, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Investments', size: 43, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 4385, top: 621, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Net profit', size: 66, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '30% margin', size: 39, weight: 400, color: GRAY },
                { text: '+3pp Y/Y', size: 39, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 4378, top: 1037, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Tax', size: 45, weight: 800 },
                { text: '(14.6B)', size: 45, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 4404, top: 1261, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Research &', size: 44, weight: 800 },
                { text: 'development', size: 44, weight: 800 },
                { text: '(22.6B)', size: 44, weight: 400 },
                { text: '12% of revenue', size: 39, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 39, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 4404, top: 1644, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Sales &', size: 44, weight: 800 },
                { text: 'marketing', size: 44, weight: 800 },
                { text: '(11.3B)', size: 44, weight: 400 },
                { text: '6% of revenue', size: 39, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 39, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 4404, top: 2042, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'General &', size: 44, weight: 800 },
                { text: 'admin', size: 44, weight: 800 },
                { text: '(11.3B)', size: 44, weight: 400 },
                { text: '6% of revenue', size: 39, weight: 400, color: GRAY },
                { text: '(2pp) Y/Y', size: 39, weight: 400, color: GRAY },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'gaming', col: 0, order: 0, type: 'source',
        label: 'Gaming', value: 64.2, notes: ['+8% Y/Y'],
        color: YELLOW, labelColor: YELLOW, linkTint: YELLOW_LINK,
      },
      {
        id: 'social_networks', col: 0, order: 1, type: 'source',
        label: ['Social', 'Networks'], value: 31.9, notes: ['(2%) Y/Y'],
        color: SOCIAL_BLUE, labelColor: SOCIAL_BLUE, linkTint: SOCIAL_LINK,
      },
      {
        id: 'marketing_services', col: 0, order: 2, type: 'source',
        label: ['Marketing', 'Services'], value: 38.2, notes: ['+20% Y/Y'],
        color: OLIVE, labelColor: OLIVE, linkTint: OLIVE_LINK,
      },
      {
        id: 'fintech_business_services', col: 0, order: 3, type: 'source',
        label: ['FinTech &', 'Business', 'Services'], value: 59.9, notes: ['+9% Y/Y'],
        color: CORAL, labelColor: CORAL, linkTint: CORAL_LINK,
      },
      {
        id: 'others', col: 0, order: 4, type: 'source',
        label: 'Others', value: 2.3, notes: ['+103% Y/Y'],
        color: GRAY, labelColor: GRAY, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 196.5, notes: ['+9% Y/Y'],
        color: HUB, labelColor: HUB,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 111.3, notes: ['57% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 85.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_operating_gains', col: 3, order: 0, type: 'profit',
        label: 'Other', value: -1.3, notes: ['operating gains'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_profit', col: 3, order: 1, type: 'profit',
        label: 'Operating profit', value: 67.4, notes: ['34% margin', '+2pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 3, order: 2, type: 'cost',
        label: ['Operating', 'expenses'], value: 43.9,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'investments', col: 4, order: 0, type: 'profit',
        label: 'Investments', value: 6.6,
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 5, order: 0, type: 'profit',
        label: 'Net profit', value: 59.4, notes: ['30% margin', '+3pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 5, order: 1, type: 'cost',
        label: 'Tax', value: 14.6,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 2, type: 'cost',
        label: ['Research &', 'development'], value: 22.6, notes: ['12% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 3, type: 'cost',
        label: ['Sales &', 'marketing'], value: 11.3, notes: ['6% of revenue', '+1pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 4, type: 'cost',
        label: ['General &', 'admin'], value: 11.3, notes: ['6% of revenue', '(2pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'gaming', target: 'revenue', value: 64.2, width: 186, targetOrder: 0 },
      { source: 'social_networks', target: 'revenue', value: 31.9, width: 92, targetOrder: 1 },
      { source: 'marketing_services', target: 'revenue', value: 38.2, width: 110, targetOrder: 2 },
      { source: 'fintech_business_services', target: 'revenue', value: 59.9, width: 174, targetOrder: 3 },
      { source: 'others', target: 'revenue', value: 2.3, width: 7, targetOrder: 4 },

      { source: 'revenue', target: 'gross_profit', value: 111.3, width: 322, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 85.2, width: 246, sourceOrder: 1 },

      { source: 'gross_profit', target: 'operating_profit', value: 67.4, width: 195, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 43.9, width: 127, sourceOrder: 1, targetOrder: 0 },
      {
        source: 'other_operating_gains', target: 'operating_expenses', value: 1.3, width: 4,
        targetOrder: 1, y0: 1454, y1: 1390, linkTint: GREEN_LINK,
        curve: { x0: 3003, x1: 3260, c1x: 3110, c2x: 3195, c1y: 1454, c2y: 1390 },
      },

      { source: 'operating_profit', target: 'net_profit', value: 52.8, width: 153, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 14.6, width: 42, sourceOrder: 1 },
      { source: 'investments', target: 'net_profit', value: 6.6, width: 18, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 22.6, width: 65, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 11.3, width: 33, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 11.3, width: 33, sourceOrder: 2 },
    ],
  });
})();
