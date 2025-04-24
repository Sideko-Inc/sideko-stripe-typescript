import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import {
  BillingPortalConfigurationMetadata,
  External$BillingPortalConfigurationMetadata,
  Schemas$BillingPortalConfigurationMetadata,
} from "./billing-portal-configuration-metadata";
import {
  DeletedApplication,
  External$DeletedApplication,
  Schemas$DeletedApplication,
} from "./deleted-application";
import {
  External$PortalBusinessProfile,
  PortalBusinessProfile,
  Schemas$PortalBusinessProfile,
} from "./portal-business-profile";
import {
  External$PortalFeatures,
  PortalFeatures,
  Schemas$PortalFeatures,
} from "./portal-features";
import {
  External$PortalLoginPage,
  PortalLoginPage,
  Schemas$PortalLoginPage,
} from "./portal-login-page";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A portal configuration describes the functionality and behavior of a portal session.
 */
export type BillingPortalConfiguration = {
  /**
   * Whether the configuration is active and can be used to create portal sessions.
   */
  active: boolean;
  /**
   * ID of the Connect Application that created the configuration.
   */
  application?: (string | Application | DeletedApplication) | undefined;
  businessProfile: PortalBusinessProfile;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
   */
  defaultReturnUrl?: string | null | undefined;
  features: PortalFeatures;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Whether the configuration is the default. If `true`, this configuration can be managed in the Dashboard and portal sessions will use this configuration unless it is overriden when creating the session.
   */
  isDefault: boolean;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  loginPage: PortalLoginPage;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: BillingPortalConfigurationMetadata | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing_portal.configuration";
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
};

/**
 * @internal
 * BillingPortalConfiguration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalConfiguration = {
  active: boolean;
  application?:
    | (string | External$Application | External$DeletedApplication)
    | undefined;
  business_profile: External$PortalBusinessProfile;
  created: number;
  default_return_url?: string | null | undefined;
  features: External$PortalFeatures;
  id: string;
  is_default: boolean;
  livemode: boolean;
  login_page: External$PortalLoginPage;
  metadata?: External$BillingPortalConfigurationMetadata | null | undefined;
  object: "billing_portal.configuration";
  updated: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalConfiguration
 */
const SchemaIn$BillingPortalConfiguration: z.ZodType<
  BillingPortalConfiguration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean(),
    application: z
      .union([
        z.string(),
        Schemas$Application.in,
        Schemas$DeletedApplication.in,
      ])
      .optional(),
    business_profile: Schemas$PortalBusinessProfile.in,
    created: z.number().int(),
    default_return_url: z.string().nullable().optional(),
    features: Schemas$PortalFeatures.in,
    id: z.string(),
    is_default: z.boolean(),
    livemode: z.boolean(),
    login_page: Schemas$PortalLoginPage.in,
    metadata: Schemas$BillingPortalConfigurationMetadata.in
      .nullable()
      .optional(),
    object: z.enum(["billing_portal.configuration"]),
    updated: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      application: "application",
      business_profile: "businessProfile",
      created: "created",
      default_return_url: "defaultReturnUrl",
      features: "features",
      id: "id",
      is_default: "isDefault",
      livemode: "livemode",
      login_page: "loginPage",
      metadata: "metadata",
      object: "object",
      updated: "updated",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalConfiguration
 */
const SchemaOut$BillingPortalConfiguration: z.ZodType<
  External$BillingPortalConfiguration, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalConfiguration // the object to be transformed
> = z
  .object({
    active: z.boolean(),
    application: z
      .union([
        z.string(),
        Schemas$Application.out,
        Schemas$DeletedApplication.out,
      ])
      .optional(),
    businessProfile: Schemas$PortalBusinessProfile.out,
    created: z.number().int(),
    defaultReturnUrl: z.string().nullable().optional(),
    features: Schemas$PortalFeatures.out,
    id: z.string(),
    isDefault: z.boolean(),
    livemode: z.boolean(),
    loginPage: Schemas$PortalLoginPage.out,
    metadata: Schemas$BillingPortalConfigurationMetadata.out
      .nullable()
      .optional(),
    object: z.enum(["billing_portal.configuration"]),
    updated: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      application: "application",
      businessProfile: "business_profile",
      created: "created",
      defaultReturnUrl: "default_return_url",
      features: "features",
      id: "id",
      isDefault: "is_default",
      livemode: "livemode",
      loginPage: "login_page",
      metadata: "metadata",
      object: "object",
      updated: "updated",
    });
  });

export const Schemas$BillingPortalConfiguration = {
  in: SchemaIn$BillingPortalConfiguration,
  out: SchemaOut$BillingPortalConfiguration,
};
