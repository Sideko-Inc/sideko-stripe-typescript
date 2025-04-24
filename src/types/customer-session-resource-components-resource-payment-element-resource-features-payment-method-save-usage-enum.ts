/**
 * When using PaymentIntents and the customer checks the save checkbox, this field determines the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value used to confirm the PaymentIntent.
 *
 * When using SetupIntents, directly configure the [`usage`](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) value on SetupIntent creation.
 */
export type CustomerSessionResourceComponentsResourcePaymentElementResourceFeaturesPaymentMethodSaveUsageEnum =
  | "off_session"
  | "on_session";
