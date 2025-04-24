import { Account, External$Account, Schemas$Account } from "./account";
import {
  Application,
  External$Application,
  Schemas$Application,
} from "./application";
import {
  BankAccount,
  External$BankAccount,
  Schemas$BankAccount,
} from "./bank-account";
import {
  CancellationDetails,
  External$CancellationDetails,
  Schemas$CancellationDetails,
} from "./cancellation-details";
import { Card, External$Card, Schemas$Card } from "./card";
import { Customer, External$Customer, Schemas$Customer } from "./customer";
import {
  DeletedApplication,
  External$DeletedApplication,
  Schemas$DeletedApplication,
} from "./deleted-application";
import {
  DeletedCustomer,
  External$DeletedCustomer,
  Schemas$DeletedCustomer,
} from "./deleted-customer";
import { Discount, External$Discount, Schemas$Discount } from "./discount";
import { External$Invoice, Invoice, Schemas$Invoice } from "./invoice";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import {
  External$SetupIntent,
  Schemas$SetupIntent,
  SetupIntent,
} from "./setup-intent";
import { External$Source, Schemas$Source, Source } from "./source";
import {
  External$SubscriptionAutomaticTax,
  Schemas$SubscriptionAutomaticTax,
  SubscriptionAutomaticTax,
} from "./subscription-automatic-tax";
import {
  External$SubscriptionItems,
  Schemas$SubscriptionItems,
  SubscriptionItems,
} from "./subscription-items";
import {
  External$SubscriptionMetadata,
  Schemas$SubscriptionMetadata,
  SubscriptionMetadata,
} from "./subscription-metadata";
import {
  External$SubscriptionPendingInvoiceItemInterval,
  Schemas$SubscriptionPendingInvoiceItemInterval,
  SubscriptionPendingInvoiceItemInterval,
} from "./subscription-pending-invoice-item-interval";
import {
  External$SubscriptionSchedule1,
  Schemas$SubscriptionSchedule1,
  SubscriptionSchedule1,
} from "./subscription-schedule1";
import {
  External$SubscriptionTransferData,
  Schemas$SubscriptionTransferData,
  SubscriptionTransferData,
} from "./subscription-transfer-data";
import {
  External$SubscriptionsResourceBillingCycleAnchorConfig,
  Schemas$SubscriptionsResourceBillingCycleAnchorConfig,
  SubscriptionsResourceBillingCycleAnchorConfig,
} from "./subscriptions-resource-billing-cycle-anchor-config";
import {
  External$SubscriptionsResourcePauseCollection,
  Schemas$SubscriptionsResourcePauseCollection,
  SubscriptionsResourcePauseCollection,
} from "./subscriptions-resource-pause-collection";
import {
  External$SubscriptionsResourcePaymentSettings,
  Schemas$SubscriptionsResourcePaymentSettings,
  SubscriptionsResourcePaymentSettings,
} from "./subscriptions-resource-payment-settings";
import {
  External$SubscriptionsResourcePendingUpdate,
  Schemas$SubscriptionsResourcePendingUpdate,
  SubscriptionsResourcePendingUpdate,
} from "./subscriptions-resource-pending-update";
import {
  External$SubscriptionsResourceSubscriptionInvoiceSettings,
  Schemas$SubscriptionsResourceSubscriptionInvoiceSettings,
  SubscriptionsResourceSubscriptionInvoiceSettings,
} from "./subscriptions-resource-subscription-invoice-settings";
import {
  External$SubscriptionsTrialsResourceTrialSettings,
  Schemas$SubscriptionsTrialsResourceTrialSettings,
  SubscriptionsTrialsResourceTrialSettings,
} from "./subscriptions-trials-resource-trial-settings";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import {
  External$TestHelpersTestClock,
  Schemas$TestHelpersTestClock,
  TestHelpersTestClock,
} from "./test-helpers-test-clock";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Subscriptions allow you to charge a customer on a recurring basis.
 *
 * Related guide: [Creating subscriptions](https://stripe.com/docs/billing/subscriptions/creating)
 */
export type Subscription = {
  /**
   * ID of the Connect Application that created the subscription.
   */
  application?: (string | Application | DeletedApplication) | undefined;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account.
   */
  applicationFeePercent?: number | null | undefined;
  automaticTax: SubscriptionAutomaticTax;
  /**
   * The reference point that aligns future [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle) dates. It sets the day of week for `week` intervals, the day of month for `month` and `year` intervals, and the month of year for `year` intervals. The timestamp is in UTC format.
   */
  billingCycleAnchor: number;
  billingCycleAnchorConfig?:
    | SubscriptionsResourceBillingCycleAnchorConfig
    | undefined;
  /**
   * A date in the future at which the subscription will automatically get canceled
   */
  cancelAt?: number | null | undefined;
  /**
   * Whether this subscription will (if `status=active`) or did (if `status=canceled`) cancel at the end of the current billing period.
   */
  cancelAtPeriodEnd?: boolean | null | undefined;
  /**
   * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
   */
  canceledAt?: number | null | undefined;
  cancellationDetails?: CancellationDetails | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
   */
  collectionMethod: "charge_automatically" | "send_invoice";
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer who owns the subscription.
   */
  customer: string | Customer | DeletedCustomer;
  /**
   * Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
   */
  daysUntilDue?: number | null | undefined;
  /**
   * ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultPaymentMethod?: (string | PaymentMethod) | undefined;
  /**
   * ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
   */
  defaultSource?: (string | BankAccount | Card | Source) | undefined;
  /**
   * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
   */
  defaultTaxRates?: TaxRate[] | null | undefined;
  /**
   * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string | null | undefined;
  /**
   * The discounts applied to the subscription. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: (string | Discount)[];
  /**
   * If the subscription has ended, the date the subscription ended.
   */
  endedAt?: number | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  invoiceSettings: SubscriptionsResourceSubscriptionInvoiceSettings;
  /**
   * List of subscription items, each with an attached price.
   */
  items: SubscriptionItems;
  /**
   * The most recent invoice this subscription has generated.
   */
  latestInvoice?: (string | Invoice) | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: SubscriptionMetadata;
  /**
   * Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
   */
  nextPendingInvoiceItemInvoice?: number | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "subscription";
  /**
   * The account (if any) the charge was made on behalf of for charges associated with this subscription. See the [Connect documentation](https://stripe.com/docs/connect/subscriptions#on-behalf-of) for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  /**
   * The Pause Collection settings determine how we will pause collection for this subscription and for how long the subscription
   * should be paused.
   */
  pauseCollection?: SubscriptionsResourcePauseCollection | undefined;
  paymentSettings?: SubscriptionsResourcePaymentSettings | undefined;
  pendingInvoiceItemInterval?:
    | SubscriptionPendingInvoiceItemInterval
    | undefined;
  /**
   * You can use this [SetupIntent](https://stripe.com/docs/api/setup_intents) to collect user authentication when creating a subscription without immediate payment or updating a subscription's payment method, allowing you to optimize for off-session payments. Learn more in the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2).
   */
  pendingSetupIntent?: (string | SetupIntent) | undefined;
  /**
   * Pending Updates store the changes pending from a previous update that will be applied
   * to the Subscription upon successful payment.
   */
  pendingUpdate?: SubscriptionsResourcePendingUpdate | undefined;
  /**
   * The schedule attached to the subscription
   */
  schedule?: (string | SubscriptionSchedule1) | undefined;
  /**
   * Date when the subscription was first created. The date might differ from the `created` date due to backdating.
   */
  startDate: number;
  /**
   * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, `unpaid`, or `paused`.
   *
   * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this status can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` status. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal status, the open invoice will be voided and no further invoices will be generated.
   *
   * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
   *
   * A subscription can only enter a `paused` status [when a trial ends without a payment method](https://stripe.com/docs/billing/subscriptions/trials#create-free-trials-without-payment). A `paused` subscription doesn't generate invoices and can be resumed after your customer adds their payment method. The `paused` status is different from [pausing collection](https://stripe.com/docs/billing/subscriptions/pause-payment), which still generates invoices and leaves the subscription's status unchanged.
   *
   * If subscription `collection_method=charge_automatically`, it becomes `past_due` when payment is required but cannot be paid (due to failed payment or awaiting additional user actions). Once Stripe has exhausted all payment retry attempts, the subscription will become `canceled` or `unpaid` (depending on your subscriptions settings).
   *
   * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
   */
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";
  /**
   * ID of the test clock this subscription belongs to.
   */
  testClock?: (string | TestHelpersTestClock) | undefined;
  transferData?: SubscriptionTransferData | undefined;
  /**
   * If the subscription has a trial, the end of that trial.
   */
  trialEnd?: number | null | undefined;
  /**
   * Configures how this subscription behaves during the trial period.
   */
  trialSettings?: SubscriptionsTrialsResourceTrialSettings | undefined;
  /**
   * If the subscription has a trial, the beginning of that trial.
   */
  trialStart?: number | null | undefined;
};

/**
 * @internal
 * Subscription without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Subscription = {
  application?:
    | (string | External$Application | External$DeletedApplication)
    | undefined;
  application_fee_percent?: number | null | undefined;
  automatic_tax: External$SubscriptionAutomaticTax;
  billing_cycle_anchor: number;
  billing_cycle_anchor_config?:
    | External$SubscriptionsResourceBillingCycleAnchorConfig
    | undefined;
  cancel_at?: number | null | undefined;
  cancel_at_period_end?: boolean | null | undefined;
  canceled_at?: number | null | undefined;
  cancellation_details?: External$CancellationDetails | undefined;
  collection_method: "charge_automatically" | "send_invoice";
  created: number;
  currency: string;
  customer: string | External$Customer | External$DeletedCustomer;
  days_until_due?: number | null | undefined;
  default_payment_method?: (string | External$PaymentMethod) | undefined;
  default_source?:
    | (string | External$BankAccount | External$Card | External$Source)
    | undefined;
  default_tax_rates?: External$TaxRate[] | null | undefined;
  description?: string | null | undefined;
  discounts: (string | External$Discount)[];
  ended_at?: number | null | undefined;
  id: string;
  invoice_settings: External$SubscriptionsResourceSubscriptionInvoiceSettings;
  items: External$SubscriptionItems;
  latest_invoice?: (string | External$Invoice) | undefined;
  livemode: boolean;
  metadata: External$SubscriptionMetadata;
  next_pending_invoice_item_invoice?: number | null | undefined;
  object: "subscription";
  on_behalf_of?: (string | External$Account) | undefined;
  pause_collection?: External$SubscriptionsResourcePauseCollection | undefined;
  payment_settings?: External$SubscriptionsResourcePaymentSettings | undefined;
  pending_invoice_item_interval?:
    | External$SubscriptionPendingInvoiceItemInterval
    | undefined;
  pending_setup_intent?: (string | External$SetupIntent) | undefined;
  pending_update?: External$SubscriptionsResourcePendingUpdate | undefined;
  schedule?: (string | External$SubscriptionSchedule1) | undefined;
  start_date: number;
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past_due"
    | "paused"
    | "trialing"
    | "unpaid";
  test_clock?: (string | External$TestHelpersTestClock) | undefined;
  transfer_data?: External$SubscriptionTransferData | undefined;
  trial_end?: number | null | undefined;
  trial_settings?:
    | External$SubscriptionsTrialsResourceTrialSettings
    | undefined;
  trial_start?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Subscription
 */
const SchemaIn$Subscription: z.ZodType<
  Subscription, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application: z
      .union([
        z.string(),
        Schemas$Application.in,
        Schemas$DeletedApplication.in,
      ])
      .optional(),
    application_fee_percent: z.number().nullable().optional(),
    automatic_tax: z.lazy(() => Schemas$SubscriptionAutomaticTax.in),
    billing_cycle_anchor: z.number().int(),
    billing_cycle_anchor_config:
      Schemas$SubscriptionsResourceBillingCycleAnchorConfig.in.optional(),
    cancel_at: z.number().int().nullable().optional(),
    cancel_at_period_end: z.boolean().nullable().optional(),
    canceled_at: z.number().int().nullable().optional(),
    cancellation_details: Schemas$CancellationDetails.in.optional(),
    collection_method: z.enum(["charge_automatically", "send_invoice"]),
    created: z.number().int(),
    currency: z.string(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.in),
      Schemas$DeletedCustomer.in,
    ]),
    days_until_due: z.number().int().nullable().optional(),
    default_payment_method: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.in)])
      .optional(),
    default_source: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.in),
        z.lazy(() => Schemas$Card.in),
        Schemas$Source.in,
      ])
      .optional(),
    default_tax_rates: z.array(Schemas$TaxRate.in).nullable().optional(),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.in)]),
    ),
    ended_at: z.number().int().nullable().optional(),
    id: z.string(),
    invoice_settings: z.lazy(
      () => Schemas$SubscriptionsResourceSubscriptionInvoiceSettings.in,
    ),
    items: z.lazy(() => Schemas$SubscriptionItems.in),
    latest_invoice: z
      .union([z.string(), z.lazy(() => Schemas$Invoice.in)])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$SubscriptionMetadata.in,
    next_pending_invoice_item_invoice: z.number().int().nullable().optional(),
    object: z.enum(["subscription"]),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    pause_collection:
      Schemas$SubscriptionsResourcePauseCollection.in.optional(),
    payment_settings:
      Schemas$SubscriptionsResourcePaymentSettings.in.optional(),
    pending_invoice_item_interval:
      Schemas$SubscriptionPendingInvoiceItemInterval.in.optional(),
    pending_setup_intent: z
      .union([z.string(), z.lazy(() => Schemas$SetupIntent.in)])
      .optional(),
    pending_update: z.lazy(() =>
      Schemas$SubscriptionsResourcePendingUpdate.in.optional(),
    ),
    schedule: z
      .union([z.string(), z.lazy(() => Schemas$SubscriptionSchedule1.in)])
      .optional(),
    start_date: z.number().int(),
    status: z.enum([
      "active",
      "canceled",
      "incomplete",
      "incomplete_expired",
      "past_due",
      "paused",
      "trialing",
      "unpaid",
    ]),
    test_clock: z
      .union([z.string(), Schemas$TestHelpersTestClock.in])
      .optional(),
    transfer_data: z.lazy(() => Schemas$SubscriptionTransferData.in.optional()),
    trial_end: z.number().int().nullable().optional(),
    trial_settings:
      Schemas$SubscriptionsTrialsResourceTrialSettings.in.optional(),
    trial_start: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      billing_cycle_anchor: "billingCycleAnchor",
      billing_cycle_anchor_config: "billingCycleAnchorConfig",
      cancel_at: "cancelAt",
      cancel_at_period_end: "cancelAtPeriodEnd",
      canceled_at: "canceledAt",
      cancellation_details: "cancellationDetails",
      collection_method: "collectionMethod",
      created: "created",
      currency: "currency",
      customer: "customer",
      days_until_due: "daysUntilDue",
      default_payment_method: "defaultPaymentMethod",
      default_source: "defaultSource",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      ended_at: "endedAt",
      id: "id",
      invoice_settings: "invoiceSettings",
      items: "items",
      latest_invoice: "latestInvoice",
      livemode: "livemode",
      metadata: "metadata",
      next_pending_invoice_item_invoice: "nextPendingInvoiceItemInvoice",
      object: "object",
      on_behalf_of: "onBehalfOf",
      pause_collection: "pauseCollection",
      payment_settings: "paymentSettings",
      pending_invoice_item_interval: "pendingInvoiceItemInterval",
      pending_setup_intent: "pendingSetupIntent",
      pending_update: "pendingUpdate",
      schedule: "schedule",
      start_date: "startDate",
      status: "status",
      test_clock: "testClock",
      transfer_data: "transferData",
      trial_end: "trialEnd",
      trial_settings: "trialSettings",
      trial_start: "trialStart",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Subscription
 */
const SchemaOut$Subscription: z.ZodType<
  External$Subscription, // output type of this zod object
  z.ZodTypeDef,
  Subscription // the object to be transformed
> = z
  .object({
    application: z
      .union([
        z.string(),
        Schemas$Application.out,
        Schemas$DeletedApplication.out,
      ])
      .optional(),
    applicationFeePercent: z.number().nullable().optional(),
    automaticTax: z.lazy(() => Schemas$SubscriptionAutomaticTax.out),
    billingCycleAnchor: z.number().int(),
    billingCycleAnchorConfig:
      Schemas$SubscriptionsResourceBillingCycleAnchorConfig.out.optional(),
    cancelAt: z.number().int().nullable().optional(),
    cancelAtPeriodEnd: z.boolean().nullable().optional(),
    canceledAt: z.number().int().nullable().optional(),
    cancellationDetails: Schemas$CancellationDetails.out.optional(),
    collectionMethod: z.enum(["charge_automatically", "send_invoice"]),
    created: z.number().int(),
    currency: z.string(),
    customer: z.union([
      z.string(),
      z.lazy(() => Schemas$Customer.out),
      Schemas$DeletedCustomer.out,
    ]),
    daysUntilDue: z.number().int().nullable().optional(),
    defaultPaymentMethod: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.out)])
      .optional(),
    defaultSource: z
      .union([
        z.string(),
        z.lazy(() => Schemas$BankAccount.out),
        z.lazy(() => Schemas$Card.out),
        Schemas$Source.out,
      ])
      .optional(),
    defaultTaxRates: z.array(Schemas$TaxRate.out).nullable().optional(),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.union([z.string(), z.lazy(() => Schemas$Discount.out)]),
    ),
    endedAt: z.number().int().nullable().optional(),
    id: z.string(),
    invoiceSettings: z.lazy(
      () => Schemas$SubscriptionsResourceSubscriptionInvoiceSettings.out,
    ),
    items: z.lazy(() => Schemas$SubscriptionItems.out),
    latestInvoice: z
      .union([z.string(), z.lazy(() => Schemas$Invoice.out)])
      .optional(),
    livemode: z.boolean(),
    metadata: Schemas$SubscriptionMetadata.out,
    nextPendingInvoiceItemInvoice: z.number().int().nullable().optional(),
    object: z.enum(["subscription"]),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    pauseCollection:
      Schemas$SubscriptionsResourcePauseCollection.out.optional(),
    paymentSettings:
      Schemas$SubscriptionsResourcePaymentSettings.out.optional(),
    pendingInvoiceItemInterval:
      Schemas$SubscriptionPendingInvoiceItemInterval.out.optional(),
    pendingSetupIntent: z
      .union([z.string(), z.lazy(() => Schemas$SetupIntent.out)])
      .optional(),
    pendingUpdate: z.lazy(() =>
      Schemas$SubscriptionsResourcePendingUpdate.out.optional(),
    ),
    schedule: z
      .union([z.string(), z.lazy(() => Schemas$SubscriptionSchedule1.out)])
      .optional(),
    startDate: z.number().int(),
    status: z.enum([
      "active",
      "canceled",
      "incomplete",
      "incomplete_expired",
      "past_due",
      "paused",
      "trialing",
      "unpaid",
    ]),
    testClock: z
      .union([z.string(), Schemas$TestHelpersTestClock.out])
      .optional(),
    transferData: z.lazy(() => Schemas$SubscriptionTransferData.out.optional()),
    trialEnd: z.number().int().nullable().optional(),
    trialSettings:
      Schemas$SubscriptionsTrialsResourceTrialSettings.out.optional(),
    trialStart: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application: "application",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      billingCycleAnchor: "billing_cycle_anchor",
      billingCycleAnchorConfig: "billing_cycle_anchor_config",
      cancelAt: "cancel_at",
      cancelAtPeriodEnd: "cancel_at_period_end",
      canceledAt: "canceled_at",
      cancellationDetails: "cancellation_details",
      collectionMethod: "collection_method",
      created: "created",
      currency: "currency",
      customer: "customer",
      daysUntilDue: "days_until_due",
      defaultPaymentMethod: "default_payment_method",
      defaultSource: "default_source",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      endedAt: "ended_at",
      id: "id",
      invoiceSettings: "invoice_settings",
      items: "items",
      latestInvoice: "latest_invoice",
      livemode: "livemode",
      metadata: "metadata",
      nextPendingInvoiceItemInvoice: "next_pending_invoice_item_invoice",
      object: "object",
      onBehalfOf: "on_behalf_of",
      pauseCollection: "pause_collection",
      paymentSettings: "payment_settings",
      pendingInvoiceItemInterval: "pending_invoice_item_interval",
      pendingSetupIntent: "pending_setup_intent",
      pendingUpdate: "pending_update",
      schedule: "schedule",
      startDate: "start_date",
      status: "status",
      testClock: "test_clock",
      transferData: "transfer_data",
      trialEnd: "trial_end",
      trialSettings: "trial_settings",
      trialStart: "trial_start",
    });
  });

export const Schemas$Subscription = {
  in: SchemaIn$Subscription,
  out: SchemaOut$Subscription,
};
