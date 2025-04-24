/**
 * Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.
 */
export type TopupsListStatusEnum =
  | "canceled"
  | "failed"
  | "pending"
  | "succeeded";
