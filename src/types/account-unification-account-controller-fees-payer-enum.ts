/**
 * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this account. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
 */
export type AccountUnificationAccountControllerFeesPayerEnum =
  | "account"
  | "application"
  | "application_custom"
  | "application_express";
