import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate
 */
export type BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate = {
  allowedUpdates?:
    | (
        | ("address" | "email" | "name" | "phone" | "shipping" | "tax_id")[]
        | string
      )
    | undefined;
  enabled: boolean;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate =
  {
    allowed_updates?:
      | (
          | ("address" | "email" | "name" | "phone" | "shipping" | "tax_id")[]
          | string
        )
      | undefined;
    enabled: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    allowed_updates: z
      .union([
        z.array(
          z.enum(["address", "email", "name", "phone", "shipping", "tax_id"]),
        ),
        z.string(),
      ])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate // the object to be transformed
> = z
  .object({
    allowedUpdates: z
      .union([
        z.array(
          z.enum(["address", "email", "name", "phone", "shipping", "tax_id"]),
        ),
        z.string(),
      ])
      .optional(),
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowedUpdates: "allowed_updates",
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesCustomerUpdate,
  };
