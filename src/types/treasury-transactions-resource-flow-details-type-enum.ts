/**
 * Type of the flow that created the Transaction. Set to the same value as `flow_type`.
 */
export type TreasuryTransactionsResourceFlowDetailsTypeEnum =
  | "credit_reversal"
  | "debit_reversal"
  | "inbound_transfer"
  | "issuing_authorization"
  | "other"
  | "outbound_payment"
  | "outbound_transfer"
  | "received_credit"
  | "received_debit";
