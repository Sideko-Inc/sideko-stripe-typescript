import {
  AccountUpdateBodyBusinessProfile,
  External$AccountUpdateBodyBusinessProfile,
  Schemas$AccountUpdateBodyBusinessProfile,
} from "./account-update-body-business-profile";
import {
  AccountUpdateBodyCapabilities,
  External$AccountUpdateBodyCapabilities,
  Schemas$AccountUpdateBodyCapabilities,
} from "./account-update-body-capabilities";
import {
  AccountUpdateBodyCompany,
  External$AccountUpdateBodyCompany,
  Schemas$AccountUpdateBodyCompany,
} from "./account-update-body-company";
import {
  AccountUpdateBodyDocuments,
  External$AccountUpdateBodyDocuments,
  Schemas$AccountUpdateBodyDocuments,
} from "./account-update-body-documents";
import {
  AccountUpdateBodyGroups,
  External$AccountUpdateBodyGroups,
  Schemas$AccountUpdateBodyGroups,
} from "./account-update-body-groups";
import {
  AccountUpdateBodyIndividual,
  External$AccountUpdateBodyIndividual,
  Schemas$AccountUpdateBodyIndividual,
} from "./account-update-body-individual";
import {
  AccountUpdateBodyMetadataObj0,
  External$AccountUpdateBodyMetadataObj0,
  Schemas$AccountUpdateBodyMetadataObj0,
} from "./account-update-body-metadata-obj0";
import {
  AccountUpdateBodySettings,
  External$AccountUpdateBodySettings,
  Schemas$AccountUpdateBodySettings,
} from "./account-update-body-settings";
import {
  AccountUpdateBodyTosAcceptance,
  External$AccountUpdateBodyTosAcceptance,
  Schemas$AccountUpdateBodyTosAcceptance,
} from "./account-update-body-tos-acceptance";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBody
 */
export type AccountUpdateBody = {
  /**
   * An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
   */
  accountToken?: string | undefined;
  /**
   * Business information about the account.
   */
  businessProfile?: AccountUpdateBodyBusinessProfile | undefined;
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
  capabilities?: AccountUpdateBodyCapabilities | undefined;
  /**
   * Information about the company or business. This field is available for any `business_type`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  company?: AccountUpdateBodyCompany | undefined;
  /**
   * Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://docs.stripe.com/payouts).
   */
  defaultCurrency?: string | undefined;
  /**
   * Documents that may be submitted to satisfy various informational requests.
   */
  documents?: AccountUpdateBodyDocuments | undefined;
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
  groups?: AccountUpdateBodyGroups | undefined;
  /**
   * Information about the person represented by the account. This field is null unless `business_type` is set to `individual`. Once you create an [Account Link](/api/account_links) or [Account Session](/api/account_sessions), this property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts.
   */
  individual?: AccountUpdateBodyIndividual | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (AccountUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Options for customizing how the account functions within Stripe.
   */
  settings?: AccountUpdateBodySettings | undefined;
  /**
   * Details on the account's acceptance of the [Stripe Services Agreement](/connect/updating-accounts#tos-acceptance). This property can only be updated for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts. This property defaults to a `full` service agreement when empty.
   */
  tosAcceptance?: AccountUpdateBodyTosAcceptance | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (AccountUpdateBodyBusinessProfile | undefined)
    | (
        | ("company" | "government_entity" | "individual" | "non_profit")
        | undefined
      )
    | (AccountUpdateBodyCapabilities | undefined)
    | (AccountUpdateBodyCompany | undefined)
    | (string | undefined)
    | (AccountUpdateBodyDocuments | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (AccountUpdateBodyGroups | undefined)
    | (AccountUpdateBodyIndividual | undefined)
    | ((AccountUpdateBodyMetadataObj0 | string) | undefined)
    | (AccountUpdateBodySettings | undefined)
    | (AccountUpdateBodyTosAcceptance | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * AccountUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBody = {
  account_token?: string | undefined;
  business_profile?: External$AccountUpdateBodyBusinessProfile | undefined;
  business_type?:
    | ("company" | "government_entity" | "individual" | "non_profit")
    | undefined;
  capabilities?: External$AccountUpdateBodyCapabilities | undefined;
  company?: External$AccountUpdateBodyCompany | undefined;
  default_currency?: string | undefined;
  documents?: External$AccountUpdateBodyDocuments | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  external_account?: string | undefined;
  groups?: External$AccountUpdateBodyGroups | undefined;
  individual?: External$AccountUpdateBodyIndividual | undefined;
  metadata?: (External$AccountUpdateBodyMetadataObj0 | string) | undefined;
  settings?: External$AccountUpdateBodySettings | undefined;
  tos_acceptance?: External$AccountUpdateBodyTosAcceptance | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (External$AccountUpdateBodyBusinessProfile | undefined)
    | (
        | ("company" | "government_entity" | "individual" | "non_profit")
        | undefined
      )
    | (External$AccountUpdateBodyCapabilities | undefined)
    | (External$AccountUpdateBodyCompany | undefined)
    | (string | undefined)
    | (External$AccountUpdateBodyDocuments | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$AccountUpdateBodyGroups | undefined)
    | (External$AccountUpdateBodyIndividual | undefined)
    | ((External$AccountUpdateBodyMetadataObj0 | string) | undefined)
    | (External$AccountUpdateBodySettings | undefined)
    | (External$AccountUpdateBodyTosAcceptance | undefined)
    | External$AccountUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBody
 */
const SchemaIn$AccountUpdateBody: z.ZodType<
  AccountUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_token: z.string().optional(),
    business_profile: Schemas$AccountUpdateBodyBusinessProfile.in.optional(),
    business_type: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountUpdateBodyCapabilities.in.optional(),
    company: Schemas$AccountUpdateBodyCompany.in.optional(),
    default_currency: z.string().optional(),
    documents: Schemas$AccountUpdateBodyDocuments.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    external_account: z.string().optional(),
    groups: Schemas$AccountUpdateBodyGroups.in.optional(),
    individual: Schemas$AccountUpdateBodyIndividual.in.optional(),
    metadata: z
      .union([Schemas$AccountUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    settings: Schemas$AccountUpdateBodySettings.in.optional(),
    tos_acceptance: Schemas$AccountUpdateBodyTosAcceptance.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account_token: "accountToken",
      business_profile: "businessProfile",
      business_type: "businessType",
      capabilities: "capabilities",
      company: "company",
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
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBody
 */
const SchemaOut$AccountUpdateBody: z.ZodType<
  External$AccountUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBody // the object to be transformed
> = z
  .object({
    accountToken: z.string().optional(),
    businessProfile: Schemas$AccountUpdateBodyBusinessProfile.out.optional(),
    businessType: z
      .enum(["company", "government_entity", "individual", "non_profit"])
      .optional(),
    capabilities: Schemas$AccountUpdateBodyCapabilities.out.optional(),
    company: Schemas$AccountUpdateBodyCompany.out.optional(),
    defaultCurrency: z.string().optional(),
    documents: Schemas$AccountUpdateBodyDocuments.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    externalAccount: z.string().optional(),
    groups: Schemas$AccountUpdateBodyGroups.out.optional(),
    individual: Schemas$AccountUpdateBodyIndividual.out.optional(),
    metadata: z
      .union([Schemas$AccountUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    settings: Schemas$AccountUpdateBodySettings.out.optional(),
    tosAcceptance: Schemas$AccountUpdateBodyTosAcceptance.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      accountToken: "account_token",
      businessProfile: "business_profile",
      businessType: "business_type",
      capabilities: "capabilities",
      company: "company",
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
    });
  });

export const Schemas$AccountUpdateBody = {
  in: SchemaIn$AccountUpdateBody,
  out: SchemaOut$AccountUpdateBody,
};
