import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0 =
  {
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsMultibancoObj0,
  };
