import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Controls tax ID collection during checkout.
 */
export type PaymentLinkCreateBodyTaxIdCollection = {
  enabled: boolean;
  required?: ("if_supported" | "never") | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyTaxIdCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyTaxIdCollection = {
  enabled: boolean;
  required?: ("if_supported" | "never") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyTaxIdCollection
 */
const SchemaIn$PaymentLinkCreateBodyTaxIdCollection: z.ZodType<
  PaymentLinkCreateBodyTaxIdCollection, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyTaxIdCollection
 */
const SchemaOut$PaymentLinkCreateBodyTaxIdCollection: z.ZodType<
  External$PaymentLinkCreateBodyTaxIdCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyTaxIdCollection // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyTaxIdCollection = {
  in: SchemaIn$PaymentLinkCreateBodyTaxIdCollection,
  out: SchemaOut$PaymentLinkCreateBodyTaxIdCollection,
};
