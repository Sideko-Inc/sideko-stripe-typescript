import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleUpdateBodyDobObj0
 */
export type AccountPeopleUpdateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * AccountPeopleUpdateBodyDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyDobObj0
 */
const SchemaIn$AccountPeopleUpdateBodyDobObj0: z.ZodType<
  AccountPeopleUpdateBodyDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyDobObj0
 */
const SchemaOut$AccountPeopleUpdateBodyDobObj0: z.ZodType<
  External$AccountPeopleUpdateBodyDobObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyDobObj0 // the object to be transformed
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

export const Schemas$AccountPeopleUpdateBodyDobObj0 = {
  in: SchemaIn$AccountPeopleUpdateBodyDobObj0,
  out: SchemaOut$AccountPeopleUpdateBodyDobObj0,
};
