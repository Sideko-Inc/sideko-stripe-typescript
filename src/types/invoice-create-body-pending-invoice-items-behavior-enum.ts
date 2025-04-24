/**
 * How to handle pending invoice items on invoice creation. Defaults to `exclude` if the parameter is omitted.
 */
export type InvoiceCreateBodyPendingInvoiceItemsBehaviorEnum =
  | "exclude"
  | "include";
