import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem,
  InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem,
} from "./invoice-preview-body-schedule-details-phases-item-add-invoice-items-item";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax,
  InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax,
} from "./invoice-preview-body-schedule-details-phases-item-automatic-tax";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item,
  InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item,
} from "./invoice-preview-body-schedule-details-phases-item-discounts-arr0-item";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings,
  InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings,
} from "./invoice-preview-body-schedule-details-phases-item-invoice-settings";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem,
  InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem,
} from "./invoice-preview-body-schedule-details-phases-item-items-item";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata,
  InvoicePreviewBodyScheduleDetailsPhasesItemMetadata,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata,
} from "./invoice-preview-body-schedule-details-phases-item-metadata";
import {
  External$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData,
  InvoicePreviewBodyScheduleDetailsPhasesItemTransferData,
  Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData,
} from "./invoice-preview-body-schedule-details-phases-item-transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodyScheduleDetailsPhasesItem
 */
export type InvoicePreviewBodyScheduleDetailsPhasesItem = {
  addInvoiceItems?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem[]
    | undefined;
  applicationFeePercent?: number | undefined;
  automaticTax?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax
    | undefined;
  billingCycleAnchor?: ("automatic" | "phase_start") | undefined;
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  defaultPaymentMethod?: string | undefined;
  defaultTaxRates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item[] | string)
    | undefined;
  endDate?: (number | "now") | undefined;
  invoiceSettings?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings
    | undefined;
  items: InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem[];
  iterations?: number | undefined;
  metadata?: InvoicePreviewBodyScheduleDetailsPhasesItemMetadata | undefined;
  onBehalfOf?: string | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  startDate?: (number | "now") | undefined;
  transferData?:
    | InvoicePreviewBodyScheduleDetailsPhasesItemTransferData
    | undefined;
  trial?: boolean | undefined;
  trialEnd?: (number | "now") | undefined;
};

/**
 * @internal
 * InvoicePreviewBodyScheduleDetailsPhasesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodyScheduleDetailsPhasesItem = {
  add_invoice_items?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem[]
    | undefined;
  application_fee_percent?: number | undefined;
  automatic_tax?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax
    | undefined;
  billing_cycle_anchor?: ("automatic" | "phase_start") | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  default_payment_method?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (
        | External$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  end_date?: (number | "now") | undefined;
  invoice_settings?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings
    | undefined;
  items: External$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem[];
  iterations?: number | undefined;
  metadata?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata
    | undefined;
  on_behalf_of?: string | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  start_date?: (number | "now") | undefined;
  transfer_data?:
    | External$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData
    | undefined;
  trial?: boolean | undefined;
  trial_end?: (number | "now") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodyScheduleDetailsPhasesItem
 */
const SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItem: z.ZodType<
  InvoicePreviewBodyScheduleDetailsPhasesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    add_invoice_items: z
      .array(
        Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem.in,
      )
      .optional(),
    application_fee_percent: z.number().optional(),
    automatic_tax:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax.in.optional(),
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
          Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    end_date: z.union([z.number().int(), z.enum(["now"])]).optional(),
    invoice_settings:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings.in.optional(),
    items: z.array(
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem.in,
    ),
    iterations: z.number().int().optional(),
    metadata:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    start_date: z.union([z.number().int(), z.enum(["now"])]).optional(),
    transfer_data:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodyScheduleDetailsPhasesItem
 */
const SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItem: z.ZodType<
  External$InvoicePreviewBodyScheduleDetailsPhasesItem, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodyScheduleDetailsPhasesItem // the object to be transformed
> = z
  .object({
    addInvoiceItems: z
      .array(
        Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAddInvoiceItemsItem.out,
      )
      .optional(),
    applicationFeePercent: z.number().optional(),
    automaticTax:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemAutomaticTax.out.optional(),
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
          Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    endDate: z.union([z.number().int(), z.enum(["now"])]).optional(),
    invoiceSettings:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemInvoiceSettings.out.optional(),
    items: z.array(
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemItemsItem.out,
    ),
    iterations: z.number().int().optional(),
    metadata:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    startDate: z.union([z.number().int(), z.enum(["now"])]).optional(),
    transferData:
      Schemas$InvoicePreviewBodyScheduleDetailsPhasesItemTransferData.out.optional(),
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

export const Schemas$InvoicePreviewBodyScheduleDetailsPhasesItem = {
  in: SchemaIn$InvoicePreviewBodyScheduleDetailsPhasesItem,
  out: SchemaOut$InvoicePreviewBodyScheduleDetailsPhasesItem,
};
