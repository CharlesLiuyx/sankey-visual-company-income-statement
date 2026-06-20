/* ====================================================================
 *  Reddit - Q1 FY26 income statement ($M)
 *  Reconstructed from input/processed/reddit-q1-fy26.png as a fixed
 *  d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLACK = '#000000';
  const GRAY = '#5f6062';
  const TITLE = '#154f79';
  const ORANGE = '#ff4500';
  const GREEN = '#289f24';
  const GREEN_LABEL = '#078a43';
  const GREEN_LINK = '#9fca96';
  const RED = '#d51600';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e89586';
  const GRAY_LINK = '#8c8c8a';

  const statCard = (x, y, width, height, lines) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="52" fill="${ORANGE}"/>
      ${lines
        .map(
          (line, index) =>
            `<text x="${x + width / 2}" y="${y + 72 + index * 72}" text-anchor="middle" font-size="${line.size || 54}" font-weight="${line.weight || 700}" fill="#ffffff">${line.text}</text>`
        )
        .join('')}
    </g>`;

  const redditWordmark = `
    <g transform="translate(482 392)">
      <g>
        <path d="M96 209 C38 199 0 157 0 105 C0 46 49 0 111 0 C174 0 223 46 223 105 C223 159 184 201 126 210 L41 239 Z" fill="${ORANGE}"/>
        <circle cx="111" cy="103" r="78" fill="#ffffff"/>
        <path d="M73 74 C75 36 107 25 135 39" fill="none" stroke="#221822" stroke-width="8" stroke-linecap="round"/>
        <circle cx="151" cy="39" r="18" fill="#ffffff" stroke="#ffffff" stroke-width="4"/>
        <circle cx="72" cy="104" r="17" fill="${ORANGE}"/>
        <circle cx="151" cy="104" r="17" fill="${ORANGE}"/>
        <circle cx="67" cy="99" r="6" fill="#ffffff" opacity="0.8"/>
        <circle cx="146" cy="99" r="6" fill="#ffffff" opacity="0.8"/>
        <path d="M78 139 C96 159 128 159 146 139" fill="none" stroke="#221822" stroke-width="13" stroke-linecap="round"/>
      </g>
      <text x="288" y="200" font-family="Arial,sans-serif" font-size="226" font-weight="800" fill="${ORANGE}">reddit</text>
    </g>`;

  const flagIcon = `
    <g transform="translate(1762 501)">
      <rect x="0" y="0" width="80" height="56" rx="4" fill="#ffffff"/>
      <path d="M0 0 H80 V4 H0 Z M0 8 H80 V12 H0 Z M0 16 H80 V20 H0 Z M0 24 H80 V28 H0 Z M0 32 H80 V36 H0 Z M0 40 H80 V44 H0 Z M0 48 H80 V52 H0 Z" fill="#d92d35"/>
      <rect x="0" y="0" width="36" height="30" fill="#28549f"/>
      <g fill="#ffffff" opacity="0.9">
        <circle cx="7" cy="6" r="1.5"/><circle cx="16" cy="6" r="1.5"/><circle cx="25" cy="6" r="1.5"/>
        <circle cx="11" cy="13" r="1.5"/><circle cx="20" cy="13" r="1.5"/><circle cx="29" cy="13" r="1.5"/>
        <circle cx="7" cy="20" r="1.5"/><circle cx="16" cy="20" r="1.5"/><circle cx="25" cy="20" r="1.5"/>
      </g>
    </g>`;

  const globeIcon = `
    <g transform="translate(1738 1735)">
      <circle cx="40" cy="40" r="39" fill="#1d57cf"/>
      <path d="M13 40 C18 20 36 9 56 13 C49 25 58 30 67 35 C55 37 48 44 45 58 C33 52 20 58 13 40Z" fill="#e8ef78"/>
      <path d="M40 8 C58 16 71 27 74 46 C64 46 55 39 52 31 C47 20 35 20 40 8Z" fill="#7fc65b"/>
      <path d="M32 52 C42 56 49 64 52 75 C36 80 19 70 11 56 C19 54 24 50 32 52Z" fill="#9bd760"/>
      <path d="M4 33 C11 15 27 3 47 2" fill="none" stroke="#9bdcff" stroke-width="4" opacity="0.45"/>
      <path d="M64 68 C50 80 28 80 12 64" fill="none" stroke="#001d5d" stroke-width="6" opacity="0.38"/>
    </g>`;

  const snooMascot = `
    <g transform="translate(2138 1812)">
      <path d="M254 108 C250 58 279 32 317 43" fill="none" stroke="#4b3142" stroke-width="25" stroke-linecap="round"/>
      <circle cx="343" cy="38" r="55" fill="#d7f8ff"/>
      <ellipse cx="190" cy="260" rx="170" ry="116" transform="rotate(-11 190 260)" fill="#ecfbff"/>
      <circle cx="58" cy="277" r="60" fill="#d8f9ff"/>
      <ellipse cx="285" cy="193" rx="74" ry="56" transform="rotate(25 285 193)" fill="#ecfbff"/>
      <ellipse cx="142" cy="270" rx="34" ry="47" transform="rotate(-8 142 270)" fill="${ORANGE}"/>
      <ellipse cx="260" cy="225" rx="34" ry="47" transform="rotate(-8 260 225)" fill="${ORANGE}"/>
      <circle cx="155" cy="252" r="10" fill="#fff3c0"/>
      <circle cx="270" cy="206" r="10" fill="#fff3c0"/>
      <path d="M185 326 C229 349 292 329 315 283 C268 275 224 287 185 326Z" fill="#241621"/>
      <path d="M131 379 C86 470 83 558 130 599 C181 553 180 454 131 379Z" fill="#ecfbff"/>
      <path d="M282 361 C346 427 350 529 305 600 C245 546 237 446 282 361Z" fill="#ecfbff"/>
      <path d="M350 321 C412 286 445 245 454 206 C478 245 470 313 395 361Z" fill="#ecfbff"/>
      <path d="M111 601 C143 617 183 615 203 594 C175 574 136 575 111 601Z" fill="#ecfbff"/>
      <path d="M267 599 C304 616 350 610 371 585 C338 569 293 573 267 599Z" fill="#ecfbff"/>
      <g opacity="0.24" fill="#8bd8ff">
        <ellipse cx="92" cy="509" rx="19" ry="56" transform="rotate(7 92 509)"/>
        <ellipse cx="324" cy="504" rx="21" ry="62" transform="rotate(-4 324 504)"/>
        <ellipse cx="63" cy="278" rx="60" ry="49"/>
      </g>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${redditWordmark}
      ${flagIcon}
      ${globeIcon}
      ${snooMascot}

      <text x="176" y="1941" font-size="40" font-weight="500" fill="${GRAY}">DAUq = Daily Active Uniques</text>
      <text x="205" y="2023" font-size="40" font-weight="500" fill="${GRAY}">WAUq = Weekly Active Uniques</text>
      <text x="160" y="2101" font-size="40" font-weight="500" fill="${GRAY}">ARPU = Average Revenue Per Unique</text>

      ${statCard(86, 2127, 993, 263, [
        { text: '<tspan font-weight="800">Average DAUq</tspan> 127M +17% Y/Y' },
        { text: '<tspan font-weight="800">Average WAUq</tspan> 493M +23% Y/Y' },
      ])}
      ${statCard(1090, 2127, 611, 263, [
        { text: '<tspan font-weight="800">Quarterly ARPU</tspan>' },
        { text: '$5.23', weight: 500 },
        { text: '+44% Y/Y', size: 43, weight: 500 },
      ])}
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'reddit-q1-fy26',
    name: 'Reddit - Q1 FY26',
    company: 'Reddit',
    meta: {
      company: 'Reddit',
      title: 'Reddit Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/reddit-q1-fy26.png', width: 4686, height: 2636 },
      titleX: 2343,
      titleY: 350,
      titleSize: 224,
      titleWeight: 800,
      titleTextLength: 3740,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 4686,
      height: 2636,
      background: '#efefef',
      titleColor: TITLE,
      subtitleColor: GRAY,
      noteColor: GRAY,
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
      scale: 0.845,
      nodes: {
        advertising: { x: 641, y: 832, width: 126, height: 528 },
        other_revenue: { x: 641, y: 1663, width: 126, height: 31 },
        revenue_by_product: { x: 1187, y: 980, width: 127, height: 562 },
        united_states: { x: 1734, y: 847, width: 127, height: 445 },
        rest_of_world: { x: 1734, y: 1583, width: 127, height: 116 },
        revenue: { x: 2281, y: 980, width: 126, height: 562 },
        gross_profit: { x: 2828, y: 847, width: 127, height: 515 },
        cost_of_revenue: { x: 2828, y: 1653, width: 127, height: 47 },
        operating_profit: { x: 3375, y: 728, width: 127, height: 153 },
        operating_expenses: { x: 3375, y: 1125, width: 127, height: 358 },
        other_income: { x: 3735, y: 835, width: 127, height: 17 },
        net_profit: { x: 3922, y: 589, width: 126, height: 171 },
        tax: { x: 4145, y: 1110, width: 1, height: 2 },
        rnd: { x: 3922, y: 1348, width: 126, height: 174 },
        sm: { x: 3922, y: 1723, width: 126, height: 128 },
        ga: { x: 3922, y: 2098, width: 126, height: 56 },
      },
      labels: {
        advertising: {
          blocks: [
            {
              x: 704, top: 672, anchor: 'middle', lineGap: 18,
              lines: [
                { text: '$value', size: 60, weight: 400 },
                { text: '+74% Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
            {
              x: 316, top: 1060, anchor: 'middle',
              lines: [{ text: 'Advertising', size: 70, weight: 800 }],
            },
          ],
        },
        other_revenue: {
          blocks: [
            {
              x: 704, top: 1500, anchor: 'middle', lineGap: 14,
              lines: [
                { text: '$value', size: 60, weight: 400 },
                { text: '+15% Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
            {
              x: 286, top: 1625, anchor: 'middle', lineGap: 18,
              lines: [
                { text: 'Other', size: 70, weight: 800 },
                { text: 'Data API Access', size: 43, weight: 400, color: GRAY },
                { text: 'Model Training', size: 43, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        revenue_by_product: {
          blocks: [
            {
              x: 1251, top: 737, anchor: 'middle', lineGap: 16,
              lines: [
                { text: 'Revenue', size: 70, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '+69% Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        united_states: {
          blocks: [
            {
              x: 1798, top: 602, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'United States', size: 65, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '+67% Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        rest_of_world: {
          blocks: [
            {
              x: 1798, top: 1848, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Rest of World', size: 65, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '+76% Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 2344, top: 737, anchor: 'middle', lineGap: 16,
              lines: [
                { text: 'Revenue', size: 70, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '+69% Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 2868, top: 532, anchor: 'middle', lineGap: 15,
              lines: [
                { text: 'Gross profit', size: 70, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '92% margin', size: 41, weight: 400, color: GRAY },
                { text: '+1pp Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 2900, top: 1745, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Cost of', size: 60, weight: 800 },
                { text: 'revenue', size: 60, weight: 800 },
                { text: '$value', size: 50, weight: 400 },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 3439, top: 412, anchor: 'middle', lineGap: 15,
              lines: [
                { text: 'Operating profit', size: 70, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '28% margin', size: 41, weight: 400, color: GRAY },
                { text: '+27pp Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 3406, top: 1516, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Operating', size: 60, weight: 800 },
                { text: 'expenses', size: 60, weight: 800 },
                { text: '$value', size: 50, weight: 400 },
              ],
            },
          ],
        },
        other_income: {
          blocks: [
            {
              x: 3898, top: 890, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Other', size: 52, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 4125, top: 556, anchor: 'start', lineGap: 15,
              lines: [
                { text: 'Net profit', size: 70, weight: 800 },
                { text: '$value', size: 58, weight: 400 },
                { text: '31% margin', size: 41, weight: 400, color: GRAY },
                { text: '+24pp Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 4288, top: 1052, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Tax', size: 52, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 4310, top: 1325, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Research &', size: 52, weight: 800 },
                { text: 'development', size: 52, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
                { text: '31% of revenue', size: 41, weight: 400, color: GRAY },
                { text: '(18pp) Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 4310, top: 1701, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'Sales &', size: 52, weight: 800 },
                { text: 'marketing', size: 52, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
                { text: '23% of revenue', size: 41, weight: 400, color: GRAY },
                { text: '(0pp) Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 4310, top: 2059, anchor: 'middle', lineGap: 14,
              lines: [
                { text: 'General &', size: 52, weight: 800 },
                { text: 'admin', size: 52, weight: 800 },
                { text: '$value', size: 43, weight: 400 },
                { text: '10% of revenue', size: 41, weight: 400, color: GRAY },
                { text: '(8pp) Y/Y', size: 41, weight: 400, color: GRAY },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'advertising', col: 0, order: 0, type: 'source',
        label: 'Advertising', value: 625, notes: ['+74% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'other_revenue', col: 0, order: 1, type: 'source',
        label: 'Other', value: 39, notes: ['+15% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue_by_product', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 663, notes: ['+69% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'united_states', col: 2, order: 0, type: 'source',
        label: 'United States', value: 526, notes: ['+67% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'rest_of_world', col: 2, order: 1, type: 'source',
        label: 'Rest of World', value: 138, notes: ['+76% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'revenue', col: 3, order: 0, type: 'hub',
        label: 'Revenue', value: 663, notes: ['+69% Y/Y'], color: BLACK, labelColor: BLACK, linkTint: GRAY_LINK,
      },
      {
        id: 'gross_profit', col: 4, order: 0, type: 'profit',
        label: 'Gross profit', value: 607, notes: ['92% margin', '+1pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 4, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 56, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_profit', col: 5, order: 0, type: 'profit',
        label: 'Operating profit', value: 183, notes: ['28% margin', '+27pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'operating_expenses', col: 5, order: 1, type: 'cost',
        label: ['Operating', 'expenses'], value: 424, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'other_income', col: 6, order: 0, type: 'profit',
        label: 'Other', value: 23, color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'net_profit', col: 7, order: 0, type: 'profit',
        label: 'Net profit', value: 204, notes: ['31% margin', '+24pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'tax', col: 7, order: 1, type: 'cost',
        label: 'Tax', value: 2, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 7, order: 2, type: 'cost',
        label: 'Research & development', value: 207, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 7, order: 3, type: 'cost',
        label: 'Sales & marketing', value: 152, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 7, order: 4, type: 'cost',
        label: 'General & admin', value: 66, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
    ],

    links: [
      { source: 'advertising', target: 'revenue_by_product', value: 625, width: 528, sourceOrder: 0, targetOrder: 0 },
      { source: 'other_revenue', target: 'revenue_by_product', value: 39, width: 31, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue_by_product', target: 'united_states', value: 526, width: 445, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue_by_product', target: 'rest_of_world', value: 138, width: 116, sourceOrder: 1, targetOrder: 0 },

      { source: 'united_states', target: 'revenue', value: 526, width: 445, sourceOrder: 0, targetOrder: 0 },
      { source: 'rest_of_world', target: 'revenue', value: 138, width: 116, sourceOrder: 0, targetOrder: 1 },

      { source: 'revenue', target: 'gross_profit', value: 607, width: 515, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 56, width: 47, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_profit', value: 183, width: 153, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 424, width: 358, sourceOrder: 1, targetOrder: 0 },

      { source: 'operating_profit', target: 'net_profit', value: 181, width: 151, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 2, width: 2, sourceOrder: 1, targetOrder: 0 },
      { source: 'other_income', target: 'net_profit', value: 23, width: 19, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'rnd', value: 207, width: 174, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 152, width: 128, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 66, width: 56, sourceOrder: 2, targetOrder: 0 },
    ],
  });
})();
