import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyIndividualDobObj0
 */
export type AccountUpdateBodyIndividualDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * AccountUpdateBodyIndividualDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyIndividualDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyIndividualDobObj0
 */
const SchemaIn$AccountUpdateBodyIndividualDobObj0: z.ZodType<
  AccountUpdateBodyIndividualDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyIndividualDobObj0
 */
const SchemaOut$AccountUpdateBodyIndividualDobObj0: z.ZodType<
  External$AccountUpdateBodyIndividualDobObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyIndividualDobObj0 // the object to be transformed
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

export const Schemas$AccountUpdateBodyIndividualDobObj0 = {
  in: SchemaIn$AccountUpdateBodyIndividualDobObj0,
  out: SchemaOut$AccountUpdateBodyIndividualDobObj0,
};
