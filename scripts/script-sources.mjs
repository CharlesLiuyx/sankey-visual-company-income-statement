export function scriptSources(indexHtml) {
  const sources = [];
  const scriptRe = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi;
  let match;
  while ((match = scriptRe.exec(indexHtml))) {
    sources.push(match[1]);
  }
  return sources;
}

export const DATASET_SCRIPT_DIR = 'data/datasets';

const SUPPORT_DATA_SCRIPTS = new Set([
  'data/income-statements.js',
  'data/company-metadata.js',
]);

export function datasetScriptForKey(key) {
  return `${DATASET_SCRIPT_DIR}/${key}.js`;
}

function isDatasetScript(src) {
  return src.startsWith(`${DATASET_SCRIPT_DIR}/`) && src.endsWith('.js') && !SUPPORT_DATA_SCRIPTS.has(src);
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
    'data/income-statements.js',
  ]);

  return scriptSources(indexHtml).filter((src) => renderRuntime.has(src) || isDatasetScript(src));
}
