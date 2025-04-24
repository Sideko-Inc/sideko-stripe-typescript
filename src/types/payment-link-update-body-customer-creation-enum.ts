/**
 * Configures whether [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link create a [Customer](https://stripe.com/docs/api/customers).
 */
export type PaymentLinkUpdateBodyCustomerCreationEnum =
  | "always"
  | "if_required";
