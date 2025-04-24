/**
 * The type of the card wallet, one of `apple_pay`, `google_pay`, or `link`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
 */
export type SetupAttemptPaymentMethodDetailsCardWalletTypeEnum =
  | "apple_pay"
  | "google_pay"
  | "link";
