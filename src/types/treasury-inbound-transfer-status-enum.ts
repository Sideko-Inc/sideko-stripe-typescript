/**
 * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been "confirmed" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
 */
export type TreasuryInboundTransferStatusEnum =
  | "canceled"
  | "failed"
  | "processing"
  | "succeeded";
