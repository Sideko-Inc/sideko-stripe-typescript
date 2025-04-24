/**
 * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
 */
export type SetupIntentStatusEnum =
  | "canceled"
  | "processing"
  | "requires_action"
  | "requires_confirmation"
  | "requires_payment_method"
  | "succeeded";
