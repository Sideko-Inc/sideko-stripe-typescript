import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0 = {
  captureMethod?: "manual" | undefined;
  preferredLocale?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0 = {
  capture_method?: "manual" | undefined;
  preferred_locale?: string | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    preferred_locale: z.string().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      preferred_locale: "preferredLocale",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    preferredLocale: z.string().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      preferredLocale: "preferred_locale",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAffirmObj0,
};
