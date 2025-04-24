/**
 * The level of the jurisdiction that imposes this tax rate. Will be `null` for manually defined tax rates.
 */
export type TaxRateJurisdictionLevelEnum =
  | "city"
  | "country"
  | "county"
  | "district"
  | "multiple"
  | "state";
