import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item
 */
export type CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item =
  {
    coupon?: string | undefined;
    discount?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item
 */
const SchemaIn$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item: z.ZodType<
  CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item
 */
const SchemaOut$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item: z.ZodType<
  External$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item // the object to be transformed
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

export const Schemas$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item,
    out: SchemaOut$CustomerSubscriptionCreateBodyItemsItemDiscountsArr0Item,
  };
