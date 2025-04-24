import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate
 */
export type BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate = {
  allowedUpdates?:
    | (
        | ("address" | "email" | "name" | "phone" | "shipping" | "tax_id")[]
        | string
      )
    | undefined;
  enabled?: boolean | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate =
  {
    allowed_updates?:
      | (
          | ("address" | "email" | "name" | "phone" | "shipping" | "tax_id")[]
          | string
        )
      | undefined;
    enabled?: boolean | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate, // output type of this zod object
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
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowed_updates: "allowedUpdates",
      enabled: "enabled",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate // the object to be transformed
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
    enabled: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      allowedUpdates: "allowed_updates",
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesCustomerUpdate,
  };
