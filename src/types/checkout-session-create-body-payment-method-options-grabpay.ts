import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsGrabpay,
};
