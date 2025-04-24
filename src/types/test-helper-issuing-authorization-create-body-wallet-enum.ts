/**
 * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
 */
export type TestHelperIssuingAuthorizationCreateBodyWalletEnum =
  | "apple_pay"
  | "google_pay"
  | "samsung_pay";
