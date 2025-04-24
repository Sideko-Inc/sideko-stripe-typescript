import { Discount, External$Discount, Schemas$Discount } from "./discount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LineItemsDiscountAmount = {
  /**
   * The amount discounted.
   */
  amount: number;
  /**
   * A discount represents the actual application of a [coupon](https://stripe.com/docs/api#coupons) or [promotion code](https://stripe.com/docs/api#promotion_codes).
   * It contains information about when the discount began, when it will end, and what it is applied to.
   *
   * Related guide: [Applying discounts to subscriptions](https://stripe.com/docs/billing/subscriptions/discounts)
   */
  discount: Discount;
};

/**
 * @internal
 * LineItemsDiscountAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LineItemsDiscountAmount = {
  amount: number;
  discount: External$Discount;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LineItemsDiscountAmount
 */
const SchemaIn$LineItemsDiscountAmount: z.ZodType<
  LineItemsDiscountAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    discount: z.lazy(() => Schemas$Discount.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      discount: "discount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LineItemsDiscountAmount
 */
const SchemaOut$LineItemsDiscountAmount: z.ZodType<
  External$LineItemsDiscountAmount, // output type of this zod object
  z.ZodTypeDef,
  LineItemsDiscountAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    discount: z.lazy(() => Schemas$Discount.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      discount: "discount",
    });
  });

export const Schemas$LineItemsDiscountAmount = {
  in: SchemaIn$LineItemsDiscountAmount,
  out: SchemaOut$LineItemsDiscountAmount,
};
