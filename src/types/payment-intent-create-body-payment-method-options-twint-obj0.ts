import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsTwintObj0,
};
