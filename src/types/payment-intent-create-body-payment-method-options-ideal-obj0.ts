import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0 = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0 = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsIdealObj0,
};
