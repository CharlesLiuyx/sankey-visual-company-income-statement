#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dataScriptsFromIndex } from './script-sources.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const TRACKED_TRANSLATABLE_ACRONYMS = new Set(['D&A', 'G&A', 'R&D', 'S&M', 'SG&A', 'TAC']);
const PRESERVED_ANNOTATION_TEXT = new Set([
  '.com',
  'amazon',
  'amazonads',
  'audible',
  'aws',
  'ads',
  'FOODS',
  'fresh',
  'Habit',
  'Hilton',
  'Hut',
  'MARKET',
  'Pizza',
  'prime',
  'the',
  'twitch',
  'uber',
  'Uber',
  'Eats',
  'Uber Freight',
  'WHOLE',
  'Yum!',
]);

function readProjectFile(relativePath) {
  return readFileSync(path.join(rootDir, relativePath), 'utf8');
}

function parseArgs(argv) {
  const strict = argv.includes('--strict');
  const keys = argv.filter((arg) => arg !== '--strict' && arg !== '--');
  return { strict, keys: new Set(keys) };
}

function loadBrowserData() {
  const context = { console };
  context.window = context;
  context.document = undefined;
  vm.createContext(context);

  for (const script of [
    'src/icons.js',
    'src/sankey-engine.js',
    'src/i18n.js',
    'data/income-statements.js',
    'data/company-metadata.js',
    ...dataScriptsFromIndex(readProjectFile('index.html')),
  ]) {
    vm.runInContext(readProjectFile(script), context, { filename: script });
  }

  return {
    i18n: context.SANKEY_I18N,
    datasets: context.DATASETS || [],
    records: context.INCOME_STATEMENT_SSOT?.records || [],
    companies: context.COMPANY_METADATA?.companies || [],
  };
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function textItems(value) {
  if (Array.isArray(value)) return value.flatMap(textItems);
  return value == null ? [] : [String(value)];
}

function addText(list, owner, pathLabel, sourceValue, localizedValue) {
  const sourceItems = textItems(sourceValue);
  const localizedItems = textItems(localizedValue);
  sourceItems.forEach((source, index) => {
    list.push({
      owner,
      path: pathLabel,
      source: clean(source),
      localized: clean(localizedItems[index] ?? localizedItems.join(' ')),
    });
  });
}

function collectItemTexts(list, owner, item, localizedItem, basePath) {
  if (!item) return;
  addText(list, owner, `${basePath}.label`, item.label, localizedItem?.label);
  addText(list, owner, `${basePath}.notes`, item.notes, localizedItem?.notes);
  (item.children || []).forEach((child, index) => {
    collectItemTexts(list, owner, child, localizedItem?.children?.[index], `${basePath}.children[${index}]`);
  });
}

function layoutLineText(line) {
  return typeof line === 'string' ? line : line?.text;
}

function stripTrailingMoney(text) {
  return clean(text).replace(/\s+\([^)]*[$€¥￥]\s*\d[^)]*\)$/u, '');
}

function isTrackedCompositeLayoutPhrase(text) {
  const value = clean(text);
  const phrase = stripTrailingMoney(value);
  if (/^(Cost of revenues?|Cost of sales|Sales & marketing|Product development|General & Administrative|General & admin|Research & development|Technology & content|Technology & development|Marketing & business dev\.|Amortization & other|Amortization & impairment)$/i.test(phrase)) {
    return true;
  }
  return /^\(?\d+(?:\.\d+)?%\)?\s+of revenue\s+\([^)]+\)$/i.test(value);
}

function collectCompositeLayoutPhrases(dataset, localized) {
  const list = [];
  Object.entries(dataset.layout?.labels || {}).forEach(([nodeId, labelSpec]) => {
    const localizedSpec = localized.layout?.labels?.[nodeId];
    (labelSpec.blocks || []).forEach((block, blockIndex) => {
      const lines = block.lines || [];
      for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
        const maxLines = Math.min(4, lines.length - lineIndex);
        for (let count = maxLines; count > 1; count -= 1) {
          const sourceText = lines
            .slice(lineIndex, lineIndex + count)
            .map(layoutLineText)
            .map(clean)
            .filter(Boolean)
            .join(' ');
          if (!isTrackedCompositeLayoutPhrase(sourceText)) continue;
          const localizedText = Array.from({ length: count }, (_item, offset) => {
            const localizedLine = localizedSpec?.blocks?.[blockIndex]?.lines?.[lineIndex + offset];
            return clean(layoutLineText(localizedLine));
          }).filter(Boolean).join(' ');
          list.push({
            owner: dataset.key,
            path: `layout.labels.${nodeId}.blocks[${blockIndex}].lines[${lineIndex}-${lineIndex + count - 1}]`,
            source: sourceText,
            localized: localizedText,
          });
          lineIndex += count - 1;
          break;
        }
      }
    });
  });
  return list;
}

function decodeSvgText(text) {
  return String(text || '').replace(/&(#x?[0-9a-f]+|amp|lt|gt|quot|apos);/gi, (entity, body) => {
    const key = body.toLowerCase();
    if (key === 'amp') return '&';
    if (key === 'lt') return '<';
    if (key === 'gt') return '>';
    if (key === 'quot') return '"';
    if (key === 'apos') return "'";
    const codePoint = key.startsWith('#x') ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
    return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
  });
}

function collectSvgTextSegments(svgText, basePath) {
  const list = [];
  if (typeof svgText !== 'string' || !svgText) return list;
  let textIndex = 0;
  svgText.replace(/<text\b[^>]*>([\s\S]*?)<\/text>/gi, (_match, body) => {
    let segmentIndex = 0;
    body.split(/<[^>]+>/g).forEach((part) => {
      const text = clean(decodeSvgText(part));
      if (text) {
        list.push({
          path: `${basePath}.text[${textIndex}].segment[${segmentIndex}]`,
          text,
        });
      }
      segmentIndex += 1;
    });
    textIndex += 1;
    return _match;
  });
  return list;
}

function collectDatasetTexts(dataset, localized) {
  const list = [];
  addText(list, dataset.key, 'name', dataset.name, localized.name);
  addText(list, dataset.key, 'meta.title', dataset.meta?.title, localized.meta?.title);
  addText(list, dataset.key, 'meta.period', dataset.meta?.period, localized.meta?.period);
  addText(list, dataset.key, 'meta.periodNote', dataset.meta?.periodNote, localized.meta?.periodNote);
  (dataset.nodes || []).forEach((node, index) => {
    const localizedNode = localized.nodes?.[index];
    addText(list, dataset.key, `nodes.${node.id || index}.label`, node.label, localizedNode?.label);
    addText(list, dataset.key, `nodes.${node.id || index}.notes`, node.notes, localizedNode?.notes);
  });
  Object.entries(dataset.layout?.labels || {}).forEach(([nodeId, labelSpec]) => {
    const localizedSpec = localized.layout?.labels?.[nodeId];
    (labelSpec.blocks || []).forEach((block, blockIndex) => {
      (block.lines || []).forEach((line, lineIndex) => {
        const sourceText = typeof line === 'string' ? line : line?.text;
        const localizedLine = localizedSpec?.blocks?.[blockIndex]?.lines?.[lineIndex];
        const localizedText = typeof localizedLine === 'string' ? localizedLine : localizedLine?.text;
        addText(list, dataset.key, `layout.labels.${nodeId}.blocks[${blockIndex}].lines[${lineIndex}]`, sourceText, localizedText);
      });
    });
  });
  const sourceAnnotations = collectSvgTextSegments(dataset.annotationsSvg, 'annotationsSvg');
  const localizedAnnotations = collectSvgTextSegments(localized.annotationsSvg, 'annotationsSvg');
  sourceAnnotations.forEach((item, index) => {
    addText(list, dataset.key, item.path, item.text, localizedAnnotations[index]?.text);
  });
  return list;
}

function collectFinancialTexts(record, localized) {
  const list = [];
  addText(list, record.key, 'period', record.period, localized.period);
  addText(list, record.key, 'periodNote', record.periodNote, localized.periodNote);
  addText(list, record.key, 'revenue.notes', record.revenue?.notes, localized.revenue?.notes);
  (record.revenue?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.revenue?.items?.[index], `revenue.items[${index}]`);
  });
  collectItemTexts(list, record.key, record.costs?.costOfRevenue, localized.costs?.costOfRevenue, 'costs.costOfRevenue');
  (record.costs?.costOfRevenue?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.costs?.costOfRevenue?.items?.[index], `costs.costOfRevenue.items[${index}]`);
  });
  (record.costs?.operatingExpenses?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.costs?.operatingExpenses?.items?.[index], `costs.operatingExpenses.items[${index}]`);
  });
  collectItemTexts(list, record.key, record.costs?.tax, localized.costs?.tax, 'costs.tax');
  (record.otherIncome?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.otherIncome?.items?.[index], `otherIncome.items[${index}]`);
  });
  (record.otherExpenses?.items || []).forEach((item, index) => {
    collectItemTexts(list, record.key, item, localized.otherExpenses?.items?.[index], `otherExpenses.items[${index}]`);
  });
  Object.keys(record.profit || {}).forEach((key) => {
    collectItemTexts(list, record.key, record.profit[key], localized.profit?.[key], `profit.${key}`);
  });
  return list;
}

function collectCompanyTexts(company, localized) {
  const list = [];
  for (const field of ['sector', 'industry', 'headquarters', 'fiscalYearEnd', 'description']) {
    addText(list, company.key || company.name, field, company[field], localized[field]);
  }
  return list;
}

function looksTranslatable(text) {
  const value = clean(text);
  if (!value || value === '$value') return false;
  if (!/[A-Za-z]/.test(value)) return false;
  if (/^https?:\/\//i.test(value)) return false;
  if (/^\(?\$?\d[\d.,]*[BMK]?\)?$/i.test(value)) return false;
  if (TRACKED_TRANSLATABLE_ACRONYMS.has(value)) return true;
  if (/^[A-Z0-9&./ +-]{1,12}$/.test(value)) return false;
  if (/^[\d\s$().,%+-]+[BMK]?$/.test(value)) return false;
  return true;
}

function fallbackItems(items) {
  return items.filter((item) => (
    looksTranslatable(item.source) &&
    !(item.path.startsWith('annotationsSvg.') && PRESERVED_ANNOTATION_TEXT.has(item.source)) &&
    item.source === item.localized
  ));
}

function hasDuplicatedLocalizedTerms(text) {
  const parts = clean(text).split(/\s+/).filter(Boolean);
  return parts.length > 1 && parts.every((part) => part === parts[0]);
}

function compositeLayoutPhraseIssues(items) {
  return items.filter((item) => {
    const localized = clean(item.localized);
    const textOnly = localized.replace(/\([^)]*[$€¥￥][^)]*\)/gu, '');
    return !localized || /[A-Za-z]/.test(textOnly) || hasDuplicatedLocalizedTerms(textOnly);
  });
}

function main() {
  const { strict, keys } = parseArgs(process.argv.slice(2));
  const { i18n, datasets, records, companies } = loadBrowserData();
  const errors = [];
  const warnings = [];

  assert(i18n, 'window.SANKEY_I18N is not defined', errors);
  if (!i18n) throw new Error(errors.join('\n'));

  const languages = i18n.languageCodes || [];
  const defaultLanguage = i18n.defaultLanguage || 'en';
  assert(languages.includes(defaultLanguage), `default language "${defaultLanguage}" is not in languageCodes`, errors);

  const defaultUiKeys = Object.keys(i18n.ui?.[defaultLanguage] || {});
  for (const language of languages) {
    for (const key of defaultUiKeys) {
      assert(i18n.ui?.[language]?.[key] != null, `UI language "${language}" missing key "${key}"`, errors);
    }
  }

  const selectedDatasets = keys.size ? datasets.filter((dataset) => keys.has(dataset.key)) : datasets;
  const selectedRecords = records.filter((record) => !keys.size || keys.has(record.key));
  const selectedCompanyNames = new Set(selectedRecords.map((record) => clean(record.company).toLowerCase()));
  if (keys.size) {
    for (const key of keys) {
      assert(datasets.some((dataset) => dataset.key === key), `Unknown dataset key "${key}"`, errors);
    }
  }

  for (const language of languages.filter((code) => code !== defaultLanguage)) {
    for (const dataset of selectedDatasets) {
      const localized = i18n.localizeDataset(dataset, language);
      assert(clean(localized.name), `${dataset.key}: localized dataset name is empty for ${language}`, errors);
      if (clean(dataset.meta?.title)) {
        assert(clean(localized.meta?.title), `${dataset.key}: localized meta.title is empty for ${language}`, errors);
      }
      for (const node of localized.nodes || []) {
        const sourceNode = (dataset.nodes || []).find((item) => item.id === node.id);
        if (clean(textItems(sourceNode?.label).join(' '))) {
          assert(clean(textItems(node.label).join(' ')), `${dataset.key}: node "${node.id}" localized label is empty for ${language}`, errors);
        }
      }
      const fallbacks = fallbackItems(collectDatasetTexts(dataset, localized));
      if (fallbacks.length) {
        const sample = fallbacks.slice(0, 5).map((item) => `${item.path}="${item.source}"`).join('; ');
        const message = `${dataset.key}: ${fallbacks.length} dataset text fallback(s) for ${language}; ${sample}`;
        if (strict) errors.push(message);
        else warnings.push(message);
      }
      const compositeIssues = compositeLayoutPhraseIssues(collectCompositeLayoutPhrases(dataset, localized));
      if (compositeIssues.length) {
        const sample = compositeIssues.slice(0, 5).map((item) => `${item.path} "${item.source}" -> "${item.localized}"`).join('; ');
        const message = `${dataset.key}: ${compositeIssues.length} composite layout phrase issue(s) for ${language}; ${sample}`;
        if (strict) errors.push(message);
        else warnings.push(message);
      }
      if (strict) {
        assert(dataset.i18n?.[language], `${dataset.key}: missing explicit dataset.i18n.${language} overlay`, errors);
      }
    }

    for (const record of selectedRecords) {
      const localized = i18n.localizeFinancialRecord(record, language);
      const fallbacks = fallbackItems(collectFinancialTexts(record, localized));
      if (fallbacks.length) {
        const sample = fallbacks.slice(0, 5).map((item) => `${item.path}="${item.source}"`).join('; ');
        const message = `${record.key}: ${fallbacks.length} financial SSOT fallback(s) for ${language}; ${sample}`;
        if (strict) errors.push(message);
        else warnings.push(message);
      }
      if (strict) {
        assert(record.i18n?.[language], `${record.key}: missing explicit financial record i18n.${language} overlay`, errors);
      }
    }

    {
      for (const company of companies.filter((company) => !keys.size || selectedCompanyNames.has(clean(company.name).toLowerCase()) || (company.aliases || []).some((alias) => selectedCompanyNames.has(clean(alias).toLowerCase())))) {
        const localized = i18n.localizeCompanyMetadata(company, language);
        const fallbacks = fallbackItems(collectCompanyTexts(company, localized));
        if (fallbacks.length) {
          const sample = fallbacks.slice(0, 3).map((item) => `${item.path}="${item.source}"`).join('; ');
          const message = `${company.key || company.name}: ${fallbacks.length} company metadata fallback(s) for ${language}; ${sample}`;
          if (strict) errors.push(message);
          else warnings.push(message);
        }
        if (strict) {
          assert(company.i18n?.[language], `${company.key || company.name}: missing explicit company i18n.${language} overlay`, errors);
        }
      }
    }
  }

  if (errors.length) {
    console.error(`i18n verification failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  for (const warning of warnings.slice(0, 80)) console.warn(`warning: ${warning}`);
  if (warnings.length > 80) console.warn(`warning: ${warnings.length - 80} additional fallback warning(s) omitted`);
  console.log(`i18n verification passed: ${languages.length} language(s), ${selectedDatasets.length} dataset(s), strict=${strict}.`);
}

main();
