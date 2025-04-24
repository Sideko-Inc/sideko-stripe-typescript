/**
 * If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
 */
export type IssuingCardholderRequirementsDisabledReasonEnum =
  | "listed"
  | "rejected.listed"
  | "requirements.past_due"
  | "under_review";
