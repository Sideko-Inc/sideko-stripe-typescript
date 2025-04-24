import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0 = {
  expiresAfterDays?: number | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0 = {
  expires_after_days?: number | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_days: z.number().int().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_days: "expiresAfterDays",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0 // the object to be transformed
> = z
  .object({
    expiresAfterDays: z.number().int().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterDays: "expires_after_days",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsOxxoObj0,
};
