import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsPix
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsPix = {
  expiresAfterSeconds?: number | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsPix without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsPix = {
  expires_after_seconds?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsPix
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsPix: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsPix, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_seconds: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_seconds: "expiresAfterSeconds",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsPix
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsPix: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsPix, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsPix // the object to be transformed
> = z
  .object({
    expiresAfterSeconds: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterSeconds: "expires_after_seconds",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsPix = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsPix,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsPix,
};
