/**
 * Request ability to [capture beyond the standard authorization validity window](https://stripe.com/docs/payments/extended-authorization) for this PaymentIntent.
 */
export type PaymentIntentPaymentMethodOptionsCardRequestExtendedAuthorizationEnum =
  | "if_available"
  | "never";
