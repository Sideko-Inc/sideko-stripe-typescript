import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingPortalConfigurationCreateBodyBusinessProfile,
  External$BillingPortalConfigurationCreateBodyBusinessProfile,
  Schemas$BillingPortalConfigurationCreateBodyBusinessProfile,
} from "@sideko-inc/stripe/types/billing-portal-configuration-create-body-business-profile";
import {
  BillingPortalConfigurationCreateBodyFeatures,
  External$BillingPortalConfigurationCreateBodyFeatures,
  Schemas$BillingPortalConfigurationCreateBodyFeatures,
} from "@sideko-inc/stripe/types/billing-portal-configuration-create-body-features";
import {
  BillingPortalConfigurationCreateBodyLoginPage,
  External$BillingPortalConfigurationCreateBodyLoginPage,
  Schemas$BillingPortalConfigurationCreateBodyLoginPage,
} from "@sideko-inc/stripe/types/billing-portal-configuration-create-body-login-page";
import {
  BillingPortalConfigurationCreateBodyMetadata,
  External$BillingPortalConfigurationCreateBodyMetadata,
  Schemas$BillingPortalConfigurationCreateBodyMetadata,
} from "@sideko-inc/stripe/types/billing-portal-configuration-create-body-metadata";
import {
  BillingPortalConfigurationUpdateBody,
  External$BillingPortalConfigurationUpdateBody,
  Schemas$BillingPortalConfigurationUpdateBody,
} from "@sideko-inc/stripe/types/billing-portal-configuration-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return configurations that are active or inactive (e.g., pass `true` to only list active configurations).
   */
  active?: boolean | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Only return the default or non-default configurations (e.g., pass `true` to only list the default configuration).
   */
  isDefault?: boolean | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  active?: boolean | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  is_default?: boolean | undefined;
  limit?: number | undefined;
  starting_after?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    is_default: z.boolean().optional(),
    limit: z.number().int().optional(),
    starting_after: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      ending_before: "endingBefore",
      expand: "expand",
      is_default: "isDefault",
      limit: "limit",
      starting_after: "startingAfter",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    isDefault: z.boolean().optional(),
    limit: z.number().int().optional(),
    startingAfter: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      endingBefore: "ending_before",
      expand: "expand",
      isDefault: "is_default",
      limit: "limit",
      startingAfter: "starting_after",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  configuration: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  configuration: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    configuration: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      configuration: "configuration",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    configuration: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      configuration: "configuration",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
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
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
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
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
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

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: BillingPortalConfigurationUpdateBody | undefined;
  configuration: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$BillingPortalConfigurationUpdateBody | undefined;
  configuration: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$BillingPortalConfigurationUpdateBody.in.optional(),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      configuration: "configuration",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$BillingPortalConfigurationUpdateBody.out.optional(),
    configuration: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      configuration: "configuration",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
