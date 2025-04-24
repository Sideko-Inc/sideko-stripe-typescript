import {
  External$PromotionCodeCreateBodyRestrictionsCurrencyOptions,
  PromotionCodeCreateBodyRestrictionsCurrencyOptions,
  Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptions,
} from "./promotion-code-create-body-restrictions-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings that restrict the redemption of the promotion code.
 */
export type PromotionCodeCreateBodyRestrictions = {
  currencyOptions?:
    | PromotionCodeCreateBodyRestrictionsCurrencyOptions
    | undefined;
  firstTimeTransaction?: boolean | undefined;
  minimumAmount?: number | undefined;
  minimumAmountCurrency?: string | undefined;
};

/**
 * @internal
 * PromotionCodeCreateBodyRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeCreateBodyRestrictions = {
  currency_options?:
    | External$PromotionCodeCreateBodyRestrictionsCurrencyOptions
    | undefined;
  first_time_transaction?: boolean | undefined;
  minimum_amount?: number | undefined;
  minimum_amount_currency?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeCreateBodyRestrictions
 */
const SchemaIn$PromotionCodeCreateBodyRestrictions: z.ZodType<
  PromotionCodeCreateBodyRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency_options:
      Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptions.in.optional(),
    first_time_transaction: z.boolean().optional(),
    minimum_amount: z.number().int().optional(),
    minimum_amount_currency: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeCreateBodyRestrictions
 */
const SchemaOut$PromotionCodeCreateBodyRestrictions: z.ZodType<
  External$PromotionCodeCreateBodyRestrictions, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeCreateBodyRestrictions // the object to be transformed
> = z
  .object({
    currencyOptions:
      Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptions.out.optional(),
    firstTimeTransaction: z.boolean().optional(),
    minimumAmount: z.number().int().optional(),
    minimumAmountCurrency: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currencyOptions: "currency_options",
      firstTimeTransaction: "first_time_transaction",
      minimumAmount: "minimum_amount",
      minimumAmountCurrency: "minimum_amount_currency",
    });
  });

export const Schemas$PromotionCodeCreateBodyRestrictions = {
  in: SchemaIn$PromotionCodeCreateBodyRestrictions,
  out: SchemaOut$PromotionCodeCreateBodyRestrictions,
};
