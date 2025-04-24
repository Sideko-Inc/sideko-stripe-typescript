import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyBusinessProfileAnnualRevenue
 */
export type AccountUpdateBodyBusinessProfileAnnualRevenue = {
  amount: number;
  currency: string;
  fiscalYearEnd: string;
};

/**
 * @internal
 * AccountUpdateBodyBusinessProfileAnnualRevenue without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyBusinessProfileAnnualRevenue = {
  amount: number;
  currency: string;
  fiscal_year_end: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyBusinessProfileAnnualRevenue
 */
const SchemaIn$AccountUpdateBodyBusinessProfileAnnualRevenue: z.ZodType<
  AccountUpdateBodyBusinessProfileAnnualRevenue, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    fiscal_year_end: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      fiscal_year_end: "fiscalYearEnd",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyBusinessProfileAnnualRevenue
 */
const SchemaOut$AccountUpdateBodyBusinessProfileAnnualRevenue: z.ZodType<
  External$AccountUpdateBodyBusinessProfileAnnualRevenue, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyBusinessProfileAnnualRevenue // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    fiscalYearEnd: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      fiscalYearEnd: "fiscal_year_end",
    });
  });

export const Schemas$AccountUpdateBodyBusinessProfileAnnualRevenue = {
  in: SchemaIn$AccountUpdateBodyBusinessProfileAnnualRevenue,
  out: SchemaOut$AccountUpdateBodyBusinessProfileAnnualRevenue,
};
