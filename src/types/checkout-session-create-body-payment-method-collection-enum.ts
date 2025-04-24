/**
 * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.
 * This may occur if the Checkout Session includes a free trial or a discount.
 *
 * Can only be set in `subscription` mode. Defaults to `always`.
 *
 * If you'd like information on how to collect a payment method outside of Checkout, read the guide on configuring [subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
 */
export type CheckoutSessionCreateBodyPaymentMethodCollectionEnum =
  | "always"
  | "if_required";
