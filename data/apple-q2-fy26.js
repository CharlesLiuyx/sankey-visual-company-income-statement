/* ====================================================================
 * Apple - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/apple-q2-fy26.png as a fixed
 * d3-sankey layout with SVG-only Apple and Services annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const GRAY_LINK = '#8f8f8d';
  const GREEN = '#28a027';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9ccc99';
  const RED = '#d40000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const APPLE_PATH =
    'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701';
  const applePath = (window.SANKEY_BRAND && window.SANKEY_BRAND.apple) || APPLE_PATH;
  const businessIcons = window.SANKEY_BUSINESS_ICONS || {};

  function appleGlyph(x, y, size) {
    return `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${BLACK}"><path d="${applePath}"/></g>`;
  }

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${appleGlyph(98, 508, 40)}
      <text x="144" y="548" font-family="Arial,sans-serif" font-size="45" font-weight="700" fill="${BLACK}">iPhone</text>

      ${appleGlyph(98, 1036, 42)}
      <text x="148" y="1074" font-family="Arial,sans-serif" font-size="51" font-weight="800" fill="${BLACK}">WATCH</text>
      ${appleGlyph(98, 1110, 42)}
      <text x="148" y="1148" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="${BLACK}">AirPods</text>

      <g transform="translate(78 1227)">${businessIcons.appleServicesCluster || ''}</g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'apple-q2-fy26',
    name: 'Apple · Q2 FY26',
    company: 'Apple',
    meta: {
      company: 'Apple',
      title: 'Apple Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/apple-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 168,
      titleSize: 92,
      titleWeight: 800,
      titleTextLength: 2080,
      periodX: 2420,
      periodY: 268,
      periodNoteY: 324,
      logoWidth: 280,
      logoHeight: 270,
      logoY: 242,
      logoViewBox: '0 0 24 24',
      logoSvg: `<path d="${applePath}" fill="${BLACK}"/>`,
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
      type: { name: 40, value: 38, note: 28, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 3.51,
      nodes: {
        iphone: { x: 381, y: 430, width: 72, height: 200 },
        mac: { x: 381, y: 792, width: 72, height: 29 },
        ipad: { x: 381, y: 962, width: 72, height: 24 },
        wearables: { x: 381, y: 1130, width: 72, height: 28 },
        products: { x: 755, y: 589, width: 72, height: 282 },
        services: { x: 755, y: 1212, width: 72, height: 109 },
        revenue: { x: 1129, y: 708, width: 72, height: 392 },
        gross_profit: { x: 1503, y: 591, width: 72, height: 192 },
        cost_of_revenue: { x: 1503, y: 1026, width: 72, height: 199 },
        operating_profit: { x: 1876, y: 507, width: 72, height: 126 },
        operating_expenses: { x: 1876, y: 796, width: 72, height: 66 },
        product_cost: { x: 1773, y: 1082, width: 72, height: 173 },
        service_cost: { x: 1773, y: 1334, width: 72, height: 25 },
        net_profit: { x: 2250, y: 431, width: 72, height: 104 },
        tax: { x: 2250, y: 718, width: 72, height: 22 },
        rnd: { x: 2250, y: 906, width: 72, height: 40 },
        sga: { x: 2250, y: 1198, width: 72, height: 26 },
      },
      labels: {
        iphone: {
          blocks: [
            {
              x: 360, top: 337, anchor: 'start', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+22% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        mac: {
          blocks: [
            {
              x: 368, top: 696, anchor: 'start', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 214, top: 762, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Mac', size: 69, weight: 800 },
                { text: 'Air, Pro, Mini', size: 24, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ipad: {
          blocks: [
            {
              x: 368, top: 868, anchor: 'start', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+8% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 220, top: 934, anchor: 'start',
              lines: [{ text: 'iPad', size: 64, weight: 800 }],
            },
          ],
        },
        wearables: {
          blocks: [
            {
              x: 368, top: 1036, anchor: 'start', lineGap: 12,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+5% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 173, top: 1152, anchor: 'middle', lineGap: 6,
              lines: [
                { text: 'Wearables, Home, and', size: 22, weight: 400, color: NOTE },
                { text: 'Accessories', size: 22, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        products: {
          blocks: [
            {
              x: 792, top: 437, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Products', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        services: {
          blocks: [
            {
              x: 792, top: 1065, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Services', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+16% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1165, top: 560, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+17% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1539, top: 407, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '49% margin', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1539, top: 1283, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 37, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1930, top: 322, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '32% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1878, top: 884, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        product_cost: {
          blocks: [
            {
              x: 1908, top: 1104, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Products', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '39% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        service_cost: {
          blocks: [
            {
              x: 1916, top: 1280, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Services', size: 32, weight: 800 },
                { text: '$value', size: 31, weight: 400 },
                { text: '77% gross margin', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2365, top: 423, anchor: 'start', lineGap: 11,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '27% margin', size: 28, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2460, top: 692, anchor: 'middle', lineGap: 7,
              lines: [
                { text: 'Tax', size: 30, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2465, top: 878, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '10% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: 2466, top: 1176, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'SG&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '7% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'iphone', col: 0, order: 0, type: 'source', label: 'iPhone', value: 57.0, valueText: '$57.0B', notes: ['+22% Y/Y'] },
      { id: 'mac', col: 0, order: 1, type: 'source', label: 'Mac', value: 8.4, notes: ['+6% Y/Y'] },
      { id: 'ipad', col: 0, order: 2, type: 'source', label: 'iPad', value: 6.9, notes: ['+8% Y/Y'] },
      {
        id: 'wearables',
        col: 0,
        order: 3,
        type: 'source',
        label: ['Wearables, Home,', 'and Accessories'],
        value: 7.9,
        notes: ['+5% Y/Y'],
      },
      { id: 'products', col: 1, order: 0, type: 'source', label: 'Products', value: 80.2, notes: ['+17% Y/Y'] },
      { id: 'services', col: 1, order: 1, type: 'source', label: 'Services', value: 31.0, valueText: '$31.0B', notes: ['+16% Y/Y'] },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 111.2, notes: ['+17% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 54.8, notes: ['49% margin', '+2pp Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 56.4 },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 35.9, notes: ['32% margin', '+1pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 18.9 },
      { id: 'product_cost', col: 4, order: 2, type: 'cost', label: 'Products', value: 49.2, notes: ['39% gross margin'] },
      { id: 'service_cost', col: 4, order: 3, type: 'cost', label: 'Services', value: 7.2, notes: ['77% gross margin'] },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 29.7, notes: ['27% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 6.3 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 11.4, notes: ['10% of revenue', '+1pp Y/Y'] },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 7.5, notes: ['7% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'iphone', target: 'products', value: 57.0, targetOrder: 0 },
      { source: 'mac', target: 'products', value: 8.4, targetOrder: 1 },
      { source: 'ipad', target: 'products', value: 6.9, targetOrder: 2 },
      { source: 'wearables', target: 'products', value: 7.9, targetOrder: 3 },
      { source: 'products', target: 'revenue', value: 80.2, targetOrder: 0 },
      { source: 'services', target: 'revenue', value: 31.0, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 54.8, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 56.4, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 35.9, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 18.9, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 29.7, sourceOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 6.3, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'rnd', value: 11.4, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 7.5, targetOrder: 1 },
      { source: 'cost_of_revenue', target: 'product_cost', value: 49.2, targetOrder: 0 },
      { source: 'cost_of_revenue', target: 'service_cost', value: 7.2, targetOrder: 1 },
    ],
  });
})();
