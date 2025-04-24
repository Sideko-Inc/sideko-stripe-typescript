import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0 = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0 = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsIdealObj0,
};
