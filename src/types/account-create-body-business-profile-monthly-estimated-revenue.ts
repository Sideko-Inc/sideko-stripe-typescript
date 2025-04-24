import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue
 */
export type AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue = {
  amount: number;
  currency: string;
};

/**
 * @internal
 * AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue = {
  amount: number;
  currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue
 */
const SchemaIn$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue: z.ZodType<
  AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue
 */
const SchemaOut$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue: z.ZodType<
  External$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue // the object to be transformed
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

export const Schemas$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue = {
  in: SchemaIn$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue,
  out: SchemaOut$AccountCreateBodyBusinessProfileMonthlyEstimatedRevenue,
};
