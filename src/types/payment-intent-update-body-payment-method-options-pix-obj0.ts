import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0 = {
  expiresAfterSeconds?: number | undefined;
  expiresAt?: number | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0 = {
  expires_after_seconds?: number | undefined;
  expires_at?: number | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_seconds: z.number().int().optional(),
    expires_at: z.number().int().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_seconds: "expiresAfterSeconds",
      expires_at: "expiresAt",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0 // the object to be transformed
> = z
  .object({
    expiresAfterSeconds: z.number().int().optional(),
    expiresAt: z.number().int().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterSeconds: "expires_after_seconds",
      expiresAt: "expires_at",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPixObj0,
};
