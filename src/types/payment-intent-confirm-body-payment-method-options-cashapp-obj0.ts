import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0 = {
  captureMethod?: "manual" | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0 = {
  capture_method?: "manual" | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0 // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsCashappObj0,
};
