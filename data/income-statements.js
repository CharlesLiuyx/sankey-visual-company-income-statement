/* ====================================================================
 *  Pure income-statement SSOT.
 *
 *  This file intentionally contains financial data only. It is the place
 *  to maintain comparable reported totals and line items across datasets;
 *  Sankey-specific nodes, links, layout geometry, colors, SVG, and render
 *  overrides stay in data/datasets/<dataset-key>.js.
 * ==================================================================== */
(function (global) {
  'use strict';

  global.INCOME_STATEMENT_SSOT = {
    schemaVersion: 1,
    records: [
      {
        key: 'alphabet-q1-fy26',
        company: 'Alphabet',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/alphabet-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 109.9,
          notes: ['+22% Y/Y'],
          items: [
            {
              id: 'ad_revenue',
              label: 'Ad Revenue',
              value: 77.3,
              notes: ['+16% Y/Y'],
              children: [
                { id: 'search_advertising', label: 'Search advertising', value: 60.4, notes: ['+19% Y/Y'] },
                { id: 'youtube', label: 'YouTube', value: 9.9, notes: ['+11% Y/Y'] },
                {
                  id: 'google_admob',
                  label: 'Google AdMob',
                  value: 7.0,
                  notes: ['(4%) Y/Y', 'AdSense & Google Ad Manager'],
                },
              ],
            },
            {
              id: 'google_play_devices',
              label: 'Google Play, devices, and subscriptions',
              value: 12.4,
              notes: ['+19% Y/Y', 'Fitbit, Google Nest, Pixel, YouTube Premium & TV'],
            },
            {
              id: 'google_cloud',
              label: 'Google Cloud',
              value: 20.0,
              notes: ['+63% Y/Y', 'Workspace, Enterprise Android, Chrome OS, Other APIs'],
            },
            { id: 'other_revenue', label: 'Other', value: 0.2 },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenues',
            value: 41.3,
            notes: ['Source chart cost-of-revenues detail sums to $41.2B due to rounding.'],
            items: [
              { id: 'cost_other', label: 'Other', value: 26.0 },
              { id: 'tac', label: 'TAC', value: 15.2 },
            ],
          },
          operatingExpenses: {
            total: 28.9,
            items: [
              { id: 'rnd', label: 'R&D', value: 17.0, notes: ['15% of revenue', '+0pp Y/Y'] },
              { id: 'sm', label: 'S&M', value: 7.6, notes: ['7% of revenue', '+0pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 4.3, notes: ['4% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 14.8 },
        },
        otherIncome: {
          total: 37.7,
          items: [{ id: 'other_income', label: 'Other', value: 37.7 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 68.6, notes: ['62% margin', '+3pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 39.7, notes: ['36% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 62.6, notes: ['57% margin', '+19pp Y/Y'] },
        },
      },
      {
        key: 'appfolio-q1-fy26',
        company: 'AppFolio',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/appfolio-q1-fy26.png',
        roundingTolerance: 0.65,
        revenue: {
          total: 262.214,
          notes: ['+20% Y/Y'],
          items: [
            {
              id: 'core_solutions',
              label: 'Core solutions',
              value: 58.222,
              notes: ['+18% Y/Y', 'Reported as Subscription Services by AppFolio.'],
            },
            { id: 'value_added_services', label: 'Value Added Services', value: 201.363, notes: ['+22% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 2.629, notes: ['(25%) Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 94.975 },
          operatingExpenses: {
            total: 116.491,
            items: [
              { id: 'rnd', label: 'R&D', value: 49.629, notes: ['19% of revenue', '(1pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 37.501, notes: ['14% of revenue', '+0pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 24.341, notes: ['9% of revenue', '(1pp) Y/Y'] },
              { id: 'depreciation', label: 'Depreciation', value: 5.02, notes: ['2% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 10.677 },
        },
        otherIncome: {
          total: 2.353,
          items: [
            {
              id: 'interest',
              label: 'Interest',
              value: 2.353,
              notes: ['Interest income, net plus other income, net; source chart labels the combined line as Interest.'],
            },
          ],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 167.239, notes: ['64% margin', '+0pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 50.748, notes: ['19% margin', '+4pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 42.424, notes: ['16% margin', '+2pp Y/Y'] },
        },
      },
      {
        key: 'arm-holdings-q4-fy26',
        company: 'Arm Holdings',
        period: 'Q4 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/arm-holdings-q4-fy26.png',
        roundingTolerance: 0.65,
        revenue: {
          total: 1490,
          notes: [
            '+20% Y/Y',
            'Source chart also shows revenue by customer type: External Customers $1,079M and Related parties $411M.',
          ],
          items: [
            { id: 'license_other', label: 'License & Other', value: 819, notes: ['+29% Y/Y', 'Support & Maintenance'] },
            { id: 'royalty', label: 'Royalty', value: 671, notes: ['+11% Y/Y', 'Percentage or fixed'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 32 },
          operatingExpenses: {
            total: 1020,
            items: [
              { id: 'rnd', label: 'R&D', value: 698, notes: ['47% of revenue', '+3pp Y/Y'] },
              { id: 'sga', label: 'SG&A', value: 322, notes: ['21% of revenue', '+1pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 168 },
        },
        otherIncome: {
          total: 43,
          items: [{ id: 'other', label: 'Other', value: 43 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1458, notes: ['98% margin', '+0pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 438, notes: ['29% margin', '(4pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 313, notes: ['21% margin', '+4pp Y/Y'] },
        },
      },
      {
        key: 'berkshire-hathaway-q1-fy26',
        company: 'Berkshire Hathaway',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/berkshire-hathaway-q1-fy26.png',
        roundingTolerance: 0.25,
        revenue: {
          total: 93.7,
          notes: ['+4% Y/Y'],
          items: [
            { id: 'insurance', label: 'Insurance', value: 25.3, notes: ['(0%) Y/Y', '22% margin'] },
            { id: 'bnsf', label: 'BNSF', value: 6.0, notes: ['+5% Y/Y', '30% margin'] },
            { id: 'bhe', label: 'BHE', value: 6.7, notes: ['+5% Y/Y', '11% margin'] },
            { id: 'pilot', label: 'Pilot', value: 11.2, notes: ['+8% Y/Y', '0% margin'] },
            { id: 'manufacturing', label: 'Manufacturing', value: 20.7, notes: ['+10% Y/Y', '15% margin'] },
            { id: 'mclane', label: 'McLane', value: 11.9, notes: ['(2%) Y/Y', '1% margin'] },
            { id: 'services_retailing', label: 'Services & retailing', value: 11.0, notes: ['+8% Y/Y', '10% margin'] },
            { id: 'other_revenue', label: 'Other', value: 0.9 },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 0,
            notes: ['Source chart does not show a separate cost-of-revenue or gross-profit layer.'],
          },
          operatingExpenses: {
            total: 81.3,
            items: [
              {
                id: 'operating_expenses',
                label: 'Operating costs and expenses',
                value: 81.3,
              },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 2.1 },
        },
        otherIncome: {
          total: 1.6,
          items: [{ id: 'other_income', label: 'Other', value: 1.6 }],
        },
        otherExpenses: {
          total: 1.6,
          items: [{ id: 'investment_losses', label: 'Investment losses', value: 1.6 }],
        },
        profit: {
          gross: {
            id: 'gross_profit',
            label: 'Gross profit',
            value: 93.7,
            notes: ['Modeled as revenue because the source chart flows revenue directly to operating profit and operating costs.'],
          },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 12.4, notes: ['13% margin', '(1pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 10.2 },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +4%'],
              items: [
                { id: 'insurance', label: '保险业务', notes: ['同比 (0%)', '利润率 22%'] },
                { id: 'bnsf', label: 'BNSF', notes: ['同比 +5%', '利润率 30%'] },
                { id: 'bhe', label: 'BHE', notes: ['同比 +5%', '利润率 11%'] },
                { id: 'pilot', label: 'Pilot 旅行中心', notes: ['同比 +8%', '利润率 0%'] },
                { id: 'manufacturing', label: '制造业务', notes: ['同比 +10%', '利润率 15%'] },
                { id: 'mclane', label: 'McLane 配送', notes: ['同比 (2%)', '利润率 1%'] },
                { id: 'services_retailing', label: '服务与零售', notes: ['同比 +8%', '利润率 10%'] },
                { id: 'other_revenue', label: '其他' },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['来源图未单独显示收入成本或毛利润层。'],
              },
              operatingExpenses: {
                items: [{ id: 'operating_expenses', label: '运营成本和费用' }],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other_income', label: '其他' }],
            },
            otherExpenses: {
              items: [{ id: 'investment_losses', label: '投资损失' }],
            },
            profit: {
              gross: {
                label: '毛利润',
                notes: ['因来源图将收入直接流向营业利润和运营成本，按收入建模。'],
              },
              operating: { label: '营业利润', notes: ['利润率 13%', '同比 (1 个百分点)'] },
              net: { label: '净利润' },
            },
          },
        },
      },
      {
        key: 'blackrock-q1-fy26',
        company: 'BlackRock',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/blackrock-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 6.7,
          notes: ['+27% Y/Y'],
          items: [
            {
              id: 'investment_advisory_fees',
              label: 'Investment advisory, fees & securities lending',
              value: 5.4,
              notes: ['+24% Y/Y'],
            },
            { id: 'performance_fees', label: 'Investment advisory performance fees', value: 0.3, notes: ['+353% Y/Y'] },
            { id: 'technology_services', label: 'Technology services', value: 0.5, notes: ['+22% Y/Y'] },
            { id: 'distribution_fees', label: 'Distribution fees', value: 0.4, notes: ['+21% Y/Y'] },
            { id: 'advisory_other', label: 'Advisory & other', value: 0.1, notes: ['+19% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 0,
            notes: ['Source chart does not show a separate gross profit or cost-of-revenue layer.'],
          },
          operatingExpenses: {
            total: 3.9,
            items: [
              { id: 'compensation_benefits', label: 'Compensation & benefits', value: 2.2 },
              { id: 'sales_asset_account_expenses', label: 'Sales, asset & Account expenses', value: 1.3 },
              { id: 'amortization_other', label: 'Amortization & other', value: 0.3 },
              { id: 'ga', label: 'G&A', value: 0.1 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.5 },
        },
        otherIncome: {
          total: 0.028,
          items: [{ id: 'other', label: 'Other', value: 0.028, valueText: '$28M' }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: {
            id: 'gross_profit',
            label: 'Gross profit',
            value: 6.7,
            notes: ['Source chart flows revenue directly to operating profit and operating expenses.'],
          },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['42% margin', '+10pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net income', value: 2.3, notes: ['35% margin', '+6pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +27%'],
              items: [
                { id: 'investment_advisory_fees', label: '投资顾问、费用及证券借贷', notes: ['同比 +24%'] },
                { id: 'performance_fees', label: '投资顾问绩效费', notes: ['同比 +353%'] },
                { id: 'technology_services', label: '技术服务', notes: ['同比 +22%'] },
                { id: 'distribution_fees', label: '分销费用', notes: ['同比 +21%'] },
                { id: 'advisory_other', label: '顾问及其他', notes: ['同比 +19%'] },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['来源图未单独显示毛利润或收入成本层。'],
              },
              operatingExpenses: {
                items: [
                  { id: 'compensation_benefits', label: '薪酬与福利' },
                  { id: 'sales_asset_account_expenses', label: '销售、资产及账户费用' },
                  { id: 'amortization_other', label: '摊销及其他' },
                  { id: 'ga', label: '管理费用' },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: {
                label: '毛利润',
                notes: ['来源图将收入直接流向营业利润和运营费用。'],
              },
              operating: { label: '营业利润', notes: ['利润率 42%', '同比 +10 个百分点'] },
              net: { label: '净利润', notes: ['利润率 35%', '同比 +6 个百分点'] },
            },
          },
        },
      },
      {
        key: 'cloudflare-q1-fy26',
        company: 'Cloudflare',
        period: 'Q1 FY26',
        periodNote: 'Quarter ended Mar. 31, 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/cloudflare-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 640,
          notes: ['+34% Y/Y', 'Reported revenue was $639.8M; source chart rounds to $640M.'],
          items: [
            { id: 'united_states', label: 'United States', value: 316, notes: ['+34% Y/Y'] },
            { id: 'emea', label: 'EMEA', value: 176, notes: ['+31% Y/Y'] },
            { id: 'apac', label: 'APAC', value: 99, notes: ['+34% Y/Y'] },
            { id: 'other', label: 'Other', value: 50, notes: ['+34% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 184 },
          operatingExpenses: {
            total: 518,
            items: [
              { id: 'sm', label: 'S&M', value: 272, notes: ['42% of revenue', '(2pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 151, notes: ['24% of revenue', '(0pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 95, notes: ['15% of revenue', '(3pp) Y/Y'] },
            ],
          },
          tax: { label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 456, notes: ['71% margin', '(5pp) Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -62, notes: ['(10%) margin', '+1pp Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -62,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月 31 日的季度',
            revenue: {
              notes: ['同比 +34%', '报告收入为 $639.8M；来源图四舍五入为 $640M。'],
              items: [
                { id: 'united_states', label: '美国', notes: ['同比 +34%'] },
                { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +31%'] },
                { id: 'apac', label: '亚太', notes: ['同比 +34%'] },
                { id: 'other', label: '其他', notes: ['同比 +34%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与营销', notes: ['占收入 42%', '同比 (2 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 24%', '同比 (0 个百分点)'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (3 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 71%', '同比 (5 个百分点)'] },
              operating: { label: '营业亏损', notes: ['利润率 (10%)', '同比 +1 个百分点'] },
              net: {
                label: '营业亏损',
                notes: ['来源图未单独显示净利润项目。'],
              },
            },
          },
        },
      },
      {
        key: 'coinbase-q1-fy26',
        company: 'Coinbase',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/coinbase-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1413,
          notes: ['(31%) Y/Y'],
          items: [
            {
              id: 'transaction_based',
              label: 'Transaction-based',
              value: 756,
              notes: ['(40%) Y/Y'],
              children: [
                { id: 'consumer', label: 'Consumer', value: 567, notes: ['(48%) Y/Y'] },
                { id: 'institutions', label: 'Institutions', value: 136, notes: ['+38% Y/Y'] },
                { id: 'other_transaction', label: 'Other', value: 53, notes: ['(22%) Y/Y'] },
              ],
            },
            {
              id: 'subscription_services',
              label: 'Subscription & Services',
              value: 584,
              notes: ['(14%) Y/Y'],
              children: [
                { id: 'stablecoin', label: 'Stablecoin', value: 305, notes: ['+11% Y/Y'] },
                { id: 'blockchain_rewards', label: 'Blockchain rewards', value: 101, notes: ['(49%) Y/Y'] },
                { id: 'interest_finance_fee_income', label: 'Interest & finance fee income', value: 68, notes: ['+8% Y/Y'] },
                { id: 'other_subscription', label: 'Other sub', value: 109, notes: ['(23%) Y/Y'] },
              ],
            },
            { id: 'other_revenue', label: 'Other', value: 74, notes: ['(25%) Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: 'Cost of revenue',
            value: 0,
            notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
          },
          operatingExpenses: {
            total: 1434,
            notes: ['Source chart operating-expense detail sums to $1,435M because the source chart rounds each item.'],
            items: [
              { id: 'technology', label: 'Technology', value: 526, notes: ['37% of revenue', '+20pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 376, notes: ['27% of revenue', '+7pp Y/Y'] },
              { id: 'sm', label: 'S&M', value: 267, notes: ['19% of revenue', '+7pp Y/Y'] },
              { id: 'transaction_costs', label: 'Transaction', value: 196, notes: ['14% of revenue', '(1pp) Y/Y'] },
              { id: 'other_costs', label: 'Other costs', value: 70 },
            ],
          },
          tax: { label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: {
            label: 'Revenue before operating expenses',
            value: 1413,
            notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
          },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -21, notes: ['(2%) margin', '(36pp) Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -21,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 (31%)'],
              items: [
                {
                  id: 'transaction_based',
                  label: '交易收入',
                  notes: ['同比 (40%)'],
                  children: [
                    { id: 'consumer', label: '消费者', notes: ['同比 (48%)'] },
                    { id: 'institutions', label: '机构', notes: ['同比 +38%'] },
                    { id: 'other_transaction', label: '其他', notes: ['同比 (22%)'] },
                  ],
                },
                {
                  id: 'subscription_services',
                  label: '订阅与服务',
                  notes: ['同比 (14%)'],
                  children: [
                    { id: 'stablecoin', label: '稳定币', notes: ['同比 +11%'] },
                    { id: 'blockchain_rewards', label: '区块链奖励', notes: ['同比 (49%)'] },
                    { id: 'interest_finance_fee_income', label: '利息和金融手续费收入', notes: ['同比 +8%'] },
                    { id: 'other_subscription', label: '其他订阅', notes: ['同比 (23%)'] },
                  ],
                },
                { id: 'other_revenue', label: '其他', notes: ['同比 (25%)'] },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['来源图未显示毛利润或收入成本小计。'],
              },
              operatingExpenses: {
                notes: ['来源图运营费用明细因逐项四舍五入合计为 $1,435M。'],
                items: [
                  { id: 'technology', label: '技术', notes: ['占收入 37%', '同比 +20 个百分点'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 27%', '同比 +7 个百分点'] },
                  { id: 'sm', label: '销售与营销', notes: ['占收入 19%', '同比 +7 个百分点'] },
                  { id: 'transaction_costs', label: '交易', notes: ['占收入 14%', '同比 (1 个百分点)'] },
                  { id: 'other_costs', label: '其他成本' },
                ],
              },
              tax: { label: '税费' },
            },
            profit: {
              gross: {
                label: '运营费用前收入',
                notes: ['来源图未显示毛利润或收入成本小计。'],
              },
              operating: { label: '营业亏损', notes: ['利润率 (2%)', '同比 (36 个百分点)'] },
              net: {
                label: '营业亏损',
                notes: ['来源图未单独显示净利润项目。'],
              },
            },
          },
        },
      },
      {
        key: 'coreweave-q1-fy26',
        company: 'CoreWeave',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/coreweave-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 2.078,
          notes: ['+112% Y/Y'],
          items: [
            { id: 'united_states', label: 'United States', value: 1.9, notes: ['+105% Y/Y'] },
            { id: 'rest_of_world', label: 'Rest of World', value: 0.178, notes: ['+236% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.716 },
          operatingExpenses: {
            total: 1.506,
            items: [
              {
                id: 'rnd',
                label: 'R&D',
                value: 1.273,
                notes: ['61% of revenue', '+4pp Y/Y', 'Reported by CoreWeave as technology and infrastructure.'],
              },
              {
                id: 'ga',
                label: 'G&A',
                value: 0.164,
                notes: ['8% of revenue', '(10pp) Y/Y', 'Source chart displays this rounded value as ($0.2M).'],
              },
              { id: 'sm', label: 'S&M', value: 0.069, notes: ['3% of revenue', '+2pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1.362, notes: ['66% margin', '(8pp) Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -0.144, notes: ['(7%) margin', '(4pp) Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -0.144,
            notes: ['No separate net loss line is shown in the source chart.'],
          },
        },
      },
      {
        key: 'costco-q3-fy26',
        company: 'Costco',
        period: 'Q3 FY26',
        periodNote: 'Ending May 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/costco-q3-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 70.5,
          notes: ['+12% Y/Y'],
          items: [
            { id: 'net_sales', label: 'Net Sales', value: 69.2, notes: ['+12% Y/Y'] },
            { id: 'membership_fee', label: 'Membership Fee', value: 1.4, notes: ['+11% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'merchandise_costs', label: 'Merchandise costs', value: 61.5 },
          operatingExpenses: {
            total: 6.2,
            items: [
              { id: 'operating_expenses', label: 'SG&A expenses', value: 6.2 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.7 },
        },
        otherIncome: {
          total: 0.1,
          items: [{ id: 'interest', label: 'Interest', value: 0.1 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['12.8% margin', '(0.2pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['4.0% margin', '(0.0pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 2.2, notes: ['3.1% margin', '+0.1pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第三季度',
            periodNote: '截至 2026 年 5 月',
            revenue: {
              notes: ['同比 +12%'],
              items: [
                { id: 'net_sales', label: '净销售额', notes: ['同比 +12%'] },
                { id: 'membership_fee', label: '会员费', notes: ['同比 +11%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '商品成本' },
              operatingExpenses: {
                items: [
                  { id: 'operating_expenses', label: '销售、一般及行政费用' },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'interest', label: '利息' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 12.8%', '同比 (0.2 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 4.0%', '同比 (0.0 个百分点)'] },
              net: { label: '净利润', notes: ['利润率 3.1%', '同比 +0.1 个百分点'] },
            },
          },
        },
      },
      {
        key: 'datadog-q1-fy26',
        company: 'Datadog',
        period: 'Q1 FY26',
        periodNote: 'Quarter ended Mar. 31, 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/datadog-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1006,
          notes: ['+32% Y/Y'],
          items: [
            { id: 'north_america', label: 'North America', value: 724, notes: ['+36% Y/Y'] },
            { id: 'international', label: 'International', value: 282, notes: ['+24% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 209 },
          operatingExpenses: {
            total: 790,
            items: [
              { id: 'rnd', label: 'R&D', value: 435, notes: ['43% of revenue', '(2pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 280, notes: ['28% of revenue', '(0pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 75, notes: ['7% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 6 },
        },
        otherIncome: {
          total: 52,
          items: [{ id: 'other', label: 'Other', value: 52 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 797, notes: ['79% margin', '(0pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 7, notes: ['1% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 53, notes: ['5% margin', '+6pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月 31 日的季度',
            revenue: {
              notes: ['同比 +32%'],
              items: [
                { id: 'north_america', label: '北美', notes: ['同比 +36%'] },
                { id: 'international', label: '国际', notes: ['同比 +24%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'rnd', label: '研发', notes: ['占收入 43%', '同比 (2 个百分点)'] },
                  { id: 'sm', label: '销售与营销', notes: ['占收入 28%', '同比 (0 个百分点)'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 7%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 79%', '同比 (0 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 1%', '同比 +2 个百分点'] },
              net: { label: '净利润', notes: ['利润率 5%', '同比 +6 个百分点'] },
            },
          },
        },
      },
      {
        key: 'digital-ocean-q1-fy26',
        company: 'DigitalOcean',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/digital-ocean-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 258,
          notes: ['+22% Y/Y'],
          items: [
            { id: 'north_america', label: 'North America', value: 113, notes: ['+19% Y/Y'] },
            { id: 'europe', label: 'Europe', value: 62, notes: ['(14%) Y/Y'] },
            { id: 'asia', label: 'Asia', value: 57, notes: ['(8%) Y/Y'] },
            { id: 'other', label: 'Other', value: 26, notes: ['(9%) Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 113 },
          operatingExpenses: {
            total: 108,
            notes: ['Source chart rounds R&D, G&A, and S&M labels; displayed components sum to $109M.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 49, notes: ['19% of revenue', '+0pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 38, notes: ['15% of revenue', '(1pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 22, notes: ['8% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 9 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 12,
          items: [{ id: 'interest', label: 'Interest', value: 12 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 145, notes: ['56% margin', '(5pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 37, notes: ['14% margin', '(3pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 16, notes: ['6% margin', '(12pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +22%'],
              items: [
                { id: 'north_america', label: '北美', notes: ['同比 +19%'] },
                { id: 'europe', label: '欧洲', notes: ['同比 (14%)'] },
                { id: 'asia', label: '亚洲', notes: ['同比 (8%)'] },
                { id: 'other', label: '其他', notes: ['同比 (9%)'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['来源图表对 R&D、G&A 和 S&M 标签取整；显示的组成项合计为 $109M。'],
                items: [
                  { id: 'rnd', label: '研发', notes: ['占收入 19%', '同比 +0 个百分点'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                  { id: 'sm', label: '销售与营销', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherExpenses: {
              items: [{ id: 'interest', label: '利息' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 56%', '同比 (5 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 14%', '同比 (3 个百分点)'] },
              net: { label: '净利润', notes: ['利润率 6%', '同比 (12 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'disney-q2-fy26-by-segment',
        company: 'Disney',
        period: 'Q2 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/disney-q2-fy26-by-segment.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 25.168,
          notes: ['+7% Y/Y'],
          items: [
            {
              id: 'entertainment_total',
              label: 'Entertainment',
              value: 11.715,
              notes: ['+10% Y/Y'],
              children: [
                { id: 'subscription', label: 'Subscription', value: 7.8, notes: ['+14% Y/Y'] },
                { id: 'advertising', label: 'Advertising', value: 1.7, notes: ['+5% Y/Y'] },
                { id: 'content_sales_licensing', label: 'Content Sales Licensing', value: 1.7, notes: ['+8% Y/Y'] },
                { id: 'entertainment_other', label: 'Other', value: 0.5, notes: ['(18%) Y/Y'] },
              ],
            },
            { id: 'sports', label: 'Sports', value: 4.609, notes: ['+2% Y/Y'] },
            {
              id: 'experiences_total',
              label: 'Experiences',
              value: 9.487,
              notes: ['+7% Y/Y'],
              children: [
                { id: 'parks_experiences', label: 'Parks & Experiences', value: 8.5, notes: ['+7% Y/Y'] },
                { id: 'consumer_products', label: 'Consumer Products', value: 1.0, notes: ['+3% Y/Y'] },
              ],
            },
            {
              label: 'Eliminations',
              value: -0.643,
              notes: ['Intersegment eliminations shown as ($0.7B) in the source chart.'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            label: 'Cost of revenue',
            value: 0,
            notes: ['The source chart is a segment view and does not show a separate gross-profit or cost-of-revenue layer.'],
          },
          operatingExpenses: {
            total: 20.565,
            notes: ['Derived as revenue less total segment operating income; shown in the source chart as Segment Costs & expenses.'],
            items: [
              { id: 'operating_expenses', label: 'Segment Costs & expenses', value: 20.565 },
            ],
          },
          tax: {
            label: 'Tax',
            value: 0,
            notes: ['The source chart does not show tax in this segment operating income view.'],
          },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: {
            id: 'revenue',
            label: 'Revenue',
            value: 25.168,
            notes: ['Used as the gross layer because the source chart is a segment operating income bridge.'],
          },
          operating: {
            id: 'segment_operating_profit',
            label: 'Segment operating profit',
            value: 4.603,
            notes: ['18% margin', '(1pp) Y/Y'],
            items: [
              { id: 'entertainment_profit', label: 'Entertainment', value: 1.336, notes: ['11% margin', '(0pp) Y/Y'] },
              { id: 'sports_profit', label: 'Sports', value: 0.652, notes: ['14% margin', '(1pp) Y/Y'] },
              { id: 'experiences_profit', label: 'Experiences', value: 2.615, notes: ['28% margin', '(0pp) Y/Y'] },
            ],
          },
          net: {
            id: 'segment_operating_profit',
            label: 'Segment operating profit',
            value: 4.603,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第二季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +7%'],
              items: [
                {
                  id: 'entertainment_total',
                  label: '娱乐',
                  notes: ['同比 +10%'],
                  children: [
                    { id: 'subscription', label: '订阅', notes: ['同比 +14%'] },
                    { id: 'advertising', label: '广告', notes: ['同比 +5%'] },
                    { id: 'content_sales_licensing', label: '内容销售授权', notes: ['同比 +8%'] },
                    { id: 'entertainment_other', label: '其他', notes: ['同比 (18%)'] },
                  ],
                },
                { id: 'sports', label: '体育', notes: ['同比 +2%'] },
                {
                  id: 'experiences_total',
                  label: '体验',
                  notes: ['同比 +7%'],
                  children: [
                    { id: 'parks_experiences', label: '乐园及体验', notes: ['同比 +7%'] },
                    { id: 'consumer_products', label: '消费品', notes: ['同比 +3%'] },
                  ],
                },
                {
                  label: '抵销',
                  notes: ['来源图表显示分部间抵销为 ($0.7B)。'],
                },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['来源图表为分部视图，未显示单独的毛利润或收入成本层级。'],
              },
              operatingExpenses: {
                notes: ['按收入减去总分部营业利润推导；来源图表显示为 Segment Costs & expenses。'],
                items: [
                  { id: 'operating_expenses', label: '分部成本及费用' },
                ],
              },
              tax: {
                label: '税费',
                notes: ['来源图表的分部营业利润视图未显示税费。'],
              },
            },
            profit: {
              gross: {
                label: '收入',
                notes: ['由于来源图表为分部营业利润桥图，这里将收入作为总利润桥层级。'],
              },
              operating: {
                label: '分部营业利润',
                notes: ['利润率 18%', '同比 (1 个百分点)'],
                items: [
                  { id: 'entertainment_profit', label: '娱乐', notes: ['利润率 11%', '同比 (0 个百分点)'] },
                  { id: 'sports_profit', label: '体育', notes: ['利润率 14%', '同比 (1 个百分点)'] },
                  { id: 'experiences_profit', label: '体验', notes: ['利润率 28%', '同比 (0 个百分点)'] },
                ],
              },
              net: {
                label: '分部营业利润',
                notes: ['来源图表未显示单独的净利润项目。'],
              },
            },
          },
        },
      },
      {
        key: 'duolingo-q1-fy26',
        company: 'Duolingo',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/duolingo-q1-fy26.png',
        roundingTolerance: 0.65,
        revenue: {
          total: 291.967,
          notes: ['+27% Y/Y'],
          items: [
            { id: 'subscription', label: 'Subscription', value: 250.908, notes: ['+31% Y/Y'] },
            {
              id: 'other_revenue',
              label: 'Other',
              value: 41.059,
              notes: [
                '+3% Y/Y',
                'Comprises advertising $20.614M, Duolingo English Test $11.317M, in-app purchases $8.446M, and other $0.682M.',
              ],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 78.871 },
          operatingExpenses: {
            total: 168.569,
            items: [
              { id: 'rnd', label: 'R&D', value: 82.974, notes: ['28% of revenue', '(2pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 39.249, notes: ['13% of revenue', '+2pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 46.346, notes: ['16% of revenue', '(3pp) Y/Y'] },
            ],
          },
          tax: {
            id: 'tax_other',
            label: 'Tax & Other',
            value: 12.878,
            notes: ['Combines provision for income taxes of $12.092M with other expense, net of $0.786M.'],
          },
        },
        otherIncome: {
          total: 11.811,
          items: [{ id: 'interest', label: 'Interest', value: 11.811 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 213.096, notes: ['73% margin', '+2pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 44.527, notes: ['15% margin', '+5pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 43.46, notes: ['15% margin', '(0pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +27%'],
              items: [
                { id: 'subscription', label: '订阅', notes: ['同比 +31%'] },
                {
                  id: 'other_revenue',
                  label: '其他',
                  notes: ['同比 +3%', '包括广告 $20.614M、Duolingo English Test $11.317M、应用内购买 $8.446M 和其他 $0.682M。'],
                },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'rnd', label: '研发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
                  { id: 'sm', label: '销售与营销', notes: ['占收入 13%', '同比 +2 个百分点'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 16%', '同比 (3 个百分点)'] },
                ],
              },
              tax: {
                label: '税费及其他',
                notes: ['合并 $12.092M 所得税费用与 $0.786M 其他费用净额。'],
              },
            },
            otherIncome: {
              items: [{ id: 'interest', label: '利息' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 73%', '同比 +2 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 15%', '同比 +5 个百分点'] },
              net: { label: '净利润', notes: ['利润率 15%', '同比 (0 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'elastic-q4-fy26',
        company: 'Elastic',
        period: 'Q4 FY26',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/elastic-q4-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 451,
          notes: ['+16% Y/Y', 'Elastic reported total revenue of $450.681M; source chart rounds to $451M.'],
          items: [
            {
              id: 'subscription',
              label: 'Subscription',
              value: 423,
              notes: [
                '+17% Y/Y',
                'Elastic reported subscription revenue of $422.446M; source chart displays $423M while visible components sum to $422M.',
              ],
              children: [
                { id: 'cloud', label: 'Cloud', value: 217, notes: ['+20% Y/Y', '48% of revenue', '+2pp Y/Y'] },
                { id: 'other_subscription', label: 'Other subscription', value: 205, notes: ['+14% Y/Y'] },
              ],
            },
            { id: 'service', label: 'Service', value: 28, notes: ['+6% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 111 },
          operatingExpenses: {
            total: 356,
            items: [
              { id: 'sm', label: 'S&M', value: 186, notes: ['41% of revenue', '(0pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 120, notes: ['27% of revenue', '+2pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 50, notes: ['11% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: {
            label: 'Tax',
            value: 0,
            notes: ['No separate tax line is shown in the source chart.'],
          },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 340, notes: ['75% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -16, notes: ['(4%) margin', '(0pp) Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -16,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第四季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +16%', 'Elastic 披露总收入为 $450.681M；来源图四舍五入为 $451M。'],
              items: [
                {
                  id: 'subscription',
                  label: '订阅',
                  notes: [
                    '同比 +17%',
                    'Elastic 披露订阅收入为 $422.446M；来源图显示 $423M，而可见组成项合计为 $422M。',
                  ],
                  children: [
                    { id: 'cloud', label: '云', notes: ['同比 +20%', '占收入 48%', '同比 +2 个百分点'] },
                    { id: 'other_subscription', label: '其他订阅', notes: ['同比 +14%'] },
                  ],
                },
                { id: 'service', label: '服务', notes: ['同比 +6%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与市场', notes: ['占收入 41%', '同比 (0 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 +2 个百分点'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                ],
              },
              tax: {
                label: '税费',
                notes: ['来源图未显示单独的税费项目。'],
              },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 75%', '同比 +1 个百分点'] },
              operating: { label: '营业亏损', notes: ['利润率 (4%)', '同比 (0 个百分点)'] },
              net: {
                label: '营业亏损',
                notes: ['来源图未单独显示净利润项目。'],
              },
            },
          },
        },
      },
      {
        key: 'figma-q1-fy26',
        company: 'Figma',
        period: 'Q1 FY26',
        periodNote: 'Quarter ended Mar. 31, 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/figma-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 333,
          notes: ['+46% Y/Y'],
          items: [
            { id: 'united_states', label: 'United States', value: 155, notes: ['+44% Y/Y'] },
            { id: 'international', label: 'International', value: 178, notes: ['+48% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 69,
            notes: ['Gross profit plus cost of revenue sums to $334M because the source chart rounds visible values.'],
          },
          operatingExpenses: {
            total: 402,
            notes: ['Visible operating-expense line items sum to $403M because the source chart rounds values.'],
            items: [
              { id: 'rnd', label: 'Research & development', value: 173, notes: ['52% of revenue', '+21pp Y/Y'] },
              { id: 'sm', label: 'Sales & marketing', value: 126, notes: ['38% of revenue', '+7pp Y/Y'] },
              { id: 'ga', label: 'General & Admin', value: 104, notes: ['31% of revenue', '+18pp Y/Y'] },
            ],
          },
          tax: {
            label: 'Tax',
            value: 0,
            notes: ['No separate tax line is shown in the source chart.'],
          },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 265, notes: ['79% margin', '(12pp) Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -137, notes: ['(41%) margin', '(59pp) Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -137,
            notes: ['No separate net income or net loss line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月 31 日的季度',
            revenue: {
              notes: ['同比 +46%'],
              items: [
                { id: 'united_states', label: '美国', notes: ['同比 +44%'] },
                { id: 'international', label: '国际', notes: ['同比 +48%'] },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['毛利润加收入成本为 $334M，差异来自来源图可见数值四舍五入。'],
              },
              operatingExpenses: {
                notes: ['可见营业费用明细合计为 $403M，差异来自来源图数值四舍五入。'],
                items: [
                  { id: 'rnd', label: '研发', notes: ['占收入 52%', '同比 +21 个百分点'] },
                  { id: 'sm', label: '销售与营销', notes: ['占收入 38%', '同比 +7 个百分点'] },
                  { id: 'ga', label: '一般及行政', notes: ['占收入 31%', '同比 +18 个百分点'] },
                ],
              },
              tax: {
                label: '税费',
                notes: ['来源图未显示单独的税费项目。'],
              },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 79%', '同比 (12 个百分点)'] },
              operating: { label: '营业亏损', notes: ['利润率 (41%)', '同比 (59 个百分点)'] },
              net: {
                label: '营业亏损',
                notes: ['来源图未单独显示净利润或净亏损项目。'],
              },
            },
          },
        },
      },
      {
        key: 'dell-q1-fy27',
        company: 'Dell',
        period: 'Q1 FY27',
        periodNote: 'Ending May 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/dell-q1-fy27.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 43.842,
          notes: ['+88% Y/Y'],
          items: [
            {
              id: 'isg',
              label: 'ISG (Infrastructure)',
              value: 29.009,
              notes: ['+181% Y/Y'],
              children: [
                { id: 'ai_optimized_servers', label: 'AI-optimized Servers', value: 16.132, notes: ['+757% Y/Y'] },
                {
                  id: 'traditional_servers_networking',
                  label: 'Traditional Servers & Networking',
                  value: 8.543,
                  notes: ['+92% Y/Y'],
                },
                { id: 'storage', label: 'Storage', value: 4.334, notes: ['+8% Y/Y'] },
              ],
            },
            {
              id: 'csg',
              label: 'CSG (Client)',
              value: 14.609,
              notes: ['+17% Y/Y'],
              children: [
                { id: 'commercial', label: 'Commercial', value: 13.02, notes: ['+18% Y/Y'] },
                { id: 'consumer', label: 'Consumer', value: 1.589, notes: ['+9% Y/Y'] },
              ],
            },
            { id: 'other_revenue', label: 'Other', value: 0.224, notes: ['(59%) Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 36.06 },
          operatingExpenses: {
            total: 4.126,
            items: [
              { id: 'sga', label: 'SG&A', value: 3.143, notes: ['7% of revenue', '(6pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 0.983, notes: ['2% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.51 },
        },
        otherIncome: {
          total: 0.292,
          items: [{ id: 'other', label: 'Other', value: 0.292 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 7.782, notes: ['18% margin', '(3pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 3.656, notes: ['8% margin', '+3pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 3.438, notes: ['8% margin', '+4pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 5 月',
            revenue: {
              notes: ['同比 +88%'],
              items: [
                {
                  id: 'isg',
                  label: 'ISG（基础设施）',
                  notes: ['同比 +181%'],
                  children: [
                    { id: 'ai_optimized_servers', label: 'AI 优化服务器', notes: ['同比 +757%'] },
                    { id: 'traditional_servers_networking', label: '传统服务器与网络', notes: ['同比 +92%'] },
                    { id: 'storage', label: '存储', notes: ['同比 +8%'] },
                  ],
                },
                {
                  id: 'csg',
                  label: 'CSG（客户端）',
                  notes: ['同比 +17%'],
                  children: [
                    { id: 'commercial', label: '商业', notes: ['同比 +18%'] },
                    { id: 'consumer', label: '消费者', notes: ['同比 +9%'] },
                  ],
                },
                { id: 'other_revenue', label: '其他', notes: ['同比 (59%)'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sga', label: '销售、一般及行政', notes: ['占收入 7%', '同比 (6 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 2%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 18%', '同比 (3 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 8%', '同比 +3 个百分点'] },
              net: { label: '净利润', notes: ['利润率 8%', '同比 +4 个百分点'] },
            },
          },
        },
      },
      {
        key: 'goldman-sachs-q1-fy26',
        company: 'Goldman Sachs',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/goldman-sachs-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 17.2,
          notes: ['+14% Y/Y'],
          items: [
            { id: 'global_banking_markets', label: 'Global Banking & Markets', value: 12.7, notes: ['+19% Y/Y', '37% net margin'] },
            { id: 'asset_wealth_management', label: 'Asset & Wealth Management', value: 4.1, notes: ['+10% Y/Y', '20% net margin'] },
            { id: 'platform_solutions', label: 'Platform Solutions', value: 0.4, notes: ['(33%) Y/Y', '16% net margin'] },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'provision_for_credit_loss',
            label: 'Provision for credit loss',
            value: 0.3,
            notes: ['Modeled as a pre-pretax cost so the generic SSOT arithmetic matches the banking source chart.'],
          },
          operatingExpenses: {
            total: 10.4,
            notes: ['Operating expense line items sum to $10.5B because the source chart rounds each item.'],
            items: [
              { id: 'compensation_benefits', label: 'Compensation & benefits', value: 5.4 },
              { id: 'transaction_based', label: 'Transaction based', value: 2.5 },
              { id: 'market_development', label: 'Market development', value: 0.2 },
              { id: 'communication_technology', label: 'Communication, Technology', value: 0.6 },
              { id: 'da', label: 'D&A', value: 0.5 },
              { id: 'occupancy', label: 'Occupancy', value: 0.3 },
              { id: 'professional_fees', label: 'Professional fees', value: 0.4 },
              { id: 'other', label: 'Other', value: 0.6 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.9 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: {
            id: 'gross_profit',
            label: 'Revenue after credit loss provision',
            value: 16.9,
            notes: ['Balancing subtotal; not labeled separately in the source chart.'],
          },
          operating: { id: 'pretax_income', label: 'Pretax income', value: 6.5 },
          net: { id: 'net_income', label: 'Net income', value: 5.6, notes: ['+19% Y/Y'] },
        },
      },
      {
        key: 'tesla-q1-fy26',
        company: 'Tesla',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/tesla-q1-fy26.png',
        roundingTolerance: 0.25,
        revenue: {
          total: 22.4,
          notes: ['+16% Y/Y'],
          items: [
            {
              id: 'auto',
              label: 'Auto',
              value: 16.2,
              notes: ['+16% Y/Y'],
              children: [
                { id: 'auto_sales', label: 'Auto sales', value: 15.5, notes: ['+20% Y/Y'] },
                { id: 'regulatory_credits', label: 'Regulatory credits', value: 0.4, notes: ['(36%) Y/Y'] },
                { id: 'leasing', label: 'Leasing', value: 0.4, notes: ['(15%) Y/Y'] },
              ],
            },
            {
              id: 'energy_generation_storage',
              label: 'Energy generation & storage',
              value: 2.4,
              notes: ['(12%) Y/Y'],
            },
            { id: 'services', label: 'Services', value: 3.7, notes: ['+42% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.7 },
          operatingExpenses: {
            total: 3.8,
            notes: ['Source chart rounds R&D and SG&A to $3.8B total operating expenses.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 1.9, notes: ['9% of revenue', '+1pp Y/Y'] },
              { id: 'sga', label: 'SG&A', value: 1.8, notes: ['8% of revenue', '+2pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.3 },
        },
        otherIncome: {
          total: 0.3,
          items: [{ id: 'interest', label: 'Interest', value: 0.3 }],
        },
        otherExpenses: {
          total: 0.5,
          items: [{ id: 'other', label: 'Other', value: 0.5 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 4.7, notes: ['21% margin', '+5pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.9, notes: ['4% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['2% margin', '+0pp Y/Y'] },
        },
      },
      {
        key: 'spacex-fy25',
        company: 'SpaceX',
        period: 'FY25',
        periodNote: 'Ending Dec. 2025',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/spacex-fy25.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 18.7,
          notes: ['+33% Y/Y'],
          items: [
            { id: 'space', label: 'Space', value: 4.1, notes: ['+8% Y/Y', '67% gross margin', '(16%) operating margin'] },
            {
              id: 'connectivity',
              label: 'Connectivity',
              value: 11.4,
              notes: ['+50% Y/Y', '48% gross margin', '39% operating margin'],
            },
            { id: 'ai', label: 'AI', value: 3.2, notes: ['+22% Y/Y', '32% gross margin', '(198%) operating margin'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 9.5 },
          operatingExpenses: {
            total: 11.8,
            notes: ['Source chart reports operating expense breakdown rounded to $11.8B total.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 8.6, notes: ['46% of revenue', '+22pp Y/Y'] },
              { id: 'sga', label: 'SG&A', value: 2.6, notes: ['14% of revenue', '+1pp Y/Y'] },
              { id: 'restructuring', label: 'Restructuring', value: 0.5, notes: ['3% of revenue', '+1pp Y/Y'] },
              { id: 'impairment', label: 'Impairment', value: 0.038, notes: ['0% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 9.2, notes: ['49% margin', '+6pp Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -2.6, notes: ['(14%) margin', '(17pp) Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -2.6,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2025 财年',
            periodNote: '截至 2025 年 12 月',
            revenue: {
              notes: ['同比 +33%'],
              items: [
                { id: 'space', label: '航天', notes: ['同比 +8%', '毛利率 67%', '营业利润率 (16%)'] },
                { id: 'connectivity', label: '连接服务', notes: ['同比 +50%', '毛利率 48%', '营业利润率 39%'] },
                { id: 'ai', label: 'AI', notes: ['同比 +22%', '毛利率 32%', '营业利润率 (198%)'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['来源图将运营费用明细四舍五入列示为 $11.8B 合计。'],
                items: [
                  { id: 'rnd', label: '研发', notes: ['占收入 46%', '同比 +22 个百分点'] },
                  { id: 'sga', label: '销售、一般及行政', notes: ['占收入 14%', '同比 +1 个百分点'] },
                  { id: 'restructuring', label: '重组费用', notes: ['占收入 3%', '同比 +1 个百分点'] },
                  { id: 'impairment', label: '减值', notes: ['占收入 0%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 49%', '同比 +6 个百分点'] },
              operating: { label: '营业亏损', notes: ['利润率 (14%)', '同比 (17 个百分点)'] },
              net: {
                label: '营业亏损',
                notes: ['来源图未单独显示净利润项目。'],
              },
            },
          },
        },
      },
      {
        key: 'starbucks-q2-fy26',
        company: 'Starbucks',
        period: 'Q2 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/starbucks-q2-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 9.5,
          notes: ['+9% Y/Y'],
          items: [
            { id: 'beverage', label: 'Beverage', value: 5.7, notes: ['+7% Y/Y'] },
            { id: 'food', label: 'Food', value: 1.8, notes: ['+8% Y/Y'] },
            {
              id: 'other_revenue',
              label: 'Other',
              value: 2.0,
              notes: ['+15% Y/Y', 'Packaged beverages, royalty and licensing revenue, ingredients'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 7.6,
            notes: ['Source chart presents cost of revenue as Store opex ($4.4B) plus Product & distribution ($3.2B).'],
            items: [
              { id: 'store_opex', label: 'Store opex', value: 4.4 },
              { id: 'product_distribution', label: 'Product & distribution', value: 3.2 },
            ],
          },
          operatingExpenses: {
            total: 1.1,
            notes: ['Rounded source chart line items sum to $1.125B including $25M restructuring.'],
            items: [
              { id: 'ga', label: 'General & administrative', value: 0.6 },
              { id: 'depreciation_amortization', label: 'Depreciation & amortization', value: 0.4 },
              { id: 'other_opex', label: 'Other opex', value: 0.1 },
              { id: 'restructuring', label: 'Restructuring', value: 0.025 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.2 },
        },
        otherIncome: {
          total: 0.1,
          items: [{ id: 'other_income', label: 'Other', value: 0.1 }],
        },
        otherExpenses: {
          total: 0.1,
          items: [{ id: 'other_expense', label: 'Other', value: 0.1 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1.9, notes: ['20% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.8, notes: ['9% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['5% margin', '+1pp Y/Y'] },
        },
      },
      {
        key: 'tsmc-q1-fy26',
        company: 'TSMC',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/tsmc-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 35.9,
          notes: ['+41% Y/Y'],
          items: [
            { id: 'hpc', label: 'High Performance Computing', value: 21.9, notes: ['61% of revenue', '+2pp Y/Y'] },
            { id: 'smartphones', label: 'Smartphones', value: 9.3, notes: ['26% of revenue', '(2pp) Y/Y'] },
            { id: 'iot', label: 'Internet of Things', value: 2.2, notes: ['6% of revenue', '+1pp Y/Y'] },
            { id: 'automotive', label: 'Automotive', value: 1.4, notes: ['4% of revenue', '(1pp) Y/Y'] },
            { id: 'dce', label: 'Digital Consumer Electronics', value: 0.4, notes: ['1% of revenue', 'Flat Y/Y'] },
            { id: 'others', label: 'Others', value: 0.7, notes: ['2% of revenue', 'Flat Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.1 },
          operatingExpenses: {
            total: 3.0,
            notes: ['R&D and SG&A line items sum to $2.9B; the remaining $0.1B is rounding residual in the source chart.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 2.1 },
              { id: 'sga', label: 'SG&A', value: 0.8 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 3.6 },
        },
        otherIncome: {
          total: 0.9,
          items: [{ id: 'other', label: 'Other', value: 0.9 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 23.8, notes: ['66% margin', '+7pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 20.9, notes: ['58% margin', '+10pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 18.1, notes: ['51% margin', '+8pp Y/Y'] },
        },
      },
      {
        key: 'tencent-q1-fy26',
        company: 'Tencent',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: 'RMB',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/tencent-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 196.5,
          notes: ['+9% Y/Y'],
          items: [
            { id: 'gaming', label: 'Gaming', value: 64.2, notes: ['+8% Y/Y'] },
            { id: 'social_networks', label: 'Social Networks', value: 31.9, notes: ['(2%) Y/Y'] },
            { id: 'marketing_services', label: 'Marketing Services', value: 38.2, notes: ['+20% Y/Y'] },
            { id: 'fintech_business_services', label: 'FinTech & Business Services', value: 59.9, notes: ['+9% Y/Y'] },
            { id: 'others', label: 'Others', value: 2.3, notes: ['+103% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 85.2 },
          operatingExpenses: {
            total: 43.9,
            notes: ['Source chart shows other operating gains as an offset before operating profit.'],
            items: [
              { id: 'rnd', label: 'Research & development', value: 22.6, notes: ['12% of revenue', '+1pp Y/Y'] },
              { id: 'sm', label: 'Sales & marketing', value: 11.3, notes: ['6% of revenue', '+1pp Y/Y'] },
              { id: 'ga', label: 'General & admin', value: 11.3, notes: ['6% of revenue', '(2pp) Y/Y'] },
              { id: 'other_operating_gains', label: 'Other operating gains', value: -1.3 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 14.6 },
        },
        otherIncome: {
          total: 6.6,
          items: [
            {
              id: 'investments',
              label: 'Investments',
              value: 6.6,
              notes: ['Aggregated non-operating investment, interest, finance, and associate/JV line items.'],
            },
          ],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 111.3, notes: ['57% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 67.4, notes: ['34% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 59.4, notes: ['30% margin', '+3pp Y/Y'] },
        },
      },
      {
        key: 'reddit-q1-fy26',
        company: 'Reddit',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/reddit-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 663,
          notes: ['+69% Y/Y'],
          items: [
            { id: 'advertising', label: 'Advertising', value: 625, notes: ['+74% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 39, notes: ['+15% Y/Y', 'Data API Access', 'Model Training'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 56 },
          operatingExpenses: {
            total: 424,
            items: [
              { id: 'rnd', label: 'Research & development', value: 207, notes: ['31% of revenue', '(18pp) Y/Y'] },
              { id: 'sm', label: 'Sales & marketing', value: 152, notes: ['23% of revenue', '(0pp) Y/Y'] },
              { id: 'ga', label: 'General & admin', value: 66, notes: ['10% of revenue', '(8pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 2 },
        },
        otherIncome: {
          total: 23,
          items: [{ id: 'other_income', label: 'Other', value: 23 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 607, notes: ['92% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 183, notes: ['28% margin', '+27pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 204, notes: ['31% margin', '+24pp Y/Y'] },
        },
      },
      {
        key: 'robinhood-q1-fy26',
        company: 'Robinhood',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/robinhood-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1067,
          notes: ['+15% Y/Y'],
          items: [
            {
              id: 'transaction_based',
              label: 'Transaction-based',
              value: 623,
              notes: ['+7% Y/Y'],
              children: [
                { id: 'options', label: 'Options', value: 260, notes: ['+8% Y/Y'] },
                { id: 'crypto', label: 'Crypto', value: 134, notes: ['(47%) Y/Y'] },
                { id: 'equities', label: 'Equities', value: 82, notes: ['+46% Y/Y'] },
                { id: 'other_transactions', label: 'Other transactions', value: 147, notes: ['+320% Y/Y'] },
              ],
            },
            { id: 'net_interest', label: 'Net interest', value: 359, notes: ['+24% Y/Y'] },
            { id: 'other_revenue', label: 'Other revenue', value: 85, notes: ['+57% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { label: 'Cost of revenue', value: 0, notes: ['No cost-of-revenue subtotal is shown in the source chart.'] },
          operatingExpenses: {
            total: 656,
            items: [
              { id: 'technology_development', label: 'Technology & development', value: 241 },
              { id: 'ga', label: 'G&A', value: 174 },
              { id: 'marketing', label: 'Marketing', value: 107 },
              { id: 'operations', label: 'Operations', value: 74, notes: ['Source chart aggregates operations and provision for credit losses.'] },
              { id: 'brokerage_transaction', label: 'Brokerage & transaction', value: 60 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 65 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { label: 'Revenue before operating expenses', value: 1067 },
          operating: { id: 'pretax_income', label: 'Pretax income', value: 411 },
          net: { id: 'net_profit', label: 'Net income', value: 346 },
        },
      },
      {
        key: 'roblox-q1-fy26',
        company: 'Roblox',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/roblox-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1442,
          notes: ['+39% Y/Y'],
          items: [
            { id: 'north_america', label: 'North America', value: 838, notes: ['+29% Y/Y'] },
            { id: 'europe', label: 'Europe', value: 295, notes: ['+52% Y/Y'] },
            { id: 'apac', label: 'APAC', value: 169, notes: ['+55% Y/Y'] },
            { id: 'rest_of_world', label: 'Rest of world', value: 140, notes: ['+64% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 294 },
          operatingExpenses: {
            total: 1442,
            items: [
              { id: 'developer_fees', label: 'Developer fees', value: 423, notes: ['29% of revenue', '+2pp Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 422, notes: ['29% of revenue', '(7pp) Y/Y'] },
              { id: 'infrastructure', label: 'Infrastructure', value: 324, notes: ['22% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 209, notes: ['14% of revenue', '+3pp Y/Y'] },
              { id: 'sm', label: 'S&M', value: 64, notes: ['4% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1148, notes: ['80% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -294, notes: ['(20%) margin', '+4pp Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -294,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
      },
      {
        key: 'snap-q1-fy26',
        company: 'Snap',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/snap-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1529,
          notes: ['+12% Y/Y'],
          items: [
            { id: 'north_america', label: 'North America', value: 851, notes: ['+2% Y/Y'] },
            { id: 'europe', label: 'Europe', value: 324, notes: ['+45% Y/Y'] },
            { id: 'rest_of_world', label: 'Rest of world', value: 354, notes: ['+15% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 665 },
          operatingExpenses: {
            total: 938,
            items: [
              { id: 'rnd', label: 'R&D', value: 478, notes: ['31% of revenue', '+0pp Y/Y'] },
              { id: 'sm', label: 'S&M', value: 239, notes: ['16% of revenue', '(3pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 221, notes: ['14% of revenue', '(3pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 864, notes: ['57% margin', '+3pp Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -74, notes: ['(5%) margin', '+9pp Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -74,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +12%'],
              items: [
                { label: '北美', notes: ['同比 +2%'] },
                { label: '欧洲', notes: ['同比 +45%'] },
                { label: '世界其他地区', notes: ['同比 +15%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { label: '研发', notes: ['占收入 31%', '同比 +0 个百分点'] },
                  { label: '销售与营销', notes: ['占收入 16%', '同比 (3 个百分点)'] },
                  { label: '管理费用', notes: ['占收入 14%', '同比 (3 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 57%', '同比 +3 个百分点'] },
              operating: { label: '营业亏损', notes: ['利润率 (5%)', '同比 +9 个百分点'] },
              net: {
                label: '营业亏损',
                notes: ['源图未显示单独的净利润/净亏损项目。'],
              },
            },
          },
        },
      },
      {
        key: 'netflix-q1-fy26',
        company: 'Netflix',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/netflix-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 12.2,
          notes: ['+16% Y/Y'],
          items: [
            { id: 'ucan', label: 'UCAN', value: 5.2, notes: ['+14% Y/Y'] },
            { id: 'emea', label: 'EMEA', value: 4.0, notes: ['+17% Y/Y'] },
            { id: 'latam', label: 'LATAM', value: 1.5, notes: ['+19% Y/Y'] },
            { id: 'apac', label: 'APAC', value: 1.5, notes: ['+20% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.9 },
          operatingExpenses: {
            total: 2.4,
            items: [
              { id: 'technology_development', label: 'Technology & development', value: 1.0, notes: ['8% of revenue', '+0pp Y/Y'] },
              { id: 'marketing', label: 'Marketing', value: 0.8, notes: ['7% of revenue', '+0pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.6, notes: ['5% of revenue', '+1pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 1.2 },
        },
        otherIncome: {
          total: 2.6,
          items: [
            {
              id: 'other_income',
              label: 'Other',
              value: 2.6,
              notes: ['Including $2.8B Warner break-up fee'],
            },
          ],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 6.4, notes: ['52% margin', '+2pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 4.0, notes: ['32% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 5.3, notes: ['43% margin', '+16pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +16%'],
              items: [
                { id: 'ucan', label: '美国和加拿大', notes: ['同比 +14%'] },
                { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +17%'] },
                { id: 'latam', label: '拉美', notes: ['同比 +19%'] },
                { id: 'apac', label: '亚太', notes: ['同比 +20%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'technology_development', label: '技术与开发', notes: ['占收入 8%', '同比 +0 个百分点'] },
                  { id: 'marketing', label: '市场营销', notes: ['占收入 7%', '同比 +0 个百分点'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 5%', '同比 +1 个百分点'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [
                {
                  id: 'other_income',
                  label: '其他',
                  notes: ['包括 $2.8B Warner 解约费'],
                },
              ],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 52%', '同比 +2 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 32%', '同比 +1 个百分点'] },
              net: { label: '净利润', notes: ['利润率 43%', '同比 +16 个百分点'] },
            },
          },
        },
      },
      {
        key: 'netease-q1-fy26',
        company: 'NetEase',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/netease-q1-fy26.png',
        roundingTolerance: 0.25,
        revenue: {
          total: 4.4,
          notes: ['+6% Y/Y'],
          items: [
            {
              id: 'games',
              label: 'Games and related value-added services',
              value: 3.7,
              notes: ['+7% Y/Y', '75% gross margin'],
            },
            { id: 'cloud_music', label: 'Cloud Music', value: 0.3, notes: ['+7% Y/Y', '37% gross margin'] },
            { id: 'youdao', label: 'Youdao', value: 0.2, notes: ['+4% Y/Y', '45% gross margin'] },
            {
              id: 'innovative_businesses',
              label: 'Innovative Businesses & Others',
              value: 0.2,
              notes: ['(5%) Y/Y', '42% gross margin'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 1.4 },
          operatingExpenses: {
            total: 1.2,
            notes: ['R&D, S&M, and G&A line items sum to $1.3B because the source chart rounds to one decimal place.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 0.7, notes: ['15% of revenue', '(1pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 0.5, notes: ['11% of revenue', '+2pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.4 },
        },
        otherIncome: {
          total: 0.1,
          items: [{ id: 'other', label: 'Other', value: 0.1 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 3.1, notes: ['69% margin', '+5pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 1.8, notes: ['41% margin', '+5pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1.6, notes: ['35% margin', '(1pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +6%'],
              items: [
                { label: '游戏及相关增值服务', notes: ['同比 +7%', '毛利率 75%'] },
                { label: '云音乐', notes: ['同比 +7%', '毛利率 37%'] },
                { label: '有道', notes: ['同比 +4%', '毛利率 45%'] },
                { label: '创新业务及其他', notes: ['同比 (5%)', '毛利率 42%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['研发、销售与营销、管理费用明细合计为 13 亿美元，因为源图按一位小数四舍五入。'],
                items: [
                  { label: '研发', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                  { label: '销售与营销', notes: ['占收入 11%', '同比 +2 个百分点'] },
                  { label: '管理费用', notes: ['占收入 2%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 69%', '同比 +5 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 41%', '同比 +5 个百分点'] },
              net: { label: '净利润', notes: ['利润率 35%', '同比 (1 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'nintendo-fy26',
        company: 'Nintendo',
        period: 'FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '¥',
        unit: 'B',
        decimals: 0,
        sourceImage: 'input/processed/nintendo-fy26.png',
        roundingTolerance: 1.2,
        revenue: {
          total: 2313,
          notes: ['+99% Y/Y'],
          items: [
            {
              id: 'dedicated_video_game_platform',
              label: 'Dedicated video game platform',
              value: 2240,
              notes: ['+107% Y/Y'],
              children: [
                {
                  id: 'hardware',
                  label: 'Hardware',
                  value: 1494,
                  notes: ['+215% Y/Y', 'Switch 2: 19.9M units (New)', 'Switch 1: 3.8M units, (65%) Y/Y'],
                },
                {
                  id: 'software',
                  label: 'Software',
                  value: 746,
                  notes: ['+22% Y/Y', '186M units', '+19% Y/Y', '55% Digital'],
                },
              ],
            },
            {
              id: 'other_revenue',
              label: 'Other',
              value: 74,
              notes: ['(10%) Y/Y', 'Source chart shows this as Other; Nintendo reporting describes the comparable line as IP related income, etc.'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 1404 },
          operatingExpenses: {
            total: 549,
            items: [
              { id: 'other_sga', label: 'Other SG&A', value: 226, notes: ['10% of revenue', '(7pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 178, notes: ['8% of revenue', '(5pp) Y/Y'] },
              { id: 'advertising', label: 'Advertising', value: 145, notes: ['6% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: {
            id: 'tax',
            label: 'Tax',
            value: 232,
            notes: ['Modeled from the source chart to reconcile operating profit, other income, and displayed net profit.'],
          },
        },
        otherIncome: {
          total: 182,
          items: [{ id: 'other_income', label: 'Other', value: 182 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 909, notes: ['39% margin', '(22pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 360, notes: ['16% margin', '(9pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 310, notes: ['13% margin', '(11pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +99%'],
              items: [
                {
                  label: '专用游戏平台',
                  notes: ['同比 +107%'],
                  children: [
                    {
                      label: '硬件',
                      notes: ['同比 +215%', 'Switch 2：1,990 万台（新机型）', 'Switch 1：380 万台，同比 (65%)'],
                    },
                    {
                      label: '软件',
                      notes: ['同比 +22%', '1.86 亿套', '同比 +19%', '数字版占 55%'],
                    },
                  ],
                },
                {
                  label: '其他',
                  notes: ['同比 (10%)', '来源图表显示为其他；Nintendo 财报中相近项目为 IP 相关收入等。'],
                },
              ],
            },
            costs: {
              costOfRevenue: { label: '销售成本' },
              operatingExpenses: {
                items: [
                  { label: '其他销售及管理费用', notes: ['占收入 10%', '同比 (7 个百分点)'] },
                  { label: '研发', notes: ['占收入 8%', '同比 (5 个百分点)'] },
                  { label: '广告', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                ],
              },
              tax: {
                label: '税费',
                notes: ['按来源图表建模，用于调和营业利润、其他收入和图中显示的净利润。'],
              },
            },
            otherIncome: {
              items: [{ label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 39%', '同比 (22 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 16%', '同比 (9 个百分点)'] },
              net: { label: '净利润', notes: ['利润率 13%', '同比 (11 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'palantir-q1-fy26',
        company: 'Palantir',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/palantir-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1633,
          notes: ['+85% Y/Y', 'Commercial and Government revenue items sum to $1,632M because the source chart rounds to whole millions.'],
          items: [
            { id: 'commercial', label: 'Commercial', value: 774, notes: ['+95% Y/Y'] },
            { id: 'government', label: 'Government', value: 858, notes: ['+76% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 216 },
          operatingExpenses: {
            total: 663,
            items: [
              { id: 'sm', label: 'S&M', value: 319, notes: ['20% of revenue', '(7pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 183, notes: ['11% of revenue', '(7pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 161, notes: ['10% of revenue', '(5pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 12 },
        },
        otherIncome: {
          total: 134,
          items: [
            { id: 'interest', label: 'Interest', value: 66 },
            { id: 'other', label: 'Other', value: 68 },
          ],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1417, notes: ['87% margin', '+6pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 754, notes: ['46% margin', '+26pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 876, notes: ['54% margin', '+29pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +85%', '由于来源图按百万美元四舍五入，商业和政府收入明细合计为 1,632M 美元。'],
              items: [
                { label: '商业', notes: ['同比 +95%'] },
                { label: '政府', notes: ['同比 +76%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { label: '销售与营销', notes: ['占收入 20%', '同比 (7 个百分点)'] },
                  { label: '管理费用', notes: ['占收入 11%', '同比 (7 个百分点)'] },
                  { label: '研发', notes: ['占收入 10%', '同比 (5 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [
                { label: '利息' },
                { label: '其他' },
              ],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 87%', '同比 +6 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 46%', '同比 +26 个百分点'] },
              net: { label: '净利润', notes: ['利润率 54%', '同比 +29 个百分点'] },
            },
          },
        },
      },
      {
        key: 'paramount-q1-fy26',
        company: 'Paramount',
        period: 'Q1 FY26',
        periodNote: 'Quarter ended Mar. 31, 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/paramount-q1-fy26.png',
        roundingTolerance: 0.2,
        revenue: {
          total: 7.4,
          notes: ['+2% Y/Y', 'Official Q1 2026 total revenues were $7.347B; source chart displays $7.4B.'],
          items: [
            { id: 'filmed_entertainment', label: 'Filmed Entertainment', value: 1.3, notes: ['+11% Y/Y', '13% adj. margin', '+6pp Y/Y'] },
            { id: 'tv_media', label: 'TV Media', value: 3.7, notes: ['(6%) Y/Y', '29% adj. margin', '+3pp Y/Y'] },
            { id: 'direct_to_consumer', label: 'Direct to consumer', value: 2.4, notes: ['+11% Y/Y', '10% adj. margin', '+11pp Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: 'Cost of revenue',
            value: 0,
            notes: ['Source chart flows revenue directly to operating profit and total costs and expenses; no separate gross-profit or cost-of-revenue layer is shown.'],
          },
          operatingExpenses: {
            total: 6.7,
            notes: [
              'Source chart labels this bridge as Costs and expenses; official total costs and expenses were $6.731B.',
              'Rounded source-chart item labels are preserved; official statements list Operating $4.855B, SG&A $1.411B, depreciation and amortization $0.362B, and restructuring/transaction-related items $0.103B.',
            ],
            items: [
              { id: 'operating', label: 'Operating', value: 4.9 },
              { id: 'sga', label: 'SG&A', value: 1.4 },
              {
                id: 'restructuring',
                label: 'Restructuring',
                value: 0.4,
                notes: ['Source chart displays Restructuring as ($0.4B); official Q1 statement lists depreciation and amortization as $0.362B.'],
              },
              {
                id: 'amortization',
                label: 'Amortization',
                value: 0.1,
                notes: ['Source chart displays Amortization as ($0.1B); official Q1 statement lists restructuring and transaction-related items as $0.103B.'],
              },
            ],
          },
          tax: {
            id: 'tax',
            label: 'Tax',
            value: 0.2,
            notes: ['Official provision for income taxes was $155M; source chart displays ($0.2B).'],
          },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.3,
          items: [
            {
              id: 'other',
              label: 'Other',
              value: 0.3,
              notes: ['Source chart groups interest expense, interest income, other items, and equity losses into Other.'],
            },
          ],
        },
        profit: {
          gross: {
            label: 'Gross profit bridge',
            value: 7.4,
            notes: ['SSOT bridge for arithmetic only; source chart does not display gross profit.'],
          },
          operating: {
            id: 'operating_profit',
            label: 'Operating profit',
            value: 0.6,
            notes: ['8% margin', '+1pp Y/Y', 'Official operating income was $616M.'],
          },
          net: {
            id: 'net_profit',
            label: 'Net profit',
            value: 0.2,
            notes: ['2% margin', '+0pp Y/Y', 'Official net earnings attributable to Parent were $168M.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月 31 日的季度',
            revenue: {
              notes: ['同比 +2%', '官方 2026 年第一季度总收入为 $7.347B；来源图表显示为 $7.4B。'],
              items: [
                { id: 'filmed_entertainment', label: '影视娱乐', notes: ['同比 +11%', '调整后利润率 13%', '同比 +6 个百分点'] },
                { id: 'tv_media', label: '电视媒体', notes: ['同比 (6%)', '调整后利润率 29%', '同比 +3 个百分点'] },
                { id: 'direct_to_consumer', label: '直接面向消费者', notes: ['同比 +11%', '调整后利润率 10%', '同比 +11 个百分点'] },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['来源图表将收入直接拆分为营业利润和总成本费用；未显示单独毛利润或收入成本层。'],
              },
              operatingExpenses: {
                notes: [
                  '来源图表将该桥接项标为成本和费用；官方总成本和费用为 $6.731B。',
                  '保留来源图表的四舍五入项目标签；官方报表列示运营 $4.855B、SG&A $1.411B、折旧和摊销 $0.362B，以及重组/交易相关项目 $0.103B。',
                ],
                items: [
                  { id: 'operating', label: '运营成本' },
                  { id: 'sga', label: '销售、一般及行政' },
                  {
                    id: 'restructuring',
                    label: '重组',
                    notes: ['来源图表将重组显示为 ($0.4B)；官方 Q1 报表列示折旧和摊销为 $0.362B。'],
                  },
                  {
                    id: 'amortization',
                    label: '摊销',
                    notes: ['来源图表将摊销显示为 ($0.1B)；官方 Q1 报表列示重组和交易相关项目为 $0.103B。'],
                  },
                ],
              },
              tax: {
                label: '税费',
                notes: ['官方所得税拨备为 $155M；来源图表显示为 ($0.2B)。'],
              },
            },
            otherExpenses: {
              items: [
                {
                  id: 'other',
                  label: '其他',
                  notes: ['来源图表将利息费用、利息收入、其他项目和权益法投资亏损归入其他。'],
                },
              ],
            },
            profit: {
              gross: {
                label: '毛利润桥接',
                notes: ['仅用于 SSOT 算术桥接；来源图表未显示毛利润。'],
              },
              operating: { label: '营业利润', notes: ['利润率 8%', '同比 +1 个百分点', '官方营业利润为 $616M。'] },
              net: { label: '净利润', notes: ['利润率 2%', '同比 +0 个百分点', '归属于母公司的官方净利润为 $168M。'] },
            },
          },
        },
      },
      {
        key: 'paycom-q1-fy26',
        company: 'Paycom',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/paycom-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 571.9,
          notes: ['+8% Y/Y'],
          items: [
            { id: 'recurring', label: 'Recurring', value: 544.0, notes: ['+9% Y/Y', 'Reported by Paycom as recurring and other revenues.'] },
            {
              id: 'implementation_other',
              label: 'Implementation and other',
              value: 27.8,
              notes: ['(9%) Y/Y', 'Reported by Paycom as interest on funds held for clients.'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 87.3 },
          operatingExpenses: {
            total: 274.3,
            notes: ['Operating expense detail sums to $274.4M due to rounding.'],
            items: [
              { id: 'sm', label: 'S&M', value: 117.6, notes: ['21% of revenue', '(0pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 69.4, notes: ['12% of revenue', '(0pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 60.7, notes: ['11% of revenue', '(1pp) Y/Y'] },
              { id: 'depreciation', label: 'Depreciation', value: 26.7 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 59.5 },
        },
        otherIncome: {
          total: 5.0,
          items: [
            {
              id: 'other',
              label: 'Other',
              value: 5.0,
              notes: ['Net of other income, net and interest expense; source chart displays the line as $4M.'],
            },
          ],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 484.5, notes: ['85% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 210.2, notes: ['37% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 155.7, notes: ['27% margin', '+1pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +8%'],
              items: [
                { label: '经常性收入', notes: ['同比 +9%', 'Paycom 披露为经常性及其他收入。'] },
                { label: '实施及其他', notes: ['同比 (9%)', 'Paycom 披露为客户资金利息收入。'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['由于四舍五入，营业费用明细合计为 274.4M 美元。'],
                items: [
                  { label: '销售与市场', notes: ['占收入 21%', '同比 (0 个百分点)'] },
                  { label: '一般及行政', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                  { label: '研发', notes: ['占收入 11%', '同比 (1 个百分点)'] },
                  { label: '折旧摊销' },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ label: '其他', notes: ['其他收入净额扣除利息费用后的净额；来源图显示为 4M 美元。'] }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 85%', '同比 +1 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 37%', '同比 +2 个百分点'] },
              net: { label: '净利润', notes: ['利润率 27%', '同比 +1 个百分点'] },
            },
          },
        },
      },
      {
        key: 'pdd-holdings-q1-fy26',
        company: 'PDD Holdings',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/pdd-holdings-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 15.4,
          notes: ['+11% Y/Y'],
          items: [
            {
              id: 'online_marketing',
              label: 'Online Marketing & Others',
              value: 7.2,
              notes: ['+2% Y/Y', 'Performance-based services'],
            },
            { id: 'transaction_services', label: 'Transaction Services', value: 8.2, notes: ['+20% Y/Y', 'Merchant fee'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 6.8 },
          operatingExpenses: {
            total: 5.8,
            notes: ['R&D, sales and marketing, and G&A line items sum to $5.7B because the source chart rounds to one decimal place.'],
            items: [
              { id: 'sm', label: 'Sales & marketing', value: 4.9, notes: ['32% of revenue', '(3pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 0.6, notes: ['4% of revenue', '+0pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.6 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.4,
          items: [{ id: 'other', label: 'Other', value: 0.4 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 8.6, notes: ['56% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2.8, notes: ['18% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1.8, notes: ['12% margin', '(4pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +11%'],
              items: [
                { label: '在线营销及其他', notes: ['同比 +2%', '基于绩效的服务'] },
                { label: '交易服务', notes: ['同比 +20%', '商户费用'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['研发、销售与市场、管理费用明细合计为 57 亿美元，因为源图按一位小数四舍五入。'],
                items: [
                  { label: '销售与市场', notes: ['占收入 32%', '同比 (3 个百分点)'] },
                  { label: '研发', notes: ['占收入 4%', '同比 +0 个百分点'] },
                  { label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherExpenses: {
              items: [{ label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 56%', '同比 (1 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 18%', '同比 +2 个百分点'] },
              net: { label: '净利润', notes: ['利润率 12%', '同比 (4 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'pinterest-q1-fy26',
        company: 'Pinterest',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/pinterest-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1008,
          notes: ['+18% Y/Y'],
          items: [
            { id: 'us_canada', label: 'US & Canada', value: 750, notes: ['+13% Y/Y'] },
            { id: 'europe', label: 'Europe', value: 186, notes: ['+27% Y/Y'] },
            { id: 'rest_of_world', label: 'Rest of the world', value: 72, notes: ['+59% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 239 },
          operatingExpenses: {
            total: 849,
            notes: ['R&D, S&M, G&A, and restructuring line items sum to $850M because the source chart rounds to whole millions.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 381, notes: ['38% of revenue', '(1pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 318, notes: ['32% of revenue', '+2pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 104, notes: ['10% of revenue', '(2pp) Y/Y'] },
              { id: 'restructuring', label: 'Restructuring', value: 47, notes: ['5% of revenue', '+5pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 769, notes: ['76% margin', '(0pp) Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -80, notes: ['(8%) margin', '(4pp) Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -80,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +18%'],
              items: [
                { label: '美国和加拿大', notes: ['同比 +13%'] },
                { label: '欧洲', notes: ['同比 +27%'] },
                { label: '世界其他地区', notes: ['同比 +59%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['研发、销售与营销、管理费用和重组费用明细合计为 8.50 亿美元，因为源图按整百万美元四舍五入。'],
                items: [
                  { label: '研发', notes: ['占收入 38%', '同比 (1 个百分点)'] },
                  { label: '销售与营销', notes: ['占收入 32%', '同比 +2 个百分点'] },
                  { label: '管理费用', notes: ['占收入 10%', '同比 (2 个百分点)'] },
                  { label: '重组', notes: ['占收入 5%', '同比 +5 个百分点'] },
                ],
              },
              tax: { label: '税费' },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 76%', '同比 0 个百分点'] },
              operating: { label: '营业亏损', notes: ['利润率 (8%)', '同比 (4 个百分点)'] },
              net: {
                label: '营业亏损',
                notes: ['源图未显示单独的净利润/净亏损项目。'],
              },
            },
          },
        },
      },
      {
        key: 'nyt-q1-fy26',
        company: 'The New York Times Company',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/nyt-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 712,
          notes: ['+12% Y/Y'],
          items: [
            {
              id: 'subscription',
              label: 'Subscription',
              value: 517,
              notes: ['+11% Y/Y'],
              children: [
                { id: 'digital', label: 'Digital', value: 389, notes: ['+16% Y/Y'] },
                { id: 'print', label: 'Print', value: 128, notes: ['(1%) Y/Y'] },
              ],
            },
            { id: 'advertising', label: 'Advertising', value: 127, notes: ['(1%) Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 69, notes: ['+8% Y/Y', 'Wirecutter'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 363 },
          operatingExpenses: {
            total: 259,
            items: [
              { id: 'ga', label: 'G&A', value: 86, notes: ['12% of revenue', '(0pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 77, notes: ['11% of revenue', '+0pp Y/Y'] },
              { id: 'product', label: 'Product', value: 70, notes: ['10% of revenue', '(1pp) Y/Y'] },
              { id: 'da', label: 'D&A', value: 21, notes: ['3% of revenue', '(0pp) Y/Y'] },
              { id: 'other_expense', label: 'Other', value: 4, notes: ['1% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax_other', label: 'Tax & other', value: 14 },
        },
        otherIncome: {
          total: 11,
          items: [{ id: 'interest', label: 'Interest', value: 11 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 349, notes: ['49% margin', '+2pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 91, notes: ['13% margin', '+4pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 88, notes: ['12% margin', '+5pp Y/Y'] },
        },
      },
      {
        key: 'alibaba-q4-fy26',
        company: 'Alibaba',
        period: 'Q4 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/alibaba-q4-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 35.3,
          notes: ['+3% Y/Y'],
          items: [
            { id: 'china_ecommerce', label: 'China E-commerce', value: 17.7, notes: ['+6% Y/Y', '20% adjusted margin'] },
            {
              id: 'international_digital_commerce',
              label: 'International Digital Commerce',
              value: 5.1,
              notes: ['+6% Y/Y', '(0%) adjusted margin'],
            },
            { id: 'cloud', label: 'Cloud', value: 6.0, notes: ['+38% Y/Y', '9% adjusted margin'] },
            { id: 'all_others', label: 'All others', value: 9.6, notes: ['(21%) Y/Y', '(33%) adjusted margin'] },
            { id: 'intersegment_eliminations', label: 'Inter-segment Eliminations', value: -3.2 },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 23.1 },
          operatingExpenses: {
            total: 12.3,
            items: [
              { id: 'sm', label: 'Sales & marketing', value: 7.7, notes: ['22% of revenue', '+7pp Y/Y'] },
              { id: 'product_development', label: 'Product development', value: 2.7, notes: ['8% of revenue'] },
              { id: 'ga', label: 'General & Administrative', value: 1.4, notes: ['4% of revenue'] },
              { id: 'amortization_impairment', label: 'Amortization & impairment', value: 0.4, notes: ['1% of revenue'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 12.2, notes: ['35% margin', '(7pp) Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -0.1, notes: ['(0%) margin', '+12pp Y/Y'] },
          net: { id: 'operating_loss', label: 'Operating loss', value: -0.1 },
        },
      },
      {
        key: 'amd-q1-fy26',
        company: 'AMD',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/amd-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 10.253,
          notes: ['+38% Y/Y'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 5.775, notes: ['+57% Y/Y', '28% operating margin', '+3pp Y/Y'] },
            {
              id: 'client',
              label: 'Client',
              value: 2.885,
              notes: ['+26% Y/Y', 'Client and Gaming', '16% operating margin', '(1pp) Y/Y'],
            },
            { id: 'gaming', label: 'Gaming', value: 0.72, notes: ['+11% Y/Y'] },
            { id: 'embedded', label: 'Embedded', value: 0.873, notes: ['+6% Y/Y', '39% operating margin', '(1pp) Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.837 },
          operatingExpenses: {
            total: 3.94,
            items: [
              { id: 'rnd', label: 'Research & development', value: 2.397, notes: ['23% of revenue', '+0pp Y/Y'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 1.253, notes: ['12% of revenue', '+0pp Y/Y'] },
              { id: 'amortization', label: 'Amortization of intangibles', value: 0.29, notes: ['3% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.238 },
        },
        otherIncome: {
          total: 0.145,
          items: [
            {
              id: 'other',
              label: 'Other',
              value: 0.145,
              notes: ['Net impact of interest expense, other income, equity income, and discontinued operations.'],
            },
          ],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 5.416, notes: ['53% margin', '+3pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 1.476, notes: ['14% margin', '+4pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1.383, notes: ['13% margin', '+4pp Y/Y'] },
        },
      },
      {
        key: 'amazon-q1-fy26',
        company: 'Amazon',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/amazon-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 181.5,
          notes: ['+17% Y/Y'],
          items: [
            { id: 'online_stores', label: 'Online Stores', value: 64.3, notes: ['+12% Y/Y'] },
            { id: 'physical_store', label: 'Physical Store', value: 5.8, notes: ['+5% Y/Y'] },
            {
              id: 'third_party_seller_services',
              label: '3rd party sellers services',
              value: 41.6,
              notes: ['+14% Y/Y'],
            },
            { id: 'advertising', label: 'Advertising', value: 17.2, notes: ['+24% Y/Y'] },
            { id: 'subscription', label: 'Subscription', value: 13.4, notes: ['+15% Y/Y'] },
            { id: 'aws', label: 'AWS', value: 37.6, notes: ['+28% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 1.6, notes: ['+25% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 87.5 },
          operatingExpenses: {
            total: 70.2,
            notes: ['Operating expense items sum to $70.3B because the source chart rounds each item.'],
            items: [
              { id: 'technology_content', label: 'Technology & content', value: 29.6, notes: ['16% of revenue', '+2pp Y/Y'] },
              { id: 'fulfillment', label: 'Fulfillment', value: 27.3, notes: ['15% of revenue', '(1pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 10.3, notes: ['6% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 2.6, notes: ['1% of revenue', '(0pp) Y/Y'] },
              { id: 'other_opex', label: 'Other opex', value: 0.5 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 9.6 },
        },
        otherIncome: {
          total: 16.0,
          items: [{ id: 'other_income', label: 'Other', value: 16.0 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 94.1, notes: ['52% margin', '+1pp Y/Y'] },
          operating: {
            id: 'operating_profit',
            label: 'Operating profit',
            value: 23.9,
            notes: ['13% margin', '+1pp Y/Y', 'AWS $14.2B', 'Other $9.7B'],
          },
          net: { id: 'net_profit', label: 'Net profit', value: 30.3, notes: ['17% margin', '+6pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +17%'],
              items: [
                { id: 'online_stores', label: '线上商店', notes: ['同比 +12%'] },
                { id: 'physical_store', label: '实体商店', notes: ['同比 +5%'] },
                { id: 'third_party_seller_services', label: '第三方卖家服务', notes: ['同比 +14%'] },
                { id: 'advertising', label: '广告', notes: ['同比 +24%'] },
                { id: 'subscription', label: '订阅', notes: ['同比 +15%'] },
                { id: 'aws', label: 'AWS', notes: ['同比 +28%'] },
                { id: 'other_revenue', label: '其他', notes: ['同比 +25%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '销售成本' },
              operatingExpenses: {
                notes: ['运营费用项目合计为 $70.3B，因为来源图表对各项目做了四舍五入。'],
                items: [
                  { id: 'technology_content', label: '技术与内容', notes: ['占收入 16%', '同比 +2 个百分点'] },
                  { id: 'fulfillment', label: '履约', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                  { id: 'sm', label: '销售与市场', notes: ['占收入 6%', '同比 (1 个百分点)'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 1%', '同比 (0 个百分点)'] },
                  { id: 'other_opex', label: '其他运营费用' },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other_income', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 52%', '同比 +1 个百分点'] },
              operating: {
                label: '营业利润',
                notes: ['利润率 13%', '同比 +1 个百分点', 'AWS 业务 $14.2B', '其他业务 $9.7B'],
              },
              net: { label: '净利润', notes: ['利润率 17%', '同比 +6 个百分点'] },
            },
          },
        },
      },
      {
        key: 'microsoft-q3-fy26-by-bu',
        company: 'Microsoft',
        period: 'Q3 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/microsoft-q3-fy26-by-bu.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 82.9,
          notes: ['+18% Y/Y'],
          items: [
            {
              id: 'productivity_business_processes',
              label: 'Productivity & Business Processes',
              value: 35.0,
              notes: ['+17% Y/Y', '60% operating margin', '+2pp Y/Y'],
            },
            {
              id: 'intelligent_cloud',
              label: 'Intelligent Cloud',
              value: 34.7,
              notes: ['+30% Y/Y', '40% operating margin', '(2pp) Y/Y'],
            },
            {
              id: 'more_personal_computing',
              label: 'More Personal Computing',
              value: 13.2,
              notes: ['(1%) Y/Y', '28% operating margin', '+1pp Y/Y'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.8 },
          operatingExpenses: {
            total: 17.7,
            items: [
              { id: 'rnd', label: 'R&D', value: 8.9, notes: ['11% of revenue', '(1pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 7.6 },
        },
        otherIncome: {
          total: 0.9,
          items: [{ id: 'other', label: 'Other', value: 0.9 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 56.1, notes: ['68% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 38.4, notes: ['46% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 31.8, notes: ['38% margin', '+1pp Y/Y'] },
        },
      },
      {
        key: 'meta-q1-fy26',
        company: 'Meta',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/meta-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 56.3,
          notes: ['+33% Y/Y'],
          items: [
            {
              id: 'family_of_apps',
              label: 'Family of Apps (FoA)',
              value: 55.9,
              notes: ['+33% Y/Y', 'Operating profit: $26.9B'],
              children: [
                { id: 'advertising', label: 'Advertising', value: 55.0, notes: ['+33% Y/Y'] },
                { id: 'other_revenue', label: 'Other', value: 0.9, notes: ['+74% Y/Y', 'Payments infrastructure'] },
              ],
            },
            {
              id: 'reality_labs',
              label: 'Reality Labs (RL)',
              value: 0.4,
              notes: ['(2%) Y/Y', 'Operating loss: ($4.0B)'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.2 },
          operatingExpenses: {
            total: 23.2,
            items: [
              { id: 'rnd', label: 'R&D', value: 17.7, notes: ['31% of revenue', '+3pp Y/Y'] },
              { id: 'sm', label: 'S&M', value: 2.9, notes: ['5% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 2.6, notes: ['5% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a tax benefit instead of tax expense.'] },
        },
        otherIncome: {
          total: 5.0,
          items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 5.0 }],
        },
        otherExpenses: {
          total: 1.1,
          items: [{ id: 'other', label: 'Other', value: 1.1 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 46.1, notes: ['82% margin', '(0pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 22.9, notes: ['41% margin', '(1pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 26.8, notes: ['48% margin', '+8pp Y/Y'] },
        },
      },
      {
        key: 'morgan-stanley-q1-fy26',
        company: 'Morgan Stanley',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/morgan-stanley-q1-fy26.png',
        roundingTolerance: 0.2,
        revenue: {
          total: 20.6,
          notes: ['+16% Y/Y', 'Segment revenue detail sums to $20.7B due to rounded segment figures.'],
          items: [
            {
              id: 'institutional_securities',
              label: 'Institutional Securities',
              value: 10.7,
              notes: ['+19% Y/Y', '31% net margin'],
            },
            {
              id: 'wealth_management',
              label: 'Wealth Management',
              value: 8.5,
              notes: ['+16% Y/Y', '24% net margin'],
            },
            {
              id: 'investment_management',
              label: 'Investment Management',
              value: 1.5,
              notes: ['(4%) Y/Y', '16% net margin'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'non_interest_expenses',
            label: 'Noninterest expenses',
            value: 13.5,
            notes: ['Noninterest expense detail sums to $13.4B due to rounded line items.'],
            items: [
              { id: 'compensation_benefits', label: 'Compensation & benefits', value: 8.5 },
              { id: 'brokerage_clearing_exchange', label: 'Brokerage, clearing & exchange fees', value: 1.3 },
              { id: 'information_communications', label: 'Information & communications', value: 1.1 },
              { id: 'professional_services', label: 'Professional services', value: 0.6 },
              { id: 'occupancy', label: 'Occupancy', value: 0.5 },
              { id: 'marketing_business_development', label: 'Marketing & business development', value: 0.3 },
              { id: 'other_expenses', label: 'Other', value: 1.1 },
            ],
          },
          operatingExpenses: {
            total: 0.1,
            notes: ['Mapped to the existing operating-expenses schema slot for financial-institution credit-loss provision.'],
            items: [{ id: 'operating_expenses', label: 'Provision for credit loss', value: 0.1 }],
          },
          tax: { id: 'tax', label: 'Tax', value: 1.4 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: {
            id: 'pretax_income',
            label: 'Pre-provision pretax income',
            value: 7.1,
            notes: ['Schema adapter subtotal; source chart labels the displayed node as Pretax income.'],
          },
          operating: { id: 'pretax_income', label: 'Pretax income', value: 7.0 },
          net: { id: 'net_income', label: 'Net income', value: 5.6, notes: ['+29% Y/Y'] },
        },
      },
      {
        key: 'monday-com-q1-fy26',
        company: 'Monday.com',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/monday-com-q1-fy26.png',
        roundingTolerance: 0.65,
        revenue: {
          total: 351,
          notes: ['+24% Y/Y'],
          items: [{ id: 'revenue', label: 'Revenue', value: 351, notes: ['+24% Y/Y'] }],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 38 },
          operatingExpenses: {
            total: 293,
            items: [
              { id: 'sm', label: 'Sales & marketing', value: 165, notes: ['47% of revenue', '(3pp) Y/Y'] },
              { id: 'rnd', label: 'Research & development', value: 92, notes: ['26% of revenue', '+2pp Y/Y'] },
              { id: 'ga', label: 'General & admin', value: 36, notes: ['10% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 2 },
        },
        otherIncome: {
          total: 10,
          items: [{ id: 'finance', label: 'Finance', value: 10 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 313, notes: ['89% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 20, notes: ['6% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 28, notes: ['8% margin', '(2pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +24%'],
              items: [{ id: 'revenue', label: '收入', notes: ['同比 +24%'] }],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与市场', notes: ['占收入 47%', '同比 (3 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 26%', '同比 +2 个百分点'] },
                  { id: 'ga', label: '一般及行政', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'finance', label: '财务收入' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 89%', '同比 (1 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 6%', '同比 +2 个百分点'] },
              net: { label: '净利润', notes: ['利润率 8%', '同比 (2 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'apple-q2-fy26',
        company: 'Apple',
        period: 'Q2 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/apple-q2-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 111.2,
          notes: ['+17% Y/Y'],
          items: [
            {
              id: 'products',
              label: 'Products',
              value: 80.2,
              notes: ['+17% Y/Y'],
              children: [
                { id: 'iphone', label: 'iPhone', value: 57.0, notes: ['+22% Y/Y'] },
                { id: 'mac', label: 'Mac', value: 8.4, notes: ['+6% Y/Y', 'Air, Pro, Mini'] },
                { id: 'ipad', label: 'iPad', value: 6.9, notes: ['+8% Y/Y'] },
                {
                  id: 'wearables',
                  label: 'Wearables, Home, and Accessories',
                  value: 7.9,
                  notes: ['+5% Y/Y'],
                },
              ],
            },
            { id: 'services', label: 'Services', value: 31.0, notes: ['+16% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 56.4,
            items: [
              { id: 'product_cost', label: 'Products', value: 49.2, notes: ['39% gross margin'] },
              { id: 'service_cost', label: 'Services', value: 7.2, notes: ['77% gross margin'] },
            ],
          },
          operatingExpenses: {
            total: 18.9,
            items: [
              { id: 'rnd', label: 'R&D', value: 11.4, notes: ['10% of revenue', '+1pp Y/Y'] },
              { id: 'sga', label: 'SG&A', value: 7.5, notes: ['7% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 6.3 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 54.8, notes: ['49% margin', '+2pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 35.9, notes: ['32% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 29.7, notes: ['27% margin', '+1pp Y/Y'] },
        },
      },
      {
        key: 'qualcomm-q2-fy26',
        company: 'Qualcomm',
        period: 'Q2 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/qualcomm-q2-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 10.6,
          notes: ['(3%) Y/Y'],
          items: [
            {
              id: 'qct',
              label: 'QCT',
              value: 9.1,
              notes: ['(4%) Y/Y', '27% EBIT margin', 'CDMA Technologies'],
              children: [
                { id: 'handsets', label: 'Handsets', value: 6.0, notes: ['(13%) Y/Y'] },
                { id: 'automotive', label: 'Automotive', value: 1.3, notes: ['+38% Y/Y'] },
                { id: 'iot', label: 'IoT', value: 1.7, notes: ['+9% Y/Y'] },
              ],
            },
            { id: 'qtl', label: 'QTL', value: 1.4, notes: ['+5% Y/Y', '72% margin', 'Technology Licensing'] },
            { id: 'other_revenue', label: 'Other', value: 0.1 },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.9 },
          operatingExpenses: {
            total: 3.4,
            notes: ['Operating expense detail sums to $3.429B before rounding.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 2.5, notes: ['23% of revenue', '+3pp Y/Y'] },
              { id: 'sga', label: 'SG&A', value: 0.9, notes: ['8% of revenue', '+2pp Y/Y'] },
              { id: 'other_opex', label: 'Other', value: 0.029, notes: ['$29M', '0% of revenue', '+0pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0, notes: ['Source chart shows a $5.1B tax benefit instead of tax expense.'] },
        },
        otherIncome: {
          total: 5.1,
          items: [{ id: 'tax_benefit', label: 'Tax benefit', value: 5.1 }],
        },
        otherExpenses: {
          total: 0.1,
          items: [{ id: 'other_non_operating', label: 'Other', value: 0.1 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 5.7, notes: ['54% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['22% margin', '(7pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 7.4, notes: ['70% margin', '+44pp Y/Y'] },
        },
      },
      {
        key: 'asana-q1-fy27',
        company: 'Asana',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/asana-q1-fy27.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 205,
          notes: ['+10% Y/Y'],
          items: [
            { id: 'united_states', label: 'United States', value: 120, notes: ['+8% Y/Y'] },
            { id: 'international', label: 'International', value: 85, notes: ['+12% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 25 },
          operatingExpenses: {
            total: 195,
            notes: ['Source chart operating expense detail sums to $194M due to rounding.'],
            items: [
              { id: 'sm', label: 'S&M', value: 92, notes: ['45% of revenue', '(8pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 66, notes: ['32% of revenue', '(8pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 36, notes: ['18% of revenue', '(2pp) Y/Y'] },
            ],
          },
          tax: { label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 180, notes: ['88% margin', '(2pp) Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -15, notes: ['(7%) margin', '+16pp Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -15,
            notes: ['No separate net loss line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +10%'],
              items: [
                { id: 'united_states', label: '美国', notes: ['同比 +8%'] },
                { id: 'international', label: '国际', notes: ['同比 +12%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['来源图运营费用明细因四舍五入合计为 $194M。'],
                items: [
                  { id: 'sm', label: '销售与市场', notes: ['占收入 45%', '同比 (8 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 32%', '同比 (8 个百分点)'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 18%', '同比 (2 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 88%', '同比 (2 个百分点)'] },
              operating: { label: '营业亏损', notes: ['利润率 (7%)', '同比 +16 个百分点'] },
              net: {
                label: '营业亏损',
                notes: ['来源图未单独显示净亏损项目。'],
              },
            },
          },
        },
      },
      {
        key: 'asml-q1-fy26',
        company: 'ASML',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '€',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/asml-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 8.8,
          notes: ['+13% Y/Y'],
          items: [
            {
              id: 'net_system_sales',
              label: 'Net system sales',
              value: 6.3,
              notes: ['+9% Y/Y'],
              children: [
                { id: 'euv', label: 'EUV', value: 4.1, notes: ['Extreme Ultraviolet'] },
                { id: 'arfi', label: 'ArFi', value: 1.4, notes: ['Argon Fluoride immersion'] },
                { id: 'arf_dry', label: 'ArF Dry', value: 0.1, notes: ['Argon Fluoride Dry'] },
                { id: 'krf', label: 'KrF', value: 0.4, notes: ['Krypton Fluoride'] },
                { id: 'i_line', label: 'I-line', value: 0.1 },
                { id: 'metrology_inspection', label: 'Metrology & Inspection', value: 0.1 },
              ],
            },
            { id: 'installed_base_management', label: 'Installed base management', value: 2.5, notes: ['+24% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 4.1 },
          operatingExpenses: {
            total: 1.5,
            items: [
              { id: 'rnd', label: 'R&D', value: 1.2 },
              { id: 'sga', label: 'SG&A', value: 0.3 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.5 },
        },
        otherIncome: {
          total: 0.041,
          items: [{ id: 'other', label: 'Other', value: 0.041, notes: ['€41M'] }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['53% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 3.2, notes: ['36% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 2.7, notes: ['30% margin', '+0pp Y/Y'] },
        },
      },
      {
        key: 'atlassian-q3-fy26',
        company: 'Atlassian',
        period: 'Q3 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/atlassian-q3-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1787,
          notes: ['+32% Y/Y'],
          items: [
            { id: 'cloud', label: 'Cloud', value: 1132, notes: ['+29% Y/Y'] },
            { id: 'data_center', label: 'Data Center', value: 561, notes: ['+44% Y/Y'] },
            { id: 'marketplace_services', label: 'Marketplace & Services', value: 94, notes: ['+7% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 263 },
          operatingExpenses: {
            total: 1580,
            notes: ['Operating expense line items sum to $1,581M because the source chart rounds each item.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 927, notes: ['52% of revenue', '+1pp Y/Y'] },
              { id: 'sm', label: 'S&M', value: 439, notes: ['25% of revenue', '+3pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 215, notes: ['12% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1524, notes: ['85% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_loss', label: 'Operating loss', value: -56, notes: ['(3%) margin', '(2pp) Y/Y'] },
          net: {
            id: 'operating_loss',
            label: 'Operating loss',
            value: -56,
            notes: ['No separate net income line is shown in the source chart.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第三季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +32%'],
              items: [
                { id: 'cloud', label: '云', notes: ['同比 +29%'] },
                { id: 'data_center', label: '数据中心', notes: ['同比 +44%'] },
                { id: 'marketplace_services', label: '市场与服务', notes: ['同比 +7%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                notes: ['运营费用项目合计为 $1,581M，因为来源图表对各项目做了四舍五入。'],
                items: [
                  { id: 'rnd', label: '研发', notes: ['占收入 52%', '同比 +1 个百分点'] },
                  { id: 'sm', label: '销售与市场', notes: ['占收入 25%', '同比 +3 个百分点'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 12%', '同比 (0 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 85%', '同比 +1 个百分点'] },
              operating: { label: '运营亏损', notes: ['利润率 (3%)', '同比 (2 个百分点)'] },
              net: {
                label: '运营亏损',
                notes: ['来源图表未显示单独的净利润项目。'],
              },
            },
          },
        },
      },
      {
        key: 'autodesk-q1-fy27',
        company: 'Autodesk',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/autodesk-q1-fy27.png',
        roundingTolerance: 0.75,
        revenue: {
          total: 1934,
          notes: ['+18% Y/Y'],
          items: [
            { id: 'aec', label: 'Architecture, Engineering & Construction', value: 970, notes: ['+20% Y/Y'] },
            { id: 'autocad', label: 'AutoCAD', value: 474, notes: ['+15% Y/Y', 'Computer-aided design Including LT'] },
            { id: 'manufacturing', label: 'Manufacturing', value: 367, notes: ['+26% Y/Y'] },
            { id: 'media_entertainment', label: 'Media & Entertainment', value: 86, notes: ['+13% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 37, notes: ['+32% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 175 },
          operatingExpenses: {
            total: 1218,
            items: [
              { id: 'sm', label: 'S&M', value: 593, notes: ['31% of revenue', '(4pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 421, notes: ['22% of revenue', '(2pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 162, notes: ['8% of revenue', '(2pp) Y/Y'] },
              { id: 'other_expense', label: 'Other', value: 42, notes: ['2% of revenue', '(5pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 108 },
        },
        otherIncome: {
          total: 58,
          items: [{ id: 'other_income', label: 'Other', value: 58 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1759, notes: ['91% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 541, notes: ['28% margin', '+14pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 491, notes: ['25% margin', '+16pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +18%'],
              items: [
                { id: 'aec', label: '建筑、工程与施工', notes: ['同比 +20%'] },
                { id: 'autocad', label: 'AutoCAD 产品', notes: ['同比 +15%', '计算机辅助设计，包含 LT'] },
                { id: 'manufacturing', label: '制造', notes: ['同比 +26%'] },
                { id: 'media_entertainment', label: '媒体与娱乐', notes: ['同比 +13%'] },
                { id: 'other_revenue', label: '其他', notes: ['同比 +32%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: 'S&M 费用', notes: ['占收入 31%', '同比 (4 个百分点)'] },
                  { id: 'rnd', label: 'R&D 费用', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                  { id: 'ga', label: 'G&A 费用', notes: ['占收入 8%', '同比 (2 个百分点)'] },
                  { id: 'other_expense', label: '其他', notes: ['占收入 2%', '同比 (5 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other_income', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 91%', '同比 +1 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 28%', '同比 +14 个百分点'] },
              net: { label: '净利润', notes: ['利润率 25%', '同比 +16 个百分点'] },
            },
          },
        },
      },
      {
        key: 'hilton-q1-fy26',
        company: 'Hilton',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/hilton-q1-fy26.png',
        roundingTolerance: 0.02,
        revenue: {
          total: 2.937,
          notes: ['+9% Y/Y'],
          items: [
            { id: 'franchise_fees', label: 'Franchise fees', value: 0.696, notes: ['+11% Y/Y'] },
            { id: 'base_management_fees', label: 'Base management fees', value: 0.095, notes: ['+8% Y/Y'] },
            { id: 'incentive_management_fees', label: 'Incentive management fees', value: 0.076, notes: ['+6% Y/Y'] },
            { id: 'owned_leased_and_other', label: 'Owned, leased and other', value: 0.249, notes: ['+6% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 0.066, notes: ['+43% Y/Y'] },
            {
              id: 'managed_franchised_other_revenue',
              label: 'Other revenue from managed and franchised properties',
              value: 1.755,
              notes: ['+8% Y/Y', 'Reported by Hilton as cost reimbursement revenues.'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 0,
            notes: ['The source chart does not show a gross profit or cost-of-revenue subtotal.'],
          },
          operatingExpenses: {
            total: 2.259,
            notes: ['Source chart presents Hilton expenses as operating expenses rather than a gross-profit split.'],
            items: [
              { id: 'owned_leased_hotels', label: 'Owned, leased hotels', value: 0.235 },
              { id: 'ga', label: 'G&A', value: 0.103 },
              { id: 'da', label: 'D&A', value: 0.050 },
              {
                id: 'managed_franchised_other_expenses',
                label: 'Other expenses from managed and franchised properties',
                value: 1.871,
                notes: ['Includes reimbursed expenses of $1.849B plus $0.022B of other expenses.'],
              },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.135 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.160,
          items: [
            {
              id: 'other_nonoperating',
              label: 'Other',
              value: 0.160,
              notes: ['Interest expense, foreign-currency loss, and other non-operating income, net.'],
            },
          ],
        },
        profit: {
          gross: {
            id: 'gross_profit',
            label: 'Gross profit',
            value: 2.937,
            notes: ['Synthetic SSOT subtotal because the source chart does not show gross profit.'],
          },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.678, notes: ['23% margin', '+3pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.383, notes: ['13% margin', '+2pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +9%'],
              items: [
                { id: 'franchise_fees', label: '特许经营费', notes: ['同比 +11%'] },
                { id: 'base_management_fees', label: '基础管理费', notes: ['同比 +8%'] },
                { id: 'incentive_management_fees', label: '激励管理费', notes: ['同比 +6%'] },
                { id: 'owned_leased_and_other', label: '自有、租赁及其他', notes: ['同比 +6%'] },
                { id: 'other_revenue', label: '其他', notes: ['同比 +43%'] },
                {
                  id: 'managed_franchised_other_revenue',
                  label: '管理和特许经营物业的其他收入',
                  notes: ['同比 +8%', 'Hilton 将该项目列报为成本报销收入。'],
                },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['来源图未单独显示毛利润或收入成本小计。'],
              },
              operatingExpenses: {
                notes: ['来源图将 Hilton 的费用列示为运营费用，而非毛利润拆分。'],
                items: [
                  { id: 'owned_leased_hotels', label: '自有及租赁酒店' },
                  { id: 'ga', label: '管理费用' },
                  { id: 'da', label: '折旧与摊销' },
                  {
                    id: 'managed_franchised_other_expenses',
                    label: '管理和特许经营物业的其他费用',
                    notes: ['包括 $1.849B 报销费用和 $0.022B 其他费用。'],
                  },
                ],
              },
              tax: { label: '税费' },
            },
            otherExpenses: {
              items: [
                {
                  id: 'other_nonoperating',
                  label: '其他',
                  notes: ['利息费用、外币损失及其他非运营收入净额。'],
                },
              ],
            },
            profit: {
              gross: {
                label: '毛利润',
                notes: ['来源图未显示毛利润，因此 SSOT 使用合成小计。'],
              },
              operating: { label: '营业利润', notes: ['利润率 23%', '同比 +3 个百分点'] },
              net: { label: '净利润', notes: ['利润率 13%', '同比 +2 个百分点'] },
            },
          },
        },
      },
      {
        key: 'hp-q2-fy26',
        company: 'HP',
        period: 'Q2 FY26',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/hp-q2-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 14.4,
          notes: ['+9% Y/Y'],
          items: [
            {
              id: 'personal_systems',
              label: 'Personal Systems',
              value: 10.2,
              notes: ['+13% Y/Y'],
              children: [
                { id: 'ps_commercial', label: 'Personal Systems Commercial', value: 7.7, notes: ['+14% Y/Y'] },
                { id: 'ps_consumer', label: 'Personal Systems Consumer', value: 2.5, notes: ['+10% Y/Y'] },
              ],
            },
            {
              id: 'printing',
              label: 'Printing',
              value: 4.2,
              notes: ['(0%) Y/Y', 'Printing child lines sum to $4.3B because the source chart rounds each line.'],
              children: [
                { id: 'printing_supplies', label: 'Printing Supplies', value: 2.8, notes: ['+1% Y/Y'] },
                { id: 'printing_commercial', label: 'Printing Commercial', value: 1.2, notes: ['+0% Y/Y'] },
                { id: 'printing_consumer', label: 'Printing Consumer', value: 0.3, notes: ['(10%) Y/Y'] },
              ],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 11.4 },
          operatingExpenses: {
            total: 2.4,
            items: [
              { id: 'sga', label: 'SG&A', value: 1.5, notes: ['11% of revenue', '(1pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 0.4, notes: ['3% of revenue', '(0pp) Y/Y'] },
              { id: 'restructuring', label: 'Restructuring', value: 0.4, notes: ['3% of revenue'] },
              { id: 'other_opex', label: 'Other', value: 0.1, notes: ['1% of revenue'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.043, valueText: '$43M' },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.1,
          items: [{ id: 'other_nonoperating', label: 'Other', value: 0.1 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 3.0, notes: ['21% margin', '+0pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['4% margin', '(1pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['3% margin', '+0pp Y/Y'] },
        },
      },
      {
        key: 'hubspot-q1-fy26',
        company: 'HubSpot',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/hubspot-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 881,
          notes: ['+23% Y/Y'],
          items: [
            { id: 'subscription', label: 'Subscription', value: 862, notes: ['+23% Y/Y', '85% gross margin'] },
            {
              id: 'professional_services',
              label: 'Professional services',
              value: 19,
              notes: ['+22% Y/Y', '9% gross margin'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 146 },
          operatingExpenses: {
            total: 707,
            items: [
              { id: 'sm', label: 'S&M', value: 386, notes: ['44% of revenue', '(2pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 234, notes: ['27% of revenue', '(4pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 86, notes: ['10% of revenue', '(1pp) Y/Y'] },
              { id: 'restructuring', label: 'Restructuring', value: 1, notes: ['0% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 7 },
        },
        otherIncome: {
          total: 11,
          items: [{ id: 'interest', label: 'Interest', value: 11 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 735, notes: ['83% margin', '(0pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 28, notes: ['3% margin', '+7pp Y/Y'] },
          net: {
            id: 'net_profit',
            label: 'Net profit',
            value: 33,
            notes: ['4% margin', '+6pp Y/Y', 'Displayed rounded bridge sums to $32M; source chart shows $33M net profit.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +23%'],
              items: [
                { id: 'subscription', label: '订阅', notes: ['同比 +23%', '毛利率 85%'] },
                { id: 'professional_services', label: '专业服务', notes: ['同比 +22%', '毛利率 9%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与市场', notes: ['占收入 44%', '同比 (2 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 27%', '同比 (4 个百分点)'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 10%', '同比 (1 个百分点)'] },
                  { id: 'restructuring', label: '重组费用', notes: ['占收入 0%', '同比 (0 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'interest', label: '利息' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 83%', '同比 (0 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 3%', '同比 +7 个百分点'] },
              net: {
                label: '净利润',
                notes: ['利润率 4%', '同比 +6 个百分点', '显示值四舍五入桥接合计为 $32M；源图显示净利润为 $33M。'],
              },
            },
          },
        },
      },
      {
        key: 'jd-com-q1-fy26',
        company: 'JD.com',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/jd-com-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 45.8,
          notes: ['+5% Y/Y'],
          items: [
            { id: 'jd_retail', label: 'JD Retail', value: 38.9, notes: ['+2% Y/Y', '6% operating margin', '+1pp Y/Y'] },
            { id: 'jd_logistics', label: 'JD Logistics', value: 8.8, notes: ['+29% Y/Y', '2% operating margin', '+2pp Y/Y'] },
            {
              id: 'new_businesses',
              label: 'New Businesses',
              value: 0.9,
              notes: ['+9% Y/Y', '(165%) operating margin', '(188pp) Y/Y'],
            },
            {
              label: 'Inter-segment eliminations',
              value: -2.9,
              notes: ['Source chart rounds segment revenue and eliminations; items sum to $45.7B versus $45.8B reported total.'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 38.1 },
          operatingExpenses: {
            total: 7.1,
            items: [
              { id: 'fulfillment', label: 'Fulfillment', value: 3.4 },
              { id: 'marketing', label: 'Marketing', value: 2.2 },
              { id: 'rnd', label: 'R&D', value: 1.0 },
              { id: 'ga', label: 'General & admin', value: 0.5 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.2 },
        },
        otherIncome: {
          total: 0.5,
          items: [{ id: 'other', label: 'Other', value: 0.5 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 7.7, notes: ['17% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['1% margin', '(2pp) Y/Y'] },
          net: {
            id: 'net_profit',
            label: 'Net profit',
            value: 0.8,
            notes: ['2% margin', '(2pp) Y/Y', 'Official release rounds net income to US$0.7B; source chart displays $0.8B.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +5%'],
              items: [
                { label: '京东零售', notes: ['同比 +2%', '营业利润率 6%', '同比 +1 个百分点'] },
                { label: '京东物流', notes: ['同比 +29%', '营业利润率 2%', '同比 +2 个百分点'] },
                { label: '新业务', notes: ['同比 +9%', '营业利润率 (165%)', '同比 (188 个百分点)'] },
                { label: '分部间抵销', notes: ['源图对分部收入和抵销额做了四舍五入；分项合计为 $45.7B，报告总收入为 $45.8B。'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { label: '履约' },
                  { label: '营销' },
                  { label: '研发' },
                  { label: '管理费用' },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 17%', '同比 +1 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 1%', '同比 (2 个百分点)'] },
              net: {
                label: '净利润',
                notes: ['利润率 2%', '同比 (2 个百分点)', '官方公告将净利润四舍五入为 7 亿美元；源图显示为 8 亿美元。'],
              },
            },
          },
        },
      },
      {
        key: 'klarna-q1-fy26',
        company: 'Klarna',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/klarna-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1012,
          notes: ['+44% Y/Y'],
          items: [
            { id: 'transaction_revenue', label: 'Transaction revenue', value: 671, notes: ['+29% Y/Y'] },
            { id: 'interest', label: 'Interest', value: 284, notes: ['+56% Y/Y'] },
            { id: 'consumer_revenue', label: 'Consumer Revenue', value: 57, notes: ['New Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: {
            label: 'Transaction margin costs',
            value: 623,
            notes: ['Source chart presents these costs as the bridge from revenue to transaction margin dollars.'],
            items: [
              { id: 'processing_servicing_costs', label: 'Processing and servicing costs', value: 266 },
              { id: 'provision_credit_losses', label: 'Provision for credit losses', value: 186 },
              { id: 'funding_costs', label: 'Funding costs', value: 171 },
            ],
          },
          operatingExpenses: {
            total: 372,
            items: [
              { id: 'tech_product_development', label: 'Tech & product development', value: 129 },
              { id: 'sales_marketing', label: 'Sales & marketing', value: 105 },
              { id: 'general_administrative', label: 'General & administrative', value: 81 },
              { id: 'customer_service_operations', label: 'Customer service & operations', value: 55 },
              { id: 'other_operating_expense', label: 'Other', value: 2 },
            ],
          },
          tax: { label: 'Tax', value: 0, notes: ['No separate tax line is shown in the source chart.'] },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 16,
          items: [{ id: 'other', label: 'Other', value: 16 }],
        },
        profit: {
          gross: {
            id: 'transaction_margin',
            label: 'Transaction margin dollars',
            value: 389,
            notes: ['+44% Y/Y'],
          },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 17, notes: ['1% margin', '+6pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1, notes: ['0% margin', '+6pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +44%'],
              items: [
                { label: '交易收入', notes: ['同比 +29%'] },
                { label: '利息', notes: ['同比 +56%'] },
                { label: '消费者收入', notes: ['同比新增'] },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '交易毛利成本',
                notes: ['源图将这些成本列为从收入到交易毛利额的桥接项目。'],
                items: [
                  { label: '处理和服务成本' },
                  { label: '信用损失准备金' },
                  { label: '融资成本' },
                ],
              },
              operatingExpenses: {
                items: [
                  { label: '技术与产品开发' },
                  { label: '销售与营销' },
                  { label: '一般及行政' },
                  { label: '客服与运营' },
                  { label: '其他' },
                ],
              },
              tax: { label: '税费', notes: ['源图未显示单独的税费项目。'] },
            },
            otherExpenses: {
              items: [{ label: '其他' }],
            },
            profit: {
              gross: { label: '交易毛利额', notes: ['同比 +44%'] },
              operating: { label: '营业利润', notes: ['利润率 1%', '同比 +6 个百分点'] },
              net: { label: '净利润', notes: ['利润率 0%', '同比 +6 个百分点'] },
            },
          },
        },
      },
      {
        key: 'klaviyo-q1-fy26',
        company: 'Klaviyo',
        period: 'Q1 FY26',
        periodNote: 'Quarter ended Mar. 31, 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/klaviyo-q1-fy26.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 358,
          notes: ['+28% Y/Y'],
          items: [
            {
              id: 'americas',
              label: 'Americas',
              value: 227,
              notes: ['+22% Y/Y', 'United States and Other Americas sum to $226M due to rounded source figures.'],
              children: [
                { id: 'united_states', label: 'United States', value: 209, notes: ['+22% Y/Y'] },
                { id: 'other_americas', label: 'Other Americas', value: 17, notes: ['+28% Y/Y'] },
              ],
            },
            { id: 'apac', label: 'APAC', value: 37, notes: ['+31% Y/Y'] },
            { id: 'emea', label: 'EMEA', value: 94, notes: ['+42% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 89 },
          operatingExpenses: {
            total: 267,
            items: [
              { id: 'sm', label: 'S&M', value: 134, notes: ['37% of revenue', '(7pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 80, notes: ['22% of revenue', '(2pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 53, notes: ['15% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 2 },
        },
        otherIncome: {
          total: 9,
          items: [{ id: 'other', label: 'Other', value: 9 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 269, notes: ['75% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2, notes: ['0% margin', '+9pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 9, notes: ['3% margin', '+8pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月 31 日的季度',
            revenue: {
              notes: ['同比 +28%'],
              items: [
                {
                  id: 'americas',
                  label: '美洲',
                  notes: ['同比 +22%', '美国和美洲其他地区因源图四舍五入合计为 $226M。'],
                  children: [
                    { id: 'united_states', label: '美国', notes: ['同比 +22%'] },
                    { id: 'other_americas', label: '美洲其他地区', notes: ['同比 +28%'] },
                  ],
                },
                { id: 'apac', label: '亚太', notes: ['同比 +31%'] },
                { id: 'emea', label: '欧洲、中东和非洲', notes: ['同比 +42%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与营销', notes: ['占收入 37%', '同比 (7 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (2 个百分点)'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 15%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 75%', '同比 (1 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 0%', '同比 +9 个百分点'] },
              net: { label: '净利润', notes: ['利润率 3%', '同比 +8 个百分点'] },
            },
          },
        },
      },
      {
        key: 'lenovo-q4-fy26',
        company: 'Lenovo',
        period: 'Q4 FY26',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/lenovo-q4-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 21.6,
          notes: ['+27% Y/Y'],
          items: [
            { id: 'idg', label: 'IDG Intelligent Devices Group', value: 14.6, notes: ['+24% Y/Y', '7% operating margin'] },
            { id: 'isg', label: 'ISG Infrastructure Solutions Group', value: 5.6, notes: ['+37% Y/Y', '4% operating margin'] },
            { id: 'ssg', label: 'SSG Solutions & Services Group', value: 2.6, notes: ['+19% Y/Y', '22% operating margin'] },
            {
              label: 'Eliminations',
              value: -1.2,
              notes: ['Shown as an eliminations outflow before consolidated revenue in the source chart.'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 18.0 },
          operatingExpenses: {
            total: 2.7,
            items: [
              { id: 'selling_distribution', label: 'Selling & Distribution', value: 1.1, notes: ['5% of revenue', '(0pp) Y/Y'] },
              { id: 'administrative', label: 'Administrative', value: 0.9, notes: ['4% of revenue', '(0pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 0.7, notes: ['3% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.1 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.2,
          items: [{ id: 'financial', label: 'Financial', value: 0.2 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 3.5, notes: ['16% margin', '+0pp Y/Y'] },
          operating: {
            id: 'operating_profit',
            label: 'Operating profit',
            value: 0.9,
            notes: ['4% margin', '+2pp Y/Y', 'Source chart also shows a $0.1B Other rounding bridge.'],
          },
          net: { id: 'net_profit', label: 'Net profit', value: 0.6, notes: ['3% margin', '+2pp Y/Y'] },
        },
      },
      {
        key: 'ibm-q1-fy26',
        company: 'IBM',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/ibm-q1-fy26.png',
        roundingTolerance: 0.2,
        revenue: {
          total: 15.9,
          notes: ['+9% Y/Y'],
          items: [
            { id: 'software', label: 'Software', value: 7.1, notes: ['+11% Y/Y', '83% gross margin'] },
            { id: 'consulting', label: 'Consulting', value: 5.3, notes: ['+4% Y/Y', '28% gross margin'] },
            { id: 'infrastructure', label: 'Infrastructure', value: 3.3, notes: ['+15% Y/Y', '57% gross margin'] },
            { id: 'financing', label: 'Financing', value: 0.2, notes: ['+15% Y/Y', '43% gross margin'] },
            { id: 'other_revenue', label: 'Other', value: 0.048, notes: ['$48M'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.0 },
          operatingExpenses: {
            total: 7.1,
            notes: ['SG&A and R&D are offset by $0.2B of intellectual property income in the source chart.'],
            items: [
              { id: 'sga', label: 'SG&A', value: 5.1, notes: ['32% of revenue', '(2pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 2.2, notes: ['14% of revenue', '+0pp Y/Y'] },
              { id: 'intellectual_property', label: 'Intellectual property income offset', value: -0.2, notes: ['Shown as +$0.2B income in the source chart.'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.2 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.5,
          items: [{ id: 'interest', label: 'Interest', value: 0.5 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 9.0, notes: ['56% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['12% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1.2, notes: ['8% margin', '+0pp Y/Y'] },
        },
      },
      {
        key: 'uber-q1-fy26',
        company: 'Uber',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/uber-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 13.2,
          notes: ['+14% Y/Y'],
          items: [
            { id: 'mobility', label: 'Mobility', value: 6.8, notes: ['+5% Y/Y', '30% adjusted margin', '+3pp Y/Y'] },
            { id: 'delivery', label: 'Delivery', value: 5.1, notes: ['+34% Y/Y', '19% adjusted margin', '(0pp) Y/Y'] },
            { id: 'freight', label: 'Uber Freight', value: 1.3, notes: ['+6% Y/Y', '0% adjusted margin', '(0pp) Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.3 },
          operatingExpenses: {
            total: 4.0,
            items: [
              { id: 'sm', label: 'S&M', value: 1.3, notes: ['10% of revenue', '+1pp Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 1.0, notes: ['7% of revenue', '+0pp Y/Y'] },
              { id: 'operations', label: 'Operations', value: 0.8, notes: ['6% of revenue', '(0pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.8, notes: ['6% of revenue', '+0pp Y/Y'] },
              { id: 'da', label: 'D&A', value: 0.2, notes: ['1% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.2, notes: ['source label reads ($1.2B)'] },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 1.4,
          items: [{ id: 'other', label: 'Other', value: 1.4 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 5.9, notes: ['45% margin', '+5pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 1.9, notes: ['15% margin', '+4pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.3 },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +14%'],
              items: [
                { id: 'mobility', label: '出行', notes: ['同比 +5%', '调整后利润率 30%', '同比 +3 个百分点'] },
                { id: 'delivery', label: '配送', notes: ['同比 +34%', '调整后利润率 19%', '同比 (0 个百分点)'] },
                { id: 'freight', label: 'Uber Freight 货运', notes: ['同比 +6%', '调整后利润率 0%', '同比 (0 个百分点)'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与市场', notes: ['占收入 10%', '同比 +1 个百分点'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 7%', '同比 +0 个百分点'] },
                  { id: 'operations', label: '运营', notes: ['占收入 6%', '同比 (0 个百分点)'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 6%', '同比 +0 个百分点'] },
                  { id: 'da', label: '折旧与摊销', notes: ['占收入 1%', '同比 (0 个百分点)'] },
                ],
              },
              tax: { label: '税费', notes: ['来源图表标注为 ($1.2B)'] },
            },
            otherExpenses: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 45%', '同比 +5 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 15%', '同比 +4 个百分点'] },
              net: { label: '净利润' },
            },
          },
        },
      },
      {
        key: 'salesforce-q1-fy27',
        company: 'Salesforce',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/salesforce-q1-fy27.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 11.1,
          notes: ['+13% Y/Y'],
          items: [
            {
              id: 'subscription_support',
              label: 'Subscription and support',
              value: 10.6,
              notes: ['+14% Y/Y'],
              children: [
                { id: 'agentforce_apps', label: 'Agentforce Apps', value: 6.9, notes: ['+9% Y/Y'] },
                { id: 'data360_platform', label: 'Data 360 Headless Platform & Other', value: 3.7, notes: ['+25% Y/Y'] },
              ],
            },
            { id: 'professional_services', label: 'Professional services', value: 0.5, notes: ['+2% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.6 },
          operatingExpenses: {
            total: 6.2,
            items: [
              { id: 'sm', label: 'S&M', value: 3.8, notes: ['34% of revenue', '(1pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 1.6, notes: ['15% of revenue', '(0pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.7, notes: ['7% of revenue', '(0pp) Y/Y'] },
              { id: 'restructuring', label: 'Restructuring', value: 0.1, notes: ['1% of revenue', '+0pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.6 },
        },
        otherIncome: {
          total: 0.4,
          items: [{ id: 'other', label: 'Other', value: 0.4 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 8.6, notes: ['77% margin', '(0pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2.3, notes: ['21% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 2.1, notes: ['19% margin', '+3pp Y/Y'] },
        },
      },
      {
        key: 'samsung-q1-fy26',
        company: 'Samsung',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: 'KRW',
        unit: 'T',
        decimals: 1,
        sourceImage: 'input/processed/samsung-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 133.9,
          notes: ['+69% Y/Y'],
          items: [
            {
              id: 'device_solutions',
              label: 'Device Solutions',
              value: 81.7,
              notes: ['+225% Y/Y', 'Memory, Foundry, & System LSI'],
            },
            {
              id: 'device_experience',
              label: 'Device eXperience',
              value: 52.7,
              notes: ['+2% Y/Y', 'Digital TVs, Refrigerators, Mobile phones, Communication systems'],
            },
            { id: 'samsung_display', label: 'Samsung Display', value: 6.7, notes: ['+14% Y/Y'] },
            { id: 'harman', label: 'Harman', value: 3.8, notes: ['+12% Y/Y'] },
            {
              label: 'Eliminations',
              value: -11.0,
              notes: ['Shown as an eliminations cost before consolidated Sales in the source chart.'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 52.0 },
          operatingExpenses: {
            total: 24.7,
            items: [
              { id: 'sga', label: 'Sales, general & admin', value: 13.4, notes: ['10% of revenue', '(6pp) Y/Y'] },
              { id: 'rnd', label: 'Research & development', value: 11.3, notes: ['8% of revenue', '(3pp) Y/Y'] },
            ],
          },
          tax: {
            id: 'tax',
            label: 'Tax',
            value: 11.6,
            notes: ['Source chart label reads "(11.6B)", but the net-profit bridge implies 11.6T.'],
          },
        },
        otherIncome: {
          total: 1.6,
          items: [{ id: 'other', label: 'Other', value: 1.6 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 81.9, notes: ['61% margin', '+24pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 57.2, notes: ['43% margin', '+34pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 47.2, notes: ['35% margin', '+24pp Y/Y'] },
        },
      },
      {
        key: 'sony-fy25',
        company: 'Sony',
        period: 'FY25',
        periodNote: 'Ending Mar. 2026',
        currency: '¥',
        unit: 'B',
        decimals: 0,
        sourceImage: 'input/processed/sony-fy25.png',
        roundingTolerance: 1.5,
        revenue: {
          total: 12480,
          notes: ['+4% Y/Y'],
          items: [
            { id: 'game_network', label: 'Game & Network', value: 4686, notes: ['+0% Y/Y', '10% operating margin'] },
            { id: 'music', label: 'Music', value: 2120, notes: ['+15% Y/Y', '21% operating margin'] },
            { id: 'pictures', label: 'Pictures', value: 1499, notes: ['+0% Y/Y', '7% operating margin'] },
            { id: 'technology', label: 'Technology', value: 2261, notes: ['(6%) Y/Y', '7% operating margin'] },
            { id: 'imaging_sensing', label: 'Imaging & Sensing', value: 2152, notes: ['+20% Y/Y', '17% operating margin'] },
            { id: 'other_revenue', label: 'Other', value: 89, notes: ['(8%) Y/Y'] },
            {
              label: 'Elimination',
              value: -327,
              notes: ['Shown as an elimination cost before consolidated Sales in the source chart.'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_sales',
            label: 'Cost of sales',
            value: 8635,
            notes: ['Source chart sales and cost of sales imply ¥3,845B gross profit; chart displays ¥3,844B.'],
          },
          operatingExpenses: {
            total: 2397,
            items: [
              { id: 'sga', label: 'SG&A', value: 2299 },
              { id: 'other_expenses', label: 'Other expenses', value: 98 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 367 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 25,
          items: [{ id: 'other_after_operating', label: 'Other', value: 25 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 3844, notes: ['31% margin', '+1pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 1448, notes: ['12% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1055, notes: ['8% margin', '(1pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2025 财年',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 +4%'],
              items: [
                { id: 'game_network', label: '游戏与网络', notes: ['同比 +0%', '营业利润率 10%'] },
                { id: 'music', label: '音乐', notes: ['同比 +15%', '营业利润率 21%'] },
                { id: 'pictures', label: '影视', notes: ['同比 +0%', '营业利润率 7%'] },
                { id: 'technology', label: '技术', notes: ['同比 (6%)', '营业利润率 7%'] },
                { id: 'imaging_sensing', label: '成像与传感', notes: ['同比 +20%', '营业利润率 17%'] },
                { id: 'other_revenue', label: '其他', notes: ['同比 (8%)'] },
                { id: 'eliminations', label: '抵销', notes: ['来源图表将其显示为合并销售额前的抵销成本。'] },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '销售成本',
                notes: ['来源图表销售额和销售成本推导毛利润为 ¥3,845B；图中显示为 ¥3,844B。'],
              },
              operatingExpenses: {
                items: [
                  { id: 'sga', label: '销售、一般及行政费用' },
                  { id: 'other_expenses', label: '其他费用' },
                ],
              },
              tax: { label: '税费' },
            },
            otherExpenses: {
              items: [{ id: 'other_after_operating', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 31%', '同比 +1 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 12%', '同比 +1 个百分点'] },
              net: { label: '净利润', notes: ['利润率 8%', '同比 (1 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'sap-q1-fy26',
        company: 'SAP',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '€',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/sap-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 9.6,
          notes: ['+6% Y/Y'],
          items: [
            {
              id: 'cloud',
              label: 'Cloud',
              value: 6.0,
              notes: ['+19% Y/Y'],
              children: [
                { id: 'saas_paas', label: 'SaaS/PaaS', value: 5.9, notes: ['+21% Y/Y'] },
                { id: 'iaas', label: 'IaaS', value: 0.1, notes: ['(37%) Y/Y'] },
              ],
            },
            {
              id: 'licenses_support',
              label: 'Licenses & Support',
              value: 2.6,
              notes: ['(12%) Y/Y'],
              children: [
                { id: 'software_licenses', label: 'Software Licenses', value: 0.1, notes: ['(37%) Y/Y'] },
                { id: 'software_support', label: 'Software Support', value: 2.5, notes: ['(11%) Y/Y'] },
              ],
            },
            { id: 'services', label: 'Services', value: 1.0, notes: ['(6%) Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.6 },
          operatingExpenses: {
            total: 4.2,
            notes: ['Gross profit minus operating expenses differs from operating profit by €0.1B due to source chart rounding.'],
            items: [
              { id: 'sm', label: 'S&M', value: 2.1, notes: ['22% of revenue', '(2pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 1.7, notes: ['18% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.4, notes: ['4% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.8 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 7.0, notes: ['73% margin', '(0pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2.7, notes: ['29% margin', '+3pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1.9, notes: ['20% margin', '+0pp Y/Y'] },
        },
      },
      {
        key: 'servicenow-q1-fy26',
        company: 'ServiceNow',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/servicenow-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 3.8,
          notes: ['+22% Y/Y'],
          items: [
            { id: 'subscription', label: 'Subscription', value: 3.7, notes: ['+22% Y/Y', '78% gross margin'] },
            {
              id: 'professional_services',
              label: 'Professional services',
              value: 0.1,
              notes: ['+19% Y/Y', '(21%) gross margin'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 0.9,
            notes: ['Gross profit and cost of revenue sum to $3.7B due to source chart rounding.'],
          },
          operatingExpenses: {
            total: 2.3,
            items: [
              { id: 'sm', label: 'S&M', value: 1.2, notes: ['32% of revenue', '(2pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 0.8, notes: ['22% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.3, notes: ['8% of revenue', '+0pp Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.2 },
        },
        otherIncome: {
          total: 0.2,
          items: [{ id: 'interest', label: 'Interest', value: 0.2 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 2.8, notes: ['75% margin', '(4pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.5, notes: ['13% margin', '(1pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.5, notes: ['12% margin', '(2pp) Y/Y'] },
        },
      },
      {
        key: 'microsoft-q3-fy26',
        company: 'Microsoft',
        period: 'Q3 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/microsoft-q3-fy26.png',
        roundingTolerance: 3.1,
        revenue: {
          total: 82.9,
          notes: [
            '+18% Y/Y',
            'Source chart business-line items sum to $85.8B versus reported revenue of $82.9B; retained as source business attribution with classification/rounding tolerance.',
          ],
          items: [
            { id: 'server', label: 'Server', value: 35.6, notes: ['+32% Y/Y'] },
            { id: 'microsoft_365_commercial', label: 'Microsoft 365 Commercial', value: 25.6, notes: ['+17% Y/Y'] },
            { id: 'gaming', label: 'Gaming', value: 5.3, notes: ['(7%) Y/Y'] },
            { id: 'linkedin', label: 'LinkedIn', value: 4.8, notes: ['+12% Y/Y'] },
            { id: 'windows_devices', label: 'Windows & Devices', value: 4.0, notes: ['(2%) Y/Y'] },
            { id: 'search', label: 'Search', value: 3.8, notes: ['+9% Y/Y'] },
            { id: 'other_revenue', label: 'Other', value: 6.7, notes: ['+16% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 26.8 },
          operatingExpenses: {
            total: 17.7,
            notes: ['Operating expense detail shown in the source chart sums to $17.6B due to rounding.'],
            items: [
              { id: 'rnd', label: 'R&D', value: 8.9, notes: ['11% of revenue', '(1pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 6.8, notes: ['8% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 1.9, notes: ['2% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 7.6 },
        },
        otherIncome: {
          total: 0.9,
          items: [{ id: 'other', label: 'Other', value: 0.9 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 56.1, notes: ['68% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 38.4, notes: ['46% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 31.8, notes: ['38% margin', '+1pp Y/Y'] },
        },
      },
      {
        key: 'okta-q1-fy27',
        company: 'Okta',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/okta-q1-fy27.png',
        roundingTolerance: 0.65,
        revenue: {
          total: 765,
          notes: ['+11% Y/Y'],
          items: [
            { id: 'subscription', label: 'Subscription', value: 750, notes: ['+11% Y/Y'] },
            { id: 'professional_services', label: 'Professional services', value: 15, notes: ['Flat Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 170 },
          operatingExpenses: {
            total: 539,
            items: [
              { id: 'sm', label: 'Sales & marketing', value: 278, notes: ['36% of revenue', '+2pp Y/Y'] },
              { id: 'rnd', label: 'Research & development', value: 163, notes: ['21% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'General & admin', value: 98, notes: ['13% of revenue', '(2pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 4 },
        },
        otherIncome: {
          total: 22,
          items: [{ id: 'interest', label: 'Interest', value: 22 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 595, notes: ['78% margin', '+0pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 56, notes: ['7% margin', '+2pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 74, notes: ['10% margin', '+1pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +11%'],
              items: [
                { id: 'subscription', label: '订阅', notes: ['同比 +11%'] },
                { id: 'professional_services', label: '专业服务', notes: ['同比持平'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与市场', notes: ['占收入 36%', '同比 +2 个百分点'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 21%', '同比 (1 个百分点)'] },
                  { id: 'ga', label: '一般及行政', notes: ['占收入 13%', '同比 (2 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'interest', label: '利息' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 78%', '同比 +0 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 7%', '同比 +2 个百分点'] },
              net: { label: '净利润', notes: ['利润率 10%', '同比 +1 个百分点'] },
            },
          },
        },
      },
      {
        key: 'nvidia-q1-fy27',
        company: 'NVIDIA',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q1-fy27.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 81.6,
          notes: ['+85% Y/Y'],
          items: [
            {
              id: 'data_center',
              label: 'Data Center',
              value: 75.2,
              notes: ['+92% Y/Y'],
              children: [
                { id: 'hyperscale', label: 'Hyperscale', value: 37.9, notes: ['+115% Y/Y'] },
                { id: 'ai_clouds', label: 'AI Clouds, Industrial, & Enterprise', value: 37.4, notes: ['+74% Y/Y'] },
              ],
            },
            { id: 'edge', label: 'Edge Computing', value: 6.4, notes: ['+29% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 20.5 },
          operatingExpenses: {
            total: 7.6,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 6.3, notes: ['8% of revenue', '(1pp) Y/Y'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 1.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 11.6 },
        },
        otherIncome: {
          total: 16.4,
          items: [{ id: 'investments', label: 'Investments', value: 16.4 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 61.2, notes: ['75% margin', '+14pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 53.5, notes: ['66% margin', '+16pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 58.3, notes: ['71% margin', '+28pp Y/Y'] },
        },
      },
      {
        key: 'nvidia-q1-fy26',
        company: 'NVIDIA',
        period: 'Q1 FY26',
        periodNote: 'Ending Apr. 2025',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 44.1,
          notes: ['+12% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 39.1, notes: ['+10% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 3.8, notes: ['+48% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['(0%) Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['(1%) Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(12%) Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.4 },
          operatingExpenses: {
            total: 5.0,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 4.0, notes: ['9% of revenue', '(0pp) Q/Q'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 1.0, notes: ['2% of revenue', '(0pp) Q/Q'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 3.1 },
        },
        otherIncome: {
          total: 0.3,
          items: [{ id: 'other', label: 'Other', value: 0.3 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 26.7, notes: ['61% margin', '(13pp) Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 21.6, notes: ['49% margin', '(12pp) Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 18.9, notes: ['43% margin', '(14pp) Q/Q'] },
        },
      },
      {
        key: 'nvidia-q3-fy23',
        company: 'NVIDIA',
        period: 'Q3 FY23',
        periodNote: 'Ending Oct. 2022',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q3-fy23.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 5.9,
          notes: ['(12%) Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 3.8, notes: ['+1% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 1.6, notes: ['(23%) Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.2, notes: ['(60%) Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+14% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(48%) Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.8 },
          operatingExpenses: {
            total: 2.6,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 1.9 },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0.079,
          items: [
            { id: 'other', label: 'Other', value: 0.012 },
            { id: 'tax_benefit', label: 'Tax benefit', value: 0.067 },
          ],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 3.2, notes: ['54% margin', '+10pp Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.6, notes: ['10% margin', '+3pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.7, notes: ['11% margin', '+2pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q4-fy23',
        company: 'NVIDIA',
        period: 'Q4 FY23',
        periodNote: 'Ending Jan. 2023',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q4-fy23.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 6.1,
          notes: ['+2% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 3.6, notes: ['(6%) Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 1.8, notes: ['+16% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.2, notes: ['+13% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+17% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+15% Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.2 },
          operatingExpenses: {
            total: 2.6,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 2.0 },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0.132,
          items: [
            { id: 'other', label: 'Other', value: 0.032 },
            { id: 'tax_benefit', label: 'Tax benefit', value: 0.1 },
          ],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 3.8, notes: ['63% margin', '+10pp Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 1.3, notes: ['21% margin', '+11pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 1.4, notes: ['23% margin', '+12pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q1-fy24',
        company: 'NVIDIA',
        period: 'Q1 FY24',
        periodNote: 'Ending Apr. 2023',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q1-fy24.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 7.2,
          notes: ['+19% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 4.3, notes: ['+18% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 2.2, notes: ['+22% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.3, notes: ['+31% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+1% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(8%) Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 2.5 },
          operatingExpenses: {
            total: 2.5,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 1.9 },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.2 },
        },
        otherIncome: {
          total: 0.069,
          items: [{ id: 'other', label: 'Other', value: 0.069 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 4.6, notes: ['65% margin', '+1pp Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 2.1, notes: ['30% margin', '+9pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 2.0, notes: ['28% margin', '+5pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q2-fy24',
        company: 'NVIDIA',
        period: 'Q2 FY24',
        periodNote: 'Ending July 2023',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q2-fy24.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 13.5,
          notes: ['+88% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 10.3, notes: ['+141% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 2.5, notes: ['+11% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.4, notes: ['+28% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['(15%) Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(14%) Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.0 },
          operatingExpenses: {
            total: 2.7,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 2.0 },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.6 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.8 },
        },
        otherIncome: {
          total: 0.2,
          items: [{ id: 'other', label: 'Other', value: 0.2 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 9.5, notes: ['70% margin', '+5pp Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 6.8, notes: ['50% margin', '+21pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 6.2, notes: ['46% margin', '+17pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q3-fy24',
        company: 'NVIDIA',
        period: 'Q3 FY24',
        periodNote: 'Ending Oct. 2023',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q3-fy24.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 18.1,
          notes: ['+34% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 14.5, notes: ['+41% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 2.9, notes: ['+15% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.4, notes: ['+10% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+3% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+11% Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.7 },
          operatingExpenses: {
            total: 3.0,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 2.3, notes: ['13% of revenue', '(2pp) Y/Y'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.7, notes: ['4% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 1.3 },
        },
        otherIncome: {
          total: 0.1,
          items: [{ id: 'other', label: 'Other', value: 0.1 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 13.4, notes: ['74% margin', '+4pp Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 10.4, notes: ['57% margin', '+7pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 9.2, notes: ['51% margin', '+5pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q4-fy24',
        company: 'NVIDIA',
        period: 'Q4 FY24',
        periodNote: 'Ending Jan. 2024',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q4-fy24.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 22.1,
          notes: ['+22% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 18.4, notes: ['+27% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 2.9, notes: ['+0% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+11% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+8% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+23% Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.3 },
          operatingExpenses: {
            total: 3.2,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 2.5, notes: ['11% of revenue', '(2pp) Y/Y'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.7, notes: ['3% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 1.8 },
        },
        otherIncome: {
          total: 0.5,
          items: [{ id: 'other', label: 'Other', value: 0.5 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 16.8, notes: ['76% margin', '+2pp Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 13.6, notes: ['62% margin', '+4pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 12.3, notes: ['56% margin', '+5pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q1-fy25',
        company: 'NVIDIA',
        period: 'Q1 FY25',
        periodNote: 'Ending Apr. 2024',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q1-fy25.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 26.0,
          notes: ['+18% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 22.6, notes: ['+23% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 2.6, notes: ['(8%) Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.4, notes: ['(8%) Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+17% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['(13%) Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 5.6 },
          operatingExpenses: {
            total: 3.5,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 2.7, notes: ['10% of revenue', '(1pp) Q/Q'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.8, notes: ['3% of revenue', '(0pp) Q/Q'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 2.4 },
        },
        otherIncome: {
          total: 0.4,
          items: [{ id: 'other', label: 'Other', value: 0.4 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 20.4, notes: ['78% margin', '+2pp Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 16.9, notes: ['65% margin', '+3pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 14.9, notes: ['57% margin', '+2pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q2-fy25',
        company: 'NVIDIA',
        period: 'Q2 FY25',
        periodNote: 'Ending July 2024',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q2-fy25.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 30.0,
          notes: ['+15% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 26.3, notes: ['+16% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 2.9, notes: ['+9% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+6% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.3, notes: ['+5% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+13% Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 7.5 },
          operatingExpenses: {
            total: 3.9,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 3.1, notes: ['10% of revenue', '(0pp) Q/Q'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.8, notes: ['3% of revenue', '(0pp) Q/Q'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 2.6 },
        },
        otherIncome: {
          total: 0.6,
          items: [{ id: 'other', label: 'Other', value: 0.6 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 22.6, notes: ['75% margin', '(3pp) Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 18.6, notes: ['62% margin', '(3pp) Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 16.6, notes: ['55% margin', '(2pp) Q/Q'] },
        },
      },
      {
        key: 'nvidia-q3-fy25',
        company: 'NVIDIA',
        period: 'Q3 FY25',
        periodNote: 'Ending Oct. 2024',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q3-fy25.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 35.1,
          notes: ['+17% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 30.8, notes: ['+17% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 3.3, notes: ['+14% Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+7% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.4, notes: ['+30% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+10% Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 8.9 },
          operatingExpenses: {
            total: 4.3,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 3.4, notes: ['10% of revenue', '(1pp) Q/Q'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 0.9, notes: ['3% of revenue', '(0pp) Q/Q'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 3.0 },
        },
        otherIncome: {
          total: 0.4,
          items: [{ id: 'other', label: 'Other', value: 0.4 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 26.2, notes: ['75% margin', '(1pp) Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 21.9, notes: ['62% margin', '+0pp Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 19.3, notes: ['55% margin', '(0pp) Q/Q'] },
        },
      },
      {
        key: 'nvidia-q4-fy25',
        company: 'NVIDIA',
        period: 'Q4 FY25',
        periodNote: 'Ending Jan. 2025',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q4-fy25.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 39.3,
          notes: ['+12% Q/Q'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 35.6, notes: ['+16% Q/Q'] },
            { id: 'gaming', label: 'Gaming', value: 2.5, notes: ['(22%) Q/Q'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.5, notes: ['+5% Q/Q'] },
            { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+27% Q/Q'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.1, notes: ['+30% Q/Q'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 10.6 },
          operatingExpenses: {
            total: 4.7,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 3.7, notes: ['9% of revenue', '(0pp) Q/Q'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 1.0, notes: ['2% of revenue', '(0pp) Q/Q'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 3.1 },
        },
        otherIncome: {
          total: 1.1,
          items: [{ id: 'other', label: 'Other', value: 1.1 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 28.7, notes: ['73% margin', '(2pp) Q/Q'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 24.0, notes: ['61% margin', '(1pp) Q/Q'] },
          net: { id: 'net_profit', label: 'Net profit', value: 22.1, notes: ['56% margin', '+1pp Q/Q'] },
        },
      },
      {
        key: 'nvidia-q2-fy26',
        company: 'NVIDIA',
        period: 'Q2 FY26',
        periodNote: 'Ending July 2025',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q2-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 46.7,
          notes: ['+56% Y/Y'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 41.1, notes: ['+56% Y/Y'] },
            { id: 'gaming', label: 'Gaming', value: 4.3, notes: ['+49% Y/Y'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.6, notes: ['+32% Y/Y'] },
            { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+69% Y/Y'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.2, notes: ['+97% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 12.9 },
          operatingExpenses: {
            total: 5.4,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 4.3, notes: ['9% of revenue', '(1pp) Y/Y'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 1.1, notes: ['2% of revenue', '(0pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 4.8 },
        },
        otherIncome: {
          total: 2.8,
          items: [{ id: 'other', label: 'Other', value: 2.8 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 33.9, notes: ['72% margin', '(3pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 28.4, notes: ['61% margin', '(1pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 26.4, notes: ['57% margin', '+1pp Y/Y'] },
        },
      },
      {
        key: 'nvidia-q3-fy26',
        company: 'NVIDIA',
        period: 'Q3 FY26',
        periodNote: 'Ending Oct 2025',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q3-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 57.0,
          notes: ['+62% Y/Y'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 51.2, notes: ['+66% Y/Y'] },
            { id: 'gaming', label: 'Gaming', value: 4.3, notes: ['+30% Y/Y'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 0.8, notes: ['+56% Y/Y'] },
            { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+32% Y/Y'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.2, notes: ['+79% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 15.2 },
          operatingExpenses: {
            total: 5.8,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 4.7, notes: ['8% of revenue', '(1pp) Y/Y'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 1.1, notes: ['2% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 6.0 },
        },
        otherIncome: {
          total: 1.9,
          items: [{ id: 'other', label: 'Other', value: 1.9 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 41.8, notes: ['73% margin', '(1pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 36.0, notes: ['63% margin', '+1pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 31.9, notes: ['56% margin', '+1pp Y/Y'] },
        },
      },
      {
        key: 'nvidia-q4-fy26',
        company: 'NVIDIA',
        period: 'Q4 FY26',
        periodNote: 'Ending Jan. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/nvidia-q4-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 68.1,
          notes: ['+73% Y/Y'],
          items: [
            { id: 'data_center', label: 'Data Center', value: 62.3, notes: ['+75% Y/Y'] },
            { id: 'gaming', label: 'Gaming', value: 3.7, notes: ['+47% Y/Y'] },
            { id: 'professional_visualization', label: 'Professional Visualization', value: 1.3, notes: ['+159% Y/Y'] },
            { id: 'automotive', label: 'Automotive', value: 0.6, notes: ['+6% Y/Y'] },
            { id: 'oem_other', label: 'OEM & Other', value: 0.2, notes: ['+28% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 17.0 },
          operatingExpenses: {
            total: 6.8,
            items: [
              { id: 'rnd', label: 'Research & Development', value: 5.5, notes: ['8% of revenue', '(1pp) Y/Y'] },
              { id: 'sga', label: 'Sales, General & Admin', value: 1.3, notes: ['2% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 7.4 },
        },
        otherIncome: {
          total: 6.1,
          items: [{ id: 'other', label: 'Other', value: 6.1 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 51.1, notes: ['75% margin', '+2pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 44.3, notes: ['65% margin', '+4pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 43.0, notes: ['63% margin', '+7pp Y/Y'] },
        },
      },
      {
        key: 'yum-brands-q1-fy26',
        company: 'Yum! Brands',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/yum-brands-q1-fy26.png',
        roundingTolerance: 0.2,
        revenue: {
          total: 2.1,
          notes: [
            '+15% Y/Y',
            'Source chart attributes revenue by brand sales; rounded brand items sum to $2.1B.',
          ],
          items: [
            { id: 'kfc', label: 'KFC', value: 0.9, notes: ['+14% Y/Y'] },
            { id: 'taco_bell', label: 'Taco Bell', value: 0.8, notes: ['+21% Y/Y'] },
            { id: 'pizza_hut', label: 'Pizza Hut', value: 0.3, notes: ['+10% Y/Y'] },
            { id: 'habit', label: 'The Habit Burger Grill', value: 0.1, notes: ['+2% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 0,
            notes: ['The source chart does not break out cost of revenue or gross profit.'],
          },
          operatingExpenses: {
            total: 1.5,
            notes: ['Source chart operating-expense detail sums to $1.4B due to rounding.'],
            items: [
              { id: 'company_restaurants', label: 'Company restaurants', value: 0.7 },
              { id: 'franchise_expenses', label: 'Franchise expenses', value: 0.4 },
              { id: 'ga', label: 'G&A', value: 0.3 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.1 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.1,
          items: [{ id: 'other', label: 'Other', value: 0.1 }],
        },
        profit: {
          gross: {
            id: 'gross_profit',
            label: 'Gross profit',
            value: 2.1,
            notes: ['Bookkeeping value for SSOT parity; gross profit is not shown in the source chart.'],
          },
          operating: {
            id: 'operating_profit',
            label: 'Operating profit',
            value: 0.6,
            notes: ['31% margin', '+1pp Y/Y', 'Source chart also shows $46M other operating income feeding operating profit.'],
          },
          net: { id: 'net_profit', label: 'Net profit', value: 0.4, notes: ['21% margin', '+7pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: [
                '同比 +15%',
                '来源图表按品牌销售额归因收入；四舍五入后的品牌项目合计为 $2.1B。',
              ],
              items: [
                { id: 'kfc', label: 'KFC', notes: ['同比 +14%'] },
                { id: 'taco_bell', label: '塔可钟', notes: ['同比 +21%'] },
                { id: 'pizza_hut', label: '必胜客', notes: ['同比 +10%'] },
                { id: 'habit', label: 'Habit 汉堡烤吧', notes: ['同比 +2%'] },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['来源图表未拆分收入成本或毛利润。'],
              },
              operatingExpenses: {
                notes: ['来源图表运营费用明细因四舍五入合计为 $1.4B。'],
                items: [
                  { id: 'company_restaurants', label: '公司自营餐厅' },
                  { id: 'franchise_expenses', label: '特许经营费用' },
                  { id: 'ga', label: '管理费用' },
                ],
              },
              tax: { label: '税费' },
            },
            otherExpenses: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: {
                label: '毛利润',
                notes: ['用于 SSOT 对齐的账面值；来源图表未显示毛利润。'],
              },
              operating: {
                label: '营业利润',
                notes: ['利润率 31%', '同比 +1 个百分点', '来源图表还显示 $46M 其他营业收入流入营业利润。'],
              },
              net: { label: '净利润', notes: ['利润率 21%', '同比 +7 个百分点'] },
            },
          },
        },
      },
      {
        key: 'synopsys-q2-fy26',
        company: 'Synopsys',
        period: 'Q2 FY26',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/synopsys-q2-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 2.275985,
          notes: ['+42% Y/Y'],
          items: [
            {
              id: 'design_automation',
              label: 'Design Automation',
              value: 1.8218,
              notes: ['+62% Y/Y', 'Adjusted margin 41%', '+5pp Y/Y'],
            },
            {
              id: 'design_ip',
              label: 'Design IP',
              value: 0.4542,
              notes: ['(6%) Y/Y', 'Adjusted margin 14%', '(23pp) Y/Y'],
            },
          ],
        },
        costs: {
          costOfRevenue: {
            id: 'cost_of_revenue',
            label: 'Cost of revenue',
            value: 0.62985,
            notes: ['Official total cost of revenue was $629.9M; source chart displays ($0.6B).'],
          },
          operatingExpenses: {
            total: 1.525709,
            notes: ['Official total operating expenses were $1.526B; source chart displays ($1.5B).'],
            items: [
              { id: 'rnd', label: 'R&D', value: 0.700124, notes: ['31% of revenue', '(4pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 0.381998, notes: ['17% of revenue', '+3pp Y/Y'] },
              {
                id: 'other_opex',
                label: 'Other',
                value: 0.271169,
                notes: ['12% of revenue', '+12pp Y/Y', 'Includes acquired-intangible amortization and restructuring charges.'],
              },
              { id: 'ga', label: 'G&A', value: 0.172418, notes: ['8% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: {
            id: 'tax',
            label: 'Tax',
            value: 0.103321,
            notes: [
              'Modeled as the source chart tax outflow from operating profit to net profit; official provision for income taxes was $2.4M and net interest/other expense accounts for the remainder.',
            ],
          },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1.646135, notes: ['72% margin', '(8pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.120426, notes: ['5% margin', '(18pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.017105, valueText: '$17M', notes: ['1% margin', '(21pp) Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2026 财年第二季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +42%'],
              items: [
                {
                  id: 'design_automation',
                  label: '设计自动化',
                  notes: ['同比 +62%', '调整后利润率 41%', '同比 +5 个百分点'],
                },
                {
                  id: 'design_ip',
                  label: '设计 IP',
                  notes: ['同比 (6%)', '调整后利润率 14%', '同比 (23 个百分点)'],
                },
              ],
            },
            costs: {
              costOfRevenue: {
                label: '收入成本',
                notes: ['官方收入成本合计为 $629.9M；来源图表显示为 ($0.6B)。'],
              },
              operatingExpenses: {
                notes: ['官方运营费用合计为 $1.526B；来源图表显示为 ($1.5B)。'],
                items: [
                  { id: 'rnd', label: '研发', notes: ['占收入 31%', '同比 (4 个百分点)'] },
                  { id: 'sm', label: '销售与市场', notes: ['占收入 17%', '同比 +3 个百分点'] },
                  {
                    id: 'other_opex',
                    label: '其他',
                    notes: ['占收入 12%', '同比 +12 个百分点', '包括收购无形资产摊销和重组费用。'],
                  },
                  { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                ],
              },
              tax: {
                label: '税费',
                notes: [
                  '按来源图表中从营业利润流向净利润的税费流出建模；官方所得税拨备为 $2.4M，净利息和其他费用解释剩余差额。',
                ],
              },
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 72%', '同比 (8 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 5%', '同比 (18 个百分点)'] },
              net: { label: '净利润', notes: ['利润率 1%', '同比 (21 个百分点)'] },
            },
          },
        },
      },
      {
        key: 'warner-bros-q1-fy26',
        company: 'Warner Bros. Discovery',
        period: 'Q1 FY26',
        periodNote: 'Ending Mar. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/warner-bros-q1-fy26.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 8.893,
          notes: ['(1%) Y/Y'],
          items: [
            { id: 'studios', label: 'Studios', value: 3.125, notes: ['+35% Y/Y', '25% adj. margin', '+14pp Y/Y'] },
            { id: 'networks', label: 'Networks', value: 4.377, notes: ['(8%) Y/Y', '37% adj. margin', '(0pp) Y/Y'] },
            { id: 'streaming', label: 'Streaming', value: 2.887, notes: ['+9% Y/Y', '15% adj. margin', '+2pp Y/Y'] },
            {
              label: 'Eliminations',
              value: -1.497,
              notes: ['Inter-segment eliminations shown in the source chart as a separate red outflow.'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 4.628 },
          operatingExpenses: {
            total: 6.734,
            items: [
              { id: 'sga', label: 'SG&A', value: 2.469, notes: ['28% of revenue', '+3pp Y/Y'] },
              { id: 'amortization', label: 'Amortization', value: 1.247, notes: ['14% of revenue', '(3pp) Y/Y'] },
              { id: 'other', label: 'Other', value: 0.218, notes: ['2% of revenue', '+0pp Y/Y'] },
              { id: 'netflix_termination_fee', label: 'Netflix Termination Fee', value: 2.8, notes: ['New'] },
            ],
          },
          tax: { label: 'Tax', value: 0 },
        },
        otherIncome: {
          total: 0,
          items: [],
        },
        otherExpenses: {
          total: 0.431,
          items: [
            {
              label: 'Net non-operating expense and attributable adjustments',
              value: 0.431,
              notes: ['Bridge from source-chart operating loss to the official approximately $2.9B net loss.'],
            },
          ],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 4.265, notes: ['48% margin', '+5pp Y/Y'] },
          operating: { label: 'Operating loss', value: -2.469, notes: ['(28%) margin', '(27pp) Y/Y'] },
          net: {
            label: 'Net loss',
            value: -2.9,
            notes: ['Official release states net loss available to Warner Bros. Discovery, Inc. was $2.9B.'],
          },
        },
        i18n: {
          zh: {
            period: '2026 财年第一季度',
            periodNote: '截至 2026 年 3 月',
            revenue: {
              notes: ['同比 (1%)'],
              items: [
                { label: '影视工作室', notes: ['同比 +35%', '调整后利润率 25%', '同比 +14 个百分点'] },
                { label: '线性网络', notes: ['同比 (8%)', '调整后利润率 37%', '同比 (0 个百分点)'] },
                { label: '流媒体', notes: ['同比 +9%', '调整后利润率 15%', '同比 +2 个百分点'] },
                { label: '抵销', notes: ['来源图中作为单独红色流出的分部间抵销。'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { label: '销售、一般及行政', notes: ['占收入 28%', '同比 +3 个百分点'] },
                  { label: '摊销', notes: ['占收入 14%', '同比 (3 个百分点)'] },
                  { label: '其他', notes: ['占收入 2%', '同比 +0 个百分点'] },
                  { label: 'Netflix 解约费', notes: ['新增'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherExpenses: {
              items: [
                {
                  label: '净非经营费用及归属调整',
                  notes: ['用于从来源图中的经营亏损桥接到官方约 $2.9B 净亏损。'],
                },
              ],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 48%', '同比 +5 个百分点'] },
              operating: { label: '经营亏损', notes: ['利润率 (28%)', '同比 (27 个百分点)'] },
              net: { label: '净亏损', notes: ['官方公告称 Warner Bros. Discovery, Inc. 应占净亏损为 $2.9B。'] },
            },
          },
        },
      },
      {
        key: 'workday-q1-fy27',
        company: 'Workday',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/workday-q1-fy27.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 2.5,
          notes: ['+13% Y/Y'],
          items: [
            { id: 'subscription', label: 'Subscription', value: 2.4, notes: ['+14% Y/Y', '82% gross margin'] },
            { id: 'professional_services', label: 'Professional services', value: 0.2, notes: ['+4% Y/Y', '(2%) gross margin'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 0.6 },
          operatingExpenses: {
            total: 1.6,
            items: [
              { id: 'product_development', label: 'Product development', value: 0.7, notes: ['28% of revenue', '(2pp) Y/Y'] },
              { id: 'sm', label: 'S&M', value: 0.7, notes: ['27% of revenue', '(1pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 0.2, notes: ['8% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 0.1 },
        },
        otherIncome: {
          total: 0.017,
          items: [{ id: 'other', label: 'Other', value: 0.017, valueText: '$17M' }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 1.9, notes: ['76% margin', '+0pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 0.3, notes: ['13% margin', '+12pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 0.2, notes: ['9% margin', '+6pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +13%'],
              items: [
                { id: 'subscription', label: '订阅', notes: ['同比 +14%', '毛利率 82%'] },
                { id: 'professional_services', label: '专业服务', notes: ['同比 +4%', '毛利率 (2%)'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'product_development', label: '产品开发', notes: ['占收入 28%', '同比 (2 个百分点)'] },
                  { id: 'sm', label: 'S&M 费用', notes: ['占收入 27%', '同比 (1 个百分点)'] },
                  { id: 'ga', label: 'G&A 费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 76%', '同比 +0 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 13%', '同比 +12 个百分点'] },
              net: { label: '净利润', notes: ['利润率 9%', '同比 +6 个百分点'] },
            },
          },
        },
      },
      {
        key: 'uipath-q1-fy27',
        company: 'UiPath',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/uipath-q1-fy27.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 418,
          notes: ['+17% Y/Y'],
          items: [
            { id: 'subscription', label: 'Subscription', value: 253, notes: ['+16% Y/Y', '83% gross margin'] },
            { id: 'licenses', label: 'Licenses', value: 149, notes: ['+16% Y/Y', '99% gross margin'] },
            {
              id: 'professional_services',
              label: 'Professional services',
              value: 16,
              notes: ['+47% Y/Y', '(93%) gross margin'],
            },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 77 },
          operatingExpenses: {
            total: 313,
            items: [
              { id: 'sm', label: 'S&M', value: 168, notes: ['40% of revenue', '(5pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 93, notes: ['22% of revenue', '(4pp) Y/Y'] },
              { id: 'ga', label: 'G&A', value: 53, notes: ['13% of revenue', '(3pp) Y/Y'] },
            ],
            notes: ['S&M, R&D, and G&A sum to $314M due to rounded source figures.'],
          },
          tax: { id: 'tax', label: 'Tax', value: 18 },
        },
        otherIncome: {
          total: 13,
          items: [{ id: 'other', label: 'Other', value: 13 }],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 341, notes: ['82% margin', '(0pp) Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 28, notes: ['7% margin', '+11pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 23, notes: ['7% margin', '+11pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +17%'],
              items: [
                { id: 'subscription', label: '订阅', notes: ['同比 +16%', '毛利率 83%'] },
                { id: 'licenses', label: '许可证', notes: ['同比 +16%', '毛利率 99%'] },
                { id: 'professional_services', label: '专业服务', notes: ['同比 +47%', '毛利率 (93%)'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与营销', notes: ['占收入 40%', '同比 (5 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 22%', '同比 (4 个百分点)'] },
                  { id: 'ga', label: '一般及行政', notes: ['占收入 13%', '同比 (3 个百分点)'] },
                ],
                notes: ['销售与营销、研发、一般及行政因源图四舍五入合计为 $314M。'],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other', label: '其他' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 82%', '同比 (0 个百分点)'] },
              operating: { label: '营业利润', notes: ['利润率 7%', '同比 +11 个百分点'] },
              net: { label: '净利润', notes: ['利润率 7%', '同比 +11 个百分点'] },
            },
          },
        },
      },
      {
        key: 'walmart-q1-fy27',
        company: 'Walmart',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        sourceImage: 'input/processed/walmart-q1-fy27.png',
        roundingTolerance: 0.15,
        revenue: {
          total: 177.8,
          notes: ['+7% Y/Y'],
          items: [
            { id: 'walmart_us', label: 'Walmart US', value: 117.2, notes: ['+4% Y/Y', '5% operating margin'] },
            { id: 'walmart_international', label: 'Walmart International', value: 35.1, notes: ['+18% Y/Y', '5% operating margin'] },
            { id: 'sams_club', label: "Sam's Club", value: 23.4, notes: ['+6% Y/Y', '3% operating margin'] },
            { id: 'membership_other', label: 'Membership and other', value: 2.1, notes: ['+27% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_sales', label: 'Cost of sales', value: 133.1 },
          operatingExpenses: {
            total: 37.2,
            items: [
              { id: 'operating_expenses', label: 'Operating expenses', value: 37.2 },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 1.7 },
        },
        otherIncome: {
          total: 0.3,
          items: [{ id: 'other_income', label: 'Other', value: 0.3 }],
        },
        otherExpenses: {
          total: 0.6,
          items: [{ id: 'interest', label: 'Interest', value: 0.6 }],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 44.7, notes: ['25% margin', '+0pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 7.5, notes: ['4% margin', '(0pp) Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 5.5, notes: ['3% margin', '+0pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +7%'],
              items: [
                { id: 'walmart_us', label: '沃尔玛美国', notes: ['同比 +4%', '营业利润率 5%'] },
                { id: 'walmart_international', label: '沃尔玛国际', notes: ['同比 +18%', '营业利润率 5%'] },
                { id: 'sams_club', label: '山姆会员店', notes: ['同比 +6%', '营业利润率 3%'] },
                { id: 'membership_other', label: '会员及其他', notes: ['同比 +27%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '销售成本' },
              operatingExpenses: {
                items: [
                  { id: 'operating_expenses', label: '运营费用' },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [{ id: 'other_income', label: '其他' }],
            },
            otherExpenses: {
              items: [{ id: 'interest', label: '利息' }],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 25%', '同比 +0 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 4%', '同比 (0 个百分点)'] },
              net: { label: '净利润', notes: ['利润率 3%', '同比 +0 个百分点'] },
            },
          },
        },
      },
      {
        key: 'zoom-q1-fy27',
        company: 'Zoom',
        period: 'Q1 FY27',
        periodNote: 'Ending Apr. 2026',
        currency: '$',
        unit: 'M',
        decimals: 0,
        sourceImage: 'input/processed/zoom-q1-fy27.png',
        roundingTolerance: 1.1,
        revenue: {
          total: 1239,
          notes: ['+5% Y/Y'],
          items: [
            { id: 'enterprise', label: 'Enterprise', value: 756, notes: ['+7% Y/Y'] },
            { id: 'online', label: 'Online', value: 483, notes: ['+3% Y/Y'] },
          ],
        },
        costs: {
          costOfRevenue: { id: 'cost_of_revenue', label: 'Cost of revenue', value: 274 },
          operatingExpenses: {
            total: 654,
            items: [
              { id: 'sm', label: 'S&M', value: 330, notes: ['27% of revenue', '(3pp) Y/Y'] },
              { id: 'rnd', label: 'R&D', value: 228, notes: ['18% of revenue', '+1pp Y/Y'] },
              { id: 'ga', label: 'G&A', value: 96, notes: ['8% of revenue', '(1pp) Y/Y'] },
            ],
          },
          tax: { id: 'tax', label: 'Tax', value: 106 },
        },
        otherIncome: {
          total: 221,
          items: [
            { id: 'investments', label: 'Investments', value: 152 },
            { id: 'other', label: 'Other', value: 69 },
          ],
        },
        otherExpenses: {
          total: 0,
          items: [],
        },
        profit: {
          gross: { id: 'gross_profit', label: 'Gross profit', value: 965, notes: ['78% margin', '+2pp Y/Y'] },
          operating: { id: 'operating_profit', label: 'Operating profit', value: 310, notes: ['25% margin', '+4pp Y/Y'] },
          net: { id: 'net_profit', label: 'Net profit', value: 426, notes: ['34% margin', '+13pp Y/Y'] },
        },
        i18n: {
          zh: {
            period: '2027 财年第一季度',
            periodNote: '截至 2026 年 4 月',
            revenue: {
              notes: ['同比 +5%'],
              items: [
                { id: 'enterprise', label: '企业', notes: ['同比 +7%'] },
                { id: 'online', label: '线上', notes: ['同比 +3%'] },
              ],
            },
            costs: {
              costOfRevenue: { label: '收入成本' },
              operatingExpenses: {
                items: [
                  { id: 'sm', label: '销售与市场', notes: ['占收入 27%', '同比 (3 个百分点)'] },
                  { id: 'rnd', label: '研发', notes: ['占收入 18%', '同比 +1 个百分点'] },
                  { id: 'ga', label: '管理费用', notes: ['占收入 8%', '同比 (1 个百分点)'] },
                ],
              },
              tax: { label: '税费' },
            },
            otherIncome: {
              items: [
                { id: 'investments', label: '投资' },
                { id: 'other', label: '其他' },
              ],
            },
            profit: {
              gross: { label: '毛利润', notes: ['利润率 78%', '同比 +2 个百分点'] },
              operating: { label: '营业利润', notes: ['利润率 25%', '同比 +4 个百分点'] },
              net: { label: '净利润', notes: ['利润率 34%', '同比 +13 个百分点'] },
            },
          },
        },
      },
    ],
  };
})(window);
