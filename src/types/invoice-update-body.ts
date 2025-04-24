import {
  External$InvoiceUpdateBodyAutomaticTax,
  InvoiceUpdateBodyAutomaticTax,
  Schemas$InvoiceUpdateBodyAutomaticTax,
} from "./invoice-update-body-automatic-tax";
import {
  External$InvoiceUpdateBodyCustomFieldsArr0Item,
  InvoiceUpdateBodyCustomFieldsArr0Item,
  Schemas$InvoiceUpdateBodyCustomFieldsArr0Item,
} from "./invoice-update-body-custom-fields-arr0-item";
import {
  External$InvoiceUpdateBodyDiscountsArr0Item,
  InvoiceUpdateBodyDiscountsArr0Item,
  Schemas$InvoiceUpdateBodyDiscountsArr0Item,
} from "./invoice-update-body-discounts-arr0-item";
import {
  External$InvoiceUpdateBodyIssuer,
  InvoiceUpdateBodyIssuer,
  Schemas$InvoiceUpdateBodyIssuer,
} from "./invoice-update-body-issuer";
import {
  External$InvoiceUpdateBodyMetadataObj0,
  InvoiceUpdateBodyMetadataObj0,
  Schemas$InvoiceUpdateBodyMetadataObj0,
} from "./invoice-update-body-metadata-obj0";
import {
  External$InvoiceUpdateBodyPaymentSettings,
  InvoiceUpdateBodyPaymentSettings,
  Schemas$InvoiceUpdateBodyPaymentSettings,
} from "./invoice-update-body-payment-settings";
import {
  External$InvoiceUpdateBodyRendering,
  InvoiceUpdateBodyRendering,
  Schemas$InvoiceUpdateBodyRendering,
} from "./invoice-update-body-rendering";
import {
  External$InvoiceUpdateBodyShippingCostObj0,
  InvoiceUpdateBodyShippingCostObj0,
  Schemas$InvoiceUpdateBodyShippingCostObj0,
} from "./invoice-update-body-shipping-cost-obj0";
import {
  External$InvoiceUpdateBodyShippingDetailsObj0,
  InvoiceUpdateBodyShippingDetailsObj0,
  Schemas$InvoiceUpdateBodyShippingDetailsObj0,
} from "./invoice-update-body-shipping-details-obj0";
import {
  External$InvoiceUpdateBodyTransferDataObj0,
  InvoiceUpdateBodyTransferDataObj0,
  Schemas$InvoiceUpdateBodyTransferDataObj0,
} from "./invoice-update-body-transfer-data-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBody
 */
export type InvoiceUpdateBody = {
  /**
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: (string[] | string) | undefined;
  /**
   * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice.
   */
  autoAdvance?: boolean | undefined;
  /**
   * Settings for automatic tax lookup for this invoice.
   */
  automaticTax?: InvoiceUpdateBodyAutomaticTax | undefined;
  /**
   * The time when this invoice should be scheduled to finalize. The invoice will be finalized at this time if it is still in draft state. To turn off automatic finalization, set `auto_advance` to false.
   */
  automaticallyFinalizesAt?: number | undefined;
  /**
   * Either `charge_automatically` or `send_invoice`. This field can be updated only on `draft` invoices.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * A list of up to 4 custom fields to be displayed on the invoice. If a value for `custom_fields` is specified, the list specified will replace the existing custom field list on this invoice. Pass an empty string to remove previously-defined fields.
   */
  customFields?: (InvoiceUpdateBodyCustomFieldsArr0Item[] | string) | undefined;
  /**
   * The number of days from which the invoice is created until it is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
   */
  daysUntilDue?: number | undefined;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: string | undefined;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: (string | string) | undefined;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set. Pass an empty string to remove previously-defined tax rates.
   */
  defaultTaxRates?: (string[] | string) | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string | undefined;
  /**
   * The discounts that will apply to the invoice. Pass an empty string to remove previously-defined discounts.
   */
  discounts?: (InvoiceUpdateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * The date on which payment for this invoice is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
   */
  dueDate?: number | undefined;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: (number | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Footer to be displayed on the invoice.
   */
  footer?: string | undefined;
  /**
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: InvoiceUpdateBodyIssuer | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (InvoiceUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
   */
  number?: (string | string) | undefined;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
   */
  paymentSettings?: InvoiceUpdateBodyPaymentSettings | undefined;
  /**
   * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
   */
  rendering?: InvoiceUpdateBodyRendering | undefined;
  /**
   * Settings for the cost of shipping for this invoice.
   */
  shippingCost?: (InvoiceUpdateBodyShippingCostObj0 | string) | undefined;
  /**
   * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
   */
  shippingDetails?: (InvoiceUpdateBodyShippingDetailsObj0 | string) | undefined;
  /**
   * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
   */
  statementDescriptor?: string | undefined;
  /**
   * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. This will be unset if you POST an empty value.
   */
  transferData?: (InvoiceUpdateBodyTransferDataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((string[] | string) | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | (InvoiceUpdateBodyAutomaticTax | undefined)
    | (number | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | ((InvoiceUpdateBodyCustomFieldsArr0Item[] | string) | undefined)
    | (number | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | ((string[] | string) | undefined)
    | (string | undefined)
    | ((InvoiceUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (number | undefined)
    | ((number | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (InvoiceUpdateBodyIssuer | undefined)
    | ((InvoiceUpdateBodyMetadataObj0 | string) | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | (InvoiceUpdateBodyPaymentSettings | undefined)
    | (InvoiceUpdateBodyRendering | undefined)
    | ((InvoiceUpdateBodyShippingCostObj0 | string) | undefined)
    | ((InvoiceUpdateBodyShippingDetailsObj0 | string) | undefined)
    | (string | undefined)
    | ((InvoiceUpdateBodyTransferDataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBody = {
  account_tax_ids?: (string[] | string) | undefined;
  application_fee_amount?: number | undefined;
  auto_advance?: boolean | undefined;
  automatic_tax?: External$InvoiceUpdateBodyAutomaticTax | undefined;
  automatically_finalizes_at?: number | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  custom_fields?:
    | (External$InvoiceUpdateBodyCustomFieldsArr0Item[] | string)
    | undefined;
  days_until_due?: number | undefined;
  default_payment_method?: string | undefined;
  default_source?: (string | string) | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: string | undefined;
  discounts?:
    | (External$InvoiceUpdateBodyDiscountsArr0Item[] | string)
    | undefined;
  due_date?: number | undefined;
  effective_at?: (number | string) | undefined;
  expand?: string[] | undefined;
  footer?: string | undefined;
  issuer?: External$InvoiceUpdateBodyIssuer | undefined;
  metadata?: (External$InvoiceUpdateBodyMetadataObj0 | string) | undefined;
  number?: (string | string) | undefined;
  on_behalf_of?: (string | string) | undefined;
  payment_settings?: External$InvoiceUpdateBodyPaymentSettings | undefined;
  rendering?: External$InvoiceUpdateBodyRendering | undefined;
  shipping_cost?:
    | (External$InvoiceUpdateBodyShippingCostObj0 | string)
    | undefined;
  shipping_details?:
    | (External$InvoiceUpdateBodyShippingDetailsObj0 | string)
    | undefined;
  statement_descriptor?: string | undefined;
  transfer_data?:
    | (External$InvoiceUpdateBodyTransferDataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | ((string[] | string) | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | (External$InvoiceUpdateBodyAutomaticTax | undefined)
    | (number | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | ((External$InvoiceUpdateBodyCustomFieldsArr0Item[] | string) | undefined)
    | (number | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | ((string[] | string) | undefined)
    | (string | undefined)
    | ((External$InvoiceUpdateBodyDiscountsArr0Item[] | string) | undefined)
    | (number | undefined)
    | ((number | string) | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$InvoiceUpdateBodyIssuer | undefined)
    | ((External$InvoiceUpdateBodyMetadataObj0 | string) | undefined)
    | ((string | string) | undefined)
    | ((string | string) | undefined)
    | (External$InvoiceUpdateBodyPaymentSettings | undefined)
    | (External$InvoiceUpdateBodyRendering | undefined)
    | ((External$InvoiceUpdateBodyShippingCostObj0 | string) | undefined)
    | ((External$InvoiceUpdateBodyShippingDetailsObj0 | string) | undefined)
    | (string | undefined)
    | ((External$InvoiceUpdateBodyTransferDataObj0 | string) | undefined)
    | External$InvoiceUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBody
 */
const SchemaIn$InvoiceUpdateBody: z.ZodType<
  InvoiceUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    application_fee_amount: z.number().int().optional(),
    auto_advance: z.boolean().optional(),
    automatic_tax: Schemas$InvoiceUpdateBodyAutomaticTax.in.optional(),
    automatically_finalizes_at: z.number().int().optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    custom_fields: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyCustomFieldsArr0Item.in),
        z.string(),
      ])
      .optional(),
    days_until_due: z.number().int().optional(),
    default_payment_method: z.string().optional(),
    default_source: z.union([z.string(), z.string()]).optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    due_date: z.number().int().optional(),
    effective_at: z.union([z.number().int(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    issuer: Schemas$InvoiceUpdateBodyIssuer.in.optional(),
    metadata: z
      .union([Schemas$InvoiceUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    number: z.union([z.string(), z.string()]).optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    payment_settings: Schemas$InvoiceUpdateBodyPaymentSettings.in.optional(),
    rendering: Schemas$InvoiceUpdateBodyRendering.in.optional(),
    shipping_cost: z
      .union([Schemas$InvoiceUpdateBodyShippingCostObj0.in, z.string()])
      .optional(),
    shipping_details: z
      .union([Schemas$InvoiceUpdateBodyShippingDetailsObj0.in, z.string()])
      .optional(),
    statement_descriptor: z.string().optional(),
    transfer_data: z
      .union([Schemas$InvoiceUpdateBodyTransferDataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      account_tax_ids: "accountTaxIds",
      application_fee_amount: "applicationFeeAmount",
      auto_advance: "autoAdvance",
      automatic_tax: "automaticTax",
      automatically_finalizes_at: "automaticallyFinalizesAt",
      collection_method: "collectionMethod",
      custom_fields: "customFields",
      days_until_due: "daysUntilDue",
      default_payment_method: "defaultPaymentMethod",
      default_source: "defaultSource",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      due_date: "dueDate",
      effective_at: "effectiveAt",
      expand: "expand",
      footer: "footer",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      on_behalf_of: "onBehalfOf",
      payment_settings: "paymentSettings",
      rendering: "rendering",
      shipping_cost: "shippingCost",
      shipping_details: "shippingDetails",
      statement_descriptor: "statementDescriptor",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBody
 */
const SchemaOut$InvoiceUpdateBody: z.ZodType<
  External$InvoiceUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBody // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    applicationFeeAmount: z.number().int().optional(),
    autoAdvance: z.boolean().optional(),
    automaticTax: Schemas$InvoiceUpdateBodyAutomaticTax.out.optional(),
    automaticallyFinalizesAt: z.number().int().optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    customFields: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyCustomFieldsArr0Item.out),
        z.string(),
      ])
      .optional(),
    daysUntilDue: z.number().int().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultSource: z.union([z.string(), z.string()]).optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceUpdateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    dueDate: z.number().int().optional(),
    effectiveAt: z.union([z.number().int(), z.string()]).optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    issuer: Schemas$InvoiceUpdateBodyIssuer.out.optional(),
    metadata: z
      .union([Schemas$InvoiceUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    number: z.union([z.string(), z.string()]).optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    paymentSettings: Schemas$InvoiceUpdateBodyPaymentSettings.out.optional(),
    rendering: Schemas$InvoiceUpdateBodyRendering.out.optional(),
    shippingCost: z
      .union([Schemas$InvoiceUpdateBodyShippingCostObj0.out, z.string()])
      .optional(),
    shippingDetails: z
      .union([Schemas$InvoiceUpdateBodyShippingDetailsObj0.out, z.string()])
      .optional(),
    statementDescriptor: z.string().optional(),
    transferData: z
      .union([Schemas$InvoiceUpdateBodyTransferDataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      accountTaxIds: "account_tax_ids",
      applicationFeeAmount: "application_fee_amount",
      autoAdvance: "auto_advance",
      automaticTax: "automatic_tax",
      automaticallyFinalizesAt: "automatically_finalizes_at",
      collectionMethod: "collection_method",
      customFields: "custom_fields",
      daysUntilDue: "days_until_due",
      defaultPaymentMethod: "default_payment_method",
      defaultSource: "default_source",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      dueDate: "due_date",
      effectiveAt: "effective_at",
      expand: "expand",
      footer: "footer",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      onBehalfOf: "on_behalf_of",
      paymentSettings: "payment_settings",
      rendering: "rendering",
      shippingCost: "shipping_cost",
      shippingDetails: "shipping_details",
      statementDescriptor: "statement_descriptor",
      transferData: "transfer_data",
    });
  });

export const Schemas$InvoiceUpdateBody = {
  in: SchemaIn$InvoiceUpdateBody,
  out: SchemaOut$InvoiceUpdateBody,
};
