/**
 * This is typed as an enum for consistency with `requirements.disabled_reason`.
 */
export type AccountFutureRequirementsDisabledReasonEnum =
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
