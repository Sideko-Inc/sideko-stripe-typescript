/**
 * The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, `redacted`, or `canceled`.
 */
export type ReviewClosedReasonEnum =
  | "approved"
  | "canceled"
  | "disputed"
  | "redacted"
  | "refunded"
  | "refunded_as_fraud";
