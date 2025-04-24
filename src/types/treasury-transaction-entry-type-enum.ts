/**
 * The specific money movement that generated the TransactionEntry.
 */
export type TreasuryTransactionEntryTypeEnum =
  | "credit_reversal"
  | "credit_reversal_posting"
  | "debit_reversal"
  | "inbound_transfer"
  | "inbound_transfer_return"
  | "issuing_authorization_hold"
  | "issuing_authorization_release"
  | "other"
  | "outbound_payment"
  | "outbound_payment_cancellation"
  | "outbound_payment_failure"
  | "outbound_payment_posting"
  | "outbound_payment_return"
  | "outbound_transfer"
  | "outbound_transfer_cancellation"
  | "outbound_transfer_failure"
  | "outbound_transfer_posting"
  | "outbound_transfer_return"
  | "received_credit"
  | "received_debit";
