import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsPaynow
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsPaynow = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsPaynow without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsPaynow
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsPaynow, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsPaynow // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsPaynow,
};
