import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleCreateBodyDobObj0
 */
export type AccountPeopleCreateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * @internal
 * AccountPeopleCreateBodyDobObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyDobObj0 = {
  day: number;
  month: number;
  year: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyDobObj0
 */
const SchemaIn$AccountPeopleCreateBodyDobObj0: z.ZodType<
  AccountPeopleCreateBodyDobObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyDobObj0
 */
const SchemaOut$AccountPeopleCreateBodyDobObj0: z.ZodType<
  External$AccountPeopleCreateBodyDobObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyDobObj0 // the object to be transformed
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

export const Schemas$AccountPeopleCreateBodyDobObj0 = {
  in: SchemaIn$AccountPeopleCreateBodyDobObj0,
  out: SchemaOut$AccountPeopleCreateBodyDobObj0,
};
