import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingPortalSessionCreateBodyFlowData,
  External$BillingPortalSessionCreateBodyFlowData,
  Schemas$BillingPortalSessionCreateBodyFlowData,
} from "@sideko-inc/stripe/types/billing-portal-session-create-body-flow-data";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * The ID of an existing [configuration](https://stripe.com/docs/api/customer_portal/configuration) to use for this session, describing its functionality and features. If not specified, the session uses the default configuration.
   */
  configuration?: string | undefined;
  /**
   * The ID of an existing customer.
   */
  customer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
   */
  flowData?: BillingPortalSessionCreateBodyFlowData | undefined;
  /**
   * The IETF language tag of the locale customer portal is displayed in. If blank or auto, the customer’s `preferred_locales` or browser’s locale is used.
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
    | undefined;
  /**
   * The `on_behalf_of` account to use for this session. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
   */
  onBehalfOf?: string | undefined;
  /**
   * The default URL to redirect customers to when they click on the portal's link to return to your website.
   */
  returnUrl?: string | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  configuration?: string | undefined;
  customer: string;
  expand?: string[] | undefined;
  flow_data?: External$BillingPortalSessionCreateBodyFlowData | undefined;
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
    | undefined;
  on_behalf_of?: string | undefined;
  return_url?: string | undefined;
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
    configuration: z.string().optional(),
    customer: z.string(),
    expand: z.array(z.string()).optional(),
    flow_data: Schemas$BillingPortalSessionCreateBodyFlowData.in.optional(),
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
      .optional(),
    on_behalf_of: z.string().optional(),
    return_url: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      configuration: "configuration",
      customer: "customer",
      expand: "expand",
      flow_data: "flowData",
      locale: "locale",
      on_behalf_of: "onBehalfOf",
      return_url: "returnUrl",
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
    configuration: z.string().optional(),
    customer: z.string(),
    expand: z.array(z.string()).optional(),
    flowData: Schemas$BillingPortalSessionCreateBodyFlowData.out.optional(),
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
      .optional(),
    onBehalfOf: z.string().optional(),
    returnUrl: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      configuration: "configuration",
      customer: "customer",
      expand: "expand",
      flowData: "flow_data",
      locale: "locale",
      onBehalfOf: "on_behalf_of",
      returnUrl: "return_url",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
