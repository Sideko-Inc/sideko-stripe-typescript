/**
 * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
 */
export type SubscriptionItemCreateBodyProrationBehaviorEnum =
  | "always_invoice"
  | "create_prorations"
  | "none";
