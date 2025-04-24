import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CouponAppliesTo = {
  /**
   * A list of product IDs this coupon applies to
   */
  products: string[];
};

/**
 * @internal
 * CouponAppliesTo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponAppliesTo = {
  products: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponAppliesTo
 */
const SchemaIn$CouponAppliesTo: z.ZodType<
  CouponAppliesTo, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    products: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      products: "products",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponAppliesTo
 */
const SchemaOut$CouponAppliesTo: z.ZodType<
  External$CouponAppliesTo, // output type of this zod object
  z.ZodTypeDef,
  CouponAppliesTo // the object to be transformed
> = z
  .object({
    products: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      products: "products",
    });
  });

export const Schemas$CouponAppliesTo = {
  in: SchemaIn$CouponAppliesTo,
  out: SchemaOut$CouponAppliesTo,
};
