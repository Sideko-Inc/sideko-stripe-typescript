/**
 * When an authorization is approved or declined by you or by Stripe, this field provides additional detail on the reason for the outcome.
 */
export type IssuingAuthorizationRequestReasonEnum =
  | "account_disabled"
  | "card_active"
  | "card_canceled"
  | "card_expired"
  | "card_inactive"
  | "cardholder_blocked"
  | "cardholder_inactive"
  | "cardholder_verification_required"
  | "insecure_authorization_method"
  | "insufficient_funds"
  | "network_fallback"
  | "not_allowed"
  | "pin_blocked"
  | "spending_controls"
  | "suspected_fraud"
  | "verification_failed"
  | "webhook_approved"
  | "webhook_declined"
  | "webhook_error"
  | "webhook_timeout";
