import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type CouponMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CouponMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponMetadata = {
  [additionalProperty: string]:
    | (External$CouponMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponMetadata
 */
const SchemaIn$CouponMetadata: z.ZodType<
  CouponMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponMetadata
 */
const SchemaOut$CouponMetadata: z.ZodType<
  External$CouponMetadata, // output type of this zod object
  z.ZodTypeDef,
  CouponMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CouponMetadata = {
  in: SchemaIn$CouponMetadata,
  out: SchemaOut$CouponMetadata,
};
