import {
  AccountBusinessProfile,
  External$AccountBusinessProfile,
  Schemas$AccountBusinessProfile,
} from "./account-business-profile";
import {
  AccountCapabilities,
  External$AccountCapabilities,
  Schemas$AccountCapabilities,
} from "./account-capabilities";
import {
  AccountExternalAccounts,
  External$AccountExternalAccounts,
  Schemas$AccountExternalAccounts,
} from "./account-external-accounts";
import {
  AccountFutureRequirements,
  External$AccountFutureRequirements,
  Schemas$AccountFutureRequirements,
} from "./account-future-requirements";
import {
  AccountGroupMembership,
  External$AccountGroupMembership,
  Schemas$AccountGroupMembership,
} from "./account-group-membership";
import {
  AccountMetadata,
  External$AccountMetadata,
  Schemas$AccountMetadata,
} from "./account-metadata";
import {
  AccountRequirements,
  External$AccountRequirements,
  Schemas$AccountRequirements,
} from "./account-requirements";
import {
  AccountSettings,
  External$AccountSettings,
  Schemas$AccountSettings,
} from "./account-settings";
import {
  AccountTosAcceptance,
  External$AccountTosAcceptance,
  Schemas$AccountTosAcceptance,
} from "./account-tos-acceptance";
import {
  AccountUnificationAccountController,
  External$AccountUnificationAccountController,
  Schemas$AccountUnificationAccountController,
} from "./account-unification-account-controller";
import {
  External$LegalEntityCompany,
  LegalEntityCompany,
  Schemas$LegalEntityCompany,
} from "./legal-entity-company";
import { External$Person, Person, Schemas$Person } from "./person";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This is an object representing a Stripe account. You can retrieve it to see
 * properties on the account like its current requirements or if the account is
 * enabled to make live charges or receive payouts.
 *
 * For accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection)
 * is `application`, which includes Custom accounts, the properties below are always
 * returned.
 *
 * For accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection)
 * is `stripe`, which includes Standard and Express accounts, some properties are only returned
 * until you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions)
 * to start Connect Onboarding. Learn about the [differences between accounts](/connect/accounts).
 */
export type Account = {
  businessProfile?: AccountBusinessProfile | undefined;
  /**
   * The business type.
   */
  businessType?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | null
    | undefined;
  capabilities?: AccountCapabilities | undefined;
  /**
   * Whether the account can process charges.
   */
  chargesEnabled?: boolean | undefined;
  company?: LegalEntityCompany | undefined;
  controller?: AccountUnificationAccountController | undefined;
  /**
   * The account's country.
   */
  country?: string | undefined;
  /**
   * Time at which the account was connected. Measured in seconds since the Unix epoch.
   */
  created?: number | undefined;
  /**
   * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
   */
  defaultCurrency?: string | undefined;
  /**
   * Whether account details have been submitted. Accounts with Stripe Dashboard access, which includes Standard accounts, cannot receive payouts before this is true. Accounts where this is false should be directed to [an onboarding flow](/connect/onboarding) to finish submitting account details.
   */
  detailsSubmitted?: boolean | undefined;
  /**
   * An email address associated with the account. It's not used for authentication and Stripe doesn't market to this field without explicit approval from the platform.
   */
  email?: string | null | undefined;
  /**
   * External accounts (bank accounts and debit cards) currently attached to this account. External accounts are only returned for requests where `controller[is_controller]` is true.
   */
  externalAccounts?: AccountExternalAccounts | undefined;
  futureRequirements?: AccountFutureRequirements | undefined;
  groups?: AccountGroupMembership | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * This is an object representing a person associated with a Stripe account.
   *
   * A platform can only access a subset of data in a person for an account where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.
   *
   * See the [Standard onboarding](/connect/standard-accounts) or [Express onboarding](/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](/connect/handling-api-verification#person-information).
   */
  individual?: Person | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: AccountMetadata | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "account";
  /**
   * Whether the funds in this account can be paid out.
   */
  payoutsEnabled?: boolean | undefined;
  requirements?: AccountRequirements | undefined;
  settings?: AccountSettings | undefined;
  tosAcceptance?: AccountTosAcceptance | undefined;
  /**
   * The Stripe account type. Can be `standard`, `express`, `custom`, or `none`.
   */
  type?: ("custom" | "express" | "none" | "standard") | undefined;
};

/**
 * @internal
 * Account without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Account = {
  business_profile?: External$AccountBusinessProfile | undefined;
  business_type?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | null
    | undefined;
  capabilities?: External$AccountCapabilities | undefined;
  charges_enabled?: boolean | undefined;
  company?: External$LegalEntityCompany | undefined;
  controller?: External$AccountUnificationAccountController | undefined;
  country?: string | undefined;
  created?: number | undefined;
  default_currency?: string | undefined;
  details_submitted?: boolean | undefined;
  email?: string | null | undefined;
  external_accounts?: External$AccountExternalAccounts | undefined;
  future_requirements?: External$AccountFutureRequirements | undefined;
  groups?: External$AccountGroupMembership | undefined;
  id: string;
  individual?: External$Person | undefined;
  metadata?: External$AccountMetadata | undefined;
  object: "account";
  payouts_enabled?: boolean | undefined;
  requirements?: External$AccountRequirements | undefined;
  settings?: External$AccountSettings | undefined;
  tos_acceptance?: External$AccountTosAcceptance | undefined;
  type?: ("custom" | "express" | "none" | "standard") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Account
 */
const SchemaIn$Account: z.ZodType<
  Account, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    business_profile: Schemas$AccountBusinessProfile.in.optional(),
    business_type: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .nullable()
      .optional(),
    capabilities: Schemas$AccountCapabilities.in.optional(),
    charges_enabled: z.boolean().optional(),
    company: z.lazy(() => Schemas$LegalEntityCompany.in.optional()),
    controller: Schemas$AccountUnificationAccountController.in.optional(),
    country: z.string().optional(),
    created: z.number().int().optional(),
    default_currency: z.string().optional(),
    details_submitted: z.boolean().optional(),
    email: z.string().nullable().optional(),
    external_accounts: z.lazy(() =>
      Schemas$AccountExternalAccounts.in.optional(),
    ),
    future_requirements: Schemas$AccountFutureRequirements.in.optional(),
    groups: Schemas$AccountGroupMembership.in.optional(),
    id: z.string(),
    individual: z.lazy(() => Schemas$Person.in.optional()),
    metadata: Schemas$AccountMetadata.in.optional(),
    object: z.enum(["account"]),
    payouts_enabled: z.boolean().optional(),
    requirements: Schemas$AccountRequirements.in.optional(),
    settings: z.lazy(() => Schemas$AccountSettings.in.optional()),
    tos_acceptance: Schemas$AccountTosAcceptance.in.optional(),
    type: z.enum(["custom", "express", "none", "standard"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      business_profile: "businessProfile",
      business_type: "businessType",
      capabilities: "capabilities",
      charges_enabled: "chargesEnabled",
      company: "company",
      controller: "controller",
      country: "country",
      created: "created",
      default_currency: "defaultCurrency",
      details_submitted: "detailsSubmitted",
      email: "email",
      external_accounts: "externalAccounts",
      future_requirements: "futureRequirements",
      groups: "groups",
      id: "id",
      individual: "individual",
      metadata: "metadata",
      object: "object",
      payouts_enabled: "payoutsEnabled",
      requirements: "requirements",
      settings: "settings",
      tos_acceptance: "tosAcceptance",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Account
 */
const SchemaOut$Account: z.ZodType<
  External$Account, // output type of this zod object
  z.ZodTypeDef,
  Account // the object to be transformed
> = z
  .object({
    businessProfile: Schemas$AccountBusinessProfile.out.optional(),
    businessType: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .nullable()
      .optional(),
    capabilities: Schemas$AccountCapabilities.out.optional(),
    chargesEnabled: z.boolean().optional(),
    company: z.lazy(() => Schemas$LegalEntityCompany.out.optional()),
    controller: Schemas$AccountUnificationAccountController.out.optional(),
    country: z.string().optional(),
    created: z.number().int().optional(),
    defaultCurrency: z.string().optional(),
    detailsSubmitted: z.boolean().optional(),
    email: z.string().nullable().optional(),
    externalAccounts: z.lazy(() =>
      Schemas$AccountExternalAccounts.out.optional(),
    ),
    futureRequirements: Schemas$AccountFutureRequirements.out.optional(),
    groups: Schemas$AccountGroupMembership.out.optional(),
    id: z.string(),
    individual: z.lazy(() => Schemas$Person.out.optional()),
    metadata: Schemas$AccountMetadata.out.optional(),
    object: z.enum(["account"]),
    payoutsEnabled: z.boolean().optional(),
    requirements: Schemas$AccountRequirements.out.optional(),
    settings: z.lazy(() => Schemas$AccountSettings.out.optional()),
    tosAcceptance: Schemas$AccountTosAcceptance.out.optional(),
    type: z.enum(["custom", "express", "none", "standard"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      businessProfile: "business_profile",
      businessType: "business_type",
      capabilities: "capabilities",
      chargesEnabled: "charges_enabled",
      company: "company",
      controller: "controller",
      country: "country",
      created: "created",
      defaultCurrency: "default_currency",
      detailsSubmitted: "details_submitted",
      email: "email",
      externalAccounts: "external_accounts",
      futureRequirements: "future_requirements",
      groups: "groups",
      id: "id",
      individual: "individual",
      metadata: "metadata",
      object: "object",
      payoutsEnabled: "payouts_enabled",
      requirements: "requirements",
      settings: "settings",
      tosAcceptance: "tos_acceptance",
      type: "type",
    });
  });

export const Schemas$Account = {
  in: SchemaIn$Account,
  out: SchemaOut$Account,
};
