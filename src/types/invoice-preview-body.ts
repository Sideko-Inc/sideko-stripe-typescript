import {
  External$InvoicePreviewBodyAutomaticTax,
  InvoicePreviewBodyAutomaticTax,
  Schemas$InvoicePreviewBodyAutomaticTax,
} from "./invoice-preview-body-automatic-tax";
import {
  External$InvoicePreviewBodyCustomerDetails,
  InvoicePreviewBodyCustomerDetails,
  Schemas$InvoicePreviewBodyCustomerDetails,
} from "./invoice-preview-body-customer-details";
import {
  External$InvoicePreviewBodyDiscountsArr0Item,
  InvoicePreviewBodyDiscountsArr0Item,
  Schemas$InvoicePreviewBodyDiscountsArr0Item,
} from "./invoice-preview-body-discounts-arr0-item";
import {
  External$InvoicePreviewBodyInvoiceItemsItem,
  InvoicePreviewBodyInvoiceItemsItem,
  Schemas$InvoicePreviewBodyInvoiceItemsItem,
} from "./invoice-preview-body-invoice-items-item";
import {
  External$InvoicePreviewBodyIssuer,
  InvoicePreviewBodyIssuer,
  Schemas$InvoicePreviewBodyIssuer,
} from "./invoice-preview-body-issuer";
import {
  External$InvoicePreviewBodyScheduleDetails,
  InvoicePreviewBodyScheduleDetails,
  Schemas$InvoicePreviewBodyScheduleDetails,
} from "./invoice-preview-body-schedule-details";
import {
  External$InvoicePreviewBodySubscriptionDetails,
  InvoicePreviewBodySubscriptionDetails,
  Schemas$InvoicePreviewBodySubscriptionDetails,
} from "./invoice-preview-body-subscription-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBody
 */
export type InvoicePreviewBody = {
  /**
   * Settings for automatic tax lookup for this invoice preview.
   */
  automaticTax?: InvoicePreviewBodyAutomaticTax | undefined;
  /**
   * The currency to preview this invoice in. Defaults to that of `customer` if not specified.
   */
  currency?: string | undefined;
  /**
   * The identifier of the customer whose upcoming invoice you'd like to retrieve. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
   */
  customer?: string | undefined;
  /**
   * Details about the customer you want to invoice or overrides for an existing customer. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
   */
  customerDetails?: InvoicePreviewBodyCustomerDetails | undefined;
  /**
   * The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the subscription or customer. This works for both coupons directly applied to an invoice and coupons applied to a subscription. Pass an empty string to avoid inheriting any discounts.
   */
  discounts?: (InvoicePreviewBodyDiscountsArr0Item[] | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * List of invoice items to add or update in the upcoming invoice preview (up to 250).
   */
  invoiceItems?: InvoicePreviewBodyInvoiceItemsItem[] | undefined;
  /**
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: InvoicePreviewBodyIssuer | undefined;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: (string | string) | undefined;
  /**
   * Customizes the types of values to include when calculating the invoice. Defaults to `next` if unspecified.
   */
  previewMode?: ("next" | "recurring") | undefined;
  /**
   * The identifier of the schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
   */
  schedule?: string | undefined;
  /**
   * The schedule creation or modification params to apply as a preview. Cannot be used with `subscription` or `subscription_` prefixed fields.
   */
  scheduleDetails?: InvoicePreviewBodyScheduleDetails | undefined;
  /**
   * The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_details.items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_details.items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
   */
  subscription?: string | undefined;
  /**
   * The subscription creation or modification params to apply as a preview. Cannot be used with `schedule` or `schedule_details` fields.
   */
  subscriptionDetails?: InvoicePreviewBodySubscriptionDetails | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (InvoicePreviewBodyAutomaticTax | undefined)
    | (string | undefined)
    | (string | undefined)
    | (InvoicePreviewBodyCustomerDetails | undefined)
    | ((InvoicePreviewBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (InvoicePreviewBodyInvoiceItemsItem[] | undefined)
    | (InvoicePreviewBodyIssuer | undefined)
    | ((string | string) | undefined)
    | (("next" | "recurring") | undefined)
    | (string | undefined)
    | (InvoicePreviewBodyScheduleDetails | undefined)
    | (string | undefined)
    | (InvoicePreviewBodySubscriptionDetails | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * InvoicePreviewBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBody = {
  automatic_tax?: External$InvoicePreviewBodyAutomaticTax | undefined;
  currency?: string | undefined;
  customer?: string | undefined;
  customer_details?: External$InvoicePreviewBodyCustomerDetails | undefined;
  discounts?:
    | (External$InvoicePreviewBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  invoice_items?: External$InvoicePreviewBodyInvoiceItemsItem[] | undefined;
  issuer?: External$InvoicePreviewBodyIssuer | undefined;
  on_behalf_of?: (string | string) | undefined;
  preview_mode?: ("next" | "recurring") | undefined;
  schedule?: string | undefined;
  schedule_details?: External$InvoicePreviewBodyScheduleDetails | undefined;
  subscription?: string | undefined;
  subscription_details?:
    | External$InvoicePreviewBodySubscriptionDetails
    | undefined;

  [additionalProperty: string]:
    | (External$InvoicePreviewBodyAutomaticTax | undefined)
    | (string | undefined)
    | (string | undefined)
    | (External$InvoicePreviewBodyCustomerDetails | undefined)
    | ((External$InvoicePreviewBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (External$InvoicePreviewBodyInvoiceItemsItem[] | undefined)
    | (External$InvoicePreviewBodyIssuer | undefined)
    | ((string | string) | undefined)
    | (("next" | "recurring") | undefined)
    | (string | undefined)
    | (External$InvoicePreviewBodyScheduleDetails | undefined)
    | (string | undefined)
    | (External$InvoicePreviewBodySubscriptionDetails | undefined)
    | External$InvoicePreviewBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBody
 */
const SchemaIn$InvoicePreviewBody: z.ZodType<
  InvoicePreviewBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    automatic_tax: Schemas$InvoicePreviewBodyAutomaticTax.in.optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    customer_details: Schemas$InvoicePreviewBodyCustomerDetails.in.optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoicePreviewBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoice_items: z
      .array(Schemas$InvoicePreviewBodyInvoiceItemsItem.in)
      .optional(),
    issuer: Schemas$InvoicePreviewBodyIssuer.in.optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    preview_mode: z.enum(["next", "recurring"]).optional(),
    schedule: z.string().optional(),
    schedule_details: Schemas$InvoicePreviewBodyScheduleDetails.in.optional(),
    subscription: z.string().optional(),
    subscription_details:
      Schemas$InvoicePreviewBodySubscriptionDetails.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      automatic_tax: "automaticTax",
      currency: "currency",
      customer: "customer",
      customer_details: "customerDetails",
      discounts: "discounts",
      expand: "expand",
      invoice_items: "invoiceItems",
      issuer: "issuer",
      on_behalf_of: "onBehalfOf",
      preview_mode: "previewMode",
      schedule: "schedule",
      schedule_details: "scheduleDetails",
      subscription: "subscription",
      subscription_details: "subscriptionDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBody
 */
const SchemaOut$InvoicePreviewBody: z.ZodType<
  External$InvoicePreviewBody, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBody // the object to be transformed
> = z
  .object({
    automaticTax: Schemas$InvoicePreviewBodyAutomaticTax.out.optional(),
    currency: z.string().optional(),
    customer: z.string().optional(),
    customerDetails: Schemas$InvoicePreviewBodyCustomerDetails.out.optional(),
    discounts: z
      .union([
        z.array(Schemas$InvoicePreviewBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoiceItems: z
      .array(Schemas$InvoicePreviewBodyInvoiceItemsItem.out)
      .optional(),
    issuer: Schemas$InvoicePreviewBodyIssuer.out.optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    previewMode: z.enum(["next", "recurring"]).optional(),
    schedule: z.string().optional(),
    scheduleDetails: Schemas$InvoicePreviewBodyScheduleDetails.out.optional(),
    subscription: z.string().optional(),
    subscriptionDetails:
      Schemas$InvoicePreviewBodySubscriptionDetails.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      automaticTax: "automatic_tax",
      currency: "currency",
      customer: "customer",
      customerDetails: "customer_details",
      discounts: "discounts",
      expand: "expand",
      invoiceItems: "invoice_items",
      issuer: "issuer",
      onBehalfOf: "on_behalf_of",
      previewMode: "preview_mode",
      schedule: "schedule",
      scheduleDetails: "schedule_details",
      subscription: "subscription",
      subscriptionDetails: "subscription_details",
    });
  });

export const Schemas$InvoicePreviewBody = {
  in: SchemaIn$InvoicePreviewBody,
  out: SchemaOut$InvoicePreviewBody,
};
