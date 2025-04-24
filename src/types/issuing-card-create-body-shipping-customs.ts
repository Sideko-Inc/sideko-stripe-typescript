import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardCreateBodyShippingCustoms
 */
export type IssuingCardCreateBodyShippingCustoms = {
  eoriNumber?: string | undefined;
};

/**
 * @internal
 * IssuingCardCreateBodyShippingCustoms without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardCreateBodyShippingCustoms = {
  eori_number?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardCreateBodyShippingCustoms
 */
const SchemaIn$IssuingCardCreateBodyShippingCustoms: z.ZodType<
  IssuingCardCreateBodyShippingCustoms, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardCreateBodyShippingCustoms
 */
const SchemaOut$IssuingCardCreateBodyShippingCustoms: z.ZodType<
  External$IssuingCardCreateBodyShippingCustoms, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardCreateBodyShippingCustoms // the object to be transformed
> = z
  .object({
    eoriNumber: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eoriNumber: "eori_number",
    });
  });

export const Schemas$IssuingCardCreateBodyShippingCustoms = {
  in: SchemaIn$IssuingCardCreateBodyShippingCustoms,
  out: SchemaOut$IssuingCardCreateBodyShippingCustoms,
};
