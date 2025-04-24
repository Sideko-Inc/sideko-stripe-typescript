/**
 * Description of why the capability is disabled. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
 */
export type AccountCapabilityRequirementsDisabledReasonEnum =
  | "other"
  | "paused.inactivity"
  | "pending.onboarding"
  | "pending.review"
  | "platform_disabled"
  | "platform_paused"
  | "rejected.inactivity"
  | "rejected.other"
  | "rejected.unsupported_business"
  | "requirements.fields_needed";
