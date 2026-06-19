/* ====================================================================
 *  Example: a fictional SaaS company "Acme Cloud" — FY25 ($M)
 *  Demonstrates the same engine with a different structure, units,
 *  colour accent and logo. Replace with your own company's numbers.
 * ==================================================================== */
(window.DATASETS = window.DATASETS || []).push({
  key: 'acme-cloud-fy25',
  name: 'Acme Cloud · FY25 (demo)',
  meta: {
    title: 'Acme Cloud FY25 Income Statement',
    period: 'FY2025',
    periodNote: 'Ending Jan. 2025',
    currency: '$',
    unit: 'M',
    decimals: 0,
    logoWidth: 160,
    logoHeight: 84,
    logoViewBox: '0 0 160 84',
    logoSvg: `
      <rect x="52" y="2" width="56" height="50" rx="11" fill="#2f6df0"/>
      <path d="M68 38a8 8 0 0 1 2-15 11 11 0 0 1 21 3 7 7 0 0 1-2 12z" fill="#fff"/>
      <text x="80" y="76" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="20" font-weight="800" letter-spacing="0.5" fill="#1a1a1a">ACME CLOUD</text>
    `,
  },

  nodes: [
    { id: 'enterprise', col: 0, order: 0, type: 'source', labelSide: 'left',
      label: 'Enterprise', value: 620, notes: ['+34% Y/Y'] },
    { id: 'smb', col: 0, order: 1, type: 'source', labelSide: 'left',
      label: 'SMB', value: 240, notes: ['+12% Y/Y'] },

    { id: 'subscriptions', col: 1, order: 0, type: 'source', labelSide: 'above',
      label: 'Subscriptions', value: 860, notes: ['+27% Y/Y'], icons: ['dollar'], iconSize: 32 },
    { id: 'services', col: 1, order: 1, type: 'source', labelSide: 'below',
      label: ['Professional', 'Services'], value: 90, notes: ['+8% Y/Y'],
      color: '#54b08a', labelColor: '#3f8e6e' },

    { id: 'revenue', col: 2, order: 0, type: 'hub', labelSide: 'above',
      label: 'Revenue', value: 950, notes: ['+25% Y/Y'] },

    { id: 'gross_profit', col: 3, order: 0, type: 'profit', labelSide: 'above',
      label: 'Gross profit', value: 720, notes: ['76% margin', '+3pp Y/Y'] },
    { id: 'cost_of_revenue', col: 3, order: 1, type: 'cost', labelSide: 'below',
      label: ['Cost of', 'revenue'], value: 230 },

    { id: 'operating_income', col: 4, order: 0, type: 'profit', labelSide: 'above',
      label: ['Operating', 'income'], value: 180, notes: ['19% margin', '+5pp Y/Y'] },
    { id: 'operating_expenses', col: 4, order: 1, type: 'cost', labelSide: 'below',
      label: ['Operating', 'expenses'], value: 540 },

    { id: 'net_income', col: 5, order: 0, type: 'profit', labelSide: 'right',
      label: ['Net', 'income'], value: 142, notes: ['15% margin', '+6pp Y/Y'] },
    { id: 'tax', col: 5, order: 1, type: 'cost', labelSide: 'right',
      label: 'Tax', value: 38 },
    { id: 'rnd', col: 5, order: 2, type: 'cost', labelSide: 'right',
      label: ['Research &', 'Development'], value: 230, notes: ['24% of revenue'] },
    { id: 'sales_mktg', col: 5, order: 3, type: 'cost', labelSide: 'right',
      label: ['Sales &', 'Marketing'], value: 240, notes: ['25% of revenue'] },
    { id: 'gna', col: 5, order: 4, type: 'cost', labelSide: 'right',
      label: ['General &', 'Admin'], value: 70, notes: ['7% of revenue'] },
  ],

  links: [
    { source: 'enterprise', target: 'subscriptions', value: 620 },
    { source: 'smb', target: 'subscriptions', value: 240 },
    { source: 'subscriptions', target: 'revenue', value: 860 },
    { source: 'services', target: 'revenue', value: 90 },

    { source: 'revenue', target: 'gross_profit', value: 720 },
    { source: 'revenue', target: 'cost_of_revenue', value: 230 },

    { source: 'gross_profit', target: 'operating_income', value: 180 },
    { source: 'gross_profit', target: 'operating_expenses', value: 540 },

    { source: 'operating_income', target: 'net_income', value: 142 },
    { source: 'operating_income', target: 'tax', value: 38 },

    { source: 'operating_expenses', target: 'rnd', value: 230 },
    { source: 'operating_expenses', target: 'sales_mktg', value: 240 },
    { source: 'operating_expenses', target: 'gna', value: 70 },
  ],
});
