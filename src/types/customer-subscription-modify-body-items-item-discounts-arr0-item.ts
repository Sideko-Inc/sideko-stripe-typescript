import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item
 */
export type CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item
 */
const SchemaIn$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item: z.ZodType<
  CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item
 */
const SchemaOut$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item: z.ZodType<
  External$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item,
    out: SchemaOut$CustomerSubscriptionModifyBodyItemsItemDiscountsArr0Item,
  };
