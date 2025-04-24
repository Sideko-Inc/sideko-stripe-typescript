import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsRevolutPay,
};
