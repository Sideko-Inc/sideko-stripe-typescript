import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardholderCreateBodyIndividualDob
 */
export type IssuingCardholderCreateBodyIndividualDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * IssuingCardholderCreateBodyIndividualDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholderCreateBodyIndividualDob = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholderCreateBodyIndividualDob
 */
const SchemaIn$IssuingCardholderCreateBodyIndividualDob: z.ZodType<
  IssuingCardholderCreateBodyIndividualDob, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day: z.number().int(),
    month: z.number().int(),
    year: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholderCreateBodyIndividualDob
 */
const SchemaOut$IssuingCardholderCreateBodyIndividualDob: z.ZodType<
  External$IssuingCardholderCreateBodyIndividualDob, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholderCreateBodyIndividualDob // the object to be transformed
> = z
  .object({
    day: z.number().int(),
    month: z.number().int(),
    year: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

export const Schemas$IssuingCardholderCreateBodyIndividualDob = {
  in: SchemaIn$IssuingCardholderCreateBodyIndividualDob,
  out: SchemaOut$IssuingCardholderCreateBodyIndividualDob,
};
