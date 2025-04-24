/**
 * The mode of the Checkout Session. Pass `subscription` if the Checkout Session includes at least one recurring item.
 */
export type CheckoutSessionCreateBodyModeEnum =
  | "payment"
  | "setup"
  | "subscription";
