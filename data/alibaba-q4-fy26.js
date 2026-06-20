/* ====================================================================
 * Alibaba - Q4 FY26 income statement ($B)
 * Reconstructed from input/processed/alibaba-q4-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const ORANGE = '#ff5a00';
  const ORANGE_LINK = '#ffb28a';
  const GREEN = '#289321';
  const GREEN_LABEL = '#118e46';
  const GREEN_LINK = '#a7d09f';
  const RED = '#d31300';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e99485';
  const NOTE = '#606164';
  const TITLE = '#124f78';
  const RIGHT_LABEL_X = 2595;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(760 352)" fill="${ORANGE}">
        <path d="M24 47 C52 4 137 -7 139 34 C141 72 84 95 36 89 C10 86 -8 70 4 54 C18 35 50 25 86 23 C54 29 32 40 24 55 C15 76 63 78 96 61 C122 47 130 27 112 19 C86 6 45 19 24 47 Z"/>
        <path d="M72 43 l34 -13 -8 23 -10 -8 c-18 10 -36 14 -54 11 16 -3 31 -7 45 -16 Z" fill="#ffffff"/>
        <text x="168" y="92" font-family="Arial,sans-serif" font-size="124" font-weight="700">Alibaba</text>
      </g>

      <g font-family="Arial,sans-serif" font-weight="700">
        <text x="83" y="494" text-anchor="middle" font-size="43" fill="${ORANGE}">淘宝</text>
        <text x="83" y="526" text-anchor="middle" font-size="23" fill="${ORANGE}">Taobao</text>
        <text x="84" y="577" text-anchor="middle" font-size="40" fill="#ff1645">TMALL</text>

        <g transform="translate(10 748) scale(0.72)">
          <path d="M0 18 30 0 60 18 60 55 30 73 0 55Z" fill="#ff7b00"/>
          <path d="M30 0 60 18 30 36 0 18Z" fill="#ffb000"/>
          <path d="M30 36 60 18 60 55 30 73Z" fill="#d91dff"/>
        </g>
        <text x="66" y="790" font-size="29" fill="#2a278f">Lazada</text>
        <text x="10" y="846" font-size="31" fill="${ORANGE}" font-weight="500">AliExpress</text>
        <text x="20" y="904" font-size="39" fill="#242424" font-weight="500">trendyol</text>
        <rect x="129" y="864" width="35" height="17" rx="3" fill="${ORANGE}"/>
        <text x="147" y="878" text-anchor="middle" font-size="12" fill="#ffffff">.com</text>

        <g transform="translate(6 1098) scale(0.72)">${BUSINESS_ICONS.alibabaCloud || ''}</g>

        <g transform="translate(20 1190) scale(0.92)">${BUSINESS_ICONS.hema || ''}</g>
        <text x="18" y="1322" font-size="41" fill="#ff4081">YOU</text>
        <text x="105" y="1322" font-size="41" fill="#2db7ea">KU</text>
        <text x="18" y="1372" font-size="33" fill="#0068ff">CAI</text>
        <text x="18" y="1410" font-size="33" fill="#0068ff">NIAO</text>
        <text x="100" y="1410" font-size="26" fill="#0068ff">菜鸟</text>
        <g transform="translate(64 1418) scale(0.30)">${BUSINESS_ICONS.amap || ''}</g>
      </g>

    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'alibaba-q4-fy26',
    name: 'Alibaba · Q4 FY26',
    meta: {
      title: 'Alibaba Q4 FY26 Income Statement',
      period: 'Q4 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/alibaba-q4-fy26.png', width: 2980, height: 1678 },
      titleX: 1490,
      titleY: 224,
      titleSize: 145,
      titleWeight: 800,
      titleTextLength: 2450,
      periodX: 2735,
      periodY: 338,
      periodNoteY: 386,
    },
    render: {
      width: 2980,
      height: 1678,
      background: '#efefef',
      titleColor: TITLE,
      subtitleColor: '#56575a',
      noteColor: NOTE,
      palette: {
        source: { node: ORANGE, label: ORANGE },
        hub: { node: ORANGE, label: ORANGE },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: ORANGE_LINK,
        hub: null,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 43, value: 41, note: 30, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 9.75,
      nodes: {
        china_ecommerce: { x: 504, y: 462, width: 77, height: 171 },
        international_digital_commerce: { x: 504, y: 858, width: 77, height: 50 },
        cloud: { x: 504, y: 1113, width: 77, height: 58 },
        all_others: { x: 504, y: 1377, width: 77, height: 82 },
        gross_revenue: { x: 904, y: 683, width: 77, height: 373 },
        revenue: { x: 1306, y: 756, width: 77, height: 344 },
        intersegment_eliminations: { x: 1306, y: 1193, width: 77, height: 31 },
        gross_profit: { x: 1705, y: 638, width: 77, height: 119 },
        cost_of_revenue: { x: 1705, y: 987, width: 77, height: 225 },
        operating_loss: { x: 1912, y: 974, width: 18, height: 2 },
        operating_expenses: { x: 2107, y: 806, width: 77, height: 177 },
        sm: { x: 2507, y: 507, width: 77, height: 111 },
        product_development: { x: 2507, y: 832, width: 77, height: 39 },
        ga: { x: 2507, y: 1102, width: 77, height: 20 },
        amortization_impairment: { x: 2507, y: 1362, width: 77, height: 6 },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        china_ecommerce: {
          blocks: [
            {
              x: 548, top: 358, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 42, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 485, top: 474, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'China', size: 43, weight: 800 },
                { text: 'E-commerce', size: 43, weight: 800 },
                { text: '20% adjusted margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        international_digital_commerce: {
          blocks: [
            {
              x: 548, top: 767, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 42, weight: 400 },
                { text: '+6% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 485, top: 740, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'International', size: 42, weight: 800 },
                { text: 'Digital', size: 42, weight: 800 },
                { text: 'Commerce', size: 42, weight: 800 },
                { text: '(0%) adjusted margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cloud: {
          blocks: [
            {
              x: 548, top: 1016, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 42, weight: 400 },
                { text: '+38% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 485, top: 1116, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'Cloud', size: 43, weight: 800 },
                { text: '9% adjusted margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        all_others: {
          blocks: [
            {
              x: 548, top: 1255, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 42, weight: 400 },
                { text: '(21%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 485, top: 1360, anchor: 'end', lineGap: 9,
              lines: [
                { text: 'All others', size: 43, weight: 800 },
                { text: '(33%) adjusted margin', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_revenue: { blocks: [] },
        revenue: {
          blocks: [
            {
              x: 1344, top: 594, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 43, weight: 800 },
                { text: '$value', size: 41, weight: 400 },
                { text: '+3% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intersegment_eliminations: {
          blocks: [
            {
              x: 1346, top: 1250, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Inter-segment', size: 38, weight: 800 },
                { text: 'Eliminations', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1744, top: 438, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 42, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '35% margin', size: 29, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1744, top: 1210, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1965, top: 994, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'loss', size: 39, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
                { text: '(0%) margin', size: 28, weight: 400, color: NOTE },
                { text: '+12pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 2136, top: 590, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 39, weight: 800 },
                { text: 'expenses', size: 39, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 498, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Sales &', size: 36, weight: 800 },
                { text: 'marketing ($7.7B)', size: 36, weight: 800 },
                { text: '22% of revenue (+7pp', size: 29, weight: 400, color: NOTE },
                { text: 'Y/Y)', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        product_development: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 812, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Product', size: 34, weight: 800 },
                { text: 'development ($2.7B)', size: 32, weight: 800 },
                { text: '8% of revenue', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1078, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'General &', size: 34, weight: 800 },
                { text: 'Administrative ($1.4B)', size: 31, weight: 800 },
                { text: '4% of revenue', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        amortization_impairment: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1325, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Amortization', size: 34, weight: 800 },
                { text: '& impairment ($0.4B)', size: 31, weight: 800 },
                { text: '1% of revenue', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: { blocks: [] },
      },
    },

    nodes: [
      {
        id: 'china_ecommerce', col: 0, order: 0, type: 'source',
        label: ['China', 'E-commerce'], value: 17.7, notes: ['+6% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'international_digital_commerce', col: 0, order: 1, type: 'source',
        label: ['International', 'Digital', 'Commerce'], value: 5.1, notes: ['+6% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'cloud', col: 0, order: 2, type: 'source',
        label: 'Cloud', value: 6.0, notes: ['+38% Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'all_others', col: 0, order: 3, type: 'source',
        label: 'All others', value: 9.6, notes: ['(21%) Y/Y'],
        color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'gross_revenue', col: 1, order: 0, type: 'source',
        label: '', value: 38.4, color: ORANGE, labelColor: ORANGE, linkTint: ORANGE_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 35.3, notes: ['+3% Y/Y'],
        color: ORANGE, labelColor: ORANGE,
      },
      {
        id: 'intersegment_eliminations', col: 2, order: 1, type: 'cost',
        label: ['Inter-segment', 'Eliminations'], value: -3.2,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 12.2, notes: ['35% margin', '(7pp) Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 23.1,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'loss'], value: -0.1, notes: ['(0%) margin', '+12pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 12.3,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 0, type: 'cost',
        label: ['Sales &', 'marketing'], value: 7.7, notes: ['22% of revenue', '+7pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'product_development', col: 5, order: 1, type: 'cost',
        label: ['Product', 'development'], value: 2.7, notes: ['8% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 2, type: 'cost',
        label: ['General &', 'Administrative'], value: 1.4, notes: ['4% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'amortization_impairment', col: 5, order: 3, type: 'cost',
        label: ['Amortization', '& impairment'], value: 0.4, notes: ['1% of revenue'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'china_ecommerce', target: 'gross_revenue', value: 17.7, width: 171, targetOrder: 0 },
      { source: 'international_digital_commerce', target: 'gross_revenue', value: 5.1, width: 50, targetOrder: 1 },
      { source: 'cloud', target: 'gross_revenue', value: 6.0, width: 58, targetOrder: 2 },
      { source: 'all_others', target: 'gross_revenue', value: 9.6, width: 82, targetOrder: 3 },
      { source: 'gross_revenue', target: 'revenue', value: 35.3, width: 344, sourceOrder: 0 },
      { source: 'gross_revenue', target: 'intersegment_eliminations', value: 3.2, width: 31, sourceOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 12.2, width: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 23.1, width: 225, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 12.2, width: 119, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 0.1, width: 1.5, targetOrder: 1 },

      { source: 'operating_expenses', target: 'sm', value: 7.7, width: 111, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'product_development', value: 2.7, width: 39, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 1.4, width: 20, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'amortization_impairment', value: 0.4, width: 6, sourceOrder: 3 },
    ],
  });
})();
