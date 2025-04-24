import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsFpxObj0,
};
