/**
 * Selected network to process this payment intent on. Depends on the available networks of the card attached to the payment intent. Can be only set confirm-time.
 */
export type PaymentIntentPaymentMethodOptionsCardNetworkEnum =
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
