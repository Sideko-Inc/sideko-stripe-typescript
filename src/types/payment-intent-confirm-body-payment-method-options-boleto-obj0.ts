import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0 = {
  expiresAfterDays?: number | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0 = {
  expires_after_days?: number | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0 // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBoletoObj0,
};
