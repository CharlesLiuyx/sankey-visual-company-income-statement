/* ====================================================================
 *  The NYT - Q1 FY26 income statement ($M)
 *  Reconstructed from input/processed/nyt-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const TITLE = '#124f78';
  const NOTE = '#626366';
  const GREEN = '#2aa42a';
  const GREEN_LABEL = '#078d45';
  const GREEN_LINK = '#a5cf9d';
  const RED = '#d81700';
  const RED_LABEL = '#8b1200';
  const RED_LINK = '#e89384';
  const GRAY_LINK = '#8e8e8c';

  const statsCard = (x, width, title, value, note) => `
    <g>
      <rect x="${x}" y="2040" width="${width}" height="288" rx="52" fill="#000000"/>
      <text x="${x + width / 2}" y="2135" text-anchor="middle" font-size="58" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="2208" text-anchor="middle" font-size="55" font-weight="500" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="2274" text-anchor="middle" font-size="43" font-weight="500" fill="#ffffff">${note}</text>
    </g>`;

  const digitalDevice = `
    <g transform="translate(58 780)">
      <rect x="12" y="4" width="215" height="150" rx="6" fill="#111111"/>
      <rect x="23" y="16" width="193" height="120" fill="#f2f3f4"/>
      <rect x="44" y="35" width="58" height="78" fill="#ffffff" stroke="#d3d4d5" stroke-width="3"/>
      <rect x="113" y="42" width="72" height="58" fill="#cbdde6"/>
      <rect x="190" y="41" width="20" height="72" fill="#ffffff"/>
      <rect x="194" y="52" width="34" height="43" fill="#e01719"/>
      <text x="119" y="28" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="700" fill="#000000">The New York Times</text>
      <g stroke="#747474" stroke-width="2">
        <path d="M48 122 H98 M113 110 H178 M44 74 H96 M43 84 H93 M43 94 H92"/>
      </g>
      <path d="M8 154 H231 L255 174 H0 Z" fill="#eeeeee" stroke="#626262" stroke-width="2"/>
      <rect x="95" y="156" width="57" height="7" rx="2" fill="#a5a5a5"/>
      <ellipse cx="127" cy="181" rx="118" ry="8" fill="#565656" opacity="0.38"/>
    </g>`;

  const printStack = `
    <g transform="translate(45 1430)">
      <g fill="#f8f8f8" stroke="#a6a6a6" stroke-width="3">
        <path d="M13 149 C80 126 172 117 264 138 L264 170 C167 159 83 166 16 190 Z"/>
        <path d="M22 119 C91 97 184 88 279 112 L276 147 C180 127 92 139 20 157 Z"/>
        <path d="M37 88 C111 61 205 56 291 83 L286 122 C193 97 106 104 30 132 Z"/>
        <path d="M53 55 C132 29 223 23 303 48 L298 88 C207 67 127 72 46 101 Z"/>
        <path d="M69 25 C146 5 235 2 314 27 L308 66 C225 46 143 50 61 76 Z"/>
      </g>
      <g stroke="#747474" stroke-width="3" opacity="0.75">
        <path d="M75 48 C136 39 198 39 277 54"/>
        <path d="M62 82 C137 69 206 72 291 90"/>
        <path d="M47 116 C128 100 199 105 277 123"/>
        <path d="M31 151 C112 138 195 141 264 157"/>
      </g>
      <g stroke-width="4" opacity="0.72">
        <path d="M95 49 H133" stroke="#b71d2a"/>
        <path d="M152 49 H196" stroke="#d4b226"/>
        <path d="M213 50 H248" stroke="#2e70bc"/>
        <path d="M88 84 H126" stroke="#859b46"/>
        <path d="M181 87 H221" stroke="#bc2525"/>
      </g>
      <path d="M71 198 C139 214 238 212 307 184" fill="none" stroke="#cfcfcf" stroke-width="9" opacity="0.65"/>
    </g>`;

  const nytWordmark = `
    <g transform="translate(1995 432)" fill="#000000" font-family="Old English Text MT,UnifrakturMaguntia,Georgia,Times New Roman,serif" font-weight="900" text-anchor="middle">
      <text x="0" y="118" font-size="112">The</text>
      <text x="0" y="255" font-size="128">New York</text>
      <text x="0" y="390" font-size="128">Times</text>
    </g>`;

  const wirecutterWordmark = `
    <g transform="translate(370 1917)" fill="#000000" font-family="Georgia,Times New Roman,serif">
      <text x="0" y="64" font-size="54" font-weight="900">T</text>
      <rect x="58" y="18" width="3" height="55" fill="#000000" opacity="0.65"/>
      <text x="78" y="68" font-family="Arial Black,Arial,sans-serif" font-size="58" font-weight="900">Wirecutter</text>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${digitalDevice}
      ${printStack}
      ${nytWordmark}
      ${wirecutterWordmark}

      ${statsCard(35, 667, 'Digital subscribers', '12.5M', '+12% Y/Y')}
      ${statsCard(723, 535, 'Digital ARPU', '$9.77', '+2% Y/Y')}
      <text x="118" y="2388" font-size="43" font-weight="500" fill="${NOTE}">ARPU = Average Revenue Per User</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'nyt-q1-fy26',
    name: 'The NYT - Q1 FY26',
    company: 'The New York Times Company',
    meta: {
      company: 'The New York Times Company',
      title: 'The NYT Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/nyt-q1-fy26.png', width: 4686, height: 2636 },
      titleX: 2343,
      titleY: 350,
      titleSize: 224,
      titleWeight: 800,
      titleTextLength: 3910,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 4686,
      height: 2636,
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
      labelYOffset: 0,
      type: { name: 70, value: 58, note: 40, lineGap: 12 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 0.89,
      nodes: {
        digital: { x: 640, y: 695, width: 127, height: 346 },
        print: { x: 640, y: 1466, width: 127, height: 112 },
        subscription: { x: 1296, y: 950, width: 127, height: 461 },
        advertising: { x: 1297, y: 1628, width: 126, height: 113 },
        other_revenue: { x: 1297, y: 1929, width: 126, height: 60 },
        revenue: { x: 1951, y: 1159, width: 127, height: 637 },
        gross_profit: { x: 2609, y: 996, width: 126, height: 311 },
        cost_of_revenue: { x: 2610, y: 1669, width: 126, height: 325 },
        operating_profit: { x: 3261, y: 830, width: 126, height: 79 },
        operating_expenses: { x: 3265, y: 1255, width: 127, height: 231 },
        interest: { x: 3727, y: 799, width: 126, height: 8 },
        net_profit: { x: 3921, y: 649, width: 127, height: 76 },
        tax_other: { x: 3921, y: 1108, width: 127, height: 12 },
        ga: { x: 3921, y: 1319, width: 127, height: 76 },
        sm: { x: 3921, y: 1562, width: 127, height: 67 },
        product: { x: 3921, y: 1795, width: 127, height: 62 },
        da: { x: 3921, y: 2052, width: 127, height: 17 },
        other_expense: { x: 3921, y: 2273, width: 127, height: 3 },
      },
      labels: {
        digital: {
          blocks: [
            {
              x: 704, top: 535, anchor: 'middle', lineGap: 16,
              lines: [
                { text: '$value', size: 60, weight: 400 },
                { text: '+16% Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
            {
              x: 466, top: 826, anchor: 'middle',
              lines: [{ text: 'Digital', size: 70, weight: 800 }],
            },
          ],
        },
        print: {
          blocks: [
            {
              x: 704, top: 1311, anchor: 'middle', lineGap: 16,
              lines: [
                { text: '$value', size: 60, weight: 400 },
                { text: '(1%) Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
            {
              x: 450, top: 1500, anchor: 'middle',
              lines: [{ text: 'Print', size: 70, weight: 800 }],
            },
          ],
        },
        subscription: {
          blocks: [
            {
              x: 1360, top: 712, anchor: 'middle', lineGap: 16,
              lines: [
                { text: 'Subscription', size: 70, weight: 800 },
                { text: '$value', size: 60, weight: 400 },
                { text: '+11% Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        advertising: {
          blocks: [
            {
              x: 1360, top: 1488, anchor: 'middle', lineGap: 16,
              lines: [
                { text: '$value', size: 60, weight: 400 },
                { text: '(1%) Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
            {
              x: 1036, top: 1660, anchor: 'middle',
              lines: [{ text: 'Advertising', size: 70, weight: 800 }],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 1360, top: 1790, anchor: 'middle', lineGap: 16,
              lines: [
                { text: '$value', size: 60, weight: 400 },
                { text: '+8% Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
            {
              x: 1043, top: 1932, anchor: 'middle',
              lines: [{ text: 'Other', size: 70, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 2015, top: 900, anchor: 'middle', lineGap: 16,
              lines: [
                { text: 'Revenue', size: 70, weight: 800 },
                { text: '$value', size: 60, weight: 400 },
                { text: '+12% Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 2672, top: 682, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Gross profit', size: 66, weight: 800 },
                { text: '$value', size: 60, weight: 400 },
                { text: '49% margin', size: 41, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 2673, top: 2043, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Cost of', size: 61, weight: 800 },
                { text: 'revenue', size: 61, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 3325, top: 502, anchor: 'middle', lineGap: 12,
              lines: [
                { text: 'Operating profit', size: 66, weight: 800 },
                { text: '$value', size: 60, weight: 400 },
                { text: '13% margin', size: 41, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 3330, top: 1528, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Operating', size: 64, weight: 800 },
                { text: 'expenses', size: 64, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
              ],
            },
          ],
        },
        interest: {
          blocks: [
            {
              x: 3790, top: 850, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Interest', size: 54, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 4095, top: 596, anchor: 'start', lineGap: 14,
              lines: [
                { text: 'Net profit', size: 64, weight: 800 },
                { text: '$value', size: 60, weight: 400 },
                { text: '12% margin', size: 41, weight: 400, color: NOTE },
                { text: '+5pp Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax_other: {
          blocks: [
            {
              x: 4104, top: 1030, anchor: 'start', lineGap: 14,
              lines: [
                { text: 'Tax & other', size: 46, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 4106, top: 1300, anchor: 'start', lineGap: 12,
              lines: [
                { text: 'G&A ($86M)', size: 44, weight: 800 },
                { text: '12% of revenue', size: 41, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 4106, top: 1536, anchor: 'start', lineGap: 12,
              lines: [
                { text: 'S&M ($77M)', size: 44, weight: 800 },
                { text: '11% of revenue', size: 41, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        product: {
          blocks: [
            {
              x: 4066, top: 1772, anchor: 'start', lineGap: 12,
              lines: [
                { text: 'Product ($70M)', size: 44, weight: 800 },
                { text: '10% of revenue', size: 41, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        da: {
          blocks: [
            {
              x: 4106, top: 2018, anchor: 'start', lineGap: 12,
              lines: [
                { text: 'D&A ($21M)', size: 44, weight: 800 },
                { text: '3% of revenue', size: 41, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_expense: {
          blocks: [
            {
              x: 4092, top: 2242, anchor: 'start', lineGap: 12,
              lines: [
                { text: 'Other ($4M)', size: 44, weight: 800 },
                { text: '1% of revenue', size: 41, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 41, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'digital', col: 0, order: 0, type: 'source',
        label: 'Digital', value: 389, notes: ['+16% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'print', col: 0, order: 1, type: 'source',
        label: 'Print', value: 128, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'subscription', col: 1, order: 0, type: 'hub',
        label: 'Subscription', value: 517, notes: ['+11% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'advertising', col: 1, order: 1, type: 'source',
        label: 'Advertising', value: 127, notes: ['(1%) Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'other_revenue', col: 1, order: 2, type: 'source',
        label: 'Other', value: 69, notes: ['+8% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 2, order: 0, type: 'hub',
        label: 'Revenue', value: 712, notes: ['+12% Y/Y'], color: BLACK, labelColor: BLACK,
      },
      {
        id: 'gross_profit', col: 3, order: 0, type: 'profit',
        label: 'Gross profit', value: 349, notes: ['49% margin', '+2pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 3, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 363, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 4, order: 0, type: 'profit',
        label: 'Operating profit', value: 91, notes: ['13% margin', '+4pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 259, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'interest', col: 5, order: 0, type: 'profit',
        label: 'Interest', value: 11, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 6, order: 0, type: 'profit',
        label: 'Net profit', value: 88, notes: ['12% margin', '+5pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax_other', col: 6, order: 1, type: 'cost',
        label: 'Tax & other', value: 14, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 6, order: 2, type: 'cost',
        label: 'G&A', value: 86, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 6, order: 3, type: 'cost',
        label: 'S&M', value: 77, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'product', col: 6, order: 4, type: 'cost',
        label: 'Product', value: 70, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'da', col: 6, order: 5, type: 'cost',
        label: 'D&A', value: 21, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_expense', col: 6, order: 6, type: 'cost',
        label: 'Other', value: 4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'digital', target: 'subscription', value: 389, width: 346 },
      { source: 'print', target: 'subscription', value: 128, width: 112 },

      { source: 'subscription', target: 'revenue', value: 517, width: 461 },
      { source: 'advertising', target: 'revenue', value: 127, width: 113 },
      { source: 'other_revenue', target: 'revenue', value: 69, width: 60 },

      { source: 'revenue', target: 'gross_profit', value: 349, width: 311 },
      { source: 'revenue', target: 'cost_of_revenue', value: 363, width: 323 },

      { source: 'gross_profit', target: 'operating_profit', value: 91, width: 79 },
      { source: 'gross_profit', target: 'operating_expenses', value: 259, width: 230 },

      { source: 'operating_profit', target: 'net_profit', value: 88, width: 68, sourceOrder: 0, targetOrder: 0 },
      { source: 'interest', target: 'net_profit', value: 11, width: 8, targetOrder: 1 },
      { source: 'operating_profit', target: 'tax_other', value: 14, width: 11, sourceOrder: 1 },

      { source: 'operating_expenses', target: 'ga', value: 86, width: 76, sourceOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 77, width: 67, sourceOrder: 1 },
      { source: 'operating_expenses', target: 'product', value: 70, width: 62, sourceOrder: 2 },
      { source: 'operating_expenses', target: 'da', value: 21, width: 17, sourceOrder: 3 },
      { source: 'operating_expenses', target: 'other_expense', value: 4, width: 4, sourceOrder: 4 },
    ],
  });
})();
