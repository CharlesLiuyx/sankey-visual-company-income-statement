/* ====================================================================
 * Roblox - Q1 FY26 income statement ($M)
 * Reconstructed from input/processed/roblox-q1-fy26.png as a fixed
 * d3-sankey layout with pure SVG/text annotations.
 * ==================================================================== */
(function () {
  const BLUE = '#11a5ed';
  const BLUE_LINK = '#7ecaf0';
  const TITLE = '#15527a';
  const NOTE = '#6f7073';
  const GREEN = '#289f24';
  const GREEN_LABEL = '#098f43';
  const GREEN_LINK = '#99cb96';
  const RED = '#d50000';
  const RED_LABEL = '#8b1000';
  const RED_LINK = '#e38184';
  const SCALE = 360 / 1442;
  const h = (value) => Math.round(value * SCALE * 10) / 10;
  const RIGHT_LABEL_X = 2360;

  const kpiCard = (x, y, width, height, title, value, note) => `
    <g>
      <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="43" fill="${BLUE}"/>
      <text x="${x + width / 2}" y="${y + 54}" text-anchor="middle" font-size="35" font-weight="800" fill="#ffffff">${title}</text>
      <text x="${x + width / 2}" y="${y + 95}" text-anchor="middle" font-size="35" font-weight="400" fill="#ffffff">${value}</text>
      <text x="${x + width / 2}" y="${y + 138}" text-anchor="middle" font-size="30" font-weight="400" fill="#ffffff">${note}</text>
    </g>`;

  const robloxWordmark = `
    <g transform="translate(665 306)">
      <text x="0" y="79" font-family="Arial Black,Arial,sans-serif" font-size="86" font-weight="900" fill="#000000">R</text>
      <g transform="translate(107 10) rotate(12 37 37)">
        <rect x="0" y="0" width="74" height="74" fill="#000000"/>
        <rect x="26" y="26" width="20" height="20" fill="#efefef"/>
      </g>
      <text x="188" y="79" font-family="Arial Black,Arial,sans-serif" font-size="86" font-weight="900" fill="#000000">BLOX</text>
    </g>`;

  const robloxAvatarCluster = `
    <g transform="translate(720 927)" stroke="#2b2118" stroke-width="2.3" stroke-linejoin="round">
      <g transform="translate(0 27)">
        <rect x="0" y="26" width="42" height="62" rx="6" fill="#b91510"/>
        <circle cx="21" cy="14" r="19" fill="#d28b16"/>
        <path d="M4 40 L39 66 M38 40 L6 72" stroke="#ffd33f" stroke-width="6"/>
        <rect x="7" y="84" width="12" height="39" fill="#c27a0b"/>
        <rect x="25" y="84" width="12" height="39" fill="#c27a0b"/>
        <path d="M43 0 L52 85" stroke="#c89220" stroke-width="4"/>
      </g>
      <g transform="translate(65 10)">
        <rect x="0" y="30" width="58" height="74" rx="5" fill="#a76b30"/>
        <rect x="10" y="6" width="42" height="36" rx="5" fill="#c58a45"/>
        <circle cx="18" cy="46" r="3" fill="#111"/>
        <circle cx="38" cy="46" r="3" fill="#111"/>
        <path d="M16 67 H42" stroke="#1c1c1c" stroke-width="5"/>
        <rect x="5" y="101" width="13" height="43" fill="#8c8c8c"/>
        <rect x="39" y="101" width="13" height="43" fill="#8c8c8c"/>
      </g>
      <g transform="translate(145 0)">
        <rect x="22" y="55" width="55" height="80" rx="10" fill="#3b3b3b"/>
        <circle cx="50" cy="35" r="30" fill="#ffd08b"/>
        <path d="M20 18 C35 0 64 0 78 18 L72 28 C58 19 40 18 28 29Z" fill="#f7c02b"/>
        <path d="M38 41 Q50 54 63 41" fill="none" stroke="#3f2719" stroke-width="3"/>
        <rect x="28" y="131" width="17" height="55" fill="#2d5d8f"/>
        <rect x="56" y="131" width="17" height="55" fill="#244f7c"/>
        <path d="M14 78 C0 63 0 44 17 37" fill="none" stroke="#3b3b3b" stroke-width="15"/>
        <path d="M76 28 L95 4" stroke="#666" stroke-width="7"/>
      </g>
      <g transform="translate(244 37)">
        <rect x="4" y="45" width="53" height="67" rx="7" fill="#5a4f55"/>
        <circle cx="31" cy="27" r="27" fill="#ffd48b"/>
        <path d="M4 19 C26 -8 50 4 58 25 C45 18 24 17 6 29Z" fill="#d44725"/>
        <path d="M16 36 Q31 51 46 36" fill="none" stroke="#6b2b22" stroke-width="3"/>
        <rect x="9" y="109" width="16" height="45" fill="#5b4a3a"/>
        <rect x="37" y="109" width="16" height="45" fill="#5b4a3a"/>
        <path d="M55 46 L76 25" stroke="#b7b7b7" stroke-width="5"/>
      </g>
      <g transform="translate(319 52)">
        <rect x="7" y="38" width="58" height="70" rx="7" fill="#1379d3"/>
        <rect x="15" y="0" width="44" height="44" rx="8" fill="#ffe12f"/>
        <circle cx="29" cy="21" r="3" fill="#1c1c1c"/>
        <circle cx="46" cy="21" r="3" fill="#1c1c1c"/>
        <path d="M29 32 Q38 24 47 32" fill="none" stroke="#1c1c1c" stroke-width="3"/>
        <rect x="11" y="104" width="20" height="57" fill="#2db23d"/>
        <rect x="41" y="104" width="20" height="57" fill="#36a933"/>
        <path d="M64 46 L90 66" stroke="#f3c22e" stroke-width="14"/>
      </g>
    </g>`;

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      ${robloxWordmark}
      ${robloxAvatarCluster}
      ${kpiCard(82, 1147, 159, 157, 'DAU', '132M', '+35% Y/Y')}
      ${kpiCard(248, 1143, 351, 165, 'Hours Engaged', '31B', '+43% Y/Y')}
      ${kpiCard(607, 1143, 190, 165, 'Bookings', '$1,7M', '+43% Y/Y')}
      <text x="399" y="1341" text-anchor="middle" font-size="30" font-weight="400" fill="${NOTE}">DAU = Daily Active Users</text>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'roblox-q1-fy26',
    name: 'Roblox · Q1 FY26',
    company: 'Roblox',
    meta: {
      company: 'Roblox',
      title: 'Roblox Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '$',
      unit: 'M',
      decimals: 0,
      referenceImage: { src: 'input/processed/roblox-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 2150,
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
      labelYOffset: 0,
      type: { name: 40, value: 39, note: 29, lineGap: 9 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: SCALE,
      nodes: {
        north_america: { x: 391, y: 360, width: 72, height: h(838) },
        europe: { x: 391, y: 709, width: 72, height: h(295) },
        apac: { x: 391, y: 906, width: 72, height: h(169) },
        rest_of_world: { x: 391, y: 1064, width: 72, height: h(140) },
        revenue: { x: 858, y: 567, width: 72, height: 360 },
        gross_profit: { x: 1325, y: 433, width: 72, height: h(1148) },
        cost_of_revenue: { x: 1325, y: 962, width: 73, height: h(294) },
        operating_loss: { x: 1568, y: 927, width: 72, height: h(294) },
        operating_expenses: { x: 1795, y: 563, width: 73, height: 360 },
        developer_fees: { x: 2260, y: 262, width: 72, height: h(423) },
        rnd: { x: 2260, y: 503, width: 72, height: h(422) },
        infrastructure: { x: 2259, y: 779, width: 73, height: h(324) },
        ga: { x: 2260, y: 1037, width: 72, height: h(209) },
        sm: { x: 2260, y: 1241, width: 72, height: h(64) },
        tax: { x: -500, y: -500, width: 0, height: 0 },
      },
      labels: {
        north_america: {
          blocks: [
            {
              x: 427, top: 268, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+29% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 298, top: 425, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'North', size: 40, weight: 800 },
                { text: 'America', size: 40, weight: 800 },
              ],
            },
          ],
        },
        europe: {
          blocks: [
            {
              x: 427, top: 616, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+52% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 374, top: 718, anchor: 'end',
              lines: [{ text: 'Europe', size: 40, weight: 800 }],
            },
          ],
        },
        apac: {
          blocks: [
            {
              x: 427, top: 815, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+55% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 318, top: 912, anchor: 'middle',
              lines: [{ text: 'APAC', size: 40, weight: 800 }],
            },
          ],
        },
        rest_of_world: {
          blocks: [
            {
              x: 427, top: 975, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 39, weight: 400 },
                { text: '+64% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
            {
              x: 374, top: 1056, anchor: 'end',
              lines: [{ text: 'Rest of world', size: 40, weight: 800 }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 894, top: 421, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '+39% Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1361, top: 253, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 40, weight: 800 },
                { text: '$value', size: 39, weight: 400 },
                { text: '80% margin', size: 29, weight: 400, color: NOTE },
                { text: '+1pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1361, top: 1054, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 36, weight: 800 },
                { text: 'revenue', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        operating_loss: {
          blocks: [
            {
              x: 1604, top: 1020, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'loss', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
                { text: '(20%) margin', size: 29, weight: 400, color: NOTE },
                { text: '+4pp Y/Y', size: 29, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1815, top: 424, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 36, weight: 800 },
                { text: 'expenses', size: 36, weight: 800 },
                { text: '$value', size: 34, weight: 400 },
              ],
            },
          ],
        },
        developer_fees: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 257, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Developer fees', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '29% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+2pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 498, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '29% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(7pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        infrastructure: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 766, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'Infrastructure', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '22% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1020, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '14% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1216, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M', size: 31, weight: 800 },
                { text: '$value', size: 29, weight: 400 },
                { text: '4% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'north_america', col: 0, order: 0, type: 'source',
        label: ['North', 'America'], value: 838, notes: ['+29% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'europe', col: 0, order: 1, type: 'source',
        label: 'Europe', value: 295, notes: ['+52% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'apac', col: 0, order: 2, type: 'source',
        label: 'APAC', value: 169, notes: ['+55% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'rest_of_world', col: 0, order: 3, type: 'source',
        label: 'Rest of world', value: 140, notes: ['+64% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'revenue', col: 1, order: 0, type: 'hub',
        label: 'Revenue', value: 1442, notes: ['+39% Y/Y'],
        color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK,
      },
      {
        id: 'gross_profit', col: 2, order: 0, type: 'profit',
        label: 'Gross profit', value: 1148, notes: ['80% margin', '+1pp Y/Y'],
        color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK,
      },
      {
        id: 'cost_of_revenue', col: 2, order: 1, type: 'cost',
        label: ['Cost of', 'revenue'], value: 294,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_loss', col: 3, order: 1, type: 'cost',
        label: ['Operating', 'loss'], value: -294, notes: ['(20%) margin', '+4pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'operating_expenses', col: 4, order: 0, type: 'cost',
        label: ['Operating', 'expenses'], value: 1442,
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'developer_fees', col: 5, order: 0, type: 'cost',
        label: 'Developer fees', value: 423, notes: ['29% of revenue', '+2pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'rnd', col: 5, order: 1, type: 'cost',
        label: 'R&D', value: 422, notes: ['29% of revenue', '(7pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'infrastructure', col: 5, order: 2, type: 'cost',
        label: 'Infrastructure', value: 324, notes: ['22% of revenue', '(1pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'ga', col: 5, order: 3, type: 'cost',
        label: 'G&A', value: 209, notes: ['14% of revenue', '+3pp Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'sm', col: 5, order: 4, type: 'cost',
        label: 'S&M', value: 64, notes: ['4% of revenue', '(0pp) Y/Y'],
        color: RED, labelColor: RED_LABEL, linkTint: RED_LINK,
      },
      {
        id: 'tax', col: 6, order: 0, type: 'cost',
        label: 'Tax', value: 0, valueText: '', color: 'transparent', labelColor: 'transparent',
      },
    ],

    links: [
      { source: 'north_america', target: 'revenue', value: 838, sourceOrder: 0, targetOrder: 0 },
      { source: 'europe', target: 'revenue', value: 295, sourceOrder: 1, targetOrder: 1 },
      { source: 'apac', target: 'revenue', value: 169, sourceOrder: 2, targetOrder: 2 },
      { source: 'rest_of_world', target: 'revenue', value: 140, sourceOrder: 3, targetOrder: 3 },

      { source: 'revenue', target: 'gross_profit', value: 1148, sourceOrder: 0, targetOrder: 0, linkTint: GREEN_LINK },
      { source: 'revenue', target: 'cost_of_revenue', value: 294, sourceOrder: 1, targetOrder: 0 },

      { source: 'gross_profit', target: 'operating_expenses', value: 1148, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_loss', target: 'operating_expenses', value: 294, sourceOrder: 0, targetOrder: 1 },

      { source: 'operating_expenses', target: 'developer_fees', value: 423, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 422, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'infrastructure', value: 324, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'ga', value: 209, sourceOrder: 3, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sm', value: 64, sourceOrder: 4, targetOrder: 0 },
    ],
  });
})();
