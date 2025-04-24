import {
  External$PromotionCodesResourceRestrictionsCurrencyOptions,
  PromotionCodesResourceRestrictionsCurrencyOptions,
  Schemas$PromotionCodesResourceRestrictionsCurrencyOptions,
} from "./promotion-codes-resource-restrictions-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PromotionCodesResourceRestrictions = {
  /**
   * Promotion code restrictions defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?:
    | PromotionCodesResourceRestrictionsCurrencyOptions
    | undefined;
  /**
   * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
   */
  firstTimeTransaction: boolean;
  /**
   * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
   */
  minimumAmount?: number | null | undefined;
  /**
   * Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount
   */
  minimumAmountCurrency?: string | null | undefined;
};

/**
 * @internal
 * PromotionCodesResourceRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodesResourceRestrictions = {
  currency_options?:
    | External$PromotionCodesResourceRestrictionsCurrencyOptions
    | undefined;
  first_time_transaction: boolean;
  minimum_amount?: number | null | undefined;
  minimum_amount_currency?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodesResourceRestrictions
 */
const SchemaIn$PromotionCodesResourceRestrictions: z.ZodType<
  PromotionCodesResourceRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency_options:
      Schemas$PromotionCodesResourceRestrictionsCurrencyOptions.in.optional(),
    first_time_transaction: z.boolean(),
    minimum_amount: z.number().int().nullable().optional(),
    minimum_amount_currency: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency_options: "currencyOptions",
      first_time_transaction: "firstTimeTransaction",
      minimum_amount: "minimumAmount",
      minimum_amount_currency: "minimumAmountCurrency",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodesResourceRestrictions
 */
const SchemaOut$PromotionCodesResourceRestrictions: z.ZodType<
  External$PromotionCodesResourceRestrictions, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodesResourceRestrictions // the object to be transformed
> = z
  .object({
    currencyOptions:
      Schemas$PromotionCodesResourceRestrictionsCurrencyOptions.out.optional(),
    firstTimeTransaction: z.boolean(),
    minimumAmount: z.number().int().nullable().optional(),
    minimumAmountCurrency: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currencyOptions: "currency_options",
      firstTimeTransaction: "first_time_transaction",
      minimumAmount: "minimum_amount",
      minimumAmountCurrency: "minimum_amount_currency",
    });
  });

export const Schemas$PromotionCodesResourceRestrictions = {
  in: SchemaIn$PromotionCodesResourceRestrictions,
  out: SchemaOut$PromotionCodesResourceRestrictions,
};
