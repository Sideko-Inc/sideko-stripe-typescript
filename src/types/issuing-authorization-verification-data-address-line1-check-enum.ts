/**
 * Whether the cardholder provided an address first line and if it matched the cardholder’s `billing.address.line1`.
 */
export type IssuingAuthorizationVerificationDataAddressLine1CheckEnum =
  | "match"
  | "mismatch"
  | "not_provided";
