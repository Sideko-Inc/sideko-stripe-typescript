import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsEps
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsEps = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsEps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsEps = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsEps
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsEps: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsEps, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsEps
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsEps: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsEps, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsEps // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsEps = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsEps,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsEps,
};
