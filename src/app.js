const sets = window.DATASETS || [];
const companySearch = document.getElementById('companySearch');
const companySearchToggle = document.getElementById('companySearchToggle');
const companySortToggle = document.getElementById('companySortToggle');
const companySortMenu = document.getElementById('companySortMenu');
const companySortOptions = document.getElementById('companySortOptions');
const companySection = document.querySelector('.company-section');
const periodSearch = document.getElementById('periodSearch');
const periodSearchToggle = document.getElementById('periodSearchToggle');
const periodSortToggle = document.getElementById('periodSortToggle');
const periodSection = document.querySelector('.period-section');
const companyList = document.getElementById('companyList');
const periodList = document.getElementById('periodList');
const app = document.querySelector('.app');
const topShell = document.querySelector('.top-shell');
const actionTitle = document.getElementById('actionTitle');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarResizer = document.getElementById('sidebarResizer');
const content = document.querySelector('.content');
const viewMode = document.getElementById('viewMode');
const sankeyView = document.getElementById('sankeyView');
const tableView = document.getElementById('tableView');
const sankeyActions = document.getElementById('sankeyActions');
const tableActions = document.getElementById('tableActions');
const companiesTable = document.getElementById('companiesTable');
const statementsTable = document.getElementById('statementsTable');
const companiesTableCount = document.getElementById('companiesTableCount');
const statementsTableCount = document.getElementById('statementsTableCount');
const svgBtn = document.getElementById('svgBtn');
const pngBtn = document.getElementById('pngBtn');
const companiesCsvBtn = document.getElementById('companiesCsvBtn');
const statementsCsvBtn = document.getElementById('statementsCsvBtn');
const languageToggle = document.getElementById('languageToggle');
const languageToggleText = document.getElementById('languageToggleText');
const themeToggle = document.getElementById('themeToggle');
const SIDEBAR_WIDTH_KEY = 'sankey.sidebar.width';
const SIDEBAR_COLLAPSED_KEY = 'sankey.sidebar.collapsed';
const VIEW_MODE_KEY = 'sankey.view.mode';
const LANGUAGE_KEY = 'sankey.language';
const THEME_KEY = 'sankey.theme';
const COMPANY_SORT_KEY = 'sankey.company.sort';
const COMPANY_SORT_DIRECTION_KEY = 'sankey.company.sort.direction';
const COMPANY_SORT_KEYS = ['name', 'recent', 'marketCap', 'netProfit', 'founded'];
const COMPANY_SORT_DIRECTIONS = ['asc', 'desc'];
const COMPANY_SORT_CONFIG = {
  name: { labelKey: 'companySortName', defaultDirection: 'asc', ascLabelKey: 'companySortNameAsc', descLabelKey: 'companySortNameDesc' },
  recent: { labelKey: 'companySortRecent', defaultDirection: 'desc', ascLabelKey: 'companySortRecentAsc', descLabelKey: 'companySortRecentDesc' },
  marketCap: { labelKey: 'companySortMarketCap', defaultDirection: 'desc', ascLabelKey: 'companySortMarketCapAsc', descLabelKey: 'companySortMarketCapDesc' },
  netProfit: { labelKey: 'companySortNetProfit', defaultDirection: 'desc', ascLabelKey: 'companySortNetProfitAsc', descLabelKey: 'companySortNetProfitDesc' },
  founded: { labelKey: 'companySortFounded', defaultDirection: 'asc', ascLabelKey: 'companySortFoundedAsc', descLabelKey: 'companySortFoundedDesc' },
};
const MONEY_UNIT_MULTIPLIERS = { T: 1e12, B: 1e9, M: 1e6, K: 1e3 };
// Frankfurter USD rates as of 2026-06-19; used only for cross-currency UI sorting.
const CURRENCY_UNITS_PER_USD = {
  '$': 1,
  USD: 1,
  'US$': 1,
  '€': 0.87207,
  EUR: 0.87207,
  RMB: 6.7693,
  CNY: 6.7693,
  CNH: 6.7693,
  KRW: 1532.31,
};
const SIDEBAR_MIN = 220;
const SIDEBAR_MAX = 560;
const SIDEBAR_DEFAULT = 282;
const DESKTOP_BREAKPOINT = 900;
const QUARTER_TAGS = ['Q4', 'Q3', 'Q2', 'Q1'];
const ANNUAL_PERIOD_KEY = 'FY';
const TABLE_COLUMN_SAMPLE_LIMIT = 80;
const TABLE_OVERSCAN_VIEWPORTS = 2;
const TABLE_COLUMN_PRESETS = {
  compact: { min: 54, max: 84, charWidth: 5.8 },
  text: { min: 84, max: 160, charWidth: 5.8 },
  id: { min: 116, max: 176, charWidth: 5.8 },
  money: { min: 86, max: 110, charWidth: 5.8 },
  link: { min: 72, max: 110, charWidth: 5.6 },
  url: { min: 108, max: 170, charWidth: 5.3 },
  wide: { min: 210, max: 330, charWidth: 5.1, wrapFactor: 0.58 },
  description: { min: 230, max: 370, charWidth: 5.1, wrapFactor: 0.48 },
};
const virtualTables = new WeakMap();
let virtualTableFrame = 0;
const I18N_API = window.SANKEY_I18N || {};
const I18N = I18N_API.ui || {
  en: {
    documentTitle: 'Income Statement Sankey Visualizer',
    appTitle: 'Income Statement Sankey Visualizer',
    byline: 'by',
    viewModeLabel: 'Data view',
    viewSankey: 'Sankey',
    viewSankeyTitle: 'Sankey view',
    viewTable: 'Table',
    viewTableTitle: 'Table view',
    globalSettingsLabel: 'Global settings',
    languageToggleTitle: 'Switch language to Chinese',
    languageToggleText: 'EN',
    themeToggleDark: 'Switch to dark mode',
    themeToggleLight: 'Switch to light mode',
    viewActionsLabel: 'View actions',
    downloadSvg: 'SVG',
    downloadSvgTitle: 'Download SVG',
    downloadPng: 'PNG',
    downloadPngTitle: 'Download PNG',
    downloadCompaniesCsv: 'Companies CSV',
    downloadCompaniesCsvTitle: 'Download companies CSV',
    downloadStatementsCsv: 'Statements CSV',
    downloadStatementsCsvTitle: 'Download income statements CSV',
    datasetNavigationLabel: 'Dataset navigation',
    companyLabel: 'Company',
    companiesLabel: 'Companies',
    companySearchPlaceholder: 'Search companies',
    companySortButton: 'Sort companies',
    companySortCurrent: 'Sort companies: {sort}, {direction}',
    companySortName: 'Alphabetical',
    companySortRecent: 'Recently updated',
    companySortMarketCap: 'Market cap',
    companySortNetProfit: 'Net profit',
    companySortFounded: 'Founded date',
    companySortAction: '{sort}: {direction}',
    companySortDirectionGroup: '{sort} direction',
    companySortNameAsc: 'A to Z',
    companySortNameDesc: 'Z to A',
    companySortRecentAsc: 'Oldest first',
    companySortRecentDesc: 'Newest first',
    companySortMarketCapAsc: 'Smallest first',
    companySortMarketCapDesc: 'Largest first',
    companySortNetProfitAsc: 'Lowest first',
    companySortNetProfitDesc: 'Highest first',
    companySortFoundedAsc: 'Oldest first',
    companySortFoundedDesc: 'Newest first',
    companySortMetaMarketCap: 'Mkt cap {value}',
    companySortMetaNetProfit: 'Net profit {value}',
    companySortMetaFounded: 'Founded {value}',
    periodLabel: 'Data point time',
    periodSortLabel: 'Sort time points',
    sortDesc: 'Desc',
    sortDescTitle: 'Newest first',
    sortAsc: 'Asc',
    sortAscTitle: 'Oldest first',
    periodSearchPlaceholder: 'Search time points',
    periodsLabel: 'Data point times',
    resizeDatasetPanelLabel: 'Resize dataset panel',
    incomeStatementsLabel: 'Income Statements',
    collapseDatasetPanel: 'Collapse dataset panel',
    showDatasetPanel: 'Show dataset panel',
    missing: 'Missing',
    source: 'Source {number}',
    companiesCountOne: '1 company',
    companiesCountMany: '{count} companies',
    statementsCountOne: '1 statement',
    statementsCountMany: '{count} statements',
    noCompaniesRegistered: 'No companies registered.',
    noIncomeStatementsRegistered: 'No income statements registered.',
    noDataPointSelected: 'No data point selected',
    noMatchingCompanies: 'No matching companies.',
    noMatchingTimePoints: 'No matching time points.',
    latest: 'Latest',
    viewVariantsLabel: 'View variants',
    defaultVariant: 'Main',
    annualPeriodTag: 'FY',
    tableCompany: 'Company',
    tableLegalName: 'Legal name',
    tableTicker: 'Ticker',
    tableMarketCap: 'Market cap',
    tableSector: 'Sector',
    tableIndustry: 'Industry',
    tableFounded: 'Founded',
    tableHeadquarters: 'Headquarters',
    tableFiscalYearEnd: 'Fiscal year end',
    tableDatasets: 'Datasets',
    tableLatest: 'Latest',
    tableWebsite: 'Website',
    tableDescription: 'Description',
    tableSources: 'Sources',
    tableDataset: 'Dataset',
    tablePeriod: 'Period',
    tablePeriodEnd: 'Period end',
    tableRevenue: 'Revenue',
    tableRevenueItems: 'Revenue items',
    tableCostOfRevenue: 'Cost of revenue',
    tableGrossProfit: 'Gross profit',
    tableOperatingExpenses: 'Operating expenses',
    tableOpexItems: 'Opex items',
    tableOperatingProfit: 'Operating profit',
    tableOtherIncome: 'Other income',
    tableTax: 'Tax',
    tableNetProfit: 'Net profit',
    tableSourceImage: 'Source image',
  },
  zh: {
    documentTitle: '利润表桑基图可视化',
    appTitle: '利润表桑基图可视化',
    byline: '作者',
    viewModeLabel: '数据视图',
    viewSankey: '桑基图',
    viewSankeyTitle: '桑基图视图',
    viewTable: '表格',
    viewTableTitle: '表格视图',
    globalSettingsLabel: '全局设置',
    languageToggleTitle: '切换到英文',
    languageToggleText: '中',
    themeToggleDark: '切换到深色模式',
    themeToggleLight: '切换到浅色模式',
    viewActionsLabel: '视图操作',
    downloadSvg: 'SVG',
    downloadSvgTitle: '下载 SVG',
    downloadPng: 'PNG',
    downloadPngTitle: '下载 PNG',
    downloadCompaniesCsv: '公司 CSV',
    downloadCompaniesCsvTitle: '下载公司 CSV',
    downloadStatementsCsv: '报表 CSV',
    downloadStatementsCsvTitle: '下载利润表 CSV',
    datasetNavigationLabel: '数据集导航',
    companyLabel: '公司',
    companiesLabel: '公司',
    companySearchPlaceholder: '搜索公司',
    companySortButton: '公司排序',
    companySortCurrent: '公司排序：{sort}，{direction}',
    companySortName: '字母序',
    companySortRecent: '最近更新',
    companySortMarketCap: '市值',
    companySortNetProfit: '净利润',
    companySortFounded: '成立日期',
    companySortAction: '{sort}：{direction}',
    companySortDirectionGroup: '{sort}排序方向',
    companySortNameAsc: 'A 到 Z',
    companySortNameDesc: 'Z 到 A',
    companySortRecentAsc: '最旧优先',
    companySortRecentDesc: '最新优先',
    companySortMarketCapAsc: '市值从低到高',
    companySortMarketCapDesc: '市值从高到低',
    companySortNetProfitAsc: '净利润从低到高',
    companySortNetProfitDesc: '净利润从高到低',
    companySortFoundedAsc: '成立最早优先',
    companySortFoundedDesc: '成立最新优先',
    companySortMetaMarketCap: '市值 {value}',
    companySortMetaNetProfit: '净利润 {value}',
    companySortMetaFounded: '成立于 {value}',
    periodLabel: '数据期间',
    periodSortLabel: '排序数据期间',
    sortDesc: '降序',
    sortDescTitle: '最新优先',
    sortAsc: '升序',
    sortAscTitle: '最旧优先',
    periodSearchPlaceholder: '搜索数据期间',
    periodsLabel: '数据期间',
    resizeDatasetPanelLabel: '调整数据集面板宽度',
    incomeStatementsLabel: '利润表',
    collapseDatasetPanel: '收起数据集面板',
    showDatasetPanel: '显示数据集面板',
    missing: '缺失',
    source: '来源 {number}',
    companiesCountOne: '1 家公司',
    companiesCountMany: '{count} 家公司',
    statementsCountOne: '1 份报表',
    statementsCountMany: '{count} 份报表',
    noCompaniesRegistered: '暂无已注册公司。',
    noIncomeStatementsRegistered: '暂无已注册利润表。',
    noDataPointSelected: '未选择数据期间',
    noMatchingCompanies: '没有匹配的公司。',
    noMatchingTimePoints: '没有匹配的数据期间。',
    latest: '最新',
    viewVariantsLabel: '视图变体',
    defaultVariant: '主视图',
    annualPeriodTag: 'FY',
    tableCompany: '公司',
    tableLegalName: '法定名称',
    tableTicker: '股票代码',
    tableMarketCap: '市值',
    tableSector: '板块',
    tableIndustry: '行业',
    tableFounded: '成立年份',
    tableHeadquarters: '总部',
    tableFiscalYearEnd: '财年结束日',
    tableDatasets: '数据集',
    tableLatest: '最新期间',
    tableWebsite: '网站',
    tableDescription: '描述',
    tableSources: '来源',
    tableDataset: '数据集',
    tablePeriod: '期间',
    tablePeriodEnd: '期间结束',
    tableRevenue: '收入',
    tableRevenueItems: '收入项目',
    tableCostOfRevenue: '收入成本',
    tableGrossProfit: '毛利润',
    tableOperatingExpenses: '运营费用',
    tableOpexItems: '运营费用项目',
    tableOperatingProfit: '运营利润',
    tableOtherIncome: '其他收入',
    tableTax: '税费',
    tableNetProfit: '净利润',
    tableSourceImage: '来源图片',
  },
};
const i18nObjectCaches = {
  datasets: new Map(),
  financialRecords: new Map(),
  companies: new Map(),
  records: new Map(),
  groups: new Map(),
};
const i18nTextCache = new Map();
const tableModelCache = new Map();

function readStoredNumber(key, fallback) {
  try {
    const value = Number(window.localStorage.getItem(key));
    return Number.isFinite(value) && value > 0 ? value : fallback;
  } catch (error) {
    return fallback;
  }
}
function readStoredBoolean(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? fallback : value === 'true';
  } catch (error) {
    return fallback;
  }
}
function writeStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, String(value));
  } catch (error) {
    /* Ignore storage failures in private browsing or file previews. */
  }
}
function readStoredViewMode() {
  try {
    return window.localStorage.getItem(VIEW_MODE_KEY) === 'table' ? 'table' : 'sankey';
  } catch (error) {
    return 'sankey';
  }
}
function readStoredLanguage() {
  try {
    return I18N_API.normalizeLanguage
      ? I18N_API.normalizeLanguage(window.localStorage.getItem(LANGUAGE_KEY))
      : window.localStorage.getItem(LANGUAGE_KEY) === 'zh' ? 'zh' : 'en';
  } catch (error) {
    return I18N_API.defaultLanguage || 'en';
  }
}
function readStoredTheme() {
  try {
    return window.localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
  } catch (error) {
    return 'light';
  }
}
function readStoredCompanySort() {
  try {
    const value = window.localStorage.getItem(COMPANY_SORT_KEY);
    const [sortKey] = String(value || '').split(':');
    return COMPANY_SORT_KEYS.includes(sortKey) ? sortKey : 'name';
  } catch (error) {
    return 'name';
  }
}
function defaultCompanySortDirection(sortKey) {
  return COMPANY_SORT_CONFIG[sortKey]?.defaultDirection || 'asc';
}
function normalizeCompanySortDirection(sortKey, direction) {
  return COMPANY_SORT_DIRECTIONS.includes(direction) ? direction : defaultCompanySortDirection(sortKey);
}
function readStoredCompanySortDirection(sortKey) {
  try {
    const legacyValue = String(window.localStorage.getItem(COMPANY_SORT_KEY) || '');
    const legacyDirection = legacyValue.includes(':') ? legacyValue.split(':')[1] : '';
    const value = window.localStorage.getItem(COMPANY_SORT_DIRECTION_KEY) || legacyDirection;
    return normalizeCompanySortDirection(sortKey, value);
  } catch (error) {
    return defaultCompanySortDirection(sortKey);
  }
}
function t(key, values = {}, language = state?.language) {
  const code = languageCode(language);
  if (I18N_API.t) return I18N_API.t(key, values, code);
  const bundle = I18N[code] || I18N.en;
  const text = bundle[key] || I18N.en[key] || key;
  return text.replace(/\{(\w+)\}/g, (_match, name) => values[name] ?? '');
}
function languageCode(language = state?.language) {
  return I18N_API.normalizeLanguage
    ? I18N_API.normalizeLanguage(language)
    : language === 'zh' ? 'zh' : 'en';
}
function languageObjectCache(cache, language = state.language) {
  const code = languageCode(language);
  if (!cache.has(code)) cache.set(code, new WeakMap());
  return cache.get(code);
}
function cachedLocalizedObject(cache, source, localizer, language = state.language) {
  const code = languageCode(language);
  if (!source || typeof source !== 'object' || code === (I18N_API.defaultLanguage || 'en') || !localizer) return source;
  const byLanguage = languageObjectCache(cache, code);
  if (!byLanguage.has(source)) byLanguage.set(source, localizer(source, code));
  return byLanguage.get(source);
}
function countText(oneKey, manyKey, count) {
  return t(count === 1 ? oneKey : manyKey, { count });
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function isDesktopLayout() {
  return window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT + 1}px)`).matches;
}
function sidebarBounds() {
  const viewport = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const responsiveMax = isDesktopLayout() && viewport ? Math.floor(viewport * 0.45) : SIDEBAR_MAX;
  return { min: SIDEBAR_MIN, max: Math.max(SIDEBAR_MIN, Math.min(SIDEBAR_MAX, responsiveMax)) };
}

function normalize(value) {
  return String(value || '').toLowerCase().replace(/\s+/g, ' ').trim();
}
function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]));
}
function matches(text, query) {
  const haystack = normalize(text);
  return normalize(query).split(' ').filter(Boolean).every((token) => haystack.includes(token));
}
function clean(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}
function formatPeriodFromKey(key) {
  const match = clean(key).match(/((?:q[1-4]-)?fy\d{2,4})/i);
  return match ? match[1].replace('-', ' ').toUpperCase() : '';
}
function periodFor(dataset) {
  if (dataset.meta?.period) return clean(dataset.meta.period);
  const name = clean(dataset.name || dataset.meta?.title);
  if (name.includes('·')) return clean(name.split('·').slice(1).join('·'));
  return formatPeriodFromKey(dataset.key) || 'Unspecified';
}
function companyFor(dataset) {
  if (dataset.company) return clean(dataset.company);
  if (dataset.meta?.company) return clean(dataset.meta.company);
  const name = clean(dataset.name || dataset.meta?.title);
  if (name.includes('·')) return clean(name.split('·')[0]);
  const keyCompany = clean(dataset.key).match(/^(.*?)-(?:q[1-4]-)?fy\d{2,4}/i);
  if (keyCompany?.[1]) {
    return keyCompany[1].split('-').map((part) => part ? part[0].toUpperCase() + part.slice(1) : part).join(' ');
  }
  const period = periodFor(dataset);
  return clean(name.replace(period, '').replace(/income statement/i, '')) || 'Company';
}
function periodSortValue(record, fallback) {
  const period = `${record.period} ${record.dataset.key || ''}`;
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

const records = sets.map((dataset, index) => {
  const period = periodFor(dataset);
  const periodNote = clean(dataset.meta?.periodNote);
  const company = companyFor(dataset);
  const label = clean(dataset.name || dataset.meta?.title || dataset.key || `Dataset ${index + 1}`);
  return { dataset, index, company, period, periodNote, label, sortValue: 0, periodParts: null, variantFeature: '' };
});
records.forEach((record, index) => {
  record.sortValue = periodSortValue(record, index);
  record.periodParts = periodParts(record);
  record.variantFeature = variantFeatureName(record);
  record.searchText = [record.company, record.period, record.periodNote, record.variantFeature, record.label, record.dataset.key].join(' ');
});
const groups = Array.from(records.reduce((map, record) => {
  if (!map.has(record.company)) map.set(record.company, { company: record.company, records: [] });
  map.get(record.company).records.push(record);
  return map;
}, new Map()).values()).map((group) => {
  group.records.sort((a, b) => b.sortValue - a.sortValue || a.period.localeCompare(b.period));
  group.latest = group.records[0];
  group.searchText = [group.company, ...group.records.map((record) => record.searchText)].join(' ');
  return group;
}).sort((a, b) => a.company.localeCompare(b.company));
const financialRecords = window.INCOME_STATEMENT_SSOT?.records || [];
const financialRecordByKey = new Map(financialRecords.map((record) => [record.key, record]));
const companyMetadata = window.COMPANY_METADATA?.companies || [];
const companyMetadataByName = new Map();
companyMetadata.forEach((company) => {
  [company.name, company.legalName, ...(company.aliases || [])].filter(Boolean).forEach((name) => {
    companyMetadataByName.set(normalize(name), company);
  });
});

const defaultIndex = sets.findIndex((d) => d.key === 'salesforce-q1-fy27');
function datasetKeyFromHash() {
  const raw = window.location.hash ? window.location.hash.slice(1) : '';
  if (!raw) return '';
  try {
    return decodeURIComponent(raw);
  } catch (error) {
    return raw;
  }
}
function recordFromHash() {
  const key = datasetKeyFromHash();
  return key ? records.find((record) => record.dataset.key === key) : null;
}
function syncDatasetHash(record) {
  const key = record?.dataset?.key;
  if (!key) return;
  const nextHash = `#${encodeURIComponent(key)}`;
  if (window.location.hash === nextHash) return;
  window.history.replaceState(null, '', nextHash);
}

const activeStart = recordFromHash() || records[defaultIndex >= 0 ? defaultIndex : 0];
const storedCompanySort = readStoredCompanySort();
const state = {
  sort: 'desc',
  companySort: storedCompanySort,
  companySortDirection: readStoredCompanySortDirection(storedCompanySort),
  activeIndex: activeStart?.index || 0,
  company: activeStart?.company || groups[0]?.company || '',
  viewMode: readStoredViewMode(),
  language: readStoredLanguage(),
  theme: readStoredTheme(),
  sidebarWidth: readStoredNumber(SIDEBAR_WIDTH_KEY, SIDEBAR_DEFAULT),
  sidebarCollapsed: readStoredBoolean(SIDEBAR_COLLAPSED_KEY, false),
};

function moonIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 3a6.7 6.7 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
}
function sunIcon() {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
}
function sortIcon(direction) {
  const arrow = direction === 'asc' ? '<path d="M7 17V7"/><path d="m4 10 3-3 3 3"/>' : '<path d="M7 7v10"/><path d="m4 14 3 3 3-3"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">${arrow}<path d="M13 8h7"/><path d="M13 12h5"/><path d="M13 16h3"/></svg>`;
}
function directionArrowPath(direction, x = 18) {
  return direction === 'asc'
    ? `<path d="M${x} 17V7"/><path d="m${x - 3} 10 3-3 3 3"/>`
    : `<path d="M${x} 7v10"/><path d="m${x - 3} 14 3 3 3-3"/>`;
}
function alphabetArrowPath(direction, x = 18) {
  return directionArrowPath(direction === 'asc' ? 'desc' : 'asc', x);
}
function sortDirectionIcon(direction, sortKey = '') {
  if (sortKey === 'name') {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><text x="4" y="9" fill="currentColor" font-size="8" font-weight="800" stroke="none">A</text><text x="4" y="19" fill="currentColor" font-size="8" font-weight="800" stroke="none">Z</text><g fill="none" stroke="currentColor">${alphabetArrowPath(direction, 18)}</g></svg>`;
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">${directionArrowPath(direction, 12)}<path d="M8 8h8"/><path d="M9 16h6"/></svg>`;
}
function companySortFieldIcon(sortKey, direction = '') {
  const arrow = direction ? directionArrowPath(direction, 18) : '';
  if (sortKey === 'recent') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="8.5" cy="8.5" r="4.5"/><path d="M8.5 6v3l2 1.2"/><path d="M4 18h8"/><path d="M4 21h5"/>${arrow}</svg>`;
  }
  if (sortKey === 'marketCap') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M5 18V11"/><path d="M9 18V7"/><path d="M13 18v-4"/><path d="M4 18h10"/><path d="M9 4v3"/>${arrow}</svg>`;
  }
  if (sortKey === 'netProfit') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 16l4-4 3 3 5-7"/><path d="M13 8h3v3"/><path d="M4 20h10"/>${arrow}</svg>`;
  }
  if (sortKey === 'founded') {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="4" y="5" width="10" height="12" rx="1.5"/><path d="M7 3v4"/><path d="M11 3v4"/><path d="M4 9h10"/><path d="M7 12h1"/><path d="M11 12h1"/>${arrow}</svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><text x="4" y="9" fill="currentColor" font-size="8" font-weight="800" stroke="none">A</text><text x="4" y="19" fill="currentColor" font-size="8" font-weight="800" stroke="none">Z</text><g fill="none" stroke="currentColor">${direction ? alphabetArrowPath(direction, 18) : '<path d="M16 7h4"/><path d="M16 17h4"/>'}</g></svg>`;
}
function companySortIcon() {
  return companySortFieldIcon(state.companySort, state.companySortDirection);
}
function syncThemeControls() {
  document.documentElement.dataset.theme = state.theme;
  themeToggle.innerHTML = state.theme === 'dark' ? moonIcon() : sunIcon();
  const label = state.theme === 'dark' ? t('themeToggleLight') : t('themeToggleDark');
  themeToggle.setAttribute('aria-label', label);
  themeToggle.title = label;
  themeToggle.setAttribute('aria-pressed', state.theme === 'dark' ? 'true' : 'false');
}
function applyStaticTranslations() {
  document.documentElement.lang = I18N_API.htmlLang ? I18N_API.htmlLang(state.language) : state.language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });
  languageToggleText.textContent = t('languageToggleText');
  languageToggle.setAttribute('aria-label', t('languageToggleTitle'));
  languageToggle.title = t('languageToggleTitle');
  syncThemeControls();
  syncCompanySortControls();
  syncPeriodSortToggle();
  syncSidebarControls();
  syncToolbarHeight();
}
function setLanguage(language) {
  const nextLanguage = I18N_API.normalizeLanguage ? I18N_API.normalizeLanguage(language) : language;
  if (!I18N[nextLanguage]) return;
  if (state.language === nextLanguage) return;
  state.language = nextLanguage;
  writeStoredValue(LANGUAGE_KEY, nextLanguage);
  applyStaticTranslations();
  renderAll();
  draw({ renderTable: false, syncView: false });
}
function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') return;
  if (state.theme === theme) return;
  state.theme = theme;
  writeStoredValue(THEME_KEY, theme);
  syncThemeControls();
}
function sidebarToggleIcon(expanded) {
  const arrow = expanded ? '<path d="m16 9-3 3 3 3"/>' : '<path d="m13 9 3 3-3 3"/>';
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>${arrow}</svg>`;
}
function applySidebarWidth(width, persist = false) {
  const bounds = sidebarBounds();
  const nextWidth = Math.round(clamp(width, bounds.min, bounds.max));
  state.sidebarWidth = nextWidth;
  document.documentElement.style.setProperty('--sidebar-width', `${nextWidth}px`);
  sidebarResizer.setAttribute('aria-valuemin', String(bounds.min));
  sidebarResizer.setAttribute('aria-valuemax', String(bounds.max));
  sidebarResizer.setAttribute('aria-valuenow', String(nextWidth));
  if (persist) writeStoredValue(SIDEBAR_WIDTH_KEY, nextWidth);
}
function syncToolbarHeight() {
  const height = Math.ceil(topShell.getBoundingClientRect().height || 52);
  document.documentElement.style.setProperty('--toolbar-height', `${height}px`);
}
function syncSidebarControls() {
  const expanded = !state.sidebarCollapsed;
  app.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  sidebarToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  const label = expanded ? t('collapseDatasetPanel') : t('showDatasetPanel');
  sidebarToggle.setAttribute('aria-label', label);
  sidebarToggle.title = label;
  sidebarToggle.innerHTML = sidebarToggleIcon(expanded);
  sidebarResizer.tabIndex = expanded && isDesktopLayout() ? 0 : -1;
  sidebarResizer.setAttribute('aria-hidden', expanded && isDesktopLayout() ? 'false' : 'true');
}
function setSidebarCollapsed(collapsed, persist = true, redraw = true) {
  state.sidebarCollapsed = collapsed;
  syncSidebarControls();
  if (persist) writeStoredValue(SIDEBAR_COLLAPSED_KEY, collapsed);
  if (redraw) draw();
}
function syncResponsiveLayout() {
  syncToolbarHeight();
  applySidebarWidth(state.sidebarWidth);
  syncSidebarControls();
}

function currentRecord() {
  return records.find((record) => record.index === state.activeIndex) || records[0];
}
function currentDataset() {
  return currentRecord()?.dataset || sets[0];
}
function localizedDataset(dataset, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.datasets, dataset, I18N_API.localizeDataset, language);
}
function localizedFinancialRecord(record, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.financialRecords, record, I18N_API.localizeFinancialRecord, language);
}
function localizedCompanyRecord(company, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.companies, company, I18N_API.localizeCompanyMetadata, language);
}
function localizedText(value, language = state.language) {
  if (!I18N_API.text || value == null) return value;
  const code = languageCode(language);
  if (code === (I18N_API.defaultLanguage || 'en')) return value;
  const key = `${code}\u0000${String(value)}`;
  if (!i18nTextCache.has(key)) i18nTextCache.set(key, I18N_API.text(value, code));
  return i18nTextCache.get(key);
}
function displayDataset(record, language = state.language) {
  return displayRecord(record, language).dataset;
}
function displayRecord(record, language = state.language) {
  const code = languageCode(language);
  if (!record) {
    return {
      dataset: null,
      company: '',
      period: '',
      periodNote: '',
      label: '',
      variantLabel: t('defaultVariant', {}, code),
      searchText: '',
    };
  }
  const byLanguage = languageObjectCache(i18nObjectCaches.records, code);
  if (byLanguage.has(record)) return byLanguage.get(record);
  const dataset = localizedDataset(record.dataset, code) || record.dataset;
  const meta = localizedCompanyRecord(metadataFor(record.company), code);
  const display = {
    dataset,
    company: clean(meta.displayName || meta.name || record.company),
    period: periodFor(dataset),
    periodNote: clean(dataset?.meta?.periodNote || record.periodNote),
    label: clean(dataset?.name || dataset?.meta?.title || record.label),
    variantLabel: record.variantFeature ? localizedText(record.variantFeature, code) : t('defaultVariant', {}, code),
  };
  display.searchText = [
    record.searchText,
    display.company,
    display.period,
    display.periodNote,
    display.label,
    display.variantLabel,
  ].join(' ');
  byLanguage.set(record, display);
  return display;
}
function displayCompany(record, language = state.language) {
  return displayRecord(record, language).company;
}
function displayPeriod(record, language = state.language) {
  return displayRecord(record, language).period;
}
function displayPeriodNote(record, language = state.language) {
  return displayRecord(record, language).periodNote;
}
function displayLabel(record, language = state.language) {
  return displayRecord(record, language).label;
}
function groupFor(company) {
  return groups.find((group) => group.company === company) || groups[0];
}
function sortedRecordList(recordList) {
  const direction = state.sort === 'asc' ? 1 : -1;
  return [...(recordList || [])].sort((a, b) =>
    direction * (a.sortValue - b.sortValue) ||
    a.period.localeCompare(b.period) ||
    a.index - b.index
  );
}
function sortedRecords(group) {
  return sortedRecordList(group?.records || []);
}
function sortedVariantRecords(recordList) {
  return [...(recordList || [])].sort((a, b) =>
    (a.variantFeature ? 1 : 0) - (b.variantFeature ? 1 : 0) ||
    a.dataset.key.length - b.dataset.key.length ||
    a.index - b.index
  );
}
function variantLabel(record, language = state.language) {
  return displayRecord(record, language).variantLabel;
}
function recordByIndex(index) {
  return records.find((record) => record.index === index);
}
function selectRecord(record, scrollKind = 'statement') {
  if (!record) return;
  state.activeIndex = record.index;
  state.company = record.company;
  syncDatasetHash(record);
  renderAll();
  draw({ renderTable: false, syncView: false });
  scrollActiveTableRow(scrollKind);
}
function descriptionForPeriodRecord(record, bucket) {
  if (!record) return '';
  const parts = [
    record.periodParts.quarterKey === ANNUAL_PERIOD_KEY ? t('annualPeriodTag') : record.periodParts.quarterKey,
    displayPeriodNote(record) || displayLabel(record),
  ];
  if ((bucket?.records || []).length > 1 || record.variantFeature) parts.push(variantLabel(record));
  return parts.map(clean).filter(Boolean).join(' · ');
}
function periodTreeFor(group) {
  const visibleRecords = sortedRecords(group).filter((record) => matches(searchTextForRecord(record), periodSearch.value));
  const yearMap = new Map();
  visibleRecords.forEach((record) => {
    const parts = record.periodParts;
    if (!yearMap.has(parts.yearKey)) {
      yearMap.set(parts.yearKey, {
        yearKey: parts.yearKey,
        fiscalYearNumber: parts.fiscalYearNumber,
        sortValue: record.sortValue,
        records: [],
        quarters: new Map(),
      });
    }
    const year = yearMap.get(parts.yearKey);
    year.records.push(record);
    year.sortValue = Math.max(year.sortValue, record.sortValue);
    if (!year.quarters.has(parts.quarterKey)) {
      year.quarters.set(parts.quarterKey, {
        key: parts.quarterKey,
        quarterNumber: parts.quarterNumber,
        records: [],
      });
    }
    year.quarters.get(parts.quarterKey).records.push(record);
  });
  const direction = state.sort === 'asc' ? 1 : -1;
  return Array.from(yearMap.values())
    .map((year) => {
      year.quarters.forEach((quarter) => {
        quarter.records = sortedVariantRecords(quarter.records);
      });
      const activeRecord = year.records.find((record) => record.index === state.activeIndex);
      const defaultRecord = sortedRecordList(year.records)[0];
      const selectedQuarterKey = (activeRecord || defaultRecord)?.periodParts.quarterKey || QUARTER_TAGS.find((quarter) => year.quarters.has(quarter)) || ANNUAL_PERIOD_KEY;
      const selectedBucket = year.quarters.get(selectedQuarterKey);
      const selectedRecord = activeRecord || selectedBucket?.records[0] || defaultRecord;
      return {
        ...year,
        active: Boolean(activeRecord),
        selectedQuarterKey,
        selectedBucket,
        selectedRecord,
        description: descriptionForPeriodRecord(selectedRecord, selectedBucket),
      };
    })
    .sort((a, b) => direction * (a.sortValue - b.sortValue) || a.yearKey.localeCompare(b.yearKey));
}
function companyKey(company) {
  return normalize(company).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'company';
}
function metadataFor(company) {
  return companyMetadataByName.get(normalize(company)) || {
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
function searchTextForRecord(record) {
  return displayRecord(record).searchText;
}
function searchTextForGroup(group) {
  if (!group) return '';
  const byLanguage = languageObjectCache(i18nObjectCaches.groups);
  if (!byLanguage.has(group)) {
    byLanguage.set(group, [
      group.searchText,
      ...group.records.map((record) => searchTextForRecord(record)),
    ].join(' '));
  }
  return byLanguage.get(group);
}
function labelText(label) {
  return Array.isArray(label) ? label.map(clean).filter(Boolean).join(' ') : clean(label);
}
function notesText(notes) {
  return (notes || []).map(clean).filter(Boolean).join(' ');
}
function formatAmount(record, value, cost = false) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  const decimals = typeof record?.decimals === 'number' ? record.decimals : 1;
  const amount = `${record?.currency || '$'}${Math.abs(value).toFixed(decimals)}${record?.unit || ''}`;
  return cost || value < 0 ? `(${amount})` : amount;
}
function describeItemList(items, record, prefix = '') {
  return (items || []).flatMap((item) => {
    const label = [prefix, labelText(item.label)].filter(Boolean).join(' / ');
    const notes = notesText(item.notes);
    const itemText = `${label}: ${formatAmount(record, item.value)}${notes ? ` (${notes})` : ''}`;
    return [itemText, ...describeItemList(item.children, record, label)];
  });
}
function describeItems(items, record, prefix = '') {
  return describeItemList(items, record, prefix).join('; ');
}
function tableColumnPreset(column) {
  if (column.widthPreset && TABLE_COLUMN_PRESETS[column.widthPreset]) return TABLE_COLUMN_PRESETS[column.widthPreset];
  const className = column.className || '';
  if (className.includes('num')) return TABLE_COLUMN_PRESETS.money;
  if (className.includes('wide')) return TABLE_COLUMN_PRESETS.wide;
  if (className.includes('nowrap')) return TABLE_COLUMN_PRESETS.text;
  return TABLE_COLUMN_PRESETS.text;
}
function htmlText(html) {
  const template = document.createElement('template');
  template.innerHTML = String(html || '');
  return clean(template.content.textContent || '');
}
function tableCellText(column, row) {
  if (column.widthValue) return clean(column.widthValue(row));
  if (column.value) return clean(column.value(row));
  if (column.html) return htmlText(column.html(row));
  return '';
}
function estimateColumnWidth(column, rows) {
  const preset = tableColumnPreset(column);
  const texts = [column.label, ...rows.slice(0, TABLE_COLUMN_SAMPLE_LIMIT).map((row) => tableCellText(column, row))];
  const nowrap = (column.className || '').includes('nowrap') || (column.className || '').includes('num');
  const contentChars = texts.reduce((max, text) => {
    const normalized = clean(text);
    if (!normalized) return max;
    if (nowrap) return Math.max(max, Math.min(normalized.length, 34));
    const longestWord = normalized.split(/[\s,;:/()]+/).reduce((wordMax, word) => Math.max(wordMax, word.length), 0);
    const wrappedChars = Math.ceil(Math.min(normalized.length, 86) * (preset.wrapFactor || 0.75));
    return Math.max(max, longestWord, wrappedChars);
  }, 0);
  const labelChars = clean(column.label).length + 2;
  const measured = Math.ceil(Math.max(contentChars, labelChars) * preset.charWidth + 24);
  return clamp(measured, column.minWidth || preset.min, column.maxWidth || preset.max);
}
function tableColumnSizing(columns, rows, targetWidth = 0) {
  const baseWidths = columns.map((column) => estimateColumnWidth(column, rows));
  const baseTotal = baseWidths.reduce((sum, width) => sum + width, 0);
  const targetTotal = Math.max(baseTotal, Math.ceil(targetWidth || 0));
  const extra = Math.max(0, targetTotal - baseTotal);
  const growValues = columns.map((column) => Number.isFinite(column.grow) ? Math.max(0, column.grow) : 0);
  const growTotal = growValues.reduce((sum, value) => sum + value, 0);
  const widths = baseWidths.map((width, index) => {
    if (!extra || !growTotal) return width;
    const grow = growTotal ? growValues[index] : 1;
    const share = growTotal ? grow / growTotal : 1 / columns.length;
    return width + extra * share;
  });
  const total = widths.reduce((sum, width) => sum + width, 0);
  return {
    total,
    cols: widths.map((width) => ({
      width,
      percent: total ? (width / total) * 100 : 100 / columns.length,
    })),
  };
}
function tableHeaderHeight(table) {
  const height = table.tHead?.getBoundingClientRect().height || 0;
  return height || 34;
}
function tableRowHeight(table) {
  const value = Number.parseFloat(getComputedStyle(table).getPropertyValue('--table-row-height'));
  return Number.isFinite(value) && value > 0 ? value : 96;
}
function tableTopInContent(table) {
  const contentRect = content.getBoundingClientRect();
  return content.scrollTop + table.getBoundingClientRect().top - contentRect.top;
}
function tableBodyTopInContent(table) {
  return tableTopInContent(table) + tableHeaderHeight(table);
}
function tableCellHtml(column, row) {
  const value = column.html ? column.html(row) : escapeHtml(column.value(row));
  const title = tableCellText(column, row);
  return `<td class="${column.className || ''}"${title ? ` title="${escapeHtml(title)}"` : ''}><div class="cell-content">${value}</div></td>`;
}
function tableRowHtml(columns, row, rowIndex) {
  const cells = columns.map((column) => tableCellHtml(column, row)).join('');
  const attrs = [row.tableAttrs || '', `data-row-index="${rowIndex}"`].filter(Boolean).join(' ');
  return `<tr class="${row.active ? 'active-row' : ''}" ${attrs}>${cells}</tr>`;
}
function virtualRangeFor(table, info, rowHeight, focusIndex = null) {
  const rows = info.rows;
  if (!rows.length) return { start: 0, end: 0 };
  const bufferPx = Math.max(content.clientHeight, 1) * TABLE_OVERSCAN_VIEWPORTS;
  if (Number.isInteger(focusIndex) && focusIndex >= 0) {
    const bufferRows = Math.max(1, Math.ceil(bufferPx / rowHeight));
    return {
      start: clamp(focusIndex - bufferRows, 0, rows.length),
      end: clamp(focusIndex + bufferRows + 1, 0, rows.length),
    };
  }
  const bodyTop = tableBodyTopInContent(table);
  const viewportTop = content.scrollTop;
  const viewportBottom = viewportTop + content.clientHeight;
  const start = clamp(Math.floor((viewportTop - bufferPx - bodyTop) / rowHeight), 0, rows.length);
  const end = clamp(Math.ceil((viewportBottom + bufferPx - bodyTop) / rowHeight), 0, rows.length);
  return { start, end: Math.max(start, end) };
}
function spacerRow(height, colSpan, position) {
  if (height <= 0) return '';
  return `<tr class="virtual-spacer virtual-spacer-${position}" aria-hidden="true"><td colspan="${colSpan}"><div style="height: ${height}px"></div></td></tr>`;
}
function renderVirtualTableBody(table, force = false, focusIndex = null) {
  const info = virtualTables.get(table);
  const tbody = table.tBodies[0];
  if (!info || !tbody) return;
  const rowHeight = tableRowHeight(table);
  const range = virtualRangeFor(table, info, rowHeight, focusIndex);
  if (!force && info.renderedStart === range.start && info.renderedEnd === range.end && info.rowHeight === rowHeight) return;
  info.renderedStart = range.start;
  info.renderedEnd = range.end;
  info.rowHeight = rowHeight;
  table.dataset.renderedStart = String(range.start);
  table.dataset.renderedEnd = String(range.end);
  table.dataset.totalRows = String(info.rows.length);
  const topHeight = range.start * rowHeight;
  const bottomHeight = Math.max(0, (info.rows.length - range.end) * rowHeight);
  const rowHtml = info.rows
    .slice(range.start, range.end)
    .map((row, offset) => tableRowHtml(info.columns, row, range.start + offset))
    .join('');
  tbody.innerHTML = [
    spacerRow(topHeight, info.columns.length, 'top'),
    rowHtml,
    spacerRow(bottomHeight, info.columns.length, 'bottom'),
  ].join('');
}
function updateVirtualTables(force = false) {
  if (state.viewMode !== 'table') return;
  renderVirtualTableBody(companiesTable, force);
  renderVirtualTableBody(statementsTable, force);
}
function requestVirtualTableUpdate() {
  if (virtualTableFrame) return;
  virtualTableFrame = requestAnimationFrame(() => {
    virtualTableFrame = 0;
    updateVirtualTables();
  });
}
function safeUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : '';
  } catch (error) {
    return '';
  }
}
function linksHtml(urls) {
  const links = (urls || []).map(safeUrl).filter(Boolean);
  if (!links.length) return `<span class="cell-muted">${escapeHtml(t('missing'))}</span>`;
  return links.map((url, index) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(t('source', { number: index + 1 }))}</a>`).join(' ');
}
function websiteHtml(url) {
  const safe = safeUrl(url);
  return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener">${escapeHtml(safe.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a>` : '';
}
function financialFor(record) {
  return financialRecordByKey.get(record.dataset.key);
}
function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}
function marketCapValueUsd(company) {
  const marketCap = metadataFor(company)?.marketCap;
  if (!marketCap || typeof marketCap !== 'object') return null;
  return finiteNumber(marketCap.valueUsd ?? marketCap.usd ?? marketCap.value);
}
function unitMultiplier(unit) {
  const key = clean(unit).toUpperCase();
  return MONEY_UNIT_MULTIPLIERS[key] || 1;
}
function currencyUnitsPerUsd(currency) {
  const key = clean(currency).toUpperCase();
  if (CURRENCY_UNITS_PER_USD[currency] != null) return CURRENCY_UNITS_PER_USD[currency];
  if (CURRENCY_UNITS_PER_USD[key] != null) return CURRENCY_UNITS_PER_USD[key];
  return 1;
}
function financialValueUsd(record, value) {
  const number = finiteNumber(value);
  if (number == null || !record) return null;
  return (number * unitMultiplier(record.unit)) / currencyUnitsPerUsd(record.currency);
}
function latestFinancialForGroup(group) {
  return group?.latest ? financialFor(group.latest) : null;
}
function latestNetProfitUsd(group) {
  const financial = latestFinancialForGroup(group);
  return financialValueUsd(financial, financial?.profit?.net?.value);
}
function foundedYear(company) {
  const match = clean(metadataFor(company).founded).match(/\b(\d{4})\b/);
  return match ? Number(match[1]) : null;
}
function displayCompanyForGroup(group, language = state.language) {
  return displayCompany(group?.latest, language) || group?.company || '';
}
function compareNullableNumber(a, b, direction = -1) {
  const left = finiteNumber(a);
  const right = finiteNumber(b);
  const leftMissing = left == null;
  const rightMissing = right == null;
  if (leftMissing && rightMissing) return 0;
  if (leftMissing) return 1;
  if (rightMissing) return -1;
  return direction * (left - right);
}
function companySortValue(group, sortKey = state.companySort) {
  if (sortKey === 'recent') return group?.latest?.sortValue;
  if (sortKey === 'marketCap') return marketCapValueUsd(group?.company);
  if (sortKey === 'netProfit') return latestNetProfitUsd(group);
  if (sortKey === 'founded') return foundedYear(group?.company);
  return displayCompanyForGroup(group);
}
function compareCompanyGroups(a, b, language = state.language) {
  const sortKey = COMPANY_SORT_KEYS.includes(state.companySort) ? state.companySort : 'name';
  const direction = state.companySortDirection === 'desc' ? -1 : 1;
  if (sortKey !== 'name') {
    const byMetric = compareNullableNumber(companySortValue(a, sortKey), companySortValue(b, sortKey), direction);
    if (byMetric) return byMetric;
  }
  const nameDirection = sortKey === 'name' ? direction : 1;
  return nameDirection * displayCompanyForGroup(a, language).localeCompare(displayCompanyForGroup(b, language), languageCode(language)) ||
    nameDirection * a.company.localeCompare(b.company) ||
    (b.latest?.sortValue || 0) - (a.latest?.sortValue || 0);
}
function sortedCompanyGroups(groupList) {
  return [...(groupList || [])].sort((a, b) => compareCompanyGroups(a, b));
}
function formatUsdShort(value, language = state.language) {
  const number = finiteNumber(value);
  if (number == null) return t('missing', {}, language);
  const sign = number < 0 ? '-' : '';
  const absolute = Math.abs(number);
  const units = [
    { suffix: 'T', value: 1e12 },
    { suffix: 'B', value: 1e9 },
    { suffix: 'M', value: 1e6 },
  ];
  const unit = units.find((item) => absolute >= item.value) || { suffix: '', value: 1 };
  const scaled = absolute / unit.value;
  const decimals = scaled >= 100 || unit.suffix === '' ? 0 : scaled >= 10 ? 1 : 2;
  return `${sign}$${scaled.toFixed(decimals)}${unit.suffix}`;
}
function companySortMetaText(group) {
  if (state.companySort === 'marketCap') {
    return t('companySortMetaMarketCap', { value: formatUsdShort(marketCapValueUsd(group.company)) });
  }
  if (state.companySort === 'netProfit') {
    return t('companySortMetaNetProfit', { value: formatUsdShort(latestNetProfitUsd(group)) });
  }
  if (state.companySort === 'founded') {
    return t('companySortMetaFounded', { value: metadataFor(group.company).founded || t('missing') });
  }
  return `${t('latest')} ${displayPeriod(group.latest)}`;
}
function tableModelForLanguage(language = state.language) {
  const code = languageCode(language);
  if (tableModelCache.has(code)) return tableModelCache.get(code);
  const companyRows = groups.map((group) => {
    const sourceMeta = metadataFor(group.company);
    const meta = localizedCompanyRecord(sourceMeta, code);
    return {
      ...meta,
      company: clean(meta.displayName || meta.name || group.company),
      companyCanonical: group.company,
      marketCap: formatUsdShort(sourceMeta.marketCap?.valueUsd, code),
      marketCapValueUsd: sourceMeta.marketCap?.valueUsd ?? '',
      marketCapAsOf: sourceMeta.marketCap?.asOf || '',
      marketCapSourceUrl: sourceMeta.marketCap?.sourceUrl || '',
      latestPeriod: group.latest ? displayPeriod(group.latest, code) : '',
      datasetCount: group.records.length,
      tableAttrs: `data-company-key="${escapeHtml(companyKey(group.company))}"`,
    };
  });
  const statementRows = [...records]
    .sort((a, b) => a.company.localeCompare(b.company) || b.sortValue - a.sortValue || a.period.localeCompare(b.period))
    .map((record) => {
      const financial = localizedFinancialRecord(financialFor(record), code);
      return {
        record,
        financial,
        displayCompany: displayCompany(record, code),
        displayPeriod: displayPeriod(record, code),
        displayPeriodNote: displayPeriodNote(record, code),
        revenueTotal: formatAmount(financial, financial?.revenue?.total),
        revenueItems: describeItems(financial?.revenue?.items, financial),
        costOfRevenue: formatAmount(financial, financial?.costs?.costOfRevenue?.value, true),
        grossProfit: formatAmount(financial, financial?.profit?.gross?.value),
        operatingExpenses: formatAmount(financial, financial?.costs?.operatingExpenses?.total, true),
        operatingExpenseItems: describeItems(financial?.costs?.operatingExpenses?.items, financial),
        operatingProfit: formatAmount(financial, financial?.profit?.operating?.value),
        otherIncome: formatAmount(financial, financial?.otherIncome?.total || 0),
        tax: formatAmount(financial, financial?.costs?.tax?.value, true),
        netProfit: formatAmount(financial, financial?.profit?.net?.value),
        sourceImage: financial?.sourceImage || '',
        tableAttrs: `data-dataset-key="${escapeHtml(record.dataset.key)}"`,
      };
    });
  const model = { companyRows, statementRows };
  tableModelCache.set(code, model);
  return model;
}
function companyRows() {
  const rowByCompany = new Map(tableModelForLanguage().companyRows.map((row) => [row.companyCanonical, row]));
  return sortedCompanyGroups(groups).map((group) => {
    const row = rowByCompany.get(group.company) || { company: displayCompanyForGroup(group), companyCanonical: group.company };
    return {
      ...row,
      active: row.companyCanonical === state.company,
    };
  });
}
function statementRows() {
  return tableModelForLanguage().statementRows.map((row) => ({
    ...row,
    active: row.record.index === state.activeIndex,
  }));
}
function scheduleIdleTask(callback) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 1200 });
    return;
  }
  window.setTimeout(() => callback({ timeRemaining: () => 0 }), 160);
}
function prewarmI18nCaches() {
  const languages = (I18N_API.languageCodes || Object.keys(I18N))
    .map((language) => languageCode(language))
    .filter((language, index, list) => language && list.indexOf(language) === index);
  const pending = languages.filter((language) => language !== languageCode());
  let index = 0;
  const run = () => {
    const language = pending[index];
    index += 1;
    if (language) tableModelForLanguage(language);
    if (index < pending.length) scheduleIdleTask(run);
  };
  if (pending.length) scheduleIdleTask(run);
}
function renderDataTable(table, columns, rows, emptyText, targetWidth = 0) {
  table.className = 'data-table';
  const sizing = tableColumnSizing(columns, rows, targetWidth);
  table.style.setProperty('--table-min-width', `${sizing.total}px`);
  table.closest('.table-wrap')?.style.setProperty('--table-min-width', `${sizing.total}px`);
  const colgroup = `<colgroup>${sizing.cols.map((col) => `<col style="width: ${col.percent.toFixed(4)}%">`).join('')}</colgroup>`;
  const head = columns.map((column) => `<th class="${column.className || ''}">${escapeHtml(column.label)}</th>`).join('');
  if (!rows.length) {
    virtualTables.delete(table);
    table.innerHTML = `${colgroup}<thead><tr>${head}</tr></thead><tbody><tr><td colspan="${columns.length}"><div class="table-empty">${escapeHtml(emptyText)}</div></td></tr></tbody>`;
    return;
  }
  table.innerHTML = `${colgroup}<thead><tr>${head}</tr></thead><tbody></tbody>`;
  virtualTables.set(table, {
    columns,
    rows,
    renderedStart: -1,
    renderedEnd: -1,
    rowHeight: 0,
  });
  renderVirtualTableBody(table, true);
}
function renderTables() {
  const companies = companyRows();
  const statements = statementRows();
  const companyColumns = [
    { label: t('tableCompany'), className: 'nowrap', widthPreset: 'text', maxWidth: 118, grow: 0, value: (row) => row.company },
    { label: t('tableLegalName'), className: 'nowrap', widthPreset: 'text', minWidth: 116, maxWidth: 150, grow: 0, value: (row) => row.legalName },
    { label: t('tableTicker'), className: 'nowrap', widthPreset: 'compact', minWidth: 92, maxWidth: 108, grow: 0, value: (row) => [row.exchange, row.ticker].filter(Boolean).join(': ') },
    { label: t('tableMarketCap'), className: 'num', widthPreset: 'money', minWidth: 86, maxWidth: 98, grow: 0, value: (row) => row.marketCap },
    { label: t('tableSector'), className: 'nowrap', widthPreset: 'text', minWidth: 108, maxWidth: 126, grow: 0, value: (row) => row.sector },
    { label: t('tableIndustry'), className: 'nowrap', widthPreset: 'text', minWidth: 132, maxWidth: 160, grow: 0, value: (row) => row.industry },
    { label: t('tableFounded'), className: 'nowrap', widthPreset: 'compact', minWidth: 76, maxWidth: 80, grow: 0, value: (row) => row.founded },
    { label: t('tableHeadquarters'), className: 'nowrap', widthPreset: 'text', minWidth: 138, maxWidth: 158, grow: 0, value: (row) => row.headquarters },
    { label: t('tableFiscalYearEnd'), className: 'nowrap', widthPreset: 'compact', minWidth: 86, maxWidth: 94, grow: 0, value: (row) => row.fiscalYearEnd },
    { label: t('tableDatasets'), className: 'num', widthPreset: 'compact', minWidth: 70, maxWidth: 76, grow: 0, value: (row) => row.datasetCount },
    { label: t('tableLatest'), className: 'nowrap', widthPreset: 'compact', minWidth: 72, maxWidth: 78, grow: 0, value: (row) => row.latestPeriod },
    { label: t('tableWebsite'), className: 'nowrap', widthPreset: 'url', minWidth: 112, maxWidth: 132, grow: 0, html: (row) => websiteHtml(row.website) },
    { label: t('tableDescription'), className: 'wide', widthPreset: 'description', maxWidth: 330, grow: 1, value: (row) => row.description },
    { label: t('tableSources'), className: 'nowrap', widthPreset: 'link', minWidth: 78, maxWidth: 86, grow: 0, html: (row) => linksHtml(row.sourceUrls) },
  ];
  const statementColumns = [
    { label: t('tableDataset'), className: 'nowrap', widthPreset: 'id', maxWidth: 160, grow: 0.35, value: (row) => row.record.dataset.key },
    { label: t('tableCompany'), className: 'nowrap', widthPreset: 'text', maxWidth: 150, grow: 0.6, value: (row) => row.displayCompany },
    { label: t('tablePeriod'), className: 'nowrap', widthPreset: 'compact', maxWidth: 98, grow: 0.05, value: (row) => row.displayPeriod },
    { label: t('tablePeriodEnd'), className: 'nowrap', widthPreset: 'compact', minWidth: 86, maxWidth: 126, grow: 0.1, value: (row) => row.displayPeriodNote },
    { label: t('tableRevenue'), className: 'num', widthPreset: 'money', maxWidth: 106, grow: 0, value: (row) => row.revenueTotal },
    { label: t('tableRevenueItems'), className: 'wide', widthPreset: 'wide', maxWidth: 340, grow: 2, value: (row) => row.revenueItems },
    { label: t('tableCostOfRevenue'), className: 'num', widthPreset: 'money', maxWidth: 112, grow: 0, value: (row) => row.costOfRevenue },
    { label: t('tableGrossProfit'), className: 'num', widthPreset: 'money', maxWidth: 108, grow: 0, value: (row) => row.grossProfit },
    { label: t('tableOperatingExpenses'), className: 'num', widthPreset: 'money', maxWidth: 114, grow: 0, value: (row) => row.operatingExpenses },
    { label: t('tableOpexItems'), className: 'wide', widthPreset: 'wide', maxWidth: 330, grow: 2, value: (row) => row.operatingExpenseItems },
    { label: t('tableOperatingProfit'), className: 'num', widthPreset: 'money', maxWidth: 112, grow: 0, value: (row) => row.operatingProfit },
    { label: t('tableOtherIncome'), className: 'num', widthPreset: 'money', maxWidth: 108, grow: 0, value: (row) => row.otherIncome },
    { label: t('tableTax'), className: 'num', widthPreset: 'money', maxWidth: 98, grow: 0, value: (row) => row.tax },
    { label: t('tableNetProfit'), className: 'num', widthPreset: 'money', maxWidth: 104, grow: 0, value: (row) => row.netProfit },
    { label: t('tableSourceImage'), className: 'nowrap', widthPreset: 'id', maxWidth: 150, grow: 0.1, value: (row) => row.sourceImage },
  ];
  companiesTableCount.textContent = countText('companiesCountOne', 'companiesCountMany', companies.length);
  statementsTableCount.textContent = countText('statementsCountOne', 'statementsCountMany', statements.length);
  renderDataTable(companiesTable, companyColumns, companies, t('noCompaniesRegistered'), content.clientWidth);
  renderDataTable(statementsTable, statementColumns, statements, t('noIncomeStatementsRegistered'), content.clientWidth);
}
function escapeSelector(value) {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, '\\$&');
}
function virtualTableTarget(kind) {
  const table = kind === 'company' ? companiesTable : statementsTable;
  const info = virtualTables.get(table);
  if (!info) return null;
  if (kind === 'company') {
    const key = companyKey(state.company);
    const index = info.rows.findIndex((row) => companyKey(row.companyCanonical || row.company) === key);
    return index >= 0 ? { table, info, index } : null;
  }
  const key = currentRecord()?.dataset?.key;
  if (!key) return null;
  const index = info.rows.findIndex((row) => row.record?.dataset?.key === key);
  return index >= 0 ? { table, info, index } : null;
}
function tableRowFor(kind) {
  const target = virtualTableTarget(kind);
  if (target) {
    renderVirtualTableBody(target.table, true, target.index);
    return target.table.querySelector(`[data-row-index="${target.index}"]`);
  }
  if (kind === 'company') {
    return companiesTable.querySelector(`[data-company-key="${escapeSelector(companyKey(state.company))}"]`);
  }
  const key = currentRecord()?.dataset?.key;
  return key ? statementsTable.querySelector(`[data-dataset-key="${escapeSelector(key)}"]`) : null;
}
function fastScrollTo(top, duration = 90, scrollRoot = content) {
  if (!scrollRoot) return;
  const start = scrollRoot.scrollTop || 0;
  const max = Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight);
  const target = clamp(top, 0, max);
  const distance = target - start;
  if (Math.abs(distance) < 2) return;
  const startedAt = performance.now();
  function tick(now) {
    const progress = clamp((now - startedAt) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    scrollRoot.scrollTop = start + distance * eased;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
function scrollActiveTableRow(kind = 'statement') {
  if (state.viewMode !== 'table') return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const targetInfo = virtualTableTarget(kind);
      if (targetInfo) {
        renderVirtualTableBody(targetInfo.table, true, targetInfo.index);
        const rowTop = tableBodyTopInContent(targetInfo.table) + targetInfo.index * tableRowHeight(targetInfo.table);
        fastScrollTo(rowTop - tableHeaderHeight(targetInfo.table) - 8);
        setTimeout(requestVirtualTableUpdate, 120);
        return;
      }
      const row = tableRowFor(kind);
      if (!row) return;
      const tableWrap = row.closest('.table-wrap');
      if (tableWrap && tableWrap.scrollHeight > tableWrap.clientHeight) {
        const wrapTop = tableWrap.getBoundingClientRect().top;
        const headerHeight = row.closest('table')?.tHead?.getBoundingClientRect().height || 0;
        const target = tableWrap.scrollTop + row.getBoundingClientRect().top - wrapTop - headerHeight - 8;
        fastScrollTo(target, 90, tableWrap);
        return;
      }
      const contentTop = content.getBoundingClientRect().top;
      const target = content.scrollTop + row.getBoundingClientRect().top - contentTop - 8;
      fastScrollTo(target);
    });
  });
}
function timelineColors(record, group) {
  const values = (group?.records || []).map((item) => item.sortValue);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const ratio = max === min ? 1 : (record.sortValue - min) / (max - min);
  const hue = 204;
  const saturation = Math.round(10 + ratio * 63);
  const lightness = Math.round(67 - ratio * 32);
  return {
    dot: `hsl(${hue} ${saturation}% ${lightness}%)`,
    line: `hsl(${hue} ${Math.round(8 + ratio * 35)}% ${Math.round(86 - ratio * 20)}%)`,
    ring: `hsl(${hue} ${Math.round(10 + ratio * 40)}% ${Math.round(80 - ratio * 20)}%)`,
    activeRing: `hsl(${hue} ${Math.round(20 + ratio * 42)}% ${Math.round(88 - ratio * 12)}%)`,
  };
}
function renderActiveSummary() {
  const record = currentRecord();
  actionTitle.textContent = record
    ? [displayCompany(record), [displayPeriod(record), displayPeriodNote(record)].filter(Boolean).join(' - ')].filter(Boolean).join(' · ')
    : t('noDataPointSelected');
}
function visibleCompanyGroups() {
  return sortedCompanyGroups(groups.filter((group) => matches(searchTextForGroup(group), companySearch.value)));
}
function activeCompanyButton() {
  const key = companyKey(state.company);
  return key ? companyList.querySelector(`[data-company-key="${escapeSelector(key)}"]`) : null;
}
function focusActiveCompanyItem() {
  const button = activeCompanyButton();
  if (!button) return;
  button.focus({ preventScroll: true });
  button.scrollIntoView({ block: 'nearest' });
}
function selectCompanyGroup(group, { closeSearch = false, focusCompany = false, scrollKind = 'company' } = {}) {
  if (!group) return;
  const groupRecords = sortedRecords(group);
  state.company = group.company;
  const next = groupRecords.find((record) => matches(searchTextForRecord(record), periodSearch.value)) || groupRecords[0];
  if (next) {
    state.activeIndex = next.index;
    syncDatasetHash(next);
  }
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (closeSearch) companySearchController.setOpen(false);
  if (focusCompany) requestAnimationFrame(focusActiveCompanyItem);
  scrollActiveTableRow(scrollKind);
}
function moveCompanySelection(offset, { returnBoundary = false } = {}) {
  const visibleGroups = visibleCompanyGroups();
  if (!visibleGroups.length) return false;
  const focusedKey = document.activeElement?.closest?.('.company-item')?.dataset.companyKey;
  let index = focusedKey
    ? visibleGroups.findIndex((group) => companyKey(group.company) === focusedKey)
    : visibleGroups.findIndex((group) => group.company === state.company);
  if (index < 0) index = offset > 0 ? -1 : visibleGroups.length;
  const rawNextIndex = index + offset;
  if (returnBoundary && (rawNextIndex < 0 || rawNextIndex >= visibleGroups.length)) return 'boundary';
  const nextIndex = clamp(rawNextIndex, 0, visibleGroups.length - 1);
  selectCompanyGroup(visibleGroups[nextIndex], { focusCompany: true });
  return true;
}
function renderCompanies() {
  const visibleGroups = visibleCompanyGroups();
  companyList.innerHTML = '';
  if (!visibleGroups.length) {
    companyList.removeAttribute('aria-activedescendant');
    companyList.innerHTML = `<div class="empty-state">${escapeHtml(t('noMatchingCompanies'))}</div>`;
    return;
  }
  const selectedVisible = visibleGroups.some((group) => group.company === state.company);
  visibleGroups.forEach((group, index) => {
    const isActive = group.company === state.company;
    const key = companyKey(group.company);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-item company-item' + (isActive ? ' active' : '');
    button.id = `company-option-${key}`;
    button.setAttribute('role', 'option');
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    button.tabIndex = isActive || (!selectedVisible && index === 0) ? 0 : -1;
    button.dataset.company = group.company;
    button.dataset.companyKey = key;
    button.innerHTML = `
      <div class="item-top">
        <span class="item-name">${escapeHtml(displayCompany(group.latest))}</span>
        <span class="item-meta">${escapeHtml(companySortMetaText(group))}</span>
        <span class="count-pill">${group.records.length}</span>
      </div>
    `;
    button.addEventListener('click', () => {
      selectCompanyGroup(group, { closeSearch: true, focusCompany: true });
    });
    companyList.appendChild(button);
  });
  const activeId = selectedVisible ? `company-option-${companyKey(state.company)}` : '';
  if (activeId) companyList.setAttribute('aria-activedescendant', activeId);
  else companyList.removeAttribute('aria-activedescendant');
}
function renderPeriods() {
  const group = groupFor(state.company);
  const yearItems = periodTreeFor(group);
  periodList.innerHTML = '';
  if (!yearItems.length) {
    periodList.innerHTML = `<div class="empty-state">${escapeHtml(t('noMatchingTimePoints'))}</div>`;
    return;
  }
  yearItems.forEach((year) => {
    const item = document.createElement('div');
    item.className = 'period-item period-year-item' + (year.active ? ' active' : '');
    item.setAttribute('role', 'group');
    item.setAttribute('aria-label', [year.yearKey, year.description].filter(Boolean).join(', '));
    const colors = timelineColors(year.selectedRecord || year.records[0], group);
    item.style.setProperty('--timeline-color', colors.dot);
    item.style.setProperty('--timeline-line-color', colors.line);
    item.style.setProperty('--timeline-ring-color', colors.ring);
    item.style.setProperty('--timeline-active-ring-color', colors.activeRing);
    const tagKeys = [...QUARTER_TAGS];
    if (year.quarters.has(ANNUAL_PERIOD_KEY)) tagKeys.push(ANNUAL_PERIOD_KEY);
    const quarterTags = tagKeys.map((tag) => {
      const bucket = year.quarters.get(tag);
      const record = bucket?.records[0];
      const isActive = Boolean(bucket?.records.some((entry) => entry.index === state.activeIndex));
      const title = record ? [displayPeriod(record), displayPeriodNote(record) || displayLabel(record)].filter(Boolean).join(', ') : `${year.yearKey} ${tag}`;
      return `
        <button
          type="button"
          class="quarter-tag${isActive ? ' active' : ''}"
          ${record ? `data-index="${record.index}"` : 'disabled aria-disabled="true"'}
          title="${escapeHtml(title)}"
          aria-pressed="${isActive ? 'true' : 'false'}"
        >${escapeHtml(tag === ANNUAL_PERIOD_KEY ? t('annualPeriodTag') : tag)}</button>
      `;
    }).join('');
    const selectedRecords = year.selectedBucket?.records || [];
    const showVariants = selectedRecords.length > 1 || selectedRecords.some((record) => record.variantFeature);
    const variants = showVariants ? `
      <span class="variant-row" aria-label="${escapeHtml(t('viewVariantsLabel'))}">
        ${selectedRecords.map((record) => `
          <button
            type="button"
            class="variant-chip${record.index === state.activeIndex ? ' active' : ''}"
            data-index="${record.index}"
            title="${escapeHtml(displayLabel(record) || record.dataset.key)}"
            aria-pressed="${record.index === state.activeIndex ? 'true' : 'false'}"
          >${escapeHtml(variantLabel(record))}</button>
        `).join('')}
      </span>
    ` : '';
    item.innerHTML = `
      <span class="timeline-marker" aria-hidden="true"><span class="timeline-dot"></span></span>
      <span class="timeline-content period-year-content">
        <span class="period-year-row">
          <span class="item-name period-year-name">${escapeHtml(year.yearKey)}</span>
          <span class="quarter-tags">${quarterTags}</span>
        </span>
        ${variants}
        <span class="period-description">${escapeHtml(year.description)}</span>
      </span>
    `;
    item.querySelectorAll('button[data-index]').forEach((button) => {
      button.addEventListener('click', () => {
        selectRecord(recordByIndex(Number(button.dataset.index)));
      });
    });
    periodList.appendChild(item);
  });
}
function renderAll() {
  syncViewModeControls();
  renderActiveSummary();
  renderCompanies();
  renderPeriods();
  if (state.viewMode === 'table') renderTables();
}
function syncViewModeControls() {
  const isTable = state.viewMode === 'table';
  sankeyView.hidden = isTable;
  tableView.hidden = !isTable;
  sankeyActions.hidden = isTable;
  tableActions.hidden = !isTable;
  [...viewMode.querySelectorAll('button')].forEach((button) => {
    const active = button.dataset.view === state.viewMode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  syncToolbarHeight();
}
function setViewMode(mode, persist = true) {
  if (mode !== 'sankey' && mode !== 'table') return;
  if (state.viewMode === mode) {
    if (mode === 'table') scrollActiveTableRow('statement');
    return;
  }
  state.viewMode = mode;
  if (persist) writeStoredValue(VIEW_MODE_KEY, mode);
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (mode === 'table') scrollActiveTableRow('statement');
}

function createHeaderSearchController({ section, input, toggle, render, navigate }) {
  const isOpen = () => section.classList.contains('search-open');
  const hasActiveFilter = () => Boolean(clean(input.value));
  const sync = () => {
    const open = isOpen();
    const active = open || hasActiveFilter();
    toggle.classList.toggle('active', active);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  const setOpen = (open) => {
    const nextOpen = open || hasActiveFilter();
    section.classList.toggle('search-open', nextOpen);
    sync();
    if (nextOpen) requestAnimationFrame(() => input.focus());
  };
  const focusInput = () => {
    setOpen(true);
  };
  toggle.addEventListener('click', () => {
    setOpen(!isOpen());
  });
  input.addEventListener('input', () => {
    render();
    sync();
  });
  input.addEventListener('keydown', (e) => {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !e.isComposing && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      if (navigate?.(e.key === 'ArrowDown' ? 1 : -1)) e.preventDefault();
      return;
    }
    if (e.key !== 'Escape') return;
    if (input.value) {
      input.value = '';
      render();
      sync();
      return;
    }
    setOpen(false);
    toggle.focus();
  });
  document.addEventListener('pointerdown', (e) => {
    if (!isOpen()) return;
    if (section.contains(e.target)) return;
    setOpen(false);
  });
  return { sync, setOpen, focusInput };
}
function syncPeriodSortToggle() {
  const isDesc = state.sort === 'desc';
  const label = isDesc ? t('sortDescTitle') : t('sortAscTitle');
  periodSortToggle.innerHTML = sortIcon(state.sort);
  periodSortToggle.title = label;
  periodSortToggle.setAttribute('aria-label', label);
  periodSortToggle.setAttribute('aria-pressed', isDesc ? 'true' : 'false');
}
function companySortLabel(sortKey = state.companySort) {
  const key = COMPANY_SORT_CONFIG[sortKey]?.labelKey || COMPANY_SORT_CONFIG.name.labelKey;
  return t(key);
}
function companySortDirectionLabel(sortKey = state.companySort, direction = state.companySortDirection) {
  const config = COMPANY_SORT_CONFIG[sortKey] || COMPANY_SORT_CONFIG.name;
  const labelKey = direction === 'desc' ? config.descLabelKey : config.ascLabelKey;
  return t(labelKey);
}
function companySortActionLabel(sortKey, direction) {
  return t('companySortAction', {
    sort: companySortLabel(sortKey),
    direction: companySortDirectionLabel(sortKey, direction),
  });
}
function renderCompanySortOptions() {
  if (!companySortOptions) return;
  companySortOptions.innerHTML = COMPANY_SORT_KEYS.map((sortKey) => {
    const activeRow = sortKey === state.companySort;
    const label = companySortLabel(sortKey);
    const groupLabel = t('companySortDirectionGroup', { sort: label });
    const directionButtons = COMPANY_SORT_DIRECTIONS.map((direction) => {
      const active = activeRow && direction === state.companySortDirection;
      const actionLabel = companySortActionLabel(sortKey, direction);
      return `
        <button
          type="button"
          class="sort-direction-button${active ? ' active' : ''}"
          role="menuitemradio"
          data-company-sort="${escapeHtml(sortKey)}"
          data-company-sort-direction="${escapeHtml(direction)}"
          aria-checked="${active ? 'true' : 'false'}"
          aria-label="${escapeHtml(actionLabel)}"
          title="${escapeHtml(actionLabel)}"
        >${sortDirectionIcon(direction, sortKey)}</button>
      `;
    }).join('');
    return `
      <div class="sort-option-row${activeRow ? ' active' : ''}" role="none" data-company-sort-row="${escapeHtml(sortKey)}">
        <span class="sort-option-label">
          <span class="sort-option-icon">${companySortFieldIcon(sortKey)}</span>
          <span>${escapeHtml(label)}</span>
        </span>
        <span class="sort-direction-group" role="group" aria-label="${escapeHtml(groupLabel)}">
          ${directionButtons}
        </span>
      </div>
    `;
  }).join('');
}
function syncCompanySortControls() {
  if (!companySortToggle || !companySortOptions) return;
  renderCompanySortOptions();
  const label = t('companySortCurrent', { sort: companySortLabel(), direction: companySortDirectionLabel() });
  companySortToggle.innerHTML = companySortIcon();
  companySortToggle.title = label;
  companySortToggle.setAttribute('aria-label', label);
}
function setCompanySortMenuOpen(open) {
  if (!companySortToggle || !companySortOptions) return;
  companySortOptions.hidden = !open;
  companySortToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  if (open) {
    requestAnimationFrame(() => {
      const active = companySortOptions.querySelector('[aria-checked="true"]') || companySortOptions.querySelector('[data-company-sort][data-company-sort-direction]');
      active?.focus({ preventScroll: true });
    });
  }
}
function isCompanySortMenuOpen() {
  return companySortToggle?.getAttribute('aria-expanded') === 'true';
}
function setCompanySort(sortKey, direction) {
  if (!COMPANY_SORT_KEYS.includes(sortKey)) return;
  const nextDirection = normalizeCompanySortDirection(sortKey, direction);
  if (state.companySort === sortKey && state.companySortDirection === nextDirection) {
    setCompanySortMenuOpen(false);
    return;
  }
  state.companySort = sortKey;
  state.companySortDirection = nextDirection;
  writeStoredValue(COMPANY_SORT_KEY, sortKey);
  writeStoredValue(COMPANY_SORT_DIRECTION_KEY, nextDirection);
  syncCompanySortControls();
  renderCompanies();
  if (state.viewMode === 'table') renderTables();
  setCompanySortMenuOpen(false);
  requestAnimationFrame(focusActiveCompanyItem);
}
const companySearchController = createHeaderSearchController({
  section: companySection,
  input: companySearch,
  toggle: companySearchToggle,
  render: renderCompanies,
  navigate: moveCompanySelection,
});
const periodSearchController = createHeaderSearchController({
  section: periodSection,
  input: periodSearch,
  toggle: periodSearchToggle,
  render: renderPeriods,
});
function isCompanySearchShortcut(e) {
  return e.shiftKey && !e.altKey && (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f';
}
function openCompanySearch() {
  if (state.sidebarCollapsed) setSidebarCollapsed(false);
  companySearchController.setOpen(true);
}
document.addEventListener('keydown', (e) => {
  if (e.isComposing || !isCompanySearchShortcut(e)) return;
  e.preventDefault();
  openCompanySearch();
});
companyList.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
  if (e.isComposing || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
  e.preventDefault();
  const result = moveCompanySelection(e.key === 'ArrowDown' ? 1 : -1, { returnBoundary: true });
  if (result === 'boundary') companySearchController.focusInput();
});
periodSortToggle.addEventListener('click', () => {
  state.sort = state.sort === 'desc' ? 'asc' : 'desc';
  syncPeriodSortToggle();
  renderPeriods();
});
companySortToggle?.addEventListener('click', () => {
  setCompanySortMenuOpen(!isCompanySortMenuOpen());
});
companySortOptions?.addEventListener('click', (e) => {
  const button = e.target.closest('[data-company-sort][data-company-sort-direction]');
  if (!button) return;
  setCompanySort(button.dataset.companySort, button.dataset.companySortDirection);
  companySortToggle.focus();
});
companySortOptions?.addEventListener('keydown', (e) => {
  const buttons = [...companySortOptions.querySelectorAll('[data-company-sort][data-company-sort-direction]')];
  const current = document.activeElement?.closest?.('[data-company-sort][data-company-sort-direction]');
  const index = current ? buttons.indexOf(current) : -1;
  if (e.key === 'Escape') {
    e.preventDefault();
    setCompanySortMenuOpen(false);
    companySortToggle.focus();
  } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    const next = e.key === 'ArrowDown' ? index + 2 : index - 2;
    buttons[clamp(next, 0, buttons.length - 1)]?.focus();
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    const next = e.key === 'ArrowRight' ? index + 1 : index - 1;
    buttons[clamp(next, 0, buttons.length - 1)]?.focus();
  } else if (e.key === 'Home' || e.key === 'End') {
    e.preventDefault();
    buttons[e.key === 'Home' ? 0 : buttons.length - 1]?.focus();
  }
});
document.addEventListener('pointerdown', (e) => {
  if (!isCompanySortMenuOpen()) return;
  if (companySortMenu?.contains(e.target)) return;
  setCompanySortMenuOpen(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !isCompanySortMenuOpen()) return;
  setCompanySortMenuOpen(false);
});
viewMode.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  setViewMode(button.dataset.view);
});
languageToggle.addEventListener('click', () => {
  setLanguage(I18N_API.nextLanguage ? I18N_API.nextLanguage(state.language) : state.language === 'en' ? 'zh' : 'en');
});
themeToggle.addEventListener('click', () => {
  setTheme(state.theme === 'light' ? 'dark' : 'light');
});
sidebarToggle.addEventListener('click', () => {
  setSidebarCollapsed(!state.sidebarCollapsed);
});

let sidebarDrag = null;
sidebarResizer.addEventListener('pointerdown', (e) => {
  if (!isDesktopLayout() || state.sidebarCollapsed) return;
  sidebarDrag = { pointerId: e.pointerId, x: e.clientX, width: state.sidebarWidth };
  sidebarResizer.setPointerCapture(e.pointerId);
  document.body.classList.add('is-resizing-sidebar');
  e.preventDefault();
});
sidebarResizer.addEventListener('pointermove', (e) => {
  if (!sidebarDrag || e.pointerId !== sidebarDrag.pointerId) return;
  applySidebarWidth(sidebarDrag.width + e.clientX - sidebarDrag.x);
});
function finishSidebarResize(e) {
  if (!sidebarDrag || e.pointerId !== sidebarDrag.pointerId) return;
  sidebarDrag = null;
  document.body.classList.remove('is-resizing-sidebar');
  applySidebarWidth(state.sidebarWidth, true);
  draw();
}
sidebarResizer.addEventListener('pointerup', finishSidebarResize);
sidebarResizer.addEventListener('pointercancel', finishSidebarResize);
sidebarResizer.addEventListener('keydown', (e) => {
  if (!isDesktopLayout() || state.sidebarCollapsed) return;
  const bounds = sidebarBounds();
  let nextWidth = state.sidebarWidth;
  if (e.key === 'ArrowLeft') nextWidth -= e.shiftKey ? 48 : 16;
  else if (e.key === 'ArrowRight') nextWidth += e.shiftKey ? 48 : 16;
  else if (e.key === 'Home') nextWidth = bounds.min;
  else if (e.key === 'End') nextWidth = bounds.max;
  else return;
  e.preventDefault();
  applySidebarWidth(nextWidth, true);
  draw();
});

function chartWidth(d) {
  return d.render?.width || window.SankeyEngine.DEFAULTS?.width || 2862;
}
function draw({ renderTable = true, syncView = true } = {}) {
  if (syncView) syncViewModeControls();
  if (state.viewMode === 'table') {
    if (renderTable) renderTables();
    svgBtn.disabled = true;
    return;
  }
  const d = localizedDataset(currentDataset());
  const maxWidth = chartWidth(d);
  document.querySelector('.card').style.maxWidth = maxWidth + 'px';
  if (d) window.SankeyEngine.render('#chart', d);
  svgBtn.disabled = !document.querySelector('#chart svg');
}

window.addEventListener('hashchange', () => {
  const record = recordFromHash();
  if (!record) return;
  if (record.index === state.activeIndex && record.company === state.company) return;
  state.activeIndex = record.index;
  state.company = record.company;
  renderAll();
  draw({ renderTable: false, syncView: false });
  scrollActiveTableRow('statement');
});

content.addEventListener('scroll', requestVirtualTableUpdate, { passive: true });

let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    syncResponsiveLayout();
    draw();
    requestVirtualTableUpdate();
  }, 200);
});

applyStaticTranslations();
syncResponsiveLayout();
renderAll();
draw({ renderTable: false, syncView: false });
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.remove('boot-no-motion');
    prewarmI18nCaches();
  });
});

/* ---- export ---- */
const currentSvg = () => document.querySelector('#chart svg');
function downloadText(filename, text, type = 'text/csv;charset=utf-8') {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = filename;
  a.click();
}
function csvCell(value) {
  const text = String(value ?? '').replace(/\r?\n/g, ' ');
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}
function csvFromRows(columns, rows) {
  return [
    columns.map((column) => csvCell(column.label)).join(','),
    ...rows.map((row) => columns.map((column) => csvCell(column.value(row))).join(',')),
  ].join('\n') + '\n';
}
function svgString() {
  const svg = currentSvg().cloneNode(true);
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  return '<?xml version="1.0" encoding="UTF-8"?>\n' + new XMLSerializer().serializeToString(svg);
}
function dims() {
  const svg = currentSvg();
  if (svg.viewBox && svg.viewBox.baseVal && svg.viewBox.baseVal.width)
    return [svg.viewBox.baseVal.width, svg.viewBox.baseVal.height];
  const r = svg.getBoundingClientRect();
  return [r.width, r.height];
}
const fname = () => (currentDataset()?.key || 'sankey') + '-d3';
svgBtn.onclick = () => {
  if (state.viewMode !== 'sankey' || !currentSvg()) return;
  downloadText(fname() + '.svg', svgString(), 'image/svg+xml');
};
pngBtn.onclick = () => {
  if (state.viewMode !== 'sankey' || !currentSvg()) return;
  const [w, h] = dims(); const scale = 2;
  const img = new Image();
  img.onload = () => {
    const c = document.createElement('canvas');
    c.width = w * scale; c.height = h * scale;
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    c.toBlob((b) => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = fname() + '.png'; a.click(); });
  };
  img.src = URL.createObjectURL(new Blob([svgString()], { type: 'image/svg+xml' }));
};
companiesCsvBtn.onclick = () => {
  const columns = [
    { label: 'company', value: (row) => row.company },
    { label: 'legal_name', value: (row) => row.legalName },
    { label: 'ticker', value: (row) => row.ticker },
    { label: 'exchange', value: (row) => row.exchange },
    { label: 'market_cap', value: (row) => row.marketCap },
    { label: 'market_cap_usd', value: (row) => row.marketCapValueUsd },
    { label: 'market_cap_as_of', value: (row) => row.marketCapAsOf },
    { label: 'market_cap_source_url', value: (row) => row.marketCapSourceUrl },
    { label: 'sector', value: (row) => row.sector },
    { label: 'industry', value: (row) => row.industry },
    { label: 'founded', value: (row) => row.founded },
    { label: 'headquarters', value: (row) => row.headquarters },
    { label: 'fiscal_year_end', value: (row) => row.fiscalYearEnd },
    { label: 'website', value: (row) => row.website },
    { label: 'description', value: (row) => row.description },
    { label: 'dataset_count', value: (row) => row.datasetCount },
    { label: 'latest_period', value: (row) => row.latestPeriod },
    { label: 'source_urls', value: (row) => (row.sourceUrls || []).join(' ') },
  ];
  downloadText('companies.csv', csvFromRows(columns, companyRows()));
};
statementsCsvBtn.onclick = () => {
  const columns = [
    { label: 'dataset_key', value: (row) => row.record.dataset.key },
    { label: 'company', value: (row) => row.displayCompany },
    { label: 'period', value: (row) => row.displayPeriod },
    { label: 'period_note', value: (row) => row.displayPeriodNote },
    { label: 'currency', value: (row) => row.financial?.currency || '' },
    { label: 'unit', value: (row) => row.financial?.unit || '' },
    { label: 'revenue_total', value: (row) => row.financial?.revenue?.total ?? '' },
    { label: 'revenue_notes', value: (row) => notesText(row.financial?.revenue?.notes) },
    { label: 'revenue_items', value: (row) => row.revenueItems },
    { label: 'cost_of_revenue', value: (row) => row.financial?.costs?.costOfRevenue?.value ?? '' },
    { label: 'gross_profit', value: (row) => row.financial?.profit?.gross?.value ?? '' },
    { label: 'operating_expenses', value: (row) => row.financial?.costs?.operatingExpenses?.total ?? '' },
    { label: 'operating_expense_items', value: (row) => row.operatingExpenseItems },
    { label: 'operating_profit', value: (row) => row.financial?.profit?.operating?.value ?? '' },
    { label: 'other_income', value: (row) => row.financial?.otherIncome?.total ?? 0 },
    { label: 'tax', value: (row) => row.financial?.costs?.tax?.value ?? '' },
    { label: 'net_profit', value: (row) => row.financial?.profit?.net?.value ?? '' },
    { label: 'source_image', value: (row) => row.financial?.sourceImage || '' },
  ];
  downloadText('income-statements.csv', csvFromRows(columns, statementRows()));
};
