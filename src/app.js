const sets = window.DATASETS || [];
const companySearch = document.getElementById('companySearch');
const periodSearch = document.getElementById('periodSearch');
const companyList = document.getElementById('companyList');
const periodList = document.getElementById('periodList');
const activeDatasetName = document.getElementById('activeDatasetName');
const activeDatasetPeriod = document.getElementById('activeDatasetPeriod');
const app = document.querySelector('.app');
const toolbar = document.querySelector('.toolbar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarResizer = document.getElementById('sidebarResizer');
const SIDEBAR_WIDTH_KEY = 'sankey.sidebar.width';
const SIDEBAR_COLLAPSED_KEY = 'sankey.sidebar.collapsed';
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
  const height = Math.ceil(toolbar.getBoundingClientRect().height || 46);
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
  activeDatasetName.textContent = record ? record.company : 'No datasets';
  activeDatasetPeriod.textContent = record
    ? [record.period, record.periodNote].filter(Boolean).join(' - ')
    : '';
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
    });
    periodList.appendChild(button);
  });
}
function renderAll() {
  renderActiveSummary();
  renderCompanies();
  renderPeriods();
}

companySearch.addEventListener('input', renderCompanies);
periodSearch.addEventListener('input', renderPeriods);
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
  const d = currentDataset();
  const maxWidth = chartWidth(d);
  document.querySelector('.card').style.maxWidth = maxWidth + 'px';
  if (d) window.SankeyEngine.render('#chart', d);
  document.getElementById('svgBtn').disabled = !document.querySelector('#chart svg');
}

window.addEventListener('hashchange', () => {
  const record = recordFromHash();
  if (!record) return;
  if (record.index === state.activeIndex && record.company === state.company) return;
  state.activeIndex = record.index;
  state.company = record.company;
  renderAll();
  draw();
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
document.getElementById('svgBtn').onclick = () => {
  if (!currentSvg()) return;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([svgString()], { type: 'image/svg+xml' }));
  a.download = fname() + '.svg'; a.click();
};
document.getElementById('pngBtn').onclick = () => {
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
