/**
 * Whether the cardholder provided an expiry date and if it matched Stripe’s record.
 */
export type IssuingAuthorizationVerificationDataExpiryCheckEnum =
  | "match"
  | "mismatch"
  | "not_provided";
