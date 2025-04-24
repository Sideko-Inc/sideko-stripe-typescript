/**
 * Surfaces if automatic tax computation is possible given the current customer location information.
 */
export type CustomerTaxAutomaticTaxEnum =
  | "failed"
  | "not_collecting"
  | "supported"
  | "unrecognized_location";
