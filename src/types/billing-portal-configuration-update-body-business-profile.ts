import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The business information shown to customers in the portal.
 */
export type BillingPortalConfigurationUpdateBodyBusinessProfile = {
  headline?: (string | string) | undefined;
  privacyPolicyUrl?: (string | string) | undefined;
  termsOfServiceUrl?: (string | string) | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBodyBusinessProfile without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBodyBusinessProfile = {
  headline?: (string | string) | undefined;
  privacy_policy_url?: (string | string) | undefined;
  terms_of_service_url?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBodyBusinessProfile
 */
const SchemaIn$BillingPortalConfigurationUpdateBodyBusinessProfile: z.ZodType<
  BillingPortalConfigurationUpdateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    headline: z.union([z.string(), z.string()]).optional(),
    privacy_policy_url: z.union([z.string(), z.string()]).optional(),
    terms_of_service_url: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      headline: "headline",
      privacy_policy_url: "privacyPolicyUrl",
      terms_of_service_url: "termsOfServiceUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBodyBusinessProfile
 */
const SchemaOut$BillingPortalConfigurationUpdateBodyBusinessProfile: z.ZodType<
  External$BillingPortalConfigurationUpdateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBodyBusinessProfile // the object to be transformed
> = z
  .object({
    headline: z.union([z.string(), z.string()]).optional(),
    privacyPolicyUrl: z.union([z.string(), z.string()]).optional(),
    termsOfServiceUrl: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      headline: "headline",
      privacyPolicyUrl: "privacy_policy_url",
      termsOfServiceUrl: "terms_of_service_url",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBodyBusinessProfile = {
  in: SchemaIn$BillingPortalConfigurationUpdateBodyBusinessProfile,
  out: SchemaOut$BillingPortalConfigurationUpdateBodyBusinessProfile,
};
