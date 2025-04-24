import {
  BillingPortalConfigurationUpdateBodyBusinessProfile,
  External$BillingPortalConfigurationUpdateBodyBusinessProfile,
  Schemas$BillingPortalConfigurationUpdateBodyBusinessProfile,
} from "./billing-portal-configuration-update-body-business-profile";
import {
  BillingPortalConfigurationUpdateBodyFeatures,
  External$BillingPortalConfigurationUpdateBodyFeatures,
  Schemas$BillingPortalConfigurationUpdateBodyFeatures,
} from "./billing-portal-configuration-update-body-features";
import {
  BillingPortalConfigurationUpdateBodyLoginPage,
  External$BillingPortalConfigurationUpdateBodyLoginPage,
  Schemas$BillingPortalConfigurationUpdateBodyLoginPage,
} from "./billing-portal-configuration-update-body-login-page";
import {
  BillingPortalConfigurationUpdateBodyMetadataObj0,
  External$BillingPortalConfigurationUpdateBodyMetadataObj0,
  Schemas$BillingPortalConfigurationUpdateBodyMetadataObj0,
} from "./billing-portal-configuration-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalConfigurationUpdateBody
 */
export type BillingPortalConfigurationUpdateBody = {
  /**
   * Whether the configuration is active and can be used to create portal sessions.
   */
  active?: boolean | undefined;
  /**
   * The business information shown to customers in the portal.
   */
  businessProfile?:
    | BillingPortalConfigurationUpdateBodyBusinessProfile
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
  features?: BillingPortalConfigurationUpdateBodyFeatures | undefined;
  /**
   * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
   */
  loginPage?: BillingPortalConfigurationUpdateBodyLoginPage | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?:
    | (BillingPortalConfigurationUpdateBodyMetadataObj0 | string)
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (BillingPortalConfigurationUpdateBodyBusinessProfile | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | (BillingPortalConfigurationUpdateBodyFeatures | undefined)
    | (BillingPortalConfigurationUpdateBodyLoginPage | undefined)
    | ((BillingPortalConfigurationUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingPortalConfigurationUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfigurationUpdateBody = {
  active?: boolean | undefined;
  business_profile?:
    | External$BillingPortalConfigurationUpdateBodyBusinessProfile
    | undefined;
  default_return_url?: (string | string) | undefined;
  expand?: string[] | undefined;
  features?: External$BillingPortalConfigurationUpdateBodyFeatures | undefined;
  login_page?:
    | External$BillingPortalConfigurationUpdateBodyLoginPage
    | undefined;
  metadata?:
    | (External$BillingPortalConfigurationUpdateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (External$BillingPortalConfigurationUpdateBodyBusinessProfile | undefined)
    | ((string | string) | undefined)
    | (string[] | undefined)
    | (External$BillingPortalConfigurationUpdateBodyFeatures | undefined)
    | (External$BillingPortalConfigurationUpdateBodyLoginPage | undefined)
    | (
        | (External$BillingPortalConfigurationUpdateBodyMetadataObj0 | string)
        | undefined
      )
    | External$BillingPortalConfigurationUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfigurationUpdateBody
 */
const SchemaIn$BillingPortalConfigurationUpdateBody: z.ZodType<
  BillingPortalConfigurationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    business_profile:
      Schemas$BillingPortalConfigurationUpdateBodyBusinessProfile.in.optional(),
    default_return_url: z.union([z.string(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    features:
      Schemas$BillingPortalConfigurationUpdateBodyFeatures.in.optional(),
    login_page:
      Schemas$BillingPortalConfigurationUpdateBodyLoginPage.in.optional(),
    metadata: z
      .union([
        Schemas$BillingPortalConfigurationUpdateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfigurationUpdateBody
 */
const SchemaOut$BillingPortalConfigurationUpdateBody: z.ZodType<
  External$BillingPortalConfigurationUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfigurationUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    businessProfile:
      Schemas$BillingPortalConfigurationUpdateBodyBusinessProfile.out.optional(),
    defaultReturnUrl: z.union([z.string(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    features:
      Schemas$BillingPortalConfigurationUpdateBodyFeatures.out.optional(),
    loginPage:
      Schemas$BillingPortalConfigurationUpdateBodyLoginPage.out.optional(),
    metadata: z
      .union([
        Schemas$BillingPortalConfigurationUpdateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      businessProfile: "business_profile",
      defaultReturnUrl: "default_return_url",
      expand: "expand",
      features: "features",
      loginPage: "login_page",
      metadata: "metadata",
    });
  });

export const Schemas$BillingPortalConfigurationUpdateBody = {
  in: SchemaIn$BillingPortalConfigurationUpdateBody,
  out: SchemaOut$BillingPortalConfigurationUpdateBody,
};
