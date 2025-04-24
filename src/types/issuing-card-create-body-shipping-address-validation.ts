import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardCreateBodyShippingAddressValidation
 */
export type IssuingCardCreateBodyShippingAddressValidation = {
  mode: "disabled" | "normalization_only" | "validation_and_normalization";
};

/**
 * @internal
 * IssuingCardCreateBodyShippingAddressValidation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardCreateBodyShippingAddressValidation = {
  mode: "disabled" | "normalization_only" | "validation_and_normalization";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardCreateBodyShippingAddressValidation
 */
const SchemaIn$IssuingCardCreateBodyShippingAddressValidation: z.ZodType<
  IssuingCardCreateBodyShippingAddressValidation, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardCreateBodyShippingAddressValidation
 */
const SchemaOut$IssuingCardCreateBodyShippingAddressValidation: z.ZodType<
  External$IssuingCardCreateBodyShippingAddressValidation, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardCreateBodyShippingAddressValidation // the object to be transformed
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

export const Schemas$IssuingCardCreateBodyShippingAddressValidation = {
  in: SchemaIn$IssuingCardCreateBodyShippingAddressValidation,
  out: SchemaOut$IssuingCardCreateBodyShippingAddressValidation,
};
