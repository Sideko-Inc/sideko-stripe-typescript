import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyBusinessProfileAnnualRevenue
 */
export type AccountCreateBodyBusinessProfileAnnualRevenue = {
  amount: number;
  currency: string;
  fiscalYearEnd: string;
};

/**
 * @internal
 * AccountCreateBodyBusinessProfileAnnualRevenue without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyBusinessProfileAnnualRevenue = {
  amount: number;
  currency: string;
  fiscal_year_end: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyBusinessProfileAnnualRevenue
 */
const SchemaIn$AccountCreateBodyBusinessProfileAnnualRevenue: z.ZodType<
  AccountCreateBodyBusinessProfileAnnualRevenue, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyBusinessProfileAnnualRevenue
 */
const SchemaOut$AccountCreateBodyBusinessProfileAnnualRevenue: z.ZodType<
  External$AccountCreateBodyBusinessProfileAnnualRevenue, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyBusinessProfileAnnualRevenue // the object to be transformed
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

export const Schemas$AccountCreateBodyBusinessProfileAnnualRevenue = {
  in: SchemaIn$AccountCreateBodyBusinessProfileAnnualRevenue,
  out: SchemaOut$AccountCreateBodyBusinessProfileAnnualRevenue,
};
