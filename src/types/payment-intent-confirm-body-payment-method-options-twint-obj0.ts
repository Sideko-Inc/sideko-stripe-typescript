import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsTwintObj0,
};
