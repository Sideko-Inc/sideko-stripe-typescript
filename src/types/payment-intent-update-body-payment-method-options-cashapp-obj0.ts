import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0 = {
  captureMethod?: "manual" | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0 = {
  capture_method?: "manual" | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsCashappObj0,
};
