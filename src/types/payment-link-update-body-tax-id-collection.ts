import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls tax ID collection during checkout.
 */
export type PaymentLinkUpdateBodyTaxIdCollection = {
  enabled: boolean;
  required?: ("if_supported" | "never") | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyTaxIdCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyTaxIdCollection = {
  enabled: boolean;
  required?: ("if_supported" | "never") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyTaxIdCollection
 */
const SchemaIn$PaymentLinkUpdateBodyTaxIdCollection: z.ZodType<
  PaymentLinkUpdateBodyTaxIdCollection, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyTaxIdCollection
 */
const SchemaOut$PaymentLinkUpdateBodyTaxIdCollection: z.ZodType<
  External$PaymentLinkUpdateBodyTaxIdCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyTaxIdCollection // the object to be transformed
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

export const Schemas$PaymentLinkUpdateBodyTaxIdCollection = {
  in: SchemaIn$PaymentLinkUpdateBodyTaxIdCollection,
  out: SchemaOut$PaymentLinkUpdateBodyTaxIdCollection,
};
