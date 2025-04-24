import {
  EntitlementFeatureUpdateBodyMetadataObj0,
  External$EntitlementFeatureUpdateBodyMetadataObj0,
  Schemas$EntitlementFeatureUpdateBodyMetadataObj0,
} from "./entitlement-feature-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * EntitlementFeatureUpdateBody
 */
export type EntitlementFeatureUpdateBody = {
  /**
   * Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
   */
  active?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: (EntitlementFeatureUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The feature's name, for your own purpose, not meant to be displayable to the customer.
   */
  name?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | ((EntitlementFeatureUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * EntitlementFeatureUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementFeatureUpdateBody = {
  active?: boolean | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$EntitlementFeatureUpdateBodyMetadataObj0 | string)
    | undefined;
  name?: string | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | ((External$EntitlementFeatureUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | External$EntitlementFeatureUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementFeatureUpdateBody
 */
const SchemaIn$EntitlementFeatureUpdateBody: z.ZodType<
  EntitlementFeatureUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$EntitlementFeatureUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementFeatureUpdateBody
 */
const SchemaOut$EntitlementFeatureUpdateBody: z.ZodType<
  External$EntitlementFeatureUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  EntitlementFeatureUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$EntitlementFeatureUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$EntitlementFeatureUpdateBody = {
  in: SchemaIn$EntitlementFeatureUpdateBody,
  out: SchemaOut$EntitlementFeatureUpdateBody,
};
