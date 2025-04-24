import {
  EntitlementsFeature,
  External$EntitlementsFeature,
  Schemas$EntitlementsFeature,
} from "./entitlements-feature";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An active entitlement describes access to a feature for a customer.
 */
export type EntitlementsActiveEntitlement = {
  /**
   * The [Feature](https://stripe.com/docs/api/entitlements/feature) that the customer is entitled to.
   */
  feature: string | EntitlementsFeature;
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
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "entitlements.active_entitlement";
};

/**
 * @internal
 * EntitlementsActiveEntitlement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementsActiveEntitlement = {
  feature: string | External$EntitlementsFeature;
  id: string;
  livemode: boolean;
  lookup_key: string;
  object: "entitlements.active_entitlement";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementsActiveEntitlement
 */
const SchemaIn$EntitlementsActiveEntitlement: z.ZodType<
  EntitlementsActiveEntitlement, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    feature: z.union([z.string(), Schemas$EntitlementsFeature.in]),
    id: z.string(),
    livemode: z.boolean(),
    lookup_key: z.string(),
    object: z.enum(["entitlements.active_entitlement"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      feature: "feature",
      id: "id",
      livemode: "livemode",
      lookup_key: "lookupKey",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementsActiveEntitlement
 */
const SchemaOut$EntitlementsActiveEntitlement: z.ZodType<
  External$EntitlementsActiveEntitlement, // output type of this zod object
  z.ZodTypeDef,
  EntitlementsActiveEntitlement // the object to be transformed
> = z
  .object({
    feature: z.union([z.string(), Schemas$EntitlementsFeature.out]),
    id: z.string(),
    livemode: z.boolean(),
    lookupKey: z.string(),
    object: z.enum(["entitlements.active_entitlement"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      feature: "feature",
      id: "id",
      livemode: "livemode",
      lookupKey: "lookup_key",
      object: "object",
    });
  });

export const Schemas$EntitlementsActiveEntitlement = {
  in: SchemaIn$EntitlementsActiveEntitlement,
  out: SchemaOut$EntitlementsActiveEntitlement,
};
