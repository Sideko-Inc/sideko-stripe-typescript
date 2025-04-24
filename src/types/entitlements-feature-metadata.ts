import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type EntitlementsFeatureMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * EntitlementsFeatureMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementsFeatureMetadata = {
  [additionalProperty: string]:
    | External$EntitlementsFeatureMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementsFeatureMetadata
 */
const SchemaIn$EntitlementsFeatureMetadata: z.ZodType<
  EntitlementsFeatureMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementsFeatureMetadata
 */
const SchemaOut$EntitlementsFeatureMetadata: z.ZodType<
  External$EntitlementsFeatureMetadata, // output type of this zod object
  z.ZodTypeDef,
  EntitlementsFeatureMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$EntitlementsFeatureMetadata = {
  in: SchemaIn$EntitlementsFeatureMetadata,
  out: SchemaOut$EntitlementsFeatureMetadata,
};
