import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PromotionCodeCurrencyOption = {
  /**
   * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
   */
  minimumAmount: number;
};

/**
 * @internal
 * PromotionCodeCurrencyOption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeCurrencyOption = {
  minimum_amount: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeCurrencyOption
 */
const SchemaIn$PromotionCodeCurrencyOption: z.ZodType<
  PromotionCodeCurrencyOption, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    minimum_amount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      minimum_amount: "minimumAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeCurrencyOption
 */
const SchemaOut$PromotionCodeCurrencyOption: z.ZodType<
  External$PromotionCodeCurrencyOption, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeCurrencyOption // the object to be transformed
> = z
  .object({
    minimumAmount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      minimumAmount: "minimum_amount",
    });
  });

export const Schemas$PromotionCodeCurrencyOption = {
  in: SchemaIn$PromotionCodeCurrencyOption,
  out: SchemaOut$PromotionCodeCurrencyOption,
};
