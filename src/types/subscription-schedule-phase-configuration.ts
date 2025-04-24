import { Account, External$Account, Schemas$Account } from "./account";
import {
  DiscountsResourceStackableDiscount,
  External$DiscountsResourceStackableDiscount,
  Schemas$DiscountsResourceStackableDiscount,
} from "./discounts-resource-stackable-discount";
import {
  External$InvoiceSettingSubscriptionSchedulePhaseSetting,
  InvoiceSettingSubscriptionSchedulePhaseSetting,
  Schemas$InvoiceSettingSubscriptionSchedulePhaseSetting,
} from "./invoice-setting-subscription-schedule-phase-setting";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import {
  External$SchedulesPhaseAutomaticTax,
  SchedulesPhaseAutomaticTax,
  Schemas$SchedulesPhaseAutomaticTax,
} from "./schedules-phase-automatic-tax";
import {
  External$SubscriptionScheduleAddInvoiceItem,
  Schemas$SubscriptionScheduleAddInvoiceItem,
  SubscriptionScheduleAddInvoiceItem,
} from "./subscription-schedule-add-invoice-item";
import {
  External$SubscriptionScheduleConfigurationItem,
  Schemas$SubscriptionScheduleConfigurationItem,
  SubscriptionScheduleConfigurationItem,
} from "./subscription-schedule-configuration-item";
import {
  External$SubscriptionSchedulePhaseConfigurationMetadata,
  Schemas$SubscriptionSchedulePhaseConfigurationMetadata,
  SubscriptionSchedulePhaseConfigurationMetadata,
} from "./subscription-schedule-phase-configuration-metadata";
import {
  External$SubscriptionTransferData,
  Schemas$SubscriptionTransferData,
  SubscriptionTransferData,
} from "./subscription-transfer-data";
import { External$TaxRate, Schemas$TaxRate, TaxRate } from "./tax-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A phase describes the plans, coupon, and trialing status of a subscription for a predefined time period.
 */
export type SubscriptionSchedulePhaseConfiguration = {
  /**
   * A list of prices and quantities that will generate invoice items appended to the next invoice for this phase.
   */
  addInvoiceItems: SubscriptionScheduleAddInvoiceItem[];
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
   */
  applicationFeePercent?: number | null | undefined;
  automaticTax?: SchedulesPhaseAutomaticTax | undefined;
  /**
   * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor?: ("automatic" | "phase_start") | null | undefined;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
   */
  collectionMethod?:
    | ("charge_automatically" | "send_invoice")
    | null
    | undefined;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the default payment method for the subscription schedule. It must belong to the customer associated with the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: (string | PaymentMethod) | undefined;
  /**
   * The default tax rates to apply to the subscription during this phase of the subscription schedule.
   */
  defaultTaxRates?: TaxRate[] | null | undefined;
  /**
   * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string | null | undefined;
  /**
   * The stackable discounts that will be applied to the subscription on this phase. Subscription item discounts are applied before subscription discounts.
   */
  discounts: DiscountsResourceStackableDiscount[];
  /**
   * The end of this phase of the subscription schedule.
   */
  endDate: number;
  invoiceSettings?: InvoiceSettingSubscriptionSchedulePhaseSetting | undefined;
  /**
   * Subscription items to configure the subscription to during this phase of the subscription schedule.
   */
  items: SubscriptionScheduleConfigurationItem[];
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered. Updating the underlying subscription's `metadata` directly will not affect the current phase's `metadata`.
   */
  metadata?: SubscriptionSchedulePhaseConfigurationMetadata | null | undefined;
  /**
   * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  /**
   * If the subscription schedule will prorate when transitioning to this phase. Possible values are `create_prorations` and `none`.
   */
  prorationBehavior: "always_invoice" | "create_prorations" | "none";
  /**
   * The start of this phase of the subscription schedule.
   */
  startDate: number;
  transferData?: SubscriptionTransferData | undefined;
  /**
   * When the trial ends within the phase.
   */
  trialEnd?: number | null | undefined;
};

/**
 * @internal
 * SubscriptionSchedulePhaseConfiguration without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionSchedulePhaseConfiguration = {
  add_invoice_items: External$SubscriptionScheduleAddInvoiceItem[];
  application_fee_percent?: number | null | undefined;
  automatic_tax?: External$SchedulesPhaseAutomaticTax | undefined;
  billing_cycle_anchor?: ("automatic" | "phase_start") | null | undefined;
  collection_method?:
    | ("charge_automatically" | "send_invoice")
    | null
    | undefined;
  currency: string;
  default_payment_method?: (string | External$PaymentMethod) | undefined;
  default_tax_rates?: External$TaxRate[] | null | undefined;
  description?: string | null | undefined;
  discounts: External$DiscountsResourceStackableDiscount[];
  end_date: number;
  invoice_settings?:
    | External$InvoiceSettingSubscriptionSchedulePhaseSetting
    | undefined;
  items: External$SubscriptionScheduleConfigurationItem[];
  metadata?:
    | External$SubscriptionSchedulePhaseConfigurationMetadata
    | null
    | undefined;
  on_behalf_of?: (string | External$Account) | undefined;
  proration_behavior: "always_invoice" | "create_prorations" | "none";
  start_date: number;
  transfer_data?: External$SubscriptionTransferData | undefined;
  trial_end?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionSchedulePhaseConfiguration
 */
const SchemaIn$SubscriptionSchedulePhaseConfiguration: z.ZodType<
  SubscriptionSchedulePhaseConfiguration, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    add_invoice_items: z.array(
      z.lazy(() => Schemas$SubscriptionScheduleAddInvoiceItem.in),
    ),
    application_fee_percent: z.number().nullable().optional(),
    automatic_tax: z.lazy(() =>
      Schemas$SchedulesPhaseAutomaticTax.in.optional(),
    ),
    billing_cycle_anchor: z
      .enum(["automatic", "phase_start"])
      .nullable()
      .optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .nullable()
      .optional(),
    currency: z.string(),
    default_payment_method: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.in)])
      .optional(),
    default_tax_rates: z.array(Schemas$TaxRate.in).nullable().optional(),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceStackableDiscount.in),
    ),
    end_date: z.number().int(),
    invoice_settings: z.lazy(() =>
      Schemas$InvoiceSettingSubscriptionSchedulePhaseSetting.in.optional(),
    ),
    items: z.array(
      z.lazy(() => Schemas$SubscriptionScheduleConfigurationItem.in),
    ),
    metadata: Schemas$SubscriptionSchedulePhaseConfigurationMetadata.in
      .nullable()
      .optional(),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    proration_behavior: z.enum(["always_invoice", "create_prorations", "none"]),
    start_date: z.number().int(),
    transfer_data: z.lazy(() => Schemas$SubscriptionTransferData.in.optional()),
    trial_end: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      add_invoice_items: "addInvoiceItems",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      billing_cycle_anchor: "billingCycleAnchor",
      collection_method: "collectionMethod",
      currency: "currency",
      default_payment_method: "defaultPaymentMethod",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      end_date: "endDate",
      invoice_settings: "invoiceSettings",
      items: "items",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      proration_behavior: "prorationBehavior",
      start_date: "startDate",
      transfer_data: "transferData",
      trial_end: "trialEnd",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionSchedulePhaseConfiguration
 */
const SchemaOut$SubscriptionSchedulePhaseConfiguration: z.ZodType<
  External$SubscriptionSchedulePhaseConfiguration, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionSchedulePhaseConfiguration // the object to be transformed
> = z
  .object({
    addInvoiceItems: z.array(
      z.lazy(() => Schemas$SubscriptionScheduleAddInvoiceItem.out),
    ),
    applicationFeePercent: z.number().nullable().optional(),
    automaticTax: z.lazy(() =>
      Schemas$SchedulesPhaseAutomaticTax.out.optional(),
    ),
    billingCycleAnchor: z
      .enum(["automatic", "phase_start"])
      .nullable()
      .optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .nullable()
      .optional(),
    currency: z.string(),
    defaultPaymentMethod: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.out)])
      .optional(),
    defaultTaxRates: z.array(Schemas$TaxRate.out).nullable().optional(),
    description: z.string().nullable().optional(),
    discounts: z.array(
      z.lazy(() => Schemas$DiscountsResourceStackableDiscount.out),
    ),
    endDate: z.number().int(),
    invoiceSettings: z.lazy(() =>
      Schemas$InvoiceSettingSubscriptionSchedulePhaseSetting.out.optional(),
    ),
    items: z.array(
      z.lazy(() => Schemas$SubscriptionScheduleConfigurationItem.out),
    ),
    metadata: Schemas$SubscriptionSchedulePhaseConfigurationMetadata.out
      .nullable()
      .optional(),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    prorationBehavior: z.enum(["always_invoice", "create_prorations", "none"]),
    startDate: z.number().int(),
    transferData: z.lazy(() => Schemas$SubscriptionTransferData.out.optional()),
    trialEnd: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addInvoiceItems: "add_invoice_items",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      billingCycleAnchor: "billing_cycle_anchor",
      collectionMethod: "collection_method",
      currency: "currency",
      defaultPaymentMethod: "default_payment_method",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      endDate: "end_date",
      invoiceSettings: "invoice_settings",
      items: "items",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      prorationBehavior: "proration_behavior",
      startDate: "start_date",
      transferData: "transfer_data",
      trialEnd: "trial_end",
    });
  });

export const Schemas$SubscriptionSchedulePhaseConfiguration = {
  in: SchemaIn$SubscriptionSchedulePhaseConfiguration,
  out: SchemaOut$SubscriptionSchedulePhaseConfiguration,
};
