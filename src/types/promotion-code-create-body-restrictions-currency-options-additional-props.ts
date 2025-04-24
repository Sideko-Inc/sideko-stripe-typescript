import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps
 */
export type PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps =
  {
    minimumAmount?: number | undefined;
  };

/**
 * @internal
 * PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps =
  {
    minimum_amount?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps
 */
const SchemaIn$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps: z.ZodType<
  PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    minimum_amount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      minimum_amount: "minimumAmount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps
 */
const SchemaOut$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps: z.ZodType<
  External$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    minimumAmount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      minimumAmount: "minimum_amount",
    });
  });

export const Schemas$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps,
    out: SchemaOut$PromotionCodeCreateBodyRestrictionsCurrencyOptionsAdditionalProps,
  };
