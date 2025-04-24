import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyItemsItemDiscountsArr0Item
 */
export type SubscriptionCreateBodyItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyItemsItemDiscountsArr0Item
 */
const SchemaIn$SubscriptionCreateBodyItemsItemDiscountsArr0Item: z.ZodType<
  SubscriptionCreateBodyItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyItemsItemDiscountsArr0Item
 */
const SchemaOut$SubscriptionCreateBodyItemsItemDiscountsArr0Item: z.ZodType<
  External$SubscriptionCreateBodyItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyItemsItemDiscountsArr0Item = {
  in: SchemaIn$SubscriptionCreateBodyItemsItemDiscountsArr0Item,
  out: SchemaOut$SubscriptionCreateBodyItemsItemDiscountsArr0Item,
};
