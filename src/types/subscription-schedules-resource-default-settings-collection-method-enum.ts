/**
 * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
 */
export type SubscriptionSchedulesResourceDefaultSettingsCollectionMethodEnum =
  | "charge_automatically"
  | "send_invoice";
