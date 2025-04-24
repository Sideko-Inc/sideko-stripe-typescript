import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue
 */
export type AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue = {
  amount: number;
  currency: string;
};

/**
 * @internal
 * AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue = {
  amount: number;
  currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue
 */
const SchemaIn$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue: z.ZodType<
  AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue
 */
const SchemaOut$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue: z.ZodType<
  External$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue // the object to be transformed
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

export const Schemas$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue = {
  in: SchemaIn$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue,
  out: SchemaOut$AccountUpdateBodyBusinessProfileMonthlyEstimatedRevenue,
};
