/**
 * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
 */
export type SubscriptionSchedulePhaseConfigurationBillingCycleAnchorEnum =
  | "automatic"
  | "phase_start";
