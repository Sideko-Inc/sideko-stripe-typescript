/**
 * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
 */
export type TreasuryReceivedDebitFailureCodeEnum =
  | "account_closed"
  | "account_frozen"
  | "insufficient_funds"
  | "international_transaction"
  | "other";
