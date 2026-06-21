/* ====================================================================
 * Microsoft - Q3 FY26 income statement by business unit ($B)
 * Reconstructed from input/processed/microsoft-q3-fy26-by-bu.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#11a8df';
  const BLUE_LINK = '#7fc9e5';
  const GOLD = '#ffbd00';
  const GOLD_LINK = '#f4d881';
  const GRAY_NODE = '#777777';
  const GRAY_LINK = '#b9b9b9';
  const HUB = '#626361';
  const GREEN = '#2aa42a';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9cca98';
  const RED = '#d90000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e48682';
  const NOTE = '#626366';
  const TITLE = '#124f78';
  const RIGHT_LABEL_X = 2470;

  const microsoftPaneLogo = (x, y, size, gap = 7) => `
    <g transform="translate(${x} ${y})">
      <rect x="0" y="0" width="${size}" height="${size}" fill="#f25022"/>
      <rect x="${size + gap}" y="0" width="${size}" height="${size}" fill="#7fba00"/>
      <rect x="0" y="${size + gap}" width="${size}" height="${size}" fill="#00a4ef"/>
      <rect x="${size + gap}" y="${size + gap}" width="${size}" height="${size}" fill="#ffb900"/>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <defs>
        <linearGradient id="ms-bybu-azure-left" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0b4f98"/>
          <stop offset="1" stop-color="#0875c9"/>
        </linearGradient>
        <linearGradient id="ms-bybu-azure-right" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#34c7f3"/>
          <stop offset="1" stop-color="#149fd7"/>
        </linearGradient>
        <linearGradient id="ms-bybu-azure-cross" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#0f8cdc"/>
          <stop offset="1" stop-color="#0761b5"/>
        </linearGradient>
      </defs>

      <g transform="translate(72 335)">
        ${microsoftPaneLogo(0, 0, 27, 4)}
        <text x="70" y="48" font-family="Arial,sans-serif" font-size="48" font-weight="700" fill="#77787a">Microsoft 365</text>
        <text x="148" y="93" font-family="Arial,sans-serif" font-size="47" font-weight="800" fill="#2f68b2">Linked</text>
        <rect x="290" y="55" width="50" height="45" rx="4" fill="#2f68b2"/>
        <text x="315" y="92" text-anchor="middle" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#ffffff">in</text>
      </g>

      <g transform="translate(237 695)">
        <path d="M54 0L0 148H61L115 0Z" fill="url(#ms-bybu-azure-left)"/>
        <path d="M86 0H141L204 148H143Z" transform="scale(0.78)" fill="url(#ms-bybu-azure-right)"/>
        <path d="M67 86L145 111L171 148L95 121Z" transform="scale(0.78)" fill="url(#ms-bybu-azure-cross)"/>
        <path d="M81 62L44 148H91L121 93Z" transform="scale(0.78)" fill="#0b78c4" opacity="0.82"/>
      </g>

      <g transform="translate(178 1048)">
        <g transform="scale(0.68)" fill="#00a4ef">
          <path d="M0 14L83 2V56H0Z"/>
          <path d="M88 1L170 -10V56H88Z"/>
          <path d="M0 61H83V115L0 103Z"/>
          <path d="M88 61H170V127L88 116Z"/>
        </g>
        <g transform="translate(132 -4) scale(0.88)">
          <circle cx="53" cy="48" r="40" fill="#000000"/>
          <path d="M22 25C42 37 64 37 84 25C73 10 34 10 22 25Z" fill="#ffffff"/>
          <path d="M20 28C32 44 40 55 48 86C29 79 14 64 13 47C12 39 15 33 20 28Z" fill="#ffffff"/>
          <path d="M86 28C74 44 66 55 58 86C77 79 92 64 93 47C94 39 91 33 86 28Z" fill="#ffffff"/>
          <text x="53" y="134" text-anchor="middle" font-family="Arial,sans-serif" font-size="51" font-weight="500" fill="#000000">XBOX</text>
        </g>
      </g>
    </g>`;

  const companyLogo = `
    ${microsoftPaneLogo(0, 0, 86, 10)}
  `;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'microsoft-q3-fy26-by-bu',
    name: 'Microsoft · Q3 FY26 ByBU',
    company: 'Microsoft',
    meta: {
      company: 'Microsoft',
      title: 'Microsoft Q3 FY26 Income Statement',
      period: 'Q3 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/microsoft-q3-fy26-by-bu.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2315,
      periodX: 2528,
      periodY: 260,
      periodNoteY: 302,
      logoWidth: 196,
      logoHeight: 196,
      logoY: 260,
      logoViewBox: '0 0 182 182',
      logoSvg: companyLogo,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: BLUE, label: NOTE },
        hub: { node: HUB, label: NOTE },
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
      type: { name: 40, value: 40, note: 29, lineGap: 8 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 5.49,
      nodes: {
        productivity_business_processes: { x: 480, y: 455, width: 73, height: 192 },
        intelligent_cloud: { x: 480, y: 843, width: 73, height: 190 },
        more_personal_computing: { x: 480, y: 1211, width: 73, height: 72 },
        revenue: { x: 948, y: 625, width: 72, height: 455 },
        gross_profit: { x: 1415, y: 540, width: 72, height: 308 },
        cost_of_revenue: { x: 1415, y: 1032, width: 72, height: 147 },
        operating_profit: { x: 1880, y: 467, width: 72, height: 211 },
        operating_expenses: { x: 1880, y: 850, width: 72, height: 97 },
        other: { x: 2240, y: 600, width: 74, height: 5 },
        net_profit: { x: 2351, y: 377, width: 72, height: 174 },
        tax: { x: 2351, y: 716, width: 72, height: 42 },
        rnd: { x: 2351, y: 880, width: 72, height: 49 },
        sm: { x: 2351, y: 1067, width: 72, height: 37 },
        ga: { x: 2351, y: 1251, width: 72, height: 10 },
      },
      labels: {
        productivity_business_processes: {
          blocks: [
            {
              x: 454, top: 354, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+17% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 252, top: 466, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Productivity &', size: 40, weight: 800, color: NOTE },
                { text: 'Business Processes', size: 40, weight: 800, color: NOTE },
                { text: '60% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        intelligent_cloud: {
          blocks: [
            {
              x: 455, top: 752, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+30% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 255, top: 872, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Intelligent Cloud', size: 40, weight: 800, color: NOTE },
                { text: '40% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        more_personal_computing: {
          blocks: [
            {
              x: 454, top: 1116, anchor: 'start', lineGap: 10,
              lines: [
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '(1%) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 255, top: 1177, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'More Personal', size: 40, weight: 800, color: NOTE },
                { text: 'Computing', size: 40, weight: 800, color: NOTE },
                { text: '28% operating margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 984, top: 479, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: NOTE },
                { text: '$value', size: 40, weight: 400, color: NOTE },
                { text: '+18% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1451, top: 356, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '68% margin', size: 29, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1450, top: 1200, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Cost of', size: 40, weight: 800 },
                { text: 'revenue', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1916, top: 282, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '46% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1916, top: 968, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Operating', size: 40, weight: 800 },
                { text: 'expenses', size: 40, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other: {
          blocks: [
            {
              x: 2250, top: 621, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other', size: 31, weight: 800 },
                { text: '$value', size: 27, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2462, top: 386, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Net profit', size: 40, weight: 800 },
                { text: '$value', size: 40, weight: 400 },
                { text: '38% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 707, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 876, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '11% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1058, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '8% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1235, anchor: 'start', lineGap: 10,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '2% of revenue', size: 25, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 25, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'productivity_business_processes',
        col: 0,
        order: 0,
        type: 'source',
        label: ['Productivity &', 'Business Processes'],
        value: 35.0,
        valueText: '$35.0B',
        notes: ['60% operating margin', '+2pp Y/Y'],
        color: BLUE,
        linkTint: BLUE_LINK,
      },
      {
        id: 'intelligent_cloud',
        col: 0,
        order: 1,
        type: 'source',
        label: 'Intelligent Cloud',
        value: 34.7,
        notes: ['40% operating margin', '(2pp) Y/Y'],
        color: GOLD,
        linkTint: GOLD_LINK,
      },
      {
        id: 'more_personal_computing',
        col: 0,
        order: 2,
        type: 'source',
        label: ['More Personal', 'Computing'],
        value: 13.2,
        notes: ['28% operating margin', '+1pp Y/Y'],
        color: GRAY_NODE,
        linkTint: GRAY_LINK,
      },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 82.9, notes: ['+18% Y/Y'] },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 56.1, notes: ['68% margin', '(1pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 26.8 },
      {
        id: 'operating_profit',
        col: 3,
        order: 0,
        type: 'profit',
        label: 'Operating profit',
        value: 38.4,
        notes: ['46% margin', '+1pp Y/Y'],
      },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 17.7 },
      { id: 'other', col: 4, order: 0, type: 'profit', label: 'Other', value: 0.9 },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 31.8, notes: ['38% margin', '+1pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 7.6 },
      { id: 'rnd', col: 5, order: 2, type: 'cost', label: 'R&D', value: 8.9, notes: ['11% of revenue', '(1pp) Y/Y'] },
      { id: 'sm', col: 5, order: 3, type: 'cost', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'productivity_business_processes', target: 'revenue', value: 35.0, targetOrder: 0 },
      { source: 'intelligent_cloud', target: 'revenue', value: 34.7, targetOrder: 1 },
      { source: 'more_personal_computing', target: 'revenue', value: 13.2, targetOrder: 2 },
      { source: 'revenue', target: 'gross_profit', value: 56.1, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 26.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 38.4, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 17.7, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 30.8, sourceOrder: 0, targetOrder: 0 },
      { source: 'other', target: 'net_profit', value: 0.9, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 7.6, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 8.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 6.8, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 1.9, sourceOrder: 2, targetOrder: 0 },
    ],
  });
})();
