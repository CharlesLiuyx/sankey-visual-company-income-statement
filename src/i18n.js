/* ====================================================================
 *  i18n.js
 *  Shared language configuration and best-effort data localization.
 *
 *  English data remains the canonical source for verification and source
 *  image fidelity. Non-default languages are projected at render time, with
 *  optional per-record `i18n.<language>` overlays for precise wording/layout.
 * ==================================================================== */
(function (global) {
  'use strict';

  const DEFAULT_LANGUAGE = 'en';
  const LANGUAGES = [
    { code: 'en', htmlLang: 'en', label: 'EN', name: 'English' },
    { code: 'zh', htmlLang: 'zh-CN', label: '中', name: '简体中文' },
  ];
  const LANGUAGE_CODES = LANGUAGES.map((language) => language.code);

  const UI = {
    en: {
      documentTitle: 'Trace (Company & Product Metric Visualizer)',
      appTitle: 'Trace (Company & Product Metric Visualizer)',
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
      companySortMetaUpdated: 'Updated {value}',
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
      documentTitle: 'Trace（公司与产品指标可视化器）',
      appTitle: 'Trace（公司与产品指标可视化器）',
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
      companySortMetaUpdated: '更新 {value}',
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
      tableOperatingProfit: '营业利润',
      tableOtherIncome: '其他收入',
      tableTax: '税费',
      tableNetProfit: '净利润',
      tableSourceImage: '来源图片',
    },
  };

  const MONTH_ZH = {
    jan: '1 月',
    january: '1 月',
    feb: '2 月',
    february: '2 月',
    mar: '3 月',
    march: '3 月',
    apr: '4 月',
    april: '4 月',
    may: '5 月',
    jun: '6 月',
    june: '6 月',
    jul: '7 月',
    july: '7 月',
    aug: '8 月',
    august: '8 月',
    sep: '9 月',
    sept: '9 月',
    september: '9 月',
    oct: '10 月',
    october: '10 月',
    nov: '11 月',
    november: '11 月',
    dec: '12 月',
    december: '12 月',
  };

  const EXACT_ZH = {
    'Data view': '数据视图',
    'Sankey': '桑基图',
    'Table': '表格',
    'Main': '主视图',
    'Revenue': '收入',
    'revenue': '收入',
    'Revenue items': '收入项目',
    'Other revenue': '其他收入',
    'Other revenue from managed and franchised properties': '管理和特许经营物业的其他收入',
    'Revenue after credit loss provision': '扣除信用损失拨备后的收入',
    'Revenue before operating expenses': '运营费用前收入',
    'JD Logistics': '京东物流',
    'Ad Revenue': '广告收入',
    'Net sales': '净销售额',
    'Net Sales': '净销售额',
    'Membership Fee': '会员费',
    'Sales': '销售额',
    'Net system sales': '系统净销售额',
    'Cost of revenue': '收入成本',
    'Cost of revenues': '收入成本',
    'Cost of sales': '销售成本',
    'Merchandise costs': '商品成本',
    'Merchandise': '商品',
    'revenues': '收入',
    'Gross profit': '毛利润',
    'Gross': '毛',
    'profit': '利润',
    'Operating profit': '营业利润',
    'Operating loss': '营业亏损',
    'loss': '亏损',
    'Operating': '运营',
    'operating': '运营',
    'Operating expenses': '运营费用',
    'Operating Expenses': '运营费用',
    'SG&A': '销售及管理费用',
    'SG&A expenses': '销售、一般及行政费用',
    'expenses': '费用',
    'Expenses': '费用',
    'Expense': '费用',
    'Elimination': '抵销',
    'Eliminations': '抵销',
    'Pretax income': '税前利润',
    'Net income': '净利润',
    'Net profit': '净利润',
    'Other income': '其他收入',
    'Other expenses': '其他费用',
    'Other expenses from managed and franchised properties': '管理和特许经营物业的其他费用',
    'Tax': '税费',
    'Tax benefit': '税收收益',
    'TAC': '流量获取成本',
    'Traffic acquisition costs': '流量获取成本',
    'benefit': '收益',
    'Other': '其他',
    'other': '其他',
    'Others': '其他',
    'All others': '所有其他业务',
    'Interest': '利息',
    'Investments': '投资收益',
    'Financial': '财务',
    'Provision': '拨备',
    'Provision for': '拨备',
    'credit loss': '信用损失',
    'Non interest': '非利息',
    'Compensation': '薪酬',
    '& benefits': '和福利',
    'Compensation & benefits': '薪酬与福利',
    'Transaction based': '交易相关',
    'Market dev.': '市场开发',
    'Market development': '市场开发',
    'Communication,': '通信、',
    'Communication, Technology': '通信与技术',
    'Technology': '技术',
    'Technology services': '技术服务',
    'Technology & development': '技术与开发',
    'D&A': '折旧与摊销',
    'Occupancy': '场地占用',
    'Professional fees': '专业费用',
    'Professional': '专业',
    'services': '服务',
    'Professional services': '专业服务',
    'Amortization & other': '摊销及其他',
    'Amortization & impairment': '摊销与减值',
    'Amortization of intangibles': '无形资产摊销',
    'Impairment': '减值',
    'Subscription': '订阅',
    'subscriptions': '订阅',
    'subscription products': '订阅产品',
    'Subscription and support': '订阅与支持',
    'and support': '与支持',
    'Search': '搜索',
    'Search advertising': '搜索广告',
    'Advertising': '广告',
    'advertising': '广告',
    'Marketing': '市场营销',
    'marketing': '市场营销',
    'Sales &': '销售与',
    'Sales & Marketing': '销售与市场',
    'Sales, General & Admin': '销售、一般及行政',
    'Sales, General': '销售、一般',
    '& Admin': '及行政',
    'Selling &': '销售与',
    'Distribution': '分销',
    'Administrative': '行政',
    'R&D': '研发',
    'Research & Development': '研发',
    'Research & development': '研发',
    'Research &': '研发',
    'development': '开发',
    'Development': '开发',
    'S&M': '销售与市场',
    'Sales & marketing': '销售与市场',
    'G&A': '管理费用',
    'General & Admin': '管理费用',
    'General & admin': '管理费用',
    'SG&A': '销售、一般及行政',
    'Sales, general & admin': '销售、一般及行政',
    'General & administrative': '一般及行政',
    'General & Administrative': '一般及行政',
    'General and administrative': '一般及行政',
    'administrative': '行政',
    'Operations': '运营',
    'Brokerage &': '经纪与',
    'transaction': '交易',
    'Technology &': '技术与',
    'Marketing & business dev.': '市场与业务开发',
    'Transaction-based': '交易收入',
    'Net interest': '净利息',
    'Options': '期权',
    'Crypto': '加密资产',
    'crypto': '加密资产',
    'Equities': '股票',
    'Other transactions': '其他交易',
    'Data Center': '数据中心',
    'High Performance Computing': '高性能计算',
    'Hyperscale': '超大规模',
    'AI Clouds, Industrial, & Enterprise': 'AI 云、工业与企业',
    'AI Clouds,': 'AI 云、',
    'Industrial,': '工业、',
    '& Enterprise': '与企业',
    'Edge Computing': '边缘计算',
    'Gaming': '游戏',
    'gaming': '游戏',
    'Professional Visualization': '专业可视化',
    'Visualization': '可视化',
    'Automotive': '汽车',
    'Auto': '汽车业务',
    'Auto sales': '汽车销售',
    'Regulatory credits': '监管积分',
    'Leasing': '租赁',
    'Energy generation & storage': '能源发电与储能',
    'OEM & Other': 'OEM 及其他',
    'Server': '服务器',
    'Servers': '服务器',
    'Microsoft 365 Commercial': 'Microsoft 365 商业版',
    'Windows & Devices': 'Windows 与设备',
    'Windows': 'Windows',
    '& Devices': '与设备',
    'LinkedIn': 'LinkedIn',
    'Productivity & Business Processes': '生产力与业务流程',
    'Productivity &': '生产力与',
    'Business Processes': '业务流程',
    'Intelligent Cloud': '智能云',
    'Cloud': '云',
    'cloud': '云',
    'More Personal Computing': '更多个人计算',
    'More Personal': '更多个人',
    'Computing': '计算',
    'Online Stores': '线上商店',
    'Physical Stores': '实体商店',
    'Physical Store': '实体商店',
    'Third-party seller services': '第三方卖家服务',
    '3rd party sellers services': '第三方卖家服务',
    'Subscription services': '订阅服务',
    'AWS': 'AWS',
    'Google Cloud': 'Google Cloud',
    'Google Play, devices, and subscriptions': 'Google Play、设备与订阅',
    'YouTube': 'YouTube',
    'YouTube Premium & TV': 'YouTube Premium 与电视',
    'Google AdMob': 'Google AdMob',
    'Google Ad Manager': 'Google 广告管理平台',
    'AdSense & Google Ad Manager': 'AdSense 与 Google 广告管理平台',
    '+ AdSense & Google Ad Manager': '+ AdSense 与 Google 广告管理平台',
    'Fitbit, Google Nest, Pixel, YouTube Premium & TV': 'Fitbit、Google Nest、Pixel、YouTube Premium 与电视',
    '+ Fitbit, Google Nest, Pixel,': '+ Fitbit、Google Nest、Pixel、',
    'Enterprise Android': '企业 Android',
    '+ Workspace, Enterprise Android': '+ Workspace、企业 Android',
    'Chrome OS, Other APIs': 'Chrome OS、其他 API',
    'Workspace, Enterprise Android, Chrome OS, Other APIs': 'Workspace、企业 Android、Chrome OS 与其他 API',
    'Other APIs': '其他 API',
    'APIs': 'API',
    'TV': '电视',
    'Other Bets': '其他项目',
    'External Customers': '外部客户',
    'Related parties': '关联方',
    'Core solutions': '核心解决方案',
    'Value Added Services': '增值服务',
    'Value Added': '增值',
    'Services': '服务',
    'devices': '设备',
    'logistics': '物流',
    'E-commerce': '电子商务',
    'e-commerce': '电子商务',
    'Depreciation': '折旧',
    'Depreciation & amortization': '折旧与摊销',
    'License & Other': '授权及其他',
    'License': '授权',
    'Licenses & Support': '许可证与支持',
    'Software Licenses': '软件许可证',
    'Software Support': '软件支持',
    'Royalty': '版税',
    'Client': '客户端',
    'Data Center and AI': '数据中心与 AI',
    'Software': '软件',
    'Consulting': '咨询',
    'Financing': '融资',
    'Store opex': '门店运营费用',
    'Product & distribution': '产品与分销',
    'Walmart': '沃尔玛',
    'Walmart US': '沃尔玛美国',
    'Walmart U.S.': '沃尔玛美国',
    'Walmart International': '沃尔玛国际',
    "Sam's Club": '山姆会员店',
    "sam's club": '山姆会员店',
    'Membership': '会员',
    'Membership and other': '会员及其他',
    'US comp sales': '美国可比销售额',
    'E-commerce +26% Y/Y': '电子商务同比 +26%',
    'Advertising +37% Y/Y': '广告同比 +37%',
    'Embedded': '嵌入式',
    'Handsets': '手机',
    'Internet of Things': '物联网',
    'IoT': '物联网',
    'Licensing': '授权',
    'Restaurants': '餐厅',
    'Company restaurants': '公司自营餐厅',
    'Franchise expenses': '特许经营费用',
    'Company-operated stores': '自营门店',
    'Licensed stores': '授权门店',
    'Food': '食品',
    'Beverage': '饮品',
    'Packaged beverages': '包装饮品',
    'United States': '美国',
    'Rest of World': '世界其他地区',
    'Rest of world': '世界其他地区',
    'North America': '北美',
    'Europe': '欧洲',
    'UCAN': '美国和加拿大',
    'EMEA': '欧洲、中东和非洲',
    'LATAM': '拉美',
    'APAC': '亚太',
    'Global Banking & Markets': '全球银行与市场',
    'Global Banking &': '全球银行与',
    'Markets': '市场',
    'Asset & Wealth Management': '资产与财富管理',
    'Asset & Wealth': '资产与财富',
    'Management': '管理',
    'Platform Solutions': '平台解决方案',
    'Pre-provision pretax income': '拨备前税前利润',
    'Institutional Securities': '机构证券',
    'Institutional': '机构',
    'Securities': '证券',
    'Wealth Management': '财富管理',
    'Wealth': '财富',
    'Investment Management': '投资管理',
    'Investment': '投资',
    'Investment advisory, fees & securities lending': '投资顾问、费用及证券借贷',
    'Investment advisory performance fees': '投资顾问绩效费',
    'advisory, fees &': '顾问费及',
    'Distribution fees': '分销费用',
    'Advisory & other': '顾问及其他',
    'Compensation &': '薪酬与',
    'Sales, asset & Account expenses': '销售、资产及账户费用',
    'Account expenses': '账户费用',
    'Noninterest expense': '非利息费用',
    'Noninterest expenses': '非利息费用',
    'Net system': '系统净',
    'sales': '销售额',
    'Installed base management': '装机基础管理',
    'Installed base': '装机基础',
    'management': '管理',
    'Metrology & Inspection': '量测与检测',
    'Metrology': '量测',
    '& Inspection': '与检测',
    'Extreme Ultraviolet': '极紫外',
    'Argon Fluoride immersion': '氟化氩浸没式',
    'Argon Fluoride Dry': '氟化氩干式',
    'Krypton Fluoride': '氟化氪',
    'EUV': 'EUV',
    'ArFi': 'ArFi',
    'ArF Dry': 'ArF Dry',
    'KrF': 'KrF',
    'I-line': 'I-line',
    'IDG Intelligent Devices Group': 'IDG 智能设备集团',
    'IDG': 'IDG',
    'Intelligent': '智能',
    'Devices': '设备',
    'Group': '集团',
    'ISG Infrastructure Solutions Group': 'ISG 基础设施方案集团',
    'ISG (Infrastructure)': 'ISG（基础设施）',
    'ISG': 'ISG',
    'Infrastructure': '基础设施',
    'infrastructure': '基础设施',
    'Solutions': '方案',
    'SSG Solutions & Services Group': 'SSG 方案与服务集团',
    'SSG': 'SSG',
    'Solutions &': '方案与',
    'Design Automation': '设计自动化',
    'Design': '设计',
    'Automation': '自动化',
    'Design IP': '设计 IP',
    'Products': '产品',
    'Product': '产品',
    'Product development': '产品开发',
    'Technology & content': '技术与内容',
    'Fulfillment': '履约',
    'Marketplace & Services': '市场与服务',
    'Services app cluster': '服务应用组合',
    'Wearables': '可穿戴设备',
    'Wearables, Home and Accessories': '可穿戴设备、家居与配件',
    'Wearables, Home, and Accessories': '可穿戴设备、家居与配件',
    'Home': '家居',
    'Accessories': '配件',
    'iPhone': 'iPhone',
    'Print': '印刷',
    'Digital': '数字',
    'Devices and other': '设备及其他',
    'Subscription and support': '订阅与支持',
    'Agentforce Apps': 'Agentforce 应用',
    'Agentforce': 'Agentforce',
    'Apps': '应用',
    'Data 360 Headless Platform & Other': 'Data 360 无头平台及其他',
    'Data 360': 'Data 360',
    'Headless Platform': '无头平台',
    '& Other': '及其他',
    'Commerce, Slack': 'Commerce、Slack',
    'Sales, Service, Marketing,': 'Sales、Service、Marketing、',
    'Informatica, Mulesoft, Tableau': 'Informatica、Mulesoft、Tableau',
    'Restructuring': '重组',
    'Information &': '信息与',
    'communications': '通信',
    'Marketing &': '市场与',
    'business dev.': '业务开发',
    'Brokerage, clearing': '经纪、清算',
    '& exchange fees': '与交易所费用',
    'AI-optimized Servers': 'AI 优化服务器',
    'Traditional Servers & Networking': '传统服务器与网络',
    'Traditional Servers': '传统服务器',
    '& Networking': '与网络',
    'Networking': '网络',
    'Storage': '存储',
    'storage': '存储',
    'CSG (Client)': 'CSG（客户端）',
    'Commercial': '商业',
    'Consumer': '消费者',
    'Personal Systems': '个人系统',
    'Personal': '个人',
    'Systems': '系统',
    'Printing': '打印',
    'Printing Supplies': '打印耗材',
    'Supplies': '耗材',
    'Printing Commercial': '商用打印',
    'Printing Consumer': '消费者打印',
    'Franchise fees': '特许经营费',
    'Base management fees': '基础管理费',
    'Incentive management fees': '激励管理费',
    'Owned, leased and other': '自有、租赁及其他',
    'Owned, leased hotels': '自有及租赁酒店',
    'Other revenue from managed & franchised properties': '管理和特许经营物业的其他收入',
    'Other expenses from managed & franchised properties': '管理和特许经营物业的其他费用',
    'Incentive': '激励',
    'management fees': '管理费',
    'Owned, leased': '自有、租赁',
    'hotels': '酒店',
    'China E-commerce': '中国电子商务',
    'China': '中国',
    'International Digital Commerce': '国际数字商业',
    'International': '国际',
    'Commerce': '商业',
    'Inter-segment eliminations': '分部间抵销',
    'Inter-segment': '分部间',
    'Smartphones': '智能手机',
    'Intellectual property income offset': '知识产权收入抵减',
    'Family of Apps (FoA)': '应用家族（FoA）',
    'Reality Labs (RL)': 'Reality Labs（RL）',
    'Digital Consumer Electronics': '数字消费电子',
    'Social Networks': '社交网络',
    'FinTech & Business Services': '金融科技与企业服务',
    'Business': '企业服务',
    'Developer fees': '开发者费用',
    'Other opex': '其他运营费用',
    'Other operating gains': '其他营业收益',
    'Space': '航天',
    'Connectivity': '连接服务',
    'Delivery': '配送',
    'Device eXperience': '设备体验',
    'Device Solutions': '设备解决方案',
    'securities lending': '证券借贷',
    'performance fees': '绩效费',
    'benefits': '福利',
    'franchised': '特许经营',
    'properties': '物业',
    'from managed': '来自管理物业',
    'Base': '基础',
    'Intellectual': '知识产权',
    'property': '知识产权',
    'Saas/Paas': 'SaaS/PaaS',
    'Iaas': 'IaaS',
    'High Performance': '高性能',
    'Electronics': '电子',
    'Energy generation': '能源发电',
    'Social': '社交',
    'Networks': '网络',
    'admin': '行政',
    'transactions': '交易',
    'North': '北',
    'America': '美洲',
    'Franchise': '特许经营',
    'distribution': '分销',
    'amortization': '摊销',
    'Memory, Foundry,': '存储器、晶圆代工、',
    '& System LSI': '系统 LSI',
    'System LSI': '系统 LSI',
    'Digital TVs': '数字电视',
    'Refrigerators': '冰箱',
    'Mobile phones': '手机',
    'Communication systems': '通信系统',
    'By Business Segment': '按业务分部',
    'In KRW trillion': '单位：万亿韩元',
    'in RMB': '单位：人民币',
    'CET1 ratio': 'CET1 比率',
    'Annualized ROE': '年化 ROE',
    'CET1 = Common Equity Tier 1': 'CET1 = 普通股一级资本',
    'ROE = Return on average common equity': 'ROE = 平均普通股权益回报率',
    'ROTCE = Return on average tangible common equity': 'ROTCE = 平均有形普通股权益回报率',
    'Customers > $10K Cloud ARR': '云 ARR 超 $10K 客户',
    'Digital ARPU': '数字 ARPU',
    'Systemwide RevPAR': '全系统 RevPAR',
    'Comparable': '可比',
    '9,260 properties': '9,260 处物业',
    '1.36M rooms': '1.36M 间客房',
    'rooms': '客房',
    'Trips': '行程',
    'Gross Bookings': '总预订额',
    'Take rate': '抽成率',
    'Same Store Sale +6% Y/Y': '同店销售额 同比 +6%',
    'Ticket +2% Y/Y': '客单价 同比 +2%',
    'Transactions +4% Y/Y': '交易量 同比 +4%',
    'Mobility 25.8% (-4.9pp Y/Y)': '出行业务 25.8%（同比 -4.9 个百分点）',
    'Delivery 19.5% (+1.0pp Y/Y)': '配送业务 19.5%（同比 +1.0 个百分点）',
    'DAU = Daily Active Users': 'DAU = 日活跃用户',
    'DAUq = Daily Active Uniques': 'DAUq = 日活跃独立用户',
    'WAUq = Weekly Active Uniques': 'WAUq = 周活跃独立用户',
    'ARPU = Average Revenue Per User': 'ARPU = 单用户平均收入',
    'ARPU = Average Revenue Per Unique': 'ARPU = 单独立用户平均收入',
    'Average DAUq': '平均 DAUq',
    'Average WAUq': '平均 WAUq',
    'Quarterly ARPU': '季度 ARPU',
    'MAU = Monthly Active Users': 'MAU = 月活跃用户',
    'MAPC = Monthly active users completing ride or delivery': 'MAPC = 完成出行或配送的月活跃用户',
    'RevPAR = Revenue Per Available Room': 'RevPAR = 每间可售客房收入',
    'cRPO': 'cRPO',
    'cRPO = Current Remaining Performance Obligation': 'cRPO = 当前剩余履约义务',
    'SaaS = Software as a Service': 'SaaS = 软件即服务',
    'PaaS = Platform as a Service': 'PaaS = 平台即服务',
    'IaaS = Infrastructure as a Service': 'IaaS = 基础设施即服务',
    'QCT: CDMA Technologies': 'QCT：CDMA 技术',
    'QTL: Technology Licensing': 'QTL：技术授权',
    '* Including restructuring charges': '* 包括重组费用',
    '* Including $2.8B Warner break-up fee': '* 包括 $2.8B Warner 解约费',
    'How': '如何',
    'Makes Money': '赚钱',
    'Production': '产量',
    'Deliveries': '交付量',
    'Net deposits': '净存款',
    'Hours Engaged': '参与时长',
    'Bookings': '预订额',
    'Renewal rate': '续约率',
    'Customers > $5M': '超 $5M 客户',
    'Store count': '门店数',
    'Reported by CoreWeave as technology and infrastructure.': 'CoreWeave 将其列报为技术和基础设施。',
    'Source chart displays this rounded value as ($0.2M).': '来源图将该四舍五入值显示为 ($0.2M)。',
    'Reported by Hilton as cost reimbursement revenues.': 'Hilton 将其列报为成本报销收入。',
    'Includes reimbursed expenses of $1.849B plus $0.022B of other expenses.': '包括 $1.849B 报销费用和 $0.022B 其他费用。',
    'Source chart cost-of-revenues detail sums to $41.2B due to rounding.': '来源图收入成本明细因四舍五入合计为 $41.2B。',
    'Reported as Subscription Services by AppFolio.': 'AppFolio 将其列报为订阅服务。',
    'Interest income, net plus other income, net; source chart labels the combined line as Interest.': '包括净利息收入和净其他收入；来源图将合并项目标为利息。',
    'Source chart also shows revenue by customer type: External Customers $1,079M and Related parties $411M.': '来源图还按客户类型显示收入：外部客户 $1,079M，关联方 $411M。',
    'Support & Maintenance': '支持与维护',
    'Percentage or fixed': '按比例或固定金额',
    'Source chart does not show a separate gross profit or cost-of-revenue layer.': '来源图未单独显示毛利润或收入成本层。',
    'Source chart flows revenue directly to operating profit and operating expenses.': '来源图将收入直接流向营业利润和运营费用。',
    'No separate net loss line is shown in the source chart.': '来源图未单独显示净亏损项目。',
    'No separate net income line is shown in the source chart.': '来源图未单独显示净利润项目。',
    'Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart.': '建模为税前利润前成本，使通用 SSOT 计算与银行业来源图匹配。',
    'Operating expense line items sum to $10.5B because the source chart rounds each item.': '运营费用项目因来源图逐项取整合计为 $10.5B。',
    'Operating expense items sum to $70.3B because the source chart rounds each item.': '运营费用项目因来源图逐项取整合计为 $70.3B。',
    'Operating expense line items sum to $1,581M because the source chart rounds each item.': '运营费用项目因来源图逐项取整合计为 $1,581M。',
    'Balancing subtotal; not labeled separately in the source chart.': '平衡小计；来源图未单独标注。',
    'Source chart rounds R&D and SG&A to $3.8B total operating expenses.': '来源图将研发与销售、一般及行政费用取整为 $3.8B 运营费用合计。',
    'Source chart reports operating expense breakdown rounded to $11.8B total.': '来源图列示的运营费用明细取整后合计为 $11.8B。',
    'Source chart presents cost of revenue as Store opex ($4.4B) plus Product & distribution ($3.2B).': '来源图将收入成本列示为门店运营费用 ($4.4B) 加产品与分销 ($3.2B)。',
    'Rounded source chart line items sum to $1.125B including $25M restructuring.': '来源图项目取整后合计为 $1.125B，其中包括 $25M 重组费用。',
    'Flat Y/Y': '同比持平',
    'R&D and SG&A line items sum to $2.9B; the remaining $0.1B is rounding residual in the source chart.': '研发与销售、一般及行政费用项目合计为 $2.9B；剩余 $0.1B 为来源图四舍五入差额。',
    'Source chart shows other operating gains as an offset before operating profit.': '来源图将其他营业收益显示为营业利润前的抵减项。',
    'Aggregated non-operating investment, interest, finance, and associate/JV line items.': '汇总非经营性投资、利息、财务以及联营/JV 项目。',
    'No cost-of-revenue subtotal is shown in the source chart.': '来源图未显示收入成本小计。',
    'Source chart aggregates operations and provision for credit losses.': '来源图汇总了运营费用和信用损失拨备。',
    'Including $2.8B Warner break-up fee': '包括 $2.8B Warner 解约费',
    'Net impact of interest expense, other income, equity income, and discontinued operations.': '利息费用、其他收入、权益收益和终止经营的净影响。',
    'Payments infrastructure': '支付基础设施',
    'Source chart shows a tax benefit instead of tax expense.': '来源图显示税收收益，而非税费。',
    'Noninterest expense detail sums to $13.4B due to rounded line items.': '非利息费用明细因项目取整合计为 $13.4B。',
    'Schema adapter subtotal; source chart labels the displayed node as Pretax income.': 'Schema 适配小计；来源图将显示节点标为税前利润。',
    'CDMA Technologies': 'CDMA 技术',
    'Source chart shows a $5.1B tax benefit instead of tax expense.': '来源图显示 $5.1B 税收收益，而非税费。',
    'The source chart does not show a gross profit or cost-of-revenue subtotal.': '来源图未显示毛利润或收入成本小计。',
    'Source chart presents Hilton expenses as operating expenses rather than a gross-profit split.': '来源图将 Hilton 费用列为运营费用，而非毛利润拆分。',
    'Synthetic SSOT subtotal because the source chart does not show gross profit.': '由于来源图未显示毛利润，使用 SSOT 合成小计。',
    'Printing child lines sum to $4.3B because the source chart rounds each line.': '打印业务子项目因来源图逐项取整合计为 $4.3B。',
    'Shown as an eliminations outflow before consolidated revenue in the source chart.': '来源图显示为合并收入前的抵销流出。',
    'Source chart also shows a $0.1B Other rounding bridge.': '来源图还显示 $0.1B 其他四舍五入桥接项。',
    'SG&A and R&D are offset by $0.2B of intellectual property income in the source chart.': '来源图中销售、一般及行政费用和研发费用由 $0.2B 知识产权收入抵减。',
    'Shown as +$0.2B income in the source chart.': '来源图显示为 +$0.2B 收入。',
    'Memory, Foundry, & System LSI': '存储器、晶圆代工和 System LSI',
    'Digital TVs, Refrigerators, Mobile phones, Communication systems': '数字电视、冰箱、手机、通信系统',
    'Shown as an eliminations cost before consolidated Sales in the source chart.': '来源图显示为合并销售额前的抵销成本。',
    'Source chart label reads "(11.6B)", but the net-profit bridge implies 11.6T.': '来源图标签为 “(11.6B)”，但净利润桥接关系显示应为 11.6T。',
    'Gross profit minus operating expenses differs from operating profit by €0.1B due to source chart rounding.': '由于来源图四舍五入，毛利润减运营费用与营业利润相差 €0.1B。',
    'Gross profit and cost of revenue sum to $3.7B due to source chart rounding.': '由于来源图四舍五入，毛利润和收入成本合计为 $3.7B。',
    'Operating expense detail shown in the source chart sums to $17.6B due to rounding.': '来源图显示的运营费用明细因四舍五入合计为 $17.6B。',
    'The source chart does not break out cost of revenue or gross profit.': '来源图未拆分收入成本或毛利润。',
    'Source chart operating-expense detail sums to $1.4B due to rounding.': '来源图运营费用明细因四舍五入合计为 $1.4B。',
    'Bookkeeping value for SSOT parity; gross profit is not shown in the source chart.': '用于保持 SSOT 平衡的记账值；来源图未显示毛利润。',
    'Source chart also shows $46M other operating income feeding operating profit.': '来源图还显示 $46M 其他营业收入流入营业利润。',
    'Official total cost of revenue was $629.9M; source chart displays ($0.6B).': '官方收入成本合计为 $629.9M；来源图显示为 ($0.6B)。',
    'Official total operating expenses were $1.526B; source chart displays ($1.5B).': '官方运营费用合计为 $1.526B；来源图显示为 ($1.5B)。',
    'Includes acquired-intangible amortization and restructuring charges.': '包括收购无形资产摊销和重组费用。',
    'Packaged beverages, royalty and licensing revenue, ingredients': '包装饮品、版税和授权收入、原料',
    'Data API Access': 'Data API 访问',
    'Model Training': '模型训练',
    'Interest expense, foreign-currency loss, and other non-operating income, net.': '利息费用、外币损失及其他非经营收入净额。',
    'Internet services': '互联网服务',
    'digital advertising': '数字广告',
    'cloud computing': '云计算',
    'software': '软件',
    'online services': '在线服务',
    'digital platforms': '数字平台',
    'digital services': '数字服务',
    'Semiconductors': '半导体',
    'semiconductors': '半导体',
    'semiconductor': '半导体',
    'high-performance computing': '高性能计算',
    'AI accelerators': 'AI 加速器',
    'CPUs': 'CPU',
    'GPUs': 'GPU',
    'FPGAs': 'FPGA',
    'adaptive SoCs': '自适应 SoC',
    'embedded systems': '嵌入式系统',
    'AI PCs': 'AI PC',
    'Real estate software': '房地产软件',
    'property management SaaS': '物业管理 SaaS',
    'investment management software': '投资管理软件',
    'value-added services': '增值服务',
    'Semiconductor intellectual property': '半导体知识产权',
    'compute platforms': '计算平台',
    'chip design': '芯片设计',
    'software tools': '软件工具',
    'Consumer electronics': '消费电子',
    'Semiconductor equipment': '半导体设备',
    'lithography systems': '光刻系统',
    'chipmaking services': '芯片制造服务',
    'Collaboration software': '协作软件',
    'IT service management': 'IT 服务管理',
    'work management': '工作管理',
    'AI-powered teamwork platforms': 'AI 驱动的团队协作平台',
    'Investment management': '投资管理',
    'investment management': '投资管理',
    'asset management': '资产管理',
    'ETFs': 'ETF',
    'financial technology': '金融科技',
    'advisory services': '顾问服务',
    'advisory': '顾问服务',
    'AI cloud computing': 'AI 云计算',
    'GPU infrastructure': 'GPU 基础设施',
    'AI storage': 'AI 存储',
    'networking': '网络',
    'managed software services': '托管软件服务',
    'AI infrastructure': 'AI 基础设施',
    'AI platforms': 'AI 平台',
    'productivity': '生产力',
    'personal computers': '个人电脑',
    'peripherals': '外设',
    'technology services': '技术服务',
    'Investment banking': '投资银行',
    'global markets': '全球市场',
    'wealth management': '财富管理',
    'platform solutions': '平台解决方案',
    'Hotels': '酒店',
    'resorts': '度假村',
    'hospitality franchising': '酒店特许经营',
    'hotel management': '酒店管理',
    'owned and leased hotels': '自有及租赁酒店',
    'loyalty programs': '会员计划',
    'Personal computers': '个人电脑',
    'printers': '打印机',
    'print supplies': '打印耗材',
    'workplace technology': '办公场景技术',
    'Hybrid cloud': '混合云',
    'consulting': '咨询',
    'financing': '融资',
    'smartphones': '智能手机',
    'servers': '服务器',
    'solutions': '解决方案',
    'IT services': 'IT 服务',
    'Social media': '社交媒体',
    'messaging': '消息服务',
    'virtual and augmented reality platforms': '虚拟与增强现实平台',
    'institutional securities': '机构证券',
    'Streaming entertainment': '流媒体娱乐',
    'films': '电影',
    'series': '剧集',
    'live programming': '直播节目',
    'News media': '新闻媒体',
    'digital subscriptions': '数字订阅',
    'product review services': '产品评测服务',
    'wireless connectivity': '无线连接',
    'edge AI computing': '边缘 AI 计算',
    'automotive platforms': '汽车平台',
    'technology licensing': '技术授权',
    'online communities': '在线社区',
    'Retail brokerage': '零售经纪',
    'digital banking services': '数字银行服务',
    'private markets access': '私募市场准入',
    'User-generated gaming': '用户生成游戏',
    'immersive experiences': '沉浸式体验',
    'virtual economy': '虚拟经济',
    'Enterprise software': '企业软件',
    'Enterprise applications': '企业应用',
    'business AI': '业务 AI',
    'database': '数据库',
    'analytics': '分析',
    'business process software': '业务流程软件',
    'AI workflow automation': 'AI 工作流自动化',
    'security': '安全',
    'low-code app development': '低代码应用开发',
    'displays': '显示屏',
    'mobile devices': '移动设备',
    'appliances': '家电',
    'networks': '网络',
    'automotive audio and connected systems': '汽车音响与互联系统',
    'Aerospace': '航空航天',
    'satellite internet': '卫星互联网',
    'launch services': '发射服务',
    'Coffeehouses': '咖啡店',
    'beverage retail': '饮品零售',
    'prepared food': '预制食品',
    'packaged coffee': '包装咖啡',
    'ready-to-drink beverages': '即饮饮品',
    'licensed stores': '授权门店',
    'Electronic design automation': '电子设计自动化',
    'silicon IP': '芯片 IP',
    'simulation and analysis': '仿真与分析',
    'silicon-to-systems engineering software': '芯片到系统工程软件',
    'games': '游戏',
    'social networking': '社交网络',
    'fintech': '金融科技',
    'digital content': '数字内容',
    'Electric vehicles': '电动汽车',
    'energy storage': '储能',
    'solar energy': '太阳能',
    'charging infrastructure': '充电基础设施',
    'real-world AI': '现实世界 AI',
    'Semiconductor foundry': '半导体代工',
    'integrated circuit manufacturing services': '集成电路制造服务',
    'Mobility': '出行',
    'delivery': '配送',
    'freight platform': '货运平台',
    'Quick-service restaurants': '快餐餐厅',
    'franchising': '特许经营',
    'restaurant brand operations': '餐饮品牌运营',
    'restaurant technology': '餐饮技术',
  };
  const EXACT_ZH_REPLACEMENTS = Object.keys(EXACT_ZH)
    .filter((key) => key.length > 2 && EXACT_ZH[key] !== key)
    .sort((a, b) => b.length - a.length || a.localeCompare(b))
    .map((key) => ({
      key,
      value: EXACT_ZH[key],
      pattern: new RegExp(`(^|[^A-Za-z0-9])(${escapeRegExp(key)})(?=$|[^A-Za-z0-9])`, 'g'),
    }));

  const LAYOUT_LINE_SPLITS_ZH = {
    'Cost of revenue': ['收入', '成本'],
    'Cost of revenues': ['收入', '成本'],
    'Cost of sales': ['销售', '成本'],
    'Operating expenses': ['运营', '费用'],
    'Operating Expenses': ['运营', '费用'],
    'Sales, General & Admin': ['销售、一般', '及行政'],
    'Sales, general & admin': ['销售、一般', '及行政'],
    'General & Admin': ['一般及', '行政'],
    'General & Administrative': ['一般及', '行政'],
    'General & administrative': ['一般及', '行政'],
    'General & admin': ['一般及', '行政'],
    'Sales & Marketing': ['销售与', '市场'],
    'Sales & marketing': ['销售与', '市场'],
    'Research & Development': ['研究与', '开发'],
    'Research & development': ['研究与', '开发'],
    'Technology & content': ['技术与', '内容'],
    'Technology & development': ['技术与', '开发'],
    'Marketing & business dev.': ['市场与', '业务开发'],
    'Product development': ['产品', '开发'],
    'Investment advisory, fees & securities lending': ['投资顾问', '费用及', '证券借贷'],
    'Investment advisory performance fees': ['投资顾问', '绩效', '费用'],
    'Compensation & benefits': ['薪酬与', '福利'],
    'Sales, asset & Account expenses': ['销售、资产及账户', '费用'],
    'Amortization & other': ['摊销及', '其他'],
    'Amortization & impairment': ['摊销与', '减值'],
    'Amortization of intangibles': ['无形资产', '摊销'],
    'Traditional Servers & Networking': ['传统服务器', '与网络'],
    'Base management fees': ['基础', '管理费'],
    'Incentive management fees': ['激励', '管理费'],
    'Owned, leased and other': ['自有、租赁', '及其他'],
    'Owned, leased hotels': ['自有及租赁', '酒店'],
    'Other revenue from managed & franchised properties': ['管理和特许', '经营物业的', '其他', '收入'],
    'Other expenses from managed & franchised properties': ['管理和特许', '经营物业的', '其他', '费用'],
  };

  const SECTOR_ZH = {
    'Communication Services': '通信服务',
    'Consumer Discretionary': '非必需消费品',
    'Consumer Staples': '日常消费品',
    'Financials': '金融',
    'Industrials': '工业',
    'Information Technology': '信息技术',
  };

  const FISCAL_YEAR_END_ZH = {
    'January 31': '1 月 31 日',
    'March 31': '3 月 31 日',
    'June 30': '6 月 30 日',
    'October 31': '10 月 31 日',
    'December 31': '12 月 31 日',
    'Last Saturday in December': '12 月最后一个星期六',
    'Last Saturday in September': '9 月最后一个星期六',
    'Last Sunday in January': '1 月最后一个星期日',
    'Last Sunday in September': '9 月最后一个星期日',
    'Sunday closest to September 30': '最接近 9 月 30 日的星期日',
    '52- or 53-week period ending on the Friday nearest January 31': '截至最接近 1 月 31 日星期五的 52 或 53 周会计年度',
  };

  const HEADQUARTERS_ZH = {
    'Mountain View, California, United States': '美国加利福尼亚州山景城',
    'Hangzhou, Zhejiang, China': '中国浙江杭州',
    'Santa Clara, California, United States': '美国加利福尼亚州圣克拉拉',
    'Seattle, Washington, United States': '美国华盛顿州西雅图',
    'Santa Barbara, California, United States': '美国加利福尼亚州圣巴巴拉',
    'Cambridge, England, United Kingdom': '英国英格兰剑桥',
    'Cupertino, California, United States': '美国加利福尼亚州库比蒂诺',
    'Veldhoven, the Netherlands': '荷兰费尔德霍芬',
    'Sydney, New South Wales, Australia / San Francisco, California, United States': '澳大利亚新南威尔士州悉尼 / 美国加利福尼亚州旧金山',
    'New York, New York, United States': '美国纽约州纽约',
    'Livingston, New Jersey, United States': '美国新泽西州利文斯顿',
    'Round Rock, Texas, United States': '美国得克萨斯州朗德罗克',
    'McLean, Virginia, United States': '美国弗吉尼亚州麦克莱恩',
    'Palo Alto, California, United States': '美国加利福尼亚州帕洛阿尔托',
    'Armonk, New York, United States': '美国纽约州阿蒙克',
    'Hong Kong S.A.R. of China; key operations centers in Beijing, China and Morrisville, North Carolina, United States': '中国香港特别行政区；主要运营中心位于中国北京和美国北卡罗来纳州莫里斯维尔',
    'Redmond, Washington, United States': '美国华盛顿州雷德蒙德',
    'Menlo Park, California, United States': '美国加利福尼亚州门洛帕克',
    'Los Gatos, California, United States': '美国加利福尼亚州洛斯盖托斯',
    'San Diego, California, United States': '美国加利福尼亚州圣迭戈',
    'San Francisco, California, United States': '美国加利福尼亚州旧金山',
    'San Mateo, California, United States': '美国加利福尼亚州圣马特奥',
    'Walldorf, Baden-Württemberg, Germany': '德国巴登-符腾堡州沃尔多夫',
    'Suwon, Gyeonggi-do, South Korea': '韩国京畿道水原',
    'Starbase, Texas, United States': '美国得克萨斯州星际基地',
    'Sunnyvale, California, United States': '美国加利福尼亚州桑尼维尔',
    'Shenzhen, Guangdong, China': '中国广东深圳',
    'Austin, Texas, United States': '美国得克萨斯州奥斯汀',
    'Hsinchu, Taiwan': '中国台湾新竹',
    'Louisville, Kentucky, United States': '美国肯塔基州路易斯维尔',
  };

  function normalizeLanguage(language) {
    return LANGUAGE_CODES.includes(language) ? language : DEFAULT_LANGUAGE;
  }

  function htmlLang(language) {
    const code = normalizeLanguage(language);
    return LANGUAGES.find((item) => item.code === code)?.htmlLang || code;
  }

  function nextLanguage(language) {
    const code = normalizeLanguage(language);
    const index = LANGUAGE_CODES.indexOf(code);
    return LANGUAGE_CODES[(index + 1) % LANGUAGE_CODES.length] || DEFAULT_LANGUAGE;
  }

  function interpolate(text, values) {
    return String(text || '').replace(/\{(\w+)\}/g, (_match, name) => values?.[name] ?? '');
  }

  function t(key, values, language) {
    const code = normalizeLanguage(language);
    const text = UI[code]?.[key] || UI[DEFAULT_LANGUAGE][key] || key;
    return interpolate(text, values);
  }

  function clean(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function hasLatinText(value) {
    return /[A-Za-z]/.test(String(value || ''));
  }

  function hasChineseText(value) {
    return /[\u3400-\u9fff]/.test(String(value || ''));
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function cleanupLocalizedPunctuation(text) {
    return String(text || '')
      .replace(/\s*,\s*and\s+/gi, '和')
      .replace(/\s+and\s+/gi, '和')
      .replace(/\s*&\s*/g, '与')
      .replace(/\s*,\s*/g, '、')
      .replace(/\s*;\s*/g, '；')
      .replace(/、\s*和/g, '和')
      .replace(/\s+\/\s+/g, ' / ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function replaceKnownPhrases(text) {
    let out = String(text || '');
    EXACT_ZH_REPLACEMENTS.forEach((entry) => {
      out = out.replace(entry.pattern, (_match, prefix) => `${prefix}${entry.value}`);
    });
    return cleanupLocalizedPunctuation(out);
  }

  function translateKnownPhraseText(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (!value || !hasLatinText(value)) return text;
    const out = replaceKnownPhrases(value);
    return out !== value && hasChineseText(out) ? out : text;
  }

  function clone(value) {
    if (Array.isArray(value)) return value.map(clone);
    if (value && typeof value === 'object') {
      const out = {};
      Object.keys(value).forEach((key) => {
        out[key] = clone(value[key]);
      });
      return out;
    }
    return value;
  }

  function mergeOverlay(target, overlay) {
    if (!overlay || typeof overlay !== 'object') return target;
    Object.keys(overlay).forEach((key) => {
      const next = overlay[key];
      const prev = target[key];
      if (Array.isArray(prev) && Array.isArray(next) && next.every((item) => item && typeof item === 'object' && item.id)) {
        next.forEach((item) => {
          const match = prev.find((candidate) => candidate && candidate.id === item.id);
          if (match) mergeOverlay(match, item);
          else prev.push(clone(item));
        });
        return;
      }
      if (Array.isArray(prev) && next && typeof next === 'object' && !Array.isArray(next) && key === 'nodes') {
        Object.keys(next).forEach((id) => {
          const match = prev.find((candidate) => candidate && candidate.id === id);
          if (match) mergeOverlay(match, next[id]);
        });
        return;
      }
      if (
        prev &&
        next &&
        typeof prev === 'object' &&
        typeof next === 'object' &&
        !Array.isArray(prev) &&
        !Array.isArray(next)
      ) {
        mergeOverlay(prev, next);
      } else {
        target[key] = clone(next);
      }
    });
    return target;
  }

  function yearText(value) {
    const year = Number(value);
    if (!Number.isFinite(year)) return String(value);
    return String(year < 100 ? 2000 + year : year);
  }

  function translatePeriod(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const quarterWords = { 1: '第一季度', 2: '第二季度', 3: '第三季度', 4: '第四季度' };
    const qfy = value.match(/^Q\s*([1-4])\s+FY\s*(20\d{2}|\d{2})$/i);
    if (qfy) return `${yearText(qfy[2])} 财年${quarterWords[qfy[1]]}`;
    const qfyCompact = value.match(/^Q([1-4])-?FY(20\d{2}|\d{2})$/i);
    if (qfyCompact) return `${yearText(qfyCompact[2])} 财年${quarterWords[qfyCompact[1]]}`;
    const fy = value.match(/^FY\s*(20\d{2}|\d{2})$/i) || value.match(/^FY(20\d{2}|\d{2})$/i);
    if (fy) return `${yearText(fy[1])} 财年`;
    return text;
  }

  function translateEnding(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const monthYear = value.match(/^Ending\s+([A-Za-z.]+)\s+(\d{4})$/i);
    if (monthYear) {
      const month = MONTH_ZH[monthYear[1].replace('.', '').toLowerCase()];
      if (month) return `截至 ${monthYear[2]} 年 ${month}`;
    }
    const monthDayYear = value.match(/^Ending\s+([A-Za-z.]+)\s+(\d{1,2}),?\s+(\d{4})$/i);
    if (monthDayYear) {
      const month = MONTH_ZH[monthDayYear[1].replace('.', '').toLowerCase()];
      if (month) return `截至 ${monthDayYear[3]} 年 ${month} ${Number(monthDayYear[2])} 日`;
    }
    return text;
  }

  function translateMonthDate(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (FISCAL_YEAR_END_ZH[value]) return FISCAL_YEAR_END_ZH[value];
    const monthDay = value.match(/^([A-Za-z.]+)\s+(\d{1,2})$/);
    if (monthDay) {
      const month = MONTH_ZH[monthDay[1].replace('.', '').toLowerCase()];
      if (month) return `${month} ${Number(monthDay[2])} 日`;
    }
    return text;
  }

  function translateChange(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (/^Flat\s+Y\/Y$/i.test(value)) return '同比持平';
    if (/^Flat\s+Q\/Q$/i.test(value)) return '环比持平';
    const percent = value.match(/^([+−-]?\d+(?:\.\d+)?%|\(\d+(?:\.\d+)?%\))\s+Y\/Y$/i);
    if (percent) return `同比 ${percent[1].replace('−', '-')}`;
    const pp = value.match(/^([+−-]?\d+(?:\.\d+)?pp|\(\d+(?:\.\d+)?pp\))\s+Y\/Y$/i);
    if (pp) return `同比 ${pp[1].replace('−', '-').replace(/pp/i, ' 个百分点')}`;
    const quarterPercent = value.match(/^([+−-]?\d+(?:\.\d+)?%|\(\d+(?:\.\d+)?%\))\s+Q\/Q$/i);
    if (quarterPercent) return `环比 ${quarterPercent[1].replace('−', '-')}`;
    const quarterPp = value.match(/^([+−-]?\d+(?:\.\d+)?pp|\(\d+(?:\.\d+)?pp\))\s+Q\/Q$/i);
    if (quarterPp) return `环比 ${quarterPp[1].replace('−', '-').replace(/pp/i, ' 个百分点')}`;
    return text;
  }

  function translateTrailingChange(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const suffix = value.match(/^(.+?)\s+((?:[+−-]?\d+(?:\.\d+)?%|\(\d+(?:\.\d+)?%\)|[+−-]?\d+(?:\.\d+)?pp|\(\d+(?:\.\d+)?pp\))\s+[YQ]\/[YQ])$/i);
    if (suffix) {
      const translated = translateChange(suffix[2], language);
      if (translated !== suffix[2]) return `${suffix[1]} ${translated}`;
    }
    let out = value
      .replace(/([+−-]?\d+(?:\.\d+)?[BMK])\s+Y\/Y/gi, (_match, amount) => `同比 ${amount.replace('−', '-')}`)
      .replace(/([+−-]?\d+(?:\.\d+)?[BMK])\s+Q\/Q/gi, (_match, amount) => `环比 ${amount.replace('−', '-')}`)
      .replace(/\s*&\s*/g, '，');
    return out !== value ? out : text;
  }

  function translateMargin(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const margin = value.match(/^(\(?\d+(?:\.\d+)?%\)?)\s+(gross|operating|net|adjusted|ebit)?\s*margin$/i);
    const reverse = value.match(/^(gross|operating|net|adjusted|ebit)\s+margin\s+(\(?\d+(?:\.\d+)?%\)?)$/i);
    if (!margin && !reverse) return text;
    const kind = ((margin && margin[2]) || (reverse && reverse[1]) || '').toLowerCase();
    const percent = (margin && margin[1]) || (reverse && reverse[2]);
    const label =
      kind === 'gross' ? '毛利率' :
      kind === 'operating' ? '营业利润率' :
      kind === 'net' ? '净利率' :
      kind === 'adjusted' ? '调整后利润率' :
      kind === 'ebit' ? 'EBIT 利润率' :
      '利润率';
    return `${label} ${percent}`;
  }

  function translateOfRevenue(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const share = value.match(/^(\(?\d+(?:\.\d+)?%\)?)\s+of revenue$/i);
    return share ? `占收入 ${share[1]}` : text;
  }

  function translateTitle(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const match = value.match(/^(.+?)\s+((?:Q[1-4]\s+)?FY(?:20)?\d{2})(?:\s+(ByBU))?\s+Income Statement$/i);
    if (match) {
      const period = translatePeriod(match[2], language);
      const variant = match[3] ? '（按业务部门）' : '';
      return `${match[1]} ${period}${variant}利润表`;
    }
    if (/^Income Statement$/i.test(value)) return '利润表';
    return text;
  }

  function translateDatasetName(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const split = value.match(/^(.+?)\s+[·-]\s+((?:Q[1-4]\s+)?FY(?:20)?\d{2})(.*)$/i);
    if (!split) return text;
    const suffix = clean(split[3]).replace(/^[-·]\s*/, '');
    const variant = suffix ? ` ${translateText(suffix, language)}` : '';
    return `${split[1]} · ${translatePeriod(split[2], language)}${variant}`;
  }

  function exactZh(text) {
    const value = clean(text);
    if (Object.prototype.hasOwnProperty.call(EXACT_ZH, value)) return EXACT_ZH[value];
    const joined = value.replace(/\s+&\s+/g, ' & ');
    if (Object.prototype.hasOwnProperty.call(EXACT_ZH, joined)) return EXACT_ZH[joined];
    return null;
  }

  function translateEmbeddedMoneyLabel(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    const money = value.match(/^(.+?)\s+(\([^)]*[$\d][^)]*\))$/);
    if (!money) return text;
    const label = translateText(money[1], language);
    return label === money[1] ? text : `${label} ${money[2]}`;
  }

  function translateText(text, language) {
    const code = normalizeLanguage(language);
    if (code === DEFAULT_LANGUAGE || text == null) return text;
    const value = clean(text);
    if (!value || value === '$value' || /^[\d\s$().,%+-]+[BMK]?$/.test(value)) return text;

    const exact = exactZh(value);
    if (exact != null) return exact;

    const translators = [
      translateTitle,
      translateDatasetName,
      translatePeriod,
      translateEnding,
      translateMonthDate,
      translateChange,
      translateTrailingChange,
      translateMargin,
      translateOfRevenue,
      translateEmbeddedMoneyLabel,
      translateKnownPhraseText,
    ];
    for (const translator of translators) {
      const next = translator(value, code);
      if (next !== value) return next;
    }

    return text;
  }

  function translateIndustry(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (!value) return text;
    const exact = exactZh(value);
    if (exact != null) return exact;
    return replaceKnownPhrases(value);
  }

  function translateHeadquarters(text, language) {
    if (normalizeLanguage(language) !== 'zh') return text;
    const value = clean(text);
    if (!value) return text;
    return HEADQUARTERS_ZH[value] || replaceKnownPhrases(value);
  }

  function translateCompanyDescription(company, language, localizedIndustry) {
    if (normalizeLanguage(language) !== 'zh') return company?.description;
    const value = clean(company?.description);
    if (!value) return company?.description;
    const name = clean(company?.displayName || company?.name || company?.legalName);
    const industry = clean(localizedIndustry);
    if (name && industry) {
      return `${name} 是一家业务覆盖${industry}的公司。`;
    }
    const translated = translateKnownPhraseText(value, language);
    return translated === value && name ? `${name} 是一家多元业务公司。` : translated;
  }

  function localizeLabel(value, language) {
    const code = normalizeLanguage(language);
    if (code === DEFAULT_LANGUAGE || value == null) return value;
    if (Array.isArray(value)) {
      const joined = value.map(clean).filter(Boolean).join(' ');
      const exact = exactZh(joined);
      if (exact != null) return exact;
      return value.map((item) => translateText(item, code));
    }
    return translateText(value, code);
  }

  function localizeNotes(notes, language) {
    if (!Array.isArray(notes)) return notes;
    return notes.map((note) => translateText(note, language));
  }

  function lineText(line) {
    if (typeof line === 'string') return line;
    return line && typeof line === 'object' ? line.text : null;
  }

  function withLineText(line, text) {
    if (typeof line === 'string') return text;
    return Object.assign({}, line, { text });
  }

  function isLocalizableLayoutLine(line) {
    const text = lineText(line);
    if (text == null || text === '$value') return false;
    return hasLatinText(clean(text));
  }

  function splitCompactChineseLabel(text, lineCount) {
    if (lineCount !== 2) return null;
    const compact = clean(text).replace(/\s+/g, '');
    if (!compact || hasLatinText(compact) || !/^[\u3400-\u9fff、及与]+$/.test(compact)) return null;
    if (/^[\u3400-\u9fff]{4}$/.test(compact)) {
      return [compact.slice(0, 2), compact.slice(2)];
    }
    const suffixes = ['成本', '费用', '利润', '亏损', '摊销', '开发', '行政', '市场', '收入', '收益'];
    const suffix = suffixes.find((item) => compact.endsWith(item) && compact.length > item.length + 1);
    return suffix ? [compact.slice(0, -suffix.length), suffix] : null;
  }

  function splitLocalizedLayoutPhrase(sourceText, localizedText, lineCount) {
    const explicit = LAYOUT_LINE_SPLITS_ZH[clean(sourceText)];
    if (explicit && explicit.length === lineCount) return explicit;
    return splitCompactChineseLabel(localizedText, lineCount);
  }

  function splitTrailingMoneySuffix(text) {
    const value = clean(text);
    const match = value.match(/^(.+?)\s+(\([^)]*[$€¥￥]\s*\d[^)]*\))$/);
    return match ? { text: clean(match[1]), suffix: match[2] } : { text: value, suffix: '' };
  }

  function layoutPhraseText(segment) {
    const parts = segment.map(lineText).map(clean);
    const suffixes = parts.map(() => '');
    const phraseParts = parts.map((part, index) => {
      const split = splitTrailingMoneySuffix(part);
      suffixes[index] = split.suffix;
      return split.text;
    });
    return {
      sourceText: phraseParts.filter(Boolean).join(' '),
      suffixes,
    };
  }

  function applyLineSuffixes(lines, suffixes) {
    return lines.map((line, index) => (suffixes[index] ? `${line} ${suffixes[index]}` : line));
  }

  function splitLocalizedRevenueShareChange(sourceText, lineCount, language) {
    if (normalizeLanguage(language) !== 'zh' || lineCount !== 2) return null;
    const value = clean(sourceText);
    const match = value.match(/^(\(?\d+(?:\.\d+)?%\)?)\s+of revenue\s+\(([^)]+)\)$/i);
    if (!match) return null;
    const change = translateChange(match[2], language);
    if (change === match[2]) return null;
    return [`占收入 ${match[1]}`, change];
  }

  function localizeLayoutLineAt(lines, index, language) {
    const maxLines = Math.min(4, lines.length - index);
    for (let count = maxLines; count > 1; count -= 1) {
      const segment = lines.slice(index, index + count);
      if (!segment.every(isLocalizableLayoutLine)) continue;
      const rawSourceText = segment.map(lineText).map(clean).filter(Boolean).join(' ');
      const revenueShareChange = splitLocalizedRevenueShareChange(rawSourceText, count, language);
      if (revenueShareChange) {
        return {
          count,
          lines: segment.map((line, offset) => withLineText(line, revenueShareChange[offset])),
        };
      }
      const { sourceText, suffixes } = layoutPhraseText(segment);
      const exact = exactZh(sourceText);
      if (exact == null) continue;
      const localized = splitLocalizedLayoutPhrase(sourceText, exact, count);
      if (!localized) continue;
      const withSuffixes = applyLineSuffixes(localized, suffixes);
      return {
        count,
        lines: segment.map((line, offset) => withLineText(line, withSuffixes[offset])),
      };
    }

    const line = lines[index];
    const text = lineText(line);
    if (text == null || text === '$value') return { count: 1, lines: [line] };
    return { count: 1, lines: [withLineText(line, translateText(text, language))] };
  }

  function localizeLines(lines, language) {
    if (!Array.isArray(lines)) return lines;
    const out = [];
    for (let index = 0; index < lines.length;) {
      const localized = localizeLayoutLineAt(lines, index, language);
      out.push(...localized.lines);
      index += localized.count;
    }
    return out;
  }

  function localizeLayoutLabels(labels, language) {
    if (!labels || typeof labels !== 'object') return;
    Object.keys(labels).forEach((nodeId) => {
      const spec = labels[nodeId];
      (spec.blocks || []).forEach((block) => {
        block.lines = localizeLines(block.lines, language);
      });
    });
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

  function encodeSvgText(text) {
    return String(text || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function localizeSvgTextRun(text, language) {
    const raw = String(text || '');
    const parts = raw.match(/^(\s*)([\s\S]*?)(\s*)$/);
    const leading = parts?.[1] || '';
    const body = parts?.[2] || '';
    const trailing = parts?.[3] || '';
    const decoded = decodeSvgText(body);
    if (!clean(decoded) || !hasLatinText(decoded)) return raw;
    const localized = translateText(decoded, language);
    return `${leading}${encodeSvgText(localized)}${trailing}`;
  }

  function localizeSvgTextContent(content, language) {
    return String(content || '')
      .split(/(<[^>]+>)/g)
      .map((part) => (part.startsWith('<') && part.endsWith('>') ? part : localizeSvgTextRun(part, language)))
      .join('');
  }

  function localizeAnnotationsSvg(svgText, language) {
    if (typeof svgText !== 'string' || !svgText || normalizeLanguage(language) === DEFAULT_LANGUAGE) return svgText;
    return svgText.replace(/(<text\b[^>]*>)([\s\S]*?)(<\/text>)/gi, (_match, open, body, close) => (
      `${open}${localizeSvgTextContent(body, language)}${close}`
    ));
  }

  function localizeDataset(dataset, language) {
    const code = normalizeLanguage(language);
    if (!dataset || code === DEFAULT_LANGUAGE) return dataset;

    const out = clone(dataset);
    out.name = translateDatasetName(out.name, code);
    if (out.meta) {
      out.meta.title = translateText(out.meta.title, code);
      out.meta.period = translatePeriod(out.meta.period, code);
      out.meta.periodNote = translateText(out.meta.periodNote, code);
    }
    (out.nodes || []).forEach((node) => {
      node.label = localizeLabel(node.label, code);
      node.notes = localizeNotes(node.notes, code);
    });
    localizeLayoutLabels(out.layout?.labels, code);
    out.annotationsSvg = localizeAnnotationsSvg(out.annotationsSvg, code);
    mergeOverlay(out, dataset.i18n?.[code]);
    return out;
  }

  function localizeFinancialItem(item, language) {
    if (!item || typeof item !== 'object') return;
    item.label = localizeLabel(item.label, language);
    item.notes = localizeNotes(item.notes, language);
    (item.children || []).forEach((child) => localizeFinancialItem(child, language));
  }

  function localizeFinancialRecord(record, language) {
    const code = normalizeLanguage(language);
    if (!record || code === DEFAULT_LANGUAGE) return record;

    const out = clone(record);
    out.period = translatePeriod(out.period, code);
    out.periodNote = translateText(out.periodNote, code);
    out.revenue.notes = localizeNotes(out.revenue.notes, code);
    (out.revenue.items || []).forEach((item) => localizeFinancialItem(item, code));
    localizeFinancialItem(out.costs.costOfRevenue, code);
    (out.costs.costOfRevenue?.items || []).forEach((item) => localizeFinancialItem(item, code));
    (out.costs.operatingExpenses?.items || []).forEach((item) => localizeFinancialItem(item, code));
    localizeFinancialItem(out.costs.tax, code);
    (out.otherIncome?.items || []).forEach((item) => localizeFinancialItem(item, code));
    (out.otherExpenses?.items || []).forEach((item) => localizeFinancialItem(item, code));
    Object.keys(out.profit || {}).forEach((key) => localizeFinancialItem(out.profit[key], code));
    mergeOverlay(out, record.i18n?.[code]);
    return out;
  }

  function localizeCompanyMetadata(company, language) {
    const code = normalizeLanguage(language);
    if (!company || code === DEFAULT_LANGUAGE) return company;

    const out = clone(company);
    if (SECTOR_ZH[out.sector]) out.sector = SECTOR_ZH[out.sector];
    out.industry = translateIndustry(out.industry, code);
    out.headquarters = translateHeadquarters(out.headquarters, code);
    out.fiscalYearEnd = translateText(out.fiscalYearEnd, code);
    out.description = translateCompanyDescription(out, code, out.industry);
    mergeOverlay(out, company.i18n?.[code]);
    return out;
  }

  global.SANKEY_I18N = {
    defaultLanguage: DEFAULT_LANGUAGE,
    languages: LANGUAGES,
    languageCodes: LANGUAGE_CODES,
    ui: UI,
    normalizeLanguage,
    htmlLang,
    nextLanguage,
    t,
    text: translateText,
    label: localizeLabel,
    notes: localizeNotes,
    clone,
    mergeOverlay,
    localizeDataset,
    localizeFinancialRecord,
    localizeCompanyMetadata,
  };
})(window);
