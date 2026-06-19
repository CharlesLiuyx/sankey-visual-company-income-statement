/* ====================================================================
 *  Company metadata SSOT.
 *
 *  This file is intentionally separate from data/income-statements.js:
 *  company profile fields power table views and onboarding checks, while
 *  period-specific financial statement data stays in the financial SSOT.
 * ==================================================================== */
(function (global) {
  'use strict';

  global.COMPANY_METADATA = {
    schemaVersion: 1,
    companies: [
      {
        key: 'nvidia',
        name: 'NVIDIA',
        legalName: 'NVIDIA Corporation',
        ticker: 'NVDA',
        exchange: 'NASDAQ',
        sector: 'Information Technology',
        industry: 'Semiconductors',
        founded: '1993',
        headquarters: 'Santa Clara, California, United States',
        fiscalYearEnd: 'Last Sunday in January',
        website: 'https://www.nvidia.com/',
        description:
          'NVIDIA is an accelerated computing company whose chips, systems, software, and services support AI factories, graphics, data center, professional visualization, automotive, robotics, and digital-twin workloads.',
        sourceUrls: [
          'https://www.nvidia.com/en-us/about-nvidia/',
          'https://investor.nvidia.com/financial-info/annual-reports-and-proxies/default.aspx',
        ],
      },
      {
        key: 'salesforce',
        name: 'Salesforce',
        legalName: 'Salesforce, Inc.',
        ticker: 'CRM',
        exchange: 'NYSE',
        sector: 'Information Technology',
        industry: 'Enterprise software / CRM',
        founded: '1999',
        headquarters: 'San Francisco, California, United States',
        fiscalYearEnd: 'January 31',
        website: 'https://www.salesforce.com/',
        description:
          'Salesforce is a cloud software company centered on customer relationship management, combining sales, service, marketing, commerce, analytics, data, Slack, platform, and AI agent products.',
        sourceUrls: [
          'https://www.salesforce.com/company/our-story/',
          'https://investor.salesforce.com/financials/annual-reports/default.aspx',
        ],
      },
    ],
  };
})(window);
