import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
 */
export type BillingPortalConfigurationCreateBodyLoginPage = {
  enabled: boolean;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyLoginPage without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyLoginPage = {
  enabled: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyLoginPage
 */
const SchemaIn$BillingPortalConfigurationCreateBodyLoginPage: z.ZodType<
  BillingPortalConfigurationCreateBodyLoginPage, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyLoginPage
 */
const SchemaOut$BillingPortalConfigurationCreateBodyLoginPage: z.ZodType<
  External$BillingPortalConfigurationCreateBodyLoginPage, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyLoginPage // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyLoginPage = {
  in: SchemaIn$BillingPortalConfigurationCreateBodyLoginPage,
  out: SchemaOut$BillingPortalConfigurationCreateBodyLoginPage,
};
