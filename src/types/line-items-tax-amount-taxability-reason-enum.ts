/**
 * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
 */
export type LineItemsTaxAmountTaxabilityReasonEnum =
  | "customer_exempt"
  | "not_collecting"
  | "not_subject_to_tax"
  | "not_supported"
  | "portion_product_exempt"
  | "portion_reduced_rated"
  | "portion_standard_rated"
  | "product_exempt"
  | "product_exempt_holiday"
  | "proportionally_rated"
  | "reduced_rated"
  | "reverse_charge"
  | "standard_rated"
  | "taxable_basis_reduced"
  | "zero_rated";
