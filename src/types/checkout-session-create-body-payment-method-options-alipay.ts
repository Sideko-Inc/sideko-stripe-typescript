import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsAlipay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsAlipay = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsAlipay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsAlipay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsAlipay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsAlipay // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAlipay,
};
