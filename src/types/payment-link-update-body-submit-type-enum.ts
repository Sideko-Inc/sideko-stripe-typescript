/**
 * Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button. Changing this value will also affect the hostname in the [url](https://stripe.com/docs/api/payment_links/payment_links/object#url) property (example: `donate.stripe.com`).
 */
export type PaymentLinkUpdateBodySubmitTypeEnum =
  | "auto"
  | "book"
  | "donate"
  | "pay"
  | "subscribe";
