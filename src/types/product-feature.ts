import {
  EntitlementsFeature,
  External$EntitlementsFeature,
  Schemas$EntitlementsFeature,
} from "./entitlements-feature";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A product_feature represents an attachment between a feature and a product.
 * When a product is purchased that has a feature attached, Stripe will create an entitlement to the feature for the purchasing customer.
 */
export type ProductFeature = {
  /**
   * A feature represents a monetizable ability or functionality in your system.
   * Features can be assigned to products, and when those products are purchased, Stripe will create an entitlement to the feature for the purchasing customer.
   */
  entitlementFeature: EntitlementsFeature;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "product_feature";
};

/**
 * @internal
 * ProductFeature without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductFeature = {
  entitlement_feature: External$EntitlementsFeature;
  id: string;
  livemode: boolean;
  object: "product_feature";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductFeature
 */
const SchemaIn$ProductFeature: z.ZodType<
  ProductFeature, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    entitlement_feature: Schemas$EntitlementsFeature.in,
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["product_feature"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entitlement_feature: "entitlementFeature",
      id: "id",
      livemode: "livemode",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductFeature
 */
const SchemaOut$ProductFeature: z.ZodType<
  External$ProductFeature, // output type of this zod object
  z.ZodTypeDef,
  ProductFeature // the object to be transformed
> = z
  .object({
    entitlementFeature: Schemas$EntitlementsFeature.out,
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["product_feature"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      entitlementFeature: "entitlement_feature",
      id: "id",
      livemode: "livemode",
      object: "object",
    });
  });

export const Schemas$ProductFeature = {
  in: SchemaIn$ProductFeature,
  out: SchemaOut$ProductFeature,
};
