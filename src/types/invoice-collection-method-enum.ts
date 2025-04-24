/**
 * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
 */
export type InvoiceCollectionMethodEnum =
  | "charge_automatically"
  | "send_invoice";
