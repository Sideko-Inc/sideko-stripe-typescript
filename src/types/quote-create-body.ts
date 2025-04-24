import {
  External$QuoteCreateBodyAutomaticTax,
  QuoteCreateBodyAutomaticTax,
  Schemas$QuoteCreateBodyAutomaticTax,
} from "./quote-create-body-automatic-tax";
import {
  External$QuoteCreateBodyDiscountsArr0Item,
  QuoteCreateBodyDiscountsArr0Item,
  Schemas$QuoteCreateBodyDiscountsArr0Item,
} from "./quote-create-body-discounts-arr0-item";
import {
  External$QuoteCreateBodyFromQuote,
  QuoteCreateBodyFromQuote,
  Schemas$QuoteCreateBodyFromQuote,
} from "./quote-create-body-from-quote";
import {
  External$QuoteCreateBodyInvoiceSettings,
  QuoteCreateBodyInvoiceSettings,
  Schemas$QuoteCreateBodyInvoiceSettings,
} from "./quote-create-body-invoice-settings";
import {
  External$QuoteCreateBodyLineItemsItem,
  QuoteCreateBodyLineItemsItem,
  Schemas$QuoteCreateBodyLineItemsItem,
} from "./quote-create-body-line-items-item";
import {
  External$QuoteCreateBodyMetadata,
  QuoteCreateBodyMetadata,
  Schemas$QuoteCreateBodyMetadata,
} from "./quote-create-body-metadata";
import {
  External$QuoteCreateBodySubscriptionData,
  QuoteCreateBodySubscriptionData,
  Schemas$QuoteCreateBodySubscriptionData,
} from "./quote-create-body-subscription-data";
import {
  External$QuoteCreateBodyTransferDataObj0,
  QuoteCreateBodyTransferDataObj0,
  Schemas$QuoteCreateBodyTransferDataObj0,
} from "./quote-create-body-transfer-data-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteCreateBody
 */
export type QuoteCreateBody = {
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. There cannot be any line items with recurring prices when using this field.
   */
  applicationFeeAmount?: (number | string) | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  applicationFeePercent?: (number | string) | undefined;
  /**
   * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
   */
  automaticTax?: QuoteCreateBodyAutomaticTax | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or at invoice finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * The customer for which this quote belongs to. A customer is required before finalizing the quote. Once specified, it cannot be changed.
   */
  customer?: string | undefined;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  defaultTaxRates?: (string[] | string) | undefined;
  /**
   * A description that will be displayed on the quote PDF. If no value is passed, the default description configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  description?: (string | string) | undefined;
  /**
   * The discounts applied to the quote.
   */
  discounts?: (QuoteCreateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. If no value is passed, the default expiration date configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  expiresAt?: number | undefined;
  /**
   * A footer that will be displayed on the quote PDF. If no value is passed, the default footer configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  footer?: (string | string) | undefined;
  /**
   * Clone an existing quote. The new quote will be created in `status=draft`. When using this parameter, you cannot specify any other parameters except for `expires_at`.
   */
  fromQuote?: QuoteCreateBodyFromQuote | undefined;
  /**
   * A header that will be displayed on the quote PDF. If no value is passed, the default header configured in your [quote template settings](https://dashboard.stripe.com/settings/billing/quote) will be used.
   */
  header?: (string | string) | undefined;
  /**
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: QuoteCreateBodyInvoiceSettings | undefined;
  /**
   * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  lineItems?: QuoteCreateBodyLineItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: QuoteCreateBodyMetadata | undefined;
  /**
   * The account on behalf of which to charge.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
   */
  subscriptionData?: QuoteCreateBodySubscriptionData | undefined;
  /**
   * ID of the test clock to attach to the quote.
   */
  testClock?: string | undefined;
  /**
   * The data with which to automatically create a Transfer for each of the invoices.
   */
  transferData?: (QuoteCreateBodyTransferDataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((number | string) | undefined)
    | ((number | string) | undefined)
    | (QuoteCreateBodyAutomaticTax | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | ((string | string) | undefined)
    | ((QuoteCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | ((string | string) | undefined)
    | (QuoteCreateBodyFromQuote | undefined)
    | ((string | string) | undefined)
    | (QuoteCreateBodyInvoiceSettings | undefined)
    | (QuoteCreateBodyLineItemsItem[] | undefined)
    | (QuoteCreateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (QuoteCreateBodySubscriptionData | undefined)
    | (string | undefined)
    | ((QuoteCreateBodyTransferDataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * QuoteCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBody = {
  application_fee_amount?: (number | string) | undefined;
  application_fee_percent?: (number | string) | undefined;
  automatic_tax?: External$QuoteCreateBodyAutomaticTax | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  customer?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (External$QuoteCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  footer?: (string | string) | undefined;
  from_quote?: External$QuoteCreateBodyFromQuote | undefined;
  header?: (string | string) | undefined;
  invoice_settings?: External$QuoteCreateBodyInvoiceSettings | undefined;
  line_items?: External$QuoteCreateBodyLineItemsItem[] | undefined;
  metadata?: External$QuoteCreateBodyMetadata | undefined;
  on_behalf_of?: (string | string) | undefined;
  subscription_data?: External$QuoteCreateBodySubscriptionData | undefined;
  test_clock?: string | undefined;
  transfer_data?:
    | (External$QuoteCreateBodyTransferDataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | ((number | string) | undefined)
    | ((number | string) | undefined)
    | (External$QuoteCreateBodyAutomaticTax | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | ((string | string) | undefined)
    | ((External$QuoteCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | ((string | string) | undefined)
    | (External$QuoteCreateBodyFromQuote | undefined)
    | ((string | string) | undefined)
    | (External$QuoteCreateBodyInvoiceSettings | undefined)
    | (External$QuoteCreateBodyLineItemsItem[] | undefined)
    | (External$QuoteCreateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (External$QuoteCreateBodySubscriptionData | undefined)
    | (string | undefined)
    | ((External$QuoteCreateBodyTransferDataObj0 | string) | undefined)
    | External$QuoteCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBody
 */
const SchemaIn$QuoteCreateBody: z.ZodType<
  QuoteCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application_fee_amount: z.union([z.number().int(), z.string()]).optional(),
    application_fee_percent: z.union([z.number(), z.string()]).optional(),
    automatic_tax: Schemas$QuoteCreateBodyAutomaticTax.in.optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([z.array(Schemas$QuoteCreateBodyDiscountsArr0Item.in), z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    from_quote: Schemas$QuoteCreateBodyFromQuote.in.optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoice_settings: Schemas$QuoteCreateBodyInvoiceSettings.in.optional(),
    line_items: z.array(Schemas$QuoteCreateBodyLineItemsItem.in).optional(),
    metadata: Schemas$QuoteCreateBodyMetadata.in.optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    subscription_data: Schemas$QuoteCreateBodySubscriptionData.in.optional(),
    test_clock: z.string().optional(),
    transfer_data: z
      .union([Schemas$QuoteCreateBodyTransferDataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      application_fee_amount: "applicationFeeAmount",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      collection_method: "collectionMethod",
      customer: "customer",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      expand: "expand",
      expires_at: "expiresAt",
      footer: "footer",
      from_quote: "fromQuote",
      header: "header",
      invoice_settings: "invoiceSettings",
      line_items: "lineItems",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      subscription_data: "subscriptionData",
      test_clock: "testClock",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBody
 */
const SchemaOut$QuoteCreateBody: z.ZodType<
  External$QuoteCreateBody, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBody // the object to be transformed
> = z
  .object({
    applicationFeeAmount: z.union([z.number().int(), z.string()]).optional(),
    applicationFeePercent: z.union([z.number(), z.string()]).optional(),
    automaticTax: Schemas$QuoteCreateBodyAutomaticTax.out.optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$QuoteCreateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    fromQuote: Schemas$QuoteCreateBodyFromQuote.out.optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoiceSettings: Schemas$QuoteCreateBodyInvoiceSettings.out.optional(),
    lineItems: z.array(Schemas$QuoteCreateBodyLineItemsItem.out).optional(),
    metadata: Schemas$QuoteCreateBodyMetadata.out.optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    subscriptionData: Schemas$QuoteCreateBodySubscriptionData.out.optional(),
    testClock: z.string().optional(),
    transferData: z
      .union([Schemas$QuoteCreateBodyTransferDataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      applicationFeeAmount: "application_fee_amount",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      collectionMethod: "collection_method",
      customer: "customer",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      expand: "expand",
      expiresAt: "expires_at",
      footer: "footer",
      fromQuote: "from_quote",
      header: "header",
      invoiceSettings: "invoice_settings",
      lineItems: "line_items",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      subscriptionData: "subscription_data",
      testClock: "test_clock",
      transferData: "transfer_data",
    });
  });

export const Schemas$QuoteCreateBody = {
  in: SchemaIn$QuoteCreateBody,
  out: SchemaOut$QuoteCreateBody,
};
