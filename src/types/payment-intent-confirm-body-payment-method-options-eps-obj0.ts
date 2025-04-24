import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsEpsObj0,
};
