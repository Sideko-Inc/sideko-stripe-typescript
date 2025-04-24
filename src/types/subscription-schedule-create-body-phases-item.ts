import {
  External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem,
  SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem,
} from "./subscription-schedule-create-body-phases-item-add-invoice-items-item";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax,
  SubscriptionScheduleCreateBodyPhasesItemAutomaticTax,
} from "./subscription-schedule-create-body-phases-item-automatic-tax";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item,
  SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item,
} from "./subscription-schedule-create-body-phases-item-discounts-arr0-item";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings,
  SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings,
} from "./subscription-schedule-create-body-phases-item-invoice-settings";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItem,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItem,
  SubscriptionScheduleCreateBodyPhasesItemItemsItem,
} from "./subscription-schedule-create-body-phases-item-items-item";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemMetadata,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemMetadata,
  SubscriptionScheduleCreateBodyPhasesItemMetadata,
} from "./subscription-schedule-create-body-phases-item-metadata";
import {
  External$SubscriptionScheduleCreateBodyPhasesItemTransferData,
  Schemas$SubscriptionScheduleCreateBodyPhasesItemTransferData,
  SubscriptionScheduleCreateBodyPhasesItemTransferData,
} from "./subscription-schedule-create-body-phases-item-transfer-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItem
 */
export type SubscriptionScheduleCreateBodyPhasesItem = {
  addInvoiceItems?:
    | SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem[]
    | undefined;
  applicationFeePercent?: number | undefined;
  automaticTax?:
    | SubscriptionScheduleCreateBodyPhasesItemAutomaticTax
    | undefined;
  billingCycleAnchor?: ("automatic" | "phase_start") | undefined;
  collectionMethod?: ("charge_automatically" | "send_invoice") | undefined;
  currency?: string | undefined;
  defaultPaymentMethod?: string | undefined;
  defaultTaxRates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item[] | string)
    | undefined;
  endDate?: number | undefined;
  invoiceSettings?:
    | SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings
    | undefined;
  items: SubscriptionScheduleCreateBodyPhasesItemItemsItem[];
  iterations?: number | undefined;
  metadata?: SubscriptionScheduleCreateBodyPhasesItemMetadata | undefined;
  onBehalfOf?: string | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  transferData?:
    | SubscriptionScheduleCreateBodyPhasesItemTransferData
    | undefined;
  trial?: boolean | undefined;
  trialEnd?: number | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItem = {
  add_invoice_items?:
    | External$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem[]
    | undefined;
  application_fee_percent?: number | undefined;
  automatic_tax?:
    | External$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax
    | undefined;
  billing_cycle_anchor?: ("automatic" | "phase_start") | undefined;
  collection_method?: ("charge_automatically" | "send_invoice") | undefined;
  currency?: string | undefined;
  default_payment_method?: string | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  description?: (string | string) | undefined;
  discounts?:
    | (
        | External$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item[]
        | string
      )
    | undefined;
  end_date?: number | undefined;
  invoice_settings?:
    | External$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings
    | undefined;
  items: External$SubscriptionScheduleCreateBodyPhasesItemItemsItem[];
  iterations?: number | undefined;
  metadata?:
    | External$SubscriptionScheduleCreateBodyPhasesItemMetadata
    | undefined;
  on_behalf_of?: string | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  transfer_data?:
    | External$SubscriptionScheduleCreateBodyPhasesItemTransferData
    | undefined;
  trial?: boolean | undefined;
  trial_end?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItem
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItem: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    add_invoice_items: z
      .array(
        Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem.in,
      )
      .optional(),
    application_fee_percent: z.number().optional(),
    automatic_tax:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax.in.optional(),
    billing_cycle_anchor: z.enum(["automatic", "phase_start"]).optional(),
    collection_method: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    default_payment_method: z.string().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    end_date: z.number().int().optional(),
    invoice_settings:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings.in.optional(),
    items: z.array(
      Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItem.in,
    ),
    iterations: z.number().int().optional(),
    metadata:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemMetadata.in.optional(),
    on_behalf_of: z.string().optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    transfer_data:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemTransferData.in.optional(),
    trial: z.boolean().optional(),
    trial_end: z.number().int().optional(),
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
      iterations: "iterations",
      metadata: "metadata",
      on_behalf_of: "onBehalfOf",
      proration_behavior: "prorationBehavior",
      transfer_data: "transferData",
      trial: "trial",
      trial_end: "trialEnd",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItem
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItem: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItem, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItem // the object to be transformed
> = z
  .object({
    addInvoiceItems: z
      .array(
        Schemas$SubscriptionScheduleCreateBodyPhasesItemAddInvoiceItemsItem.out,
      )
      .optional(),
    applicationFeePercent: z.number().optional(),
    automaticTax:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemAutomaticTax.out.optional(),
    billingCycleAnchor: z.enum(["automatic", "phase_start"]).optional(),
    collectionMethod: z
      .enum(["charge_automatically", "send_invoice"])
      .optional(),
    currency: z.string().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    description: z.union([z.string(), z.string()]).optional(),
    discounts: z
      .union([
        z.array(
          Schemas$SubscriptionScheduleCreateBodyPhasesItemDiscountsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    endDate: z.number().int().optional(),
    invoiceSettings:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemInvoiceSettings.out.optional(),
    items: z.array(
      Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItem.out,
    ),
    iterations: z.number().int().optional(),
    metadata:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemMetadata.out.optional(),
    onBehalfOf: z.string().optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    transferData:
      Schemas$SubscriptionScheduleCreateBodyPhasesItemTransferData.out.optional(),
    trial: z.boolean().optional(),
    trialEnd: z.number().int().optional(),
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
      iterations: "iterations",
      metadata: "metadata",
      onBehalfOf: "on_behalf_of",
      prorationBehavior: "proration_behavior",
      transferData: "transfer_data",
      trial: "trial",
      trialEnd: "trial_end",
    });
  });

export const Schemas$SubscriptionScheduleCreateBodyPhasesItem = {
  in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItem,
  out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItem,
};
