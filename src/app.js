const TraceDomain = window.TraceDomain;
const {
  ANNUAL_PERIOD_KEY,
  COMPANY_SORT_CONFIG,
  COMPANY_SORT_DIRECTIONS,
  COMPANY_SORT_KEYS,
  QUARTER_TAGS,
  amountValueUsd,
  clean,
  companyKey,
  fallbackCompanyMetadata,
  finiteNumber,
  normalize,
  periodFor,
  timestampMs,
} = TraceDomain;
const traceCatalog = TraceDomain.createCatalog(window);
const sets = traceCatalog.datasets;
const companySearch = document.getElementById('companySearch');
const companySearchToggle = document.getElementById('companySearchToggle');
const companyMultiExitToggle = document.getElementById('companyMultiExitToggle');
const companySortToggle = document.getElementById('companySortToggle');
const companySortMenu = document.getElementById('companySortMenu');
const companySortOptions = document.getElementById('companySortOptions');
const companySection = document.querySelector('.company-section');
const periodSearch = document.getElementById('periodSearch');
const periodSearchToggle = document.getElementById('periodSearchToggle');
const periodSortToggle = document.getElementById('periodSortToggle');
const periodExpandToggle = document.getElementById('periodExpandToggle');
const periodSection = document.querySelector('.period-section');
const companyList = document.getElementById('companyList');
const periodList = document.getElementById('periodList');
const periodScrollMeter = document.getElementById('periodScrollMeter');
const periodScrollThumb = document.getElementById('periodScrollThumb');
const app = document.querySelector('.app');
const topShell = document.querySelector('.top-shell');
const actionTitle = document.getElementById('actionTitle');
const companyScopeCount = document.getElementById('companyScopeCount');
const metricScopeCount = document.getElementById('metricScopeCount');
const viewScopeCount = document.getElementById('viewScopeCount');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarRestoreToggle = document.getElementById('sidebarRestoreToggle');
const sidebarResizer = document.getElementById('sidebarResizer');
const content = document.querySelector('.content');
const controlStrip = document.querySelector('.control-strip');
const viewActionbar = document.querySelector('.view-actionbar');
const metricMode = document.getElementById('metricMode');
const viewMode = document.getElementById('viewMode');
const sankeyView = document.getElementById('sankeyView');
const singleChartCard = document.getElementById('singleChartCard');
const sankeyComparison = document.getElementById('sankeyComparison');
const trendView = document.getElementById('trendView');
const tableView = document.getElementById('tableView');
const trendChart = document.getElementById('trendChart');
const trendChartTitle = document.getElementById('trendChartTitle');
const trendChartSubtitle = document.getElementById('trendChartSubtitle');
const sankeyActions = document.getElementById('sankeyActions');
const tableActions = document.getElementById('tableActions');
const companiesTableSection = document.getElementById('companiesTableSection');
const statementsTableSection = document.getElementById('statementsTableSection');
const revenueTableSection = document.getElementById('revenueTableSection');
const companiesTable = document.getElementById('companiesTable');
const statementsTable = document.getElementById('statementsTable');
const revenueTable = document.getElementById('revenueTable');
const companiesTableCount = document.getElementById('companiesTableCount');
const statementsTableCount = document.getElementById('statementsTableCount');
const revenueTableCount = document.getElementById('revenueTableCount');
const svgBtn = document.getElementById('svgBtn');
const pngBtn = document.getElementById('pngBtn');
const companiesCsvBtn = document.getElementById('companiesCsvBtn');
const statementsCsvBtn = document.getElementById('statementsCsvBtn');
const revenueCsvBtn = document.getElementById('revenueCsvBtn');
const languageToggle = document.getElementById('languageToggle');
const languageToggleText = document.getElementById('languageToggleText');
const themeToggle = document.getElementById('themeToggle');
const SIDEBAR_WIDTH_KEY = 'sankey.sidebar.width';
const SIDEBAR_COLLAPSED_KEY = 'sankey.sidebar.collapsed';
const VIEW_MODE_KEY = 'sankey.view.mode';
const METRIC_MODE_KEY = 'sankey.metric.mode';
const PERIOD_EXPANDED_KEY = 'sankey.period.expanded';
const LANGUAGE_KEY = 'sankey.language';
const THEME_KEY = 'sankey.theme';
const COMPANY_SORT_KEY = 'sankey.company.sort';
const COMPANY_SORT_DIRECTION_KEY = 'sankey.company.sort.direction';
const SIDEBAR_MIN = 220;
const SIDEBAR_MAX = 560;
const SIDEBAR_DEFAULT = 282;
const DESKTOP_BREAKPOINT = 900;
const METRIC_MODES = ['companyInfo', 'incomeStatement', 'revenue'];
const METRIC_MODE_LABEL_KEYS = {
  companyInfo: 'metricCompanyInfo',
  incomeStatement: 'metricIncomeStatement',
  revenue: 'metricRevenue',
};
const VIEW_MODES = ['sankey', 'trend', 'table'];
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
let revenueTrendChart = null;
let revenueTrendCharts = [];
let revenueTrendHoverSyncing = false;
const I18N_API = window.SANKEY_I18N || {};
const I18N = I18N_API.ui || {
  en: {
    documentTitle: 'Trace (Company & Product Metric Visualizer)',
    appTitle: 'Trace (Company & Product Metric Visualizer)',
    byline: 'by',
    viewModeLabel: 'Data view',
    viewSankey: 'Sankey',
    viewSankeyTitle: 'Sankey view',
    viewTrend: 'Trend',
    viewTrendTitle: 'Trend view',
    viewTable: 'Table',
    viewTableTitle: 'Table view',
    mainControlsLabel: 'Metric and view controls',
    metricLabel: 'Metric',
    metricModeLabel: 'Metric',
    metricCompanyInfo: 'Company Info',
    metricIncomeStatement: 'Income Statement',
    metricRevenue: 'Revenue',
    viewLabel: 'View',
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
    downloadRevenueCsv: 'Revenue CSV',
    downloadRevenueCsvTitle: 'Download revenue CSV',
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
    companySortMetaUpdated: 'Updated {value}',
    companyMultiExitTitle: 'Exit company multi-select',
    comparisonNoData: 'No data for this metric',
    comparisonScopeSummary: '{count} selected companies',
    periodLabel: 'Data point time',
    periodSortLabel: 'Sort time points',
    sortDesc: 'Desc',
    sortDescTitle: 'Newest first',
    sortAsc: 'Asc',
    sortAscTitle: 'Oldest first',
    periodExpandTitle: 'Expand time points',
    periodCollapseTitle: 'Collapse time points',
    periodSearchPlaceholder: 'Search time points',
    periodsLabel: 'Data point times',
    resizeDatasetPanelLabel: 'Resize dataset panel',
    incomeStatementsLabel: 'Income Statements',
    revenueMetricsLabel: 'Revenue Metrics',
    collapseDatasetPanel: 'Collapse dataset panel',
    showDatasetPanel: 'Show dataset panel',
    missing: 'Missing',
    source: 'Source {number}',
    companiesCountOne: '1 company',
    companiesCountMany: '{count} companies',
    statementsCountOne: '1 statement',
    statementsCountMany: '{count} statements',
    revenueRowsCountOne: '1 revenue point',
    revenueRowsCountMany: '{count} revenue points',
    noCompaniesRegistered: 'No companies registered.',
    noIncomeStatementsRegistered: 'No income statements registered.',
    noRevenueMetricsRegistered: 'No revenue metrics registered.',
    noRevenueTrendData: 'No revenue trend data.',
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
    tableMetric: 'Metric',
    tableDate: 'Date',
    tableAnnualizedRevenue: 'Annualized revenue',
    tableMomGrowth: 'MoM growth',
    tableNotes: 'Notes',
    tableDefinition: 'Definition',
    trendLatest: 'Latest {value} on {date}',
    trendLatestArr: 'Latest ARR',
    trendLatestMom: 'Latest MoM',
    trendPeakMom: 'Peak MoM',
  },
  zh: {
    documentTitle: 'Trace（公司与产品指标可视化器）',
    appTitle: 'Trace（公司与产品指标可视化器）',
    byline: '作者',
    viewModeLabel: '数据视图',
    viewSankey: '桑基图',
    viewSankeyTitle: '桑基图视图',
    viewTrend: '趋势',
    viewTrendTitle: '趋势视图',
    viewTable: '表格',
    viewTableTitle: '表格视图',
    mainControlsLabel: '指标与视图控制',
    metricLabel: '指标',
    metricModeLabel: '指标',
    metricCompanyInfo: '公司信息',
    metricIncomeStatement: '利润表',
    metricRevenue: '收入',
    viewLabel: '视图',
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
    downloadRevenueCsv: '收入 CSV',
    downloadRevenueCsvTitle: '下载收入 CSV',
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
    companySortMetaUpdated: '更新 {value}',
    companyMultiExitTitle: '退出公司多选',
    comparisonNoData: '该指标暂无数据',
    comparisonScopeSummary: '已选择 {count} 家公司',
    periodLabel: '数据期间',
    periodSortLabel: '排序数据期间',
    sortDesc: '降序',
    sortDescTitle: '最新优先',
    sortAsc: '升序',
    sortAscTitle: '最旧优先',
    periodExpandTitle: '展开数据期间',
    periodCollapseTitle: '收起数据期间',
    periodSearchPlaceholder: '搜索数据期间',
    periodsLabel: '数据期间',
    resizeDatasetPanelLabel: '调整数据集面板宽度',
    incomeStatementsLabel: '利润表',
    revenueMetricsLabel: '收入指标',
    collapseDatasetPanel: '收起数据集面板',
    showDatasetPanel: '显示数据集面板',
    missing: '缺失',
    source: '来源 {number}',
    companiesCountOne: '1 家公司',
    companiesCountMany: '{count} 家公司',
    statementsCountOne: '1 份报表',
    statementsCountMany: '{count} 份报表',
    revenueRowsCountOne: '1 个收入数据点',
    revenueRowsCountMany: '{count} 个收入数据点',
    noCompaniesRegistered: '暂无已注册公司。',
    noIncomeStatementsRegistered: '暂无已注册利润表。',
    noRevenueMetricsRegistered: '暂无已注册收入指标。',
    noRevenueTrendData: '暂无收入趋势数据。',
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
    tableMetric: '指标',
    tableDate: '日期',
    tableAnnualizedRevenue: '年化收入',
    tableMomGrowth: '月环比增速',
    tableNotes: '备注',
    tableDefinition: '定义',
    trendLatest: '最新 {date} 为 {value}',
    trendLatestArr: '最新年化收入',
    trendLatestMom: '最新月增速',
    trendPeakMom: '最高月增速',
  },
};
const i18nObjectCaches = {
  datasets: new Map(),
  financialRecords: new Map(),
  revenueRecords: new Map(),
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
    const value = window.localStorage.getItem(VIEW_MODE_KEY);
    return VIEW_MODES.includes(value) ? value : 'sankey';
  } catch (error) {
    return 'sankey';
  }
}
function readStoredMetricMode() {
  try {
    const value = window.localStorage.getItem(METRIC_MODE_KEY);
    return METRIC_MODES.includes(value) ? value : 'incomeStatement';
  } catch (error) {
    return 'incomeStatement';
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
  const bundle = I18N[code] || I18N.en;
  if (I18N_API.t) {
    const translated = I18N_API.t(key, values, code);
    if (translated !== key || !(bundle[key] || I18N.en[key])) return translated;
  }
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

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]));
}
function matches(text, query) {
  const haystack = normalize(text);
  return normalize(query).split(' ').filter(Boolean).every((token) => haystack.includes(token));
}
const records = traceCatalog.records;
const statementGroups = traceCatalog.groups;
const revenueRecords = traceCatalog.revenueRecords;
const revenueGroups = traceCatalog.revenueGroups;
const groups = traceCatalog.allCompanyGroups || statementGroups;
const financialRecords = traceCatalog.financialRecords;
const financialRecordByKey = traceCatalog.financialRecordByKey;
const companyMetadata = traceCatalog.companyMetadata;
const companyMetadataByName = traceCatalog.companyMetadataByName;

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
function clearDatasetHash() {
  if (!window.location.hash) return;
  window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}
function companyGroupsForMetric(mode) {
  if (mode === 'incomeStatement') return statementGroups;
  if (mode === 'revenue') return revenueGroups;
  return groups;
}
function metricGroupForCompany(company, mode = state?.metricMode) {
  return companyGroupsForMetric(mode).find((group) => group.company === company) || null;
}
function hasCompanyMetricData(company, mode) {
  if (mode === 'incomeStatement') return Boolean(metricGroupForCompany(company, mode)?.records?.length);
  if (mode === 'revenue') return Boolean(metricGroupForCompany(company, mode)?.revenueRecords?.length);
  return Boolean(groups.find((group) => group.company === company));
}
function uniqueCompanies(companies = []) {
  return [...new Set((companies || []).map(clean).filter(Boolean))];
}
function scopeCompanies() {
  const selected = uniqueCompanies(state?.multiCompanyMode ? state.selectedCompanies : [state?.company]);
  return selected.length ? selected : uniqueCompanies([state?.company]);
}
function isMultiCompanyScope() {
  return Boolean(state?.multiCompanyMode && scopeCompanies().length > 1);
}
function metricModesForCompanies(companies = scopeCompanies()) {
  const scope = uniqueCompanies(companies);
  const modes = METRIC_MODES.filter((mode) => scope.some((company) => hasCompanyMetricData(company, mode)));
  return modes.length ? modes : ['companyInfo'];
}
function metricModesForCompany(company = state?.company) {
  return metricModesForCompanies([company]);
}
function metricModesForScope() {
  return metricModesForCompanies(scopeCompanies());
}
function normalizeMetricModeForCompany(company, mode) {
  const modes = metricModesForCompany(company);
  return modes.includes(mode) ? mode : bestMetricModeForCompany(company, mode);
}
function normalizeMetricModeForScope(mode) {
  const modes = metricModesForScope();
  return modes.includes(mode) ? mode : modes[0] || 'companyInfo';
}
function bestMetricModeForCompany(company, preferredMode = state?.metricMode) {
  if (preferredMode !== 'companyInfo' && hasCompanyMetricData(company, preferredMode)) return preferredMode;
  if (hasCompanyMetricData(company, 'incomeStatement')) return 'incomeStatement';
  if (hasCompanyMetricData(company, 'revenue')) return 'revenue';
  return 'companyInfo';
}
function defaultViewModeForMetric(mode) {
  if (mode === 'companyInfo') return 'table';
  if (mode === 'revenue') return 'trend';
  return 'sankey';
}
function allowedViewModesForMetric(mode) {
  if (mode === 'companyInfo') return ['table'];
  if (mode === 'revenue') return ['trend', 'table'];
  return ['sankey', 'table'];
}
function normalizeViewModeForMetric(mode, viewModeValue) {
  return allowedViewModesForMetric(mode).includes(viewModeValue)
    ? viewModeValue
    : defaultViewModeForMetric(mode);
}
function initialCompanyForMetric(mode, fallbackRecord) {
  const modeGroups = companyGroupsForMetric(mode);
  if (fallbackRecord && modeGroups.some((group) => group.company === fallbackRecord.company)) return fallbackRecord.company;
  return modeGroups[0]?.company || groups[0]?.company || '';
}

const activeStart = recordFromHash() || records[defaultIndex >= 0 ? defaultIndex : 0];
const storedCompanySort = readStoredCompanySort();
const storedMetricMode = readStoredMetricMode();
const storedViewMode = normalizeViewModeForMetric(storedMetricMode, readStoredViewMode());
const initialCompany = initialCompanyForMetric(storedMetricMode, activeStart);
const initialActiveIndex = activeStart?.index || 0;
const state = {
  sort: 'desc',
  companySort: storedCompanySort,
  companySortDirection: readStoredCompanySortDirection(storedCompanySort),
  activeIndex: initialActiveIndex,
  activeIndexByCompany: initialCompany ? { [initialCompany]: initialActiveIndex } : {},
  company: initialCompany,
  selectedCompanies: initialCompany ? [initialCompany] : [],
  multiCompanyMode: false,
  metricMode: storedMetricMode,
  viewMode: storedViewMode,
  periodExpanded: readStoredBoolean(PERIOD_EXPANDED_KEY, false),
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
function periodExpandIcon(expanded) {
  return expanded
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="m14 10-3 2 3 2"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h10"/><path d="M4 17h16"/><path d="m17 10 3 2-3 2"/></svg>';
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
  syncPeriodExpansionControls();
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
  const controlHeight = Math.ceil(controlStrip?.getBoundingClientRect().height || 46);
  const actionHeight = Math.ceil(viewActionbar?.getBoundingClientRect().height || 32);
  document.documentElement.style.setProperty('--control-strip-height', `${controlHeight}px`);
  document.documentElement.style.setProperty('--view-actionbar-height', `${actionHeight}px`);
}
function syncSidebarControls() {
  const expanded = !state.sidebarCollapsed;
  app.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
  sidebarToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  const label = expanded ? t('collapseDatasetPanel') : t('showDatasetPanel');
  sidebarToggle.setAttribute('aria-label', label);
  sidebarToggle.title = label;
  sidebarToggle.innerHTML = sidebarToggleIcon(expanded);
  if (sidebarRestoreToggle) {
    const restoreLabel = t('showDatasetPanel');
    sidebarRestoreToggle.hidden = expanded;
    sidebarRestoreToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    sidebarRestoreToggle.setAttribute('aria-label', restoreLabel);
    sidebarRestoreToggle.title = restoreLabel;
    sidebarRestoreToggle.innerHTML = sidebarToggleIcon(false);
  }
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
function isCompanyInfoMetric() {
  return state.metricMode === 'companyInfo';
}
function isIncomeStatementMetric() {
  return state.metricMode === 'incomeStatement';
}
function isRevenueMetric() {
  return state.metricMode === 'revenue';
}
function activeTableKind() {
  if (isCompanyInfoMetric()) return 'company';
  if (isRevenueMetric()) return 'revenue';
  return 'statement';
}
function updatePeriodScrollIndicator() {
  if (!periodScrollMeter || !periodScrollThumb || !periodList) return;
  const overflow = periodList.scrollWidth - periodList.clientWidth;
  const scrollable = isIncomeStatementMetric()
    && !state.periodExpanded
    && !periodSection.hidden
    && overflow > 20;
  periodScrollMeter.hidden = !scrollable;
  if (!scrollable) return;
  const trackWidth = periodScrollMeter.clientWidth || periodList.clientWidth;
  const maxScroll = Math.max(1, overflow);
  const thumbWidth = clamp(trackWidth * 0.08, 32, 72);
  const thumbLeft = (periodList.scrollLeft / maxScroll) * Math.max(0, trackWidth - thumbWidth);
  periodScrollThumb.style.width = `${thumbWidth.toFixed(1)}px`;
  periodScrollThumb.style.transform = `translateX(${thumbLeft.toFixed(1)}px)`;
}
function localizedDataset(dataset, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.datasets, dataset, I18N_API.localizeDataset, language);
}
function localizedFinancialRecord(record, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.financialRecords, record, I18N_API.localizeFinancialRecord, language);
}
function localizedRevenueRecord(record, language = state.language) {
  return cachedLocalizedObject(i18nObjectCaches.revenueRecords, record, I18N_API.localizeRevenueMetricRecord, language);
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
  const meta = localizedCompanyRecord(metadataFor(record.company), code);
  if (record.metric) {
    const metric = localizedRevenueRecord(record.metric, code) || record.metric;
    const display = {
      dataset: null,
      metric,
      company: clean(meta.displayName || meta.name || record.company),
      period: clean(metric.period || record.period),
      periodNote: clean(metric.periodNote || record.periodNote),
      label: clean(metric.displayName || metric.metricName || record.label),
      variantLabel: t('defaultVariant', {}, code),
    };
    display.searchText = [
      record.searchText,
      companyMetadataSearchText(record.company, code),
      display.company,
      display.period,
      display.periodNote,
      display.label,
    ].join(' ');
    byLanguage.set(record, display);
    return display;
  }
  const dataset = localizedDataset(record.dataset, code) || record.dataset;
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
    companyMetadataSearchText(record.company, code),
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
function currentCompanyGroups() {
  return companyGroupsForMetric(state.metricMode);
}
function groupFor(company, mode = state.metricMode) {
  return metricGroupForCompany(company, mode) || (mode === 'companyInfo' ? groups.find((group) => group.company === company) || groups[0] : null);
}
function selectedCompanySet() {
  return new Set(scopeCompanies());
}
function setSelectedCompanies(companies) {
  const next = uniqueCompanies(companies);
  if (!next.length && state.company) next.push(state.company);
  if (state.company && !next.includes(state.company)) next.unshift(state.company);
  state.selectedCompanies = uniqueCompanies(next);
  if (!state.selectedCompanies.length && groups[0]?.company) {
    state.company = groups[0].company;
    state.selectedCompanies = [state.company];
  }
  if (state.multiCompanyMode && state.selectedCompanies.length <= 1) {
    state.multiCompanyMode = false;
  }
}
function syncSingleCompanyScope() {
  if (state.multiCompanyMode) return;
  state.selectedCompanies = state.company ? [state.company] : [];
}
function companiesSupportingMetric(mode = state.metricMode, companies = scopeCompanies()) {
  return uniqueCompanies(companies).filter((company) => hasCompanyMetricData(company, mode));
}
function primaryCompanyForMetric(mode = state.metricMode) {
  const supported = companiesSupportingMetric(mode);
  if (supported.includes(state.company)) return state.company;
  return supported[0] || state.company || groups[0]?.company || '';
}
function companyActiveIndex(company) {
  const index = state.activeIndexByCompany?.[company];
  const record = recordByIndex(index);
  return record?.company === company ? index : null;
}
function setCompanyActiveRecord(record) {
  if (!record) return;
  state.activeIndexByCompany[record.company] = record.index;
  if (record.company === state.company) state.activeIndex = record.index;
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
function defaultRecordForCompanyMetric(company, mode = state.metricMode) {
  const group = metricGroupForCompany(company, mode);
  if (!group) return null;
  if (mode === 'incomeStatement') {
    const stored = recordByIndex(companyActiveIndex(company));
    if (stored?.company === company) return stored;
    return sortedRecords(group).find((record) => matches(searchTextForRecord(record), periodSearch.value)) || sortedRecords(group)[0] || null;
  }
  if (mode === 'revenue') return group.revenueRecords?.[0] || null;
  const companyGroup = groups.find((item) => item.company === company);
  return companyGroup?.records?.[0] || group.records?.[0] || null;
}
function scopeRecordsForMetric(mode = state.metricMode) {
  return scopeCompanies()
    .map((company) => defaultRecordForCompanyMetric(company, mode))
    .filter(Boolean);
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
  setCompanyActiveRecord(record);
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else if (!state.selectedCompanies.includes(record.company)) setSelectedCompanies([...state.selectedCompanies, record.company]);
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
function metadataFor(company) {
  return companyMetadataByName.get(normalize(company)) || fallbackCompanyMetadata(company);
}
function displayCompanyName(company, language = state.language) {
  const meta = localizedCompanyRecord(metadataFor(company), language);
  return clean(meta.displayName || meta.name || company);
}
function supportedSearchLanguages(primary = state.language) {
  return [
    primary,
    I18N_API.defaultLanguage || 'en',
    ...(I18N_API.languageCodes || Object.keys(I18N)),
  ]
    .map((language) => languageCode(language))
    .filter((language, index, list) => language && list.indexOf(language) === index);
}
function companyMetadataSearchText(company, language = state.language) {
  const sourceMeta = metadataFor(company);
  const meta = localizedCompanyRecord(sourceMeta, language) || sourceMeta;
  const parts = [
    company,
    sourceMeta.key,
    sourceMeta.name,
    sourceMeta.displayName,
    sourceMeta.legalName,
    ...(sourceMeta.aliases || []),
    sourceMeta.ticker,
    sourceMeta.exchange,
    meta.key,
    meta.name,
    meta.displayName,
    meta.legalName,
    ...(meta.aliases || []),
    meta.ticker,
    meta.exchange,
  ];
  return parts.map(clean).filter(Boolean).join(' ');
}
function searchTextForRecord(record) {
  return displayRecord(record).searchText;
}
function multilingualSearchTextForRecord(record) {
  return supportedSearchLanguages()
    .map((language) => displayRecord(record, language).searchText)
    .join(' ');
}
function multilingualCompanySearchText(company) {
  return supportedSearchLanguages()
    .map((language) => companyMetadataSearchText(company, language))
    .join(' ');
}
function searchTextForGroup(group) {
  if (!group) return '';
  const byLanguage = languageObjectCache(i18nObjectCaches.groups);
  if (!byLanguage.has(group)) {
    byLanguage.set(group, [
      group.searchText,
      multilingualCompanySearchText(group.company),
      ...group.records.map((record) => multilingualSearchTextForRecord(record)),
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
function formatRevenueValue(metric, value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  const decimals = typeof metric?.decimals === 'number' ? metric.decimals : 1;
  return `${metric?.currency || '$'}${Math.abs(value).toFixed(decimals)}${metric?.unit || 'B'}`;
}
function formatPercent(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) return '';
  return `${value.toFixed(Number.isInteger(value) ? 0 : 1)}%`;
}
function formatMetricDate(value, language = state.language) {
  const time = Date.parse(`${clean(value)}T00:00:00Z`);
  if (!Number.isFinite(time)) return clean(value);
  const locale = languageCode(language) === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(time));
}
function sourceImageForRevenueMetric(metric) {
  return (metric?.sources || []).find((source) => source.sourceImage)?.sourceImage?.src || '';
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
function tableScrollRoot(table) {
  return table?.closest?.('.view-pane') || tableView || content;
}
function tableTopInScrollRoot(table) {
  const scrollRoot = tableScrollRoot(table);
  const rootRect = scrollRoot.getBoundingClientRect();
  return scrollRoot.scrollTop + table.getBoundingClientRect().top - rootRect.top;
}
function tableBodyTopInScrollRoot(table) {
  return tableTopInScrollRoot(table) + tableHeaderHeight(table);
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
  const scrollRoot = tableScrollRoot(table);
  const bufferPx = Math.max(scrollRoot.clientHeight, 1) * TABLE_OVERSCAN_VIEWPORTS;
  if (Number.isInteger(focusIndex) && focusIndex >= 0) {
    const bufferRows = Math.max(1, Math.ceil(bufferPx / rowHeight));
    return {
      start: clamp(focusIndex - bufferRows, 0, rows.length),
      end: clamp(focusIndex + bufferRows + 1, 0, rows.length),
    };
  }
  const bodyTop = tableBodyTopInScrollRoot(table);
  const viewportTop = scrollRoot.scrollTop;
  const viewportBottom = viewportTop + scrollRoot.clientHeight;
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
function revenueRecordsForCompany(company = state.company) {
  return metricGroupForCompany(company, 'revenue')?.revenueRecords || [];
}
function formatTrendDate(value, language = state.language) {
  const time = Date.parse(`${clean(value)}T00:00:00Z`);
  if (!Number.isFinite(time)) return clean(value);
  const locale = languageCode(language) === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', timeZone: 'UTC' }).format(new Date(time));
}
function cssVar(name, fallback = '') {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function colorWithAlpha(color, alpha) {
  const trimmed = clean(color);
  const hex = trimmed.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)?.[1];
  if (!hex) return trimmed;
  const expanded = hex.length === 3 ? hex.split('').map((part) => part + part).join('') : hex;
  const value = Number.parseInt(expanded, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function destroyRevenueTrendChart() {
  if (revenueTrendChart) {
    revenueTrendChart.destroy();
    revenueTrendChart = null;
  }
  revenueTrendCharts.forEach((chart) => chart.destroy());
  revenueTrendCharts = [];
  revenueTrendHoverSyncing = false;
}
const revenueTrendValueLabelsPlugin = {
  id: 'revenueTrendValueLabels',
  afterDatasetsDraw(chart, _args, options) {
    const meta = chart.getDatasetMeta(0);
    const dataset = chart.data.datasets[0];
    const observations = options.observations || [];
    if (!meta?.data?.length || !dataset) return;
    const activeIndex = revenueTrendActiveIndex(chart);
    const { ctx, chartArea } = chart;
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    meta.data.forEach((point, index) => {
      const observation = observations[index] || {};
      const isActive = index === activeIndex;
      const showLabel = isActive || index === meta.data.length - 1 || observation.momGrowthPct >= 25;
      if (!showLabel) return;
      const label = options.formatValue ? options.formatValue(dataset.data[index]) : String(dataset.data[index]);
      const fontSize = isActive ? (options.activeFontSize || options.fontSize || 15) : (options.fontSize || 15);
      ctx.fillStyle = isActive ? (options.activeColor || options.color || '#263238') : (options.color || '#263238');
      ctx.font = `${isActive ? 700 : 600} ${fontSize}px ${options.fontFamily || 'Montserrat, Arial, sans-serif'}`;
      const textWidth = ctx.measureText(label).width;
      const x = clamp(point.x, chartArea.left + textWidth / 2, chartArea.right - textWidth / 2);
      const y = point.y - 12 < chartArea.top ? point.y + 28 : point.y - 12;
      ctx.fillText(label, x, y);
    });
    ctx.restore();
  },
};
const revenueTrendHoverGuidePlugin = {
  id: 'revenueTrendHoverGuide',
  beforeDatasetsDraw(chart, _args, options) {
    const activeIndex = revenueTrendActiveIndex(chart);
    if (!Number.isInteger(activeIndex)) return;
    const meta = chart.getDatasetMeta(0);
    const bar = meta?.data?.[activeIndex];
    const { chartArea, ctx } = chart;
    if (!bar || !chartArea) return;
    const previousBar = meta.data?.[activeIndex - 1];
    const nextBar = meta.data?.[activeIndex + 1];
    const left = previousBar ? (previousBar.x + bar.x) / 2 : Math.max(chartArea.left, bar.x - (nextBar ? (nextBar.x - bar.x) / 2 : (bar.width || 24)));
    const right = nextBar ? (bar.x + nextBar.x) / 2 : Math.min(chartArea.right, bar.x + (previousBar ? (bar.x - previousBar.x) / 2 : (bar.width || 24)));
    ctx.save();
    ctx.fillStyle = options.rangeColor || 'rgba(20, 67, 107, 0.035)';
    ctx.fillRect(left, chartArea.top, Math.max(1, right - left), chartArea.bottom - chartArea.top);
    ctx.restore();
  },
  afterDatasetsDraw(chart, _args, options) {
    const activeIndex = revenueTrendActiveIndex(chart);
    if (!Number.isInteger(activeIndex)) return;
    const bar = chart.getDatasetMeta(0)?.data?.[activeIndex];
    const point = chart.getDatasetMeta(1)?.data?.[activeIndex];
    const { chartArea, ctx } = chart;
    if (!bar || !chartArea) return;
    ctx.save();
    ctx.strokeStyle = options.lineColor || 'rgba(20, 67, 107, 0.18)';
    ctx.lineWidth = options.lineWidth || 1;
    ctx.setLineDash(options.lineDash || [2, 5]);
    ctx.beginPath();
    ctx.moveTo(bar.x, chartArea.top);
    ctx.lineTo(bar.x, chartArea.bottom);
    ctx.stroke();

    const hasNote = typeof options.hasNote === 'function' ? options.hasNote(activeIndex) : false;
    if (hasNote) {
      const radius = options.noteRadius || 3;
      const y = chartArea.top + Math.max(7, radius + 3);
      ctx.setLineDash([]);
      ctx.fillStyle = options.noteColor || options.lineColor || 'rgba(20, 67, 107, 0.32)';
      ctx.strokeStyle = options.noteRingColor || 'rgba(255, 255, 255, 0.86)';
      ctx.lineWidth = options.noteRingWidth || 1.4;
      ctx.beginPath();
      ctx.arc(bar.x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    const barLeft = bar.x - bar.width / 2;
    const barTop = Math.min(bar.y, bar.base);
    const barHeight = Math.abs(bar.base - bar.y);
    if (Number.isFinite(barLeft) && Number.isFinite(barTop) && Number.isFinite(barHeight) && barHeight > 0) {
      const radius = Math.min(options.activeBarRadius || 4, bar.width / 2, barHeight / 2);
      ctx.setLineDash([]);
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(barLeft, barTop, bar.width, barHeight, radius);
      } else {
        ctx.rect(barLeft, barTop, bar.width, barHeight);
      }
      ctx.fillStyle = options.activeBarFill || 'rgba(20, 67, 107, 0.06)';
      ctx.strokeStyle = options.activeBarBorder || 'rgba(20, 67, 107, 0.48)';
      ctx.lineWidth = options.activeBarLineWidth || 1.4;
      ctx.fill();
      ctx.stroke();
    }

    if (point && Number.isFinite(point.x) && Number.isFinite(point.y)) {
      const radius = options.activePointRadius || 4.4;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.fillStyle = options.activePointHalo || 'rgba(154, 106, 47, 0.14)';
      ctx.arc(point.x, point.y, radius + 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = options.activePointFill || '#fff';
      ctx.strokeStyle = options.activePointBorder || 'rgba(154, 106, 47, 1)';
      ctx.lineWidth = options.activePointLineWidth || 2.2;
      ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      const growthValue = options.growthValues?.[activeIndex];
      if (typeof growthValue === 'number' && Number.isFinite(growthValue)) {
        const label = options.formatGrowthValue ? options.formatGrowthValue(growthValue) : `${growthValue}%`;
        const fontSize = options.activeGrowthFontSize || 14;
        ctx.font = `700 ${fontSize}px ${options.fontFamily || 'Montserrat, Arial, sans-serif'}`;
        ctx.textAlign = 'center';
        const textWidth = ctx.measureText(label).width;
        const labelX = clamp(point.x, chartArea.left + textWidth / 2, chartArea.right - textWidth / 2);
        let labelY = point.y + radius + 8;
        ctx.textBaseline = 'top';
        if (labelY + fontSize + 2 > chartArea.bottom) {
          labelY = point.y - radius - 8;
          ctx.textBaseline = 'bottom';
        }
        ctx.strokeStyle = options.activeLabelHalo || 'rgba(255, 255, 255, 0.88)';
        ctx.lineWidth = options.activeLabelHaloWidth || 3;
        ctx.strokeText(label, labelX, labelY);
        ctx.fillStyle = options.activeGrowthColor || '#263238';
        ctx.fillText(label, labelX, labelY);
      }
    }
    ctx.restore();
  },
};
function revenueTrendActiveIndex(chart) {
  const activeElement = chart.getActiveElements?.()[0];
  if (Number.isInteger(activeElement?.index)) return activeElement.index;
  if (chart.tooltip?.opacity > 0) return chart.tooltip.dataPoints?.[0]?.dataIndex;
  return undefined;
}
function revenueTrendActiveElements(chart, index) {
  if (!Number.isInteger(index)) return [];
  return chart.data.datasets
    .map((_dataset, datasetIndex) => ({ datasetIndex, index }))
    .filter(({ datasetIndex }) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      return meta?.data?.[index] && chart.data.datasets[datasetIndex]?.data?.[index] != null;
    });
}
function setRevenueTrendActiveIndex(chart, index) {
  const active = revenueTrendActiveElements(chart, index);
  const point = chart.getDatasetMeta(0)?.data?.[index];
  chart.setActiveElements(active);
  chart.tooltip?.setActiveElements(active, point ? { x: point.x, y: point.y } : { x: 0, y: 0 });
  chart.update('none');
}
function clearRevenueTrendActive(chart) {
  chart.setActiveElements([]);
  chart.tooltip?.setActiveElements([], { x: 0, y: 0 });
  chart.update('none');
}
function syncRevenueTrendHover(sourceChart, sourceIndex) {
  if (revenueTrendHoverSyncing || !Number.isInteger(sourceIndex)) return;
  revenueTrendHoverSyncing = true;
  const sourceDate = sourceChart.$trendDates?.[sourceIndex];
  revenueTrendCharts.forEach((chart) => {
    const targetIndex = sourceDate
      ? chart.$trendDates?.indexOf(sourceDate)
      : sourceIndex;
    if (Number.isInteger(targetIndex) && targetIndex >= 0) setRevenueTrendActiveIndex(chart, targetIndex);
    else clearRevenueTrendActive(chart);
  });
  revenueTrendHoverSyncing = false;
}
function clearRevenueTrendHoverSync() {
  if (revenueTrendHoverSyncing) return;
  revenueTrendHoverSyncing = true;
  revenueTrendCharts.forEach(clearRevenueTrendActive);
  revenueTrendHoverSyncing = false;
}
const revenueTrendSyncHoverPlugin = {
  id: 'revenueTrendSyncHover',
  afterEvent(chart, args) {
    if (!chart.$trendComparison || revenueTrendHoverSyncing) return;
    const type = args.event?.type;
    if (type === 'mouseout') {
      clearRevenueTrendHoverSync();
      return;
    }
    if (!['mousemove', 'touchmove', 'touchstart', 'click'].includes(type)) return;
    const activeIndex = chart.getActiveElements?.()[0]?.index ?? chart.tooltip?.dataPoints?.[0]?.dataIndex;
    if (Number.isInteger(activeIndex)) syncRevenueTrendHover(chart, activeIndex);
  },
};
function createRevenueTrendChartConfig({
  metric,
  observations,
  values,
  yMax,
  growthMax,
  compact = false,
  comparison = false,
  yTickFormatter = (value) => formatRevenueValue(metric, Number(value)),
  valueLabelFormatter = (value) => formatRevenueValue(metric, value),
}) {
  const ink = cssVar('--ink', '#15436b');
  const text = cssVar('--text-strong', '#263238');
  const muted = cssVar('--muted', '#6a7078');
  const grid = cssVar('--table-cell-line', '#edf0f0');
  const tableBg = cssVar('--table-bg', '#ffffff');
  const growthColor = cssVar('--trend-growth', '#9a6a2f');
  const fontFamily = 'Montserrat, Arial, sans-serif';
  const labels = observations.map((observation) => formatTrendDate(observation.date));
  const growthValues = observations.map((observation) => observation.momGrowthPct ?? null);
  const tickSize = compact ? 10 : 12;
  const legendSize = compact ? 10 : 11;
  const valueLabelSize = compact ? 10 : 15;
  const revenueBarFill = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.28) : colorWithAlpha(ink, 0.1)
  ));
  const revenueBarBorder = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.44) : colorWithAlpha(ink, 0.18)
  ));
  const revenueBarHoverFill = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.36) : colorWithAlpha(ink, 0.24)
  ));
  const revenueBarHoverBorder = values.map((_value, index) => (
    index === values.length - 1 ? colorWithAlpha(ink, 0.62) : colorWithAlpha(ink, 0.46)
  ));
  const defaultPointRadius = compact ? 2 : 2.4;
  const activePointRadius = compact ? 3.8 : 4.4;

  return {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: metric?.displayName || t('tableAnnualizedRevenue'),
          type: 'bar',
          yAxisID: 'y',
          data: values,
          backgroundColor: revenueBarFill,
          borderColor: revenueBarBorder,
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
          barPercentage: 0.62,
          categoryPercentage: 0.74,
          hoverBackgroundColor: revenueBarHoverFill,
          hoverBorderColor: revenueBarHoverBorder,
          hoverBorderWidth: 1.4,
        },
        {
          label: t('tableMomGrowth'),
          type: 'line',
          yAxisID: 'yGrowth',
          data: growthValues,
          borderColor: growthColor,
          backgroundColor: growthColor,
          pointBackgroundColor: tableBg,
          pointBorderColor: growthColor,
          pointBorderWidth: 1.4,
          pointHoverBackgroundColor: tableBg,
          pointHoverBorderColor: growthColor,
          pointHoverBorderWidth: compact ? 2 : 2.2,
          pointHoverRadius: activePointRadius,
          pointRadius: defaultPointRadius,
          hitRadius: compact ? 8 : 10,
          borderWidth: compact ? 1.6 : 1.8,
          fill: false,
          tension: 0.24,
          spanGaps: false,
        },
      ],
    },
    plugins: comparison
      ? [revenueTrendSyncHoverPlugin, revenueTrendHoverGuidePlugin, revenueTrendValueLabelsPlugin]
      : [revenueTrendHoverGuidePlugin, revenueTrendValueLabelsPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      layout: {
        padding: compact
          ? { top: 2, right: 10, bottom: 0, left: 4 }
          : { top: 2, right: 12, bottom: 0, left: 6 },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          offset: true,
          grid: {
            display: false,
          },
          border: {
            color: cssVar('--table-line', '#d9dfdf'),
          },
          ticks: {
            color: muted,
            font: { family: fontFamily, size: tickSize, weight: '500' },
            maxRotation: 0,
            autoSkip: true,
            autoSkipPadding: compact ? 12 : 22,
          },
        },
        y: {
          beginAtZero: true,
          max: yMax,
          grid: {
            color: grid,
          },
          border: {
            color: cssVar('--table-line', '#d9dfdf'),
          },
          ticks: {
            color: muted,
            count: compact ? 5 : 6,
            font: { family: fontFamily, size: tickSize, weight: '500' },
            callback: (value) => yTickFormatter(Number(value)),
          },
        },
        yGrowth: {
          beginAtZero: true,
          max: growthMax,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
          border: {
            color: colorWithAlpha(growthColor, 0.22),
          },
          ticks: {
            color: growthColor,
            count: compact ? 5 : 6,
            font: { family: fontFamily, size: tickSize, weight: '500' },
            callback: (value) => formatPercent(Number(value)),
          },
          title: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: false,
            boxWidth: compact ? 10 : 12,
            boxHeight: compact ? 5 : 6,
            padding: compact ? 7 : 10,
            color: muted,
            font: { family: fontFamily, size: legendSize, weight: '500' },
          },
        },
        tooltip: {
          enabled: false,
        },
        revenueTrendHoverGuide: {
          lineColor: colorWithAlpha(ink, 0.18),
          rangeColor: colorWithAlpha(ink, 0.032),
          noteColor: colorWithAlpha(ink, 0.36),
          activeBarFill: colorWithAlpha(ink, 0.055),
          activeBarBorder: colorWithAlpha(ink, 0.48),
          activePointFill: tableBg,
          activePointBorder: growthColor,
          activePointHalo: colorWithAlpha(growthColor, 0.14),
          activePointRadius,
          activeGrowthColor: text,
          activeGrowthFontSize: compact ? 10 : 14,
          activeLabelHalo: tableBg,
          fontFamily,
          growthValues,
          formatGrowthValue: formatPercent,
          hasNote: (index) => Boolean(notesText(observations[index]?.notes)),
        },
        revenueTrendValueLabels: {
          observations,
          color: text,
          activeColor: text,
          fontFamily,
          fontSize: valueLabelSize,
          activeFontSize: valueLabelSize,
          formatValue: valueLabelFormatter,
        },
      },
    },
  };
}
function renderRevenueTrendComparison() {
  if (!trendChart) return;
  const recordsForScope = scopeCompanies()
    .map((company) => revenueRecordsForCompany(company)[0])
    .filter(Boolean);
  const chartModels = recordsForScope.map((record) => {
    const metric = localizedRevenueRecord(record.metric) || record.metric;
    const observations = [...(metric?.observations || [])]
      .filter((observation) => Number.isFinite(Number(observation.value)) && Number.isFinite(Date.parse(`${observation.date}T00:00:00Z`)))
      .sort((a, b) => Date.parse(`${a.date}T00:00:00Z`) - Date.parse(`${b.date}T00:00:00Z`));
    return { record, metric, observations, latest: observations[observations.length - 1] || null };
  });
  const allUsdValues = chartModels.flatMap(({ metric, observations }) => (
    observations.map((observation) => amountValueUsd(observation.value, metric?.currency, metric?.unit)).filter((value) => value != null)
  ));
  const allGrowthValues = chartModels.flatMap(({ observations }) => (
    observations.map((observation) => observation.momGrowthPct).filter((value) => typeof value === 'number' && Number.isFinite(value))
  ));
  const maxUsd = Math.max(0, ...allUsdValues);
  const yMax = Math.ceil((maxUsd * 1.1) / 1e9) * 1e9 || 10;
  const maxGrowth = Math.max(0, ...allGrowthValues);
  const growthMax = Math.max(10, Math.ceil(maxGrowth / 10) * 10);
  const latestTotal = chartModels.reduce((sum, model) => {
    const valueUsd = amountValueUsd(model.latest?.value, model.metric?.currency, model.metric?.unit);
    return valueUsd == null ? sum : sum + valueUsd;
  }, 0);

  trendChartTitle.textContent = [t('metricRevenue'), t('comparisonScopeSummary', { count: scopeCompanies().length })].join(' · ');
  trendChartSubtitle.textContent = latestTotal ? `${t('latest')} ${formatUsdShort(latestTotal)}` : t('noRevenueTrendData');
  destroyRevenueTrendChart();

  if (!chartModels.length) {
    trendChart.innerHTML = `<div class="empty-state">${escapeHtml(t('noRevenueTrendData'))}</div>`;
    return;
  }

  trendChart.innerHTML = `
    <div class="comparison-grid revenue-comparison-grid">
      ${chartModels.map((model, index) => `
        <section class="comparison-card revenue-comparison-card">
          <div class="comparison-card-header">
            <strong>${escapeHtml(displayCompanyName(model.record.company))}</strong>
            <span>${escapeHtml(model.metric?.displayName || t('metricRevenue'))}</span>
          </div>
          <div class="comparison-card-metrics">
            ${escapeHtml(model.latest ? `${formatMetricDate(model.latest.date)} · ${formatRevenueValue(model.metric, model.latest.value)}` : t('noRevenueTrendData'))}
          </div>
          <div class="trend-canvas-wrap comparison-trend-canvas-wrap">
            <canvas id="revenueTrendCanvas-${index}" role="img" aria-label="${escapeHtml(displayCompanyName(model.record.company))}"></canvas>
          </div>
        </section>
      `).join('')}
    </div>
  `;

  const ink = cssVar('--ink', '#15436b');
  chartModels.forEach((model, index) => {
    const canvas = document.getElementById(`revenueTrendCanvas-${index}`);
    if (!canvas || !window.Chart) return;
    const valuesUsd = model.observations.map((observation) => amountValueUsd(observation.value, model.metric?.currency, model.metric?.unit) || 0);
    const chart = new window.Chart(canvas, createRevenueTrendChartConfig({
      metric: model.metric,
      observations: model.observations,
      values: valuesUsd,
      yMax,
      growthMax,
      compact: true,
      comparison: true,
      yTickFormatter: (value) => formatUsdShort(Number(value)),
      valueLabelFormatter: (value) => formatUsdShort(value),
    }));
    chart.$trendComparison = true;
    chart.$trendDates = model.observations.map((observation) => observation.date);
    chart.$trendHoverColor = ink;
    revenueTrendCharts.push(chart);
  });
}
function renderRevenueTrend() {
  if (!trendChart) return;
  if (isMultiCompanyScope()) {
    renderRevenueTrendComparison();
    return;
  }
  const record = revenueRecordsForCompany()[0];
  const metric = localizedRevenueRecord(record?.metric) || record?.metric;
  const observations = [...(metric?.observations || [])]
    .filter((observation) => Number.isFinite(Number(observation.value)) && Number.isFinite(Date.parse(`${observation.date}T00:00:00Z`)))
    .sort((a, b) => Date.parse(`${a.date}T00:00:00Z`) - Date.parse(`${b.date}T00:00:00Z`));
  const latest = observations[observations.length - 1];
  trendChartTitle.textContent = [displayCompanyName(state.company), metric?.displayName].filter(Boolean).join(' · ') || t('metricRevenue');
  trendChartSubtitle.textContent = latest
    ? t('trendLatest', { value: formatRevenueValue(metric, latest.value), date: formatMetricDate(latest.date) })
    : t('noRevenueTrendData');

  if (!observations.length) {
    destroyRevenueTrendChart();
    trendChart.innerHTML = `<div class="empty-state">${escapeHtml(t('noRevenueTrendData'))}</div>`;
    return;
  }

  const maxValue = Math.max(...observations.map((observation) => observation.value));
  const yMax = Math.ceil((maxValue * 1.1) / 5) * 5 || 10;
  const growthValues = observations.map((observation) => observation.momGrowthPct ?? null);
  const growthObservations = observations.filter((observation) => typeof observation.momGrowthPct === 'number' && Number.isFinite(observation.momGrowthPct));
  const peakGrowth = growthObservations.reduce((peak, observation) => (
    !peak || observation.momGrowthPct > peak.momGrowthPct ? observation : peak
  ), null);
  const latestGrowthText = latest?.momGrowthPct == null ? t('missing') : formatPercent(latest.momGrowthPct);
  const peakGrowthText = peakGrowth
    ? `${formatPercent(peakGrowth.momGrowthPct)} · ${formatTrendDate(peakGrowth.date)}`
    : t('missing');
  destroyRevenueTrendChart();
  trendChart.innerHTML = `
    <div class="trend-summary">
      <div class="trend-summary-item">
        <span>${escapeHtml(t('trendLatestArr'))}</span>
        <strong>${escapeHtml(formatRevenueValue(metric, latest?.value))}</strong>
      </div>
      <div class="trend-summary-item">
        <span>${escapeHtml(t('trendLatestMom'))}</span>
        <strong>${escapeHtml(latestGrowthText)}</strong>
      </div>
      <div class="trend-summary-item">
        <span>${escapeHtml(t('trendPeakMom'))}</span>
        <strong>${escapeHtml(peakGrowthText)}</strong>
      </div>
    </div>
    <div class="trend-canvas-wrap">
      <canvas id="revenueTrendCanvas" role="img" aria-label="${escapeHtml(trendChartTitle.textContent)}"></canvas>
    </div>
  `;
  const canvas = document.getElementById('revenueTrendCanvas');
  if (!canvas || !window.Chart) {
    trendChart.innerHTML = `<div class="empty-state">${escapeHtml(t('noRevenueTrendData'))}</div>`;
    return;
  }

  const values = observations.map((observation) => observation.value);
  const maxGrowth = Math.max(0, ...growthValues.filter((value) => typeof value === 'number' && Number.isFinite(value)));
  const growthMax = Math.max(10, Math.ceil(maxGrowth / 10) * 10);

  revenueTrendChart = new window.Chart(canvas, createRevenueTrendChartConfig({
    metric,
    observations,
    values,
    yMax,
    growthMax,
  }));
}
function updateVirtualTables(force = false) {
  if (state.viewMode !== 'table') return;
  if (isCompanyInfoMetric()) renderVirtualTableBody(companiesTable, force);
  else if (isRevenueMetric()) renderVirtualTableBody(revenueTable, force);
  else renderVirtualTableBody(statementsTable, force);
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
  if (!record?.dataset?.key) return null;
  return financialRecordByKey.get(record.dataset.key);
}
function marketCapValueUsd(company) {
  const marketCap = metadataFor(company)?.marketCap;
  if (!marketCap || typeof marketCap !== 'object') return null;
  const explicitUsd = finiteNumber(marketCap.valueUsd ?? marketCap.usd);
  if (explicitUsd != null) return explicitUsd;
  return amountValueUsd(marketCap.value, marketCap.currency || marketCap.currencyCode || '$', marketCap.unit);
}
function financialValueUsd(record, value) {
  if (!record) return null;
  return amountValueUsd(value, record.currency, record.unit);
}
function scopeFinancialRows() {
  return scopeRecordsForMetric('incomeStatement')
    .map((record) => ({ record, financial: financialFor(record) }))
    .filter((row) => row.financial);
}
function financialMetricRawValue(financial, metric) {
  if (!financial) return null;
  if (metric === 'revenue') return finiteNumber(financial.revenue?.total);
  if (metric === 'grossProfit') return finiteNumber(financial.profit?.gross?.value);
  if (metric === 'operatingProfit') return finiteNumber(financial.profit?.operating?.value);
  if (metric === 'netProfit') return finiteNumber(financial.profit?.net?.value);
  if (metric === 'costOfRevenue') return finiteNumber(financial.costs?.costOfRevenue?.value);
  if (metric === 'operatingExpenses') return finiteNumber(financial.costs?.operatingExpenses?.total);
  if (metric === 'tax') return finiteNumber(financial.costs?.tax?.value);
  return null;
}
function formatScopeFinancialTotal(metric) {
  const rows = scopeFinancialRows()
    .map(({ financial }) => ({ financial, value: financialMetricRawValue(financial, metric) }))
    .filter((row) => row.value != null);
  if (!rows.length) return '';
  const first = rows[0].financial;
  const sameUnit = rows.every(({ financial }) => (
    clean(financial.currency) === clean(first.currency)
    && clean(financial.unit) === clean(first.unit)
    && Number(financial.decimals ?? 1) === Number(first.decimals ?? 1)
  ));
  const total = rows.reduce((sum, row) => sum + row.value, 0);
  if (sameUnit) return formatAmount(first, total, ['costOfRevenue', 'operatingExpenses', 'tax'].includes(metric));
  const totalUsd = rows.reduce((sum, row) => {
    const valueUsd = financialValueUsd(row.financial, row.value);
    return valueUsd == null ? sum : sum + valueUsd;
  }, 0);
  return formatUsdShort(totalUsd);
}
function latestFinancialForGroup(group) {
  return group?.latestStatementRecord ? financialFor(group.latestStatementRecord) : group?.latest ? financialFor(group.latest) : null;
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
  if (group?.latest) return displayCompany(group.latest, language) || group.company || '';
  return displayCompanyName(group?.company, language);
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
  if (sortKey === 'recent') return group?.updatedSortValue;
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
function formatUpdatedDate(value, language = state.language) {
  const time = timestampMs(value);
  if (time == null) return t('missing', {}, language);
  const locale = languageCode(language) === 'zh' ? 'zh-CN' : 'en-US';
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(time));
}
function companySortMetaText(group) {
  if (state.companySort === 'recent') {
    return t('companySortMetaUpdated', { value: formatUpdatedDate(group.updatedSortValue) });
  }
  if (state.companySort === 'marketCap') {
    return t('companySortMetaMarketCap', { value: formatUsdShort(marketCapValueUsd(group.company)) });
  }
  if (state.companySort === 'netProfit') {
    return t('companySortMetaNetProfit', { value: formatUsdShort(latestNetProfitUsd(group)) });
  }
  if (state.companySort === 'founded') {
    return t('companySortMetaFounded', { value: metadataFor(group.company).founded || t('missing') });
  }
  return group.latest ? `${t('latest')} ${displayPeriod(group.latest)}` : t('metricCompanyInfo');
}
function tableModelForLanguage(language = state.language) {
  const code = languageCode(language);
  if (tableModelCache.has(code)) return tableModelCache.get(code);
  const companyRows = groups.map((group) => {
    const sourceMeta = metadataFor(group.company);
    const meta = localizedCompanyRecord(sourceMeta, code);
    const marketCapUsd = marketCapValueUsd(group.company);
    return {
      ...meta,
      company: clean(meta.displayName || meta.name || group.company),
      companyCanonical: group.company,
      marketCap: formatUsdShort(marketCapUsd, code),
      marketCapValueUsd: marketCapUsd ?? '',
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
  const revenueRows = [...revenueRecords]
    .sort((a, b) => a.company.localeCompare(b.company) || b.sortValue - a.sortValue || a.period.localeCompare(b.period))
    .flatMap((record) => {
      const metric = localizedRevenueRecord(record.metric, code) || record.metric;
      const observations = [...(metric.observations || [])].sort((a, b) => Date.parse(`${b.date}T00:00:00Z`) - Date.parse(`${a.date}T00:00:00Z`));
      return observations.map((observation) => ({
        record,
        metric,
        observation,
        displayCompany: displayCompanyName(record.company, code),
        displayMetric: clean(metric.displayName || record.label),
        displayPeriod: clean(metric.period || record.period),
        displayPeriodNote: clean(metric.periodNote || record.periodNote),
        displayDate: formatMetricDate(observation.date, code),
        revenueValue: formatRevenueValue(metric, observation.value),
        momGrowth: observation.momGrowthPct == null ? '' : formatPercent(observation.momGrowthPct),
        notes: notesText(observation.notes),
        definition: clean(metric.definition),
        sourceImage: sourceImageForRevenueMetric(metric),
        sourceUrls: (metric.sources || []).map((source) => source.url).filter(Boolean),
        tableAttrs: `data-revenue-key="${escapeHtml(metric.key)}" data-revenue-date="${escapeHtml(observation.date)}"`,
      }));
    });
  const model = { companyRows, statementRows, revenueRows };
  tableModelCache.set(code, model);
  return model;
}
function companyRows() {
  const rowByCompany = new Map(tableModelForLanguage().companyRows.map((row) => [row.companyCanonical, row]));
  const scope = selectedCompanySet();
  const sourceGroups = state.multiCompanyMode ? groups.filter((group) => scope.has(group.company)) : groups;
  return sortedCompanyGroups(sourceGroups).map((group) => {
    const row = rowByCompany.get(group.company) || { company: displayCompanyForGroup(group), companyCanonical: group.company };
    return {
      ...row,
      active: state.multiCompanyMode ? scope.has(row.companyCanonical) : row.companyCanonical === state.company,
    };
  });
}
function statementRows() {
  const scope = selectedCompanySet();
  return tableModelForLanguage().statementRows
    .filter((row) => !state.multiCompanyMode || scope.has(row.record.company))
    .map((row) => ({
      ...row,
      active: state.multiCompanyMode
        ? companyActiveIndex(row.record.company) === row.record.index
        : row.record.index === state.activeIndex,
    }));
}
function revenueRows() {
  const scope = selectedCompanySet();
  return tableModelForLanguage().revenueRows
    .filter((row) => !state.multiCompanyMode || scope.has(row.record.company))
    .map((row) => ({
      ...row,
      active: state.multiCompanyMode ? scope.has(row.record.company) : row.record.company === state.company,
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
  const revenue = revenueRows();
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
  const revenueColumns = [
    { label: t('tableMetric'), className: 'nowrap', widthPreset: 'id', maxWidth: 190, grow: 0.3, value: (row) => row.record.metric.key },
    { label: t('tableCompany'), className: 'nowrap', widthPreset: 'text', maxWidth: 120, grow: 0.2, value: (row) => row.displayCompany },
    { label: t('tableDate'), className: 'nowrap', widthPreset: 'compact', minWidth: 90, maxWidth: 112, grow: 0, value: (row) => row.displayDate },
    { label: t('tableAnnualizedRevenue'), className: 'num', widthPreset: 'money', minWidth: 118, maxWidth: 136, grow: 0, value: (row) => row.revenueValue },
    { label: t('tableMomGrowth'), className: 'num', widthPreset: 'compact', minWidth: 86, maxWidth: 98, grow: 0, value: (row) => row.momGrowth },
    { label: t('tableNotes'), className: 'wide', widthPreset: 'description', maxWidth: 320, grow: 1, value: (row) => row.notes },
    { label: t('tablePeriod'), className: 'nowrap', widthPreset: 'text', maxWidth: 130, grow: 0.2, value: (row) => row.displayPeriod },
    { label: t('tableDefinition'), className: 'wide', widthPreset: 'description', maxWidth: 360, grow: 1.4, value: (row) => row.definition },
    { label: t('tableSources'), className: 'nowrap', widthPreset: 'link', minWidth: 78, maxWidth: 86, grow: 0, html: (row) => linksHtml(row.sourceUrls) },
    { label: t('tableSourceImage'), className: 'nowrap', widthPreset: 'id', maxWidth: 180, grow: 0.1, value: (row) => row.sourceImage },
  ];
  companiesTableCount.textContent = countText('companiesCountOne', 'companiesCountMany', companies.length);
  statementsTableCount.textContent = countText('statementsCountOne', 'statementsCountMany', statements.length);
  revenueTableCount.textContent = countText('revenueRowsCountOne', 'revenueRowsCountMany', revenue.length);
  renderDataTable(companiesTable, companyColumns, companies, t('noCompaniesRegistered'), content.clientWidth);
  renderDataTable(statementsTable, statementColumns, statements, t('noIncomeStatementsRegistered'), content.clientWidth);
  renderDataTable(revenueTable, revenueColumns, revenue, t('noRevenueMetricsRegistered'), content.clientWidth);
}
function escapeSelector(value) {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, '\\$&');
}
function virtualTableTarget(kind) {
  const table = kind === 'company' ? companiesTable : kind === 'revenue' ? revenueTable : statementsTable;
  const info = virtualTables.get(table);
  if (!info) return null;
  if (kind === 'company') {
    const key = companyKey(state.company);
    const index = info.rows.findIndex((row) => companyKey(row.companyCanonical || row.company) === key);
    return index >= 0 ? { table, info, index } : null;
  }
  if (kind === 'revenue') {
    const index = info.rows.findIndex((row) => row.record?.company === state.company);
    return index >= 0 ? { table, info, index } : null;
  }
  const key = currentRecord()?.dataset?.key;
  if (!key) return null;
  const index = info.rows.findIndex((row) => row.record?.dataset?.key === key);
  return index >= 0 ? { table, info, index } : null;
}
function fastScrollTo(top, duration = 90, scrollRoot = tableView) {
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
      if (!targetInfo) {
        updateVirtualTables(true);
        return;
      }
      renderVirtualTableBody(targetInfo.table, true, targetInfo.index);
      const scrollRoot = tableScrollRoot(targetInfo.table);
      const rowTop = tableBodyTopInScrollRoot(targetInfo.table) + targetInfo.index * tableRowHeight(targetInfo.table);
      fastScrollTo(rowTop - tableHeaderHeight(targetInfo.table) - 8, 90, scrollRoot);
      setTimeout(requestVirtualTableUpdate, 120);
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
  if (isMultiCompanyScope()) {
    const count = scopeCompanies().length;
    if (isCompanyInfoMetric()) {
      actionTitle.textContent = [t('metricCompanyInfo'), t('comparisonScopeSummary', { count })].join(' · ');
      return;
    }
    if (isRevenueMetric()) {
      const recordsForScope = scopeCompanies().flatMap((company) => revenueRecordsForCompany(company)).filter(Boolean);
      const latestTotal = recordsForScope.reduce((sum, revenueRecord) => {
        const value = revenueRecord.latestObservation?.value;
        const valueUsd = amountValueUsd(value, revenueRecord.metric?.currency, revenueRecord.metric?.unit);
        return valueUsd == null ? sum : sum + valueUsd;
      }, 0);
      actionTitle.textContent = [
        t('metricRevenue'),
        t('comparisonScopeSummary', { count }),
        latestTotal ? formatUsdShort(latestTotal) : '',
      ].filter(Boolean).join(' · ');
      return;
    }
    actionTitle.textContent = [
      t('metricIncomeStatement'),
      t('comparisonScopeSummary', { count }),
      `${t('tableRevenue')} ${formatScopeFinancialTotal('revenue')}`,
      `${t('tableNetProfit')} ${formatScopeFinancialTotal('netProfit')}`,
    ].filter(Boolean).join(' · ');
    return;
  }
  if (isCompanyInfoMetric()) {
    actionTitle.textContent = [t('metricCompanyInfo'), displayCompanyName(state.company)].filter(Boolean).join(' · ');
    return;
  }
  if (isRevenueMetric()) {
    const group = groupFor(state.company);
    const latest = group?.latestRevenueRecord;
    const value = latest?.latestObservation ? formatRevenueValue(latest.metric, latest.latestObservation.value) : '';
    actionTitle.textContent = [t('metricRevenue'), displayCompanyName(state.company), value].filter(Boolean).join(' · ');
    return;
  }
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
function groupMetricCount(group) {
  return (group?.records?.length || 0) + (group?.revenueRecords?.length || 0);
}
function companyMetricDataPointCount(company) {
  if (!company) return 0;
  const hasCompanyInfo = hasCompanyMetricData(company, 'companyInfo') ? 1 : 0;
  const statementCount = metricGroupForCompany(company, 'incomeStatement')?.records?.length || 0;
  const revenueCount = metricGroupForCompany(company, 'revenue')?.revenueRecords?.length || 0;
  return hasCompanyInfo + statementCount + revenueCount;
}
function scopeMetricDataPointCount(companies = scopeCompanies()) {
  return uniqueCompanies(companies).reduce((sum, company) => sum + companyMetricDataPointCount(company), 0);
}
function setScopeCount(element, value, options = {}) {
  if (!element) return;
  const text = value == null ? '' : String(value);
  element.textContent = text;
  if (options.title) element.title = options.title;
  else element.removeAttribute('title');
  if (options.ariaLabel) element.setAttribute('aria-label', options.ariaLabel);
}
function syncEntityScopeCounts(companyCount = groups.length) {
  const selectedCompanyCount = scopeCompanies().length;
  const totalCompanyCount = Math.max(0, companyCount);
  setScopeCount(companyScopeCount, `${selectedCompanyCount}/${totalCompanyCount}`, {
    title: `${selectedCompanyCount} selected of ${totalCompanyCount} companies`,
    ariaLabel: `${selectedCompanyCount} selected of ${totalCompanyCount} companies`,
  });
  setScopeCount(metricScopeCount, scopeMetricDataPointCount());
  setScopeCount(viewScopeCount, allowedViewModesForMetric(state.metricMode).length);
}
function selectCompanyGroup(group, { closeSearch = false, focusCompany = false, scrollKind = null } = {}) {
  if (!group) return;
  const targetMode = bestMetricModeForCompany(group.company, state.metricMode);
  const targetGroup = groupFor(group.company, targetMode) || group;
  const groupRecords = sortedRecords(targetGroup);
  state.company = group.company;
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else if (!state.selectedCompanies.includes(group.company)) setSelectedCompanies([...state.selectedCompanies, group.company]);
  if (state.metricMode !== targetMode) {
    state.metricMode = targetMode;
    state.viewMode = defaultViewModeForMetric(targetMode);
    writeStoredValue(METRIC_MODE_KEY, state.metricMode);
    writeStoredValue(VIEW_MODE_KEY, state.viewMode);
  }
  const next = targetMode === 'incomeStatement'
    ? groupRecords.find((record) => matches(searchTextForRecord(record), periodSearch.value)) || groupRecords[0]
    : targetMode === 'companyInfo' ? groupRecords[0] : null;
  if (next) {
    state.activeIndex = next.index;
    setCompanyActiveRecord(next);
    syncDatasetHash(next);
  } else {
    clearDatasetHash();
  }
  const targetScrollKind = targetMode === 'companyInfo' ? 'company' : targetMode === 'revenue' ? 'revenue' : 'statement';
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (closeSearch) companySearchController.setOpen(false);
  if (focusCompany) requestAnimationFrame(focusActiveCompanyItem);
  scrollActiveTableRow(scrollKind || targetScrollKind);
}
function toggleCompanyInScope(group, { focusCompany = false, closeSearch = false } = {}) {
  if (!group) return;
  const company = group.company;
  let nextCompanies = scopeCompanies();
  if (!state.multiCompanyMode) {
    state.multiCompanyMode = true;
    nextCompanies = uniqueCompanies([state.company, company]);
    state.company = company;
  } else if (nextCompanies.includes(company)) {
    if (nextCompanies.length > 1) {
      nextCompanies = nextCompanies.filter((item) => item !== company);
      if (state.company === company) state.company = nextCompanies[0] || state.company;
    }
  } else {
    nextCompanies.push(company);
    state.company = company;
  }

  setSelectedCompanies(nextCompanies);
  state.metricMode = normalizeMetricModeForScope(state.metricMode);
  state.viewMode = normalizeViewModeForMetric(state.metricMode, state.viewMode);
  syncMetricCompanySelection();
  writeStoredValue(METRIC_MODE_KEY, state.metricMode);
  writeStoredValue(VIEW_MODE_KEY, state.viewMode);
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (closeSearch) companySearchController.setOpen(false);
  if (focusCompany) requestAnimationFrame(focusActiveCompanyItem);
  if (state.viewMode === 'table') scrollActiveTableRow(activeTableKind());
}
function exitMultiCompanyMode({ render = true, focusCompany = false } = {}) {
  if (!state.multiCompanyMode) return;
  state.multiCompanyMode = false;
  syncSingleCompanyScope();
  state.metricMode = normalizeMetricModeForScope(state.metricMode);
  state.viewMode = normalizeViewModeForMetric(state.metricMode, state.viewMode);
  syncMetricCompanySelection();
  if (!render) return;
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (focusCompany) requestAnimationFrame(focusActiveCompanyItem);
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
  syncEntityScopeCounts();
  companyList.innerHTML = '';
  const scope = selectedCompanySet();
  companyList.setAttribute('aria-multiselectable', state.multiCompanyMode ? 'true' : 'false');
  if (companyMultiExitToggle) companyMultiExitToggle.hidden = !state.multiCompanyMode;
  app.classList.toggle('company-multi-selecting', state.multiCompanyMode);
  if (!visibleGroups.length) {
    companyList.removeAttribute('aria-activedescendant');
    companyList.innerHTML = `<div class="empty-state">${escapeHtml(t('noMatchingCompanies'))}</div>`;
    return;
  }
  const selectedVisible = visibleGroups.some((group) => group.company === state.company);
  visibleGroups.forEach((group, index) => {
    const isActive = group.company === state.company;
    const isSelected = scope.has(group.company);
    const key = companyKey(group.company);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-item company-item' + (isSelected ? ' selected' : '') + (isActive ? ' active' : '');
    button.id = `company-option-${key}`;
    button.setAttribute('role', 'option');
    button.setAttribute('aria-selected', isSelected ? 'true' : 'false');
    if (isActive) button.setAttribute('aria-current', 'true');
    button.tabIndex = isActive || (!selectedVisible && index === 0) ? 0 : -1;
    button.dataset.company = group.company;
    button.dataset.companyKey = key;
    button.title = displayCompanyForGroup(group);
    button.innerHTML = `
      <div class="item-top">
        <span class="scope-check" aria-hidden="true"></span>
        <span class="item-name">${escapeHtml(displayCompanyForGroup(group))}</span>
        <span class="count-pill">${groupMetricCount(group)}</span>
      </div>
      <div class="item-meta company-item-meta">${escapeHtml(companySortMetaText(group))}</div>
    `;
    button.addEventListener('click', (event) => {
      if (event.shiftKey || state.multiCompanyMode) {
        toggleCompanyInScope(group, { closeSearch: false, focusCompany: true });
        return;
      }
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
    updatePeriodScrollIndicator();
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
  updatePeriodScrollIndicator();
}
function renderAll() {
  syncMetricModeControls();
  syncPeriodExpansionControls();
  syncViewModeControls();
  renderActiveSummary();
  renderCompanies();
  if (isIncomeStatementMetric()) renderPeriods();
  if (state.viewMode === 'table') renderTables();
  syncToolbarHeight();
  requestAnimationFrame(updatePeriodScrollIndicator);
}
function renderMetricModeButtons(availableModes) {
  metricMode.innerHTML = availableModes.map((mode) => {
    const active = mode === state.metricMode;
    const label = t(METRIC_MODE_LABEL_KEYS[mode] || mode);
    return `
      <button
        data-metric="${escapeHtml(mode)}"
        type="button"
        class="${active ? 'active' : ''}"
        aria-pressed="${active ? 'true' : 'false'}"
      >${escapeHtml(label)}</button>
    `;
  }).join('');
}
function syncMetricModeControls() {
  if (!METRIC_MODES.includes(state.metricMode)) state.metricMode = 'incomeStatement';
  state.metricMode = normalizeMetricModeForScope(state.metricMode);
  syncMetricCompanySelection();
  state.metricMode = normalizeMetricModeForScope(state.metricMode);
  state.viewMode = normalizeViewModeForMetric(state.metricMode, state.viewMode);
  app.classList.toggle('metric-company-info', isCompanyInfoMetric());
  app.classList.toggle('metric-income-statement', isIncomeStatementMetric());
  app.classList.toggle('metric-revenue', isRevenueMetric());
  periodSection.hidden = !isIncomeStatementMetric();
  renderMetricModeButtons(metricModesForScope());
}
function syncViewModeControls() {
  state.viewMode = normalizeViewModeForMetric(state.metricMode, state.viewMode);
  const isSankey = isIncomeStatementMetric() && state.viewMode === 'sankey';
  const isTrend = isRevenueMetric() && state.viewMode === 'trend';
  const isTable = state.viewMode === 'table';
  sankeyView.hidden = !isSankey;
  trendView.hidden = !isTrend;
  tableView.hidden = !isTable;
  companiesTableSection.hidden = !(isTable && isCompanyInfoMetric());
  statementsTableSection.hidden = !(isTable && isIncomeStatementMetric());
  revenueTableSection.hidden = !(isTable && isRevenueMetric());
  sankeyActions.hidden = !isSankey;
  tableActions.hidden = !isTable;
  companiesCsvBtn.hidden = !isTable || !isCompanyInfoMetric();
  statementsCsvBtn.hidden = !isTable || !isIncomeStatementMetric();
  revenueCsvBtn.hidden = !isTable || !isRevenueMetric();
  const allowedViews = allowedViewModesForMetric(state.metricMode);
  [...viewMode.querySelectorAll('button')].forEach((button) => {
    const allowed = allowedViews.includes(button.dataset.view);
    const active = allowed && button.dataset.view === state.viewMode;
    button.hidden = !allowed;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  syncToolbarHeight();
}
function setViewMode(mode, persist = true) {
  mode = normalizeViewModeForMetric(state.metricMode, mode);
  if (state.viewMode === mode) {
    if (mode === 'table') scrollActiveTableRow(activeTableKind());
    return;
  }
  state.viewMode = mode;
  if (persist) writeStoredValue(VIEW_MODE_KEY, mode);
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (mode === 'table') scrollActiveTableRow(activeTableKind());
}
function setMetricMode(mode, persist = true) {
  if (!METRIC_MODES.includes(mode)) return;
  if (!metricModesForScope().includes(mode)) return;
  if (state.metricMode === mode) {
    if (state.viewMode === 'table') scrollActiveTableRow(activeTableKind());
    return;
  }
  state.metricMode = mode;
  state.viewMode = defaultViewModeForMetric(mode);
  syncMetricCompanySelection();
  if (persist) {
    writeStoredValue(METRIC_MODE_KEY, mode);
    writeStoredValue(VIEW_MODE_KEY, state.viewMode);
  }
  renderAll();
  draw({ renderTable: false, syncView: false });
  if (state.viewMode === 'table') scrollActiveTableRow(activeTableKind());
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
function syncPeriodExpansionControls() {
  app.classList.toggle('period-expanded', Boolean(state.periodExpanded && isIncomeStatementMetric()));
  if (!periodExpandToggle) return;
  const label = state.periodExpanded ? t('periodCollapseTitle') : t('periodExpandTitle');
  periodExpandToggle.innerHTML = periodExpandIcon(state.periodExpanded);
  periodExpandToggle.title = label;
  periodExpandToggle.setAttribute('aria-label', label);
  periodExpandToggle.setAttribute('aria-expanded', state.periodExpanded ? 'true' : 'false');
}
function syncMetricCompanySelection() {
  const modeGroups = currentCompanyGroups();
  if (!modeGroups.length) return;
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  const targetCompany = state.multiCompanyMode ? primaryCompanyForMetric(state.metricMode) : state.company;
  const group = metricGroupForCompany(targetCompany, state.metricMode) || modeGroups[0];
  state.company = group.company;
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else setSelectedCompanies(state.selectedCompanies);
  if (isIncomeStatementMetric()) {
    const current = recordByIndex(state.activeIndex);
    if (current && current.company === group.company) return;
    const next = defaultRecordForCompanyMetric(group.company, 'incomeStatement');
    if (next) {
      state.activeIndex = next.index;
      setCompanyActiveRecord(next);
    }
  } else if (isCompanyInfoMetric() && group.records?.[0]) {
    const current = recordByIndex(state.activeIndex);
    if (current && current.company === group.company) return;
    state.activeIndex = group.records[0].index;
    setCompanyActiveRecord(group.records[0]);
  }
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
companyMultiExitToggle?.addEventListener('click', () => {
  exitMultiCompanyMode({ focusCompany: true });
});
periodSortToggle.addEventListener('click', () => {
  state.sort = state.sort === 'desc' ? 'asc' : 'desc';
  syncPeriodSortToggle();
  renderPeriods();
  requestAnimationFrame(updatePeriodScrollIndicator);
});
periodExpandToggle?.addEventListener('click', () => {
  state.periodExpanded = !state.periodExpanded;
  writeStoredValue(PERIOD_EXPANDED_KEY, state.periodExpanded);
  syncPeriodExpansionControls();
  syncToolbarHeight();
  updatePeriodScrollIndicator();
  draw();
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
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || e.isComposing || !state.multiCompanyMode) return;
  if (e.target === companySearch || e.target === periodSearch) return;
  if (companySortMenu?.contains(e.target)) return;
  e.preventDefault();
  exitMultiCompanyMode({ focusCompany: true });
});
metricMode.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  setMetricMode(button.dataset.metric);
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
sidebarRestoreToggle?.addEventListener('click', () => {
  setSidebarCollapsed(false);
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
function chartHeight(d) {
  return d.render?.height || window.SankeyEngine.DEFAULTS?.height || 1462;
}
function clearSingleChart() {
  document.querySelector('#chart')?.replaceChildren();
}
function clearSankeyComparison() {
  if (sankeyComparison) sankeyComparison.replaceChildren();
}
function nodeLabelText(node) {
  return labelText(node?.label).toLowerCase();
}
function revenueNodeForDataset(dataset) {
  return (dataset?.nodes || []).find((node) => node.id === 'revenue')
    || (dataset?.nodes || []).find((node) => node.type === 'hub' && /^(revenue|sales|net sales)$/i.test(nodeLabelText(node)))
    || (dataset?.nodes || []).find((node) => node.type === 'hub');
}
function fixedNodeHeight(dataset, node) {
  const spec = node?.id ? dataset?.layout?.nodes?.[node.id] : null;
  return finiteNumber(spec?.height);
}
function pxPerDatasetValue(dataset) {
  const authoredScale = finiteNumber(dataset?.layout?.scale);
  if (authoredScale != null) return authoredScale;
  const node = revenueNodeForDataset(dataset);
  const height = fixedNodeHeight(dataset, node);
  const value = finiteNumber(node?.value);
  return height != null && value ? height / value : null;
}
function pxPerUsdForDataset(dataset) {
  const pxPerValue = pxPerDatasetValue(dataset);
  const usdPerValue = amountValueUsd(1, dataset?.meta?.currency, dataset?.meta?.unit);
  if (pxPerValue == null || usdPerValue == null || usdPerValue === 0) return null;
  return pxPerValue / usdPerValue;
}
function comparisonScaleFactors(records) {
  const entries = records
    .map((record) => {
      const dataset = localizedDataset(record.dataset);
      return { key: record.dataset.key, pxPerUsd: pxPerUsdForDataset(dataset) };
    })
    .filter((entry) => entry.pxPerUsd != null && entry.pxPerUsd > 0);
  if (!entries.length) return new Map();
  const common = Math.min(...entries.map((entry) => entry.pxPerUsd));
  return new Map(entries.map((entry) => [entry.key, common / entry.pxPerUsd]));
}
function comparisonColumnCount(count) {
  const viewport = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (viewport <= 900) return 1;
  if (viewport <= 1100 && (count === 3 || count >= 5)) return 2;
  if (count <= 1) return 1;
  if (count === 2) return 2;
  if (count === 3) return 3;
  if (count === 4) return 2;
  return 3;
}
function comparisonFitFactor(records, scaleFactors) {
  const count = Math.max(records.length, 1);
  const columns = comparisonColumnCount(count);
  const availableWidth = Math.max(1, (sankeyView?.clientWidth || content?.clientWidth || window.innerWidth || 1) - 20);
  const gap = 8;
  const columnWidth = Math.max(1, (availableWidth - gap * (columns - 1)) / columns);
  const maxNaturalWidth = records.reduce((max, record) => {
    const dataset = localizedDataset(record.dataset);
    const scale = scaleFactors.get(record.dataset.key) || 1;
    return Math.max(max, chartWidth(dataset) * scale);
  }, 1);
  return Math.min(1, columnWidth / maxNaturalWidth);
}
function comparisonFinancialLine(record) {
  const financial = financialFor(record);
  if (!financial) return '';
  return [
    `${t('tableRevenue')} ${formatAmount(financial, financial.revenue?.total)}`,
    `${t('tableNetProfit')} ${formatAmount(financial, financial.profit?.net?.value)}`,
  ].filter(Boolean).join(' · ');
}
function renderSankeyComparison() {
  if (!sankeyComparison) return;
  const companies = scopeCompanies();
  const recordsForCompanies = companies.map((company) => ({
    company,
    record: defaultRecordForCompanyMetric(company, 'incomeStatement'),
  }));
  const recordsWithData = recordsForCompanies.map((item) => item.record).filter(Boolean);
  const scaleFactors = comparisonScaleFactors(recordsWithData);
  const fitFactor = comparisonFitFactor(recordsWithData, scaleFactors);
  sankeyComparison.innerHTML = '';

  const summary = document.createElement('div');
  summary.className = 'comparison-summary';
  summary.innerHTML = `
    <span>${escapeHtml(t('comparisonScopeSummary', { count: companies.length }))}</span>
    <strong>${escapeHtml(`${t('tableRevenue')} ${formatScopeFinancialTotal('revenue')}`)}</strong>
    <strong>${escapeHtml(`${t('tableNetProfit')} ${formatScopeFinancialTotal('netProfit')}`)}</strong>
  `;
  sankeyComparison.appendChild(summary);

  const grid = document.createElement('div');
  grid.className = `comparison-grid comparison-grid-${Math.min(Math.max(recordsForCompanies.length, 1), 6)}`;
  sankeyComparison.appendChild(grid);

  recordsForCompanies.forEach(({ company, record }) => {
    const card = document.createElement('section');
    card.className = 'comparison-card';
    if (!record) {
      card.classList.add('empty');
      card.innerHTML = `
        <div class="comparison-card-header">
          <strong>${escapeHtml(displayCompanyName(company))}</strong>
          <span>${escapeHtml(t('comparisonNoData'))}</span>
        </div>
      `;
      grid.appendChild(card);
      return;
    }

    const dataset = localizedDataset(record.dataset);
    const width = chartWidth(dataset);
    const scale = (scaleFactors.get(record.dataset.key) || 1) * fitFactor;
    card.innerHTML = `
      <div class="comparison-card-header">
        <strong>${escapeHtml(displayCompany(record))}</strong>
        <span>${escapeHtml([displayPeriod(record), displayPeriodNote(record)].filter(Boolean).join(' · '))}</span>
      </div>
      <div class="comparison-card-metrics">${escapeHtml(comparisonFinancialLine(record))}</div>
      <div class="comparison-chart-frame">
        <div class="comparison-chart-host"></div>
      </div>
    `;
    const frame = card.querySelector('.comparison-chart-frame');
    const host = card.querySelector('.comparison-chart-host');
    frame.style.maxWidth = '100%';
    host.style.width = `${Math.max(1, width * scale)}px`;
    host.dataset.datasetKey = record.dataset.key;
    host.dataset.scaleFactor = String(scale);
    grid.appendChild(card);
    window.SankeyEngine.render(host, dataset);
  });
}
function draw({ renderTable = true, syncView = true } = {}) {
  if (syncView) syncViewModeControls();
  if (state.viewMode === 'table') {
    clearSingleChart();
    clearSankeyComparison();
    if (renderTable) renderTables();
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    return;
  }
  if (state.viewMode === 'trend') {
    clearSingleChart();
    clearSankeyComparison();
    renderRevenueTrend();
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    return;
  }
  const d = localizedDataset(currentDataset());
  const maxWidth = chartWidth(d);
  const compare = isMultiCompanyScope();
  if (singleChartCard) singleChartCard.hidden = compare;
  if (sankeyComparison) sankeyComparison.hidden = !compare;
  if (compare) {
    clearSingleChart();
    renderSankeyComparison();
    svgBtn.disabled = true;
    pngBtn.disabled = true;
    return;
  }
  clearSankeyComparison();
  if (singleChartCard) singleChartCard.style.maxWidth = maxWidth + 'px';
  if (d) window.SankeyEngine.render('#chart', d);
  svgBtn.disabled = !document.querySelector('#chart svg');
  pngBtn.disabled = !document.querySelector('#chart svg');
}

window.addEventListener('hashchange', () => {
  const record = recordFromHash();
  if (!record) return;
  if (record.index === state.activeIndex && record.company === state.company) return;
  state.activeIndex = record.index;
  state.company = record.company;
  setCompanyActiveRecord(record);
  if (!state.multiCompanyMode) syncSingleCompanyScope();
  else if (!state.selectedCompanies.includes(record.company)) setSelectedCompanies([...state.selectedCompanies, record.company]);
  renderAll();
  draw({ renderTable: false, syncView: false });
  scrollActiveTableRow('statement');
});

tableView.addEventListener('scroll', requestVirtualTableUpdate, { passive: true });
periodList.addEventListener('scroll', updatePeriodScrollIndicator, { passive: true });

let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    syncResponsiveLayout();
    draw();
    updatePeriodScrollIndicator();
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
revenueCsvBtn.onclick = () => {
  const columns = [
    { label: 'metric_key', value: (row) => row.record.metric.key },
    { label: 'company', value: (row) => row.displayCompany },
    { label: 'metric', value: (row) => row.displayMetric },
    { label: 'date', value: (row) => row.observation.date },
    { label: 'annualized_revenue', value: (row) => row.observation.value },
    { label: 'currency', value: (row) => row.metric.currency || '' },
    { label: 'unit', value: (row) => row.metric.unit || '' },
    { label: 'mom_growth_pct', value: (row) => row.observation.momGrowthPct ?? '' },
    { label: 'notes', value: (row) => notesText(row.observation.notes) },
    { label: 'period', value: (row) => row.displayPeriod },
    { label: 'period_note', value: (row) => row.displayPeriodNote },
    { label: 'definition', value: (row) => row.definition },
    { label: 'source_urls', value: (row) => (row.sourceUrls || []).join(' ') },
    { label: 'source_image', value: (row) => row.sourceImage },
  ];
  downloadText('revenue-metrics.csv', csvFromRows(columns, revenueRows()));
};
