/**
 * Type of the items in the value list. One of `card_fingerprint`, `us_bank_account_fingerprint`, `sepa_debit_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, or `customer_id`. Use `string` if the item type is unknown or mixed.
 */
export type RadarValueListCreateBodyItemTypeEnum =
  | "card_bin"
  | "card_fingerprint"
  | "case_sensitive_string"
  | "country"
  | "customer_id"
  | "email"
  | "ip_address"
  | "sepa_debit_fingerprint"
  | "string"
  | "us_bank_account_fingerprint";
