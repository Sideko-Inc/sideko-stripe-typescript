import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardholderCompany = {
  /**
   * Whether the company's business ID number was provided.
   */
  taxIdProvided: boolean;
};

/**
 * @internal
 * IssuingCardholderCompany without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCompany = {
  tax_id_provided: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCompany
 */
const SchemaIn$IssuingCardholderCompany: z.ZodType<
  IssuingCardholderCompany, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tax_id_provided: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tax_id_provided: "taxIdProvided",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCompany
 */
const SchemaOut$IssuingCardholderCompany: z.ZodType<
  External$IssuingCardholderCompany, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCompany // the object to be transformed
> = z
  .object({
    taxIdProvided: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxIdProvided: "tax_id_provided",
    });
  });

export const Schemas$IssuingCardholderCompany = {
  in: SchemaIn$IssuingCardholderCompany,
  out: SchemaOut$IssuingCardholderCompany,
};
