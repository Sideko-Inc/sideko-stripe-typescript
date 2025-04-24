import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionAdaptivePricing = {
  /**
   * Whether Adaptive Pricing is enabled.
   */
  enabled: boolean;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionAdaptivePricing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionAdaptivePricing = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionAdaptivePricing
 */
const SchemaIn$PaymentPagesCheckoutSessionAdaptivePricing: z.ZodType<
  PaymentPagesCheckoutSessionAdaptivePricing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionAdaptivePricing
 */
const SchemaOut$PaymentPagesCheckoutSessionAdaptivePricing: z.ZodType<
  External$PaymentPagesCheckoutSessionAdaptivePricing, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionAdaptivePricing // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionAdaptivePricing = {
  in: SchemaIn$PaymentPagesCheckoutSessionAdaptivePricing,
  out: SchemaOut$PaymentPagesCheckoutSessionAdaptivePricing,
};
