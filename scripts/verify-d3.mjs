#!/usr/bin/env node
import { createServer } from 'node:http';
import { copyFile, cp, mkdir, readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { chromium } from 'playwright';
import { datasetScriptForKey, dataScriptsFromIndex, renderHarnessScripts } from './script-sources.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const compareDir = path.join(rootDir, 'compare');
const outputCompareDir = path.join(rootDir, 'output', 'compare');

function usage() {
  console.error('Usage: pnpm verify:d3 -- <dataset-key> [--keep] [--language <code>]');
}

function parseArgs(argv) {
  const args = argv.slice(2);
  let keep = false;
  let language = 'en';
  const positional = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--') continue;
    if (arg === '--keep') {
      keep = true;
      continue;
    }
    if (arg === '--language' || arg === '--lang') {
      language = args[index + 1];
      index += 1;
      if (!language || language.startsWith('--')) {
        usage();
        process.exit(2);
      }
      continue;
    }
    positional.push(arg);
  }

  const datasetKey = positional[0];
  if (!datasetKey || positional.length > 1) {
    usage();
    process.exit(2);
  }
  return { datasetKey, keep, language };
}

async function cleanCompare() {
  if (!existsSync(compareDir)) return;
  const entries = await readdir(compareDir, { withFileTypes: true });
  await Promise.all(
    entries
      .filter((entry) => entry.name !== '.gitkeep')
      .map((entry) => rm(path.join(compareDir, entry.name), { recursive: true, force: true }))
  );
  await writeFile(path.join(compareDir, '.gitkeep'), '');
}

function archiveTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

async function filesEqual(leftPath, rightPath) {
  if (!existsSync(rightPath)) return false;
  const [left, right] = await Promise.all([readFile(leftPath), readFile(rightPath)]);
  return left.equals(right);
}

async function copyFileIfDifferent(sourcePath, outputPath) {
  if (await filesEqual(sourcePath, outputPath)) return false;
  await copyFile(sourcePath, outputPath);
  return true;
}

async function archiveCompare(datasetKey) {
  const datasetCompareDir = path.join(outputCompareDir, datasetKey);
  const archiveDir = path.join(datasetCompareDir, archiveTimestamp());
  const referenceName = `${datasetKey}-reference.png`;
  await mkdir(archiveDir, { recursive: true });
  const entries = await readdir(compareDir, { withFileTypes: true });
  const archived = [];
  let reference = null;
  let referenceChanged = false;

  for (const entry of entries) {
    if (entry.name === '.gitkeep') continue;
    const sourcePath = path.join(compareDir, entry.name);

    if (!entry.isDirectory() && entry.name === referenceName) {
      const outputPath = path.join(datasetCompareDir, entry.name);
      referenceChanged = await copyFileIfDifferent(sourcePath, outputPath);
      reference = path.relative(rootDir, outputPath);
      continue;
    }

    const outputPath = path.join(archiveDir, entry.name);

    if (entry.isDirectory()) {
      await cp(sourcePath, outputPath, { recursive: true });
    } else {
      await copyFile(sourcePath, outputPath);
    }

    archived.push(path.relative(rootDir, outputPath));
  }

  return {
    dir: path.relative(rootDir, archiveDir),
    files: archived,
    reference,
    referenceChanged,
  };
}

function contentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return (
    {
      '.html': 'text/html; charset=utf-8',
      '.js': 'text/javascript; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.png': 'image/png',
      '.svg': 'image/svg+xml',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2',
      '.json': 'application/json; charset=utf-8',
    }[ext] || 'application/octet-stream'
  );
}

async function startStaticServer() {
  const server = createServer(async (req, res) => {
    try {
      const requestUrl = new URL(req.url || '/', 'http://127.0.0.1');
      const pathname = decodeURIComponent(requestUrl.pathname);
      const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
      const filePath = path.resolve(rootDir, relativePath);
      if (!filePath.startsWith(rootDir + path.sep) && filePath !== rootDir) {
        res.writeHead(403).end('Forbidden');
        return;
      }
      const info = await stat(filePath);
      if (!info.isFile()) {
        res.writeHead(404).end('Not found');
        return;
      }
      const body = await readFile(filePath);
      res.writeHead(200, { 'content-type': contentType(filePath), 'cache-control': 'no-store' });
      res.end(body);
    } catch {
      res.writeHead(404).end('Not found');
    }
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });

  const address = server.address();
  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    close: () => new Promise((resolve, reject) => server.close((err) => (err ? reject(err) : resolve()))),
  };
}

function toUrl(baseUrl, src) {
  return new URL(src, `${baseUrl}/`).toString();
}

function localFontFaces() {
  return [400, 500, 600, 700, 800]
    .map((weight) => {
      const fontPath = path.join(
        rootDir,
        'node_modules',
        '@fontsource',
        'montserrat',
        'files',
        `montserrat-latin-${weight}-normal.woff2`
      );
      if (!existsSync(fontPath)) {
        throw new Error(`Missing local Montserrat font file: ${path.relative(rootDir, fontPath)}`);
      }
      const fontData = readFileSync(fontPath).toString('base64');
      return `@font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: ${weight};
      src: url('data:font/woff2;base64,${fontData}') format('woff2');
    }`;
    })
    .join('\n');
}

function harnessHtml(baseUrl, scripts) {
  const scriptTags = scripts
    .map((src) => `<script src="${toUrl(baseUrl, src)}"></script>`)
    .join('\n');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <base href="${baseUrl}/" />
  <style>
    ${localFontFaces()}
    html, body { margin: 0; padding: 0; background: #efefef; }
    #chart { margin: 0; padding: 0; overflow: hidden; }
    #chart svg { display: block; }
  </style>
</head>
<body>
  <div id="chart"></div>
  ${scriptTags}
</body>
</html>`;
}

function readPng(filePath) {
  return PNG.sync.read(readFileSync(filePath));
}

function emptyDiffBoundingBox() {
  return null;
}

function formatDiffBoundingBox(box) {
  return box ? `${box.x},${box.y},${box.width},${box.height}` : 'none';
}

function clippedBox(raw, width, height) {
  const rawX = Number(raw.x) || 0;
  const rawY = Number(raw.y) || 0;
  const rawWidth = Number(raw.width) || 0;
  const rawHeight = Number(raw.height) || 0;
  const x = Math.max(0, Math.floor(rawX));
  const y = Math.max(0, Math.floor(rawY));
  const right = Math.min(width, Math.ceil(rawX + rawWidth));
  const bottom = Math.min(height, Math.ceil(rawY + rawHeight));
  return {
    x,
    y,
    width: Math.max(0, right - x),
    height: Math.max(0, bottom - y),
  };
}

function boxMetrics(reference, candidate, rawBox) {
  const box = clippedBox(rawBox, reference.width, reference.height);
  const pixels = box.width * box.height;
  if (!pixels) {
    return {
      x: box.x,
      y: box.y,
      width: box.width,
      height: box.height,
      mae: 0,
      similarity: 1,
      maxChannelDiff: 0,
      samePixelRatio: 1,
      changedPixelRatio: 0,
      diffBoundingBox: emptyDiffBoundingBox(),
    };
  }

  let total = 0;
  let same = 0;
  let max = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -1;
  let maxY = -1;

  for (let y = box.y; y < box.y + box.height; y += 1) {
    for (let x = box.x; x < box.x + box.width; x += 1) {
      const i = (y * reference.width + x) * 4;
      const dr = Math.abs(reference.data[i] - candidate.data[i]);
      const dg = Math.abs(reference.data[i + 1] - candidate.data[i + 1]);
      const db = Math.abs(reference.data[i + 2] - candidate.data[i + 2]);
      total += dr + dg + db;
      if (dr === 0 && dg === 0 && db === 0) {
        same += 1;
      } else {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
      max = Math.max(max, dr, dg, db);
    }
  }

  const mae = total / (pixels * 3);
  return {
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    mae,
    similarity: 1 - mae / 255,
    maxChannelDiff: max,
    samePixelRatio: same / pixels,
    changedPixelRatio: 1 - same / pixels,
    diffBoundingBox:
      maxX >= 0
        ? { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 }
        : emptyDiffBoundingBox(),
  };
}

async function pngMetrics(referencePath, candidatePath, diffPath = null, regions = []) {
  const reference = readPng(referencePath);
  const candidate = readPng(candidatePath);

  if (reference.width !== candidate.width || reference.height !== candidate.height) {
    throw new Error(
      `PNG size mismatch: reference ${reference.width}x${reference.height}, candidate ${candidate.width}x${candidate.height}`
    );
  }

  let total = 0;
  let same = 0;
  let max = 0;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -1;
  let maxY = -1;
  const pixels = reference.width * reference.height;
  const diff = diffPath ? new PNG({ width: reference.width, height: reference.height }) : null;
  for (let i = 0; i < reference.data.length; i += 4) {
    const dr = Math.abs(reference.data[i] - candidate.data[i]);
    const dg = Math.abs(reference.data[i + 1] - candidate.data[i + 1]);
    const db = Math.abs(reference.data[i + 2] - candidate.data[i + 2]);
    total += dr + dg + db;
    if (dr === 0 && dg === 0 && db === 0) {
      same += 1;
    } else {
      const pixelIndex = i / 4;
      const x = pixelIndex % reference.width;
      const y = Math.floor(pixelIndex / reference.width);
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
    max = Math.max(max, dr, dg, db);
    if (diff) {
      diff.data[i] = Math.min(255, dr * 4);
      diff.data[i + 1] = Math.min(255, dg * 4);
      diff.data[i + 2] = Math.min(255, db * 4);
      diff.data[i + 3] = 255;
    }
  }
  if (diff) {
    await writeFile(diffPath, PNG.sync.write(diff));
  }
  const mae = total / (pixels * 3);
  const full = {
    width: reference.width,
    height: reference.height,
    mae,
    similarity: 1 - mae / 255,
    maxChannelDiff: max,
    samePixelRatio: same / pixels,
    changedPixelRatio: 1 - same / pixels,
    diffBoundingBox:
      maxX >= 0
        ? { x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1 }
        : emptyDiffBoundingBox(),
    rgbMae: mae,
    maeSimilarity: 1 - mae / 255,
    maxChannelDifference: max,
  };
  const regionMetrics = regions.map((region) => ({
    region: region.region,
    note: region.note || '',
    ...boxMetrics(reference, candidate, region),
  }));
  return { full, regions: regionMetrics };
}

function formatPx(value) {
  return Number.isFinite(value) ? `${value.toFixed(1)}px` : 'n/a';
}

function rasterHrefPath(href) {
  return String(href || '').split(/[?#]/)[0];
}

function isApprovedRasterHref(href) {
  const clean = rasterHrefPath(href);
  return /^data\/assets\/raster-annotations\/[^?#]+\.(?:png|jpe?g|webp|svg)$/i.test(clean);
}

function assertRasterFilesExist(hrefs) {
  const missing = hrefs
    .map(rasterHrefPath)
    .filter((href) => isApprovedRasterHref(href) && !existsSync(path.join(rootDir, href)));
  if (missing.length) {
    throw new Error(`Missing runtime raster annotation file(s): ${missing.join(', ')}`);
  }
}

function assertPurity(purity) {
  const failures = [];
  if (purity.chartImgCount !== 0) {
    failures.push(`chartImgCount=${purity.chartImgCount}`);
  }
  if (purity.forbiddenElements.length) {
    failures.push(`forbiddenElements=${purity.forbiddenElements.join(',')}`);
  }
  if (purity.backgroundImageElements.length) {
    failures.push(`backgroundImageElements=${purity.backgroundImageElements.slice(0, 5).join(',')}`);
  }

  const expected = purity.expectedRasterHrefs.map(rasterHrefPath);
  const actual = purity.imageHrefs.map(rasterHrefPath);
  if (actual.length && !purity.rasterAllowed) {
    failures.push(`imageCount=${actual.length} but rasterAllowed=false`);
  }
  if (actual.length !== expected.length) {
    failures.push(`imageCount=${actual.length} expectedRasterAnnotations=${expected.length}`);
  }
  const unexpected = actual.filter((href) => !expected.includes(href));
  const missing = expected.filter((href) => !actual.includes(href));
  const unapproved = actual.filter((href) => !isApprovedRasterHref(href));
  if (unexpected.length) failures.push(`unexpectedRasterHrefs=${unexpected.join(',')}`);
  if (missing.length) failures.push(`missingRasterHrefs=${missing.join(',')}`);
  if (unapproved.length) failures.push(`unapprovedRasterHrefs=${unapproved.join(',')}`);

  if (failures.length) {
    throw new Error(`Purity failed: ${failures.join('; ')}`);
  }
  assertRasterFilesExist(actual);
}

function logLabelLayoutAudit(audit) {
  console.log(
    `label-node layout audit: verticalStacks=${audit.verticalStacks.length} adjacentLabelGaps=${audit.adjacentLabelGaps.length} horizontalSideLabels=${audit.horizontalSideLabels.length} horizontalViolations=${audit.horizontalViolations.length} rule=vertical centerDelta=0px/gap=5px; horizontal overlap forbidden (docs/fidelity-loop-rules.md)`
  );

  const maxRows = 12;
  audit.verticalStacks.slice(0, maxRows).forEach((item) => {
    console.log(
      `  vertical ${item.node}#${item.labelIndex} ${item.direction}: centerDelta=${formatPx(item.centerDelta)} edgeGap=${formatPx(item.gap)}`
    );
  });
  if (audit.verticalStacks.length > maxRows) {
    console.log(`  vertical ... ${audit.verticalStacks.length - maxRows} more`);
  }

  audit.adjacentLabelGaps.slice(0, maxRows).forEach((item) => {
    console.log(
      `  label-gap ${item.node}#${item.upperLabelIndex}->#${item.lowerLabelIndex}: gap=${formatPx(item.gap)}`
    );
  });
  if (audit.adjacentLabelGaps.length > maxRows) {
    console.log(`  label-gap ... ${audit.adjacentLabelGaps.length - maxRows} more`);
  }

  audit.horizontalSideLabels.slice(0, maxRows).forEach((item) => {
    console.log(
      `  horizontal ${item.node}#${item.labelIndex} ${item.side}: edgeGap=${formatPx(item.gap)} overlap=${formatPx(item.overlap)} verticalOverlap=${formatPx(item.verticalOverlap)}`
    );
  });
  if (audit.horizontalSideLabels.length > maxRows) {
    console.log(`  horizontal ... ${audit.horizontalSideLabels.length - maxRows} more`);
  }
}

async function main() {
  const { datasetKey, keep, language } = parseArgs(process.argv);
  const datasetScript = datasetScriptForKey(datasetKey);
  const datasetPath = path.join(rootDir, datasetScript);
  if (!existsSync(datasetPath)) {
    throw new Error(`Missing dataset file: ${datasetScript}`);
  }

  const indexHtml = await readFile(path.join(rootDir, 'index.html'), 'utf8');
  const scripts = renderHarnessScripts(indexHtml);
  const datasetScripts = dataScriptsFromIndex(indexHtml);
  if (!datasetScripts.includes(datasetScript)) {
    throw new Error(`Dataset script is not registered in index.html: ${datasetScript}`);
  }

  await cleanCompare();

  const server = await startStaticServer();
  let browser;
  const referenceComparePath = path.join(compareDir, `${datasetKey}-reference.png`);
  const localizedSuffix = language && language !== 'en' ? `-${language}` : '';
  const candidatePath = path.join(compareDir, `${datasetKey}${localizedSuffix}-d3.png`);
  const diffPath = path.join(compareDir, `${datasetKey}${localizedSuffix}-pixel-diff-x4.png`);
  const metricsPath = path.join(compareDir, `${datasetKey}${localizedSuffix}-metrics.json`);

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.setContent(harnessHtml(server.baseUrl, scripts), { waitUntil: 'load' });

    const meta = await page.evaluate(({ key, requestedLanguage }) => {
      const dataset = window.DATASETS?.find((item) => item.key === key);
      if (!dataset) throw new Error(`Dataset not found: ${key}`);
      const i18n = window.SANKEY_I18N;
      const language = i18n?.normalizeLanguage ? i18n.normalizeLanguage(requestedLanguage) : requestedLanguage || 'en';
      const renderDataset =
        language && language !== 'en'
          ? i18n?.localizeDataset?.(dataset, language)
          : dataset;
      if (!renderDataset) throw new Error(`Dataset localization failed: ${key}, language=${language}`);
      const ref = renderDataset.meta?.referenceImage;
      if (!ref || typeof ref !== 'object' || !ref.src || !ref.width || !ref.height) {
        throw new Error(`Dataset ${key} must define meta.referenceImage { src, width, height }`);
      }
      return { referenceSrc: ref.src, width: ref.width, height: ref.height, language };
    }, { key: datasetKey, requestedLanguage: language });

    await page.setViewportSize({ width: meta.width, height: meta.height });
    const purity = await page.evaluate(async ({ key, requestedLanguage }) => {
      const dataset = window.DATASETS.find((item) => item.key === key);
      const i18n = window.SANKEY_I18N;
      const language = i18n?.normalizeLanguage ? i18n.normalizeLanguage(requestedLanguage) : requestedLanguage || 'en';
      const renderDataset =
        language && language !== 'en'
          ? i18n?.localizeDataset?.(dataset, language)
          : dataset;
      if (!renderDataset) throw new Error(`Dataset localization failed: ${key}, language=${language}`);
      const chart = document.querySelector('#chart');
      chart.style.width = `${renderDataset.meta.referenceImage.width}px`;
      chart.style.height = `${renderDataset.meta.referenceImage.height}px`;
      window.SankeyEngine.render('#chart', renderDataset);
      const svg = document.querySelector('#chart > svg');
      if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');
      svg.setAttribute('width', String(renderDataset.meta.referenceImage.width));
      svg.setAttribute('height', String(renderDataset.meta.referenceImage.height));
      svg.style.width = `${renderDataset.meta.referenceImage.width}px`;
      svg.style.height = `${renderDataset.meta.referenceImage.height}px`;
      const images = Array.from(svg.querySelectorAll('image'));
      const imageHrefs = images.map(
        (image) =>
          image.getAttribute('href') ||
          image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') ||
          image.href?.baseVal ||
          ''
      );
      const expectedRasterHrefs = (Array.isArray(renderDataset.rasterAnnotations)
        ? renderDataset.rasterAnnotations
        : renderDataset.rasterAnnotations
          ? [renderDataset.rasterAnnotations]
          : []
      )
        .filter(Boolean)
        .map((item) => item.href || item.src || '')
        .filter(Boolean);
      const forbiddenElements = Array.from(
        chart.querySelectorAll('canvas,picture,video,iframe,object,embed,foreignObject')
      ).map((element) => element.tagName.toLowerCase());
      const backgroundImageElements = Array.from(chart.querySelectorAll('*'))
        .filter((element) => {
          const value = window.getComputedStyle(element).backgroundImage;
          return value && value !== 'none';
        })
        .map((element) => {
          const tag = element.tagName.toLowerCase();
          const cls = element.getAttribute('class');
          const id = element.getAttribute('id');
          return `${tag}${id ? `#${id}` : ''}${cls ? `.${String(cls).replace(/\s+/g, '.')}` : ''}`;
        });
      await Promise.all(
        imageHrefs
          .filter(Boolean)
          .map(
            (href) =>
              new Promise((resolve, reject) => {
                const probe = new Image();
                probe.onload = resolve;
                probe.onerror = () => reject(new Error(`Failed to load SVG image: ${href}`));
                probe.src = href;
              })
          )
      );
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      return {
        imageCount: images.length,
        imageHrefs,
        expectedRasterHrefs,
        rasterAllowed: renderDataset.render?.allowRasterAnnotations === true,
        chartImgCount: document.querySelectorAll('#chart img').length,
        forbiddenElements,
        backgroundImageElements,
        viewBox: svg.getAttribute('viewBox'),
        width: Math.round(svg.getBoundingClientRect().width),
        height: Math.round(svg.getBoundingClientRect().height),
      };
    }, { key: datasetKey, requestedLanguage: language });
    const fontStatus = await page.evaluate(() =>
      document.fonts.ready.then(() => ({
        montserratLoaded:
          document.fonts.check('16px Montserrat') || document.fonts.check('16px "Montserrat"'),
        faces: Array.from(document.fonts).map((font) => ({
          family: font.family,
          weight: font.weight,
          status: font.status,
        })),
      }))
    );
    if (!fontStatus.montserratLoaded) {
      throw new Error(
        `Local Montserrat font did not load; refusing to score fallback-font render: ${JSON.stringify(fontStatus)}`
      );
    }

    const labelLayoutAudit = await page.evaluate(() => {
      const svg = document.querySelector('#chart > svg');
      if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');

      const round = (value) => Math.round(value * 10) / 10;
      const boxFor = (element) => {
        const box = element.getBBox();
        return {
          x: round(box.x),
          y: round(box.y),
          width: round(box.width),
          height: round(box.height),
          left: round(box.x),
          top: round(box.y),
          right: round(box.x + box.width),
          bottom: round(box.y + box.height),
          centerX: round(box.x + box.width / 2),
          centerY: round(box.y + box.height / 2),
        };
      };

      const nodeBoxes = new Map(
        Array.from(svg.querySelectorAll('.sankey-node[data-node]')).map((element) => {
          const id = element.getAttribute('data-node');
          return [id, boxFor(element)];
        })
      );

      const labelBoxes = Array.from(svg.querySelectorAll('.sankey-label[data-node]:not(.sankey-icon)'))
        .map((element, index) => ({
          node: element.getAttribute('data-node'),
          labelIndex: index,
          box: boxFor(element),
        }))
        .filter((item) => item.node && item.box.width > 0 && item.box.height > 0);

      const horizontalOverlap = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left);
      const verticalOverlap = (a, b) => Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
      const verticalStacks = [];
      const horizontalSideLabels = [];
      const byNode = new Map();

      labelBoxes.forEach((label) => {
        const node = nodeBoxes.get(label.node);
        if (!node) return;

        if (!byNode.has(label.node)) byNode.set(label.node, []);
        byNode.get(label.node).push(label);

        const above = label.box.bottom <= node.top;
        const below = label.box.top >= node.bottom;
        const stacked = (above || below) && horizontalOverlap(label.box, node) > 0;
        const verticalOverlapPx = verticalOverlap(label.box, node);
        const sideAdjacent = label.box.centerX < node.left || label.box.centerX > node.right;
        if (verticalOverlapPx > 0 && sideAdjacent) {
          const overlap = horizontalOverlap(label.box, node);
          if (label.box.right <= node.left) {
            horizontalSideLabels.push({
              node: label.node,
              labelIndex: label.labelIndex,
              side: 'left-of-node',
              gap: round(node.left - label.box.right),
              overlap: 0,
              verticalOverlap: round(verticalOverlapPx),
            });
          } else if (label.box.left >= node.right) {
            horizontalSideLabels.push({
              node: label.node,
              labelIndex: label.labelIndex,
              side: 'right-of-node',
              gap: round(label.box.left - node.right),
              overlap: 0,
              verticalOverlap: round(verticalOverlapPx),
            });
          } else if (overlap > 0) {
            horizontalSideLabels.push({
              node: label.node,
              labelIndex: label.labelIndex,
              side: label.box.centerX < node.centerX ? 'left-overlap' : 'right-overlap',
              gap: round(-overlap),
              overlap: round(overlap),
              verticalOverlap: round(verticalOverlapPx),
            });
          }
        }

        if (!stacked) return;

        verticalStacks.push({
          node: label.node,
          labelIndex: label.labelIndex,
          direction: above ? 'above-node' : 'below-node',
          centerDelta: round(Math.abs(label.box.centerX - node.centerX)),
          gap: round(above ? node.top - label.box.bottom : label.box.top - node.bottom),
        });
      });

      const adjacentLabelGaps = [];
      byNode.forEach((labels, node) => {
        const sorted = labels.slice().sort((a, b) => a.box.top - b.box.top);
        for (let i = 1; i < sorted.length; i += 1) {
          const upper = sorted[i - 1];
          const lower = sorted[i];
          const gap = round(lower.box.top - upper.box.bottom);
          if (gap < 0 || horizontalOverlap(upper.box, lower.box) <= 0) continue;
          adjacentLabelGaps.push({
            node,
            upperLabelIndex: upper.labelIndex,
            lowerLabelIndex: lower.labelIndex,
            gap,
          });
        }
      });

      const horizontalViolations = horizontalSideLabels.filter((item) => item.overlap > 0);

      return { verticalStacks, adjacentLabelGaps, horizontalSideLabels, horizontalViolations };
    });

    const renderedRegions = await page.evaluate(() => {
      const svg = document.querySelector('#chart > svg');
      if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');

      const svgBox = svg.getBoundingClientRect();
      const width = Math.round(svgBox.width);
      const height = Math.round(svgBox.height);
      const regions = [];
      const seen = new Set();
      const round = (value) => Math.round(value * 10) / 10;
      const addBox = (region, element, note = '') => {
        if (!element || typeof element.getBBox !== 'function') return;
        let box;
        try {
          box = element.getBBox();
        } catch {
          return;
        }
        if (!box || box.width <= 0 || box.height <= 0) return;
        const x = Math.max(0, Math.floor(box.x));
        const y = Math.max(0, Math.floor(box.y));
        const right = Math.min(width, Math.ceil(box.x + box.width));
        const bottom = Math.min(height, Math.ceil(box.y + box.height));
        if (right <= x || bottom <= y) return;
        const key = `${region}:${x}:${y}:${right - x}:${bottom - y}`;
        if (seen.has(key)) return;
        seen.add(key);
        regions.push({
          region,
          x,
          y,
          width: right - x,
          height: bottom - y,
          note,
        });
      };
      const addRect = (region, x, y, w, h, note = '') => {
        const left = Math.max(0, Math.floor(x));
        const top = Math.max(0, Math.floor(y));
        const right = Math.min(width, Math.ceil(x + w));
        const bottom = Math.min(height, Math.ceil(y + h));
        if (right <= left || bottom <= top) return;
        const key = `${region}:${left}:${top}:${right - left}:${bottom - top}`;
        if (seen.has(key)) return;
        seen.add(key);
        regions.push({ region, x: left, y: top, width: right - left, height: bottom - top, note });
      };

      addRect('edge:top', 0, 0, width, Math.min(80, height), 'canvas boundary sentinel');
      addRect('edge:bottom', 0, Math.max(0, height - 80), width, Math.min(80, height), 'canvas boundary sentinel');
      addRect('edge:left', 0, 0, Math.min(80, width), height, 'canvas boundary sentinel');
      addRect('edge:right', Math.max(0, width - 80), 0, Math.min(80, width), height, 'canvas boundary sentinel');

      Array.from(svg.querySelectorAll('.sankey-node[data-node]')).forEach((element) => {
        addBox(`node:${element.getAttribute('data-node')}`, element, 'rendered node bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-link')).forEach((element, index) => {
        let box;
        try {
          box = element.getBBox();
        } catch {
          return;
        }
        const strokeWidth = Number(element.getAttribute('stroke-width')) || 0;
        const pad = Math.ceil(strokeWidth / 2) + 2;
        addRect(
          `link:${element.getAttribute('data-source')}->${element.getAttribute('data-target')}#${index}`,
          box.x - pad,
          box.y - pad,
          box.width + pad * 2,
          box.height + pad * 2,
          `rendered path bbox padded by ${pad}px`
        );
      });
      Array.from(svg.querySelectorAll('.sankey-label[data-node]:not(.sankey-icon)')).forEach((element, index) => {
        addBox(`label:${element.getAttribute('data-node')}#${index}`, element, 'rendered label bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-label.sankey-icon[data-node]')).forEach((element, index) => {
        addBox(`icon:${element.getAttribute('data-node')}#${index}`, element, 'rendered vector icon bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-annotations')).forEach((element, index) => {
        addBox(`annotation:${index}`, element, 'annotationsSvg group bbox');
      });
      Array.from(svg.querySelectorAll('.sankey-raster-annotations image')).forEach((element, index) => {
        const key = element.getAttribute('data-key') || index;
        addBox(`raster:${key}`, element, 'approved runtime raster annotation bbox');
      });
      Array.from(svg.children).forEach((element, index) => {
        const tag = element.tagName.toLowerCase();
        const cls = element.getAttribute('class') || '';
        if (tag === 'text') addBox(`direct-text:${index}`, element, 'title or period text bbox');
        if (tag === 'g' && !cls) addBox(`direct-group:${index}`, element, 'unclassified top-level SVG group bbox');
      });

      return regions.map((region) => ({
        ...region,
        x: round(region.x),
        y: round(region.y),
        width: round(region.width),
        height: round(region.height),
      }));
    });

    assertPurity(purity);
    if (purity.width !== meta.width || purity.height !== meta.height) {
      throw new Error(`SVG size mismatch: expected ${meta.width}x${meta.height}, got ${purity.width}x${purity.height}`);
    }

    await page.locator('#chart > svg').screenshot({ path: candidatePath });

    const referencePath = path.join(rootDir, meta.referenceSrc);
    await copyFile(referencePath, referenceComparePath);
    const metrics = await pngMetrics(referencePath, candidatePath, diffPath, renderedRegions);
    await writeFile(
      metricsPath,
      `${JSON.stringify(
        {
          dataset: datasetKey,
          language: meta.language,
          reference: path.relative(rootDir, referencePath),
          candidate: path.relative(rootDir, candidatePath),
          diff: path.relative(rootDir, diffPath),
          purity,
          full: metrics.full,
          regions: metrics.regions,
          labelLayoutAudit,
        },
        null,
        2
      )}\n`
    );
    const archive = await archiveCompare(datasetKey);
    if (pageErrors.length) {
      throw new Error(`Page errors during render; comparison artifacts archived at ${archive.dir}:\n${pageErrors.join('\n')}`);
    }

    console.log(`dataset: ${datasetKey}`);
    console.log(`language: ${meta.language}`);
    console.log(`reference: ${keep ? path.relative(rootDir, referenceComparePath) : path.relative(rootDir, referencePath)}`);
    console.log(`candidate: ${keep ? path.relative(rootDir, candidatePath) : '(scratch cleaned)'}`);
    console.log(`diff: ${keep ? path.relative(rootDir, diffPath) : '(scratch cleaned)'}`);
    console.log(`metrics: ${keep ? path.relative(rootDir, metricsPath) : '(scratch cleaned)'}`);
    console.log(`archive: ${archive.dir}`);
    if (archive.reference) {
      console.log(`shared reference: ${archive.reference}${archive.referenceChanged ? '' : ' (unchanged)'}`);
    }
    console.log(`font: Montserrat loaded=${fontStatus.montserratLoaded}`);
    console.log(
      `purity: imageCount=${purity.imageCount} expectedRasterAnnotations=${purity.expectedRasterHrefs.length} chartImgCount=${purity.chartImgCount} rasterAllowed=${purity.rasterAllowed}`
    );
    logLabelLayoutAudit(labelLayoutAudit);
    console.log(`viewport: ${metrics.full.width}x${metrics.full.height}`);
    console.log(`RGB MAE: ${metrics.full.mae.toFixed(4)}`);
    console.log(`MAE similarity: ${metrics.full.similarity.toFixed(6)}`);
    console.log(`max channel difference: ${metrics.full.maxChannelDiff}`);
    console.log(`same-pixel ratio: ${metrics.full.samePixelRatio.toFixed(6)}`);
    console.log(`changed-pixel ratio: ${metrics.full.changedPixelRatio.toFixed(6)}`);
    console.log(`diff bounding box: ${formatDiffBoundingBox(metrics.full.diffBoundingBox)}`);
    console.log(`region metrics: ${metrics.regions.length} region(s)`);
    metrics.regions
      .slice()
      .sort((a, b) => b.changedPixelRatio - a.changedPixelRatio || b.mae - a.mae)
      .slice(0, 8)
      .forEach((region) => {
        console.log(
          `  region ${region.region}: mae=${region.mae.toFixed(4)} similarity=${region.similarity.toFixed(6)} changed=${region.changedPixelRatio.toFixed(6)} box=${region.x},${region.y},${region.width},${region.height}`
        );
      });
    if (labelLayoutAudit.horizontalViolations.length) {
      const details = labelLayoutAudit.horizontalViolations
        .slice(0, 5)
        .map((item) => `${item.node}#${item.labelIndex} ${item.side} overlap=${formatPx(item.overlap)}`)
        .join(', ');
      throw new Error(`Label-node horizontal overlap failed: ${details}`);
    }
  } finally {
    if (browser) await browser.close();
    await server.close();
    if (!keep) await cleanCompare();
  }
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});
