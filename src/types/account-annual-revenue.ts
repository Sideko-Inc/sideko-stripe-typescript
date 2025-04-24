import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountAnnualRevenue = {
  /**
   * A non-negative integer representing the amount in the [smallest currency unit](/currencies#zero-decimal).
   */
  amount?: number | null | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | null | undefined;
  /**
   * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
   */
  fiscalYearEnd?: string | null | undefined;
};

/**
 * @internal
 * AccountAnnualRevenue without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountAnnualRevenue = {
  amount?: number | null | undefined;
  currency?: string | null | undefined;
  fiscal_year_end?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountAnnualRevenue
 */
const SchemaIn$AccountAnnualRevenue: z.ZodType<
  AccountAnnualRevenue, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    currency: z.string().nullable().optional(),
    fiscal_year_end: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountAnnualRevenue
 */
const SchemaOut$AccountAnnualRevenue: z.ZodType<
  External$AccountAnnualRevenue, // output type of this zod object
  z.ZodTypeDef,
  AccountAnnualRevenue // the object to be transformed
> = z
  .object({
    amount: z.number().int().nullable().optional(),
    currency: z.string().nullable().optional(),
    fiscalYearEnd: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      fiscalYearEnd: "fiscal_year_end",
    });
  });

export const Schemas$AccountAnnualRevenue = {
  in: SchemaIn$AccountAnnualRevenue,
  out: SchemaOut$AccountAnnualRevenue,
};
