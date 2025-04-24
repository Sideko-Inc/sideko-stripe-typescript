import {
  External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax,
  Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax,
  SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax,
} from "./subscription-schedule-update-body-default-settings-automatic-tax";
import {
  External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings,
  Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings,
  SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings,
} from "./subscription-schedule-update-body-default-settings-invoice-settings";
import {
  External$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0,
  Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0,
  SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0,
} from "./subscription-schedule-update-body-default-settings-transfer-data-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Object representing the subscription schedule's default settings.
 */
export type SubscriptionScheduleUpdateBodyDefaultSettings = {
  applicationFeePercent?: number | undefined;
  automaticTax?:
    | SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax
    | undefined;
  billingCycleAnchor?: ("automatic" | "phase_start") | undefined;
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  defaultPaymentMethod?: string | undefined;
  description?: (string | string) | undefined;
  invoiceSettings?:
    | SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings
    | undefined;
  onBehalfOf?: (string | string) | undefined;
  transferData?:
    | (SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0 | string)
    | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyDefaultSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyDefaultSettings = {
  application_fee_percent?: number | undefined;
  automatic_tax?:
    | External$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax
    | undefined;
  billing_cycle_anchor?: ("automatic" | "phase_start") | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  default_payment_method?: string | undefined;
  description?: (string | string) | undefined;
  invoice_settings?:
    | External$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings
    | undefined;
  on_behalf_of?: (string | string) | undefined;
  transfer_data?:
    | (
        | External$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0
        | string
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyDefaultSettings
 */
const SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettings: z.ZodType<
  SubscriptionScheduleUpdateBodyDefaultSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    application_fee_percent: z.number().optional(),
    automatic_tax:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax.in.optional(),
    billing_cycle_anchor: z.enum(["automatic", "phase_start"]).optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    default_payment_method: z.string().optional(),
    description: z.union([z.string(), z.string()]).optional(),
    invoice_settings:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings.in.optional(),
    on_behalf_of: z.union([z.string(), z.string()]).optional(),
    transfer_data: z
      .union([
        Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0.in,
        z.string(),
      ])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyDefaultSettings
 */
const SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettings: z.ZodType<
  External$SubscriptionScheduleUpdateBodyDefaultSettings, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyDefaultSettings // the object to be transformed
> = z
  .object({
    applicationFeePercent: z.number().optional(),
    automaticTax:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsAutomaticTax.out.optional(),
    billingCycleAnchor: z.enum(["automatic", "phase_start"]).optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    defaultPaymentMethod: z.string().optional(),
    description: z.union([z.string(), z.string()]).optional(),
    invoiceSettings:
      Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsInvoiceSettings.out.optional(),
    onBehalfOf: z.union([z.string(), z.string()]).optional(),
    transferData: z
      .union([
        Schemas$SubscriptionScheduleUpdateBodyDefaultSettingsTransferDataObj0.out,
        z.string(),
      ])
      .optional(),
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

export const Schemas$SubscriptionScheduleUpdateBodyDefaultSettings = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyDefaultSettings,
  out: SchemaOut$SubscriptionScheduleUpdateBodyDefaultSettings,
};
