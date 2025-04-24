import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsLink
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsLink = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsLink without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsLink = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsLink
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsLink: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsLink, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsLink
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsLink: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsLink, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsLink // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsLink = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsLink,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsLink,
};
