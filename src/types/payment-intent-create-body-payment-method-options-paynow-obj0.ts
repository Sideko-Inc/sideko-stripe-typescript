import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsPaynowObj0,
};
