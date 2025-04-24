/**
 * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
 * You can use this value to decide when to fulfill your customer's order.
 */
export type CheckoutSessionPaymentStatusEnum =
  | "no_payment_required"
  | "paid"
  | "unpaid";
