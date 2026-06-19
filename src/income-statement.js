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

  const NVIDIA_REVENUE_DEFAULTS = {
    data_center: {
      label: 'Data Center',
      icons: ['server'],
      color: '#0e7451',
      labelColor: '#0e7451',
    },
    gaming: {
      label: 'Gaming',
      icons: ['controller'],
      color: '#a5db57',
      labelColor: '#66af04',
    },
    professional_visualization: {
      label: ['Professional', 'Visualization'],
      icons: ['eye'],
      color: '#49006f',
      labelColor: '#49006f',
    },
    automotive: {
      label: 'Automotive',
      icons: ['car'],
      color: '#095ab8',
      labelColor: '#095ab8',
    },
    oem_other: {
      label: 'OEM & Other',
      icons: ['factory'],
      color: '#740046',
      labelColor: '#740046',
    },
  };

  function nvidiaQuarterlyDataset(spec) {
    const W = spec.width;
    const H = spec.height;
    const sx = W / 2986;
    const sy = H / 1490;
    const fs = Math.max(0.92, Math.min(1, Math.min(sx, sy)));
    const x = (n) => Math.round(n * sx);
    const y = (n) => Math.round(n * sy);
    const nodeWidth = 82;
    const revenueTotal = spec.revenueTotal;
    const revenueHeight = Math.round((spec.revenueHeight || 424) * sy);
    const scale = spec.scale || revenueHeight / revenueTotal;
    const heightFor = (value, min = 1.5) => (value > 0 ? Math.max(min, Math.round(value * scale * 10) / 10) : 0);
    const money = (value, nodeType) => {
      const body = `${spec.currency || '$'}${Number(value || 0).toFixed(spec.decimals ?? 1)}${spec.unit || 'B'}`;
      return nodeType === 'cost' ? `(${body})` : body;
    };

    const periodStamp = spec.periodStamp || 'top-right';
    const periodMeta = {
      'top-right': { periodX: W - 136, periodY: y(232), periodNoteY: y(287) },
      'bottom-center': { periodX: Math.round(W / 2), periodY: H - y(92), periodNoteY: H - y(52) },
      none: { periodX: -1000, periodY: -1000, periodNoteY: -950 },
    }[periodStamp] || {};
    const logoGlyphTransform =
      spec.logoVariant === 'compact' ? 'translate(151,25) scale(6.2)' : 'translate(140,10) scale(6.8)';

    const revenue = spec.revenue.map((item) => {
      const defaults = NVIDIA_REVENUE_DEFAULTS[item.id] || {};
      return Object.assign(
        {
          iconSize: 32,
          labelSide: 'left',
        },
        defaults,
        item
      );
    });

    const dataset = fromIncomeStatement({
      key: spec.key,
      name: `NVIDIA · ${spec.period}`,
      meta: Object.assign(
        {
          title: `NVIDIA ${spec.period} Income Statement`,
          period: spec.period,
          periodNote: spec.periodNote,
          titleSize: Math.round(142 * fs),
          titleX: Math.round(W / 2),
          titleY: y(122),
          titleTextLength: x(2471),
          currency: spec.currency || '$',
          unit: spec.unit || 'B',
          decimals: spec.decimals ?? 1,
          referenceImage: { src: `input/processed/${spec.key}.png`, width: W, height: H },
          logoWidth: x(390),
          logoHeight: y(279),
          logoY: y(167),
          logoViewBox: '0 0 390 279',
          logoSvg: `
        <rect x="140" y="0" width="166" height="178" fill="#76b900"/>
        <g transform="${logoGlyphTransform}" fill="#ffffff">
          <path d="${global.SANKEY_BRAND.nvidia}"/>
        </g>
        <text x="195" y="281" text-anchor="middle" font-family="Montserrat,Arial,sans-serif" font-size="94" font-weight="800" letter-spacing="0" fill="#000000">NVIDIA<tspan font-size="38" baseline-shift="super">&#174;</tspan></text>
      `,
        },
        periodMeta
      ),

      revenue,
      costOfRevenue: { label: ['Cost of', 'revenue'], value: spec.costOfRevenue },
      opex: [
        { id: 'rnd', label: ['Research &', 'Development'], value: spec.rnd, notes: spec.rndNotes },
        { id: 'sga', label: ['Sales, General', '& Admin'], value: spec.sga, notes: spec.sgaNotes },
      ],
      tax: { label: 'Tax', value: spec.tax || 0 },
      otherIncome: spec.otherIncome || [],

      derived: {
        revenueHub: { value: spec.revenueTotal, notes: spec.revenueNotes },
        grossProfit: { value: spec.grossProfit, notes: spec.grossProfitNotes },
        operatingProfit: { label: 'Operating profit', value: spec.operatingProfit, notes: spec.operatingProfitNotes },
        operatingExpenses: { value: spec.operatingExpenses },
        netProfit: { label: 'Net profit', value: spec.netProfit, notes: spec.netProfitNotes },
      },
    });

    const byId = Object.fromEntries(dataset.nodes.map((node) => [node.id, node]));
    dataset.render = {
      width: W,
      height: H,
      background: '#efefef',
      titleColor: '#123e65',
      subtitleColor: '#535353',
      noteColor: '#535353',
      palette: {
        source: { node: '#0e7451', label: '#0e7451' },
        hub: { node: '#000000', label: '#000000' },
        profit: { node: '#289321', label: '#128040' },
        cost: { node: '#be0004', label: '#800003' },
      },
      linkTint: {
        source: '#88b7a3',
        hub: null,
        profit: '#93c68b',
        cost: '#de8577',
      },
      linkOpacity: 1,
    };

    const sourceX = x(502);
    const revenueX = x(1035);
    const grossX = x(1567);
    const operatingX = x(2100);
    const otherX = x(2485);
    const rightX = x(2632);
    const sourceY = {};
    sourceY.data_center = y(412);
    sourceY.gaming = sourceY.data_center + heightFor(byId.data_center?.value || 0) + y(140);
    sourceY.professional_visualization = sourceY.gaming + heightFor(byId.gaming?.value || 0) + y(137);
    sourceY.automotive =
      sourceY.professional_visualization + heightFor(byId.professional_visualization?.value || 0) + y(141);
    sourceY.oem_other = sourceY.automotive + heightFor(byId.automotive?.value || 0) + y(145);
    const revenueY = y(644);
    const grossY = y(536);
    const operatingY = y(446);
    const netY = y(356);
    const grossProfitHeight = heightFor(spec.grossProfit);
    const operatingProfitHeight = heightFor(spec.operatingProfit);
    const operatingExpensesHeight = heightFor(spec.operatingExpenses);
    const netProfitHeight = heightFor(spec.netProfit);
    const rndHeight = heightFor(spec.rnd);
    const costY = Math.max(y(870), grossY + grossProfitHeight + y(242));
    const opexY = Math.max(y(690), operatingY + operatingProfitHeight + y(225));
    const otherY = netY + netProfitHeight + y(spec.otherGapAfterNet || 78);
    const taxY = netY + netProfitHeight + y(210);
    const rndY = opexY + operatingExpensesHeight + y(70);
    const sgaY = rndY + rndHeight + y(210);

    const nodes = {
      data_center: { x: sourceX, y: sourceY.data_center, width: nodeWidth, height: heightFor(byId.data_center?.value || 0) },
      gaming: { x: sourceX, y: sourceY.gaming, width: nodeWidth, height: heightFor(byId.gaming?.value || 0) },
      professional_visualization: {
        x: sourceX,
        y: sourceY.professional_visualization,
        width: nodeWidth,
        height: heightFor(byId.professional_visualization?.value || 0),
      },
      automotive: { x: sourceX, y: sourceY.automotive, width: nodeWidth, height: heightFor(byId.automotive?.value || 0) },
      oem_other: { x: sourceX, y: sourceY.oem_other, width: nodeWidth, height: heightFor(byId.oem_other?.value || 0) },
      revenue: { x: revenueX, y: revenueY, width: nodeWidth, height: revenueHeight },
      gross_profit: { x: grossX, y: grossY, width: nodeWidth, height: grossProfitHeight },
      cost_of_revenue: { x: grossX, y: costY, width: nodeWidth, height: heightFor(spec.costOfRevenue) },
      operating_profit: { x: operatingX, y: operatingY, width: nodeWidth, height: operatingProfitHeight },
      operating_expenses: { x: operatingX, y: opexY, width: nodeWidth, height: operatingExpensesHeight },
      net_profit: { x: rightX, y: netY, width: nodeWidth, height: netProfitHeight },
      tax: { x: rightX, y: taxY, width: nodeWidth, height: heightFor(spec.tax || 0, 0) },
      rnd: { x: rightX, y: rndY, width: nodeWidth, height: rndHeight },
      sga: { x: rightX, y: sgaY, width: nodeWidth, height: heightFor(spec.sga) },
    };
    if (!(spec.tax > 0)) {
      nodes.tax = { x: -200, y: -200, width: 0, height: 0 };
      if (byId.tax) {
        byId.tax.label = '';
        byId.tax.valueText = '';
      }
      dataset.links = dataset.links.filter((link) => !(link.source === 'operating_profit' && link.target === 'tax'));
    }

    (spec.otherIncome || []).forEach((item, index) => {
      nodes[item.id] = {
        x: otherX,
        y: item.id === 'tax_benefit' ? taxY : otherY + index * y(54),
        width: nodeWidth,
        height: heightFor(item.value),
      };
    });

    const sourceLabel = (id, labelX, icon) => {
      const node = nodes[id];
      const nameSize = Math.round(40 * fs);
      const valueSize = Math.round(43 * fs);
      const noteSize = Math.round(31 * fs);
      const nameTop = Math.round(node.y + node.height / 2 - nameSize / 2);
      const valueTop = Math.round(node.y - y(76));
      return {
        blocks: [
          { parts: ['name'], x: x(labelX), top: nameTop, anchor: 'middle', nameSize, lineGap: y(10) },
          { parts: ['value', 'notes'], x: x(543), top: valueTop, anchor: 'middle', valueSize, noteSize },
        ],
        icons: icon,
      };
    };
    const legacyIcon = (names, yTop, size, extra) =>
      Object.assign({ names, x: x(0), y: yTop, size: x(size), color: '#000000', strokeWidth: 2.6 }, extra || {});

    dataset.layout = {
      scale,
      nodes,
      labels: {
        data_center: sourceLabel('data_center', 363, legacyIcon(['server'], nodes.data_center.y + nodes.data_center.height / 2 - y(86), 150, { x: x(14), strokeWidth: 2.5 })),
        gaming: sourceLabel('gaming', 359, legacyIcon(['controller'], nodes.gaming.y + nodes.gaming.height / 2 - y(86), 170)),
        professional_visualization: sourceLabel('professional_visualization', 320, legacyIcon(['eye'], nodes.professional_visualization.y + nodes.professional_visualization.height / 2 - y(86), 170)),
        automotive: sourceLabel('automotive', 337, legacyIcon(['car'], nodes.automotive.y + nodes.automotive.height / 2 - y(88), 178)),
        oem_other: sourceLabel('oem_other', 322, legacyIcon(['factory'], nodes.oem_other.y + nodes.oem_other.height / 2 - y(78), 156, { x: x(5) })),
        revenue: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: x(1076), top: y(472), anchor: 'middle', nameSize: Math.round(40 * fs), valueSize: Math.round(43 * fs), noteSize: Math.round(31 * fs) }],
        },
        gross_profit: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: x(1608), top: y(329), anchor: 'middle', nameSize: Math.round(40 * fs), valueSize: Math.round(43 * fs), noteSize: Math.round(31 * fs) }],
        },
        operating_profit: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: x(2141), top: y(239), anchor: 'middle', nameSize: Math.round(40 * fs), valueSize: Math.round(43 * fs), noteSize: Math.round(31 * fs) }],
        },
        net_profit: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: x(2745), top: y(378), anchor: 'start', nameSize: Math.round(40 * fs), valueSize: Math.round(43 * fs), noteSize: Math.round(31 * fs) }],
        },
        cost_of_revenue: {
          blocks: [{ parts: ['name', 'value'], x: x(1608), top: y(1218), anchor: 'middle', nameSize: Math.round(38 * fs), valueSize: Math.round(37 * fs) }],
        },
        operating_expenses: {
          blocks: [{ parts: ['name', 'value'], x: x(2141), top: y(1008), anchor: 'middle', nameSize: Math.round(38 * fs), valueSize: Math.round(37 * fs) }],
        },
        rnd: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: x(2846), top: y(1017), anchor: 'middle', nameSize: Math.round(34 * fs), valueSize: Math.round(34 * fs), noteSize: Math.round(31 * fs) }],
        },
        sga: {
          blocks: [{ parts: ['name', 'value', 'notes'], x: x(2846), top: y(1270), anchor: 'middle', nameSize: Math.round(34 * fs), valueSize: Math.round(34 * fs), noteSize: Math.round(31 * fs) }],
        },
      },
    };

    if (spec.tax > 0) {
      dataset.layout.labels.tax = {
        blocks: [{ parts: ['name', 'value'], x: x(2808), top: y(796), anchor: 'start', nameSize: Math.round(35 * fs), valueSize: Math.round(34 * fs) }],
      };
    }

    (spec.otherIncome || []).forEach((item, index) => {
      dataset.layout.labels[item.id] = {
        blocks: [
          {
            parts: ['name', 'value'],
            x: item.id === 'tax_benefit' ? x(2606) : x(2526),
            top: item.id === 'tax_benefit' ? y(796) : y(672 + index * 54),
            anchor: item.id === 'tax_benefit' ? 'start' : 'middle',
            nameSize: Math.round(34 * fs),
            valueSize: Math.round(34 * fs),
          },
        ],
      };
    });

    Object.assign(byId.data_center || {}, { linkTint: '#88b7a3' });
    Object.assign(byId.gaming || {}, { linkTint: '#add383' });
    Object.assign(byId.professional_visualization || {}, { linkTint: '#a07fb4' });
    Object.assign(byId.automotive || {}, { linkTint: '#82aad7' });
    Object.assign(byId.oem_other || {}, { linkTint: '#bc81a0' });

    dataset.nodes.forEach((node) => {
      if (node.value != null) node.valueText = money(node.value, node.type);
    });
    if (!(spec.tax > 0) && byId.tax) byId.tax.valueText = '';
    (spec.otherIncome || []).forEach((item) => {
      if (item.valueText && byId[item.id]) byId[item.id].valueText = item.valueText;
    });

    dataset.links.forEach((link) => {
      if (link.source === 'operating_profit' && link.target === 'net_profit') link.targetOrder = 0;
      if (link.target === 'net_profit' && link.source !== 'operating_profit') {
        link.targetOrder = link.source === 'other' ? 1 : 2;
        link.curve = { c1x: x(2596), c2x: x(2590) };
      }
    });

    return dataset;
  }

  const ns = (global.SankeyEngine = global.SankeyEngine || {});
  ns.fromIncomeStatement = fromIncomeStatement;
  ns.nvidiaQuarterlyDataset = nvidiaQuarterlyDataset;
})(window);
