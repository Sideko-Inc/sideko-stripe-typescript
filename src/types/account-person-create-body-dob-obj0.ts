import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBodyDobObj0
 */
export type AccountPersonCreateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * AccountPersonCreateBodyDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyDobObj0
 */
const SchemaIn$AccountPersonCreateBodyDobObj0: z.ZodType<
  AccountPersonCreateBodyDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyDobObj0
 */
const SchemaOut$AccountPersonCreateBodyDobObj0: z.ZodType<
  External$AccountPersonCreateBodyDobObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyDobObj0 // the object to be transformed
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

export const Schemas$AccountPersonCreateBodyDobObj0 = {
  in: SchemaIn$AccountPersonCreateBodyDobObj0,
  out: SchemaOut$AccountPersonCreateBodyDobObj0,
};
