const sets = window.DATASETS || [];
const companySearch = document.getElementById('companySearch');
const periodSearch = document.getElementById('periodSearch');
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
const SIDEBAR_WIDTH_KEY = 'sankey.sidebar.width';
const SIDEBAR_COLLAPSED_KEY = 'sankey.sidebar.collapsed';
const VIEW_MODE_KEY = 'sankey.view.mode';
const SIDEBAR_MIN = 220;
const SIDEBAR_MAX = 560;
const SIDEBAR_DEFAULT = 282;
const DESKTOP_BREAKPOINT = 900;

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

const records = sets.map((dataset, index) => {
  const period = periodFor(dataset);
  const periodNote = clean(dataset.meta?.periodNote);
  const company = companyFor(dataset);
  const label = clean(dataset.name || dataset.meta?.title || dataset.key || `Dataset ${index + 1}`);
  return { dataset, index, company, period, periodNote, label, sortValue: 0 };
});
records.forEach((record, index) => {
  record.sortValue = periodSortValue(record, index);
  record.searchText = [record.company, record.period, record.periodNote, record.label, record.dataset.key].join(' ');
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
const state = {
  sort: 'desc',
  activeIndex: activeStart?.index || 0,
  company: activeStart?.company || groups[0]?.company || '',
  viewMode: readStoredViewMode(),
  sidebarWidth: readStoredNumber(SIDEBAR_WIDTH_KEY, SIDEBAR_DEFAULT),
  sidebarCollapsed: readStoredBoolean(SIDEBAR_COLLAPSED_KEY, false),
};

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
  sidebarToggle.setAttribute('aria-label', expanded ? 'Collapse dataset panel' : 'Show dataset panel');
  sidebarToggle.title = expanded ? 'Collapse dataset panel' : 'Show dataset panel';
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
function groupFor(company) {
  return groups.find((group) => group.company === company) || groups[0];
}
function sortedRecords(group) {
  const direction = state.sort === 'asc' ? 1 : -1;
  return [...(group?.records || [])].sort((a, b) => direction * (a.sortValue - b.sortValue) || a.period.localeCompare(b.period));
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
  };
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
  if (!links.length) return '<span class="cell-muted">Missing</span>';
  return links.map((url, index) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener">Source ${index + 1}</a>`).join(' ');
}
function websiteHtml(url) {
  const safe = safeUrl(url);
  return safe ? `<a href="${escapeHtml(safe)}" target="_blank" rel="noopener">${escapeHtml(safe.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</a>` : '';
}
function financialFor(record) {
  return financialRecordByKey.get(record.dataset.key);
}
function companyRows() {
  return groups.map((group) => {
    const meta = metadataFor(group.company);
    return {
      ...meta,
      company: group.company,
      latestPeriod: group.latest?.period || '',
      datasetCount: group.records.length,
      active: group.company === state.company,
      tableAttrs: `data-company-key="${escapeHtml(companyKey(group.company))}"`,
    };
  });
}
function statementRows() {
  return [...records]
    .sort((a, b) => a.company.localeCompare(b.company) || b.sortValue - a.sortValue || a.period.localeCompare(b.period))
    .map((record) => ({
      record,
      financial: financialFor(record),
      active: record.index === state.activeIndex,
      tableAttrs: `data-dataset-key="${escapeHtml(record.dataset.key)}"`,
    }));
}
function renderDataTable(table, columns, rows, emptyText) {
  table.className = 'data-table';
  const head = columns.map((column) => `<th class="${column.className || ''}">${escapeHtml(column.label)}</th>`).join('');
  if (!rows.length) {
    table.innerHTML = `<thead><tr>${head}</tr></thead><tbody><tr><td colspan="${columns.length}"><div class="table-empty">${escapeHtml(emptyText)}</div></td></tr></tbody>`;
    return;
  }
  const body = rows.map((row) => {
    const cells = columns.map((column) => {
      const value = column.html ? column.html(row) : escapeHtml(column.value(row));
      return `<td class="${column.className || ''}">${value}</td>`;
    }).join('');
    const attrs = row.tableAttrs || '';
    return `<tr class="${row.active ? 'active-row' : ''}"${attrs ? ` ${attrs}` : ''}>${cells}</tr>`;
  }).join('');
  table.innerHTML = `<thead><tr>${head}</tr></thead><tbody>${body}</tbody>`;
}
function renderTables() {
  const companies = companyRows();
  const statements = statementRows();
  companiesTableCount.textContent = `${companies.length} compan${companies.length === 1 ? 'y' : 'ies'}`;
  statementsTableCount.textContent = `${statements.length} statement${statements.length === 1 ? '' : 's'}`;
  renderDataTable(companiesTable, [
    { label: 'Company', className: 'nowrap', value: (row) => row.company },
    { label: 'Legal name', className: 'nowrap', value: (row) => row.legalName },
    { label: 'Ticker', className: 'nowrap', value: (row) => [row.exchange, row.ticker].filter(Boolean).join(': ') },
    { label: 'Sector', className: 'nowrap', value: (row) => row.sector },
    { label: 'Industry', className: 'nowrap', value: (row) => row.industry },
    { label: 'Founded', className: 'nowrap', value: (row) => row.founded },
    { label: 'Headquarters', className: 'nowrap', value: (row) => row.headquarters },
    { label: 'Fiscal year end', className: 'nowrap', value: (row) => row.fiscalYearEnd },
    { label: 'Datasets', className: 'num', value: (row) => row.datasetCount },
    { label: 'Latest', className: 'nowrap', value: (row) => row.latestPeriod },
    { label: 'Website', className: 'nowrap', html: (row) => websiteHtml(row.website) },
    { label: 'Description', className: 'wide', value: (row) => row.description },
    { label: 'Sources', className: 'nowrap', html: (row) => linksHtml(row.sourceUrls) },
  ], companies, 'No companies registered.');

  renderDataTable(statementsTable, [
    { label: 'Dataset', className: 'nowrap', value: (row) => row.record.dataset.key },
    { label: 'Company', className: 'nowrap', value: (row) => row.record.company },
    { label: 'Period', className: 'nowrap', value: (row) => row.record.period },
    { label: 'Period end', className: 'nowrap', value: (row) => row.record.periodNote },
    { label: 'Revenue', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.revenue?.total) },
    { label: 'Revenue items', className: 'wide', value: (row) => describeItems(row.financial?.revenue?.items, row.financial) },
    { label: 'Cost of revenue', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.costs?.costOfRevenue?.value, true) },
    { label: 'Gross profit', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.profit?.gross?.value) },
    { label: 'Operating expenses', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.costs?.operatingExpenses?.total, true) },
    { label: 'Opex items', className: 'wide', value: (row) => describeItems(row.financial?.costs?.operatingExpenses?.items, row.financial) },
    { label: 'Operating profit', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.profit?.operating?.value) },
    { label: 'Other income', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.otherIncome?.total || 0) },
    { label: 'Tax', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.costs?.tax?.value, true) },
    { label: 'Net profit', className: 'num', value: (row) => formatAmount(row.financial, row.financial?.profit?.net?.value) },
    { label: 'Source image', className: 'nowrap', value: (row) => row.financial?.sourceImage || '' },
  ], statements, 'No income statements registered.');
}
function escapeSelector(value) {
  if (window.CSS?.escape) return window.CSS.escape(value);
  return String(value).replace(/["\\]/g, '\\$&');
}
function tableRowFor(kind) {
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
      const row = tableRowFor(kind);
      if (!row) return;
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
    ? [record.company, [record.period, record.periodNote].filter(Boolean).join(' - ')].filter(Boolean).join(' · ')
    : 'No data point selected';
}
function renderCompanies() {
  const visibleGroups = groups.filter((group) => matches(group.searchText, companySearch.value));
  companyList.innerHTML = '';
  if (!visibleGroups.length) {
    companyList.innerHTML = '<div class="empty-state">No matching companies.</div>';
    return;
  }
  visibleGroups.forEach((group) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-item company-item' + (group.company === state.company ? ' active' : '');
    button.setAttribute('role', 'option');
    button.setAttribute('aria-selected', group.company === state.company ? 'true' : 'false');
    button.dataset.company = group.company;
    button.innerHTML = `
      <div class="item-top">
        <span class="item-name">${escapeHtml(group.company)}</span>
        <span class="item-meta">Latest ${escapeHtml(group.latest.period)}</span>
        <span class="count-pill">${group.records.length}</span>
      </div>
    `;
    button.addEventListener('click', () => {
      state.company = group.company;
      const next = sortedRecords(group).find((record) => matches(record.searchText, periodSearch.value)) || sortedRecords(group)[0];
      if (next) {
        state.activeIndex = next.index;
        syncDatasetHash(next);
      }
      renderAll();
      draw();
      scrollActiveTableRow('company');
    });
    companyList.appendChild(button);
  });
}
function renderPeriods() {
  const group = groupFor(state.company);
  const visibleRecords = sortedRecords(group).filter((record) => matches(record.searchText, periodSearch.value));
  periodList.innerHTML = '';
  if (!visibleRecords.length) {
    periodList.innerHTML = '<div class="empty-state">No matching time points.</div>';
    return;
  }
  visibleRecords.forEach((record) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-item period-item' + (record.index === state.activeIndex ? ' active' : '');
    button.setAttribute('role', 'option');
    button.setAttribute('aria-selected', record.index === state.activeIndex ? 'true' : 'false');
    button.setAttribute('aria-label', [record.period, record.periodNote || record.label].filter(Boolean).join(', '));
    const colors = timelineColors(record, group);
    button.style.setProperty('--timeline-color', colors.dot);
    button.style.setProperty('--timeline-line-color', colors.line);
    button.style.setProperty('--timeline-ring-color', colors.ring);
    button.style.setProperty('--timeline-active-ring-color', colors.activeRing);
    button.dataset.index = record.index;
    button.innerHTML = `
      <span class="timeline-marker" aria-hidden="true"><span class="timeline-dot"></span></span>
      <span class="timeline-content">
        <span class="item-top">
          <span class="item-name">${escapeHtml(record.period)}</span>
          <span class="item-meta">${escapeHtml(record.periodNote || record.label)}</span>
        </span>
      </span>
    `;
    button.addEventListener('click', () => {
      state.activeIndex = record.index;
      state.company = record.company;
      syncDatasetHash(record);
      renderAll();
      draw();
      scrollActiveTableRow('statement');
    });
    periodList.appendChild(button);
  });
}
function renderAll() {
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
  draw();
  if (mode === 'table') scrollActiveTableRow('statement');
}

companySearch.addEventListener('input', renderCompanies);
periodSearch.addEventListener('input', renderPeriods);
viewMode.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  setViewMode(button.dataset.view);
});
document.getElementById('periodSort').addEventListener('click', (e) => {
  const button = e.target.closest('button');
  if (!button) return;
  state.sort = button.dataset.sort;
  [...button.parentElement.children].forEach((child) => child.classList.toggle('active', child === button));
  renderPeriods();
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
function draw() {
  syncViewModeControls();
  if (state.viewMode === 'table') {
    renderTables();
    svgBtn.disabled = true;
    return;
  }
  const d = currentDataset();
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
  draw();
  scrollActiveTableRow('statement');
});

let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    syncResponsiveLayout();
    draw();
  }, 200);
});

syncResponsiveLayout();
renderAll();
draw();
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.remove('boot-no-motion');
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
    { label: 'company', value: (row) => row.record.company },
    { label: 'period', value: (row) => row.record.period },
    { label: 'period_note', value: (row) => row.record.periodNote },
    { label: 'currency', value: (row) => row.financial?.currency || '' },
    { label: 'unit', value: (row) => row.financial?.unit || '' },
    { label: 'revenue_total', value: (row) => row.financial?.revenue?.total ?? '' },
    { label: 'revenue_notes', value: (row) => notesText(row.financial?.revenue?.notes) },
    { label: 'revenue_items', value: (row) => describeItems(row.financial?.revenue?.items, row.financial) },
    { label: 'cost_of_revenue', value: (row) => row.financial?.costs?.costOfRevenue?.value ?? '' },
    { label: 'gross_profit', value: (row) => row.financial?.profit?.gross?.value ?? '' },
    { label: 'operating_expenses', value: (row) => row.financial?.costs?.operatingExpenses?.total ?? '' },
    { label: 'operating_expense_items', value: (row) => describeItems(row.financial?.costs?.operatingExpenses?.items, row.financial) },
    { label: 'operating_profit', value: (row) => row.financial?.profit?.operating?.value ?? '' },
    { label: 'other_income', value: (row) => row.financial?.otherIncome?.total ?? 0 },
    { label: 'tax', value: (row) => row.financial?.costs?.tax?.value ?? '' },
    { label: 'net_profit', value: (row) => row.financial?.profit?.net?.value ?? '' },
    { label: 'source_image', value: (row) => row.financial?.sourceImage || '' },
  ];
  downloadText('income-statements.csv', csvFromRows(columns, statementRows()));
};
