import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0 = {
  captureMethod?: "manual" | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0 = {
  capture_method?: "manual" | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0 // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsCashappObj0,
};
