/**
 * Selected network to process this SetupIntent on. Depends on the available networks of the card attached to the setup intent. Can be only set confirm-time.
 */
export type SetupIntentPaymentMethodOptionsCardNetworkEnum =
  | "amex"
  | "cartes_bancaires"
  | "diners"
  | "discover"
  | "eftpos_au"
  | "girocard"
  | "interac"
  | "jcb"
  | "link"
  | "mastercard"
  | "unionpay"
  | "unknown"
  | "visa";
