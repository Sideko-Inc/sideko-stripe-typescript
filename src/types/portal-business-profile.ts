import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalBusinessProfile = {
  /**
   * The messaging shown to customers in the portal.
   */
  headline?: string | null | undefined;
  /**
   * A link to the business’s publicly available privacy policy.
   */
  privacyPolicyUrl?: string | null | undefined;
  /**
   * A link to the business’s publicly available terms of service.
   */
  termsOfServiceUrl?: string | null | undefined;
};

/**
 * @internal
 * PortalBusinessProfile without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalBusinessProfile = {
  headline?: string | null | undefined;
  privacy_policy_url?: string | null | undefined;
  terms_of_service_url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalBusinessProfile
 */
const SchemaIn$PortalBusinessProfile: z.ZodType<
  PortalBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    headline: z.string().nullable().optional(),
    privacy_policy_url: z.string().nullable().optional(),
    terms_of_service_url: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalBusinessProfile
 */
const SchemaOut$PortalBusinessProfile: z.ZodType<
  External$PortalBusinessProfile, // output type of this zod object
  z.ZodTypeDef,
  PortalBusinessProfile // the object to be transformed
> = z
  .object({
    headline: z.string().nullable().optional(),
    privacyPolicyUrl: z.string().nullable().optional(),
    termsOfServiceUrl: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      headline: "headline",
      privacyPolicyUrl: "privacy_policy_url",
      termsOfServiceUrl: "terms_of_service_url",
    });
  });

export const Schemas$PortalBusinessProfile = {
  in: SchemaIn$PortalBusinessProfile,
  out: SchemaOut$PortalBusinessProfile,
};
