import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional information about a `company` cardholder.
 */
export type IssuingCardholderUpdateBodyCompany = {
  taxId?: string | undefined;
};

/**
 * @internal
 * IssuingCardholderUpdateBodyCompany without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderUpdateBodyCompany = {
  tax_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderUpdateBodyCompany
 */
const SchemaIn$IssuingCardholderUpdateBodyCompany: z.ZodType<
  IssuingCardholderUpdateBodyCompany, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tax_id: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tax_id: "taxId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderUpdateBodyCompany
 */
const SchemaOut$IssuingCardholderUpdateBodyCompany: z.ZodType<
  External$IssuingCardholderUpdateBodyCompany, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderUpdateBodyCompany // the object to be transformed
> = z
  .object({
    taxId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$IssuingCardholderUpdateBodyCompany = {
  in: SchemaIn$IssuingCardholderUpdateBodyCompany,
  out: SchemaOut$IssuingCardholderUpdateBodyCompany,
};
