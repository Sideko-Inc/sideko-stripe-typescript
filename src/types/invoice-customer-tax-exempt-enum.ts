/**
 * The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
 */
export type InvoiceCustomerTaxExemptEnum = "exempt" | "none" | "reverse";
