import {
  External$PromotionCodeCurrencyOption,
  PromotionCodeCurrencyOption,
  Schemas$PromotionCodeCurrencyOption,
} from "./promotion-code-currency-option";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Promotion code restrictions defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type PromotionCodesResourceRestrictionsCurrencyOptions = {
  [additionalProperty: string]: PromotionCodeCurrencyOption | null | undefined;
};

/**
 * @internal
 * PromotionCodesResourceRestrictionsCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodesResourceRestrictionsCurrencyOptions = {
  [additionalProperty: string]:
    | External$PromotionCodesResourceRestrictionsCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodesResourceRestrictionsCurrencyOptions
 */
const SchemaIn$PromotionCodesResourceRestrictionsCurrencyOptions: z.ZodType<
  PromotionCodesResourceRestrictionsCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$PromotionCodeCurrencyOption.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodesResourceRestrictionsCurrencyOptions
 */
const SchemaOut$PromotionCodesResourceRestrictionsCurrencyOptions: z.ZodType<
  External$PromotionCodesResourceRestrictionsCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodesResourceRestrictionsCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$PromotionCodeCurrencyOption.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PromotionCodesResourceRestrictionsCurrencyOptions = {
  in: SchemaIn$PromotionCodesResourceRestrictionsCurrencyOptions,
  out: SchemaOut$PromotionCodesResourceRestrictionsCurrencyOptions,
};
