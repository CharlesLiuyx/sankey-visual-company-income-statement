/* ====================================================================
 *  income-statement.js
 *  A convenience layer over the engine: feed plain income-statement
 *  figures and it derives the full node/link graph (the standard
 *  revenue → gross profit → operating profit → net profit topology),
 *  computing every subtotal for you.
 *
 *      const data = SankeyEngine.fromIncomeStatement({
 *        meta: { title: '…', currency: '$', unit: 'B' },
 *        revenue: [
 *          { label: 'Data Center', notes: ['+92% Y/Y'], icons: ['server'],
 *            children: [
 *              { label: 'Hyperscale', value: 37.9, notes: ['+115% Y/Y'] },
 *              { label: ['AI Clouds', '…'], value: 37.4, notes: ['+74% Y/Y'] },
 *            ] },
 *          { label: 'Edge Computing', value: 6.4, notes: ['+29% Y/Y'] },
 *        ],
 *        costOfRevenue: 20.5,
 *        opex: [ { label: 'R&D', value: 6.3 }, { label: 'SG&A', value: 1.3 } ],
 *        tax: 11.6,
 *        otherIncome: [ { label: 'Investments', value: 16.4 } ],
 *        derived: { grossProfit: { notes: ['75% margin'] }, … },
 *      });
 *      SankeyEngine.render('#chart', data);
 * ==================================================================== */
(function (global) {
  'use strict';

  const num = (x) => (typeof x === 'object' && x !== null ? x.value : x) || 0;
  const sum = (arr, f) => (arr || []).reduce((a, b) => a + f(b), 0);

  function slug(label, i) {
    const base = (Array.isArray(label) ? label.join(' ') : String(label || 'n'))
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');
    return (base || 'node') + '_' + i;
  }

  function fromIncomeStatement(spec) {
    const revenue = spec.revenue || [];
    const opex = spec.opex || [];
    const other = spec.otherIncome || [];
    const der = spec.derived || {};

    const cogs = num(spec.costOfRevenue);
    const tax = num(spec.tax);

    // revenue line totals (explicit, else summed from children)
    const lineTotal = (r) => (r.value != null ? r.value : sum(r.children, (c) => num(c)));
    const revenueTotal = sum(revenue, lineTotal);
    const grossProfit = revenueTotal - cogs;
    const opexTotal = sum(opex, (o) => num(o));
    const operatingProfit = grossProfit - opexTotal;
    const otherTotal = sum(other, (o) => num(o));
    const netProfit = operatingProfit - tax + otherTotal;

    // display value for a computed subtotal: explicit override wins, so a
    // node can show a company's reported figure while flows stay conserved
    const dval = (d, computed) => (d && d.value != null ? d.value : computed);

    const hasChildren = revenue.some((r) => (r.children || []).length);
    const cHub = hasChildren ? 2 : 1;

    const nodes = [];
    const links = [];
    const N = (o) => {
      nodes.push(o);
      return o.id;
    };
    const L = (s, t, v) => links.push({ source: s, target: t, value: v });

    // ----- revenue lines (+ optional children) -----
    revenue.forEach((r, i) => {
      const rid = r.id || slug(r.label, 'rev' + i);
      const primary = i === 0; // first line gets the "above" + icon treatment
      N({
        id: rid, col: cHub - 1, order: i, type: 'source',
        labelSide: r.labelSide || (primary ? 'above' : 'left'),
        label: r.label, value: lineTotal(r), notes: r.notes,
        color: r.color, labelColor: r.labelColor,
        icons: r.icons, iconSize: r.iconSize,
      });
      L(rid, 'revenue', lineTotal(r));

      (r.children || []).forEach((c, j) => {
        const cid = c.id || slug(c.label, 'seg' + i + '_' + j);
        N({
          id: cid, col: 0, order: j, type: 'source', labelSide: c.labelSide || 'left',
          label: c.label, value: num(c), notes: c.notes,
          color: c.color, labelColor: c.labelColor, icons: c.icons, iconSize: c.iconSize,
        });
        L(cid, rid, num(c));
      });
    });

    // ----- hub -----
    N({
      id: 'revenue', col: cHub, order: 0, type: 'hub', labelSide: 'above',
      label: (der.revenueHub && der.revenueHub.label) || 'Revenue',
      value: dval(der.revenueHub, revenueTotal), notes: der.revenueHub && der.revenueHub.notes,
    });

    // ----- gross profit / cost of revenue -----
    N({
      id: 'gross_profit', col: cHub + 1, order: 0, type: 'profit', labelSide: 'above',
      label: (der.grossProfit && der.grossProfit.label) || 'Gross profit',
      value: dval(der.grossProfit, grossProfit), notes: der.grossProfit && der.grossProfit.notes,
    });
    L('revenue', 'gross_profit', grossProfit);

    N({
      id: 'cost_of_revenue', col: cHub + 1, order: 1, type: 'cost', labelSide: 'below',
      label: (spec.costOfRevenue && spec.costOfRevenue.label) || ['Cost of', 'revenue'],
      value: cogs, notes: spec.costOfRevenue && spec.costOfRevenue.notes,
    });
    L('revenue', 'cost_of_revenue', cogs);

    // gross profit splits into operating profit + operating expenses
    L('gross_profit', 'operating_profit', operatingProfit);
    L('gross_profit', 'operating_expenses', opexTotal);

    // ----- operating profit / operating expenses / other income -----
    let ord = 0;
    other.forEach((o, i) => {
      const oid = o.id || slug(o.label, 'other' + i);
      N({
        id: oid, col: cHub + 2, order: ord++, type: 'profit', labelSide: o.labelSide || 'above',
        label: o.label, value: num(o), notes: o.notes, color: o.color, labelColor: o.labelColor,
      });
      L(oid, 'net_profit', num(o));
    });

    N({
      id: 'operating_profit', col: cHub + 2, order: ord++, type: 'profit', labelSide: 'above',
      label: (der.operatingProfit && der.operatingProfit.label) || ['Operating', 'profit'],
      value: dval(der.operatingProfit, operatingProfit),
      notes: der.operatingProfit && der.operatingProfit.notes,
    });
    L('operating_profit', 'net_profit', operatingProfit - tax);
    L('operating_profit', 'tax', tax);

    N({
      id: 'operating_expenses', col: cHub + 2, order: ord++, type: 'cost', labelSide: 'below',
      label: (der.operatingExpenses && der.operatingExpenses.label) || ['Operating', 'expenses'],
      value: dval(der.operatingExpenses, opexTotal),
      notes: der.operatingExpenses && der.operatingExpenses.notes,
    });

    // ----- net profit / tax / opex breakdown -----
    let rord = 0;
    N({
      id: 'net_profit', col: cHub + 3, order: rord++, type: 'profit', labelSide: 'right',
      label: (der.netProfit && der.netProfit.label) || ['Net', 'profit'],
      value: dval(der.netProfit, netProfit), notes: der.netProfit && der.netProfit.notes,
    });
    N({
      id: 'tax', col: cHub + 3, order: rord++, type: 'cost', labelSide: 'right',
      label: (spec.tax && spec.tax.label) || 'Tax', value: tax,
      notes: spec.tax && spec.tax.notes,
    });
    opex.forEach((o, i) => {
      const oid = o.id || slug(o.label, 'opex' + i);
      N({
        id: oid, col: cHub + 3, order: rord++, type: 'cost', labelSide: o.labelSide || 'right',
        label: o.label, value: num(o), notes: o.notes,
      });
      L('operating_expenses', oid, num(o));
    });

    return { key: spec.key, name: spec.name, meta: spec.meta || {}, nodes, links };
  }

  const ns = (global.SankeyEngine = global.SankeyEngine || {});
  ns.fromIncomeStatement = fromIncomeStatement;
})(window);
