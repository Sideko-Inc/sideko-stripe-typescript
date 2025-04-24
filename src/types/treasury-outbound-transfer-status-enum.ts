/**
 * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
 */
export type TreasuryOutboundTransferStatusEnum =
  | "canceled"
  | "failed"
  | "posted"
  | "processing"
  | "returned";
