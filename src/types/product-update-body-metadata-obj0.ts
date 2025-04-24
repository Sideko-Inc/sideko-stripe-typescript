import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductUpdateBodyMetadataObj0
 */
export type ProductUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ProductUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ProductUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductUpdateBodyMetadataObj0
 */
const SchemaIn$ProductUpdateBodyMetadataObj0: z.ZodType<
  ProductUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductUpdateBodyMetadataObj0
 */
const SchemaOut$ProductUpdateBodyMetadataObj0: z.ZodType<
  External$ProductUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ProductUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ProductUpdateBodyMetadataObj0 = {
  in: SchemaIn$ProductUpdateBodyMetadataObj0,
  out: SchemaOut$ProductUpdateBodyMetadataObj0,
};
