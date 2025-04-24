/**
 * The reason why this PaymentMethod's fingerprint has been blocked
 */
export type PaymentMethodUsBankAccountBlockedReasonEnum =
  | "bank_account_closed"
  | "bank_account_frozen"
  | "bank_account_invalid_details"
  | "bank_account_restricted"
  | "bank_account_unusable"
  | "debit_not_authorized";
