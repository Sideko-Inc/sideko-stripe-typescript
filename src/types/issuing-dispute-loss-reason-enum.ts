/**
 * The enum that describes the dispute loss outcome. If the dispute is not lost, this field will be absent. New enum values may be added in the future, so be sure to handle unknown values.
 */
export type IssuingDisputeLossReasonEnum =
  | "cardholder_authentication_issuer_liability"
  | "eci5_token_transaction_with_tavv"
  | "excess_disputes_in_timeframe"
  | "has_not_met_the_minimum_dispute_amount_requirements"
  | "invalid_duplicate_dispute"
  | "invalid_incorrect_amount_dispute"
  | "invalid_no_authorization"
  | "invalid_use_of_disputes"
  | "merchandise_delivered_or_shipped"
  | "merchandise_or_service_as_described"
  | "not_cancelled"
  | "other"
  | "refund_issued"
  | "submitted_beyond_allowable_time_limit"
  | "transaction_3ds_required"
  | "transaction_approved_after_prior_fraud_dispute"
  | "transaction_authorized"
  | "transaction_electronically_read"
  | "transaction_qualifies_for_visa_easy_payment_service"
  | "transaction_unattended";
