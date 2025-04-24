import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory
 */
export type BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory = {
  enabled: boolean;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory =
  {
    enabled: boolean;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory: z.ZodType<
  BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory =
  {
    in: SchemaIn$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory,
    out: SchemaOut$BillingPortalConfigurationUpdateBodyFeaturesInvoiceHistory,
  };
