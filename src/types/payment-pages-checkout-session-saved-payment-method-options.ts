import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionSavedPaymentMethodOptions = {
  /**
   * Uses the `allow_redisplay` value of each saved payment method to filter the set presented to a returning customer. By default, only saved payment methods with ’allow_redisplay: ‘always’ are shown in Checkout.
   */
  allowRedisplayFilters?:
    | ("always" | "limited" | "unspecified")[]
    | null
    | undefined;
  /**
   * Enable customers to choose if they wish to remove their saved payment methods. Disabled by default.
   */
  paymentMethodRemove?: ("disabled" | "enabled") | null | undefined;
  /**
   * Enable customers to choose if they wish to save their payment method for future use. Disabled by default.
   */
  paymentMethodSave?: ("disabled" | "enabled") | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionSavedPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionSavedPaymentMethodOptions = {
  allow_redisplay_filters?:
    | ("always" | "limited" | "unspecified")[]
    | null
    | undefined;
  payment_method_remove?: ("disabled" | "enabled") | null | undefined;
  payment_method_save?: ("disabled" | "enabled") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionSavedPaymentMethodOptions
 */
const SchemaIn$PaymentPagesCheckoutSessionSavedPaymentMethodOptions: z.ZodType<
  PaymentPagesCheckoutSessionSavedPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redisplay_filters: z
      .array(z.enum(["always", "limited", "unspecified"]))
      .nullable()
      .optional(),
    payment_method_remove: z
      .enum(["disabled", "enabled"])
      .nullable()
      .optional(),
    payment_method_save: z.enum(["disabled", "enabled"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redisplay_filters: "allowRedisplayFilters",
      payment_method_remove: "paymentMethodRemove",
      payment_method_save: "paymentMethodSave",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionSavedPaymentMethodOptions
 */
const SchemaOut$PaymentPagesCheckoutSessionSavedPaymentMethodOptions: z.ZodType<
  External$PaymentPagesCheckoutSessionSavedPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionSavedPaymentMethodOptions // the object to be transformed
> = z
  .object({
    allowRedisplayFilters: z
      .array(z.enum(["always", "limited", "unspecified"]))
      .nullable()
      .optional(),
    paymentMethodRemove: z.enum(["disabled", "enabled"]).nullable().optional(),
    paymentMethodSave: z.enum(["disabled", "enabled"]).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedisplayFilters: "allow_redisplay_filters",
      paymentMethodRemove: "payment_method_remove",
      paymentMethodSave: "payment_method_save",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionSavedPaymentMethodOptions = {
  in: SchemaIn$PaymentPagesCheckoutSessionSavedPaymentMethodOptions,
  out: SchemaOut$PaymentPagesCheckoutSessionSavedPaymentMethodOptions,
};
