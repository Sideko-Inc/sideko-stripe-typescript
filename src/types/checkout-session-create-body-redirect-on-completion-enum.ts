/**
 * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
 */
export type CheckoutSessionCreateBodyRedirectOnCompletionEnum =
  | "always"
  | "if_required"
  | "never";
