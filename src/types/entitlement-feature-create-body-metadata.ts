import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type EntitlementFeatureCreateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * EntitlementFeatureCreateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementFeatureCreateBodyMetadata = {
  [additionalProperty: string]:
    | External$EntitlementFeatureCreateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementFeatureCreateBodyMetadata
 */
const SchemaIn$EntitlementFeatureCreateBodyMetadata: z.ZodType<
  EntitlementFeatureCreateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementFeatureCreateBodyMetadata
 */
const SchemaOut$EntitlementFeatureCreateBodyMetadata: z.ZodType<
  External$EntitlementFeatureCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  EntitlementFeatureCreateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$EntitlementFeatureCreateBodyMetadata = {
  in: SchemaIn$EntitlementFeatureCreateBodyMetadata,
  out: SchemaOut$EntitlementFeatureCreateBodyMetadata,
};
