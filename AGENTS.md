# AGENTS.md

Guidance for agents working in this repository.

## Goal

This project turns income-statement reference images into reusable Sankey
datasets and reusable icon/vector assets. When `input/pending/` contains new
source PNGs, process them into stable datasets, extract validated icon
reference assets when needed, and run a d3-sankey fidelity loop automatically.

## Input Workflow

1. Inspect `input/pending/` and ignore `.gitkeep`.
2. Before moving images or updating data, check whether each pending PNG has
   already been processed:
   - Run `pnpm check:pending`, or manually compare the pending PNG against
     `input/processed/` by content and candidate dataset key.
   - Treat exact matches in `input/processed/` and candidate-key collisions as
     stop conditions. Do not move, overwrite, create, update, crop, vectorize,
     or verify anything for that pending image; report the duplicate or
     collision instead.
   - If the final stable dataset key differs from the script's candidate key,
     check that final key against `input/processed/`, `data/datasets/`,
     `data/income-statements.js`, and `index.html` before continuing.
3. For each new pending PNG, choose a stable dataset key:
   - Lowercase kebab case.
   - Include company and period, for example `nvidia-q4-fy26`.
4. Move the durable source image to:
   - `input/processed/<dataset-key>.png`
5. Create or update:
   - `data/datasets/<dataset-key>.js`
   - `data/income-statements.js`
   - `data/company-metadata.js` when the company is new
   - `index.html` dataset script registration
   - Dataset, SSOT, and company metadata i18n overlays for every non-default
     language listed in `window.SANKEY_I18N.languageCodes`
6. If company icons or company-internal business/segment icons appear in the
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
   Re-crop until those checks pass. The files under
   `data/assets/icon-references/<company>/crops/` are reference/conversion
   assets only and must not be referenced directly from d3 runtime output.
   When image embedding mode is explicitly used, set `runtimeOutputDir` in the
   crop spec so the accepted crops are written as compressed runtime copies
   under `data/assets/raster-annotations/<company>/`.
7. Before authoring a new company's first dataset, gather company metadata
   (description, sector, industry, headquarters, website, ticker/exchange when
   available, and source URLs) and add it to `data/company-metadata.js`.
   Also add localized company profile fields for every non-default supported
   language, including at least display name when it differs, sector, industry,
   headquarters, fiscal year end, and description.
8. Set `meta.referenceImage` to the processed PNG with exact source dimensions.
9. Keep `input/pending/` empty except `.gitkeep` after processing.

## Dataset Authoring

Prefer the existing project patterns:

- Use `window.SankeyEngine.fromIncomeStatement(...)` for ordinary company input.
- Use explicit low-level `nodes`, `links`, `layout.nodes`, and `layout.labels`
  when pixel/layout fidelity matters.
- When first identifying label regions in a source image, keep each semantic
  label unit intact. Do not split a node's related name, value, notes, margin,
  or Y/Y text into unrelated regions just because they are visually separated;
  group them under the same node/label intent first, then split into
  `layout.labels.*.blocks` or line breaks for placement.
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
- Keep English as the canonical/default data language. For Sankey and Table
  i18n, add `i18n.<language>` overlays instead of creating parallel dataset
  files. These overlays may contain localized display strings and language-
  specific text layout adjustments, but must not change values, links, node
  geometry, financial totals, source images, or verification semantics.
- When authoring or materially changing a dataset, localize all user-visible
  dataset text for every non-default supported language: `name`, `meta.title`,
  `meta.period`, `meta.periodNote`, node labels, notes, and any explicit
  `layout.labels.*.blocks[].lines[].text` that is not `$value`. Localize the
  matching financial SSOT labels/notes and new company metadata as part of the
  same workflow.
- Do not rely on the global i18n phrase dictionary for fixed-position chart
  text. If a dataset uses explicit `layout.labels`, `annotationsSvg`, KPI
  cards, or other SVG text fragments, add dataset-specific
  `i18n.<language>.layout.labels` or localized annotation overrides for every
  visible line that changes in translation. Translating `nodes[].label` alone
  is not enough when fixed layout text is present.
- Treat acronyms, ampersands, punctuation-heavy labels, and labels with money
  suffixes as high-risk i18n text. Examples include `R&D`, `SG&A`,
  `G&A`, `D&A`, `Online Marketing & Others`, and
  `Sales & marketing ($3.1B)`. Preserve approved acronyms or provide explicit
  localized lines; do not let generic punctuation cleanup split them into
  malformed text.
- For non-default language layout tuning, check rendered SVG text bounds, not
  just source coordinates. In particular, right-side `anchor: 'start'` labels,
  left-side `anchor: 'end'` labels, titles, KPI cards, and annotations must
  remain inside `meta.referenceImage.width` and `meta.referenceImage.height`
  after localization. Prefer line breaks, local x/y adjustments, or local font
  sizing over changing values, links, node geometry, or financial semantics.

For company and business icons:

- Treat company icons and company-internal business/segment illustrative icons
  as reusable assets. Prefer vector assets when the icon can be represented
  cleanly, but image embedding mode is allowed for validated company/business
  icon clusters when the source contains brand-specific bitmap detail or the
  user asks for image embedding.
- When adding icons for the first time, first crop every relevant source region
  as original-icon reference assets through `scripts/extract_icon_crops.py`.
  The script must be driven by a dataset-specific JSON spec so the workflow
  stays reusable across companies. The script should remove the solid crop
  background and emit a transparent PNG after cropping. Use each crop only after
  checking that the icon subject is complete, centered, and free of unrelated
  surrounding content. Then either convert it to SVG/vector geometry for reuse,
  or, in image embedding mode, write a separate runtime copy through
  `runtimeOutputDir`.
- For visual/model crop validation, use the generated validation sheet for each
  crop. It contains the original source image, the highlighted crop box, and
  the extracted crop. Record acceptance in
  `data/assets/icon-references/<company>/model-validation.md`.
- Run a fidelity loop for the SVG conversion itself when vectorizing,
  comparing the converted SVG render against the cropped/aligned reference
  until the match is stable enough.
- For later datasets, reuse existing SVG/vector icons whenever the source icon
  is materially similar. Adjust the existing SVG viewBox, transform, size,
  placement, or styling instead of creating near-duplicate assets.
- Use Lucide/vector icons from `src/icons.js` for generic semantic icons when
  they match the source intent.
- In image embedding mode, runtime raster assets are allowed only when all of
  the following are true:
  - The source region is a semantically relevant company or business/segment
    icon cluster, not a value label, text-only crop, watermark, website,
    creator/account mark, attribution block, whole source image, or mismatch
    cover-up.
  - The crop passed validation and is recorded in
    `data/assets/icon-references/<company>/crop-report.json` and
    `model-validation.md`.
  - The runtime file lives under `data/assets/raster-annotations/<company>/`
    and was produced through the spec's `runtimeOutputDir`.
  - The dataset references it through `data.rasterAnnotations` and explicitly
    sets `render.allowRasterAnnotations = true`.

## Data and Asset Layout

Keep registered dataset adapters at `data/datasets/<dataset-key>.js`. The viewer,
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
  raster-annotations/
    <company>/            # compressed runtime raster annotations
```

Reference crops in `data/assets/icon-references/` are not runtime assets. They
exist to support SVG/vector conversion and future reuse decisions only.
Runtime raster annotations in `data/assets/raster-annotations/` are allowed
only for datasets that explicitly opt in with `render.allowRasterAnnotations`
and reference the files through `data.rasterAnnotations`.

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
   - `#chart > svg image` count must be `0` unless the dataset explicitly opts
     in to image embedding with `render.allowRasterAnnotations = true`.
   - When image embedding mode is enabled, every SVG `<image>` must correspond
     to an approved runtime raster annotation under
     `data/assets/raster-annotations/<company>/`; the verifier should report
     `rasterAllowed: true` and the expected image count.
   - No source-image `<img>` may be present in the candidate.
   - No ad hoc raster crops, foreground overlays, locked backgrounds, or
     extracted source-image assets may be used to cover mismatches.

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
   - approved runtime raster annotations in image embedding mode
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
  mode unless they are approved runtime raster annotations under
  `data/assets/raster-annotations/<company>/`, referenced through
  `data.rasterAnnotations`, and gated by `render.allowRasterAnnotations = true`.
- Source publisher watermarks, creator/account branding, website URLs, social
  badges, and unrelated attribution blocks are not part of d3-sankey output.
- If the candidate includes source pixels from the whole reference image,
  unapproved crops, foreground overlays, locked backgrounds, or attribution
  marks, the d3 loop result is invalid. Approved runtime raster annotations for
  semantic company/business icons are the only exception.
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
new dataset work, keep the processed PNG, `data/datasets/<dataset-key>.js`, and
`index.html` registration in the same `data(<dataset-key>)` commit. If a
dataset requires reusable renderer support, split that into a separate
`render(engine)` commit before the dataset tuning commit.

## Verification Checklist

Before final response, verify:

- `input/pending/` contains only `.gitkeep`.
- New processed image exists at `input/processed/<dataset-key>.png`.
- Dataset script is registered in `index.html`.
- `node --check data/datasets/<dataset-key>.js` passes.
- `node --check data/income-statements.js` passes.
- `node --check data/company-metadata.js` passes.
- `pnpm verify:ssot` passes.
- `pnpm verify:i18n -- --strict <dataset-key>` passes for new or materially
  changed datasets after their language overlays have been added.
- For each non-default language on new or materially changed datasets, rendered
  localized SVG text was inspected for mixed-language leftovers, malformed
  acronym/punctuation output, overlap, and out-of-canvas bounds. Use browser
  `getBBox()` or an equivalent rendered-SVG check for edge-sensitive labels;
  `verify:i18n --strict` alone does not prove fixed-layout text is visually
  valid.
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
  - If image embedding mode is used, the crop spec sets `runtimeOutputDir`,
    the accepted runtime copies exist under
    `data/assets/raster-annotations/<company>/`, and the dataset uses
    `data.rasterAnnotations` with `render.allowRasterAnnotations = true`.
- If a standalone HTML artifact is required, `pnpm build:standalone` and
  `pnpm verify:standalone` pass.
- If renderer code changed, `node --check src/sankey-engine.js` passes.
- `pnpm verify:d3 -- <dataset-key>` passes.
- d3 output purity was checked (`imageCount: 0` inside `#chart > svg`, or the
  expected runtime raster annotation count with `rasterAllowed: true`).
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
