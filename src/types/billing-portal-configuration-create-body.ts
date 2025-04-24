import {
  BillingPortalConfigurationCreateBodyBusinessProfile,
  External$BillingPortalConfigurationCreateBodyBusinessProfile,
  Schemas$BillingPortalConfigurationCreateBodyBusinessProfile,
} from "./billing-portal-configuration-create-body-business-profile";
import {
  BillingPortalConfigurationCreateBodyFeatures,
  External$BillingPortalConfigurationCreateBodyFeatures,
  Schemas$BillingPortalConfigurationCreateBodyFeatures,
} from "./billing-portal-configuration-create-body-features";
import {
  BillingPortalConfigurationCreateBodyLoginPage,
  External$BillingPortalConfigurationCreateBodyLoginPage,
  Schemas$BillingPortalConfigurationCreateBodyLoginPage,
} from "./billing-portal-configuration-create-body-login-page";
import {
  BillingPortalConfigurationCreateBodyMetadata,
  External$BillingPortalConfigurationCreateBodyMetadata,
  Schemas$BillingPortalConfigurationCreateBodyMetadata,
} from "./billing-portal-configuration-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationCreateBody
 */
export type BillingPortalConfigurationCreateBody = {
  /**
   * The business information shown to customers in the portal.
   */
  businessProfile?:
    | BillingPortalConfigurationCreateBodyBusinessProfile
    | undefined;
  /**
   * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
   */
  defaultReturnUrl?: (string | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Information about the features available in the portal.
   */
  features: BillingPortalConfigurationCreateBodyFeatures;
  /**
   * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
   */
  loginPage?: BillingPortalConfigurationCreateBodyLoginPage | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: BillingPortalConfigurationCreateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (BillingPortalConfigurationCreateBodyBusinessProfile | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | BillingPortalConfigurationCreateBodyFeatures
    | (BillingPortalConfigurationCreateBodyLoginPage | undefined)
    | (BillingPortalConfigurationCreateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationCreateBody = {
  business_profile?:
    | External$BillingPortalConfigurationCreateBodyBusinessProfile
    | undefined;
  default_return_url?: (string | string) | undefined;
  expand?: string[] | undefined;
  features: External$BillingPortalConfigurationCreateBodyFeatures;
  login_page?:
    | External$BillingPortalConfigurationCreateBodyLoginPage
    | undefined;
  metadata?: External$BillingPortalConfigurationCreateBodyMetadata | undefined;

  [additionalProperty: string]:
    | (External$BillingPortalConfigurationCreateBodyBusinessProfile | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | External$BillingPortalConfigurationCreateBodyFeatures
    | (External$BillingPortalConfigurationCreateBodyLoginPage | undefined)
    | (External$BillingPortalConfigurationCreateBodyMetadata | undefined)
    | External$BillingPortalConfigurationCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationCreateBody
 */
const SchemaIn$BillingPortalConfigurationCreateBody: z.ZodType<
  BillingPortalConfigurationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    business_profile:
      Schemas$BillingPortalConfigurationCreateBodyBusinessProfile.in.optional(),
    default_return_url: z.union([z.string(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    features: Schemas$BillingPortalConfigurationCreateBodyFeatures.in,
    login_page:
      Schemas$BillingPortalConfigurationCreateBodyLoginPage.in.optional(),
    metadata:
      Schemas$BillingPortalConfigurationCreateBodyMetadata.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      business_profile: "businessProfile",
      default_return_url: "defaultReturnUrl",
      expand: "expand",
      features: "features",
      login_page: "loginPage",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationCreateBody
 */
const SchemaOut$BillingPortalConfigurationCreateBody: z.ZodType<
  External$BillingPortalConfigurationCreateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationCreateBody // the object to be transformed
> = z
  .object({
    businessProfile:
      Schemas$BillingPortalConfigurationCreateBodyBusinessProfile.out.optional(),
    defaultReturnUrl: z.union([z.string(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    features: Schemas$BillingPortalConfigurationCreateBodyFeatures.out,
    loginPage:
      Schemas$BillingPortalConfigurationCreateBodyLoginPage.out.optional(),
    metadata:
      Schemas$BillingPortalConfigurationCreateBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      businessProfile: "business_profile",
      defaultReturnUrl: "default_return_url",
      expand: "expand",
      features: "features",
      loginPage: "login_page",
      metadata: "metadata",
    });
  });

export const Schemas$BillingPortalConfigurationCreateBody = {
  in: SchemaIn$BillingPortalConfigurationCreateBody,
  out: SchemaOut$BillingPortalConfigurationCreateBody,
};
