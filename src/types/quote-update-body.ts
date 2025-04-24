import {
  External$QuoteUpdateBodyAutomaticTax,
  QuoteUpdateBodyAutomaticTax,
  Schemas$QuoteUpdateBodyAutomaticTax,
} from "./quote-update-body-automatic-tax";
import {
  External$QuoteUpdateBodyDiscountsArr0Item,
  QuoteUpdateBodyDiscountsArr0Item,
  Schemas$QuoteUpdateBodyDiscountsArr0Item,
} from "./quote-update-body-discounts-arr0-item";
import {
  External$QuoteUpdateBodyInvoiceSettings,
  QuoteUpdateBodyInvoiceSettings,
  Schemas$QuoteUpdateBodyInvoiceSettings,
} from "./quote-update-body-invoice-settings";
import {
  External$QuoteUpdateBodyLineItemsItem,
  QuoteUpdateBodyLineItemsItem,
  Schemas$QuoteUpdateBodyLineItemsItem,
} from "./quote-update-body-line-items-item";
import {
  External$QuoteUpdateBodyMetadata,
  QuoteUpdateBodyMetadata,
  Schemas$QuoteUpdateBodyMetadata,
} from "./quote-update-body-metadata";
import {
  External$QuoteUpdateBodySubscriptionData,
  QuoteUpdateBodySubscriptionData,
  Schemas$QuoteUpdateBodySubscriptionData,
} from "./quote-update-body-subscription-data";
import {
  External$QuoteUpdateBodyTransferDataObj0,
  QuoteUpdateBodyTransferDataObj0,
  Schemas$QuoteUpdateBodyTransferDataObj0,
} from "./quote-update-body-transfer-data-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBody
 */
export type QuoteUpdateBody = {
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
  automaticTax?: QuoteUpdateBodyAutomaticTax | undefined;
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
   * A description that will be displayed on the quote PDF.
   */
  description?: (string | string) | undefined;
  /**
   * The discounts applied to the quote.
   */
  discounts?: (QuoteUpdateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A future timestamp on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
   */
  expiresAt?: number | undefined;
  /**
   * A footer that will be displayed on the quote PDF.
   */
  footer?: (string | string) | undefined;
  /**
   * A header that will be displayed on the quote PDF.
   */
  header?: (string | string) | undefined;
  /**
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: QuoteUpdateBodyInvoiceSettings | undefined;
  /**
   * A list of line items the customer is being quoted for. Each line item includes information about the product, the quantity, and the resulting cost.
   */
  lineItems?: QuoteUpdateBodyLineItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: QuoteUpdateBodyMetadata | undefined;
  /**
   * The account on behalf of which to charge.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * When creating a subscription or subscription schedule, the specified configuration data will be used. There must be at least one line item with a recurring price for a subscription or subscription schedule to be created. A subscription schedule is created if `subscription_data[effective_date]` is present and in the future, otherwise a subscription is created.
   */
  subscriptionData?: QuoteUpdateBodySubscriptionData | undefined;
  /**
   * The data with which to automatically create a Transfer for each of the invoices.
   */
  transferData?: (QuoteUpdateBodyTransferDataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((number | string) | undefined)
    | ((number | string) | undefined)
    | (QuoteUpdateBodyAutomaticTax | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | ((string | string) | undefined)
    | ((QuoteUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | (QuoteUpdateBodyInvoiceSettings | undefined)
    | (QuoteUpdateBodyLineItemsItem[] | undefined)
    | (QuoteUpdateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (QuoteUpdateBodySubscriptionData | undefined)
    | ((QuoteUpdateBodyTransferDataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * QuoteUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBody = {
  application_fee_amount?: (number | string) | undefined;
  application_fee_percent?: (number | string) | undefined;
  automatic_tax?: External$QuoteUpdateBodyAutomaticTax | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  customer?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (External$QuoteUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  expires_at?: number | undefined;
  footer?: (string | string) | undefined;
  header?: (string | string) | undefined;
  invoice_settings?: External$QuoteUpdateBodyInvoiceSettings | undefined;
  line_items?: External$QuoteUpdateBodyLineItemsItem[] | undefined;
  metadata?: External$QuoteUpdateBodyMetadata | undefined;
  on_behalf_of?: (string | string) | undefined;
  subscription_data?: External$QuoteUpdateBodySubscriptionData | undefined;
  transfer_data?:
    | (External$QuoteUpdateBodyTransferDataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | ((number | string) | undefined)
    | ((number | string) | undefined)
    | (External$QuoteUpdateBodyAutomaticTax | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | ((string | string) | undefined)
    | ((External$QuoteUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (number | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | (External$QuoteUpdateBodyInvoiceSettings | undefined)
    | (External$QuoteUpdateBodyLineItemsItem[] | undefined)
    | (External$QuoteUpdateBodyMetadata | undefined)
    | ((string | string) | undefined)
    | (External$QuoteUpdateBodySubscriptionData | undefined)
    | ((External$QuoteUpdateBodyTransferDataObj0 | string) | undefined)
    | External$QuoteUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBody
 */
const SchemaIn$QuoteUpdateBody: z.ZodType<
  QuoteUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application_fee_amount: z.union([z.number().int(), z.string()]).optional(),
    application_fee_percent: z.union([z.number(), z.string()]).optional(),
    automatic_tax: Schemas$QuoteUpdateBodyAutomaticTax.in.optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([z.array(Schemas$QuoteUpdateBodyDiscountsArr0Item.in), z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    expires_at: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoice_settings: Schemas$QuoteUpdateBodyInvoiceSettings.in.optional(),
    line_items: z.array(Schemas$QuoteUpdateBodyLineItemsItem.in).optional(),
    metadata: Schemas$QuoteUpdateBodyMetadata.in.optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    subscription_data: Schemas$QuoteUpdateBodySubscriptionData.in.optional(),
    transfer_data: z
      .union([Schemas$QuoteUpdateBodyTransferDataObj0.in, z.string()])
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
      header: "header",
      invoice_settings: "invoiceSettings",
      line_items: "lineItems",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      subscription_data: "subscriptionData",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBody
 */
const SchemaOut$QuoteUpdateBody: z.ZodType<
  External$QuoteUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBody // the object to be transformed
> = z
  .object({
    applicationFeeAmount: z.union([z.number().int(), z.string()]).optional(),
    applicationFeePercent: z.union([z.number(), z.string()]).optional(),
    automaticTax: Schemas$QuoteUpdateBodyAutomaticTax.out.optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customer: z.string().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$QuoteUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    expiresAt: z.number().int().optional(),
    footer: z.union([z.string(), z.string()]).optional(),
    header: z.union([z.string(), z.string()]).optional(),
    invoiceSettings: Schemas$QuoteUpdateBodyInvoiceSettings.out.optional(),
    lineItems: z.array(Schemas$QuoteUpdateBodyLineItemsItem.out).optional(),
    metadata: Schemas$QuoteUpdateBodyMetadata.out.optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    subscriptionData: Schemas$QuoteUpdateBodySubscriptionData.out.optional(),
    transferData: z
      .union([Schemas$QuoteUpdateBodyTransferDataObj0.out, z.string()])
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
      header: "header",
      invoiceSettings: "invoice_settings",
      lineItems: "line_items",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      subscriptionData: "subscription_data",
      transferData: "transfer_data",
    });
  });

export const Schemas$QuoteUpdateBody = {
  in: SchemaIn$QuoteUpdateBody,
  out: SchemaOut$QuoteUpdateBody,
};
