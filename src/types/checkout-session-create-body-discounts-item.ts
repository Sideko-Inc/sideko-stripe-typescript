import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyDiscountsItem
 */
export type CheckoutSessionCreateBodyDiscountsItem = {
  coupon?: string | undefined;
  promotionCode?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyDiscountsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyDiscountsItem = {
  coupon?: string | undefined;
  promotion_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyDiscountsItem
 */
const SchemaIn$CheckoutSessionCreateBodyDiscountsItem: z.ZodType<
  CheckoutSessionCreateBodyDiscountsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.string().optional(),
    promotion_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotion_code: "promotionCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyDiscountsItem
 */
const SchemaOut$CheckoutSessionCreateBodyDiscountsItem: z.ZodType<
  External$CheckoutSessionCreateBodyDiscountsItem, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyDiscountsItem // the object to be transformed
> = z
  .object({
    coupon: z.string().optional(),
    promotionCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$CheckoutSessionCreateBodyDiscountsItem = {
  in: SchemaIn$CheckoutSessionCreateBodyDiscountsItem,
  out: SchemaOut$CheckoutSessionCreateBodyDiscountsItem,
};
