import {
  External$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps,
  PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps,
  Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps,
} from "./promotion-code-create-body-restrictions-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeCreateBodyRestrictionsCurrencyOptions
 */
export type PromotionCodeCreateBodyRestrictionsCurrencyOptions = {
  [additionalProperty: string]:
    | PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * PromotionCodeCreateBodyRestrictionsCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeCreateBodyRestrictionsCurrencyOptions = {
  [additionalProperty: string]:
    | External$PromotionCodeCreateBodyRestrictionsCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeCreateBodyRestrictionsCurrencyOptions
 */
const SchemaIn$PromotionCodeCreateBodyRestrictionsCurrencyOptions: z.ZodType<
  PromotionCodeCreateBodyRestrictionsCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeCreateBodyRestrictionsCurrencyOptions
 */
const SchemaOut$PromotionCodeCreateBodyRestrictionsCurrencyOptions: z.ZodType<
  External$PromotionCodeCreateBodyRestrictionsCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeCreateBodyRestrictionsCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptions = {
  in: SchemaIn$PromotionCodeCreateBodyRestrictionsCurrencyOptions,
  out: SchemaOut$PromotionCodeCreateBodyRestrictionsCurrencyOptions,
};
