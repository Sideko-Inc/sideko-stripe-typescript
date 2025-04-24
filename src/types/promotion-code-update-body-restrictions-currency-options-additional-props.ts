import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps
 */
export type PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps =
  {
    minimumAmount?: number | undefined;
  };

/**
 * @internal
 * PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps =
  {
    minimum_amount?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps
 */
const SchemaIn$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps: z.ZodType<
  PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps
 */
const SchemaOut$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps: z.ZodType<
  External$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    minimumAmount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      minimumAmount: "minimum_amount",
    });
  });

export const Schemas$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps,
    out: SchemaOut$PromotionCodeUpdateBodyRestrictionsCurrencyOptionsAdditionalProps,
  };
