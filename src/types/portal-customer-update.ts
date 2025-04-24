import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalCustomerUpdate = {
  /**
   * The types of customer updates that are supported. When empty, customers are not updateable.
   */
  allowedUpdates: (
    | "address"
    | "email"
    | "name"
    | "phone"
    | "shipping"
    | "tax_id"
  )[];
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
};

/**
 * @internal
 * PortalCustomerUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalCustomerUpdate = {
  allowed_updates: (
    | "address"
    | "email"
    | "name"
    | "phone"
    | "shipping"
    | "tax_id"
  )[];
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalCustomerUpdate
 */
const SchemaIn$PortalCustomerUpdate: z.ZodType<
  PortalCustomerUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allowed_updates: z.array(
      z.enum(["address", "email", "name", "phone", "shipping", "tax_id"]),
    ),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowed_updates: "allowedUpdates",
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalCustomerUpdate
 */
const SchemaOut$PortalCustomerUpdate: z.ZodType<
  External$PortalCustomerUpdate, // output type of this zod object
  z.ZodTypeDef,
  PortalCustomerUpdate // the object to be transformed
> = z
  .object({
    allowedUpdates: z.array(
      z.enum(["address", "email", "name", "phone", "shipping", "tax_id"]),
    ),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowedUpdates: "allowed_updates",
      enabled: "enabled",
    });
  });

export const Schemas$PortalCustomerUpdate = {
  in: SchemaIn$PortalCustomerUpdate,
  out: SchemaOut$PortalCustomerUpdate,
};
