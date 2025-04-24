import { Account, External$Account, Schemas$Account } from "./account";
import {
  External$InvoiceSettingSubscriptionScheduleSetting,
  InvoiceSettingSubscriptionScheduleSetting,
  Schemas$InvoiceSettingSubscriptionScheduleSetting,
} from "./invoice-setting-subscription-schedule-setting";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import {
  External$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax,
  Schemas$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax,
  SubscriptionSchedulesResourceDefaultSettingsAutomaticTax,
} from "./subscription-schedules-resource-default-settings-automatic-tax";
import {
  External$SubscriptionTransferData,
  Schemas$SubscriptionTransferData,
  SubscriptionTransferData,
} from "./subscription-transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionSchedulesResourceDefaultSettings = {
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account during this phase of the schedule.
   */
  applicationFeePercent?: number | null | undefined;
  automaticTax?:
    | SubscriptionSchedulesResourceDefaultSettingsAutomaticTax
    | undefined;
  /**
   * Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
   */
  billingCycleAnchor: "automatic" | "phase_start";
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
   */
  collectionMethod?:
    | ("charge_automatically" | "send_invoice")
    | null
    | undefined;
  /**
   * ID of the default payment method for the subscription schedule. If not set, invoices will use the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: (string | PaymentMethod) | undefined;
  /**
   * Subscription description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces and certain local payment methods UIs.
   */
  description?: string | null | undefined;
  invoiceSettings: InvoiceSettingSubscriptionScheduleSetting;
  /**
   * The account (if any) the charge was made on behalf of for charges associated with the schedule's subscription. See the Connect documentation for details.
   */
  onBehalfOf?: (string | Account) | undefined;
  transferData?: SubscriptionTransferData | undefined;
};

/**
 * @internal
 * SubscriptionSchedulesResourceDefaultSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionSchedulesResourceDefaultSettings = {
  application_fee_percent?: number | null | undefined;
  automatic_tax?:
    | External$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax
    | undefined;
  billing_cycle_anchor: "automatic" | "phase_start";
  collection_method?:
    | ("charge_automatically" | "send_invoice")
    | null
    | undefined;
  default_payment_method?: (string | External$PaymentMethod) | undefined;
  description?: string | null | undefined;
  invoice_settings: External$InvoiceSettingSubscriptionScheduleSetting;
  on_behalf_of?: (string | External$Account) | undefined;
  transfer_data?: External$SubscriptionTransferData | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionSchedulesResourceDefaultSettings
 */
const SchemaIn$SubscriptionSchedulesResourceDefaultSettings: z.ZodType<
  SubscriptionSchedulesResourceDefaultSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application_fee_percent: z.number().nullable().optional(),
    automatic_tax: z.lazy(() =>
      Schemas$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax.in.optional(),
    ),
    billing_cycle_anchor: z.enum(["automatic", "phase_start"]),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .nullable()
      .optional(),
    default_payment_method: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.in)])
      .optional(),
    description: z.string().nullable().optional(),
    invoice_settings: z.lazy(
      () => Schemas$InvoiceSettingSubscriptionScheduleSetting.in,
    ),
    on_behalf_of: z
      .union([z.string(), z.lazy(() => Schemas$Account.in)])
      .optional(),
    transfer_data: z.lazy(() => Schemas$SubscriptionTransferData.in.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      billing_cycle_anchor: "billingCycleAnchor",
      collection_method: "collectionMethod",
      default_payment_method: "defaultPaymentMethod",
      description: "description",
      invoice_settings: "invoiceSettings",
      on_behalf_of: "onBehalfOf",
      transfer_data: "transferData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionSchedulesResourceDefaultSettings
 */
const SchemaOut$SubscriptionSchedulesResourceDefaultSettings: z.ZodType<
  External$SubscriptionSchedulesResourceDefaultSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionSchedulesResourceDefaultSettings // the object to be transformed
> = z
  .object({
    applicationFeePercent: z.number().nullable().optional(),
    automaticTax: z.lazy(() =>
      Schemas$SubscriptionSchedulesResourceDefaultSettingsAutomaticTax.out.optional(),
    ),
    billingCycleAnchor: z.enum(["automatic", "phase_start"]),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .nullable()
      .optional(),
    defaultPaymentMethod: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.out)])
      .optional(),
    description: z.string().nullable().optional(),
    invoiceSettings: z.lazy(
      () => Schemas$InvoiceSettingSubscriptionScheduleSetting.out,
    ),
    onBehalfOf: z
      .union([z.string(), z.lazy(() => Schemas$Account.out)])
      .optional(),
    transferData: z.lazy(() => Schemas$SubscriptionTransferData.out.optional()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      billingCycleAnchor: "billing_cycle_anchor",
      collectionMethod: "collection_method",
      defaultPaymentMethod: "default_payment_method",
      description: "description",
      invoiceSettings: "invoice_settings",
      onBehalfOf: "on_behalf_of",
      transferData: "transfer_data",
    });
  });

export const Schemas$SubscriptionSchedulesResourceDefaultSettings = {
  in: SchemaIn$SubscriptionSchedulesResourceDefaultSettings,
  out: SchemaOut$SubscriptionSchedulesResourceDefaultSettings,
};
