/**
 * The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, `visa_checkout`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
 */
export type PaymentMethodCardWalletTypeEnum =
  | "amex_express_checkout"
  | "apple_pay"
  | "google_pay"
  | "link"
  | "masterpass"
  | "samsung_pay"
  | "visa_checkout";
