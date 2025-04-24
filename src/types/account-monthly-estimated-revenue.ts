import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountMonthlyEstimatedRevenue = {
  /**
   * A non-negative integer representing how much to charge in the [smallest currency unit](/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
};

/**
 * @internal
 * AccountMonthlyEstimatedRevenue without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountMonthlyEstimatedRevenue = {
  amount: number;
  currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountMonthlyEstimatedRevenue
 */
const SchemaIn$AccountMonthlyEstimatedRevenue: z.ZodType<
  AccountMonthlyEstimatedRevenue, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountMonthlyEstimatedRevenue
 */
const SchemaOut$AccountMonthlyEstimatedRevenue: z.ZodType<
  External$AccountMonthlyEstimatedRevenue, // output type of this zod object
  z.ZodTypeDef,
  AccountMonthlyEstimatedRevenue // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
    });
  });

export const Schemas$AccountMonthlyEstimatedRevenue = {
  in: SchemaIn$AccountMonthlyEstimatedRevenue,
  out: SchemaOut$AccountMonthlyEstimatedRevenue,
};
