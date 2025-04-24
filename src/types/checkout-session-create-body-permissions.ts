import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object.
 *
 * For specific permissions, please refer to their dedicated subsections, such as `permissions.update.shipping_details`.
 */
export type CheckoutSessionCreateBodyPermissions = {
  updateShippingDetails?: ("client_only" | "server_only") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPermissions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPermissions = {
  update_shipping_details?: ("client_only" | "server_only") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPermissions
 */
const SchemaIn$CheckoutSessionCreateBodyPermissions: z.ZodType<
  CheckoutSessionCreateBodyPermissions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    update_shipping_details: z.enum(["client_only", "server_only"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      update_shipping_details: "updateShippingDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPermissions
 */
const SchemaOut$CheckoutSessionCreateBodyPermissions: z.ZodType<
  External$CheckoutSessionCreateBodyPermissions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPermissions // the object to be transformed
> = z
  .object({
    updateShippingDetails: z.enum(["client_only", "server_only"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      updateShippingDetails: "update_shipping_details",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPermissions = {
  in: SchemaIn$CheckoutSessionCreateBodyPermissions,
  out: SchemaOut$CheckoutSessionCreateBodyPermissions,
};
