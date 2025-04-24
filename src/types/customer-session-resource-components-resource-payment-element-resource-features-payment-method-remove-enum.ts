/**
 * Controls whether the Payment Element displays the option to remove a saved payment method. This parameter defaults to `disabled`.
 *
 * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
 */
export type CustomerSessionResourceComponentsResourcePaymentElementResourceFeaturesPaymentMethodRemoveEnum =
  | "disabled"
  | "enabled";
