import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Additional information about a `company` cardholder.
 */
export type IssuingCardholderCreateBodyCompany = {
  taxId?: string | undefined;
};

/**
 * @internal
 * IssuingCardholderCreateBodyCompany without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBodyCompany = {
  tax_id?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBodyCompany
 */
const SchemaIn$IssuingCardholderCreateBodyCompany: z.ZodType<
  IssuingCardholderCreateBodyCompany, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBodyCompany
 */
const SchemaOut$IssuingCardholderCreateBodyCompany: z.ZodType<
  External$IssuingCardholderCreateBodyCompany, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBodyCompany // the object to be transformed
> = z
  .object({
    taxId: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxId: "tax_id",
    });
  });

export const Schemas$IssuingCardholderCreateBodyCompany = {
  in: SchemaIn$IssuingCardholderCreateBodyCompany,
  out: SchemaOut$IssuingCardholderCreateBodyCompany,
};
