import {
  EntitlementFeatureCreateBodyMetadata,
  External$EntitlementFeatureCreateBodyMetadata,
  Schemas$EntitlementFeatureCreateBodyMetadata,
} from "./entitlement-feature-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * EntitlementFeatureCreateBody
 */
export type EntitlementFeatureCreateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A unique key you provide as your own system identifier. This may be up to 80 characters.
   */
  lookupKey: string;
  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: EntitlementFeatureCreateBodyMetadata | undefined;
  /**
   * The feature's name, for your own purpose, not meant to be displayable to the customer.
   */
  name: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | (EntitlementFeatureCreateBodyMetadata | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * EntitlementFeatureCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementFeatureCreateBody = {
  expand?: string[] | undefined;
  lookup_key: string;
  metadata?: External$EntitlementFeatureCreateBodyMetadata | undefined;
  name: string;

  [additionalProperty: string]:
    | (string[] | undefined)
    | string
    | (External$EntitlementFeatureCreateBodyMetadata | undefined)
    | string
    | External$EntitlementFeatureCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementFeatureCreateBody
 */
const SchemaIn$EntitlementFeatureCreateBody: z.ZodType<
  EntitlementFeatureCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    lookup_key: z.string(),
    metadata: Schemas$EntitlementFeatureCreateBodyMetadata.in.optional(),
    name: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      lookup_key: "lookupKey",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementFeatureCreateBody
 */
const SchemaOut$EntitlementFeatureCreateBody: z.ZodType<
  External$EntitlementFeatureCreateBody, // output type of this zod object
  z.ZodTypeDef,
  EntitlementFeatureCreateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    lookupKey: z.string(),
    metadata: Schemas$EntitlementFeatureCreateBodyMetadata.out.optional(),
    name: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      lookupKey: "lookup_key",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$EntitlementFeatureCreateBody = {
  in: SchemaIn$EntitlementFeatureCreateBody,
  out: SchemaOut$EntitlementFeatureCreateBody,
};
