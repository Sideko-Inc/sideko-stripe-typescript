/**
 * The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
 */
export type InvoiceListStatusEnum =
  | "draft"
  | "open"
  | "paid"
  | "uncollectible"
  | "void";
