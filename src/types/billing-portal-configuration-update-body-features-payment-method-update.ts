import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate
 */
export type BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate = {
  enabled: boolean;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate =
  {
    enabled: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesPaymentMethodUpdate,
  };
