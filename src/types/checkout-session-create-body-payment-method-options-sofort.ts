import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsSofort
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsSofort = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsSofort without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsSofort = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsSofort
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSofort: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsSofort, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsSofort
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSofort: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsSofort, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsSofort // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSofort = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSofort,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSofort,
};
