import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains the features the Payment Element supports.
 */
export type CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures =
  {
    /**
     * A list of [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) values that controls which saved payment methods the Payment Element displays by filtering to only show payment methods with an `allow_redisplay` value that is present in this list.
     *
     * If not specified, defaults to ["always"]. In order to display all saved payment methods, specify ["always", "limited", "unspecified"].
     */
    paymentMethodAllowRedisplayFilters: (
      | "always"
      | "limited"
      | "unspecified"
    )[];
    /**
     * Controls whether or not the Payment Element shows saved payment methods. This parameter defaults to `disabled`.
     */
    paymentMethodRedisplay: "disabled" | "enabled";
    /**
     * Determines the max number of saved payment methods for the Payment Element to display. This parameter defaults to `3`.
     */
    paymentMethodRedisplayLimit?: number | null | undefined;
    /**
     * Controls whether the Payment Element displays the option to remove a saved payment method. This parameter defaults to `disabled`.
     *
     * Allowing buyers to remove their saved payment methods impacts subscriptions that depend on that payment method. Removing the payment method detaches the [`customer` object](https://docs.stripe.com/api/payment_methods/object#payment_method_object-customer) from that [PaymentMethod](https://docs.stripe.com/api/payment_methods).
     */
    paymentMethodRemove: "disabled" | "enabled";
    /**
     * Controls whether the Payment Element displays a checkbox offering to save a new payment method. This parameter defaults to `disabled`.
     *
     * If a customer checks the box, the [`allow_redisplay`](https://docs.stripe.com/api/payment_methods/object#payment_method_object-allow_redisplay) value on the PaymentMethod is set to `'always'` at confirmation time. For PaymentIntents, the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value is also set to the value defined in `payment_method_save_usage`.
     */
    paymentMethodSave: "disabled" | "enabled";
    /**
     * When using PaymentIntents and the customer checks the save checkbox, this field determines the [`setup_future_usage`](https://docs.stripe.com/api/payment_intents/object#payment_intent_object-setup_future_usage) value used to confirm the PaymentIntent.
     *
     * When using SetupIntents, directly configure the [`usage`](https://docs.stripe.com/api/setup_intents/object#setup_intent_object-usage) value on SetupIntent creation.
     */
    paymentMethodSaveUsage?: ("off_session" | "on_session") | null | undefined;
  };

/**
 * @internal
 * CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures =
  {
    payment_method_allow_redisplay_filters: (
      | "always"
      | "limited"
      | "unspecified"
    )[];
    payment_method_redisplay: "disabled" | "enabled";
    payment_method_redisplay_limit?: number | null | undefined;
    payment_method_remove: "disabled" | "enabled";
    payment_method_save: "disabled" | "enabled";
    payment_method_save_usage?:
      | ("off_session" | "on_session")
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures
 */
const SchemaIn$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures: z.ZodType<
  CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_allow_redisplay_filters: z.array(
      z.enum(["always", "limited", "unspecified"]),
    ),
    payment_method_redisplay: z.enum(["disabled", "enabled"]),
    payment_method_redisplay_limit: z.number().int().nullable().optional(),
    payment_method_remove: z.enum(["disabled", "enabled"]),
    payment_method_save: z.enum(["disabled", "enabled"]),
    payment_method_save_usage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payment_method_allow_redisplay_filters:
        "paymentMethodAllowRedisplayFilters",
      payment_method_redisplay: "paymentMethodRedisplay",
      payment_method_redisplay_limit: "paymentMethodRedisplayLimit",
      payment_method_remove: "paymentMethodRemove",
      payment_method_save: "paymentMethodSave",
      payment_method_save_usage: "paymentMethodSaveUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures
 */
const SchemaOut$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures: z.ZodType<
  External$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures // the object to be transformed
> = z
  .object({
    paymentMethodAllowRedisplayFilters: z.array(
      z.enum(["always", "limited", "unspecified"]),
    ),
    paymentMethodRedisplay: z.enum(["disabled", "enabled"]),
    paymentMethodRedisplayLimit: z.number().int().nullable().optional(),
    paymentMethodRemove: z.enum(["disabled", "enabled"]),
    paymentMethodSave: z.enum(["disabled", "enabled"]),
    paymentMethodSaveUsage: z
      .enum(["off_session", "on_session"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentMethodAllowRedisplayFilters:
        "payment_method_allow_redisplay_filters",
      paymentMethodRedisplay: "payment_method_redisplay",
      paymentMethodRedisplayLimit: "payment_method_redisplay_limit",
      paymentMethodRemove: "payment_method_remove",
      paymentMethodSave: "payment_method_save",
      paymentMethodSaveUsage: "payment_method_save_usage",
    });
  });

export const Schemas$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures =
  {
    in: SchemaIn$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures,
    out: SchemaOut$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures,
  };
