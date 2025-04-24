import { Address, External$Address, Schemas$Address } from "./address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardShippingAddressValidation = {
  /**
   * The address validation capabilities to use.
   */
  mode: "disabled" | "normalization_only" | "validation_and_normalization";
  normalizedAddress?: Address | undefined;
  /**
   * The validation result for the shipping address.
   */
  result?:
    | ("indeterminate" | "likely_deliverable" | "likely_undeliverable")
    | null
    | undefined;
};

/**
 * @internal
 * IssuingCardShippingAddressValidation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardShippingAddressValidation = {
  mode: "disabled" | "normalization_only" | "validation_and_normalization";
  normalized_address?: External$Address | undefined;
  result?:
    | ("indeterminate" | "likely_deliverable" | "likely_undeliverable")
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardShippingAddressValidation
 */
const SchemaIn$IssuingCardShippingAddressValidation: z.ZodType<
  IssuingCardShippingAddressValidation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mode: z.enum([
      "disabled",
      "normalization_only",
      "validation_and_normalization",
    ]),
    normalized_address: Schemas$Address.in.optional(),
    result: z
      .enum(["indeterminate", "likely_deliverable", "likely_undeliverable"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mode: "mode",
      normalized_address: "normalizedAddress",
      result: "result",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardShippingAddressValidation
 */
const SchemaOut$IssuingCardShippingAddressValidation: z.ZodType<
  External$IssuingCardShippingAddressValidation, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardShippingAddressValidation // the object to be transformed
> = z
  .object({
    mode: z.enum([
      "disabled",
      "normalization_only",
      "validation_and_normalization",
    ]),
    normalizedAddress: Schemas$Address.out.optional(),
    result: z
      .enum(["indeterminate", "likely_deliverable", "likely_undeliverable"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mode: "mode",
      normalizedAddress: "normalized_address",
      result: "result",
    });
  });

export const Schemas$IssuingCardShippingAddressValidation = {
  in: SchemaIn$IssuingCardShippingAddressValidation,
  out: SchemaOut$IssuingCardShippingAddressValidation,
};
