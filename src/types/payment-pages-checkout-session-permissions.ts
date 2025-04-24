import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionPermissions = {
  /**
   * Determines which entity is allowed to update the shipping details.
   *
   * Default is `client_only`. Stripe Checkout client will automatically update the shipping details. If set to `server_only`, only your server is allowed to update the shipping details.
   *
   * When set to `server_only`, you must add the onShippingDetailsChange event handler when initializing the Stripe Checkout client and manually update the shipping details from your server using the Stripe API.
   */
  updateShippingDetails?: ("client_only" | "server_only") | null | undefined;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionPermissions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionPermissions = {
  update_shipping_details?: ("client_only" | "server_only") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionPermissions
 */
const SchemaIn$PaymentPagesCheckoutSessionPermissions: z.ZodType<
  PaymentPagesCheckoutSessionPermissions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    update_shipping_details: z
      .enum(["client_only", "server_only"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      update_shipping_details: "updateShippingDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionPermissions
 */
const SchemaOut$PaymentPagesCheckoutSessionPermissions: z.ZodType<
  External$PaymentPagesCheckoutSessionPermissions, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionPermissions // the object to be transformed
> = z
  .object({
    updateShippingDetails: z
      .enum(["client_only", "server_only"])
      .nullable()
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      updateShippingDetails: "update_shipping_details",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionPermissions = {
  in: SchemaIn$PaymentPagesCheckoutSessionPermissions,
  out: SchemaOut$PaymentPagesCheckoutSessionPermissions,
};
