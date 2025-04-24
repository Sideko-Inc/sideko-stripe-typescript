import {
  External$InvoiceCreateBodyAutomaticTax,
  InvoiceCreateBodyAutomaticTax,
  Schemas$InvoiceCreateBodyAutomaticTax,
} from "./invoice-create-body-automatic-tax";
import {
  External$InvoiceCreateBodyCustomFieldsArr0Item,
  InvoiceCreateBodyCustomFieldsArr0Item,
  Schemas$InvoiceCreateBodyCustomFieldsArr0Item,
} from "./invoice-create-body-custom-fields-arr0-item";
import {
  External$InvoiceCreateBodyDiscountsArr0Item,
  InvoiceCreateBodyDiscountsArr0Item,
  Schemas$InvoiceCreateBodyDiscountsArr0Item,
} from "./invoice-create-body-discounts-arr0-item";
import {
  External$InvoiceCreateBodyFromInvoice,
  InvoiceCreateBodyFromInvoice,
  Schemas$InvoiceCreateBodyFromInvoice,
} from "./invoice-create-body-from-invoice";
import {
  External$InvoiceCreateBodyIssuer,
  InvoiceCreateBodyIssuer,
  Schemas$InvoiceCreateBodyIssuer,
} from "./invoice-create-body-issuer";
import {
  External$InvoiceCreateBodyMetadataObj0,
  InvoiceCreateBodyMetadataObj0,
  Schemas$InvoiceCreateBodyMetadataObj0,
} from "./invoice-create-body-metadata-obj0";
import {
  External$InvoiceCreateBodyPaymentSettings,
  InvoiceCreateBodyPaymentSettings,
  Schemas$InvoiceCreateBodyPaymentSettings,
} from "./invoice-create-body-payment-settings";
import {
  External$InvoiceCreateBodyRendering,
  InvoiceCreateBodyRendering,
  Schemas$InvoiceCreateBodyRendering,
} from "./invoice-create-body-rendering";
import {
  External$InvoiceCreateBodyShippingCost,
  InvoiceCreateBodyShippingCost,
  Schemas$InvoiceCreateBodyShippingCost,
} from "./invoice-create-body-shipping-cost";
import {
  External$InvoiceCreateBodyShippingDetails,
  InvoiceCreateBodyShippingDetails,
  Schemas$InvoiceCreateBodyShippingDetails,
} from "./invoice-create-body-shipping-details";
import {
  External$InvoiceCreateBodyTransferData,
  InvoiceCreateBodyTransferData,
  Schemas$InvoiceCreateBodyTransferData,
} from "./invoice-create-body-transfer-data";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBody
 */
export type InvoiceCreateBody = {
  /**
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: (string[] | string) | undefined;
  /**
   * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
   */
  applicationFeeAmount?: number | undefined;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action.
   */
  autoAdvance?: boolean | undefined;
  /**
   * Settings for automatic tax lookup for this invoice.
   */
  automaticTax?: InvoiceCreateBodyAutomaticTax | undefined;
  /**
   * The time when this invoice should be scheduled to finalize. The invoice will be finalized at this time if it is still in draft state.
   */
  automaticallyFinalizesAt?: number | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * The currency to create this invoice in. Defaults to that of `customer` if not specified.
   */
  currency?: string | undefined;
  /**
   * A list of up to 4 custom fields to be displayed on the invoice.
   */
  customFields?: (InvoiceCreateBodyCustomFieldsArr0Item[] | string) | undefined;
  /**
   * The ID of the customer who will be billed.
   */
  customer?: string | undefined;
  /**
   * The number of days from when the invoice is created until it is due. Valid only for invoices where `collection_method=send_invoice`.
   */
  daysUntilDue?: number | undefined;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: string | undefined;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: string | undefined;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  defaultTaxRates?: string[] | undefined;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string | undefined;
  /**
   * The coupons and promotion codes to redeem into discounts for the invoice. If not specified, inherits the discount from the invoice's customer. Pass an empty string to avoid inheriting any discounts.
   */
  discounts?: (InvoiceCreateBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * The date on which payment for this invoice is due. Valid only for invoices where `collection_method=send_invoice`.
   */
  dueDate?: number | undefined;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Footer to be displayed on the invoice.
   */
  footer?: string | undefined;
  /**
   * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
   */
  fromInvoice?: InvoiceCreateBodyFromInvoice | undefined;
  /**
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: InvoiceCreateBodyIssuer | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (InvoiceCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
   */
  number?: string | undefined;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: string | undefined;
  /**
   * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
   */
  paymentSettings?: InvoiceCreateBodyPaymentSettings | undefined;
  /**
   * How to handle pending invoice items on invoice creation. Defaults to `exclude` if the parameter is omitted.
   */
  pendingInvoiceItemsBehavior?: ("exclude" | "include") | undefined;
  /**
   * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
   */
  rendering?: InvoiceCreateBodyRendering | undefined;
  /**
   * Settings for the cost of shipping for this invoice.
   */
  shippingCost?: InvoiceCreateBodyShippingCost | undefined;
  /**
   * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
   */
  shippingDetails?: InvoiceCreateBodyShippingDetails | undefined;
  /**
   * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
   */
  statementDescriptor?: string | undefined;
  /**
   * The ID of the subscription to invoice, if any. If set, the created invoice will only include pending invoice items for that subscription. The subscription's billing cycle and regular subscription events won't be affected.
   */
  subscription?: string | undefined;
  /**
   * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
   */
  transferData?: InvoiceCreateBodyTransferData | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((string[] | string) | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | (InvoiceCreateBodyAutomaticTax | undefined)
    | (number | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | ((InvoiceCreateBodyCustomFieldsArr0Item[] | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((InvoiceCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (number | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (InvoiceCreateBodyFromInvoice | undefined)
    | (InvoiceCreateBodyIssuer | undefined)
    | ((InvoiceCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (InvoiceCreateBodyPaymentSettings | undefined)
    | (("exclude" | "include") | undefined)
    | (InvoiceCreateBodyRendering | undefined)
    | (InvoiceCreateBodyShippingCost | undefined)
    | (InvoiceCreateBodyShippingDetails | undefined)
    | (string | undefined)
    | (string | undefined)
    | (InvoiceCreateBodyTransferData | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoiceCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBody = {
  account_tax_ids?: (string[] | string) | undefined;
  application_fee_amount?: number | undefined;
  auto_advance?: boolean | undefined;
  automatic_tax?: External$InvoiceCreateBodyAutomaticTax | undefined;
  automatically_finalizes_at?: number | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  currency?: string | undefined;
  custom_fields?:
    | (External$InvoiceCreateBodyCustomFieldsArr0Item[] | string)
    | undefined;
  customer?: string | undefined;
  days_until_due?: number | undefined;
  default_payment_method?: string | undefined;
  default_source?: string | undefined;
  default_tax_rates?: string[] | undefined;
  description?: string | undefined;
  discounts?:
    | (External$InvoiceCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  due_date?: number | undefined;
  effective_at?: number | undefined;
  expand?: string[] | undefined;
  footer?: string | undefined;
  from_invoice?: External$InvoiceCreateBodyFromInvoice | undefined;
  issuer?: External$InvoiceCreateBodyIssuer | undefined;
  metadata?: (External$InvoiceCreateBodyMetadataObj0 | string) | undefined;
  number?: string | undefined;
  on_behalf_of?: string | undefined;
  payment_settings?: External$InvoiceCreateBodyPaymentSettings | undefined;
  pending_invoice_items_behavior?: ("exclude" | "include") | undefined;
  rendering?: External$InvoiceCreateBodyRendering | undefined;
  shipping_cost?: External$InvoiceCreateBodyShippingCost | undefined;
  shipping_details?: External$InvoiceCreateBodyShippingDetails | undefined;
  statement_descriptor?: string | undefined;
  subscription?: string | undefined;
  transfer_data?: External$InvoiceCreateBodyTransferData | undefined;

  [additionalProperty: string]:
    | ((string[] | string) | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | (External$InvoiceCreateBodyAutomaticTax | undefined)
    | (number | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | ((External$InvoiceCreateBodyCustomFieldsArr0Item[] | string) | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | ((External$InvoiceCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (number | undefined)
    | (number | undefined)
    | (string[] | undefined)
    | (string | undefined)
    | (External$InvoiceCreateBodyFromInvoice | undefined)
    | (External$InvoiceCreateBodyIssuer | undefined)
    | ((External$InvoiceCreateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$InvoiceCreateBodyPaymentSettings | undefined)
    | (("exclude" | "include") | undefined)
    | (External$InvoiceCreateBodyRendering | undefined)
    | (External$InvoiceCreateBodyShippingCost | undefined)
    | (External$InvoiceCreateBodyShippingDetails | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$InvoiceCreateBodyTransferData | undefined)
    | External$InvoiceCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBody
 */
const SchemaIn$InvoiceCreateBody: z.ZodType<
  InvoiceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account_tax_ids: z.union([z.array(z.string()), z.string()]).optional(),
    application_fee_amount: z.number().int().optional(),
    auto_advance: z.boolean().optional(),
    automatic_tax: Schemas$InvoiceCreateBodyAutomaticTax.in.optional(),
    automatically_finalizes_at: z.number().int().optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    custom_fields: z
      .union([
        z.array(Schemas$InvoiceCreateBodyCustomFieldsArr0Item.in),
        z.string(),
      ])
      .optional(),
    customer: z.string().optional(),
    days_until_due: z.number().int().optional(),
    default_payment_method: z.string().optional(),
    default_source: z.string().optional(),
    default_tax_rates: z.array(z.string()).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceCreateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    due_date: z.number().int().optional(),
    effective_at: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    from_invoice: Schemas$InvoiceCreateBodyFromInvoice.in.optional(),
    issuer: Schemas$InvoiceCreateBodyIssuer.in.optional(),
    metadata: z
      .union([Schemas$InvoiceCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    number: z.string().optional(),
    on_behalf_of: z.string().optional(),
    payment_settings: Schemas$InvoiceCreateBodyPaymentSettings.in.optional(),
    pending_invoice_items_behavior: z.enum(["exclude", "include"]).optional(),
    rendering: Schemas$InvoiceCreateBodyRendering.in.optional(),
    shipping_cost: Schemas$InvoiceCreateBodyShippingCost.in.optional(),
    shipping_details: Schemas$InvoiceCreateBodyShippingDetails.in.optional(),
    statement_descriptor: z.string().optional(),
    subscription: z.string().optional(),
    transfer_data: Schemas$InvoiceCreateBodyTransferData.in.optional(),
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
      currency: "currency",
      custom_fields: "customFields",
      customer: "customer",
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
      from_invoice: "fromInvoice",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      on_behalf_of: "onBehalfOf",
      payment_settings: "paymentSettings",
      pending_invoice_items_behavior: "pendingInvoiceItemsBehavior",
      rendering: "rendering",
      shipping_cost: "shippingCost",
      shipping_details: "shippingDetails",
      statement_descriptor: "statementDescriptor",
      subscription: "subscription",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBody
 */
const SchemaOut$InvoiceCreateBody: z.ZodType<
  External$InvoiceCreateBody, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBody // the object to be transformed
> = z
  .object({
    accountTaxIds: z.union([z.array(z.string()), z.string()]).optional(),
    applicationFeeAmount: z.number().int().optional(),
    autoAdvance: z.boolean().optional(),
    automaticTax: Schemas$InvoiceCreateBodyAutomaticTax.out.optional(),
    automaticallyFinalizesAt: z.number().int().optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    customFields: z
      .union([
        z.array(Schemas$InvoiceCreateBodyCustomFieldsArr0Item.out),
        z.string(),
      ])
      .optional(),
    customer: z.string().optional(),
    daysUntilDue: z.number().int().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultSource: z.string().optional(),
    defaultTaxRates: z.array(z.string()).optional(),
    description: z.string().optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoiceCreateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    dueDate: z.number().int().optional(),
    effectiveAt: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    footer: z.string().optional(),
    fromInvoice: Schemas$InvoiceCreateBodyFromInvoice.out.optional(),
    issuer: Schemas$InvoiceCreateBodyIssuer.out.optional(),
    metadata: z
      .union([Schemas$InvoiceCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    number: z.string().optional(),
    onBehalfOf: z.string().optional(),
    paymentSettings: Schemas$InvoiceCreateBodyPaymentSettings.out.optional(),
    pendingInvoiceItemsBehavior: z.enum(["exclude", "include"]).optional(),
    rendering: Schemas$InvoiceCreateBodyRendering.out.optional(),
    shippingCost: Schemas$InvoiceCreateBodyShippingCost.out.optional(),
    shippingDetails: Schemas$InvoiceCreateBodyShippingDetails.out.optional(),
    statementDescriptor: z.string().optional(),
    subscription: z.string().optional(),
    transferData: Schemas$InvoiceCreateBodyTransferData.out.optional(),
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
      currency: "currency",
      customFields: "custom_fields",
      customer: "customer",
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
      fromInvoice: "from_invoice",
      issuer: "issuer",
      metadata: "metadata",
      number: "number",
      onBehalfOf: "on_behalf_of",
      paymentSettings: "payment_settings",
      pendingInvoiceItemsBehavior: "pending_invoice_items_behavior",
      rendering: "rendering",
      shippingCost: "shipping_cost",
      shippingDetails: "shipping_details",
      statementDescriptor: "statement_descriptor",
      subscription: "subscription",
      transferData: "transfer_data",
    });
  });

export const Schemas$InvoiceCreateBody = {
  in: SchemaIn$InvoiceCreateBody,
  out: SchemaOut$InvoiceCreateBody,
};
