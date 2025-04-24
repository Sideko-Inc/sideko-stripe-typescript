import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardShippingCustoms = {
  /**
   * A registration number used for customs in Europe. See [https://www.gov.uk/eori](https://www.gov.uk/eori) for the UK and [https://ec.europa.eu/taxation_customs/business/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en](https://ec.europa.eu/taxation_customs/business/customs-procedures-import-and-export/customs-procedures/economic-operators-registration-and-identification-number-eori_en) for the EU.
   */
  eoriNumber?: string | null | undefined;
};

/**
 * @internal
 * IssuingCardShippingCustoms without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardShippingCustoms = {
  eori_number?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardShippingCustoms
 */
const SchemaIn$IssuingCardShippingCustoms: z.ZodType<
  IssuingCardShippingCustoms, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    eori_number: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eori_number: "eoriNumber",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardShippingCustoms
 */
const SchemaOut$IssuingCardShippingCustoms: z.ZodType<
  External$IssuingCardShippingCustoms, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardShippingCustoms // the object to be transformed
> = z
  .object({
    eoriNumber: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eoriNumber: "eori_number",
    });
  });

export const Schemas$IssuingCardShippingCustoms = {
  in: SchemaIn$IssuingCardShippingCustoms,
  out: SchemaOut$IssuingCardShippingCustoms,
};
