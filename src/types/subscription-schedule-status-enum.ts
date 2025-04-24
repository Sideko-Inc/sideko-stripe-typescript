/**
 * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
 */
export type SubscriptionScheduleStatusEnum =
  | "active"
  | "canceled"
  | "completed"
  | "not_started"
  | "released";
