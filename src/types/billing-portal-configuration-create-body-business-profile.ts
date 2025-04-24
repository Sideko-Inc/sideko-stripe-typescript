import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The business information shown to customers in the portal.
 */
export type BillingPortalConfigurationCreateBodyBusinessProfile = {
  headline?: (string | string) | undefined;
  privacyPolicyUrl?: string | undefined;
  termsOfServiceUrl?: string | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBodyBusinessProfile without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBodyBusinessProfile = {
  headline?: (string | string) | undefined;
  privacy_policy_url?: string | undefined;
  terms_of_service_url?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBodyBusinessProfile
 */
const SchemaIn$BillingPortalConfigurationCreateBodyBusinessProfile: z.ZodType<
  BillingPortalConfigurationCreateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    headline: z.union([z.string(), z.string()]).optional(),
    privacy_policy_url: z.string().optional(),
    terms_of_service_url: z.string().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBodyBusinessProfile
 */
const SchemaOut$BillingPortalConfigurationCreateBodyBusinessProfile: z.ZodType<
  External$BillingPortalConfigurationCreateBodyBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBodyBusinessProfile // the object to be transformed
> = z
  .object({
    headline: z.union([z.string(), z.string()]).optional(),
    privacyPolicyUrl: z.string().optional(),
    termsOfServiceUrl: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      headline: "headline",
      privacyPolicyUrl: "privacy_policy_url",
      termsOfServiceUrl: "terms_of_service_url",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBodyBusinessProfile = {
  in: SchemaIn$BillingPortalConfigurationCreateBodyBusinessProfile,
  out: SchemaOut$BillingPortalConfigurationCreateBodyBusinessProfile,
};
