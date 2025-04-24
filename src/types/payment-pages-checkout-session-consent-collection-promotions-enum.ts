/**
 * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
 * Session will determine whether to display an option to opt into promotional communication
 * from the merchant depending on the customer's locale. Only available to US merchants.
 */
export type PaymentPagesCheckoutSessionConsentCollectionPromotionsEnum =
  | "auto"
  | "none";
