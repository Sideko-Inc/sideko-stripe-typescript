import {
  DeletedDiscount,
  External$DeletedDiscount,
  Schemas$DeletedDiscount,
} from "./deleted-discount";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DiscountsResourceDiscountAmount = {
  /**
   * The amount, in cents (or local equivalent), of the discount.
   */
  amount: number;
  /**
   * The discount that was applied to get this discount amount.
   */
  discount: string | Discount | DeletedDiscount;
};

/**
 * @internal
 * DiscountsResourceDiscountAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DiscountsResourceDiscountAmount = {
  amount: number;
  discount: string | External$Discount | External$DeletedDiscount;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DiscountsResourceDiscountAmount
 */
const SchemaIn$DiscountsResourceDiscountAmount: z.ZodType<
  DiscountsResourceDiscountAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    discount: z.union([
      z.string(),
      z.lazy(() => Schemas$Discount.in),
      z.lazy(() => Schemas$DeletedDiscount.in),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      discount: "discount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DiscountsResourceDiscountAmount
 */
const SchemaOut$DiscountsResourceDiscountAmount: z.ZodType<
  External$DiscountsResourceDiscountAmount, // output type of this zod object
  z.ZodTypeDef,
  DiscountsResourceDiscountAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    discount: z.union([
      z.string(),
      z.lazy(() => Schemas$Discount.out),
      z.lazy(() => Schemas$DeletedDiscount.out),
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      discount: "discount",
    });
  });

export const Schemas$DiscountsResourceDiscountAmount = {
  in: SchemaIn$DiscountsResourceDiscountAmount,
  out: SchemaOut$DiscountsResourceDiscountAmount,
};
