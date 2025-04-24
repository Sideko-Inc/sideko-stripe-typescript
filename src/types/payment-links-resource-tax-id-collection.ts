import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceTaxIdCollection = {
  /**
   * Indicates whether tax ID collection is enabled for the session.
   */
  enabled: boolean;
  required: "if_supported" | "never";
};

/**
 * @internal
 * PaymentLinksResourceTaxIdCollection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceTaxIdCollection = {
  enabled: boolean;
  required: "if_supported" | "never";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceTaxIdCollection
 */
const SchemaIn$PaymentLinksResourceTaxIdCollection: z.ZodType<
  PaymentLinksResourceTaxIdCollection, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceTaxIdCollection
 */
const SchemaOut$PaymentLinksResourceTaxIdCollection: z.ZodType<
  External$PaymentLinksResourceTaxIdCollection, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceTaxIdCollection // the object to be transformed
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

export const Schemas$PaymentLinksResourceTaxIdCollection = {
  in: SchemaIn$PaymentLinksResourceTaxIdCollection,
  out: SchemaOut$PaymentLinksResourceTaxIdCollection,
};
