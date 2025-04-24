/**
 * Set if a ReceivedDebit can't be reversed.
 */
export type TreasuryReceivedDebitsResourceReversalDetailsRestrictedReasonEnum =
  | "already_reversed"
  | "deadline_passed"
  | "network_restricted"
  | "other"
  | "source_flow_restricted";
