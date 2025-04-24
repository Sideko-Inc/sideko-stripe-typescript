import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalPaymentMethodUpdate = {
  /**
   * Whether the feature is enabled.
   */
  enabled: boolean;
};

/**
 * @internal
 * PortalPaymentMethodUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalPaymentMethodUpdate = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalPaymentMethodUpdate
 */
const SchemaIn$PortalPaymentMethodUpdate: z.ZodType<
  PortalPaymentMethodUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalPaymentMethodUpdate
 */
const SchemaOut$PortalPaymentMethodUpdate: z.ZodType<
  External$PortalPaymentMethodUpdate, // output type of this zod object
  z.ZodTypeDef,
  PortalPaymentMethodUpdate // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$PortalPaymentMethodUpdate = {
  in: SchemaIn$PortalPaymentMethodUpdate,
  out: SchemaOut$PortalPaymentMethodUpdate,
};
