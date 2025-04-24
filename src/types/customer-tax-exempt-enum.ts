/**
 * Describes the customer's tax exemption status, which is `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the following text: **"Reverse charge"**.
 */
export type CustomerTaxExemptEnum = "exempt" | "none" | "reverse";
