/**
 * Configure whether a Checkout Session creates a [Customer](https://stripe.com/docs/api/customers) during Session confirmation.
 *
 * When a Customer is not created, you can still retrieve email, address, and other customer data entered in Checkout
 * with [customer_details](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-customer_details).
 *
 * Sessions that don't create Customers instead are grouped by [guest customers](https://stripe.com/docs/payments/checkout/guest-customers)
 * in the Dashboard. Promotion codes limited to first time customers will return invalid for these Sessions.
 *
 * Can only be set in `payment` and `setup` mode.
 */
export type CheckoutSessionCreateBodyCustomerCreationEnum =
  | "always"
  | "if_required";
