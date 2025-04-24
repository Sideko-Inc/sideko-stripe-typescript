import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyDiscountsArr0Item
 */
export type SubscriptionCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyDiscountsArr0Item
 */
const SchemaIn$SubscriptionCreateBodyDiscountsArr0Item: z.ZodType<
  SubscriptionCreateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyDiscountsArr0Item
 */
const SchemaOut$SubscriptionCreateBodyDiscountsArr0Item: z.ZodType<
  External$SubscriptionCreateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyDiscountsArr0Item = {
  in: SchemaIn$SubscriptionCreateBodyDiscountsArr0Item,
  out: SchemaOut$SubscriptionCreateBodyDiscountsArr0Item,
};
