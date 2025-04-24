import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsIdeal
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsIdeal = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsIdeal without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsIdeal
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsIdeal, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsIdeal // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsIdeal,
};
