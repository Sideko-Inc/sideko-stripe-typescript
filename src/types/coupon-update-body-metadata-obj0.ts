import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CouponUpdateBodyMetadataObj0
 */
export type CouponUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CouponUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CouponUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponUpdateBodyMetadataObj0
 */
const SchemaIn$CouponUpdateBodyMetadataObj0: z.ZodType<
  CouponUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponUpdateBodyMetadataObj0
 */
const SchemaOut$CouponUpdateBodyMetadataObj0: z.ZodType<
  External$CouponUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CouponUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CouponUpdateBodyMetadataObj0 = {
  in: SchemaIn$CouponUpdateBodyMetadataObj0,
  out: SchemaOut$CouponUpdateBodyMetadataObj0,
};
