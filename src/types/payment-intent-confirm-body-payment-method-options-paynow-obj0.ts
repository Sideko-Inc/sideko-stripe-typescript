import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPaynowObj0,
};
