import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPaynowObj0,
};
