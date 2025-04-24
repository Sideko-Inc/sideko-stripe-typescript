import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
 */
export type BillingPortalConfigurationUpdateBodyLoginPage = {
  enabled: boolean;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyLoginPage without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyLoginPage = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyLoginPage
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyLoginPage: z.ZodType<
  BillingPortalConfigurationUpdateBodyLoginPage, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyLoginPage
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyLoginPage: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyLoginPage, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyLoginPage // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyLoginPage = {
  in: SchemaIn$BillingPortalConfigurationUpdateBodyLoginPage,
  out: SchemaOut$BillingPortalConfigurationUpdateBodyLoginPage,
};
