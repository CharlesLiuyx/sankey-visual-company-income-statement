/* ====================================================================
 *  Pure income-statement SSOT.
 *
 *  This file intentionally contains financial data only. It is the place
 *  to maintain comparable reported totals and line items across datasets;
 *  Sankey-specific nodes, links, layout geometry, colors, SVG, and render
 *  overrides stay in data/<dataset-key>.js.
 * ==================================================================== */
(function (global) {
  'use strict';

  global.INCOME_STATEMENT_SSOT = {
    schemaVersion: 1,
    records: [
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
    ],
  };
})(window);
