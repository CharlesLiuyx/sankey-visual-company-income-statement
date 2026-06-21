/* ====================================================================
 * SAP - Q1 FY26 income statement (€B)
 * Reconstructed from input/processed/sap-q1-fy26.png as a fixed
 * d3-sankey layout with a pure SVG SAP logo annotation.
 * ==================================================================== */
(function () {
  const TITLE = '#155077';
  const NOTE = '#666666';
  const NAVY = '#344a62';
  const NAVY_LINK = '#a4adb5';
  const BLUE = '#1e6fbe';
  const BLUE_LINK = '#91b6dc';
  const CYAN = '#12b7e7';
  const CYAN_LINK = '#83d7ee';
  const GREEN = '#24a324';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#98cc96';
  const RED = '#d90000';
  const RED_LABEL = '#8d1200';
  const RED_LINK = '#e58383';

  const annotations = `
    <g font-family="Montserrat,Arial,sans-serif">
      <g transform="translate(1010 253)">
        <defs>
          <linearGradient id="sap-logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#12b7e7"/>
            <stop offset="0.55" stop-color="#13a9df"/>
            <stop offset="1" stop-color="#226bc0"/>
          </linearGradient>
        </defs>
        <path d="M0 0H340L172 168H0Z" fill="url(#sap-logo-gradient)"/>
        <path d="M0 84H256L172 168H0Z" fill="#226bc0" opacity="0.68"/>
        <text x="18" y="134" transform="skewX(-8)" font-family="Arial Black,Arial,sans-serif" font-size="116" font-weight="900" textLength="236" lengthAdjust="spacingAndGlyphs" fill="#ffffff">SAP</text>
        <text x="210" y="168" font-family="Arial,Helvetica,sans-serif" font-size="31" font-weight="700" fill="#2272c2">&#174;</text>
      </g>
      <g fill="${NOTE}" font-size="25" font-weight="400">
        <text x="73" y="1301">SaaS = Software as a Service</text>
        <text x="73" y="1330">PaaS = Platform as a Service</text>
        <text x="73" y="1360">IaaS = Infrastructure as a Service</text>
      </g>
    </g>`;

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'sap-q1-fy26',
    name: 'SAP · Q1 FY26',
    company: 'SAP',
    meta: {
      company: 'SAP',
      title: 'SAP Q1 FY26 Income Statement',
      period: 'Q1 FY26',
      periodNote: 'Ending Mar. 2026',
      currency: '€',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/sap-q1-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 198,
      titleSize: 128,
      titleWeight: 800,
      titleTextLength: 1958,
      periodX: -1000,
      periodY: -1000,
      periodNoteY: -950,
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: NAVY, label: NAVY },
        hub: { node: NAVY, label: NAVY },
        profit: { node: GREEN, label: GREEN_LABEL },
        cost: { node: RED, label: RED_LABEL },
      },
      linkTint: {
        source: NAVY_LINK,
        hub: NAVY_LINK,
        profit: GREEN_LINK,
        cost: RED_LINK,
      },
      linkOpacity: 1,
      type: { name: 40, value: 38, note: 28, lineGap: 9 },
    },
    annotationsSvg: annotations,

    layout: {
      scale: 33.75,
      nodes: {
        saas_paas: { x: 363, y: 450, width: 73, height: 199 },
        iaas: { x: 363, y: 813, width: 73, height: 3 },
        software_licenses: { x: 363, y: 957, width: 73, height: 3 },
        software_support: { x: 363, y: 1097, width: 73, height: 84 },
        cloud: { x: 736, y: 532, width: 73, height: 203 },
        licenses_support: { x: 736, y: 981, width: 73, height: 88 },
        services: { x: 736, y: 1255, width: 73, height: 34 },
        revenue: { x: 1110, y: 622, width: 73, height: 324 },
        gross_profit: { x: 1483, y: 527, width: 73, height: 236 },
        cost_of_revenue: { x: 1483, y: 981, width: 73, height: 88 },
        operating_profit: { x: 1857, y: 454, width: 73, height: 91 },
        operating_expenses: { x: 1857, y: 708, width: 73, height: 142 },
        net_profit: { x: 2232, y: 377, width: 73, height: 64 },
        tax: { x: 2232, y: 608, width: 73, height: 27 },
        sm: { x: 2232, y: 807, width: 73, height: 71 },
        rnd: { x: 2232, y: 998, width: 73, height: 57 },
        ga: { x: 2232, y: 1197, width: 73, height: 14 },
      },
      labels: {
        saas_paas: {
          blocks: [
            {
              x: 399, top: 333, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: NAVY },
                { text: '+21% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 336, top: 512, anchor: 'end',
              lines: [{ text: 'Saas/Paas', size: 39, weight: 800, color: NAVY }],
            },
          ],
        },
        iaas: {
          blocks: [
            {
              x: 399, top: 730, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: NAVY },
                { text: '(37%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 312, top: 789, anchor: 'end',
              lines: [{ text: 'Iaas', size: 39, weight: 800, color: NAVY }],
            },
          ],
        },
        software_licenses: {
          blocks: [
            {
              x: 399, top: 874, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '(37%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 330, top: 915, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Software', size: 38, weight: 800, color: BLUE },
                { text: 'Licenses', size: 38, weight: 800, color: BLUE },
              ],
            },
          ],
        },
        software_support: {
          blocks: [
            {
              x: 399, top: 1018, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '(11%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 329, top: 1099, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Software', size: 38, weight: 800, color: BLUE },
                { text: 'Support', size: 38, weight: 800, color: BLUE },
              ],
            },
          ],
        },
        cloud: {
          blocks: [
            {
              x: 773, top: 386, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cloud', size: 40, weight: 800, color: NAVY },
                { text: '$value', size: 38, weight: 400, color: NAVY },
                { text: '+19% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        licenses_support: {
          blocks: [
            {
              x: 773, top: 785, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Licenses', size: 39, weight: 800, color: BLUE },
                { text: '& Support', size: 39, weight: 800, color: BLUE },
                { text: '$value', size: 38, weight: 400, color: BLUE },
                { text: '(12%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        services: {
          blocks: [
            {
              x: 773, top: 1154, anchor: 'middle', lineGap: 9,
              lines: [
                { text: '$value', size: 38, weight: 400, color: CYAN },
                { text: '(6%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
            {
              x: 709, top: 1247, anchor: 'end',
              lines: [{ text: 'Services', size: 39, weight: 800, color: CYAN }],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1147, top: 482, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Revenue', size: 40, weight: 800, color: NAVY },
                { text: '$value', size: 38, weight: 400, color: NAVY },
                { text: '+6% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1519, top: 352, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '73% margin', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1519, top: 1084, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Cost of', size: 35, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1893, top: 273, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '29% margin', size: 28, weight: 400, color: NOTE },
                { text: '+3pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1880, top: 874, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Operating', size: 35, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 35, weight: 800, color: RED_LABEL },
                { text: '$value', size: 33, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2376, top: 322, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '20% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: 2430, top: 589, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Tax', size: 30, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sm: {
          blocks: [
            {
              x: 2368, top: 805, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'S&M (€2.1B)', size: 30, weight: 800, color: RED_LABEL },
                { text: '22% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(2pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: 2368, top: 1005, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'R&D (€1.7B)', size: 30, weight: 800, color: RED_LABEL },
                { text: '18% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ga: {
          blocks: [
            {
              x: 2368, top: 1192, anchor: 'start', lineGap: 8,
              lines: [
                { text: 'G&A (€0.4B)', size: 30, weight: 800, color: RED_LABEL },
                { text: '4% of revenue', size: 27, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      { id: 'saas_paas', col: 0, order: 0, type: 'source', label: 'Saas/Paas', value: 5.9, valueText: '€5.9B', notes: ['+21% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'iaas', col: 0, order: 1, type: 'source', label: 'Iaas', value: 0.1, valueText: '€0.1B', notes: ['(37%) Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'software_licenses', col: 0, order: 2, type: 'source', label: ['Software', 'Licenses'], value: 0.1, valueText: '€0.1B', notes: ['(37%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'software_support', col: 0, order: 3, type: 'source', label: ['Software', 'Support'], value: 2.5, valueText: '€2.5B', notes: ['(11%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'cloud', col: 1, order: 0, type: 'source', label: 'Cloud', value: 6.0, valueText: '€6.0B', notes: ['+19% Y/Y'], color: NAVY, labelColor: NAVY, linkTint: NAVY_LINK },
      { id: 'licenses_support', col: 1, order: 1, type: 'source', label: ['Licenses', '& Support'], value: 2.6, valueText: '€2.6B', notes: ['(12%) Y/Y'], color: BLUE, labelColor: BLUE, linkTint: BLUE_LINK },
      { id: 'services', col: 1, order: 2, type: 'source', label: 'Services', value: 1.0, valueText: '€1.0B', notes: ['(6%) Y/Y'], color: CYAN, labelColor: CYAN, linkTint: CYAN_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 9.6, valueText: '€9.6B', notes: ['+6% Y/Y'] },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 7.0, valueText: '€7.0B', notes: ['73% margin', '(0pp) Y/Y'] },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 2.6, valueText: '(€2.6B)' },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 2.7, valueText: '€2.7B', notes: ['29% margin', '+3pp Y/Y'] },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 4.2, valueText: '(€4.2B)' },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 1.9, valueText: '€1.9B', notes: ['20% margin', '+0pp Y/Y'] },
      { id: 'tax', col: 5, order: 1, type: 'cost', label: 'Tax', value: 0.8, valueText: '(€0.8B)' },
      { id: 'sm', col: 5, order: 2, type: 'cost', label: 'S&M', value: 2.1, valueText: '(€2.1B)', notes: ['22% of revenue', '(2pp) Y/Y'] },
      { id: 'rnd', col: 5, order: 3, type: 'cost', label: 'R&D', value: 1.7, valueText: '(€1.7B)', notes: ['18% of revenue', '(1pp) Y/Y'] },
      { id: 'ga', col: 5, order: 4, type: 'cost', label: 'G&A', value: 0.4, valueText: '(€0.4B)', notes: ['4% of revenue', '(0pp) Y/Y'] },
    ],

    links: [
      { source: 'saas_paas', target: 'cloud', value: 5.9, targetOrder: 0, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'iaas', target: 'cloud', value: 0.1, targetOrder: 1, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'software_licenses', target: 'licenses_support', value: 0.1, targetOrder: 0, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'software_support', target: 'licenses_support', value: 2.5, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'cloud', target: 'revenue', value: 6.0, targetOrder: 0, linkTint: { left: NAVY_LINK, right: NAVY_LINK } },
      { source: 'licenses_support', target: 'revenue', value: 2.6, targetOrder: 1, linkTint: { left: BLUE_LINK, right: BLUE_LINK } },
      { source: 'services', target: 'revenue', value: 1.0, targetOrder: 2, linkTint: { left: CYAN_LINK, right: CYAN_LINK } },
      { source: 'revenue', target: 'gross_profit', value: 7.0, sourceOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 2.6, sourceOrder: 1 },
      { source: 'gross_profit', target: 'operating_profit', value: 2.7, sourceOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 4.2, sourceOrder: 1 },
      { source: 'operating_profit', target: 'net_profit', value: 1.9, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.8, sourceOrder: 1, targetOrder: 1 },
      { source: 'operating_expenses', target: 'sm', value: 2.1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 1.7, targetOrder: 1 },
      { source: 'operating_expenses', target: 'ga', value: 0.4, targetOrder: 2 },
    ],
  });
})();
