import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsTwintObj0,
};
