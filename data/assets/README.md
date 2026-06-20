# Reusable Icon Reference Assets

This directory stores validated icon reference crops used before vector
conversion. These files are reusable source references, not runtime d3 assets.
Assets are grouped by company so future datasets can reuse prior references
when the icon is materially similar.

Structure:

```text
data/assets/
  icon-references/
    <company>/
      crops/              # validated icon reference crops
      validation-sheets/  # original image + crop-box review sheets
      crop-report.json    # script output and validation metrics
      model-validation.md # model/visual acceptance record
```

Use `scripts/extract_icon_crops.py` with a dataset-specific JSON spec:

```bash
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json
```

Each spec should crop only the icon subject, then validate:

- the main icon structure is fully included;
- the subject is centered in the crop;
- there is no unrelated text, connector, watermark, neighboring icon, or chart
  mark in the crop.
- every semantically relevant company and business/segment icon cluster has a
  crop, unless the task explicitly narrows the scope;
- source publisher marks, creator/account branding, website URLs, social badges,
  "how they make money" marks, and segments without an independent icon are
  skipped rather than turned into reusable assets.

When `validationSheetDir` is set, the script also writes per-crop validation
sheets with the original reference, highlighted crop box, and extracted crop.
Use those sheets for visual/model validation before accepting an asset.
Record the result in the company folder's `model-validation.md`.

After visual/model validation passes, future datasets with materially similar
icons should reuse the existing reference and the derived vector asset instead
of creating near-duplicate icon references. Add a new company directory only
when no existing company-level reference applies.
