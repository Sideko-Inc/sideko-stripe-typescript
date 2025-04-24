/**
 * Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `won`, or `lost`.
 */
export type DisputeStatusEnum =
  | "lost"
  | "needs_response"
  | "under_review"
  | "warning_closed"
  | "warning_needs_response"
  | "warning_under_review"
  | "won";
