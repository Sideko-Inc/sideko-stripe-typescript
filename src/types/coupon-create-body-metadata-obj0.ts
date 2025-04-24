import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CouponCreateBodyMetadataObj0
 */
export type CouponCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CouponCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CouponCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponCreateBodyMetadataObj0
 */
const SchemaIn$CouponCreateBodyMetadataObj0: z.ZodType<
  CouponCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponCreateBodyMetadataObj0
 */
const SchemaOut$CouponCreateBodyMetadataObj0: z.ZodType<
  External$CouponCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CouponCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CouponCreateBodyMetadataObj0 = {
  in: SchemaIn$CouponCreateBodyMetadataObj0,
  out: SchemaOut$CouponCreateBodyMetadataObj0,
};
