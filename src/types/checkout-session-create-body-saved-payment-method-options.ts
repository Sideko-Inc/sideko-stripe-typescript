import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
 */
export type CheckoutSessionCreateBodySavedPaymentMethodOptions = {
  allowRedisplayFilters?: ("always" | "limited" | "unspecified")[] | undefined;
  paymentMethodSave?: ("disabled" | "enabled") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodySavedPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodySavedPaymentMethodOptions = {
  allow_redisplay_filters?:
    | ("always" | "limited" | "unspecified")[]
    | undefined;
  payment_method_save?: ("disabled" | "enabled") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodySavedPaymentMethodOptions
 */
const SchemaIn$CheckoutSessionCreateBodySavedPaymentMethodOptions: z.ZodType<
  CheckoutSessionCreateBodySavedPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redisplay_filters: z
      .array(z.enum(["always", "limited", "unspecified"]))
      .optional(),
    payment_method_save: z.enum(["disabled", "enabled"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redisplay_filters: "allowRedisplayFilters",
      payment_method_save: "paymentMethodSave",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodySavedPaymentMethodOptions
 */
const SchemaOut$CheckoutSessionCreateBodySavedPaymentMethodOptions: z.ZodType<
  External$CheckoutSessionCreateBodySavedPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodySavedPaymentMethodOptions // the object to be transformed
> = z
  .object({
    allowRedisplayFilters: z
      .array(z.enum(["always", "limited", "unspecified"]))
      .optional(),
    paymentMethodSave: z.enum(["disabled", "enabled"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedisplayFilters: "allow_redisplay_filters",
      paymentMethodSave: "payment_method_save",
    });
  });

export const Schemas$CheckoutSessionCreateBodySavedPaymentMethodOptions = {
  in: SchemaIn$CheckoutSessionCreateBodySavedPaymentMethodOptions,
  out: SchemaOut$CheckoutSessionCreateBodySavedPaymentMethodOptions,
};
