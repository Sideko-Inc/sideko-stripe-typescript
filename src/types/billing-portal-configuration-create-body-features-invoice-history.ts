import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory
 */
export type BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory = {
  enabled: boolean;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory =
  {
    enabled: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory
 */
const SchemaIn$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory: z.ZodType<
  BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory
 */
const SchemaOut$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory: z.ZodType<
  External$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory =
  {
    in: SchemaIn$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory,
    out: SchemaOut$BillingPortalConfigurationCreateBodyFeaturesInvoiceHistory,
  };
