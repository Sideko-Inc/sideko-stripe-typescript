/**
 * When the mandate is revoked on the Bacs network this field displays the reason for the revocation.
 */
export type MandateBacsDebitRevocationReasonEnum =
  | "account_closed"
  | "bank_account_restricted"
  | "bank_ownership_changed"
  | "could_not_process"
  | "debit_not_authorized";
