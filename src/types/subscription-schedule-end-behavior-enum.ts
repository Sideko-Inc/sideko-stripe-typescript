/**
 * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running. `cancel` will end the subscription schedule and cancel the underlying subscription.
 */
export type SubscriptionScheduleEndBehaviorEnum =
  | "cancel"
  | "none"
  | "release"
  | "renew";
