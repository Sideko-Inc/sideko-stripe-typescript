import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardUpdateBodyShippingAddressValidation
 */
export type IssuingCardUpdateBodyShippingAddressValidation = {
  mode: "disabled" | "normalization_only" | "validation_and_normalization";
};

/**
 * @internal
 * IssuingCardUpdateBodyShippingAddressValidation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardUpdateBodyShippingAddressValidation = {
  mode: "disabled" | "normalization_only" | "validation_and_normalization";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardUpdateBodyShippingAddressValidation
 */
const SchemaIn$IssuingCardUpdateBodyShippingAddressValidation: z.ZodType<
  IssuingCardUpdateBodyShippingAddressValidation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mode: z.enum([
      "disabled",
      "normalization_only",
      "validation_and_normalization",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mode: "mode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardUpdateBodyShippingAddressValidation
 */
const SchemaOut$IssuingCardUpdateBodyShippingAddressValidation: z.ZodType<
  External$IssuingCardUpdateBodyShippingAddressValidation, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardUpdateBodyShippingAddressValidation // the object to be transformed
> = z
  .object({
    mode: z.enum([
      "disabled",
      "normalization_only",
      "validation_and_normalization",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mode: "mode",
    });
  });

export const Schemas$IssuingCardUpdateBodyShippingAddressValidation = {
  in: SchemaIn$IssuingCardUpdateBodyShippingAddressValidation,
  out: SchemaOut$IssuingCardUpdateBodyShippingAddressValidation,
};
