/**
 * Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.
 */
export type IssuingAuthorizationListStatusEnum =
  | "closed"
  | "expired"
  | "pending"
  | "reversed";
