#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const defaultHtml = 'output/sankey-visual-company-income-statement.html';

function parseArgs(argv) {
  const args = argv.slice(2);
  const html = args[0] || defaultHtml;
  if (args.length > 1) throw new Error(`Unknown argument(s): ${args.slice(1).join(' ')}`);
  return { html };
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function inspectMarkup(filePath) {
  const html = readFileSync(filePath, 'utf8');
  const forbidden = [
    { label: 'external script tags', re: /<script\b[^>]*\bsrc=["'][^"']+["']/i },
    { label: 'stylesheet link tags', re: /<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["'][^"']+["']/i },
    { label: 'preconnect link tags', re: /<link\b[^>]*\brel=["']preconnect["']/i },
    { label: 'Google font URLs', re: /https:\/\/fonts\.(?:googleapis|gstatic)\.com/i },
    { label: 'raw processed image requests', re: /<(?:img|image)\b[^>]*\bsrc=["']input\/processed\//i },
    { label: 'inlined processed PNG data URIs', re: /data:image\/png;base64,/i },
  ];
  for (const { label, re } of forbidden) {
    assert(!re.test(html), `Standalone HTML still contains ${label}`);
  }
}

async function verifyInBrowser(filePath) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 }, deviceScaleFactor: 1 });
  const pageErrors = [];
  const externalRequests = [];
  const documentUrl = pathToFileURL(filePath).toString();

  page.on('pageerror', (err) => pageErrors.push(err.message));
  page.on('request', (request) => {
    const url = request.url();
    if (url.startsWith('http://') || url.startsWith('https://')) externalRequests.push(url);
    if (url.startsWith('file:') && url !== documentUrl) externalRequests.push(url);
  });

  try {
    await page.goto(documentUrl, { waitUntil: 'load' });
    await page.waitForSelector('#chart svg', { timeout: 10000 });
    const d3State = await page.evaluate(() => ({
      activeDataset: document.querySelector('#activeDatasetName')?.textContent || '',
      hasSvg: !!document.querySelector('#chart svg'),
      hasReferenceImage: !!document.querySelector('#chart img'),
      svgButtonDisabled: document.querySelector('#svgBtn')?.disabled,
      montserratLoaded:
        document.fonts.check('16px Montserrat') || document.fonts.check('16px "Montserrat"'),
    }));

    assert(!pageErrors.length, `Page errors:\n${pageErrors.join('\n')}`);
    assert(!externalRequests.length, `Standalone HTML made external request(s):\n${externalRequests.join('\n')}`);
    assert(d3State.activeDataset, 'No active dataset rendered');
    assert(d3State.hasSvg, 'd3 mode did not render an SVG');
    assert(!d3State.hasReferenceImage, 'Standalone viewer should not render a reference image');
    assert(d3State.svgButtonDisabled === false, 'SVG export button should be enabled in d3 mode');
    assert(d3State.montserratLoaded, 'Inline Montserrat font did not load');

    console.log(JSON.stringify({ d3State }, null, 2));
  } finally {
    await browser.close();
  }
}

async function main() {
  const { html } = parseArgs(process.argv);
  const filePath = path.resolve(rootDir, html);
  if (!existsSync(filePath)) throw new Error(`Missing standalone HTML: ${html}`);
  inspectMarkup(filePath);
  await verifyInBrowser(filePath);
}

main().catch((err) => {
  console.error(err.stack || err.message);
  process.exit(1);
});
