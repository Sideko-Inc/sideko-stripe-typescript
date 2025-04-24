import {
  AccountCreateBodyBankAccountObj0,
  External$AccountCreateBodyBankAccountObj0,
  Schemas$AccountCreateBodyBankAccountObj0,
} from "./account-create-body-bank-account-obj0";
import {
  AccountCreateBodyBusinessProfile,
  External$AccountCreateBodyBusinessProfile,
  Schemas$AccountCreateBodyBusinessProfile,
} from "./account-create-body-business-profile";
import {
  AccountCreateBodyCapabilities,
  External$AccountCreateBodyCapabilities,
  Schemas$AccountCreateBodyCapabilities,
} from "./account-create-body-capabilities";
import {
  AccountCreateBodyCompany,
  External$AccountCreateBodyCompany,
  Schemas$AccountCreateBodyCompany,
} from "./account-create-body-company";
import {
  AccountCreateBodyController,
  External$AccountCreateBodyController,
  Schemas$AccountCreateBodyController,
} from "./account-create-body-controller";
import {
  AccountCreateBodyDocuments,
  External$AccountCreateBodyDocuments,
  Schemas$AccountCreateBodyDocuments,
} from "./account-create-body-documents";
import {
  AccountCreateBodyGroups,
  External$AccountCreateBodyGroups,
  Schemas$AccountCreateBodyGroups,
} from "./account-create-body-groups";
import {
  AccountCreateBodyIndividual,
  External$AccountCreateBodyIndividual,
  Schemas$AccountCreateBodyIndividual,
} from "./account-create-body-individual";
import {
  AccountCreateBodyMetadataObj0,
  External$AccountCreateBodyMetadataObj0,
  Schemas$AccountCreateBodyMetadataObj0,
} from "./account-create-body-metadata-obj0";
import {
  AccountCreateBodySettings,
  External$AccountCreateBodySettings,
  Schemas$AccountCreateBodySettings,
} from "./account-create-body-settings";
import {
  AccountCreateBodyTosAcceptance,
  External$AccountCreateBodyTosAcceptance,
  Schemas$AccountCreateBodyTosAcceptance,
} from "./account-create-body-tos-acceptance";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBody
 */
export type AccountCreateBody = {
  /**
   * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
   */
  accountToken?: string | undefined;
  /**
   * Either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/js), or a dictionary containing a user's bank account details.
   */
  bankAccount?: (AccountCreateBodyBankAccountObj0 | string) | undefined;
  /**
   * Business information about the account.
   */
  businessProfile?: AccountCreateBodyBusinessProfile | undefined;
  /**
   * The business type. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  businessType?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  /**
   * Each key of the dictionary represents a capability, and each capability
   * maps to its settings (for example, whether it has been requested or not). Each
   * capability is inactive until you have provided its specific
   * requirements and Stripe has verified them. An account might have some
   * of its requested capabilities be active and some be inactive.
   *
   * Required when [account.controller.stripe_dashboard.type](/api/accounts/create#create_account-controller-dashboard-type)
   * is `none`, which includes Custom accounts.
   */
  capabilities?: AccountCreateBodyCapabilities | undefined;
  /**
   * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  company?: AccountCreateBodyCompany | undefined;
  /**
   * A hash of configuration describing the account controller's attributes.
   */
  controller?: AccountCreateBodyController | undefined;
  /**
   * The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created. Available countries include [Stripe's global markets](https://stripe.com/global) as well as countries where [cross-border payouts](https://stripe.com/docs/connect/cross-border-payouts) are supported.
   */
  country?: string | undefined;
  /**
   * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
   */
  defaultCurrency?: string | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountCreateBodyDocuments | undefined;
  /**
   * The email address of the account holder. This is only to make the account easier to identify to you. If [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, Stripe doesn't email the account without your consent.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A card or bank account to attach to the account for receiving [payouts](/connect/bank-debit-card-payouts) (you won’t be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](/js), or a dictionary, as documented in the `external_account` parameter for [bank account](/api#account_create_bank_account) creation. <br><br>By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the [bank account](/api#account_create_bank_account) or [card creation](/api#account_create_card) APIs. After you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  externalAccount?: string | undefined;
  /**
   * A hash of account group type to tokens. These are account groups this account should be added to.
   */
  groups?: AccountCreateBodyGroups | undefined;
  /**
   * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  individual?: AccountCreateBodyIndividual | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (AccountCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Options for customizing how the account functions within Stripe.
   */
  settings?: AccountCreateBodySettings | undefined;
  /**
   * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
   */
  tosAcceptance?: AccountCreateBodyTosAcceptance | undefined;
  /**
   * The type of Stripe account to create. May be one of `custom`, `express` or `standard`.
   */
  type?: ("custom" | "express" | "standard") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | ((AccountCreateBodyBankAccountObj0 | string) | undefined)
    | (AccountCreateBodyBusinessProfile | undefined)
    | (
        | ("company" | "government_entity" | "individual" | "non_profit")
        | undefined
      )
    | (AccountCreateBodyCapabilities | undefined)
    | (AccountCreateBodyCompany | undefined)
    | (AccountCreateBodyController | undefined)
    | (string | undefined)
    | (string | undefined)
    | (AccountCreateBodyDocuments | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (AccountCreateBodyGroups | undefined)
    | (AccountCreateBodyIndividual | undefined)
    | ((AccountCreateBodyMetadataObj0 | string) | undefined)
    | (AccountCreateBodySettings | undefined)
    | (AccountCreateBodyTosAcceptance | undefined)
    | (("custom" | "express" | "standard") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBody = {
  account_token?: string | undefined;
  bank_account?:
    | (External$AccountCreateBodyBankAccountObj0 | string)
    | undefined;
  business_profile?: External$AccountCreateBodyBusinessProfile | undefined;
  business_type?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  capabilities?: External$AccountCreateBodyCapabilities | undefined;
  company?: External$AccountCreateBodyCompany | undefined;
  controller?: External$AccountCreateBodyController | undefined;
  country?: string | undefined;
  default_currency?: string | undefined;
  documents?: External$AccountCreateBodyDocuments | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  external_account?: string | undefined;
  groups?: External$AccountCreateBodyGroups | undefined;
  individual?: External$AccountCreateBodyIndividual | undefined;
  metadata?: (External$AccountCreateBodyMetadataObj0 | string) | undefined;
  settings?: External$AccountCreateBodySettings | undefined;
  tos_acceptance?: External$AccountCreateBodyTosAcceptance | undefined;
  type?: ("custom" | "express" | "standard") | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | ((External$AccountCreateBodyBankAccountObj0 | string) | undefined)
    | (External$AccountCreateBodyBusinessProfile | undefined)
    | (
        | ("company" | "government_entity" | "individual" | "non_profit")
        | undefined
      )
    | (External$AccountCreateBodyCapabilities | undefined)
    | (External$AccountCreateBodyCompany | undefined)
    | (External$AccountCreateBodyController | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$AccountCreateBodyDocuments | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$AccountCreateBodyGroups | undefined)
    | (External$AccountCreateBodyIndividual | undefined)
    | ((External$AccountCreateBodyMetadataObj0 | string) | undefined)
    | (External$AccountCreateBodySettings | undefined)
    | (External$AccountCreateBodyTosAcceptance | undefined)
    | (("custom" | "express" | "standard") | undefined)
    | External$AccountCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBody
 */
const SchemaIn$AccountCreateBody: z.ZodType<
  AccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_token: z.string().optional(),
    bank_account: z
      .union([Schemas$AccountCreateBodyBankAccountObj0.in, z.string()])
      .optional(),
    business_profile: Schemas$AccountCreateBodyBusinessProfile.in.optional(),
    business_type: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountCreateBodyCapabilities.in.optional(),
    company: Schemas$AccountCreateBodyCompany.in.optional(),
    controller: Schemas$AccountCreateBodyController.in.optional(),
    country: z.string().optional(),
    default_currency: z.string().optional(),
    documents: Schemas$AccountCreateBodyDocuments.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    external_account: z.string().optional(),
    groups: Schemas$AccountCreateBodyGroups.in.optional(),
    individual: Schemas$AccountCreateBodyIndividual.in.optional(),
    metadata: z
      .union([Schemas$AccountCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    settings: Schemas$AccountCreateBodySettings.in.optional(),
    tos_acceptance: Schemas$AccountCreateBodyTosAcceptance.in.optional(),
    type: z.enum(["custom", "express", "standard"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account_token: "accountToken",
      bank_account: "bankAccount",
      business_profile: "businessProfile",
      business_type: "businessType",
      capabilities: "capabilities",
      company: "company",
      controller: "controller",
      country: "country",
      default_currency: "defaultCurrency",
      documents: "documents",
      email: "email",
      expand: "expand",
      external_account: "externalAccount",
      groups: "groups",
      individual: "individual",
      metadata: "metadata",
      settings: "settings",
      tos_acceptance: "tosAcceptance",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBody
 */
const SchemaOut$AccountCreateBody: z.ZodType<
  External$AccountCreateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBody // the object to be transformed
> = z
  .object({
    accountToken: z.string().optional(),
    bankAccount: z
      .union([Schemas$AccountCreateBodyBankAccountObj0.out, z.string()])
      .optional(),
    businessProfile: Schemas$AccountCreateBodyBusinessProfile.out.optional(),
    businessType: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountCreateBodyCapabilities.out.optional(),
    company: Schemas$AccountCreateBodyCompany.out.optional(),
    controller: Schemas$AccountCreateBodyController.out.optional(),
    country: z.string().optional(),
    defaultCurrency: z.string().optional(),
    documents: Schemas$AccountCreateBodyDocuments.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    externalAccount: z.string().optional(),
    groups: Schemas$AccountCreateBodyGroups.out.optional(),
    individual: Schemas$AccountCreateBodyIndividual.out.optional(),
    metadata: z
      .union([Schemas$AccountCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    settings: Schemas$AccountCreateBodySettings.out.optional(),
    tosAcceptance: Schemas$AccountCreateBodyTosAcceptance.out.optional(),
    type: z.enum(["custom", "express", "standard"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      accountToken: "account_token",
      bankAccount: "bank_account",
      businessProfile: "business_profile",
      businessType: "business_type",
      capabilities: "capabilities",
      company: "company",
      controller: "controller",
      country: "country",
      defaultCurrency: "default_currency",
      documents: "documents",
      email: "email",
      expand: "expand",
      externalAccount: "external_account",
      groups: "groups",
      individual: "individual",
      metadata: "metadata",
      settings: "settings",
      tosAcceptance: "tos_acceptance",
      type: "type",
    });
  });

export const Schemas$AccountCreateBody = {
  in: SchemaIn$AccountCreateBody,
  out: SchemaOut$AccountCreateBody,
};
