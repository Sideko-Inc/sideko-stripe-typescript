import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate
 */
export type BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate = {
  enabled: boolean;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate =
  {
    enabled: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesPaymentMethodUpdate,
  };
