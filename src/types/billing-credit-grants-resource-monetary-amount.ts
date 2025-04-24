import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingCreditGrantsResourceMonetaryAmount = {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * A positive integer representing the amount.
   */
  value: number;
};

/**
 * @internal
 * BillingCreditGrantsResourceMonetaryAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingCreditGrantsResourceMonetaryAmount = {
  currency: string;
  value: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingCreditGrantsResourceMonetaryAmount
 */
const SchemaIn$BillingCreditGrantsResourceMonetaryAmount: z.ZodType<
  BillingCreditGrantsResourceMonetaryAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.string(),
    value: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingCreditGrantsResourceMonetaryAmount
 */
const SchemaOut$BillingCreditGrantsResourceMonetaryAmount: z.ZodType<
  External$BillingCreditGrantsResourceMonetaryAmount, // output type of this zod object
  z.ZodTypeDef,
  BillingCreditGrantsResourceMonetaryAmount // the object to be transformed
> = z
  .object({
    currency: z.string(),
    value: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      value: "value",
    });
  });

export const Schemas$BillingCreditGrantsResourceMonetaryAmount = {
  in: SchemaIn$BillingCreditGrantsResourceMonetaryAmount,
  out: SchemaOut$BillingCreditGrantsResourceMonetaryAmount,
};
