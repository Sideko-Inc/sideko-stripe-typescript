import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This parameter allows you to set some attributes on the payment method created during a Checkout session.
 */
export type CheckoutSessionCreateBodyPaymentMethodData = {
  allowRedisplay?: ("always" | "limited" | "unspecified") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodData = {
  allow_redisplay?: ("always" | "limited" | "unspecified") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodData
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodData: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allow_redisplay: z.enum(["always", "limited", "unspecified"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allow_redisplay: "allowRedisplay",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodData
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodData: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodData, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodData // the object to be transformed
> = z
  .object({
    allowRedisplay: z.enum(["always", "limited", "unspecified"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowRedisplay: "allow_redisplay",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodData = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodData,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodData,
};
