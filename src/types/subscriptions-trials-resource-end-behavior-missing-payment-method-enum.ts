/**
 * Indicates how the subscription should change when the trial ends if the user did not provide a payment method.
 */
export type SubscriptionsTrialsResourceEndBehaviorMissingPaymentMethodEnum =
  | "cancel"
  | "create_invoice"
  | "pause";
