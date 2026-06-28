/* ====================================================================
 *  trace-domain.js
 *  Domain helpers for the Trace Company/Product/Metric model.
 *
 *  This file keeps semantic data interpretation separate from UI state and
 *  rendering. The current app still stores Income Statement metrics and
 *  Sankey adapters in the existing browser globals; this module normalizes
 *  those globals into a catalog that the UI can consume without knowing the
 *  low-level storage shape.
 * ==================================================================== */
(function (global) {
  'use strict';

  const ENTITY_TYPES = Object.freeze({
    organization: 'organization',
    company: 'company',
    service: 'service',
    product: 'product',
  });

  const METRIC_SUBJECT_TYPES = Object.freeze({
    company: 'company',
    product: 'product',
  });

  const TIME_PERMANENT = 'permanent';
  const METRIC_FAMILIES = Object.freeze({
    incomeStatement: 'income-statement',
  });

  const VIEW_TYPES = Object.freeze({
    sankey: 'sankey',
    table: 'table',
  });

  const COMPANY_SORT_KEYS = Object.freeze(['name', 'recent', 'marketCap', 'netProfit', 'founded']);
  const COMPANY_SORT_DIRECTIONS = Object.freeze(['asc', 'desc']);
  const COMPANY_SORT_CONFIG = Object.freeze({
    name: Object.freeze({ labelKey: 'companySortName', defaultDirection: 'asc', ascLabelKey: 'companySortNameAsc', descLabelKey: 'companySortNameDesc' }),
    recent: Object.freeze({ labelKey: 'companySortRecent', defaultDirection: 'desc', ascLabelKey: 'companySortRecentAsc', descLabelKey: 'companySortRecentDesc' }),
    marketCap: Object.freeze({ labelKey: 'companySortMarketCap', defaultDirection: 'desc', ascLabelKey: 'companySortMarketCapAsc', descLabelKey: 'companySortMarketCapDesc' }),
    netProfit: Object.freeze({ labelKey: 'companySortNetProfit', defaultDirection: 'desc', ascLabelKey: 'companySortNetProfitAsc', descLabelKey: 'companySortNetProfitDesc' }),
    founded: Object.freeze({ labelKey: 'companySortFounded', defaultDirection: 'asc', ascLabelKey: 'companySortFoundedAsc', descLabelKey: 'companySortFoundedDesc' }),
  });

  const MONEY_UNIT_MULTIPLIERS = Object.freeze({ T: 1e12, B: 1e9, M: 1e6, K: 1e3 });
  // Frankfurter USD rates as of 2026-06-26 from
  // https://api.frankfurter.app/latest?from=USD&to=EUR,CNY,JPY,KRW,HKD,GBP
  // Used only for cross-currency UI sorting/export normalization.
  const USD_FX_SNAPSHOT = Object.freeze({
    asOf: '2026-06-26',
    base: 'USD',
    source: 'Frankfurter',
    sourceUrl: 'https://api.frankfurter.app/latest?from=USD&to=EUR,CNY,JPY,KRW,HKD,GBP',
    unitsPerUsd: Object.freeze({
      USD: 1,
      EUR: 0.87712,
      CNY: 6.7982,
      CNH: 6.7982,
      JPY: 161.65,
      KRW: 1536.47,
      HKD: 7.8421,
      GBP: 0.75654,
    }),
  });

  const CURRENCY_CODE_ALIASES = Object.freeze({
    '$': 'USD',
    USD: 'USD',
    'US$': 'USD',
    '€': 'EUR',
    EUR: 'EUR',
    RMB: 'CNY',
    CNY: 'CNY',
    CNH: 'CNH',
    '¥': 'JPY',
    JPY: 'JPY',
    '₩': 'KRW',
    KRW: 'KRW',
    'HK$': 'HKD',
    HKD: 'HKD',
    '£': 'GBP',
    GBP: 'GBP',
  });

  const QUARTER_TAGS = Object.freeze(['Q4', 'Q3', 'Q2', 'Q1']);
  const ANNUAL_PERIOD_KEY = 'FY';

  function clean(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function normalize(value) {
    return clean(value).toLowerCase();
  }

  function finiteNumber(value) {
    if (value === null || value === undefined || value === '') return null;
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function timestampMs(value) {
    const number = finiteNumber(value);
    if (number != null) return number;
    const time = Date.parse(value);
    return Number.isFinite(time) ? time : null;
  }

  function companyKey(company) {
    return normalize(company).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'company';
  }

  function formatPeriodFromKey(key) {
    const match = clean(key).match(/((?:q[1-4]-)?fy\d{2,4})/i);
    return match ? match[1].replace('-', ' ').toUpperCase() : '';
  }

  function periodFor(dataset) {
    if (dataset?.meta?.period) return clean(dataset.meta.period);
    const name = clean(dataset?.name || dataset?.meta?.title);
    if (name.includes('·')) return clean(name.split('·').slice(1).join('·'));
    return formatPeriodFromKey(dataset?.key) || 'Unspecified';
  }

  function companyFor(dataset) {
    if (dataset?.company) return clean(dataset.company);
    if (dataset?.meta?.company) return clean(dataset.meta.company);
    const name = clean(dataset?.name || dataset?.meta?.title);
    if (name.includes('·')) return clean(name.split('·')[0]);
    const keyCompany = clean(dataset?.key).match(/^(.*?)-(?:q[1-4]-)?fy\d{2,4}/i);
    if (keyCompany?.[1]) {
      return keyCompany[1].split('-').map((part) => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');
    }
    const period = periodFor(dataset);
    return clean(name.replace(period, '').replace(/income statement/i, '')) || 'Company';
  }

  function periodSortValue(record, fallback) {
    const period = `${record.period} ${record.dataset?.key || ''}`;
    const fy = period.match(/FY\s*(20\d{2}|\d{2})/i);
    const quarter = period.match(/Q\s*([1-4])/i);
    if (fy) {
      let year = Number(fy[1]);
      if (year < 100) year += 2000;
      return year * 10 + (quarter ? Number(quarter[1]) : 5);
    }
    const months = {
      jan: 1, january: 1, feb: 2, february: 2, mar: 3, march: 3,
      apr: 4, april: 4, may: 5, jun: 6, june: 6, jul: 7, july: 7,
      aug: 8, august: 8, sep: 9, sept: 9, september: 9, oct: 10,
      october: 10, nov: 11, november: 11, dec: 12, december: 12,
    };
    const noteMatch = clean(record.periodNote).match(/([A-Za-z.]+)\s+(\d{4})/);
    if (noteMatch) {
      const month = months[noteMatch[1].replace('.', '').toLowerCase()];
      if (month) return Number(noteMatch[2]) * 12 + month;
    }
    return fallback;
  }

  function datasetFileUpdatedAtMs(dataset, datasetFileMetadata = {}) {
    const key = clean(dataset?.key);
    if (!key) return null;
    const entry = datasetFileMetadata.files?.[key] || datasetFileMetadata.files?.[`data/datasets/${key}.js`];
    return timestampMs(entry?.mtimeMs ?? entry?.mtime);
  }

  function fiscalYearLabel(year) {
    if (!Number.isFinite(year) || year <= 0) return '';
    return `FY${String(year).slice(-2).padStart(2, '0')}`;
  }

  function periodParts(record) {
    const text = clean([record.period, record.dataset?.key, record.label].filter(Boolean).join(' '));
    const fy = text.match(/\bFY\s*(20\d{2}|\d{2})\b/i) || text.match(/\bfy(20\d{2}|\d{2})\b/i);
    const quarter = text.match(/\bQ\s*([1-4])\b/i) || text.match(/\bq([1-4])[-_\s]?fy/i);
    let fiscalYearNumber = fy ? Number(fy[1]) : 0;
    if (fiscalYearNumber && fiscalYearNumber < 100) fiscalYearNumber += 2000;
    const fiscalYear = fiscalYearLabel(fiscalYearNumber) || clean(record.period) || 'Unspecified';
    const quarterNumber = quarter ? Number(quarter[1]) : 0;
    const quarterKey = quarterNumber ? `Q${quarterNumber}` : ANNUAL_PERIOD_KEY;
    return {
      fiscalYear,
      fiscalYearNumber,
      quarterKey,
      quarterNumber,
      yearKey: fiscalYear,
      isAnnual: !quarterNumber,
    };
  }

  function titleCaseVariant(value) {
    const abbreviations = new Set(['ai', 'api', 'aws', 'bu', 'cpu', 'fy', 'gaap', 'gpu', 'iot', 'saas', 'svg', 'ui', 'us', 'yoy']);
    const text = clean(String(value || '')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[_-]+/g, ' ')
      .replace(/[()[\]{}]/g, ' '));
    if (!text) return '';
    return text.split(' ').map((word) => {
      const lower = word.toLowerCase();
      if (abbreviations.has(lower)) return lower.toUpperCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }).join(' ');
  }

  function keyVariantText(record) {
    const key = clean(record.dataset?.key).toLowerCase();
    if (!key) return '';
    const quarterlySuffix = key.match(/\bq[1-4]-fy(?:20)?\d{2}(?:-(.*))?$/i);
    if (quarterlySuffix) return clean((quarterlySuffix[1] || '').replace(/[-_]+/g, ' '));
    const annualSuffix = key.match(/\bfy(?:20)?\d{2}(?:-(.*))?$/i);
    if (annualSuffix) return clean((annualSuffix[1] || '').replace(/[-_]+/g, ' '));
    const companySlug = companyKey(record.company);
    let suffix = key;
    if (companySlug && suffix.startsWith(companySlug)) suffix = suffix.slice(companySlug.length);
    suffix = suffix
      .replace(/^-+/, '')
      .replace(/\bq[1-4]-fy(?:20)?\d{2}\b/i, '')
      .replace(/\bfy(?:20)?\d{2}\b/i, '')
      .replace(/^-+|-+$/g, '')
      .replace(/[-_]+/g, ' ');
    return clean(suffix);
  }

  function variantFeatureName(record) {
    const meta = record.dataset?.meta || {};
    const explicit = meta.variant || meta.variantName || meta.viewVariant || meta.viewVariantName || record.dataset?.variant || record.dataset?.variantName;
    if (explicit) return titleCaseVariant(explicit);
    return titleCaseVariant(keyVariantText(record));
  }

  function unitMultiplier(unit) {
    const key = clean(unit).toUpperCase();
    return MONEY_UNIT_MULTIPLIERS[key] || 1;
  }

  function currencyCode(currency) {
    const raw = clean(currency);
    const key = raw.toUpperCase();
    return CURRENCY_CODE_ALIASES[raw] || CURRENCY_CODE_ALIASES[key] || key || 'USD';
  }

  function currencyUnitsPerUsd(currency) {
    return finiteNumber(USD_FX_SNAPSHOT.unitsPerUsd[currencyCode(currency)]);
  }

  function amountValueUsd(value, currency = '$', unit = '') {
    const number = finiteNumber(value);
    const unitsPerUsd = currencyUnitsPerUsd(currency);
    if (number == null || unitsPerUsd == null) return null;
    return (number * unitMultiplier(unit)) / unitsPerUsd;
  }

  function buildCompanyMetadataIndex(companies = []) {
    const byName = new Map();
    companies.forEach((company) => {
      [company.name, company.legalName, ...(company.aliases || [])].filter(Boolean).forEach((name) => {
        byName.set(normalize(name), company);
      });
    });
    return byName;
  }

  function fallbackCompanyMetadata(company) {
    return {
      key: companyKey(company),
      name: company,
      legalName: '',
      ticker: '',
      exchange: '',
      sector: '',
      industry: '',
      founded: '',
      headquarters: '',
      fiscalYearEnd: '',
      website: '',
      description: '',
      sourceUrls: [],
      marketCap: null,
    };
  }

  function createDatasetRecords(datasets = [], datasetFileMetadata = {}) {
    const records = datasets.map((dataset, index) => {
      const period = periodFor(dataset);
      const periodNote = clean(dataset?.meta?.periodNote);
      const company = companyFor(dataset);
      const label = clean(dataset?.name || dataset?.meta?.title || dataset?.key || `Dataset ${index + 1}`);
      return { dataset, index, company, period, periodNote, label, sortValue: 0, updatedSortValue: null, periodParts: null, variantFeature: '' };
    });
    records.forEach((record, index) => {
      record.sortValue = periodSortValue(record, index);
      record.updatedSortValue = datasetFileUpdatedAtMs(record.dataset, datasetFileMetadata);
      record.periodParts = periodParts(record);
      record.variantFeature = variantFeatureName(record);
      record.searchText = [record.company, record.period, record.periodNote, record.variantFeature, record.label, record.dataset.key].join(' ');
    });
    return records;
  }

  function createCompanyGroups(records = []) {
    return Array.from(records.reduce((map, record) => {
      if (!map.has(record.company)) map.set(record.company, { company: record.company, records: [] });
      map.get(record.company).records.push(record);
      return map;
    }, new Map()).values()).map((group) => {
      group.records.sort((a, b) => b.sortValue - a.sortValue || a.period.localeCompare(b.period));
      group.latest = group.records[0];
      group.updatedSortValue = group.records.reduce((latest, record) => Math.max(latest, record.updatedSortValue ?? -Infinity), -Infinity);
      if (group.updatedSortValue === -Infinity) group.updatedSortValue = null;
      group.searchText = [group.company, ...group.records.map((record) => record.searchText)].join(' ');
      return group;
    }).sort((a, b) => a.company.localeCompare(b.company));
  }

  function createCatalog(source = global) {
    const datasets = source.DATASETS || [];
    const datasetFileMetadata = source.DATASET_FILE_METADATA || {};
    const financialRecords = source.INCOME_STATEMENT_SSOT?.records || [];
    const companyMetadata = source.COMPANY_METADATA?.companies || [];
    const productCatalog = source.PRODUCT_CATALOG || {};
    const records = createDatasetRecords(datasets, datasetFileMetadata);

    return {
      datasets,
      datasetFileMetadata,
      records,
      groups: createCompanyGroups(records),
      financialRecords,
      financialRecordByKey: new Map(financialRecords.map((record) => [record.key, record])),
      companyMetadata,
      companyMetadataByName: buildCompanyMetadataIndex(companyMetadata),
      products: productCatalog.products || [],
      companyProductRelationships: productCatalog.companyProductRelationships || [],
    };
  }

  global.TraceDomain = Object.freeze({
    ENTITY_TYPES,
    METRIC_SUBJECT_TYPES,
    TIME_PERMANENT,
    METRIC_FAMILIES,
    VIEW_TYPES,
    COMPANY_SORT_KEYS,
    COMPANY_SORT_DIRECTIONS,
    COMPANY_SORT_CONFIG,
    MONEY_UNIT_MULTIPLIERS,
    USD_FX_SNAPSHOT,
    CURRENCY_CODE_ALIASES,
    QUARTER_TAGS,
    ANNUAL_PERIOD_KEY,
    clean,
    normalize,
    finiteNumber,
    timestampMs,
    companyKey,
    formatPeriodFromKey,
    periodFor,
    companyFor,
    periodSortValue,
    datasetFileUpdatedAtMs,
    fiscalYearLabel,
    periodParts,
    titleCaseVariant,
    keyVariantText,
    variantFeatureName,
    unitMultiplier,
    currencyCode,
    currencyUnitsPerUsd,
    amountValueUsd,
    buildCompanyMetadataIndex,
    fallbackCompanyMetadata,
    createDatasetRecords,
    createCompanyGroups,
    createCatalog,
  });
})(window);
