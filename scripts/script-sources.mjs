export function scriptSources(indexHtml) {
  const sources = [];
  const scriptRe = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi;
  let match;
  while ((match = scriptRe.exec(indexHtml))) {
    sources.push(match[1]);
  }
  return sources;
}

const SUPPORT_DATA_SCRIPTS = new Set([
  'data/income-statements.js',
  'data/company-metadata.js',
]);

function isDatasetScript(src) {
  return /^data\/.+\.js$/.test(src) && !SUPPORT_DATA_SCRIPTS.has(src);
}

export function dataScriptsFromIndex(indexHtml) {
  return scriptSources(indexHtml).filter(isDatasetScript);
}

export function renderHarnessScripts(indexHtml) {
  const renderRuntime = new Set([
    'vendor/d3.min.js',
    'vendor/d3-sankey.min.js',
    'src/icons.js',
    'src/sankey-engine.js',
    'src/income-statement.js',
    'data/income-statements.js',
  ]);

  return scriptSources(indexHtml).filter((src) => renderRuntime.has(src) || isDatasetScript(src));
}
