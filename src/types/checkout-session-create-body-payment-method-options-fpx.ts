import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsFpx
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsFpx = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsFpx without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsFpx = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsFpx
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsFpx: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsFpx, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsFpx
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsFpx: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsFpx, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsFpx // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsFpx = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsFpx,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsFpx,
};
