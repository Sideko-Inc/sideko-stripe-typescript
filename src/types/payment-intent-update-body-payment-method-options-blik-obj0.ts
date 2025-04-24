import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0 = {
  code?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0 = {
  code?: string | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    code: z.string().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0 // the object to be transformed
> = z
  .object({
    code: z.string().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      code: "code",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBlikObj0,
};
