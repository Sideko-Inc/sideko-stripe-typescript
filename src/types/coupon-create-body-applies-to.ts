import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A hash containing directions for what this Coupon will apply discounts to.
 */
export type CouponCreateBodyAppliesTo = {
  products?: string[] | undefined;
};

/**
 * @internal
 * CouponCreateBodyAppliesTo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponCreateBodyAppliesTo = {
  products?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponCreateBodyAppliesTo
 */
const SchemaIn$CouponCreateBodyAppliesTo: z.ZodType<
  CouponCreateBodyAppliesTo, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    products: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      products: "products",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponCreateBodyAppliesTo
 */
const SchemaOut$CouponCreateBodyAppliesTo: z.ZodType<
  External$CouponCreateBodyAppliesTo, // output type of this zod object
  z.ZodTypeDef,
  CouponCreateBodyAppliesTo // the object to be transformed
> = z
  .object({
    products: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      products: "products",
    });
  });

export const Schemas$CouponCreateBodyAppliesTo = {
  in: SchemaIn$CouponCreateBodyAppliesTo,
  out: SchemaOut$CouponCreateBodyAppliesTo,
};
