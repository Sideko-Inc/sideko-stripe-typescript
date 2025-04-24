import {
  External$PromotionCodeUpdateBodyRestrictionsCurrencyOptions,
  PromotionCodeUpdateBodyRestrictionsCurrencyOptions,
  Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptions,
} from "./promotion-code-update-body-restrictions-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings that restrict the redemption of the promotion code.
 */
export type PromotionCodeUpdateBodyRestrictions = {
  currencyOptions?:
    | PromotionCodeUpdateBodyRestrictionsCurrencyOptions
    | undefined;
};

/**
 * @internal
 * PromotionCodeUpdateBodyRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeUpdateBodyRestrictions = {
  currency_options?:
    | External$PromotionCodeUpdateBodyRestrictionsCurrencyOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeUpdateBodyRestrictions
 */
const SchemaIn$PromotionCodeUpdateBodyRestrictions: z.ZodType<
  PromotionCodeUpdateBodyRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency_options:
      Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency_options: "currencyOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeUpdateBodyRestrictions
 */
const SchemaOut$PromotionCodeUpdateBodyRestrictions: z.ZodType<
  External$PromotionCodeUpdateBodyRestrictions, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeUpdateBodyRestrictions // the object to be transformed
> = z
  .object({
    currencyOptions:
      Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currencyOptions: "currency_options",
    });
  });

export const Schemas$PromotionCodeUpdateBodyRestrictions = {
  in: SchemaIn$PromotionCodeUpdateBodyRestrictions,
  out: SchemaOut$PromotionCodeUpdateBodyRestrictions,
};
