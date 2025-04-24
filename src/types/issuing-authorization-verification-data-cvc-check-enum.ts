/**
 * Whether the cardholder provided a CVC and if it matched Stripe’s record.
 */
export type IssuingAuthorizationVerificationDataCvcCheckEnum =
  | "match"
  | "mismatch"
  | "not_provided";
