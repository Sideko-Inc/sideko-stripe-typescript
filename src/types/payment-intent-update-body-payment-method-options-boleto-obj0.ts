import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0 = {
  expiresAfterDays?: number | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0 = {
  expires_after_days?: number | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBoletoObj0,
};
