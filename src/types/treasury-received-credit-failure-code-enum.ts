/**
 * Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.
 */
export type TreasuryReceivedCreditFailureCodeEnum =
  | "account_closed"
  | "account_frozen"
  | "international_transaction"
  | "other";
