import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0 = {
  expiresAfterDays?: number | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0 = {
  expires_after_days?: number | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_days: z.number().int().optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_days: "expiresAfterDays",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0 // the object to be transformed
> = z
  .object({
    expiresAfterDays: z.number().int().optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterDays: "expires_after_days",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBoletoObj0,
};
