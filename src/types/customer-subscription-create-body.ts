import {
  CustomerSubscriptionCreateBodyAddInvoiceItemsItem,
  External$CustomerSubscriptionCreateBodyAddInvoiceItemsItem,
  Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItem,
} from "./customer-subscription-create-body-add-invoice-items-item";
import {
  CustomerSubscriptionCreateBodyAutomaticTax,
  External$CustomerSubscriptionCreateBodyAutomaticTax,
  Schemas$CustomerSubscriptionCreateBodyAutomaticTax,
} from "./customer-subscription-create-body-automatic-tax";
import {
  CustomerSubscriptionCreateBodyDiscountsArr0Item,
  External$CustomerSubscriptionCreateBodyDiscountsArr0Item,
  Schemas$CustomerSubscriptionCreateBodyDiscountsArr0Item,
} from "./customer-subscription-create-body-discounts-arr0-item";
import {
  CustomerSubscriptionCreateBodyInvoiceSettings,
  External$CustomerSubscriptionCreateBodyInvoiceSettings,
  Schemas$CustomerSubscriptionCreateBodyInvoiceSettings,
} from "./customer-subscription-create-body-invoice-settings";
import {
  CustomerSubscriptionCreateBodyItemsItem,
  External$CustomerSubscriptionCreateBodyItemsItem,
  Schemas$CustomerSubscriptionCreateBodyItemsItem,
} from "./customer-subscription-create-body-items-item";
import {
  CustomerSubscriptionCreateBodyMetadataObj0,
  External$CustomerSubscriptionCreateBodyMetadataObj0,
  Schemas$CustomerSubscriptionCreateBodyMetadataObj0,
} from "./customer-subscription-create-body-metadata-obj0";
import {
  CustomerSubscriptionCreateBodyPaymentSettings,
  External$CustomerSubscriptionCreateBodyPaymentSettings,
  Schemas$CustomerSubscriptionCreateBodyPaymentSettings,
} from "./customer-subscription-create-body-payment-settings";
import {
  CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0,
  External$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0,
  Schemas$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0,
} from "./customer-subscription-create-body-pending-invoice-item-interval-obj0";
import {
  CustomerSubscriptionCreateBodyTransferData,
  External$CustomerSubscriptionCreateBodyTransferData,
  Schemas$CustomerSubscriptionCreateBodyTransferData,
} from "./customer-subscription-create-body-transfer-data";
import {
  CustomerSubscriptionCreateBodyTrialSettings,
  External$CustomerSubscriptionCreateBodyTrialSettings,
  Schemas$CustomerSubscriptionCreateBodyTrialSettings,
} from "./customer-subscription-create-body-trial-settings";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBody
 */
export type CustomerSubscriptionCreateBody = {
  /**
   * A list of prices and quantities that will generate invoice items appended to the next invoice for this subscription. You may pass up to 20 items.
   */
  addInvoiceItems?:
    | CustomerSubscriptionCreateBodyAddInvoiceItemsItem[]
    | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
   */
  applicationFeePercent?: (number | string) | undefined;
  /**
   * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
   */
  automaticTax?: CustomerSubscriptionCreateBodyAutomaticTax | undefined;
  /**
   * For new subscriptions, a past timestamp to backdate the subscription's start date to. If set, the first invoice will contain a proration for the timespan between the start date and the current time. Can be combined with trials and the billing cycle anchor.
   */
  backdateStartDate?: number | undefined;
  /**
   * A future timestamp in UTC format to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). The anchor is the reference point that aligns future billing cycle dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals.
   */
  billingCycleAnchor?: number | undefined;
  /**
   * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
   */
  cancelAt?: number | undefined;
  /**
   * Indicate whether this subscription should cancel at the end of the current period (`current_period_end`). Defaults to `false`.
   */
  cancelAtPeriodEnd?: boolean | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string | undefined;
  /**
   * Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
   */
  daysUntilDue?: number | undefined;
  /**
   * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultPaymentMethod?: string | undefined;
  /**
   * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultSource?: string | undefined;
  /**
   * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
   */
  defaultTaxRates?: (string[] | string) | undefined;
  /**
   * The coupons to redeem into discounts for the subscription. If not specified or empty, inherits the discount from the subscription's customer.
   */
  discounts?:
    | (CustomerSubscriptionCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: CustomerSubscriptionCreateBodyInvoiceSettings | undefined;
  /**
   * A list of up to 20 subscription items, each with an attached price.
   */
  items?: CustomerSubscriptionCreateBodyItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CustomerSubscriptionCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).
   */
  offSession?: boolean | undefined;
  /**
   * Only applies to subscriptions with `collection_method=charge_automatically`.
   *
   * Use `allow_incomplete` to create Subscriptions with `status=incomplete` if the first invoice can't be paid. Creating Subscriptions with this status allows you to manage scenarios where additional customer actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
   *
   * Use `default_incomplete` to create Subscriptions with `status=incomplete` when the first invoice requires payment, otherwise start as active. Subscriptions transition to `status=active` when successfully confirming the PaymentIntent on the first invoice. This allows simpler management of scenarios where additional customer actions are needed to pay a subscription’s invoice, such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method. If the PaymentIntent is not confirmed within 23 hours Subscriptions transition to `status=incomplete_expired`, which is a terminal state.
   *
   * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's first invoice can't be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further customer action is needed, this parameter doesn't create a Subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
   *
   * `pending_if_incomplete` is only used with updates and cannot be passed when creating a Subscription.
   *
   * Subscriptions with `collection_method=send_invoice` are automatically activated regardless of the first Invoice status.
   */
  paymentBehavior?:
    | (
        | "allow_incomplete"
        | "default_incomplete"
        | "error_if_incomplete"
        | "pending_if_incomplete"
      )
    | undefined;
  /**
   * Payment settings to pass to invoices created by the subscription.
   */
  paymentSettings?: CustomerSubscriptionCreateBodyPaymentSettings | undefined;
  /**
   * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
   */
  pendingInvoiceItemInterval?:
    | (CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0 | string)
    | undefined;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) resulting from the `billing_cycle_anchor`. If no value is passed, the default is `create_prorations`.
   */
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  /**
   * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
   */
  transferData?: CustomerSubscriptionCreateBodyTransferData | undefined;
  /**
   * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialEnd?: ("now" | number) | undefined;
  /**
   * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialFromPlan?: boolean | undefined;
  /**
   * Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialPeriodDays?: number | undefined;
  /**
   * Settings related to subscription trials.
   */
  trialSettings?: CustomerSubscriptionCreateBodyTrialSettings | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (CustomerSubscriptionCreateBodyAddInvoiceItemsItem[] | undefined)
    | ((number | string) | undefined)
    | (CustomerSubscriptionCreateBodyAutomaticTax | undefined)
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | ((CustomerSubscriptionCreateBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (CustomerSubscriptionCreateBodyInvoiceSettings | undefined)
    | (CustomerSubscriptionCreateBodyItemsItem[] | undefined)
    | ((CustomerSubscriptionCreateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | (
        | (
            | "allow_incomplete"
            | "default_incomplete"
            | "error_if_incomplete"
            | "pending_if_incomplete"
          )
        | undefined
      )
    | (CustomerSubscriptionCreateBodyPaymentSettings | undefined)
    | (
        | (
            | CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0
            | string
          )
        | undefined
      )
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (CustomerSubscriptionCreateBodyTransferData | undefined)
    | (("now" | number) | undefined)
    | (boolean | undefined)
    | (number | undefined)
    | (CustomerSubscriptionCreateBodyTrialSettings | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBody = {
  add_invoice_items?:
    | External$CustomerSubscriptionCreateBodyAddInvoiceItemsItem[]
    | undefined;
  application_fee_percent?: (number | string) | undefined;
  automatic_tax?:
    | External$CustomerSubscriptionCreateBodyAutomaticTax
    | undefined;
  backdate_start_date?: number | undefined;
  billing_cycle_anchor?: number | undefined;
  cancel_at?: number | undefined;
  cancel_at_period_end?: boolean | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  currency?: string | undefined;
  days_until_due?: number | undefined;
  default_payment_method?: string | undefined;
  default_source?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  discounts?:
    | (External$CustomerSubscriptionCreateBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  invoice_settings?:
    | External$CustomerSubscriptionCreateBodyInvoiceSettings
    | undefined;
  items?: External$CustomerSubscriptionCreateBodyItemsItem[] | undefined;
  metadata?:
    | (External$CustomerSubscriptionCreateBodyMetadataObj0 | string)
    | undefined;
  off_session?: boolean | undefined;
  payment_behavior?:
    | (
        | "allow_incomplete"
        | "default_incomplete"
        | "error_if_incomplete"
        | "pending_if_incomplete"
      )
    | undefined;
  payment_settings?:
    | External$CustomerSubscriptionCreateBodyPaymentSettings
    | undefined;
  pending_invoice_item_interval?:
    | (
        | External$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0
        | string
      )
    | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  transfer_data?:
    | External$CustomerSubscriptionCreateBodyTransferData
    | undefined;
  trial_end?: ("now" | number) | undefined;
  trial_from_plan?: boolean | undefined;
  trial_period_days?: number | undefined;
  trial_settings?:
    | External$CustomerSubscriptionCreateBodyTrialSettings
    | undefined;

  [additionalProperty: string]:
    | (External$CustomerSubscriptionCreateBodyAddInvoiceItemsItem[] | undefined)
    | ((number | string) | undefined)
    | (External$CustomerSubscriptionCreateBodyAutomaticTax | undefined)
    | (number | undefined)
    | (number | undefined)
    | (number | undefined)
    | (boolean | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (string | undefined)
    | (number | undefined)
    | (string | undefined)
    | (string | undefined)
    | ((string[] | string) | undefined)
    | (
        | (External$CustomerSubscriptionCreateBodyDiscountsArr0Item[] | string)
        | undefined
      )
    | (string[] | undefined)
    | (External$CustomerSubscriptionCreateBodyInvoiceSettings | undefined)
    | (External$CustomerSubscriptionCreateBodyItemsItem[] | undefined)
    | (
        | (External$CustomerSubscriptionCreateBodyMetadataObj0 | string)
        | undefined
      )
    | (boolean | undefined)
    | (
        | (
            | "allow_incomplete"
            | "default_incomplete"
            | "error_if_incomplete"
            | "pending_if_incomplete"
          )
        | undefined
      )
    | (External$CustomerSubscriptionCreateBodyPaymentSettings | undefined)
    | (
        | (
            | External$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0
            | string
          )
        | undefined
      )
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (External$CustomerSubscriptionCreateBodyTransferData | undefined)
    | (("now" | number) | undefined)
    | (boolean | undefined)
    | (number | undefined)
    | (External$CustomerSubscriptionCreateBodyTrialSettings | undefined)
    | External$CustomerSubscriptionCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBody
 */
const SchemaIn$CustomerSubscriptionCreateBody: z.ZodType<
  CustomerSubscriptionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    add_invoice_items: z
      .array(Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItem.in)
      .optional(),
    application_fee_percent: z.union([z.number(), z.string()]).optional(),
    automatic_tax:
      Schemas$CustomerSubscriptionCreateBodyAutomaticTax.in.optional(),
    backdate_start_date: z.number().int().optional(),
    billing_cycle_anchor: z.number().int().optional(),
    cancel_at: z.number().int().optional(),
    cancel_at_period_end: z.boolean().optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    days_until_due: z.number().int().optional(),
    default_payment_method: z.string().optional(),
    default_source: z.string().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$CustomerSubscriptionCreateBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoice_settings:
      Schemas$CustomerSubscriptionCreateBodyInvoiceSettings.in.optional(),
    items: z
      .array(Schemas$CustomerSubscriptionCreateBodyItemsItem.in)
      .optional(),
    metadata: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    off_session: z.boolean().optional(),
    payment_behavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    payment_settings:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettings.in.optional(),
    pending_invoice_item_interval: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0.in,
        z.string(),
      ])
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    transfer_data:
      Schemas$CustomerSubscriptionCreateBodyTransferData.in.optional(),
    trial_end: z.union([z.enum(["now"]), z.number().int()]).optional(),
    trial_from_plan: z.boolean().optional(),
    trial_period_days: z.number().int().optional(),
    trial_settings:
      Schemas$CustomerSubscriptionCreateBodyTrialSettings.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      add_invoice_items: "addInvoiceItems",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      backdate_start_date: "backdateStartDate",
      billing_cycle_anchor: "billingCycleAnchor",
      cancel_at: "cancelAt",
      cancel_at_period_end: "cancelAtPeriodEnd",
      collection_method: "collectionMethod",
      currency: "currency",
      days_until_due: "daysUntilDue",
      default_payment_method: "defaultPaymentMethod",
      default_source: "defaultSource",
      default_tax_rates: "defaultTaxRates",
      discounts: "discounts",
      expand: "expand",
      invoice_settings: "invoiceSettings",
      items: "items",
      metadata: "metadata",
      off_session: "offSession",
      payment_behavior: "paymentBehavior",
      payment_settings: "paymentSettings",
      pending_invoice_item_interval: "pendingInvoiceItemInterval",
      proration_behavior: "prorationBehavior",
      transfer_data: "transferData",
      trial_end: "trialEnd",
      trial_from_plan: "trialFromPlan",
      trial_period_days: "trialPeriodDays",
      trial_settings: "trialSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBody
 */
const SchemaOut$CustomerSubscriptionCreateBody: z.ZodType<
  External$CustomerSubscriptionCreateBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBody // the object to be transformed
> = z
  .object({
    addInvoiceItems: z
      .array(Schemas$CustomerSubscriptionCreateBodyAddInvoiceItemsItem.out)
      .optional(),
    applicationFeePercent: z.union([z.number(), z.string()]).optional(),
    automaticTax:
      Schemas$CustomerSubscriptionCreateBodyAutomaticTax.out.optional(),
    backdateStartDate: z.number().int().optional(),
    billingCycleAnchor: z.number().int().optional(),
    cancelAt: z.number().int().optional(),
    cancelAtPeriodEnd: z.boolean().optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    daysUntilDue: z.number().int().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultSource: z.string().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$CustomerSubscriptionCreateBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoiceSettings:
      Schemas$CustomerSubscriptionCreateBodyInvoiceSettings.out.optional(),
    items: z
      .array(Schemas$CustomerSubscriptionCreateBodyItemsItem.out)
      .optional(),
    metadata: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    offSession: z.boolean().optional(),
    paymentBehavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    paymentSettings:
      Schemas$CustomerSubscriptionCreateBodyPaymentSettings.out.optional(),
    pendingInvoiceItemInterval: z
      .union([
        Schemas$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0.out,
        z.string(),
      ])
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    transferData:
      Schemas$CustomerSubscriptionCreateBodyTransferData.out.optional(),
    trialEnd: z.union([z.enum(["now"]), z.number().int()]).optional(),
    trialFromPlan: z.boolean().optional(),
    trialPeriodDays: z.number().int().optional(),
    trialSettings:
      Schemas$CustomerSubscriptionCreateBodyTrialSettings.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      addInvoiceItems: "add_invoice_items",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      backdateStartDate: "backdate_start_date",
      billingCycleAnchor: "billing_cycle_anchor",
      cancelAt: "cancel_at",
      cancelAtPeriodEnd: "cancel_at_period_end",
      collectionMethod: "collection_method",
      currency: "currency",
      daysUntilDue: "days_until_due",
      defaultPaymentMethod: "default_payment_method",
      defaultSource: "default_source",
      defaultTaxRates: "default_tax_rates",
      discounts: "discounts",
      expand: "expand",
      invoiceSettings: "invoice_settings",
      items: "items",
      metadata: "metadata",
      offSession: "off_session",
      paymentBehavior: "payment_behavior",
      paymentSettings: "payment_settings",
      pendingInvoiceItemInterval: "pending_invoice_item_interval",
      prorationBehavior: "proration_behavior",
      transferData: "transfer_data",
      trialEnd: "trial_end",
      trialFromPlan: "trial_from_plan",
      trialPeriodDays: "trial_period_days",
      trialSettings: "trial_settings",
    });
  });

export const Schemas$CustomerSubscriptionCreateBody = {
  in: SchemaIn$CustomerSubscriptionCreateBody,
  out: SchemaOut$CustomerSubscriptionCreateBody,
};
