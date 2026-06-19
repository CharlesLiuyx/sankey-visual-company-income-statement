export function scriptSources(indexHtml) {
  const sources = [];
  const scriptRe = /<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*><\/script>/gi;
  let match;
  while ((match = scriptRe.exec(indexHtml))) {
    sources.push(match[1]);
  }
  return sources;
}

export function dataScriptsFromIndex(indexHtml) {
  return scriptSources(indexHtml)
    .filter((src) => /^data\/.+\.js$/.test(src))
    .filter((src) => src !== 'data/income-statements.js');
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

  return scriptSources(indexHtml).filter((src) => renderRuntime.has(src) || /^data\/.+\.js$/.test(src));
}
