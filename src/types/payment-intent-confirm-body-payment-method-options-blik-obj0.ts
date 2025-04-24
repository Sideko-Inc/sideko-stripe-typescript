import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0 = {
  code?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0 = {
  code?: string | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0 // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBlikObj0,
};
