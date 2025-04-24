import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsEpsObj0,
};
