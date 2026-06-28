/* ====================================================================
 *  Product catalog SSOT.
 *
 *  Product is a Service in the Trace top-level model. The current app does
 *  not yet render first-class Product records; income-statement datasets may
 *  still mention products or business lines as metric line items. This empty
 *  catalog gives future Product CRUD and time-varying Company/Product
 *  relationships a stable home without changing current viewer behavior.
 * ==================================================================== */
(function (global) {
  'use strict';

  global.PRODUCT_CATALOG = {
    schemaVersion: 1,
    products: [],
    companyProductRelationships: [],
  };
})(window);
