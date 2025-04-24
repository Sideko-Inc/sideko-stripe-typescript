import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsFpxObj0,
};
