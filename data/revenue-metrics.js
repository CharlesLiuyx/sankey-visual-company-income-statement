/* ====================================================================
 *  Pure revenue metric SSOT.
 *
 *  This file stores company/product revenue observations that are not full
 *  income statements. Keep it to metric identity, time, values, definitions,
 *  conditions, lineage, and source metadata only.
 * ==================================================================== */
(function (global) {
  'use strict';

  const OPENAI_ARR_UNDERESTIMATION_NOTE =
    'Due to the source methodology, this observation may understate the metric by approximately 20%.';
  const ANTHROPIC_CODING_BREAKTHROUGH_NOTE =
    'Source chart flags Dec. 31, 2025 as a coding capability breakthrough.';
  const ANTHROPIC_AGENT_AI_SURGE_NOTE =
    'Source chart flags Mar. 31, 2026 as an Agent AI surge.';
  const ANTHROPIC_YEP_HALF_YEAR_NOTE =
    'Source chart flags Jun. 30, 2026 as a YEP half-year figure.';

  global.REVENUE_METRIC_SSOT = {
    schemaVersion: 1,
    records: [
      {
        key: 'anthropic-arr-annualized-revenue-yipit-2025-08-2026-06',
        company: 'Anthropic',
        subjectType: 'company',
        subjectId: 'anthropic',
        metricFamily: 'revenue',
        metricName: 'annualized_revenue_run_rate',
        displayName: 'Annualized ARR',
        period: 'Aug. 2025-Jun. 2026',
        periodNote: 'Monthly observations through Jun. 30, 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        frequency: 'monthly',
        definition:
          'Annualized ARR for Anthropic shown by YipitData; this is a third-party estimate and not a GAAP revenue statement.',
        conditions: {
          geography: 'Global',
          basis: 'Third-party estimated annualized ARR',
          timeGrain: 'Month-end observation',
          consolidation: 'Company-level',
        },
        value: {
          latestDate: '2026-06-30',
          latest: 70.0,
          latestMoMGrowthPct: 30,
        },
        observations: [
          { date: '2025-08-31', value: 4.5, momGrowthPct: null },
          { date: '2025-09-30', value: 6.0, momGrowthPct: 33 },
          { date: '2025-10-31', value: 7.0, momGrowthPct: 17 },
          { date: '2025-11-30', value: 7.0, momGrowthPct: 0 },
          { date: '2025-12-31', value: 9.0, momGrowthPct: 29, notes: [ANTHROPIC_CODING_BREAKTHROUGH_NOTE] },
          { date: '2026-01-31', value: 14.0, momGrowthPct: 56 },
          { date: '2026-02-28', value: 19.0, momGrowthPct: 36 },
          { date: '2026-03-31', value: 29.0, momGrowthPct: 53, notes: [ANTHROPIC_AGENT_AI_SURGE_NOTE] },
          { date: '2026-04-30', value: 40.0, momGrowthPct: 38 },
          { date: '2026-05-31', value: 54.0, momGrowthPct: 35 },
          { date: '2026-06-30', value: 70.0, momGrowthPct: 30, notes: [ANTHROPIC_YEP_HALF_YEAR_NOTE] },
        ],
        sources: [
          {
            name: 'YipitData',
            url: 'https://www.yipitdata.com/',
            type: 'third-party data provider',
            sourceImage: {
              src: 'input/processed/anthropic-arr-annualized-revenue-yipit-2025-08-2026-06.png',
              width: 2656,
              height: 609,
            },
          },
        ],
        confidence: 0.72,
        lineage:
          'Manually transcribed from the provided YipitData table image. The Jun. 30, 2026 observation is retained as a source-stated future month-end estimate.',
        i18n: {
          zh: {
            displayName: '年化 ARR',
            period: '2025 年 8 月-2026 年 6 月',
            periodNote: '截至 2026 年 6 月 30 日的月度观测',
            definition:
              'YipitData 展示的 Anthropic 年化 ARR；该指标为第三方估算，不是 GAAP 收入报表。',
            conditions: {
              geography: '全球',
              basis: '第三方估算的年化 ARR',
              timeGrain: '月末观测',
              consolidation: '公司层面',
            },
            observations: [
              {},
              {},
              {},
              {},
              { notes: ['来源图将 2025 年 12 月 31 日标记为 Coding 能力突破。'] },
              {},
              {},
              { notes: ['来源图将 2026 年 3 月 31 日标记为 Agent AI 爆发。'] },
              {},
              {},
              { notes: ['来源图将 2026 年 6 月 30 日标记为 YEP 半年数据。'] },
            ],
            lineage:
              '从用户提供的 YipitData 表格图片手工转录。2026 年 6 月 30 日观测值按来源声明的未来月末估算保留。',
          },
        },
      },
      {
        key: 'openai-arr-annualized-revenue-yipit-2025-08-2026-06',
        company: 'OpenAI',
        subjectType: 'company',
        subjectId: 'openai',
        metricFamily: 'revenue',
        metricName: 'annualized_revenue_run_rate',
        displayName: 'Annualized revenue run-rate',
        period: 'Aug. 2025-Jun. 2026',
        periodNote: 'Monthly observations through Jun. 30, 2026',
        currency: '$',
        unit: 'B',
        decimals: 1,
        frequency: 'monthly',
        definition:
          'Annualized revenue run-rate for OpenAI shown by YipitData; this is a third-party estimate and not a GAAP revenue statement.',
        conditions: {
          geography: 'Global',
          basis: 'Third-party estimated annualized revenue run-rate',
          timeGrain: 'Month-end observation',
          consolidation: 'Company-level',
        },
        value: {
          latestDate: '2026-06-30',
          latest: 43.0,
          latestMoMGrowthPct: 16,
        },
        observations: [
          { date: '2025-08-31', value: 12.0, momGrowthPct: null, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2025-09-30', value: 15.0, momGrowthPct: 25, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2025-10-31', value: 17.0, momGrowthPct: 13, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2025-11-30', value: 19.0, momGrowthPct: 12, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2025-12-31', value: 21.4, momGrowthPct: 13, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2026-01-31', value: 23.0, momGrowthPct: 7, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2026-02-28', value: 24.0, momGrowthPct: 4, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2026-03-31', value: 25.0, momGrowthPct: 4, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2026-04-30', value: 26.0, momGrowthPct: 4, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2026-05-31', value: 37.0, momGrowthPct: 42, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
          { date: '2026-06-30', value: 43.0, momGrowthPct: 16, notes: [OPENAI_ARR_UNDERESTIMATION_NOTE] },
        ],
        sources: [
          {
            name: 'YipitData',
            url: 'https://www.yipitdata.com/',
            type: 'third-party data provider',
            sourceImage: {
              src: 'input/processed/openai-arr-annualized-revenue-yipit-2025-08-2026-06.png',
              width: 1125,
              height: 1412,
            },
          },
        ],
        confidence: 0.72,
        lineage:
          'Manually transcribed from the provided YipitData table image. The Jun. 30, 2026 observation is retained as a source-stated future month-end estimate.',
        i18n: {
          zh: {
            displayName: '年化收入运行率',
            period: '2025 年 8 月-2026 年 6 月',
            periodNote: '截至 2026 年 6 月 30 日的月度观测',
            definition:
              'YipitData 展示的 OpenAI 年化收入运行率；该指标为第三方估算，不是 GAAP 收入报表。',
            conditions: {
              geography: '全球',
              basis: '第三方估算的年化收入运行率',
              timeGrain: '月末观测',
              consolidation: '公司层面',
            },
            lineage:
              '从用户提供的 YipitData 表格图片手工转录。2026 年 6 月 30 日观测值按来源声明的未来月末估算保留。',
          },
        },
      },
    ],
  };
})(window);
