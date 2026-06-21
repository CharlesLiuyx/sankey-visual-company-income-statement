/* ====================================================================
 * Netflix - Q1 FY26 income statement ($B)
 * Reconstructed from input/processed/netflix-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#15527a';
  const NOTE = '#666666';
  const GRAY_LINK = '#8f8f8d';
  const GREEN = '#2aa028';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#9bcf99';
  const RED = '#d40000';
  const RED_LABEL = '#8f1200';
  const RED_LINK = '#e38284';
  const NETFLIX_RED = '#e50914';

  function globePaths(region) {
    const paths = {
      ucan: `
        <path d="M22 34C30 24 39 20 50 23C55 28 58 34 58 43C50 45 44 43 38 40C33 47 27 48 21 43Z" fill="#1f7936"/>
        <path d="M35 45C42 47 47 51 50 58C43 61 36 59 31 54Z" fill="#1f7936"/>
        <path d="M57 60C65 61 70 66 73 73C63 74 57 70 54 64Z" fill="#b8b8b8"/>`,
      emea: `
        <path d="M33 32C43 23 60 24 68 36C60 39 55 42 51 49C45 45 39 43 33 45Z" fill="#1f7936"/>
        <path d="M45 46C59 45 70 51 78 61C67 65 55 64 45 58Z" fill="#1f7936"/>
        <path d="M36 49C44 54 45 63 42 73C33 68 29 60 30 52Z" fill="#1f7936"/>
        <path d="M24 27C32 22 40 20 47 23C40 27 34 31 30 37Z" fill="#b8b8b8"/>`,
      latam: `
        <path d="M24 29C33 24 44 25 51 33C45 38 40 39 34 37C29 40 25 39 21 35Z" fill="#1f7936"/>
        <path d="M48 38C60 41 68 50 70 61C62 65 55 62 51 54C45 51 41 48 39 42Z" fill="#1f7936"/>
        <path d="M57 61C65 67 66 77 61 88C52 80 50 70 54 62Z" fill="#1f7936"/>
        <path d="M26 23C38 17 52 18 64 26C56 28 49 28 42 25Z" fill="#b8b8b8"/>`,
      apac: `
        <path d="M21 30C35 18 56 17 72 27C64 35 50 35 41 31C33 36 26 38 19 36Z" fill="#1f7936"/>
        <path d="M44 39C57 37 70 43 78 54C67 58 55 56 45 50Z" fill="#1f7936"/>
        <path d="M55 62C66 61 75 66 79 76C66 81 55 77 50 68Z" fill="#1f7936"/>
        <path d="M68 22C76 23 82 28 86 35C78 34 72 31 68 27Z" fill="#6ad94b"/>`,
    };
    return paths[region] || paths.ucan;
  }

  function globeIcon(x, y, size, region) {
    const scale = size / 100;
    return `
      <g transform="translate(${x} ${y}) scale(${scale})">
        <defs>
          <radialGradient id="netflix-globe-bg-${region}" cx="34%" cy="25%" r="70%">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="0.62" stop-color="#f5f5f5"/>
            <stop offset="1" stop-color="#d8d8d8"/>
          </radialGradient>
          <clipPath id="netflix-globe-clip-${region}">
            <circle cx="50" cy="50" r="47"/>
          </clipPath>
        </defs>
        <circle cx="50" cy="50" r="47" fill="url(#netflix-globe-bg-${region})" stroke="#d5d5d5" stroke-width="1.5"/>
        <g clip-path="url(#netflix-globe-clip-${region})">
          <path d="M10 50H90M50 4C35 23 35 76 50 96M50 4C65 23 65 76 50 96M17 24C37 36 63 36 83 24M17 76C37 64 63 64 83 76" fill="none" stroke="#e2e2e2" stroke-width="1.6"/>
          ${globePaths(region)}
          <path d="M11 25C24 5 54 -2 77 12" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.65"/>
          <path d="M18 87C37 99 65 97 82 82" fill="none" stroke="#bdbdbd" stroke-width="4" opacity="0.5"/>
        </g>
      </g>`;
  }

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <text x="562" y="407" font-family="Arial Black,Arial,sans-serif" font-size="195" font-weight="900" letter-spacing="4" fill="${NETFLIX_RED}" textLength="535" lengthAdjust="spacingAndGlyphs">NETFLIX</text>
      ${globeIcon(80, 420, 88, 'ucan')}
      ${globeIcon(80, 743, 88, 'emea')}
      ${globeIcon(80, 976, 88, 'latam')}
      ${globeIcon(84, 1191, 88, 'apac')}
      <text x="93" y="1327" font-size="29" font-weight="500" fill="${NOTE}">* Including  $2.8B Warner break-up fee</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'netflix-q1-fy26',
    name: 'Netflix - Q1 FY26',
    company: 'Netflix',
    meta: {
      company: 'Netflix',
      title: 'Netflix Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/netflix-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1333,
      titleY: 201,
      titleSize: 122,
      titleWeight: 800,
      titleTextLength: 2148,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#efefef',
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
      scale: 30.16,
      nodes: {
        ucan: { x: 323, y: 391, width: 71, height: 157 },
        emea: { x: 323, y: 721, width: 71, height: 119 },
        latam: { x: 323, y: 998, width: 71, height: 44 },
        apac: { x: 323, y: 1212, width: 71, height: 43 },
        revenue: { x: 790, y: 669, width: 71, height: 368 },
        gross_profit: { x: 1257, y: 570, width: 71, height: 190 },
        cost_of_revenue: { x: 1257, y: 972, width: 71, height: 175 },
        operating_profit: { x: 1724, y: 494, width: 71, height: 118 },
        operating_expenses: { x: 1724, y: 754, width: 71, height: 70 },
        other_income: { x: 2057, y: 333, width: 71, height: 76 },
        net_profit: { x: 2191, y: 347, width: 72, height: 158 },
        tax: { x: 2191, y: 661, width: 72, height: 37 },
        technology_development: { x: 2191, y: 830, width: 72, height: 27 },
        marketing: { x: 2191, y: 1032, width: 72, height: 24 },
        ga: { x: 2191, y: 1233, width: 72, height: 17 },
      },
      labels: {
        ucan: {
          blocks: [
            {
              x: 358, top: 302, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+14% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 184, top: 449, anchor: 'start',
              lines: [{ text: 'UCAN', size: 39, weight: 800 }],
            },
          ],
        },
        emea: {
          blocks: [
            {
              x: 358, top: 630, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+17% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 190, top: 764, anchor: 'start',
              lines: [{ text: 'EMEA', size: 39, weight: 800 }],
            },
          ],
        },
        latam: {
          blocks: [
            {
              x: 358, top: 906, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+19% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 175, top: 1004, anchor: 'start',
              lines: [{ text: 'LATAM', size: 39, weight: 800 }],
            },
          ],
        },
        apac: {
          blocks: [
            {
              x: 358, top: 1122, anchor: 'middle', lineGap: 12,
              lines: [
                { text: '$value', size: 38, weight: 400 },
                { text: '+20% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
            {
              x: 193, top: 1220, anchor: 'start',
              lines: [{ text: 'APAC', size: 39, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 826, top: 528, anchor: 'middle', lineGap: 13,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+16% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1292, top: 388, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '52% margin', size: 27, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1289, top: 1170, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800 },
                { text: 'revenue', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1760, top: 310, anchor: 'middle', lineGap: 11,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '32% margin', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1728, top: 850, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 38, weight: 800 },
                { text: 'expenses', size: 38, weight: 800 },
                { text: '$value', size: 36, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 2094, top: 246, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Other *', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2288, top: 357, anchor: 'start', lineGap: 11,
              lines: [
                { text: 'Net profit', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '43% margin', size: 27, weight: 400, color: NOTE },
                { text: '+16pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2330, top: 645, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
              ],
            },
          ],
        },
        technology_development: {
          blocks: [
            {
              x: 2303, top: 792, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Technology &', size: 31, weight: 800 },
                { text: 'development', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '8% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        marketing: {
          blocks: [
            {
              x: 2308, top: 1011, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Marketing', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '7% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2308, top: 1218, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 30, weight: 400 },
                { text: '5% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'ucan', col: 0, order: 0, type: 'source', label: 'UCAN', value: 5.2, notes: ['+14% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'emea', col: 0, order: 1, type: 'source', label: 'EMEA', value: 4.0, notes: ['+17% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'latam', col: 0, order: 2, type: 'source', label: 'LATAM', value: 1.5, notes: ['+19% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'apac', col: 0, order: 3, type: 'source', label: 'APAC', value: 1.5, notes: ['+20% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'revenue', col: 1, order: 0, type: 'hub', label: 'Revenue', value: 12.2, notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK },
      { id: 'gross_profit', col: 2, order: 0, type: 'profit', label: 'Gross profit', value: 6.4, notes: ['52% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 2, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 5.9, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 3, order: 0, type: 'profit', label: 'Operating profit', value: 4.0, notes: ['32% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 3, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_income', col: 4, order: 0, type: 'profit', label: 'Other *', value: 2.6, notes: ['Including $2.8B Warner break-up fee'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 5.3, notes: ['43% margin', '+16pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 1.2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      {
        id: 'technology_development',
        col: 5,
        order: 2,
        type: 'cost',
        label: 'Technology & development',
        value: 1.0,
        notes: ['8% of revenue', '+0pp Y/Y'],
        color: RED,
        labelColor: RED_LABEL,
        linkTint: RED_LINK,
      },
      { id: 'marketing', col: 5, order: 3, type: 'cost', label: 'Marketing', value: 0.8, notes: ['7% of revenue', '+0pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.6, notes: ['5% of revenue', '+1pp Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'ucan', target: 'revenue', value: 5.2, width: 157, sourceOrder: 0, targetOrder: 0 },
      { source: 'emea', target: 'revenue', value: 4.0, width: 119, sourceOrder: 0, targetOrder: 1 },
      { source: 'latam', target: 'revenue', value: 1.5, width: 44, sourceOrder: 0, targetOrder: 2 },
      { source: 'apac', target: 'revenue', value: 1.5, width: 43, sourceOrder: 0, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 6.4, width: 190, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 5.9, width: 175, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 4.0, width: 118, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, width: 70, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 2.8, width: 81, sourceOrder: 0, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax', value: 1.2, width: 37, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 2.6, width: 76, sourceOrder: 0, targetOrder: 0 },

      { source: 'operating_expenses', target: 'technology_development', value: 1.0, width: 27, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'marketing', value: 0.8, width: 24, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 0.6, width: 17, sourceOrder: 2, targetOrder: 0 },
    ],
  });
})();
