import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyDiscountsArr0Item
 */
export type CustomerSubscriptionCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyDiscountsArr0Item
 */
const SchemaIn$CustomerSubscriptionCreateBodyDiscountsArr0Item: z.ZodType<
  CustomerSubscriptionCreateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.string().optional(),
    discount: z.string().optional(),
    promotion_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      discount: "discount",
      promotion_code: "promotionCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyDiscountsArr0Item
 */
const SchemaOut$CustomerSubscriptionCreateBodyDiscountsArr0Item: z.ZodType<
  External$CustomerSubscriptionCreateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyDiscountsArr0Item // the object to be transformed
> = z
  .object({
    coupon: z.string().optional(),
    discount: z.string().optional(),
    promotionCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      discount: "discount",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyDiscountsArr0Item = {
  in: SchemaIn$CustomerSubscriptionCreateBodyDiscountsArr0Item,
  out: SchemaOut$CustomerSubscriptionCreateBodyDiscountsArr0Item,
};
