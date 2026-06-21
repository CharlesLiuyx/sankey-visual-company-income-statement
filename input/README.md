# Input Assets

Use these folders to keep source images separate from stable app references.

- `pending/` contains newly added source images that still need processing.
- `processed/` contains processed reference images used by datasets.
- `icon-crop-specs/` contains dataset-specific JSON specs for extracting
  validated icon reference crops into `data/assets/icon-references/`.

Before starting the input workflow, run:

```bash
pnpm check:pending
```

If a pending PNG already matches an image in `processed/`, or if its candidate
dataset key would overwrite an existing processed image, stop before moving the
image or changing dataset files. If the final dataset key differs from the
script's candidate key, check the final key in `processed/`, `data/datasets/`,
`data/income-statements.js`, and `index.html` before continuing.

Run an icon crop spec with:

```bash
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json
```

The script outputs:

- crops in `data/assets/icon-references/<company>/crops/`, with solid
  crop-background pixels made transparent by default;
- validation sheets in
  `data/assets/icon-references/<company>/validation-sheets/`;
- a `crop-report.json` with geometry and validation metrics.

Processed filenames must be stable and match the dataset key:

```text
<dataset-key>.png
```

Example:

```text
salesforce-q1-fy27.png
nvidia-q1-fy27.png
```

After a processed filename is assigned, do not rename it. If the company or
period changes, create a new dataset key and a new processed file.

Icon reference crops are conversion references only. They must not be used as
runtime d3 images or overlays.
