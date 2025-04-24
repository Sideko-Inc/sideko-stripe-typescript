import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay = {
  setupFutureUsage?: ("none" | "off_session") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay = {
  setup_future_usage?: ("none" | "off_session") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAmazonPay,
};
