# Input Assets

Use these folders to keep source images separate from stable app references.

- `pending/` contains newly added source images that still need processing.
- `processed/` contains processed reference images used by datasets.

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
