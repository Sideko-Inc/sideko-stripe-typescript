import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonDobObj0
 */
export type TokenCreateBodyPersonDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * TokenCreateBodyPersonDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonDobObj0
 */
const SchemaIn$TokenCreateBodyPersonDobObj0: z.ZodType<
  TokenCreateBodyPersonDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonDobObj0
 */
const SchemaOut$TokenCreateBodyPersonDobObj0: z.ZodType<
  External$TokenCreateBodyPersonDobObj0, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonDobObj0 // the object to be transformed
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

export const Schemas$TokenCreateBodyPersonDobObj0 = {
  in: SchemaIn$TokenCreateBodyPersonDobObj0,
  out: SchemaOut$TokenCreateBodyPersonDobObj0,
};
