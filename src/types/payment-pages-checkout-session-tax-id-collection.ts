import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionTaxIdCollection = {
  /**
   * Indicates whether tax ID collection is enabled for the session
   */
  enabled: boolean;
  /**
   * Indicates whether a tax ID is required on the payment page
   */
  required: "if_supported" | "never";
};

/**
 * @internal
 * PaymentPagesCheckoutSessionTaxIdCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionTaxIdCollection = {
  enabled: boolean;
  required: "if_supported" | "never";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionTaxIdCollection
 */
const SchemaIn$PaymentPagesCheckoutSessionTaxIdCollection: z.ZodType<
  PaymentPagesCheckoutSessionTaxIdCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    required: z.enum(["if_supported", "never"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      required: "required",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionTaxIdCollection
 */
const SchemaOut$PaymentPagesCheckoutSessionTaxIdCollection: z.ZodType<
  External$PaymentPagesCheckoutSessionTaxIdCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionTaxIdCollection // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    required: z.enum(["if_supported", "never"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      required: "required",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionTaxIdCollection = {
  in: SchemaIn$PaymentPagesCheckoutSessionTaxIdCollection,
  out: SchemaOut$PaymentPagesCheckoutSessionTaxIdCollection,
};
