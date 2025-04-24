/**
 * Only return InboundTransfers that have the given status: `processing`, `succeeded`, `failed` or `canceled`.
 */
export type TreasuryInboundTransferListStatusEnum =
  | "canceled"
  | "failed"
  | "processing"
  | "succeeded";
