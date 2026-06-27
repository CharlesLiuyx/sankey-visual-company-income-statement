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

async function pngMetrics(referencePath, candidatePath, diffPath = null) {
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
  const pixels = reference.width * reference.height;
  const diff = diffPath ? new PNG({ width: reference.width, height: reference.height }) : null;
  for (let i = 0; i < reference.data.length; i += 4) {
    const dr = Math.abs(reference.data[i] - candidate.data[i]);
    const dg = Math.abs(reference.data[i + 1] - candidate.data[i + 1]);
    const db = Math.abs(reference.data[i + 2] - candidate.data[i + 2]);
    total += dr + dg + db;
    if (dr === 0 && dg === 0 && db === 0) same += 1;
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
  return {
    width: reference.width,
    height: reference.height,
    rgbMae: mae,
    maeSimilarity: 1 - mae / 255,
    maxChannelDifference: max,
    samePixelRatio: same / pixels,
  };
}

function formatPx(value) {
  return Number.isFinite(value) ? `${value.toFixed(1)}px` : 'n/a';
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
          image.href?.baseVal ||
          image.getAttribute('href') ||
          image.getAttributeNS('http://www.w3.org/1999/xlink', 'href') ||
          ''
      );
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
        rasterAllowed: renderDataset.render?.allowRasterAnnotations === true,
        chartImgCount: document.querySelectorAll('#chart img').length,
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

    if ((purity.imageCount !== 0 && !purity.rasterAllowed) || purity.chartImgCount !== 0) {
      throw new Error(
        `Purity failed: imageCount=${purity.imageCount}, chartImgCount=${purity.chartImgCount}, rasterAllowed=${purity.rasterAllowed}`
      );
    }
    if (purity.width !== meta.width || purity.height !== meta.height) {
      throw new Error(`SVG size mismatch: expected ${meta.width}x${meta.height}, got ${purity.width}x${purity.height}`);
    }

    await page.locator('#chart > svg').screenshot({ path: candidatePath });

    const referencePath = path.join(rootDir, meta.referenceSrc);
    await copyFile(referencePath, referenceComparePath);
    const metrics = await pngMetrics(referencePath, candidatePath, diffPath);
    const archive = await archiveCompare(datasetKey);
    if (pageErrors.length) {
      throw new Error(`Page errors during render; comparison artifacts archived at ${archive.dir}:\n${pageErrors.join('\n')}`);
    }

    console.log(`dataset: ${datasetKey}`);
    console.log(`language: ${meta.language}`);
    console.log(`reference: ${keep ? path.relative(rootDir, referenceComparePath) : path.relative(rootDir, referencePath)}`);
    console.log(`candidate: ${keep ? path.relative(rootDir, candidatePath) : '(scratch cleaned)'}`);
    console.log(`diff: ${keep ? path.relative(rootDir, diffPath) : '(scratch cleaned)'}`);
    console.log(`archive: ${archive.dir}`);
    if (archive.reference) {
      console.log(`shared reference: ${archive.reference}${archive.referenceChanged ? '' : ' (unchanged)'}`);
    }
    console.log(`font: Montserrat loaded=${fontStatus.montserratLoaded}`);
    console.log(
      `purity: imageCount=${purity.imageCount} chartImgCount=${purity.chartImgCount} rasterAllowed=${purity.rasterAllowed}`
    );
    logLabelLayoutAudit(labelLayoutAudit);
    console.log(`viewport: ${metrics.width}x${metrics.height}`);
    console.log(`RGB MAE: ${metrics.rgbMae.toFixed(4)}`);
    console.log(`MAE similarity: ${metrics.maeSimilarity.toFixed(6)}`);
    console.log(`max channel difference: ${metrics.maxChannelDifference}`);
    console.log(`same-pixel ratio: ${metrics.samePixelRatio.toFixed(6)}`);
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
