import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * EntitlementFeatureUpdateBodyMetadataObj0
 */
export type EntitlementFeatureUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * EntitlementFeatureUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementFeatureUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$EntitlementFeatureUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementFeatureUpdateBodyMetadataObj0
 */
const SchemaIn$EntitlementFeatureUpdateBodyMetadataObj0: z.ZodType<
  EntitlementFeatureUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementFeatureUpdateBodyMetadataObj0
 */
const SchemaOut$EntitlementFeatureUpdateBodyMetadataObj0: z.ZodType<
  External$EntitlementFeatureUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  EntitlementFeatureUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$EntitlementFeatureUpdateBodyMetadataObj0 = {
  in: SchemaIn$EntitlementFeatureUpdateBodyMetadataObj0,
  out: SchemaOut$EntitlementFeatureUpdateBodyMetadataObj0,
};
