import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsMultibanco,
};
