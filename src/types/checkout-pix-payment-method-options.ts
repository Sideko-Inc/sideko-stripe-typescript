import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutPixPaymentMethodOptions = {
  /**
   * The number of seconds after which Pix payment will expire.
   */
  expiresAfterSeconds?: number | null | undefined;
};

/**
 * @internal
 * CheckoutPixPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutPixPaymentMethodOptions = {
  expires_after_seconds?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutPixPaymentMethodOptions
 */
const SchemaIn$CheckoutPixPaymentMethodOptions: z.ZodType<
  CheckoutPixPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_seconds: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_seconds: "expiresAfterSeconds",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutPixPaymentMethodOptions
 */
const SchemaOut$CheckoutPixPaymentMethodOptions: z.ZodType<
  External$CheckoutPixPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutPixPaymentMethodOptions // the object to be transformed
> = z
  .object({
    expiresAfterSeconds: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterSeconds: "expires_after_seconds",
    });
  });

export const Schemas$CheckoutPixPaymentMethodOptions = {
  in: SchemaIn$CheckoutPixPaymentMethodOptions,
  out: SchemaOut$CheckoutPixPaymentMethodOptions,
};
