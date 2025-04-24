import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyIndividualDobObj0
 */
export type AccountCreateBodyIndividualDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * AccountCreateBodyIndividualDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyIndividualDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyIndividualDobObj0
 */
const SchemaIn$AccountCreateBodyIndividualDobObj0: z.ZodType<
  AccountCreateBodyIndividualDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyIndividualDobObj0
 */
const SchemaOut$AccountCreateBodyIndividualDobObj0: z.ZodType<
  External$AccountCreateBodyIndividualDobObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyIndividualDobObj0 // the object to be transformed
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

export const Schemas$AccountCreateBodyIndividualDobObj0 = {
  in: SchemaIn$AccountCreateBodyIndividualDobObj0,
  out: SchemaOut$AccountCreateBodyIndividualDobObj0,
};
