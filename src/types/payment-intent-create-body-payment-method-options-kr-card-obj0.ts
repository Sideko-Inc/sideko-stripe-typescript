import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0 = {
  captureMethod?: "manual" | undefined;
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0 = {
  capture_method?: "manual" | undefined;
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsKrCardObj0,
};
