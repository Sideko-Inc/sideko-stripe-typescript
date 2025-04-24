/**
 * Either `now` or `unchanged`. Setting the value to `now` resets the subscription's billing cycle anchor to the current time. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
 */
export type CustomerSubscriptionModifyBodyBillingCycleAnchorEnum =
  | "now"
  | "unchanged";
