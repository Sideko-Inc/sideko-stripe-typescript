/**
 * Only return OutboundPayments that have the given status: `processing`, `failed`, `posted`, `returned`, or `canceled`.
 */
export type TreasuryOutboundPaymentListStatusEnum =
  | "canceled"
  | "failed"
  | "posted"
  | "processing"
  | "returned";
