/**
 * Indicates that you intend to make future payments with this ConfirmationToken's payment method.
 *
 * The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
 */
export type ConfirmationTokenSetupFutureUsageEnum =
  | "off_session"
  | "on_session";
