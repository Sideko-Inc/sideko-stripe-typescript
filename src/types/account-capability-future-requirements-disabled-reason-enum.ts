/**
 * This is typed as an enum for consistency with `requirements.disabled_reason`, but it safe to assume `future_requirements.disabled_reason` is null because fields in `future_requirements` will never disable the account.
 */
export type AccountCapabilityFutureRequirementsDisabledReasonEnum =
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
