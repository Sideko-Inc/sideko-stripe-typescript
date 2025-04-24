import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0 =
  {
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsMultibancoObj0,
  };
