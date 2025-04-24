/**
 * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) resulting from the `billing_cycle_anchor`. If no value is passed, the default is `create_prorations`.
 */
export type SubscriptionCreateBodyProrationBehaviorEnum =
  | "always_invoice"
  | "create_prorations"
  | "none";
