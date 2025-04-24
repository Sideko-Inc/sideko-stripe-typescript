/**
 * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
 */
export type ChargeRefundCreate1BodyReasonEnum =
  | "duplicate"
  | "fraudulent"
  | "requested_by_customer";
