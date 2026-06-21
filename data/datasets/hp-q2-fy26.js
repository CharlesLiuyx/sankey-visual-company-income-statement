/* ====================================================================
 * HP - Q2 FY26 income statement ($B)
 * Reconstructed from input/processed/hp-q2-fy26.png as a fixed d3-sankey
 * layout with a reusable SVG HP logo annotation.
 * ==================================================================== */
(function () {
  const HP_BLUE = '#0b9bd4';
  const TITLE = '#15527a';
  const BLUE_LABEL = '#009bd8';
  const BLUE_LINK = '#82c8df';
  const GREEN = '#239d22';
  const GREEN_LABEL = '#008f47';
  const GREEN_LINK = '#99d099';
  const RED = '#d30000';
  const RED_LABEL = '#8d1707';
  const RED_LINK = '#df7f82';
  const NOTE = '#666666';
  const PS_COMMERCIAL = '#8998ee';
  const PS_COMMERCIAL_LINK = '#c2c9ed';
  const PS_CONSUMER = '#3baaf4';
  const PS_CONSUMER_LINK = '#9fceed';
  const PRINTING_SUPPLIES = '#4d98ee';
  const PRINTING_SUPPLIES_LINK = '#abc9ed';
  const PRINTING_COMMERCIAL = '#83cff5';
  const PRINTING_COMMERCIAL_LINK = '#c4dfef';
  const PRINTING_CONSUMER = '#006fc7';
  const RIGHT_LABEL_X = 2380;
  const BUSINESS_ICONS = window.SANKEY_BUSINESS_ICONS || {};

  window.DATASETS = window.DATASETS || [];
  window.DATASETS.push({
    key: 'hp-q2-fy26',
    name: 'HP - Q2 FY26',
    company: 'HP',
    meta: {
      company: 'HP',
      title: 'HP Q2 FY26 Income Statement',
      period: 'Q2 FY26',
      periodNote: 'Ending Apr. 2026',
      currency: '$',
      unit: 'B',
      decimals: 1,
      referenceImage: { src: 'input/processed/hp-q2-fy26.png', width: 2667, height: 1500 },
      titleX: 1334,
      titleY: 199,
      titleSize: 124,
      titleWeight: 800,
      titleTextLength: 1888,
      periodX: 2462,
      periodY: 249,
      periodNoteY: 291,
      logoWidth: 248,
      logoHeight: 248,
      logoY: 236,
      logoViewBox: '0 0 300 300',
      logoSvg: BUSINESS_ICONS.hpLogo || '',
    },
    render: {
      width: 2667,
      height: 1500,
      background: '#f2f2f2',
      titleColor: TITLE,
      subtitleColor: NOTE,
      noteColor: NOTE,
      palette: {
        source: { node: HP_BLUE, label: BLUE_LABEL },
        hub: { node: HP_BLUE, label: BLUE_LABEL },
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
      type: { name: 39, value: 38, note: 28, lineGap: 8 },
    },

    layout: {
      scale: 24.3,
      nodes: {
        ps_commercial: { x: 415, y: 458, width: 73, height: 187 },
        ps_consumer: { x: 415, y: 764, width: 73, height: 61 },
        printing_supplies: { x: 415, y: 978, width: 73, height: 68 },
        printing_commercial: { x: 415, y: 1155, width: 73, height: 29 },
        printing_consumer: { x: 415, y: 1306, width: 73, height: 7 },
        personal_systems: { x: 790, y: 578, width: 74, height: 248 },
        printing: { x: 790, y: 1064, width: 74, height: 102 },
        revenue: { x: 1164, y: 695, width: 74, height: 350 },
        gross_profit: { x: 1537, y: 580, width: 74, height: 73 },
        cost_of_revenue: { x: 1537, y: 882, width: 74, height: 277 },
        operating_profit: { x: 1910, y: 497, width: 74, height: 15 },
        operating_expenses: { x: 1910, y: 696, width: 74, height: 58 },
        net_profit: { x: 2283, y: 382, width: 74, height: 12 },
        other_nonoperating: { x: 2283, y: 586, width: 74, height: 3 },
        tax: { x: 2283, y: 690, width: 74, height: 1 },
        sga: { x: 2283, y: 789, width: 74, height: 37 },
        rnd: { x: 2283, y: 950, width: 74, height: 10 },
        restructuring: { x: 2283, y: 1085, width: 74, height: 10 },
        other_opex: { x: 2283, y: 1213, width: 74, height: 3 },
      },
      labels: {
        ps_commercial: {
          blocks: [
            {
              x: 384, top: 505, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Personal Systems', size: 37, weight: 800 },
                { text: 'Commercial', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 370, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+14% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        ps_consumer: {
          blocks: [
            {
              x: 384, top: 748, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Personal Systems', size: 37, weight: 800 },
                { text: 'Consumer', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 679, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+10% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing_supplies: {
          blocks: [
            {
              x: 384, top: 972, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Printing', size: 37, weight: 800 },
                { text: 'Supplies', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 888, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+1% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing_commercial: {
          blocks: [
            {
              x: 384, top: 1156, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Printing', size: 37, weight: 800 },
                { text: 'Commercial', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 1070, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '+0% Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing_consumer: {
          blocks: [
            {
              x: 384, top: 1288, anchor: 'end', lineGap: 8,
              lines: [
                { text: 'Printing', size: 37, weight: 800 },
                { text: 'Consumer', size: 37, weight: 800 },
              ],
            },
            {
              x: 451, top: 1220, anchor: 'middle', lineGap: 8,
              lines: [
                { text: '$value', size: 37, weight: 400 },
                { text: '(10%) Y/Y', size: 27, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        personal_systems: {
          blocks: [
            {
              x: 827, top: 386, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Personal', size: 39, weight: 800 },
                { text: 'Systems', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+13% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        printing: {
          blocks: [
            {
              x: 827, top: 1220, anchor: 'middle', lineGap: 8,
              lines: [
                { text: 'Printing', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '(0%) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        revenue: {
          blocks: [
            {
              x: 1201, top: 552, anchor: 'middle', lineGap: 10,
              lines: [
                { text: 'Revenue', size: 39, weight: 800 },
                { text: '$value', size: 38, weight: 400 },
                { text: '+9% Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        gross_profit: {
          blocks: [
            {
              x: 1574, top: 400, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Gross profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '21% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        cost_of_revenue: {
          blocks: [
            {
              x: 1574, top: 1178, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Cost of', size: 38, weight: 800, color: RED_LABEL },
                { text: 'revenue', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        operating_profit: {
          blocks: [
            {
              x: 1947, top: 311, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '4% margin', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        operating_expenses: {
          blocks: [
            {
              x: 1947, top: 776, anchor: 'middle', lineGap: 9,
              lines: [
                { text: 'Operating', size: 38, weight: 800, color: RED_LABEL },
                { text: 'expenses', size: 38, weight: 800, color: RED_LABEL },
                { text: '$value', size: 37, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        net_profit: {
          blocks: [
            {
              x: 2382, top: 333, anchor: 'start', lineGap: 9,
              lines: [
                { text: 'Net profit', size: 39, weight: 800, color: GREEN_LABEL },
                { text: '$value', size: 38, weight: 400, color: GREEN_LABEL },
                { text: '3% margin', size: 28, weight: 400, color: NOTE },
                { text: '+0pp Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_nonoperating: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 560, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        tax: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 662, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Tax', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
              ],
            },
          ],
        },
        sga: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 788, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'SG&A', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '11% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(1pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        rnd: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 950, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'R&D', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
                { text: '(0pp) Y/Y', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        restructuring: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1110, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Restructuring', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '3% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
        other_opex: {
          blocks: [
            {
              x: RIGHT_LABEL_X, top: 1212, anchor: 'start', lineGap: 7,
              lines: [
                { text: 'Other', size: 31, weight: 800, color: RED_LABEL },
                { text: '$value', size: 30, weight: 400, color: RED_LABEL },
                { text: '1% of revenue', size: 28, weight: 400, color: NOTE },
              ],
            },
          ],
        },
      },
    },

    nodes: [
      {
        id: 'ps_commercial', col: 0, order: 0, type: 'source',
        label: ['Personal Systems', 'Commercial'], value: 7.7, notes: ['+14% Y/Y'],
        color: PS_COMMERCIAL, labelColor: PS_COMMERCIAL, linkTint: PS_COMMERCIAL_LINK,
      },
      {
        id: 'ps_consumer', col: 0, order: 1, type: 'source',
        label: ['Personal Systems', 'Consumer'], value: 2.5, notes: ['+10% Y/Y'],
        color: PS_CONSUMER, labelColor: PS_CONSUMER, linkTint: PS_CONSUMER_LINK,
      },
      {
        id: 'printing_supplies', col: 0, order: 2, type: 'source',
        label: ['Printing', 'Supplies'], value: 2.8, notes: ['+1% Y/Y'],
        color: PRINTING_SUPPLIES, labelColor: PRINTING_SUPPLIES, linkTint: PRINTING_SUPPLIES_LINK,
      },
      {
        id: 'printing_commercial', col: 0, order: 3, type: 'source',
        label: ['Printing', 'Commercial'], value: 1.2, notes: ['+0% Y/Y'],
        color: PRINTING_COMMERCIAL, labelColor: PRINTING_COMMERCIAL, linkTint: PRINTING_COMMERCIAL_LINK,
      },
      {
        id: 'printing_consumer', col: 0, order: 4, type: 'source',
        label: ['Printing', 'Consumer'], value: 0.3, notes: ['(10%) Y/Y'],
        color: PRINTING_CONSUMER, labelColor: PRINTING_CONSUMER, linkTint: PRINTING_CONSUMER,
      },
      { id: 'personal_systems', col: 1, order: 0, type: 'source', label: ['Personal', 'Systems'], value: 10.2, notes: ['+13% Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'printing', col: 1, order: 1, type: 'source', label: 'Printing', value: 4.2, notes: ['(0%) Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'revenue', col: 2, order: 0, type: 'hub', label: 'Revenue', value: 14.4, notes: ['+9% Y/Y'], color: HP_BLUE, labelColor: BLUE_LABEL, linkTint: BLUE_LINK },
      { id: 'gross_profit', col: 3, order: 0, type: 'profit', label: 'Gross profit', value: 3.0, notes: ['21% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', label: ['Cost of', 'revenue'], value: 11.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'operating_profit', col: 4, order: 0, type: 'profit', label: 'Operating profit', value: 0.6, notes: ['4% margin', '(1pp) Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'operating_expenses', col: 4, order: 1, type: 'cost', label: ['Operating', 'expenses'], value: 2.4, color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'net_profit', col: 5, order: 0, type: 'profit', label: 'Net profit', value: 0.5, notes: ['3% margin', '+0pp Y/Y'], color: GREEN, labelColor: GREEN_LABEL, linkTint: GREEN_LINK },
      { id: 'other_nonoperating', col: 5, order: 1, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'tax', col: 5, order: 2, type: 'cost', label: 'Tax', value: 0.043, valueText: '($43M)', color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'sga', col: 5, order: 3, type: 'cost', label: 'SG&A', value: 1.5, notes: ['11% of revenue', '(1pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'rnd', col: 5, order: 4, type: 'cost', label: 'R&D', value: 0.4, notes: ['3% of revenue', '(0pp) Y/Y'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'restructuring', col: 5, order: 5, type: 'cost', label: 'Restructuring', value: 0.4, notes: ['3% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
      { id: 'other_opex', col: 5, order: 6, type: 'cost', label: 'Other', value: 0.1, valueText: '($0.1B)', notes: ['1% of revenue'], color: RED, labelColor: RED_LABEL, linkTint: RED_LINK },
    ],

    links: [
      { source: 'ps_commercial', target: 'personal_systems', value: 7.7, width: 187, targetOrder: 0, linkTint: { left: PS_COMMERCIAL_LINK, right: PS_COMMERCIAL_LINK } },
      { source: 'ps_consumer', target: 'personal_systems', value: 2.5, width: 61, targetOrder: 1, linkTint: { left: PS_CONSUMER_LINK, right: PS_CONSUMER_LINK } },
      { source: 'printing_supplies', target: 'printing', value: 2.8, width: 68, targetOrder: 0, linkTint: { left: PRINTING_SUPPLIES_LINK, right: PRINTING_SUPPLIES_LINK } },
      { source: 'printing_commercial', target: 'printing', value: 1.2, width: 29, targetOrder: 1, linkTint: { left: PRINTING_COMMERCIAL_LINK, right: PRINTING_COMMERCIAL_LINK } },
      { source: 'printing_consumer', target: 'printing', value: 0.3, width: 7, targetOrder: 2, linkTint: { left: '#6ea8d9', right: '#6ea8d9' } },
      { source: 'personal_systems', target: 'revenue', value: 10.2, width: 248, targetOrder: 0 },
      { source: 'printing', target: 'revenue', value: 4.2, width: 102, targetOrder: 1 },
      { source: 'revenue', target: 'gross_profit', value: 3.0, width: 73, sourceOrder: 0, targetOrder: 0 },
      { source: 'revenue', target: 'cost_of_revenue', value: 11.4, width: 277, sourceOrder: 1, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_profit', value: 0.6, width: 15, sourceOrder: 0, targetOrder: 0 },
      { source: 'gross_profit', target: 'operating_expenses', value: 2.4, width: 58, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'net_profit', value: 0.5, width: 12, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_profit', target: 'other_nonoperating', value: 0.1, width: 3, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_profit', target: 'tax', value: 0.043, width: 1, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'sga', value: 1.5, width: 37, sourceOrder: 0, targetOrder: 0 },
      { source: 'operating_expenses', target: 'rnd', value: 0.4, width: 10, sourceOrder: 1, targetOrder: 0 },
      { source: 'operating_expenses', target: 'restructuring', value: 0.4, width: 10, sourceOrder: 2, targetOrder: 0 },
      { source: 'operating_expenses', target: 'other_opex', value: 0.1, width: 3, sourceOrder: 3, targetOrder: 0 },
    ],
  });
})();
