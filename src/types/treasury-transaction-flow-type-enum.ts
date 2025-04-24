/**
 * Type of the flow that created the Transaction.
 */
export type TreasuryTransactionFlowTypeEnum =
  | "credit_reversal"
  | "debit_reversal"
  | "inbound_transfer"
  | "issuing_authorization"
  | "other"
  | "outbound_payment"
  | "outbound_transfer"
  | "received_credit"
  | "received_debit";
