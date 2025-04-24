import {
  External$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps,
  PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps,
  Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps,
} from "./promotion-code-update-body-restrictions-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeUpdateBodyRestrictionsCurrencyOptions
 */
export type PromotionCodeUpdateBodyRestrictionsCurrencyOptions = {
  [additionalProperty: string]:
    | PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * PromotionCodeUpdateBodyRestrictionsCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeUpdateBodyRestrictionsCurrencyOptions = {
  [additionalProperty: string]:
    | External$PromotionCodeUpdateBodyRestrictionsCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeUpdateBodyRestrictionsCurrencyOptions
 */
const SchemaIn$PromotionCodeUpdateBodyRestrictionsCurrencyOptions: z.ZodType<
  PromotionCodeUpdateBodyRestrictionsCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeUpdateBodyRestrictionsCurrencyOptions
 */
const SchemaOut$PromotionCodeUpdateBodyRestrictionsCurrencyOptions: z.ZodType<
  External$PromotionCodeUpdateBodyRestrictionsCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeUpdateBodyRestrictionsCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptions = {
  in: SchemaIn$PromotionCodeUpdateBodyRestrictionsCurrencyOptions,
  out: SchemaOut$PromotionCodeUpdateBodyRestrictionsCurrencyOptions,
};
