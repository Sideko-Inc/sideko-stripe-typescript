/**
 * Reason for canceling this PaymentIntent. Possible values are: `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`
 */
export type PaymentIntentCancelBodyCancellationReasonEnum =
  | "abandoned"
  | "duplicate"
  | "fraudulent"
  | "requested_by_customer";
