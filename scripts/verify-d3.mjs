#!/usr/bin/env node
import { createServer } from 'node:http';
import { readFile, readdir, rm, stat, writeFile } from 'node:fs/promises';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const compareDir = path.join(rootDir, 'compare');

function usage() {
  console.error('Usage: pnpm verify:d3 -- <dataset-key> [--keep]');
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const keep = args.includes('--keep');
  const positional = args.filter((arg) => arg !== '--keep' && arg !== '--');
  const datasetKey = positional[0];
  if (!datasetKey || positional.length > 1) {
    usage();
    process.exit(2);
  }
  return { datasetKey, keep };
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

function scriptSources(indexHtml) {
  const sources = [];
  const scriptRe = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi;
  let match;
  while ((match = scriptRe.exec(indexHtml))) {
    sources.push(match[1]);
  }
  return sources;
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

async function pngMetrics(referencePath, candidatePath) {
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
  for (let i = 0; i < reference.data.length; i += 4) {
    const dr = Math.abs(reference.data[i] - candidate.data[i]);
    const dg = Math.abs(reference.data[i + 1] - candidate.data[i + 1]);
    const db = Math.abs(reference.data[i + 2] - candidate.data[i + 2]);
    total += dr + dg + db;
    if (dr === 0 && dg === 0 && db === 0) same += 1;
    max = Math.max(max, dr, dg, db);
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

async function main() {
  const { datasetKey, keep } = parseArgs(process.argv);
  const datasetPath = path.join(rootDir, 'data', `${datasetKey}.js`);
  if (!existsSync(datasetPath)) {
    throw new Error(`Missing dataset file: data/${datasetKey}.js`);
  }

  const indexHtml = await readFile(path.join(rootDir, 'index.html'), 'utf8');
  const scripts = scriptSources(indexHtml);
  if (!scripts.includes(`data/${datasetKey}.js`)) {
    throw new Error(`Dataset script is not registered in index.html: data/${datasetKey}.js`);
  }

  await cleanCompare();

  const server = await startStaticServer();
  let browser;
  const candidatePath = path.join(compareDir, `${datasetKey}-d3.png`);

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const pageErrors = [];
    page.on('pageerror', (err) => pageErrors.push(err.message));

    await page.setContent(harnessHtml(server.baseUrl, scripts), { waitUntil: 'load' });

    const meta = await page.evaluate((key) => {
      const dataset = window.DATASETS?.find((item) => item.key === key);
      if (!dataset) throw new Error(`Dataset not found: ${key}`);
      const ref = dataset.meta?.referenceImage;
      if (!ref || typeof ref !== 'object' || !ref.src || !ref.width || !ref.height) {
        throw new Error(`Dataset ${key} must define meta.referenceImage { src, width, height }`);
      }
      return { referenceSrc: ref.src, width: ref.width, height: ref.height };
    }, datasetKey);

    await page.setViewportSize({ width: meta.width, height: meta.height });
    const purity = await page.evaluate((key) => {
      const dataset = window.DATASETS.find((item) => item.key === key);
      const chart = document.querySelector('#chart');
      chart.style.width = `${dataset.meta.referenceImage.width}px`;
      chart.style.height = `${dataset.meta.referenceImage.height}px`;
      window.SankeyEngine.render('#chart', dataset);
      const svg = document.querySelector('#chart > svg');
      if (!svg) throw new Error('SankeyEngine.render did not create #chart > svg');
      svg.setAttribute('width', String(dataset.meta.referenceImage.width));
      svg.setAttribute('height', String(dataset.meta.referenceImage.height));
      svg.style.width = `${dataset.meta.referenceImage.width}px`;
      svg.style.height = `${dataset.meta.referenceImage.height}px`;
      return {
        imageCount: svg.querySelectorAll('image').length,
        chartImgCount: document.querySelectorAll('#chart img').length,
        viewBox: svg.getAttribute('viewBox'),
        width: Math.round(svg.getBoundingClientRect().width),
        height: Math.round(svg.getBoundingClientRect().height),
      };
    }, datasetKey);
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

    if (purity.imageCount !== 0 || purity.chartImgCount !== 0) {
      throw new Error(`Purity failed: imageCount=${purity.imageCount}, chartImgCount=${purity.chartImgCount}`);
    }
    if (purity.width !== meta.width || purity.height !== meta.height) {
      throw new Error(`SVG size mismatch: expected ${meta.width}x${meta.height}, got ${purity.width}x${purity.height}`);
    }

    await page.locator('#chart > svg').screenshot({ path: candidatePath });

    const referencePath = path.join(rootDir, meta.referenceSrc);
    const metrics = await pngMetrics(referencePath, candidatePath);
    if (pageErrors.length) {
      throw new Error(`Page errors during render:\n${pageErrors.join('\n')}`);
    }

    console.log(`dataset: ${datasetKey}`);
    console.log(`reference: ${path.relative(rootDir, referencePath)}`);
    console.log(`candidate: ${keep ? path.relative(rootDir, candidatePath) : '(scratch cleaned)'}`);
    console.log(`font: Montserrat loaded=${fontStatus.montserratLoaded}`);
    console.log(`purity: imageCount=${purity.imageCount} chartImgCount=${purity.chartImgCount}`);
    console.log(`viewport: ${metrics.width}x${metrics.height}`);
    console.log(`RGB MAE: ${metrics.rgbMae.toFixed(4)}`);
    console.log(`MAE similarity: ${metrics.maeSimilarity.toFixed(6)}`);
    console.log(`max channel difference: ${metrics.maxChannelDifference}`);
    console.log(`same-pixel ratio: ${metrics.samePixelRatio.toFixed(6)}`);
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
