#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dataScriptsFromIndex } from './script-sources.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function readProjectFile(relativePath) {
  return readFileSync(path.join(rootDir, relativePath), 'utf8');
}

function dataScripts() {
  return dataScriptsFromIndex(readProjectFile('index.html'));
}

function loadBrowserData(scripts) {
  const context = { console };
  context.window = context;
  vm.createContext(context);

  vm.runInContext(readProjectFile('src/icons.js'), context, { filename: 'src/icons.js' });
  vm.runInContext(readProjectFile('data/income-statements.js'), context, { filename: 'data/income-statements.js' });
  vm.runInContext(readProjectFile('data/company-metadata.js'), context, { filename: 'data/company-metadata.js' });
  for (const script of scripts) {
    vm.runInContext(readProjectFile(script), context, { filename: script });
  }

  return {
    records: context.INCOME_STATEMENT_SSOT?.records || [],
    companies: context.COMPANY_METADATA?.companies || [],
    datasets: context.DATASETS || [],
  };
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function fmt(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
}

function assertClose(actual, expected, tolerance, label, errors) {
  if (typeof actual !== 'number' || typeof expected !== 'number') {
    errors.push(`${label}: expected numeric values, got ${actual} and ${expected}`);
    return;
  }
  const delta = Math.abs(actual - expected);
  if (delta > tolerance) {
    errors.push(`${label}: ${fmt(actual)} differs from ${fmt(expected)} by ${fmt(delta)} > ${fmt(tolerance)}`);
  }
}

function sum(items) {
  return (items || []).reduce((total, item) => total + (Number(item.value) || 0), 0);
}

function flattenItems(items) {
  return (items || []).flatMap((item) => [item, ...flattenItems(item.children)]);
}

function normalize(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function validateRecordShape(record, errors) {
  const forbidden = ['nodes', 'links', 'layout', 'render'];
  for (const field of forbidden) {
    assert(record[field] === undefined, `${record.key}: SSOT record must not contain Sankey field "${field}"`, errors);
  }
  for (const field of ['key', 'company', 'period', 'currency', 'unit', 'revenue', 'costs', 'profit']) {
    assert(record[field] !== undefined, `${record.key || '<missing key>'}: missing required field "${field}"`, errors);
  }
}

function validateCompanyMetadata(records, companies, errors) {
  const required = ['key', 'name', 'sector', 'industry', 'description', 'sourceUrls'];
  const byName = new Map();

  for (const company of companies) {
    const label = company.name || company.key || '<missing company>';
    for (const field of required) {
      assert(company[field] !== undefined && company[field] !== '', `${label}: company metadata missing "${field}"`, errors);
    }
    assert(Array.isArray(company.sourceUrls) && company.sourceUrls.length > 0, `${label}: company metadata sourceUrls must be a non-empty array`, errors);
    const identityNames = Array.from(new Set([company.name, company.legalName, ...(company.aliases || [])].filter(Boolean).map(normalize)));
    for (const name of identityNames) {
      const existing = byName.get(name);
      assert(!existing || existing === company, `${label}: duplicate company metadata name or alias "${name}"`, errors);
      byName.set(name, company);
    }
  }

  for (const company of new Set(records.map((record) => record.company))) {
    assert(byName.has(normalize(company)), `${company}: missing company metadata record`, errors);
  }
}

function validateDatasetParity(record, dataset, errors) {
  const tolerance = record.roundingTolerance ?? 0.15;
  const nodeById = new Map((dataset.nodes || []).map((node) => [node.id, node]));
  const checkNode = (item, label) => {
    if (!item?.id) return;
    const node = nodeById.get(item.id);
    assert(node, `${record.key}: missing Sankey node for ${label} "${item.id}"`, errors);
    if (node) assertClose(item.value, node.value, tolerance, `${record.key}: ${label} ${item.id}`, errors);
  };

  assertClose(record.revenue.total, nodeById.get('revenue')?.value, tolerance, `${record.key}: revenue total`, errors);
  checkNode(record.costs.costOfRevenue, 'costOfRevenue');
  checkNode(record.costs.tax, 'tax');
  assertClose(
    record.costs.operatingExpenses.total,
    nodeById.get('operating_expenses')?.value,
    tolerance,
    `${record.key}: operating expenses total`,
    errors
  );
  checkNode(record.profit.gross, 'gross profit');
  checkNode(record.profit.operating, 'operating profit');
  checkNode(record.profit.net, 'net profit');

  for (const item of flattenItems(record.revenue.items)) checkNode(item, 'revenue item');
  for (const item of record.costs.operatingExpenses.items || []) checkNode(item, 'operating expense item');
  for (const item of record.otherIncome?.items || []) checkNode(item, 'other income item');
  for (const item of record.otherExpenses?.items || []) checkNode(item, 'other expense item');
}

function validateArithmetic(record, errors) {
  const tolerance = record.roundingTolerance ?? 0.15;
  const revenueItems = sum(record.revenue.items);
  const opexItems = sum(record.costs.operatingExpenses.items);
  const otherItems = sum(record.otherIncome?.items);
  const otherTotal = record.otherIncome?.total || 0;
  const otherExpenseItems = sum(record.otherExpenses?.items);
  const otherExpenseTotal = record.otherExpenses?.total || 0;
  const checkChildSums = (items, pathLabel) => {
    for (const item of items || []) {
      if ((item.children || []).length) {
        assertClose(sum(item.children), item.value, tolerance, `${record.key}: ${pathLabel} child sum ${item.id}`, errors);
        checkChildSums(item.children, `${pathLabel}/${item.id}`);
      }
    }
  };

  assertClose(revenueItems, record.revenue.total, tolerance, `${record.key}: revenue item sum`, errors);
  checkChildSums(record.revenue.items, 'revenue');
  assertClose(opexItems, record.costs.operatingExpenses.total, tolerance, `${record.key}: operating expense item sum`, errors);
  assertClose(otherItems, otherTotal, tolerance, `${record.key}: other income item sum`, errors);
  assertClose(otherExpenseItems, otherExpenseTotal, tolerance, `${record.key}: other expense item sum`, errors);
  assertClose(
    record.revenue.total - record.costs.costOfRevenue.value,
    record.profit.gross.value,
    tolerance,
    `${record.key}: gross profit arithmetic`,
    errors
  );
  assertClose(
    record.profit.gross.value - record.costs.operatingExpenses.total,
    record.profit.operating.value,
    tolerance,
    `${record.key}: operating profit arithmetic`,
    errors
  );
  assertClose(
    record.profit.operating.value - record.costs.tax.value + otherTotal - otherExpenseTotal,
    record.profit.net.value,
    tolerance,
    `${record.key}: net profit arithmetic`,
    errors
  );
}

function main() {
  const scripts = dataScripts();
  const missing = scripts.filter((script) => !existsSync(path.join(rootDir, script)));
  if (missing.length) {
    throw new Error(`Missing registered data script(s): ${missing.join(', ')}`);
  }

  const { records, companies, datasets } = loadBrowserData(scripts);
  const errors = [];
  const datasetKeys = scripts.map((script) => path.basename(script, '.js'));
  const recordKeys = records.map((record) => record.key);
  const uniqueRecordKeys = new Set(recordKeys);

  assert(uniqueRecordKeys.size === recordKeys.length, 'SSOT contains duplicate record keys', errors);
  for (const key of datasetKeys) {
    assert(uniqueRecordKeys.has(key), `Missing SSOT record for registered dataset: ${key}`, errors);
  }
  for (const key of recordKeys) {
    assert(datasetKeys.includes(key), `SSOT record is not registered as a Sankey dataset: ${key}`, errors);
  }

  const datasetsByKey = new Map(datasets.map((dataset) => [dataset.key, dataset]));
  for (const record of records) {
    validateRecordShape(record, errors);
    const dataset = datasetsByKey.get(record.key);
    assert(dataset, `${record.key}: matching Sankey dataset was not loaded`, errors);
    if (dataset) validateDatasetParity(record, dataset, errors);
    validateArithmetic(record, errors);
  }
  validateCompanyMetadata(records, companies, errors);

  if (errors.length) {
    console.error(`SSOT verification failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log(`SSOT verification passed: ${records.length} record(s), ${datasetKeys.length} registered dataset(s).`);
}

main();
