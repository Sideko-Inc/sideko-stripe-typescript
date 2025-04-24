import {
  EntitlementsFeatureMetadata,
  External$EntitlementsFeatureMetadata,
  Schemas$EntitlementsFeatureMetadata,
} from "./entitlements-feature-metadata";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A feature represents a monetizable ability or functionality in your system.
 * Features can be assigned to products, and when those products are purchased, Stripe will create an entitlement to the feature for the purchasing customer.
 */
export type EntitlementsFeature = {
  /**
   * Inactive features cannot be attached to new products and will not be returned from the features list endpoint.
   */
  active: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * A unique key you provide as your own system identifier. This may be up to 80 characters.
   */
  lookupKey: string;
  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: EntitlementsFeatureMetadata;
  /**
   * The feature's name, for your own purpose, not meant to be displayable to the customer.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "entitlements.feature";
};

/**
 * @internal
 * EntitlementsFeature without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementsFeature = {
  active: boolean;
  id: string;
  livemode: boolean;
  lookup_key: string;
  metadata: External$EntitlementsFeatureMetadata;
  name: string;
  object: "entitlements.feature";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementsFeature
 */
const SchemaIn$EntitlementsFeature: z.ZodType<
  EntitlementsFeature, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    id: z.string(),
    livemode: z.boolean(),
    lookup_key: z.string(),
    metadata: Schemas$EntitlementsFeatureMetadata.in,
    name: z.string(),
    object: z.enum(["entitlements.feature"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      livemode: "livemode",
      lookup_key: "lookupKey",
      metadata: "metadata",
      name: "name",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementsFeature
 */
const SchemaOut$EntitlementsFeature: z.ZodType<
  External$EntitlementsFeature, // output type of this zod object
  z.ZodTypeDef,
  EntitlementsFeature // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    id: z.string(),
    livemode: z.boolean(),
    lookupKey: z.string(),
    metadata: Schemas$EntitlementsFeatureMetadata.out,
    name: z.string(),
    object: z.enum(["entitlements.feature"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      id: "id",
      livemode: "livemode",
      lookupKey: "lookup_key",
      metadata: "metadata",
      name: "name",
      object: "object",
    });
  });

export const Schemas$EntitlementsFeature = {
  in: SchemaIn$EntitlementsFeature,
  out: SchemaOut$EntitlementsFeature,
};
