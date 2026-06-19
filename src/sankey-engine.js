/* ====================================================================
 *  sankey-engine.js
 *  A reusable income-statement Sankey renderer (D3 + d3-sankey).
 *
 *  Feed it a data object (see data/schema.md) and it draws a polished
 *  flow diagram in the style of the NVIDIA income-statement infographic:
 *  green = value retained, red = costs, teal = revenue collection.
 *
 *  Public API:
 *      SankeyEngine.render(selector, data, overrides?)
 * ==================================================================== */
(function (global) {
  'use strict';

  /* ---- default theme / layout tokens (override per-call via 4th arg) ---- */
  const DEFAULTS = {
    width: 2862,
    height: 1462,
    margin: { top: 360, right: 311, bottom: 351, left: 339 },

    nodeWidth: 82,
    nodePadding: 104,

    background: '#efefef',
    fontFamily:
      '"Montserrat","Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',

    titleColor: '#123e65',
    subtitleColor: '#535353',
    noteColor: '#535353',

    // solid node colours, keyed by node.type. label = text colour.
    palette: {
      source: { node: '#0e7451', label: '#008966' },
      hub: { node: '#101010', label: '#101010' },
      profit: { node: '#289321', label: '#008f47' },
      cost: { node: '#be0004', label: '#800003' },
    },

    // translucent link tints, keyed by category. hub returns null so a
    // link passing through the hub keeps the colour of its other end.
    linkTint: {
      source: '#88b7a3',
      hub: null,
      profit: '#93c68b',
      cost: '#e99485',
    },
    linkOpacity: 1,

    // typography (px) for the multi-line node labels
    type: { name: 46, value: 43, note: 31, lineGap: 8 },

    interaction: {
      enabled: true,
      dimOpacity: 0.16,
      nodeDimOpacity: 0.22,
      labelDimOpacity: 0.2,
      focusOpacity: 1,
      transitionMs: 120,
      tooltip: {
        enabled: true,
        percentDecimals: 1,
        fontSize: 28,
        fontWeight: 600,
        textColor: '#35566f',
        background: '#f8fbfc',
        backgroundOpacity: 0.88,
        stroke: '#d9e3e8',
        strokeOpacity: 0.65,
        paddingX: 14,
        paddingY: 8,
        radius: 4,
      },
    },
  };

  /* ---------------------------- helpers ---------------------------- */
  const isFn = (v) => typeof v === 'function';

  function deepMerge(base, extra) {
    if (!extra) return base;
    const out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
    for (const k of Object.keys(extra)) {
      const a = out[k];
      const b = extra[k];
      out[k] =
        a && b && typeof a === 'object' && typeof b === 'object' && !Array.isArray(b)
          ? deepMerge(a, b)
          : b;
    }
    return out;
  }

  // "$37.9B"  /  cost → "($20.5B)"
  // NB: d3-sankey overwrites node.value with the computed flow sum, so the
  // display number is read from node.dv (the author's original value).
  function formatValue(node, meta) {
    if (node.valueText != null) return node.valueText;
    const cur = meta.currency != null ? meta.currency : '$';
    const unit = meta.unit != null ? meta.unit : '';
    const v = Math.abs(node.dv != null ? node.dv : node.value);
    const num = Number.isInteger(v) ? v : v.toFixed(meta.decimals != null ? meta.decimals : 1);
    const body = `${cur}${num}${unit}`;
    return node.type === 'cost' ? `(${body})` : body;
  }

  function trimFixed(value, decimals) {
    return value
      .toFixed(decimals)
      .replace(/\.0+$/, '')
      .replace(/(\.\d*?)0+$/, '$1');
  }

  // default label side when a node doesn't specify one
  function autoSide(node, nCols) {
    if (node.col === 0) return 'left';
    if (node.col === nCols - 1) return 'right';
    if (node.type === 'cost') return 'below';
    return 'above';
  }

  function buildFixedGraph(nodes, links, data, cfg) {
    const layout = data.layout || {};
    const fixed = layout.nodes || {};
    const scale =
      layout.scale ||
      nodes.reduce((best, n) => {
        const spec = fixed[n.id];
        return spec && n.value ? Math.min(best, spec.height / n.value) : best;
      }, Infinity);
    const ky = Number.isFinite(scale) ? scale : 1;

    const graphNodes = nodes.map((n) => {
      const spec = fixed[n.id] || {};
      const x0 = spec.x != null ? spec.x : cfg.margin.left + (n.col || 0) * 426;
      const y0 = spec.y != null ? spec.y : cfg.margin.top;
      const width = spec.width != null ? spec.width : cfg.nodeWidth;
      const height = spec.height != null ? spec.height : (n.value || 1) * ky;
      return Object.assign({}, n, {
        x0,
        y0,
        x1: x0 + width,
        y1: y0 + height,
        sourceLinks: [],
        targetLinks: [],
      });
    });

    const byId = new Map(graphNodes.map((n) => [n.id, n]));
    const graphLinks = links.map((l, i) => {
      const source = byId.get(l.raw.source);
      const target = byId.get(l.raw.target);
      const width = l.raw.width != null ? l.raw.width : l.value * ky;
      const link = Object.assign({}, l, { index: i, source, target, width });
      source.sourceLinks.push(link);
      target.targetLinks.push(link);
      return link;
    });

    const sortLinks = (a, b, key) => {
      const av = a.raw[key] != null ? a.raw[key] : a.index;
      const bv = b.raw[key] != null ? b.raw[key] : b.index;
      return av - bv;
    };
    graphNodes.forEach((n) => {
      n.sourceLinks.sort((a, b) => sortLinks(a, b, 'sourceOrder'));
      n.targetLinks.sort((a, b) => sortLinks(a, b, 'targetOrder'));
      let sy = n.y0;
      n.sourceLinks.forEach((l) => {
        l.y0 = sy + l.width / 2;
        sy += l.width;
      });
      let ty = n.y0;
      n.targetLinks.forEach((l) => {
        l.y1 = ty + l.width / 2;
        ty += l.width;
      });
    });

    graphLinks.forEach((l) => {
      if (l.raw.y0 != null) l.y0 = l.raw.y0;
      if (l.raw.y1 != null) l.y1 = l.raw.y1;
    });

    return { nodes: graphNodes, links: graphLinks };
  }

  /* ------------------------------ render --------------------------- */
  function render(selector, data, overrides) {
    if (!global.d3 || !global.d3.sankey) {
      throw new Error('d3 and d3-sankey must be loaded before sankey-engine.js');
    }
    const d3 = global.d3;
    const cfg = deepMerge(deepMerge(DEFAULTS, data.render || {}), overrides);
    const meta = data.meta || {};
    const ICONS = global.SANKEY_ICONS || {};

    const root = d3.select(selector);
    root.selectAll('*').remove();

    const W = cfg.width;
    const H = cfg.height;

    const svg = root
      .append('svg')
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .attr('width', '100%')
      .style('display', 'block')
      .style('font-family', cfg.fontFamily);

    svg
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', W)
      .attr('height', H)
      .attr('fill', cfg.background);

    const defs = svg.append('defs');

    /* ---------- build the graph for d3-sankey ---------- */
    const nodeById = new Map();
    const nodes = data.nodes.map((n, i) => {
      const copy = Object.assign({}, n, { index: i });
      nodeById.set(n.id, copy);
      return copy;
    });
    const nCols = 1 + nodes.reduce((m, n) => Math.max(m, n.col || 0), 0);

    const links = data.links.map((l) => ({
      source: nodeById.get(l.source).index,
      target: nodeById.get(l.target).index,
      value: l.value,
      raw: l,
    }));

    let graph;
    if (data.layout && data.layout.nodes) {
      graph = buildFixedGraph(nodes, links, data, cfg);
    } else {
      const sankey = d3
        .sankey()
        .nodeWidth(cfg.nodeWidth)
        .nodePadding(cfg.nodePadding)
        .nodeAlign((n) => (n.col != null ? n.col : n.depth)) // honour manual columns
        .nodeSort((a, b) => (a.order || 0) - (b.order || 0)) // honour manual vertical order
        // stack links in node order at both ends → no needless crossings
        .linkSort(
          (a, b) =>
            (a.source.order || 0) - (b.source.order || 0) ||
            (a.target.order || 0) - (b.target.order || 0)
        )
        .extent([
          [cfg.margin.left, cfg.margin.top],
          [W - cfg.margin.right, H - cfg.margin.bottom],
        ]);

      graph = sankey({
        nodes: nodes.map((d) => Object.assign({}, d)),
        links: links.map((d) => Object.assign({}, d)),
      });
    }

    // preserve the author's display value (sankey overwrites .value)
    const authoredValue = new Map(data.nodes.map((n) => [n.id, n.value]));
    graph.nodes.forEach((n) => {
      n.dv = authoredValue.has(n.id) ? authoredValue.get(n.id) : n.value;
    });

    /* ---------- colour resolvers ---------- */
    const nodeColor = (n) =>
      n.color || (cfg.palette[n.type] || cfg.palette.source).node;
    const labelColor = (n) =>
      n.labelColor || (cfg.palette[n.type] || cfg.palette.source).label;
    const tintOf = (n) => {
      if (n.linkTint) return n.linkTint;
      const t = cfg.linkTint[n.type];
      return t === undefined ? cfg.linkTint.source : t;
    };
    const keyOf = (n) => String(n.id != null ? n.id : n.index);

    /* ---------- links (drawn first, under the nodes) ---------- */
    const linkLayer = svg.append('g').attr('class', 'links');
    const sankeyLinkPath = d3.sankeyLinkHorizontal();

    function linkPath(lk) {
      const curve = lk.raw && lk.raw.curve;
      if (!curve) return sankeyLinkPath(lk);
      const x0 = curve.x0 != null ? curve.x0 : lk.source.x1;
      const x1 = curve.x1 != null ? curve.x1 : lk.target.x0;
      const c1x = curve.c1x != null ? curve.c1x : (x0 + x1) / 2;
      const c2x = curve.c2x != null ? curve.c2x : (x0 + x1) / 2;
      const c1y = curve.c1y != null ? curve.c1y : lk.y0;
      const c2y = curve.c2y != null ? curve.c2y : lk.y1;
      return `M${x0},${lk.y0}C${c1x},${c1y},${c2x},${c2y},${x1},${lk.y1}`;
    }

    graph.links.forEach((lk, i) => {
      const sNode = lk.source;
      const tNode = lk.target;
      // a flow leaving as a cost is solid salmon from the start, so it reads
      // as clearly distinct from the green profit bands at the split point
      const toCost = tNode.type === 'cost';
      const leftTint = toCost
        ? cfg.linkTint.cost
        : tintOf(sNode) || tintOf(tNode) || cfg.linkTint.source;
      const rightTint = toCost
        ? cfg.linkTint.cost
        : tintOf(tNode) || tintOf(sNode) || cfg.linkTint.source;

      const gid = `lg-${i}`;
      const grad = defs
        .append('linearGradient')
        .attr('id', gid)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', sNode.x1)
        .attr('x2', tNode.x0);
      grad.append('stop').attr('offset', '0%').attr('stop-color', leftTint);
      grad.append('stop').attr('offset', '100%').attr('stop-color', rightTint);

      linkLayer
        .append('path')
        .datum(lk)
        .attr('class', 'sankey-link')
        .attr('data-source', keyOf(sNode))
        .attr('data-target', keyOf(tNode))
        .attr('d', linkPath(lk))
        .attr('fill', 'none')
        .attr('stroke', `url(#${gid})`)
        .attr('stroke-width', Math.max(1, lk.width))
        .attr('stroke-opacity', cfg.linkOpacity)
        .attr('stroke-linecap', 'butt')
        .style('pointer-events', 'stroke')
        .style('cursor', 'pointer');
    });

    /* ---------- nodes ---------- */
    const nodeLayer = svg.append('g').attr('class', 'nodes');

    graph.nodes.forEach((n) => {
      nodeLayer
        .append('rect')
        .datum(n)
        .attr('class', 'sankey-node')
        .attr('data-node', keyOf(n))
        .attr('x', n.x0)
        .attr('y', n.y0)
        .attr('width', n.x1 - n.x0)
        .attr('height', Math.max(1, n.y1 - n.y0))
        .attr('fill', nodeColor(n))
        .attr('rx', 1.5)
        .style('cursor', 'pointer');
    });

    /* ---------- labels ---------- */
    const labelLayer = svg.append('g').attr('class', 'labels');

    const pad = 16;
    const gap = cfg.type.lineGap;
    const labelLayout = (data.layout && data.layout.labels) || {};
    const iconLayout = [];

    function customLines(n, block) {
      if (block.lines) {
        return block.lines.map((line) => {
          const spec = typeof line === 'string' ? { text: line } : line;
          const text = spec.text === '$value' ? formatValue(n, meta) : spec.text;
          return {
            t: text,
            size: spec.size || cfg.type.note,
            w: spec.weight || spec.w || 400,
            c: spec.color || labelColor(n),
          };
        });
      }
      const parts = block.parts || ['name', 'value', 'notes'];
      const out = [];
      const nameLines = Array.isArray(n.label) ? n.label : n.label ? [n.label] : [];
      const nameSize = block.nameSize || cfg.type.name;
      const valueSize = block.valueSize || cfg.type.value;
      const noteSize = block.noteSize || cfg.type.note;
      parts.forEach((part) => {
        if (part === 'name') {
          nameLines.forEach((t) =>
            out.push({
              t,
              size: nameSize,
              w: block.nameWeight || 700,
              c: block.nameColor || labelColor(n),
            })
          );
        } else if (part === 'value' && (n.value != null || n.valueText != null)) {
          out.push({
            t: formatValue(n, meta),
            size: valueSize,
            w: block.valueWeight || 400,
            c: block.valueColor || labelColor(n),
          });
        } else if (part === 'notes') {
          (n.notes || []).forEach((nt) =>
            out.push({
              t: nt,
              size: noteSize,
              w: block.noteWeight || 400,
              c: block.noteColor || cfg.noteColor,
            })
          );
        }
      });
      return out;
    }

    // ---- pass 1: build a label spec per node ----
    const specs = [];
    graph.nodes.forEach((n) => {
      const side = n.labelSide || autoSide(n, nCols);
      const cx = (n.x0 + n.x1) / 2;
      const cy = (n.y0 + n.y1) / 2;
      const custom = labelLayout[n.id];
      if (custom && custom.blocks) {
        custom.blocks.forEach((block) => {
          const lines = customLines(n, block);
          if (!lines.length) return;
          const localGap = block.lineGap != null ? block.lineGap : gap;
          const blockH =
            lines.reduce((a, l) => a + l.size, 0) + localGap * (lines.length - 1);
          specs.push({
            n,
            side: 'custom',
            cx,
            anchor: block.anchor || 'middle',
            x: block.x,
            lines,
            blockH,
            top: block.top,
            lineGap: localGap,
            drawIcons: false,
          });
        });
        if (custom.icons) {
          iconLayout.push(Object.assign({ n }, custom.icons));
        }
        return;
      }

      const nameLines = Array.isArray(n.label) ? n.label : n.label ? [n.label] : [];
      const valueLines = [];
      if (n.value != null || n.valueText != null)
        valueLines.push({ t: formatValue(n, meta), size: cfg.type.value, w: 400, c: labelColor(n) });
      (n.notes || []).forEach((nt) =>
        valueLines.push({ t: nt, size: cfg.type.note, w: 400, c: cfg.noteColor })
      );
      if (side === 'split-left') {
        const nameOnly = nameLines.map((t) => ({
          t,
          size: cfg.type.name,
          w: 700,
          c: labelColor(n),
        }));
        const nameH =
          nameOnly.reduce((a, l) => a + l.size, 0) + gap * Math.max(0, nameOnly.length - 1);
        const valueH =
          valueLines.reduce((a, l) => a + l.size, 0) + gap * Math.max(0, valueLines.length - 1);
        specs.push({
          n,
          side: 'split-name',
          cx,
          anchor: 'end',
          x: n.x0 - 42,
          lines: nameOnly,
          blockH: nameH,
          top: cy - nameH / 2,
          drawIcons: false,
        });
        specs.push({
          n,
          side: 'split-value',
          cx,
          anchor: 'middle',
          x: cx,
          lines: valueLines,
          blockH: valueH,
          top: n.y0 - 35 - valueH,
          drawIcons: false,
        });
        return;
      }

      // lines: name (bold, may wrap), value (regular), notes (gray)
      const lines = [];
      nameLines.forEach((t) =>
        lines.push({ t, size: cfg.type.name, w: 700, c: labelColor(n) })
      );
      valueLines.forEach((l) => lines.push(l));
      if (!lines.length) return;

      const blockH = lines.reduce((a, l) => a + l.size, 0) + gap * (lines.length - 1);

      let anchor, x, top;
      if (side === 'left') {
        anchor = 'end';
        x = n.x0 - pad;
        top = cy - blockH / 2;
      } else if (side === 'right') {
        anchor = 'start';
        x = n.x1 + pad;
        top = cy - blockH / 2;
      } else if (side === 'below') {
        anchor = 'middle';
        x = cx;
        top = n.y1 + pad + 4;
      } else {
        // above — block sits fully above the node top
        anchor = 'middle';
        x = cx;
        top = n.y0 - pad - blockH;
      }
      specs.push({ n, side, cx, anchor, x, lines, blockH, top, drawIcons: true });
    });

    // ---- pass 2: keep side labels from overlapping (push later ones down) ----
    const minGap = 11;
    ['left', 'right'].forEach((s) => {
      const grp = specs.filter((sp) => sp.side === s).sort((a, b) => a.top - b.top);
      for (let i = 1; i < grp.length; i++) {
        const need = grp[i - 1].top + grp[i - 1].blockH + minGap;
        if (grp[i].top < need) grp[i].top = need;
      }
    });

    // ---- pass 3: render text + optional icons ----
    specs.forEach((sp) => {
      const { n, side, cx, anchor, x, lines, blockH, top } = sp;
      n._labelTop = top; // remembered for logo placement
      const g = labelLayer
        .append('g')
        .datum(n)
        .attr('class', 'sankey-label')
        .attr('data-node', keyOf(n))
        .style('cursor', 'pointer');
      let y = top;
      const localGap = sp.lineGap != null ? sp.lineGap : gap;
      lines.forEach((l) => {
        y += l.size; // baseline of this line
        g.append('text')
          .attr('x', x)
          .attr('y', y)
          .attr('text-anchor', anchor)
          .attr('fill', l.c)
          .attr('font-size', l.size)
          .attr('font-weight', l.w)
          .text(l.t);
        y += localGap;
      });

      if (sp.drawIcons !== false && n.icons && n.icons.length) {
        const sz = n.iconSize || 30;
        const sgap = 10;
        const totalW = n.icons.length * sz + (n.icons.length - 1) * sgap;
        let ix;
        if (side === 'left') ix = n.x0 - pad - totalW;
        else if (side === 'right') ix = n.x1 + pad;
        else ix = cx - totalW / 2;
        const iy = side === 'above' ? top - sz - 12 : y + 10;

        // each icon is a nested <svg> carrying Lucide's inner markup, drawn
        // stroked (handles multi-element icons, not just single paths)
        n.icons.forEach((name, k) => {
          const markup = ICONS[name];
          if (!markup) return;
          labelLayer
            .append('svg')
            .datum(n)
            .attr('class', 'sankey-label sankey-icon')
            .attr('data-node', keyOf(n))
            .attr('x', ix + k * (sz + sgap))
            .attr('y', iy)
            .attr('width', sz)
            .attr('height', sz)
            .attr('viewBox', '0 0 24 24')
            .attr('fill', 'none')
            .attr('stroke', n.iconColor || '#3a3f45')
            .attr('stroke-width', 1.85)
            .attr('stroke-linecap', 'round')
            .attr('stroke-linejoin', 'round')
            .style('cursor', 'pointer')
            .html(markup);
        });
      }
    });

    iconLayout.forEach((ic) => {
      const { n } = ic;
      const icons = ic.names || n.icons || [];
      const sizes = ic.sizes || [];
      let x = ic.x;
      icons.forEach((name, k) => {
        const markup = ICONS[name];
        if (!markup) return;
        const sz = sizes[k] || ic.size || n.iconSize || 30;
        labelLayer
          .append('svg')
          .datum(n)
          .attr('class', 'sankey-label sankey-icon')
          .attr('data-node', keyOf(n))
          .attr('x', x)
          .attr('y', ic.y)
          .attr('width', sz)
          .attr('height', sz)
          .attr('viewBox', '0 0 24 24')
          .attr('fill', 'none')
          .attr('stroke', ic.color || n.iconColor || '#3a3f45')
          .attr('stroke-width', ic.strokeWidth || 1.85)
          .attr('stroke-linecap', 'round')
          .attr('stroke-linejoin', 'round')
          .style('cursor', 'pointer')
          .html(markup);
        x += sz + (ic.gap || 10);
      });
    });

    /* ---------- hub logo (optional) ---------- *
     * sits in the top headroom, centred over the hub column, above the
     * hub's "above" text label. */
    if (meta.logoSvg) {
      const hub = graph.nodes.find((n) => n.type === 'hub') || graph.nodes[0];
      const lw = meta.logoWidth || 150;
      const lh = meta.logoHeight || 86;
      const lx = (hub.x0 + hub.x1) / 2 - lw / 2;
      // sit just above the hub's text label, clamped below the title
      const labelTop = hub._labelTop != null ? hub._labelTop : cfg.margin.top;
      const ly = meta.logoY != null ? meta.logoY : Math.max(86, labelTop - lh - 10);
      const lg = svg.append('g').attr('transform', `translate(${lx},${ly})`);
      lg.append('svg')
        .attr('width', lw)
        .attr('height', lh)
        .attr('viewBox', meta.logoViewBox || '0 0 150 86')
        .attr('overflow', 'visible')
        .html(meta.logoSvg);
    }

    /* ---------- title block ---------- */
    if (meta.title) {
      const title = svg
        .append('text')
        .attr('x', meta.titleX != null ? meta.titleX : W / 2)
        .attr('y', meta.titleY || 120)
        .attr('text-anchor', 'middle')
        .attr('font-size', meta.titleSize || 142)
        .attr('font-weight', 800)
        .attr('letter-spacing', '0')
        .attr('fill', cfg.titleColor)
        .text(meta.title);
      if (meta.titleTextLength) {
        title
          .attr('textLength', meta.titleTextLength)
          .attr('lengthAdjust', meta.titleLengthAdjust || 'spacingAndGlyphs');
      }
    }

    /* ---------- period stamp (top-right corner, clear of nodes) ---------- */
    if (meta.period || meta.periodNote) {
      const px = meta.periodX != null ? meta.periodX : W - 210;
      const periodY = meta.periodY != null ? meta.periodY : 222;
      const periodNoteY = meta.periodNoteY != null ? meta.periodNoteY : 276;
      const tg = svg.append('g');
      if (meta.period)
        tg.append('text')
          .attr('x', px)
          .attr('y', periodY)
          .attr('text-anchor', 'middle')
          .attr('font-size', 38)
          .attr('font-weight', 700)
          .attr('fill', cfg.subtitleColor)
          .text(meta.period);
      if (meta.periodNote)
        tg.append('text')
          .attr('x', px)
          .attr('y', periodNoteY)
          .attr('text-anchor', 'middle')
          .attr('font-size', 28)
          .attr('font-weight', 500)
          .attr('fill', cfg.noteColor)
          .text(meta.periodNote);
    }

    const tooltipCfg =
      cfg.interaction && cfg.interaction.tooltip && cfg.interaction.tooltip.enabled
        ? cfg.interaction.tooltip
        : null;
    const linkTooltipLayer = tooltipCfg
      ? svg
          .append('g')
          .attr('class', 'sankey-link-tooltips')
          .attr('aria-hidden', 'true')
          .style('display', 'none')
          .style('pointer-events', 'none')
          .style('filter', 'drop-shadow(0 2px 6px rgba(0,0,0,0.10))')
      : null;

    function numericLinkValue(lk) {
      const raw = lk.raw || {};
      const v = raw.value != null ? raw.value : lk.value;
      return Number.isFinite(Number(v)) ? Number(v) : 0;
    }

    function linkSum(linksToSum) {
      return (linksToSum || []).reduce((sum, lk) => sum + numericLinkValue(lk), 0);
    }

    function linkPercent(lk) {
      const raw = lk.raw || {};
      if (raw.percentText != null) return String(raw.percentText);
      if (raw.percentageText != null) return String(raw.percentageText);

      const explicit = raw.percent != null ? raw.percent : raw.percentage;
      const decimals = tooltipCfg && tooltipCfg.percentDecimals != null ? tooltipCfg.percentDecimals : 1;
      if (explicit != null && Number.isFinite(Number(explicit))) {
        const pct = Math.abs(Number(explicit)) <= 1 ? Number(explicit) * 100 : Number(explicit);
        return `${trimFixed(pct, decimals)}%`;
      }

      const value = numericLinkValue(lk);
      const sourceLinks = lk.source && lk.source.sourceLinks ? lk.source.sourceLinks : [];
      const targetLinks = lk.target && lk.target.targetLinks ? lk.target.targetLinks : [];
      const sourceTotal = linkSum(sourceLinks);
      const targetTotal = linkSum(targetLinks);
      let denominator = 0;

      if (sourceLinks.length > 1 && sourceTotal > 0) denominator = sourceTotal;
      else if (targetLinks.length > 1 && targetTotal > 0) denominator = targetTotal;
      else denominator = sourceTotal || targetTotal;

      if (!denominator) return '';
      return `${trimFixed((value / denominator) * 100, decimals)}%`;
    }

    function linkTooltipAnchor(path, lk) {
      if (path && isFn(path.getTotalLength) && isFn(path.getPointAtLength)) {
        const length = path.getTotalLength();
        if (Number.isFinite(length) && length > 0) {
          const point = path.getPointAtLength(length / 2);
          return [point.x, point.y];
        }
      }
      return [(lk.source.x1 + lk.target.x0) / 2, (lk.y0 + lk.y1) / 2];
    }

    function showLinkTooltips(items) {
      if (!linkTooltipLayer) return;
      const rows = items
        .map((item) => Object.assign({}, item, { text: linkPercent(item.lk) }))
        .filter((item) => item.text);

      linkTooltipLayer.style('display', rows.length ? null : 'none');
      const tips = linkTooltipLayer
        .selectAll('g.sankey-link-tooltip')
        .data(rows, (item) => item.lk.index);

      tips.exit().remove();

      const entered = tips
        .enter()
        .append('g')
        .attr('class', 'sankey-link-tooltip');
      entered
        .append('rect')
        .attr('fill', tooltipCfg.background)
        .attr('fill-opacity', tooltipCfg.backgroundOpacity)
        .attr('stroke', tooltipCfg.stroke)
        .attr('stroke-opacity', tooltipCfg.strokeOpacity)
        .attr('rx', tooltipCfg.radius);
      entered
        .append('text')
        .attr('font-size', tooltipCfg.fontSize)
        .attr('font-weight', tooltipCfg.fontWeight)
        .attr('fill', tooltipCfg.textColor)
        .attr('letter-spacing', '0');

      const merged = entered.merge(tips);
      merged.each(function (item) {
        const tip = d3.select(this);
        const text = tip
          .select('text')
          .text(item.text)
          .attr('x', tooltipCfg.paddingX)
          .attr('y', 0);
        const textBox = text.node().getBBox();
        const width = textBox.width + tooltipCfg.paddingX * 2;
        const height = textBox.height + tooltipCfg.paddingY * 2;
        const textY = tooltipCfg.paddingY - textBox.y;
        const [ax, ay] = linkTooltipAnchor(item.path, item.lk);
        let x = ax - width / 2;
        let y = ay - height / 2;

        x = Math.max(8, Math.min(W - width - 8, x));
        y = Math.max(8, Math.min(H - height - 8, y));

        tip.select('rect').attr('width', width).attr('height', height);
        text.attr('y', textY);
        tip.attr('transform', `translate(${x},${y})`);
      });
    }

    function showLinkTooltip(path, lk) {
      showLinkTooltips([{ path, lk }]);
    }

    function hideLinkTooltip() {
      if (linkTooltipLayer) {
        linkTooltipLayer.style('display', 'none');
        linkTooltipLayer.selectAll('g.sankey-link-tooltip').remove();
      }
    }

    /* ---------- hover interactions ---------- */
    if (cfg.interaction && cfg.interaction.enabled) {
      const ixn = cfg.interaction;
      const linkPaths = linkLayer.selectAll('path.sankey-link');
      const nodeRects = nodeLayer.selectAll('rect.sankey-node');
      const labelItems = labelLayer.selectAll('.sankey-label');
      const linkPathByIndex = new Map();
      linkPaths.each(function (lk) {
        linkPathByIndex.set(lk.index, this);
      });

      function collectNodeContext(start) {
        const activeNodes = new Set([start]);
        const activeLinks = new Set();
        const upstreamSeen = new Set();
        const downstreamSeen = new Set();

        function upstream(node) {
          const id = keyOf(node);
          if (upstreamSeen.has(id)) return;
          upstreamSeen.add(id);
          (node.targetLinks || []).forEach((lk) => {
            activeLinks.add(lk);
            activeNodes.add(lk.source);
            upstream(lk.source);
          });
        }

        function downstream(node) {
          const id = keyOf(node);
          if (downstreamSeen.has(id)) return;
          downstreamSeen.add(id);
          (node.sourceLinks || []).forEach((lk) => {
            activeLinks.add(lk);
            activeNodes.add(lk.target);
            downstream(lk.target);
          });
        }

        upstream(start);
        downstream(start);
        return { activeNodes, activeLinks };
      }

      function applyHighlight(activeNodes, activeLinks) {
        const activeNodeIds = new Set(Array.from(activeNodes, keyOf));
        const activeLinkIndexes = new Set(Array.from(activeLinks, (lk) => lk.index));
        const dur = ixn.transitionMs;

        linkPaths.filter((lk) => activeLinkIndexes.has(lk.index)).raise();

        linkPaths
          .interrupt()
          .transition()
          .duration(dur)
          .style('stroke-opacity', (lk) =>
            activeLinkIndexes.has(lk.index) ? ixn.focusOpacity : ixn.dimOpacity
          )
          .style('filter', (lk) =>
            activeLinkIndexes.has(lk.index) ? 'drop-shadow(0 0 5px rgba(0,0,0,0.22))' : null
          );

        nodeRects
          .interrupt()
          .transition()
          .duration(dur)
          .style('opacity', (n) =>
            activeNodeIds.has(keyOf(n)) ? ixn.focusOpacity : ixn.nodeDimOpacity
          );

        labelItems
          .interrupt()
          .transition()
          .duration(dur)
          .style('opacity', (n) =>
            activeNodeIds.has(keyOf(n)) ? ixn.focusOpacity : ixn.labelDimOpacity
          );
      }

      function resetHighlight() {
        const dur = ixn.transitionMs;
        hideLinkTooltip();
        linkPaths
          .interrupt()
          .transition()
          .duration(dur)
          .style('stroke-opacity', cfg.linkOpacity)
          .style('filter', null);
        nodeRects.interrupt().transition().duration(dur).style('opacity', 1);
        labelItems.interrupt().transition().duration(dur).style('opacity', 1);
      }

      const focusNode = (event, n) => {
        const ctx = collectNodeContext(n);
        applyHighlight(ctx.activeNodes, ctx.activeLinks);
        const directLinks = [...(n.targetLinks || []), ...(n.sourceLinks || [])];
        showLinkTooltips(directLinks.map((lk) => ({ path: linkPathByIndex.get(lk.index), lk })));
      };

      const focusLink = (event, lk) => {
        applyHighlight(new Set([lk.source, lk.target]), new Set([lk]));
        showLinkTooltip(event.currentTarget, lk);
      };

      nodeRects.on('mouseenter', focusNode).on('mouseleave', resetHighlight);
      labelItems.on('mouseenter', focusNode).on('mouseleave', resetHighlight);
      linkPaths.on('mouseenter', focusLink).on('mouseleave', resetHighlight);
      svg.on('mouseleave', resetHighlight);
    }

    return svg.node();
  }

  global.SankeyEngine = { render, DEFAULTS };
})(window);
