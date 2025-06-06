import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0 =
  {
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsMultibancoObj0,
  };
