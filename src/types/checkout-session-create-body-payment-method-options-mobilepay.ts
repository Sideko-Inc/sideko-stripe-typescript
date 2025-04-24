import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsMobilepay,
};
