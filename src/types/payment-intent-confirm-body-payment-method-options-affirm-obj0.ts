import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0 = {
  captureMethod?: "manual" | undefined;
  preferredLocale?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0 = {
  capture_method?: "manual" | undefined;
  preferred_locale?: string | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0 // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsAffirmObj0,
};
