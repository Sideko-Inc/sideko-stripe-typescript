import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0 = {
  code?: string | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0 = {
  code?: string | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0 // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBlikObj0,
};
