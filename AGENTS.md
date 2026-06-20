# AGENTS.md

Guidance for agents working in this repository.

## Goal

This project turns income-statement reference images into reusable Sankey
datasets and reusable icon/vector assets. When `input/pending/` contains new
source PNGs, process them into stable datasets, extract validated icon
reference assets when needed, and run a d3-sankey fidelity loop automatically.

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
   - `data/company-metadata.js` when the company is new
   - `index.html` dataset script registration
5. If company icons or company-internal business/segment icons appear in the
   source image, run the spec-driven icon extraction workflow before
   vectorizing or rendering them:
   - Create or update `input/icon-crop-specs/<dataset-key>.json`.
   - Use `scripts/extract_icon_crops.py` to write validated reference crops to
     `data/assets/icon-references/<company>/crops/`.
   - The crop script removes solid crop-background pixels and writes
     transparent PNGs by default. Tune `backgroundRemoval` in the spec only
     when a crop needs a different tolerance, all-matching removal, or an
     opaque output.
   - Write validation sheets to
     `data/assets/icon-references/<company>/validation-sheets/`.
   - Keep `crop-report.json` and `model-validation.md` in the company asset
     folder.
   - Extract every semantically relevant company and business/segment icon
     cluster in the source image unless the user explicitly limits the scope.
     Do not stop after one sample cluster when the image contains multiple
     business clusters.
   - Exclude source publisher watermarks, creator/account branding, website
     URLs, social badges, "how they make money" marks, attribution blocks, and
     any segment such as "Others" that has no independent business icon.
   Validate each crop before vectorizing it:
   - The icon's main structure is fully included.
   - The main structure is visually centered in the crop.
   - No unrelated text, chart marks, connector fragments, watermarks, or
     neighboring icon parts are included.
   Re-crop until those checks pass. These crops are reference/conversion
   assets only and must not be used in d3 runtime output.
6. Before authoring a new company's first dataset, gather company metadata
   (description, sector, industry, headquarters, website, ticker/exchange when
   available, and source URLs) and add it to `data/company-metadata.js`.
7. Set `meta.referenceImage` to the processed PNG with exact source dimensions.
8. Keep `input/pending/` empty except `.gitkeep` after processing.

## Dataset Authoring

Prefer the existing project patterns:

- Use `window.SankeyEngine.fromIncomeStatement(...)` for ordinary company input.
- Use explicit low-level `nodes`, `links`, `layout.nodes`, and `layout.labels`
  when pixel/layout fidelity matters.
- Preserve values and notes from the source image.
- Do not reproduce source publisher watermarks, creator/account branding,
  website URLs, social badges, "how they make money" marks, or other attribution
  blocks that are unrelated to the company income-statement semantics. Treat
  them as intentional skipped residuals in the fidelity loop, not render targets.
- Keep costs as positive numbers; the renderer formats `type: 'cost'` as
  parenthesized values.
- Register new datasets after dependencies and after any dataset they reuse.
- Keep `data/income-statements.js` as the pure financial-statement SSOT for
  every registered real dataset. It should contain comparable reported totals,
  line items, notes, currency, unit, period, and source image only. Do not put
  Sankey `nodes`, `links`, `layout`, `render`, SVG, colors, or pixel geometry
  in the SSOT.
- Keep `data/company-metadata.js` as the company-profile SSOT. It powers the
  Table view's company list and should be updated before the first dataset for
  a new company is registered.

For company and business icons:

- Treat company icons and company-internal business/segment illustrative icons
  as reusable vector assets.
- When adding icons for the first time, first crop every relevant source region
  as original-icon reference assets through `scripts/extract_icon_crops.py`.
  The script must be driven by a dataset-specific JSON spec so the workflow
  stays reusable across companies. The script should remove the solid crop
  background and emit a transparent PNG after cropping. Use each crop only after
  checking that the icon subject is complete, centered, and free of unrelated
  surrounding content. Then align it to the chart, convert it to SVG/vector
  geometry, and save the resulting vector asset for future reuse.
- For visual/model crop validation, use the generated validation sheet for each
  crop. It contains the original source image, the highlighted crop box, and
  the extracted crop. Record acceptance in
  `data/assets/icon-references/<company>/model-validation.md`.
- Run a fidelity loop for the SVG conversion itself, comparing the converted
  SVG render against the cropped/aligned reference until the match is stable
  enough.
- For later datasets, reuse existing SVG/vector icons whenever the source icon
  is materially similar. Adjust the existing SVG viewBox, transform, size,
  placement, or styling instead of creating near-duplicate assets.
- Use Lucide/vector icons from `src/icons.js` for generic semantic icons when
  they match the source intent.
- Do not put source-image crops, raster icon assets, text crops, foreground
  pixels, or overlays into d3 mode. Crops are conversion references only, never
  runtime render assets.

## Data and Asset Layout

Keep registered dataset adapters at `data/<dataset-key>.js`. The viewer,
standalone builder, SSOT verifier, and project docs rely on this stable path.

Use `data/assets/` for reusable data-adjacent assets:

```text
data/assets/
  icon-references/
    <company>/
      crops/              # validated icon reference crops
      validation-sheets/  # original image + crop-box review sheets
      crop-report.json    # script output and validation metrics
      model-validation.md # model/visual acceptance record
```

Reference crops in `data/assets/icon-references/` are not runtime assets. They
exist to support SVG/vector conversion and future reuse decisions only.

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

   In Codex desktop / restricted-sandbox environments, run `pnpm verify:d3`
   with escalated shell permissions from the start. The script must bind a
   local `127.0.0.1` server; trying it inside the sandbox first can fail with
   `listen EPERM: operation not permitted 127.0.0.1` and wastes a verification
   cycle.

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
   Do not claim a 99%+ d3 result by switching to a reference raster or source
   overlays.
   Source publisher watermarks, creator marks, website URLs, social badges, and
   unrelated attribution blocks should be skipped even if they appear in the
   reference PNG; do not add them to improve pixel metrics.

Use `pnpm verify:d3 -- <dataset-key> --keep` only when you need to inspect the
candidate PNG in `compare/`; clean it with `sh scripts/clean-compare.sh` before
finishing.

## Hard Rules

- The viewer ships only d3-sankey mode. Reference PNGs remain verification
  standards only; do not reintroduce a Reference mode into the app runtime or
  standalone HTML artifact.
- When a shareable final HTML artifact is requested, produce the standalone
  file with `pnpm build:standalone`. The artifact must be self-contained: no
  sibling CSS, JS, font, vendor, data, or reference PNG files should be needed
  at runtime.
- A direct `<img>` of the source PNG is not a render.
- Raster overlays extracted from the source image are not allowed in d3-sankey
  mode.
- Source publisher watermarks, creator/account branding, website URLs, social
  badges, and unrelated attribution blocks are not part of d3-sankey output.
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
- `node --check data/company-metadata.js` passes.
- `pnpm verify:ssot` passes.
- If icon assets were extracted:
  - `python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json` passes.
  - `data/assets/icon-references/<company>/crop-report.json` shows every crop
    with `passes: true`.
  - Validation sheets were reviewed with the original image and extracted crop
    visible together.
  - `data/assets/icon-references/<company>/model-validation.md` records the
    model/visual pass result.
  - Every semantically relevant company and business/segment icon cluster in
    the source image is either extracted or explicitly documented as skipped.
- If a standalone HTML artifact is required, `pnpm build:standalone` and
  `pnpm verify:standalone` pass.
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
- Which icon assets were extracted, and whether all relevant business clusters
  were accounted for.
- The final d3 loop metrics.
- Any known residual fidelity limits.
- Any commands that could not be run.
