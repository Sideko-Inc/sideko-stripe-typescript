import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountIndividualDobObj0
 */
export type TokenCreateBodyAccountIndividualDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * TokenCreateBodyAccountIndividualDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountIndividualDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountIndividualDobObj0
 */
const SchemaIn$TokenCreateBodyAccountIndividualDobObj0: z.ZodType<
  TokenCreateBodyAccountIndividualDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountIndividualDobObj0
 */
const SchemaOut$TokenCreateBodyAccountIndividualDobObj0: z.ZodType<
  External$TokenCreateBodyAccountIndividualDobObj0, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountIndividualDobObj0 // the object to be transformed
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

export const Schemas$TokenCreateBodyAccountIndividualDobObj0 = {
  in: SchemaIn$TokenCreateBodyAccountIndividualDobObj0,
  out: SchemaOut$TokenCreateBodyAccountIndividualDobObj0,
};
