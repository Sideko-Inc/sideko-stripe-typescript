import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionItemUpdateBodyDiscountsArr0Item
 */
export type SubscriptionItemUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * SubscriptionItemUpdateBodyDiscountsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemUpdateBodyDiscountsArr0Item = {
  coupon?: string | undefined;
  discount?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemUpdateBodyDiscountsArr0Item
 */
const SchemaIn$SubscriptionItemUpdateBodyDiscountsArr0Item: z.ZodType<
  SubscriptionItemUpdateBodyDiscountsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemUpdateBodyDiscountsArr0Item
 */
const SchemaOut$SubscriptionItemUpdateBodyDiscountsArr0Item: z.ZodType<
  External$SubscriptionItemUpdateBodyDiscountsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemUpdateBodyDiscountsArr0Item // the object to be transformed
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

export const Schemas$SubscriptionItemUpdateBodyDiscountsArr0Item = {
  in: SchemaIn$SubscriptionItemUpdateBodyDiscountsArr0Item,
  out: SchemaOut$SubscriptionItemUpdateBodyDiscountsArr0Item,
};
