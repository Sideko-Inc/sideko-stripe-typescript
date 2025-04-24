import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsEpsObj0,
};
