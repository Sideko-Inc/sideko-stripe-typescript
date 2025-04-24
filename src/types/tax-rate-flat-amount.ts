import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The amount of the tax rate when the `rate_type`` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
 */
export type TaxRateFlatAmount = {
  /**
   * Amount of the tax when the `rate_type` is `flat_amount`. This positive integer represents how much to charge in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount: number;
  /**
   * Three-letter ISO currency code, in lowercase.
   */
  currency: string;
};

/**
 * @internal
 * TaxRateFlatAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRateFlatAmount = {
  amount: number;
  currency: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRateFlatAmount
 */
const SchemaIn$TaxRateFlatAmount: z.ZodType<
  TaxRateFlatAmount, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRateFlatAmount
 */
const SchemaOut$TaxRateFlatAmount: z.ZodType<
  External$TaxRateFlatAmount, // output type of this zod object
  z.ZodTypeDef,
  TaxRateFlatAmount // the object to be transformed
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

export const Schemas$TaxRateFlatAmount = {
  in: SchemaIn$TaxRateFlatAmount,
  out: SchemaOut$TaxRateFlatAmount,
};
