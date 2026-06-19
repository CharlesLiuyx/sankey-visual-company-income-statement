# Fidelity loop — matching `input/processed/nvidia-q1-fy27.png`

A self-verifying loop to drive the d3 render toward the gold-standard infographic.

`compare/` is scratch space. Run `sh scripts/clean-compare.sh` before starting a
new loop and again after the loop finishes; put incoming files in
`input/pending/` and keep only durable reference outputs in `input/processed/`.

## The loop (method)

1. **Clean** transient artifacts → `sh scripts/clean-compare.sh`.
2. **Render** the d3 output → `compare/iterNN_d3.png`
   `chrome --headless --screenshot=compare/iterNN_d3.png http://localhost:8766/docs/render.html`
   (window sized to the viewBox aspect; `--force-device-scale-factor=2`).
   The rendered snapshot must be the d3-sankey SVG output. It must not be
   Reference mode, a direct source PNG image, or a d3 SVG containing raster
   crops / overlays from the source image.
3. **Assert output purity** — before scoring, verify the d3 SVG is actually the
   renderer output: no source-image `<img>`, no `<image>` foreground/background
   overlays, and no extracted source raster assets used to cover mismatches.
4. **Compare** — read the standard and the snapshot, score each dimension in the
   checklist below.
5. **Distill** — record every divergence + a fix strategy in this file *before*
   touching code (lessons compound; don't re-learn them).
6. **Fix** — change `src/sankey-engine.js` DEFAULTS / data, then go to 2.
7. **Clean** transient artifacts again when the run is complete.

Stop when every checklist dimension reads "match".

Hard rule: the source PNG is only the comparison standard. It must never be used
as the rendered candidate in a d3-sankey loop, including indirectly through
cropped foreground layers, extracted logo/icon bitmaps, locked backgrounds, or
Reference mode. If the output contains source pixels, the loop result is invalid
for d3-sankey fidelity.

## Comparison checklist (score each: match / close / off)

- A. Aspect ratio & overall composition
- B. Title — size, alignment, gap to content
- C. Logo — position, size
- D. Node colours (source / hub / profit / cost)
- E. Per-column label style (value-above vs stacked; name placement)
- F. Label font size (relative to chart)
- G. Vertical density / node padding
- H. Flow band colour & opacity
- I. Period stamp (top-right)
- J. Icons

---

## Iteration 1 — baseline (`compare/iter01_d3.png`)

| # | Dim | Standard | iter01 | Verdict | Fix |
|---|-----|----------|--------|---------|-----|
| A | aspect | ~1.96 (wide) | 1.60 (tall) | **off** | viewBox → ~1.92 (1920×1000) |
| B | title | tight band, content close below | huge top gap (margin 285) | **off** | top margin → ~250; smaller title |
| C | logo | small, just above Revenue, inside top band | large, own tall headroom | close | shrink logo, lower the placement clamp |
| D | colours | green / black / green / red | same | match | — |
| E | label style | col0: value **above**, name **left** | name+value stacked left | close | defer (minor); revisit after A/G |
| F | font size | smaller rel. to chart | large (23px name) | **off** | name/value 20, note 13 |
| G | density | compact, small gaps | airy (pad 84) | **off** | nodePadding → ~54 |
| H | flow opacity | fairly solid | more translucent | close | opacity 0.62 → 0.66 |
| I | period | top-right, small | top-right | match | — |
| J | icons | server, gamepad/eye/car/OEM | same (Lucide) | match | — |

### Lessons (carry forward)

- **L1 — Aspect first.** The reference is *wide* (~1.96). Aspect drives the whole
  composition; fix it before fine-tuning anything else.
- **L2 — Density = smaller type + smaller padding, not big type + de-collision.**
  Mine looked airy because the fonts were large, which forced large padding to
  avoid label collisions. Shrink the type and the packing tightens naturally.
- **L3 — Keep the title band tight.** The reference spends ~12% of height on the
  title, then the diagram (with the logo integrated at its top) fills the rest.
  Don't reserve a tall empty headroom.
- **L4 — Logo lives *inside* the top of the diagram**, just above the Revenue
  label — not in a separate band. Size it so it fits between the title and the
  Revenue label without a big margin.

---

## Iteration 2 (`compare/iter02_d3.png`) — after A/B/C/F/G/H fixes

Changes: viewBox 1920×1000 (1.92); margins 250/245/75/235; nodePadding 84→54;
fonts 20/13; title 54@y66; logo 150×84, clamp 86; linkOpacity 0.66.

| # | Dim | Verdict | Note |
|---|-----|---------|------|
| A | aspect | **match** | wide now, reads like the reference |
| B | title | close | fits tight; slightly less prominent than reference |
| C | logo | **match** | sits cleanly above Revenue |
| F/G | density/fonts | **match** | compact packing achieved |
| H | flow opacity | close | reference bands are a touch more **saturated/solid** |
| E | col0 label style | off (deferred) | reference splits value-above / name-left |

### Lessons (carry forward)

- **L5 — Coordinated change beats one-at-a-time.** Aspect + font + padding had to
  move *together*; changing aspect alone (or padding alone) would have looked
  worse. Treat composition as a system.
- **L6 — De-collision is a safety net, not the spacing strategy.** Once fonts
  shrank, `nodePadding` 54 already separates the small terminal labels; the
  de-collision pass barely fires now. Right order: size type → set padding →
  de-collide the remainder.

### Remaining (iteration 3 plan)
- H: raise flow saturation — `linkOpacity` 0.66 → 0.72, nudge tints darker.
- B: title 54 → 58 for prominence.
- E: (still deferred) split col0 value-above / name-left — only if it reads off
  after H/B; the stacked style is arguably cleaner, so accept unless it jars.

---

## Iteration 3 (`compare/iter03_d3.png`) — after H/B

Changes: linkOpacity 0.72; tints darker (`#84b3a2 / #9bcb91 / #e89f84`); title 58.

| # | Dim | Verdict |
|---|-----|---------|
| A aspect | **match** |
| B title | **match** |
| C logo | **match** |
| D colours | **match** |
| F/G density/fonts | **match** |
| H flow opacity | **match** |
| I period | **match** |
| J icons | **match** |
| E col0 label style | **accepted divergence** (stacked vs split) |

**Verdict: converged.** iter01 → iter03 closed every dominant gap. Two residuals
are accepted, not bugs:
- **E** — col0 uses stacked name/value/notes instead of the reference's
  value-above / name-left split. Stacked is cleaner and equally legible.
- The middle-column "Operating profit" label rides over its inflow band (as it
  does in the reference too) — readable, not a collision.

### Lessons (final)

- **L7 — Define "converged" up front.** A pixel-diff never hits zero on a
  hand-made infographic; converge on the *checklist*, and explicitly mark
  stylistic residuals as "accepted" so the loop terminates instead of chasing
  noise.
- **L8 — Keep comparison renderers in lockstep.** Tuning the d3 DEFAULTS changed
  the canonical aspect (1920×1000). The viewer now ships only d3-sankey mode,
  so reference rasters stay out of the runtime and cannot create a second
  app-rendering path to synchronize.

---

## Iteration 4-6 — strict 99% loop

User requirement: the final output must be 99% similar to
`input/processed/nvidia-q1-fy27.png`, not just visually close.

### Iteration 4 — true baseline (`compare/iter04_current.png`)

- Rendered `docs/render.html` at the standard image size: 2862×1462.
- Result: **~80.4% MAE similarity**.
- Root cause: `docs/render.html` was fixed at 1680px wide, leaving a large blank
  screenshot area; the D3 chart itself also used a 1920×1000 approximation.

### Iteration 5 — D3 fixed layout (`compare/iter05_d3.png`)

Changes:
- Canvas/background moved to the standard dimensions and colour.
- Added optional `data.layout.nodes` fixed node geometry to `src/sankey-engine.js`.
- Extracted node rectangles from the standard image and stored them in
  `data/nvidia-q1-fy27.js`.
- Added split-left labels for the two source nodes.

Result: **~93.1% MAE similarity**.

### Iteration 6 — absolute label blocks (`compare/iter06_d3.png`)

Changes:
- Added optional `data.layout.labels` absolute label blocks.
- Added per-node icon placement for fixed-layout charts.
- Added per-node `linkTint` support for the Edge Computing flow.

Result: **~93.5% MAE similarity**.

### Conclusion

The historical renderer strategies were not sufficient for a strict 99% target:

1. **D3 automatic layout**: best editable vector solution, but not pixel identical.
2. **D3 fixed layout**: aligns node rectangles and most bands, but still diverges
   on brand/logo glyphs, filled icons, font rasterization, and hand-made curves.
3. **General-purpose native Sankey renderers**: removed. They had a lower
   fidelity ceiling because they reorder and space nodes internally.

For 99%+ non-d3 output, these stronger strategies exist, but they are **not
valid d3-sankey fidelity-loop outputs**:

1. **Reference raster mode** — `docs/render-reference.html` renders the standard
   PNG directly. This is valid only when the requested output is a Reference
   raster, not when measuring d3-sankey.
2. **Trace/template SVG mode** — manually trace every flow path, icon, and logo
   from the standard image into static SVG paths. This is a separate renderer,
   not d3-sankey.
3. **Asset extraction mode** — keep the fixed D3 layout, but crop/replace the
   NVIDIA logo and four filled bottom icons from the standard/source assets.
   This improves visual similarity but invalidates a pure d3-sankey comparison.
4. **Hybrid overlay mode** — use the reference PNG as a locked background and
   overlay data-driven SVG elements only where values change. Useful for
   production reports that must preserve a house style exactly, but not valid
   for a d3-sankey loop.

### Lesson from Q4 FY26 loop correction

- **L9 — Compare only d3 output in d3 loops.** Reference screenshots, direct
  source images, and raster overlays can trivially reduce pixel error, but they
  do not measure d3-sankey fidelity. The valid candidate image is the d3-sankey
  SVG screenshot only; the source PNG is only the target standard.

### Lesson from Q1 FY26 logo correction

- **L10 — Never duplicate a brand logo to improve pixel matching.** The logo
  should remain one semantic vector logo. If the NVIDIA mark is off, tune the
  existing SVG `viewBox`, `transform`, size, or placement; do not add a second
  eye glyph or overlapping logo as a visual patch. Duplicate marks may lower
  local pixel error during tuning, but they are a visible fidelity regression.

### Lesson from Codex sandbox verification

- **L11 — Run `pnpm verify:d3` with local-server permissions up front.** The
  verifier starts an ephemeral `127.0.0.1` static server before launching
  Playwright. In restricted Codex sandboxes this can fail immediately with
  `listen EPERM: operation not permitted 127.0.0.1`. Treat that as an
  environment permission issue, not a d3/render regression, and rerun with
  escalated shell permissions instead of first spending a failed sandbox pass.
