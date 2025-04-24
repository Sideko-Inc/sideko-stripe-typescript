import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSessionCreateBodyComponentsPaymentElementFeatures
 */
export type CustomerSessionCreateBodyComponentsPaymentElementFeatures = {
  paymentMethodAllowRedisplayFilters?:
    | ("always" | "limited" | "unspecified")[]
    | undefined;
  paymentMethodRedisplay?: ("disabled" | "enabled") | undefined;
  paymentMethodRedisplayLimit?: number | undefined;
  paymentMethodRemove?: ("disabled" | "enabled") | undefined;
  paymentMethodSave?: ("disabled" | "enabled") | undefined;
  paymentMethodSaveUsage?: ("off_session" | "on_session") | undefined;
};

/**
 * @internal
 * CustomerSessionCreateBodyComponentsPaymentElementFeatures without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionCreateBodyComponentsPaymentElementFeatures =
  {
    payment_method_allow_redisplay_filters?:
      | ("always" | "limited" | "unspecified")[]
      | undefined;
    payment_method_redisplay?: ("disabled" | "enabled") | undefined;
    payment_method_redisplay_limit?: number | undefined;
    payment_method_remove?: ("disabled" | "enabled") | undefined;
    payment_method_save?: ("disabled" | "enabled") | undefined;
    payment_method_save_usage?: ("off_session" | "on_session") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionCreateBodyComponentsPaymentElementFeatures
 */
const SchemaIn$CustomerSessionCreateBodyComponentsPaymentElementFeatures: z.ZodType<
  CustomerSessionCreateBodyComponentsPaymentElementFeatures, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payment_method_allow_redisplay_filters: z
      .array(z.enum(["always", "limited", "unspecified"]))
      .optional(),
    payment_method_redisplay: z.enum(["disabled", "enabled"]).optional(),
    payment_method_redisplay_limit: z.number().int().optional(),
    payment_method_remove: z.enum(["disabled", "enabled"]).optional(),
    payment_method_save: z.enum(["disabled", "enabled"]).optional(),
    payment_method_save_usage: z.enum(["off_session", "on_session"]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionCreateBodyComponentsPaymentElementFeatures
 */
const SchemaOut$CustomerSessionCreateBodyComponentsPaymentElementFeatures: z.ZodType<
  External$CustomerSessionCreateBodyComponentsPaymentElementFeatures, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionCreateBodyComponentsPaymentElementFeatures // the object to be transformed
> = z
  .object({
    paymentMethodAllowRedisplayFilters: z
      .array(z.enum(["always", "limited", "unspecified"]))
      .optional(),
    paymentMethodRedisplay: z.enum(["disabled", "enabled"]).optional(),
    paymentMethodRedisplayLimit: z.number().int().optional(),
    paymentMethodRemove: z.enum(["disabled", "enabled"]).optional(),
    paymentMethodSave: z.enum(["disabled", "enabled"]).optional(),
    paymentMethodSaveUsage: z.enum(["off_session", "on_session"]).optional(),
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

export const Schemas$CustomerSessionCreateBodyComponentsPaymentElementFeatures =
  {
    in: SchemaIn$CustomerSessionCreateBodyComponentsPaymentElementFeatures,
    out: SchemaOut$CustomerSessionCreateBodyComponentsPaymentElementFeatures,
  };
