import { Coupon, External$Coupon, Schemas$Coupon } from "./coupon";
import {
  External$PromotionCode,
  PromotionCode,
  Schemas$PromotionCode,
} from "./promotion-code";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionDiscount = {
  /**
   * Coupon attached to the Checkout Session.
   */
  coupon?: (string | Coupon) | undefined;
  /**
   * Promotion code attached to the Checkout Session.
   */
  promotionCode?: (string | PromotionCode) | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionDiscount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionDiscount = {
  coupon?: (string | External$Coupon) | undefined;
  promotion_code?: (string | External$PromotionCode) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionDiscount
 */
const SchemaIn$PaymentPagesCheckoutSessionDiscount: z.ZodType<
  PaymentPagesCheckoutSessionDiscount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.union([z.string(), Schemas$Coupon.in]).optional(),
    promotion_code: z
      .union([z.string(), z.lazy(() => Schemas$PromotionCode.in)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotion_code: "promotionCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionDiscount
 */
const SchemaOut$PaymentPagesCheckoutSessionDiscount: z.ZodType<
  External$PaymentPagesCheckoutSessionDiscount, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionDiscount // the object to be transformed
> = z
  .object({
    coupon: z.union([z.string(), Schemas$Coupon.out]).optional(),
    promotionCode: z
      .union([z.string(), z.lazy(() => Schemas$PromotionCode.out)])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionDiscount = {
  in: SchemaIn$PaymentPagesCheckoutSessionDiscount,
  out: SchemaOut$PaymentPagesCheckoutSessionDiscount,
};
