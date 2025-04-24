/**
 * If the account is disabled, this enum describes why. [Learn more about handling verification issues](https://stripe.com/docs/connect/handling-api-verification).
 */
export type AccountRequirementsDisabledReasonEnum =
  | "action_required.requested_capabilities"
  | "listed"
  | "other"
  | "platform_paused"
  | "rejected.fraud"
  | "rejected.incomplete_verification"
  | "rejected.listed"
  | "rejected.other"
  | "rejected.platform_fraud"
  | "rejected.platform_other"
  | "rejected.platform_terms_of_service"
  | "rejected.terms_of_service"
  | "requirements.past_due"
  | "requirements.pending_verification"
  | "under_review";
