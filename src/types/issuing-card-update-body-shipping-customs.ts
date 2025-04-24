import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardUpdateBodyShippingCustoms
 */
export type IssuingCardUpdateBodyShippingCustoms = {
  eoriNumber?: string | undefined;
};

/**
 * @internal
 * IssuingCardUpdateBodyShippingCustoms without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardUpdateBodyShippingCustoms = {
  eori_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardUpdateBodyShippingCustoms
 */
const SchemaIn$IssuingCardUpdateBodyShippingCustoms: z.ZodType<
  IssuingCardUpdateBodyShippingCustoms, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eori_number: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eori_number: "eoriNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardUpdateBodyShippingCustoms
 */
const SchemaOut$IssuingCardUpdateBodyShippingCustoms: z.ZodType<
  External$IssuingCardUpdateBodyShippingCustoms, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardUpdateBodyShippingCustoms // the object to be transformed
> = z
  .object({
    eoriNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eoriNumber: "eori_number",
    });
  });

export const Schemas$IssuingCardUpdateBodyShippingCustoms = {
  in: SchemaIn$IssuingCardUpdateBodyShippingCustoms,
  out: SchemaOut$IssuingCardUpdateBodyShippingCustoms,
};
