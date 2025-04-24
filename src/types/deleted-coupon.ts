import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedCoupon = {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "coupon";
};

/**
 * @internal
 * DeletedCoupon without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedCoupon = {
  deleted: boolean;
  id: string;
  object: "coupon";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedCoupon
 */
const SchemaIn$DeletedCoupon: z.ZodType<
  DeletedCoupon, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["coupon"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedCoupon
 */
const SchemaOut$DeletedCoupon: z.ZodType<
  External$DeletedCoupon, // output type of this zod object
  z.ZodTypeDef,
  DeletedCoupon // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["coupon"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedCoupon = {
  in: SchemaIn$DeletedCoupon,
  out: SchemaOut$DeletedCoupon,
};
