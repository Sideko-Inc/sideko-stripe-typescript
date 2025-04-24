import { Coupon, External$Coupon, Schemas$Coupon } from "./coupon";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import {
  External$PromotionCode,
  PromotionCode,
  Schemas$PromotionCode,
} from "./promotion-code";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DiscountsResourceStackableDiscount = {
  /**
   * ID of the coupon to create a new discount for.
   */
  coupon?: (string | Coupon) | undefined;
  /**
   * ID of an existing discount on the object (or one of its ancestors) to reuse.
   */
  discount?: (string | Discount) | undefined;
  /**
   * ID of the promotion code to create a new discount for.
   */
  promotionCode?: (string | PromotionCode) | undefined;
};

/**
 * @internal
 * DiscountsResourceStackableDiscount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DiscountsResourceStackableDiscount = {
  coupon?: (string | External$Coupon) | undefined;
  discount?: (string | External$Discount) | undefined;
  promotion_code?: (string | External$PromotionCode) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DiscountsResourceStackableDiscount
 */
const SchemaIn$DiscountsResourceStackableDiscount: z.ZodType<
  DiscountsResourceStackableDiscount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.union([z.string(), Schemas$Coupon.in]).optional(),
    discount: z
      .union([z.string(), z.lazy(() => Schemas$Discount.in)])
      .optional(),
    promotion_code: z
      .union([z.string(), z.lazy(() => Schemas$PromotionCode.in)])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DiscountsResourceStackableDiscount
 */
const SchemaOut$DiscountsResourceStackableDiscount: z.ZodType<
  External$DiscountsResourceStackableDiscount, // output type of this zod object
  z.ZodTypeDef,
  DiscountsResourceStackableDiscount // the object to be transformed
> = z
  .object({
    coupon: z.union([z.string(), Schemas$Coupon.out]).optional(),
    discount: z
      .union([z.string(), z.lazy(() => Schemas$Discount.out)])
      .optional(),
    promotionCode: z
      .union([z.string(), z.lazy(() => Schemas$PromotionCode.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      discount: "discount",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$DiscountsResourceStackableDiscount = {
  in: SchemaIn$DiscountsResourceStackableDiscount,
  out: SchemaOut$DiscountsResourceStackableDiscount,
};
