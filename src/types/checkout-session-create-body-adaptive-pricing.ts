import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
 */
export type CheckoutSessionCreateBodyAdaptivePricing = {
  enabled?: boolean | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyAdaptivePricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyAdaptivePricing = {
  enabled?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyAdaptivePricing
 */
const SchemaIn$CheckoutSessionCreateBodyAdaptivePricing: z.ZodType<
  CheckoutSessionCreateBodyAdaptivePricing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyAdaptivePricing
 */
const SchemaOut$CheckoutSessionCreateBodyAdaptivePricing: z.ZodType<
  External$CheckoutSessionCreateBodyAdaptivePricing, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyAdaptivePricing // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$CheckoutSessionCreateBodyAdaptivePricing = {
  in: SchemaIn$CheckoutSessionCreateBodyAdaptivePricing,
  out: SchemaOut$CheckoutSessionCreateBodyAdaptivePricing,
};
