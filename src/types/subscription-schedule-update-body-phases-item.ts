import {
  External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem,
  SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem,
} from "./subscription-schedule-update-body-phases-item-add-invoice-items-item";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax,
  SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax,
} from "./subscription-schedule-update-body-phases-item-automatic-tax";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item,
  SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item,
} from "./subscription-schedule-update-body-phases-item-discounts-arr0-item";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings,
  SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings,
} from "./subscription-schedule-update-body-phases-item-invoice-settings";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItem,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItem,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItem,
} from "./subscription-schedule-update-body-phases-item-items-item";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemMetadata,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemMetadata,
  SubscriptionScheduleUpdateBodyPhasesItemMetadata,
} from "./subscription-schedule-update-body-phases-item-metadata";
import {
  External$SubscriptionScheduleUpdateBodyPhasesItemTransferData,
  Schemas$SubscriptionScheduleUpdateBodyPhasesItemTransferData,
  SubscriptionScheduleUpdateBodyPhasesItemTransferData,
} from "./subscription-schedule-update-body-phases-item-transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItem
 */
export type SubscriptionScheduleUpdateBodyPhasesItem = {
  addInvoiceItems?:
    | SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem[]
    | undefined;
  applicationFeePercent?: number | undefined;
  automaticTax?:
    | SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax
    | undefined;
  billingCycleAnchor?: ("automatic" | "phase_start") | undefined;
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  defaultPaymentMethod?: string | undefined;
  defaultTaxRates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item[] | string)
    | undefined;
  endDate?: (number | "now") | undefined;
  invoiceSettings?:
    | SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings
    | undefined;
  items: SubscriptionScheduleUpdateBodyPhasesItemItemsItem[];
  iterations?: number | undefined;
  metadata?: SubscriptionScheduleUpdateBodyPhasesItemMetadata | undefined;
  onBehalfOf?: string | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  startDate?: (number | "now") | undefined;
  transferData?:
    | SubscriptionScheduleUpdateBodyPhasesItemTransferData
    | undefined;
  trial?: boolean | undefined;
  trialEnd?: (number | "now") | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItem = {
  add_invoice_items?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem[]
    | undefined;
  application_fee_percent?: number | undefined;
  automatic_tax?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax
    | undefined;
  billing_cycle_anchor?: ("automatic" | "phase_start") | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  default_payment_method?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (
        | External$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  end_date?: (number | "now") | undefined;
  invoice_settings?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings
    | undefined;
  items: External$SubscriptionScheduleUpdateBodyPhasesItemItemsItem[];
  iterations?: number | undefined;
  metadata?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemMetadata
    | undefined;
  on_behalf_of?: string | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  start_date?: (number | "now") | undefined;
  transfer_data?:
    | External$SubscriptionScheduleUpdateBodyPhasesItemTransferData
    | undefined;
  trial?: boolean | undefined;
  trial_end?: (number | "now") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItem
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItem: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    add_invoice_items: z
      .array(
        Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem.in,
      )
      .optional(),
    application_fee_percent: z.number().optional(),
    automatic_tax:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax.in.optional(),
    billing_cycle_anchor: z.enum(["automatic", "phase_start"]).optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    default_payment_method: z.string().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    end_date: z.union([z.number().int(), z.enum(["now"])]).optional(),
    invoice_settings:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings.in.optional(),
    items: z.array(
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItem.in,
    ),
    iterations: z.number().int().optional(),
    metadata:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    start_date: z.union([z.number().int(), z.enum(["now"])]).optional(),
    transfer_data:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemTransferData.in.optional(),
    trial: z.boolean().optional(),
    trial_end: z.union([z.number().int(), z.enum(["now"])]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      add_invoice_items: "addInvoiceItems",
      application_fee_percent: "applicationFeePercent",
      automatic_tax: "automaticTax",
      billing_cycle_anchor: "billingCycleAnchor",
      collection_method: "collectionMethod",
      default_payment_method: "defaultPaymentMethod",
      default_tax_rates: "defaultTaxRates",
      description: "description",
      discounts: "discounts",
      end_date: "endDate",
      invoice_settings: "invoiceSettings",
      items: "items",
      iterations: "iterations",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      proration_behavior: "prorationBehavior",
      start_date: "startDate",
      transfer_data: "transferData",
      trial: "trial",
      trial_end: "trialEnd",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItem
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItem: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItem // the object to be transformed
> = z
  .object({
    addInvoiceItems: z
      .array(
        Schemas$SubscriptionScheduleUpdateBodyPhasesItemAddInvoiceItemsItem.out,
      )
      .optional(),
    applicationFeePercent: z.number().optional(),
    automaticTax:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemAutomaticTax.out.optional(),
    billingCycleAnchor: z.enum(["automatic", "phase_start"]).optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleUpdateBodyPhasesItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    endDate: z.union([z.number().int(), z.enum(["now"])]).optional(),
    invoiceSettings:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemInvoiceSettings.out.optional(),
    items: z.array(
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItem.out,
    ),
    iterations: z.number().int().optional(),
    metadata:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    startDate: z.union([z.number().int(), z.enum(["now"])]).optional(),
    transferData:
      Schemas$SubscriptionScheduleUpdateBodyPhasesItemTransferData.out.optional(),
    trial: z.boolean().optional(),
    trialEnd: z.union([z.number().int(), z.enum(["now"])]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      addInvoiceItems: "add_invoice_items",
      applicationFeePercent: "application_fee_percent",
      automaticTax: "automatic_tax",
      billingCycleAnchor: "billing_cycle_anchor",
      collectionMethod: "collection_method",
      defaultPaymentMethod: "default_payment_method",
      defaultTaxRates: "default_tax_rates",
      description: "description",
      discounts: "discounts",
      endDate: "end_date",
      invoiceSettings: "invoice_settings",
      items: "items",
      iterations: "iterations",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      prorationBehavior: "proration_behavior",
      startDate: "start_date",
      transferData: "transfer_data",
      trial: "trial",
      trialEnd: "trial_end",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItem = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItem,
  out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItem,
};
