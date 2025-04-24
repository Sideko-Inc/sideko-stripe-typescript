import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0 = {
  expiresAfterDays?: number | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0 = {
  expires_after_days?: number | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0 // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsOxxoObj0,
};
