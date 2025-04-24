/**
 * Only return OutboundTransfers that have the given status: `processing`, `canceled`, `failed`, `posted`, or `returned`.
 */
export type TreasuryOutboundTransferListStatusEnum =
  | "canceled"
  | "failed"
  | "posted"
  | "processing"
  | "returned";
