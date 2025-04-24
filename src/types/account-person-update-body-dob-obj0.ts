import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyDobObj0
 */
export type AccountPersonUpdateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * AccountPersonUpdateBodyDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyDobObj0
 */
const SchemaIn$AccountPersonUpdateBodyDobObj0: z.ZodType<
  AccountPersonUpdateBodyDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyDobObj0
 */
const SchemaOut$AccountPersonUpdateBodyDobObj0: z.ZodType<
  External$AccountPersonUpdateBodyDobObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyDobObj0 // the object to be transformed
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

export const Schemas$AccountPersonUpdateBodyDobObj0 = {
  in: SchemaIn$AccountPersonUpdateBodyDobObj0,
  out: SchemaOut$AccountPersonUpdateBodyDobObj0,
};
