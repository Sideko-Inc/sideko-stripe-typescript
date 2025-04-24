import {
  CustomerSubscriptionModifyBodyAddInvoiceItemsItem,
  External$CustomerSubscriptionModifyBodyAddInvoiceItemsItem,
  Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItem,
} from "./customer-subscription-modify-body-add-invoice-items-item";
import {
  CustomerSubscriptionModifyBodyAutomaticTax,
  External$CustomerSubscriptionModifyBodyAutomaticTax,
  Schemas$CustomerSubscriptionModifyBodyAutomaticTax,
} from "./customer-subscription-modify-body-automatic-tax";
import {
  CustomerSubscriptionModifyBodyCancellationDetails,
  External$CustomerSubscriptionModifyBodyCancellationDetails,
  Schemas$CustomerSubscriptionModifyBodyCancellationDetails,
} from "./customer-subscription-modify-body-cancellation-details";
import {
  CustomerSubscriptionModifyBodyDiscountsArr0Item,
  External$CustomerSubscriptionModifyBodyDiscountsArr0Item,
  Schemas$CustomerSubscriptionModifyBodyDiscountsArr0Item,
} from "./customer-subscription-modify-body-discounts-arr0-item";
import {
  CustomerSubscriptionModifyBodyInvoiceSettings,
  External$CustomerSubscriptionModifyBodyInvoiceSettings,
  Schemas$CustomerSubscriptionModifyBodyInvoiceSettings,
} from "./customer-subscription-modify-body-invoice-settings";
import {
  CustomerSubscriptionModifyBodyItemsItem,
  External$CustomerSubscriptionModifyBodyItemsItem,
  Schemas$CustomerSubscriptionModifyBodyItemsItem,
} from "./customer-subscription-modify-body-items-item";
import {
  CustomerSubscriptionModifyBodyMetadataObj0,
  External$CustomerSubscriptionModifyBodyMetadataObj0,
  Schemas$CustomerSubscriptionModifyBodyMetadataObj0,
} from "./customer-subscription-modify-body-metadata-obj0";
import {
  CustomerSubscriptionModifyBodyPauseCollectionObj0,
  External$CustomerSubscriptionModifyBodyPauseCollectionObj0,
  Schemas$CustomerSubscriptionModifyBodyPauseCollectionObj0,
} from "./customer-subscription-modify-body-pause-collection-obj0";
import {
  CustomerSubscriptionModifyBodyPaymentSettings,
  External$CustomerSubscriptionModifyBodyPaymentSettings,
  Schemas$CustomerSubscriptionModifyBodyPaymentSettings,
} from "./customer-subscription-modify-body-payment-settings";
import {
  CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0,
  External$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0,
  Schemas$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0,
} from "./customer-subscription-modify-body-pending-invoice-item-interval-obj0";
import {
  CustomerSubscriptionModifyBodyTransferDataObj0,
  External$CustomerSubscriptionModifyBodyTransferDataObj0,
  Schemas$CustomerSubscriptionModifyBodyTransferDataObj0,
} from "./customer-subscription-modify-body-transfer-data-obj0";
import {
  CustomerSubscriptionModifyBodyTrialSettings,
  External$CustomerSubscriptionModifyBodyTrialSettings,
  Schemas$CustomerSubscriptionModifyBodyTrialSettings,
} from "./customer-subscription-modify-body-trial-settings";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBody
 */
export type CustomerSubscriptionModifyBody = {
  /**
   * A list of prices and quantities that will generate invoice items appended to the next invoice for this subscription. You may pass up to 20 items.
   */
  addInvoiceItems?:
    | CustomerSubscriptionModifyBodyAddInvoiceItemsItem[]
    | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
   */
  applicationFeePercent?: (number | string) | undefined;
  /**
   * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
   */
  automaticTax?: CustomerSubscriptionModifyBodyAutomaticTax | undefined;
  /**
   * Either `now` or `unchanged`. Setting the value to `now` resets the subscription's billing cycle anchor to the current time. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor?: ("now" | "unchanged") | undefined;
  /**
   * A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
   */
  cancelAt?: (number | string) | undefined;
  /**
   * Indicate whether this subscription should cancel at the end of the current period (`current_period_end`). Defaults to `false`.
   */
  cancelAtPeriodEnd?: boolean | undefined;
  /**
   * Details about why this subscription was cancelled
   */
  cancellationDetails?:
    | CustomerSubscriptionModifyBodyCancellationDetails
    | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
   */
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
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
  defaultSource?: (string | string) | undefined;
  /**
   * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription. Pass an empty string to remove previously-defined tax rates.
   */
  defaultTaxRates?: (string[] | string) | undefined;
  /**
   * The coupons to redeem into discounts for the subscription. If not specified or empty, inherits the discount from the subscription's customer.
   */
  discounts?:
    | (CustomerSubscriptionModifyBodyDiscountsArr0Item[] | string)
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * All invoices will be billed using the specified settings.
   */
  invoiceSettings?: CustomerSubscriptionModifyBodyInvoiceSettings | undefined;
  /**
   * A list of up to 20 subscription items, each with an attached price.
   */
  items?: CustomerSubscriptionModifyBodyItemsItem[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CustomerSubscriptionModifyBodyMetadataObj0 | string) | undefined;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).
   */
  offSession?: boolean | undefined;
  /**
   * If specified, payment collection for this subscription will be paused. Note that the subscription status will be unchanged and will not be updated to `paused`. Learn more about [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment).
   */
  pauseCollection?:
    | (CustomerSubscriptionModifyBodyPauseCollectionObj0 | string)
    | undefined;
  /**
   * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
   *
   * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription’s invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
   *
   * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
   *
   * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
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
  paymentSettings?: CustomerSubscriptionModifyBodyPaymentSettings | undefined;
  /**
   * Specifies an interval for how often to bill for any pending invoice items. It is analogous to calling [Create an invoice](https://stripe.com/docs/api#create_invoice) for the given subscription at the specified interval.
   */
  pendingInvoiceItemInterval?:
    | (CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0 | string)
    | undefined;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
   */
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  /**
   * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the same proration that was previewed with [upcoming invoice](https://stripe.com/docs/api#upcoming_invoice) endpoint. It can also be used to implement custom proration logic, such as prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
   */
  prorationDate?: number | undefined;
  /**
   * If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges. This will be unset if you POST an empty value.
   */
  transferData?:
    | (CustomerSubscriptionModifyBodyTransferDataObj0 | string)
    | undefined;
  /**
   * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. This will always overwrite any trials that might apply via a subscribed plan. If set, trial_end will override the default trial period of the plan the customer is being subscribed to. The special value `now` can be provided to end the customer's trial immediately. Can be at most two years from `billing_cycle_anchor`.
   */
  trialEnd?: ("now" | number) | undefined;
  /**
   * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
   */
  trialFromPlan?: boolean | undefined;
  /**
   * Settings related to subscription trials.
   */
  trialSettings?: CustomerSubscriptionModifyBodyTrialSettings | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (CustomerSubscriptionModifyBodyAddInvoiceItemsItem[] | undefined)
    | ((number | string) | undefined)
    | (CustomerSubscriptionModifyBodyAutomaticTax | undefined)
    | (("now" | "unchanged") | undefined)
    | ((number | string) | undefined)
    | (boolean | undefined)
    | (CustomerSubscriptionModifyBodyCancellationDetails | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (number | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | ((string[] | string) | undefined)
    | ((CustomerSubscriptionModifyBodyDiscountsArr0Item[] | string) | undefined)
    | (string[] | undefined)
    | (CustomerSubscriptionModifyBodyInvoiceSettings | undefined)
    | (CustomerSubscriptionModifyBodyItemsItem[] | undefined)
    | ((CustomerSubscriptionModifyBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | ((CustomerSubscriptionModifyBodyPauseCollectionObj0 | string) | undefined)
    | (
        | (
            | "allow_incomplete"
            | "default_incomplete"
            | "error_if_incomplete"
            | "pending_if_incomplete"
          )
        | undefined
      )
    | (CustomerSubscriptionModifyBodyPaymentSettings | undefined)
    | (
        | (
            | CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0
            | string
          )
        | undefined
      )
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | ((CustomerSubscriptionModifyBodyTransferDataObj0 | string) | undefined)
    | (("now" | number) | undefined)
    | (boolean | undefined)
    | (CustomerSubscriptionModifyBodyTrialSettings | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBody = {
  add_invoice_items?:
    | External$CustomerSubscriptionModifyBodyAddInvoiceItemsItem[]
    | undefined;
  application_fee_percent?: (number | string) | undefined;
  automatic_tax?:
    | External$CustomerSubscriptionModifyBodyAutomaticTax
    | undefined;
  billing_cycle_anchor?: ("now" | "unchanged") | undefined;
  cancel_at?: (number | string) | undefined;
  cancel_at_period_end?: boolean | undefined;
  cancellation_details?:
    | External$CustomerSubscriptionModifyBodyCancellationDetails
    | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  days_until_due?: number | undefined;
  default_payment_method?: string | undefined;
  default_source?: (string | string) | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  discounts?:
    | (External$CustomerSubscriptionModifyBodyDiscountsArr0Item[] | string)
    | undefined;
  expand?: string[] | undefined;
  invoice_settings?:
    | External$CustomerSubscriptionModifyBodyInvoiceSettings
    | undefined;
  items?: External$CustomerSubscriptionModifyBodyItemsItem[] | undefined;
  metadata?:
    | (External$CustomerSubscriptionModifyBodyMetadataObj0 | string)
    | undefined;
  off_session?: boolean | undefined;
  pause_collection?:
    | (External$CustomerSubscriptionModifyBodyPauseCollectionObj0 | string)
    | undefined;
  payment_behavior?:
    | (
        | "allow_incomplete"
        | "default_incomplete"
        | "error_if_incomplete"
        | "pending_if_incomplete"
      )
    | undefined;
  payment_settings?:
    | External$CustomerSubscriptionModifyBodyPaymentSettings
    | undefined;
  pending_invoice_item_interval?:
    | (
        | External$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0
        | string
      )
    | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  proration_date?: number | undefined;
  transfer_data?:
    | (External$CustomerSubscriptionModifyBodyTransferDataObj0 | string)
    | undefined;
  trial_end?: ("now" | number) | undefined;
  trial_from_plan?: boolean | undefined;
  trial_settings?:
    | External$CustomerSubscriptionModifyBodyTrialSettings
    | undefined;

  [additionalProperty: string]:
    | (External$CustomerSubscriptionModifyBodyAddInvoiceItemsItem[] | undefined)
    | ((number | string) | undefined)
    | (External$CustomerSubscriptionModifyBodyAutomaticTax | undefined)
    | (("now" | "unchanged") | undefined)
    | ((number | string) | undefined)
    | (boolean | undefined)
    | (External$CustomerSubscriptionModifyBodyCancellationDetails | undefined)
    | (("charge_automatically" | "send_invoice") | undefined)
    | (number | undefined)
    | (string | undefined)
    | ((string | string) | undefined)
    | ((string[] | string) | undefined)
    | (
        | (External$CustomerSubscriptionModifyBodyDiscountsArr0Item[] | string)
        | undefined
      )
    | (string[] | undefined)
    | (External$CustomerSubscriptionModifyBodyInvoiceSettings | undefined)
    | (External$CustomerSubscriptionModifyBodyItemsItem[] | undefined)
    | (
        | (External$CustomerSubscriptionModifyBodyMetadataObj0 | string)
        | undefined
      )
    | (boolean | undefined)
    | (
        | (External$CustomerSubscriptionModifyBodyPauseCollectionObj0 | string)
        | undefined
      )
    | (
        | (
            | "allow_incomplete"
            | "default_incomplete"
            | "error_if_incomplete"
            | "pending_if_incomplete"
          )
        | undefined
      )
    | (External$CustomerSubscriptionModifyBodyPaymentSettings | undefined)
    | (
        | (
            | External$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0
            | string
          )
        | undefined
      )
    | (("always_invoice" | "create_prorations" | "none") | undefined)
    | (number | undefined)
    | (
        | (External$CustomerSubscriptionModifyBodyTransferDataObj0 | string)
        | undefined
      )
    | (("now" | number) | undefined)
    | (boolean | undefined)
    | (External$CustomerSubscriptionModifyBodyTrialSettings | undefined)
    | External$CustomerSubscriptionModifyBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBody
 */
const SchemaIn$CustomerSubscriptionModifyBody: z.ZodType<
  CustomerSubscriptionModifyBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    add_invoice_items: z
      .array(Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItem.in)
      .optional(),
    application_fee_percent: z.union([z.number(), z.string()]).optional(),
    automatic_tax:
      Schemas$CustomerSubscriptionModifyBodyAutomaticTax.in.optional(),
    billing_cycle_anchor: z.enum(["now", "unchanged"]).optional(),
    cancel_at: z.union([z.number().int(), z.string()]).optional(),
    cancel_at_period_end: z.boolean().optional(),
    cancellation_details:
      Schemas$CustomerSubscriptionModifyBodyCancellationDetails.in.optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    days_until_due: z.number().int().optional(),
    default_payment_method: z.string().optional(),
    default_source: z.union([z.string(), z.string()]).optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$CustomerSubscriptionModifyBodyDiscountsArr0Item.in),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoice_settings:
      Schemas$CustomerSubscriptionModifyBodyInvoiceSettings.in.optional(),
    items: z
      .array(Schemas$CustomerSubscriptionModifyBodyItemsItem.in)
      .optional(),
    metadata: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
    off_session: z.boolean().optional(),
    pause_collection: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPauseCollectionObj0.in,
        z.string(),
      ])
      .optional(),
    payment_behavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    payment_settings:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettings.in.optional(),
    pending_invoice_item_interval: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0.in,
        z.string(),
      ])
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    proration_date: z.number().int().optional(),
    transfer_data: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyTransferDataObj0.in,
        z.string(),
      ])
      .optional(),
    trial_end: z.union([z.enum(["now"]), z.number().int()]).optional(),
    trial_from_plan: z.boolean().optional(),
    trial_settings:
      Schemas$CustomerSubscriptionModifyBodyTrialSettings.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      add_invoice_items: "addInvoiceItems",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      billing_cycle_anchor: "billingCycleAnchor",
      cancel_at: "cancelAt",
      cancel_at_period_end: "cancelAtPeriodEnd",
      cancellation_details: "cancellationDetails",
      collection_method: "collectionMethod",
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
      pause_collection: "pauseCollection",
      payment_behavior: "paymentBehavior",
      payment_settings: "paymentSettings",
      pending_invoice_item_interval: "pendingInvoiceItemInterval",
      proration_behavior: "prorationBehavior",
      proration_date: "prorationDate",
      transfer_data: "transferData",
      trial_end: "trialEnd",
      trial_from_plan: "trialFromPlan",
      trial_settings: "trialSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBody
 */
const SchemaOut$CustomerSubscriptionModifyBody: z.ZodType<
  External$CustomerSubscriptionModifyBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBody // the object to be transformed
> = z
  .object({
    addInvoiceItems: z
      .array(Schemas$CustomerSubscriptionModifyBodyAddInvoiceItemsItem.out)
      .optional(),
    applicationFeePercent: z.union([z.number(), z.string()]).optional(),
    automaticTax:
      Schemas$CustomerSubscriptionModifyBodyAutomaticTax.out.optional(),
    billingCycleAnchor: z.enum(["now", "unchanged"]).optional(),
    cancelAt: z.union([z.number().int(), z.string()]).optional(),
    cancelAtPeriodEnd: z.boolean().optional(),
    cancellationDetails:
      Schemas$CustomerSubscriptionModifyBodyCancellationDetails.out.optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    daysUntilDue: z.number().int().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultSource: z.union([z.string(), z.string()]).optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    discounts: z
      .union([
        z.array(Schemas$CustomerSubscriptionModifyBodyDiscountsArr0Item.out),
        z.string(),
      ])
      .optional(),
    expand: z.array(z.string()).optional(),
    invoiceSettings:
      Schemas$CustomerSubscriptionModifyBodyInvoiceSettings.out.optional(),
    items: z
      .array(Schemas$CustomerSubscriptionModifyBodyItemsItem.out)
      .optional(),
    metadata: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
    offSession: z.boolean().optional(),
    pauseCollection: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPauseCollectionObj0.out,
        z.string(),
      ])
      .optional(),
    paymentBehavior: z
      .enum([
        "allow_incomplete",
        "default_incomplete",
        "error_if_incomplete",
        "pending_if_incomplete",
      ])
      .optional(),
    paymentSettings:
      Schemas$CustomerSubscriptionModifyBodyPaymentSettings.out.optional(),
    pendingInvoiceItemInterval: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0.out,
        z.string(),
      ])
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    prorationDate: z.number().int().optional(),
    transferData: z
      .union([
        Schemas$CustomerSubscriptionModifyBodyTransferDataObj0.out,
        z.string(),
      ])
      .optional(),
    trialEnd: z.union([z.enum(["now"]), z.number().int()]).optional(),
    trialFromPlan: z.boolean().optional(),
    trialSettings:
      Schemas$CustomerSubscriptionModifyBodyTrialSettings.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      addInvoiceItems: "add_invoice_items",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      billingCycleAnchor: "billing_cycle_anchor",
      cancelAt: "cancel_at",
      cancelAtPeriodEnd: "cancel_at_period_end",
      cancellationDetails: "cancellation_details",
      collectionMethod: "collection_method",
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
      pauseCollection: "pause_collection",
      paymentBehavior: "payment_behavior",
      paymentSettings: "payment_settings",
      pendingInvoiceItemInterval: "pending_invoice_item_interval",
      prorationBehavior: "proration_behavior",
      prorationDate: "proration_date",
      transferData: "transfer_data",
      trialEnd: "trial_end",
      trialFromPlan: "trial_from_plan",
      trialSettings: "trial_settings",
    });
  });

export const Schemas$CustomerSubscriptionModifyBody = {
  in: SchemaIn$CustomerSubscriptionModifyBody,
  out: SchemaOut$CustomerSubscriptionModifyBody,
};
