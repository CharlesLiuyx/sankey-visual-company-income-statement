# AGENTS.md

Guidance for agents working in this repository.

## Goal

This project turns income-statement reference images into reusable Sankey
datasets. When `input/pending/` contains new source PNGs, process them into
stable datasets and run a d3-sankey fidelity loop automatically.

## Input Workflow

1. Inspect `input/pending/` and ignore `.gitkeep`.
2. For each pending PNG, choose a stable dataset key:
   - Lowercase kebab case.
   - Include company and period, for example `nvidia-q4-fy26`.
3. Move the durable source image to:
   - `input/processed/<dataset-key>.png`
4. Create or update:
   - `data/<dataset-key>.js`
   - `data/income-statements.js`
   - `index.html` dataset script registration
5. Set `meta.referenceImage` to the processed PNG with exact source dimensions.
6. Keep `input/pending/` empty except `.gitkeep` after processing.

## Dataset Authoring

Prefer the existing project patterns:

- Use `window.SankeyEngine.fromIncomeStatement(...)` for ordinary company input.
- Use explicit low-level `nodes`, `links`, `layout.nodes`, and `layout.labels`
  when pixel/layout fidelity matters.
- Preserve values and notes from the source image.
- Keep costs as positive numbers; the renderer formats `type: 'cost'` as
  parenthesized values.
- Register new datasets after dependencies and after any dataset they reuse.
- Keep `data/income-statements.js` as the pure financial-statement SSOT for
  every registered real dataset. It should contain comparable reported totals,
  line items, notes, currency, unit, period, and source image only. Do not put
  Sankey `nodes`, `links`, `layout`, `render`, SVG, colors, or pixel geometry
  in the SSOT.

For NVIDIA-like charts:

- Reuse SVG/vector brand/logo definitions where possible.
- Keep each brand logo semantically single. When tuning logo fidelity, adjust
  the existing SVG viewBox, transform, size, or placement; do not duplicate a
  second eye glyph/logo to patch a shape mismatch.
- Use Lucide/vector icons from `src/icons.js`.
- Do not crop logo, icons, text, or foreground pixels from the reference image
  into d3 mode.

## d3-Sankey Fidelity Loop

The fidelity loop compares the reference PNG against the **d3-sankey SVG
output**. The source PNG is only the standard; it must never be part of the
candidate render.

Run this loop automatically after creating or materially changing a dataset:

1. Install pinned local tooling if `node_modules/` is missing:

   ```sh
   pnpm install --frozen-lockfile
   pnpm exec playwright install chromium
   ```

2. Run the deterministic d3 verification script:

   ```sh
   pnpm verify:d3 -- <dataset-key>
   ```

   The script starts its own local static server on an ephemeral port, renders
   the dataset in a bare d3 harness with `SankeyEngine.render('#chart', data)`,
   screenshots `#chart > svg`, checks purity, computes metrics, closes the
   browser/server, and cleans `compare/`.

3. Assert output purity before scoring:
   - The candidate must be a d3/SVG render.
   - `#chart > svg image` count must be `0`.
   - No source-image `<img>` may be present in the candidate.
   - No raster crops, foreground overlays, locked backgrounds, or extracted
     source-image logo/icon assets may be used to cover mismatches.

4. Compare candidate screenshot against `input/processed/<dataset-key>.png`.
   The script reports:
   - RGB MAE
   - MAE similarity: `1 - mae / 255`
   - max channel difference
   - same-pixel ratio

5. Improve with d3-compatible changes only:
   - `data.layout.nodes`
   - `data.layout.labels`
   - `data.render` sizing, colors, opacity, and typography
   - link order / target order
   - vector logo / vector icons
   - renderer support for SVG geometry or text controls

6. Iterate until improvements plateau or the output is visually close enough.
   Do not claim a 99%+ d3 result by switching to Reference mode or source
   overlays.

Use `pnpm verify:d3 -- <dataset-key> --keep` only when you need to inspect the
candidate PNG in `compare/`; clean it with `sh scripts/clean-compare.sh` before
finishing.

## Hard Rules

- Reference mode is allowed for exact raster display, but it is not a valid
  d3-sankey fidelity-loop candidate.
- A direct `<img>` of the source PNG is not a render.
- Raster overlays extracted from the source image are not allowed in d3-sankey
  mode.
- If the candidate includes source pixels, the d3 loop result is invalid.
- `compare/` is scratch only. Do not keep loop screenshots or diffs there after
  finishing.
- Do not rename processed images after assigning a stable dataset key.

## Commit Message Convention

Follow the project convention in `docs/commit-messages.md`. Use the lightweight
Conventional Commits shape:

```text
<type>(<scope>): <summary>
```

Use an English, lowercase summary with no trailing period. Keep the first line
focused on one purpose, and put verification details in the body when useful.

Preferred project types:

- `data` for dataset files, processed input images, and `index.html` dataset
  registration.
- `render` for `src/sankey-engine.js` and visible SVG/rendering behavior.
- `verify` for `scripts/verify-d3.mjs` and d3 fidelity checks.
- `schema` for dataset format conventions.
- `docs`, `feat`, `fix`, `refactor`, `test`, or `chore` for ordinary changes.

Prefer scopes such as a dataset key (`nvidia-q1-fy27`), module (`engine`,
`icons`, `verify-d3`), or workflow area (`input`, `export`, `d3-mode`). For
new dataset work, keep the processed PNG, `data/<dataset-key>.js`, and
`index.html` registration in the same `data(<dataset-key>)` commit. If a
dataset requires reusable renderer support, split that into a separate
`render(engine)` commit before the dataset tuning commit.

## Verification Checklist

Before final response, verify:

- `input/pending/` contains only `.gitkeep`.
- New processed image exists at `input/processed/<dataset-key>.png`.
- Dataset script is registered in `index.html`.
- `node --check data/<dataset-key>.js` passes.
- `node --check data/income-statements.js` passes.
- `pnpm verify:ssot` passes.
- If renderer code changed, `node --check src/sankey-engine.js` passes.
- `pnpm verify:d3 -- <dataset-key>` passes.
- d3 output purity was checked (`imageCount: 0` inside `#chart > svg`).
- Loop metrics were computed from d3 screenshot vs source PNG.
- `compare/` was cleaned.

## Reporting

In the final response, include:

- Files changed.
- Whether pending input was cleared.
- Whether the pure data SSOT was updated.
- The final d3 loop metrics.
- Any known residual fidelity limits.
- Any commands that could not be run.
