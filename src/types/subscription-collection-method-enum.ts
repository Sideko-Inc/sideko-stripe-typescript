/**
 * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
 */
export type SubscriptionCollectionMethodEnum =
  | "charge_automatically"
  | "send_invoice";
