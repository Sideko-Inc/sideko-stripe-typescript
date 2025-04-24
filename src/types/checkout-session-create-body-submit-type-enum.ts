/**
 * Describes the type of transaction being performed by Checkout in order
 * to customize relevant text on the page, such as the submit button.
 *  `submit_type` can only be specified on Checkout Sessions in
 * `payment` or `subscription` mode. If blank or `auto`, `pay` is used.
 */
export type CheckoutSessionCreateBodySubmitTypeEnum =
  | "auto"
  | "book"
  | "donate"
  | "pay"
  | "subscribe";
