/**
 * The reasoning behind this tax, for example, if the product is tax exempt. We might extend the possible values for this field to support new tax rules.
 */
export type TaxProductResourceTaxBreakdownTaxabilityReasonEnum =
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
