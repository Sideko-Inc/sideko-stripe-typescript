/**
 * The data source used to infer the customer's location.
 */
export type CustomerTaxLocationSourceEnum =
  | "billing_address"
  | "ip_address"
  | "payment_method"
  | "shipping_destination";
