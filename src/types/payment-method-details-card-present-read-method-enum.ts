/**
 * How card details were read in this transaction.
 */
export type PaymentMethodDetailsCardPresentReadMethodEnum =
  | "contact_emv"
  | "contactless_emv"
  | "contactless_magstripe_mode"
  | "magnetic_stripe_fallback"
  | "magnetic_stripe_track2";
