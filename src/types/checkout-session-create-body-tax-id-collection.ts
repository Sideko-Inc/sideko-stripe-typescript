import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls tax ID collection during checkout.
 */
export type CheckoutSessionCreateBodyTaxIdCollection = {
  enabled: boolean;
  required?: ("if_supported" | "never") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyTaxIdCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyTaxIdCollection = {
  enabled: boolean;
  required?: ("if_supported" | "never") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyTaxIdCollection
 */
const SchemaIn$CheckoutSessionCreateBodyTaxIdCollection: z.ZodType<
  CheckoutSessionCreateBodyTaxIdCollection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    required: z.enum(["if_supported", "never"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      required: "required",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyTaxIdCollection
 */
const SchemaOut$CheckoutSessionCreateBodyTaxIdCollection: z.ZodType<
  External$CheckoutSessionCreateBodyTaxIdCollection, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyTaxIdCollection // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    required: z.enum(["if_supported", "never"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      required: "required",
    });
  });

export const Schemas$CheckoutSessionCreateBodyTaxIdCollection = {
  in: SchemaIn$CheckoutSessionCreateBodyTaxIdCollection,
  out: SchemaOut$CheckoutSessionCreateBodyTaxIdCollection,
};
