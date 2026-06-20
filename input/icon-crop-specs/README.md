# Icon Crop Specs

Icon extraction is spec-driven so the workflow can be reused across companies.
The Python script contains the generic crop and validation logic; each JSON spec
contains only source-image-specific coordinates, color filters, and output
names.

Run:

```bash
python3 scripts/extract_icon_crops.py --spec input/icon-crop-specs/<dataset-key>.json
```

Spec conventions:

- `source` points to the full reference PNG used as the visual standard.
- `outputDir` should be `data/assets/icon-references/<company>/`.
- `validationSheetDir` should be
  `data/assets/icon-references/<company>/validation-sheets/` when visual/model
  validation artifacts should be retained.
- Each crop `key` should be stable and company-scoped, for example
  `<company>-company-wordmark` or `<company>-business-<segment>-cluster`.
- Each crop `output` should normally write to `crops/<asset-name>.png` under the
  company output directory.
- `searchBox` should tightly cover the target icon subject and exclude nearby
  labels, values, connectors, publisher marks, and adjacent icon groups.
- Include every semantically relevant company and business/segment icon cluster
  in the source image unless the task explicitly narrows the scope.
- Skip publisher/creator marks, website URLs, social badges, attribution blocks,
  "how they make money" marks, and segments with no independent business icon.
- Use `foreground` color filters only when the search area contains possible
  non-target foreground pixels.
- Use `forbiddenForeground` validation filters for colors that should never
  appear in the final crop, such as nearby label text.
- Keep crops as reference/conversion assets only; convert accepted icons to
  SVG/vector assets before using them in d3 output.

After script validation passes, do a visual/model validation with the generated
validation sheet for each crop. The sheet contains the original reference image,
the highlighted crop box, and the extracted crop. The checklist must confirm:

- complete subject structure;
- centered subject;
- no unrelated text, chart marks, connectors, watermarks, or neighboring icons.

Record the final visual/model result in
`data/assets/icon-references/<company>/model-validation.md`.
