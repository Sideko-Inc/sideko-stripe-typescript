/**
 * Whether the cardholder provided a postal code and if it matched the cardholder’s `billing.address.postal_code`.
 */
export type IssuingAuthorizationVerificationDataAddressPostalCodeCheckEnum =
  | "match"
  | "mismatch"
  | "not_provided";
