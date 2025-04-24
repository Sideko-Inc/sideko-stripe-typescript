import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyItemsItemDiscountsArr0Item
 */
export type SubscriptionUpdateBodyItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyItemsItemDiscountsArr0Item
 */
const SchemaIn$SubscriptionUpdateBodyItemsItemDiscountsArr0Item: z.ZodType<
  SubscriptionUpdateBodyItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyItemsItemDiscountsArr0Item
 */
const SchemaOut$SubscriptionUpdateBodyItemsItemDiscountsArr0Item: z.ZodType<
  External$SubscriptionUpdateBodyItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$SubscriptionUpdateBodyItemsItemDiscountsArr0Item = {
  in: SchemaIn$SubscriptionUpdateBodyItemsItemDiscountsArr0Item,
  out: SchemaOut$SubscriptionUpdateBodyItemsItemDiscountsArr0Item,
};
