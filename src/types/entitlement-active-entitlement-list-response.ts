import {
  EntitlementsActiveEntitlement,
  External$EntitlementsActiveEntitlement,
  Schemas$EntitlementsActiveEntitlement,
} from "./entitlements-active-entitlement";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type EntitlementActiveEntitlementListResponse = {
  data: EntitlementsActiveEntitlement[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * EntitlementActiveEntitlementListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$EntitlementActiveEntitlementListResponse = {
  data: External$EntitlementsActiveEntitlement[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object EntitlementActiveEntitlementListResponse
 */
const SchemaIn$EntitlementActiveEntitlementListResponse: z.ZodType<
  EntitlementActiveEntitlementListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(Schemas$EntitlementsActiveEntitlement.in),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$EntitlementActiveEntitlementListResponse
 */
const SchemaOut$EntitlementActiveEntitlementListResponse: z.ZodType<
  External$EntitlementActiveEntitlementListResponse, // output type of this zod object
  z.ZodTypeDef,
  EntitlementActiveEntitlementListResponse // the object to be transformed
> = z
  .object({
    data: z.array(Schemas$EntitlementsActiveEntitlement.out),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$EntitlementActiveEntitlementListResponse = {
  in: SchemaIn$EntitlementActiveEntitlementListResponse,
  out: SchemaOut$EntitlementActiveEntitlementListResponse,
};
