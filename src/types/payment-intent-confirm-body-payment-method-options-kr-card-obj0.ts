import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0 = {
  captureMethod?: "manual" | undefined;
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0 = {
  capture_method?: "manual" | undefined;
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0 // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsKrCardObj0,
};
