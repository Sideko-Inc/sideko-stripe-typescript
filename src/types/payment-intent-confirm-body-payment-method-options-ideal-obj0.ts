import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0 = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0 = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsIdealObj0,
};
