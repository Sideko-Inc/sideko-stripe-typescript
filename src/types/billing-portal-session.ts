import {
  BillingPortalConfiguration,
  External$BillingPortalConfiguration,
  Schemas$BillingPortalConfiguration,
} from "./billing-portal-configuration";
import {
  External$PortalFlowsFlow,
  PortalFlowsFlow,
  Schemas$PortalFlowsFlow,
} from "./portal-flows-flow";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The Billing customer portal is a Stripe-hosted UI for subscription and
 * billing management.
 *
 * A portal configuration describes the functionality and features that you
 * want to provide to your customers through the portal.
 *
 * A portal session describes the instantiation of the customer portal for
 * a particular customer. By visiting the session's URL, the customer
 * can manage their subscriptions and billing details. For security reasons,
 * sessions are short-lived and will expire if the customer does not visit the URL.
 * Create sessions on-demand when customers intend to manage their subscriptions
 * and billing details.
 *
 * Related guide: [Customer management](/customer-management)
 */
export type BillingPortalSession = {
  /**
   * The configuration used by this session, describing the features available.
   */
  configuration: string | BillingPortalConfiguration;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The ID of the customer for this session.
   */
  customer: string;
  flow?: PortalFlowsFlow | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The IETF language tag of the locale Customer Portal is displayed in. If blank or auto, the customer’s `preferred_locales` or browser’s locale is used.
   */
  locale?:
    | (
        | "auto"
        | "bg"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "en-AU"
        | "en-CA"
        | "en-GB"
        | "en-IE"
        | "en-IN"
        | "en-NZ"
        | "en-SG"
        | "es"
        | "es-419"
        | "et"
        | "fi"
        | "fil"
        | "fr"
        | "fr-CA"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "ja"
        | "ko"
        | "lt"
        | "lv"
        | "ms"
        | "mt"
        | "nb"
        | "nl"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sl"
        | "sv"
        | "th"
        | "tr"
        | "vi"
        | "zh"
        | "zh-HK"
        | "zh-TW"
      )
    | null
    | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing_portal.session";
  /**
   * The account for which the session was created on behalf of. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
   */
  onBehalfOf?: string | null | undefined;
  /**
   * The URL to redirect customers to when they click on the portal's link to return to your website.
   */
  returnUrl?: string | null | undefined;
  /**
   * The short-lived URL of the session that gives customers access to the customer portal.
   */
  url: string;
};

/**
 * @internal
 * BillingPortalSession without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSession = {
  configuration: string | External$BillingPortalConfiguration;
  created: number;
  customer: string;
  flow?: External$PortalFlowsFlow | undefined;
  id: string;
  livemode: boolean;
  locale?:
    | (
        | "auto"
        | "bg"
        | "cs"
        | "da"
        | "de"
        | "el"
        | "en"
        | "en-AU"
        | "en-CA"
        | "en-GB"
        | "en-IE"
        | "en-IN"
        | "en-NZ"
        | "en-SG"
        | "es"
        | "es-419"
        | "et"
        | "fi"
        | "fil"
        | "fr"
        | "fr-CA"
        | "hr"
        | "hu"
        | "id"
        | "it"
        | "ja"
        | "ko"
        | "lt"
        | "lv"
        | "ms"
        | "mt"
        | "nb"
        | "nl"
        | "pl"
        | "pt"
        | "pt-BR"
        | "ro"
        | "ru"
        | "sk"
        | "sl"
        | "sv"
        | "th"
        | "tr"
        | "vi"
        | "zh"
        | "zh-HK"
        | "zh-TW"
      )
    | null
    | undefined;
  object: "billing_portal.session";
  on_behalf_of?: string | null | undefined;
  return_url?: string | null | undefined;
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSession
 */
const SchemaIn$BillingPortalSession: z.ZodType<
  BillingPortalSession, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    configuration: z.union([z.string(), Schemas$BillingPortalConfiguration.in]),
    created: z.number().int(),
    customer: z.string(),
    flow: Schemas$PortalFlowsFlow.in.optional(),
    id: z.string(),
    livemode: z.boolean(),
    locale: z
      .enum([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-AU",
        "en-CA",
        "en-GB",
        "en-IE",
        "en-IN",
        "en-NZ",
        "en-SG",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ])
      .nullable()
      .optional(),
    object: z.enum(["billing_portal.session"]),
    on_behalf_of: z.string().nullable().optional(),
    return_url: z.string().nullable().optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      configuration: "configuration",
      created: "created",
      customer: "customer",
      flow: "flow",
      id: "id",
      livemode: "livemode",
      locale: "locale",
      object: "object",
      on_behalf_of: "onBehalfOf",
      return_url: "returnUrl",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSession
 */
const SchemaOut$BillingPortalSession: z.ZodType<
  External$BillingPortalSession, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSession // the object to be transformed
> = z
  .object({
    configuration: z.union([
      z.string(),
      Schemas$BillingPortalConfiguration.out,
    ]),
    created: z.number().int(),
    customer: z.string(),
    flow: Schemas$PortalFlowsFlow.out.optional(),
    id: z.string(),
    livemode: z.boolean(),
    locale: z
      .enum([
        "auto",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "en-AU",
        "en-CA",
        "en-GB",
        "en-IE",
        "en-IN",
        "en-NZ",
        "en-SG",
        "es",
        "es-419",
        "et",
        "fi",
        "fil",
        "fr",
        "fr-CA",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "ms",
        "mt",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sk",
        "sl",
        "sv",
        "th",
        "tr",
        "vi",
        "zh",
        "zh-HK",
        "zh-TW",
      ])
      .nullable()
      .optional(),
    object: z.enum(["billing_portal.session"]),
    onBehalfOf: z.string().nullable().optional(),
    returnUrl: z.string().nullable().optional(),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      configuration: "configuration",
      created: "created",
      customer: "customer",
      flow: "flow",
      id: "id",
      livemode: "livemode",
      locale: "locale",
      object: "object",
      onBehalfOf: "on_behalf_of",
      returnUrl: "return_url",
      url: "url",
    });
  });

export const Schemas$BillingPortalSession = {
  in: SchemaIn$BillingPortalSession,
  out: SchemaOut$BillingPortalSession,
};
