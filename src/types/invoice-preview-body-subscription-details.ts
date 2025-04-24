import {
  External$InvoicePreviewBodySubscriptionDetailsItemsItem,
  InvoicePreviewBodySubscriptionDetailsItemsItem,
  Schemas$InvoicePreviewBodySubscriptionDetailsItemsItem,
} from "./invoice-preview-body-subscription-details-items-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The subscription creation or modification params to apply as a preview. Cannot be used with `schedule` or `schedule_details` fields.
 */
export type InvoicePreviewBodySubscriptionDetails = {
  billingCycleAnchor?: (("now" | "unchanged") | number) | undefined;
  cancelAt?: (number | string) | undefined;
  cancelAtPeriodEnd?: boolean | undefined;
  cancelNow?: boolean | undefined;
  defaultTaxRates?: (string[] | string) | undefined;
  items?: InvoicePreviewBodySubscriptionDetailsItemsItem[] | undefined;
  prorationBehavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  prorationDate?: number | undefined;
  resumeAt?: "now" | undefined;
  startDate?: number | undefined;
  trialEnd?: ("now" | number) | undefined;
};

/**
 * @internal
 * InvoicePreviewBodySubscriptionDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodySubscriptionDetails = {
  billing_cycle_anchor?: (("now" | "unchanged") | number) | undefined;
  cancel_at?: (number | string) | undefined;
  cancel_at_period_end?: boolean | undefined;
  cancel_now?: boolean | undefined;
  default_tax_rates?: (string[] | string) | undefined;
  items?: External$InvoicePreviewBodySubscriptionDetailsItemsItem[] | undefined;
  proration_behavior?:
    | ("always_invoice" | "create_prorations" | "none")
    | undefined;
  proration_date?: number | undefined;
  resume_at?: "now" | undefined;
  start_date?: number | undefined;
  trial_end?: ("now" | number) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodySubscriptionDetails
 */
const SchemaIn$InvoicePreviewBodySubscriptionDetails: z.ZodType<
  InvoicePreviewBodySubscriptionDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing_cycle_anchor: z
      .union([z.enum(["now", "unchanged"]), z.number().int()])
      .optional(),
    cancel_at: z.union([z.number().int(), z.string()]).optional(),
    cancel_at_period_end: z.boolean().optional(),
    cancel_now: z.boolean().optional(),
    default_tax_rates: z.union([z.array(z.string()), z.string()]).optional(),
    items: z
      .array(Schemas$InvoicePreviewBodySubscriptionDetailsItemsItem.in)
      .optional(),
    proration_behavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    proration_date: z.number().int().optional(),
    resume_at: z.enum(["now"]).optional(),
    start_date: z.number().int().optional(),
    trial_end: z.union([z.enum(["now"]), z.number().int()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing_cycle_anchor: "billingCycleAnchor",
      cancel_at: "cancelAt",
      cancel_at_period_end: "cancelAtPeriodEnd",
      cancel_now: "cancelNow",
      default_tax_rates: "defaultTaxRates",
      items: "items",
      proration_behavior: "prorationBehavior",
      proration_date: "prorationDate",
      resume_at: "resumeAt",
      start_date: "startDate",
      trial_end: "trialEnd",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodySubscriptionDetails
 */
const SchemaOut$InvoicePreviewBodySubscriptionDetails: z.ZodType<
  External$InvoicePreviewBodySubscriptionDetails, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodySubscriptionDetails // the object to be transformed
> = z
  .object({
    billingCycleAnchor: z
      .union([z.enum(["now", "unchanged"]), z.number().int()])
      .optional(),
    cancelAt: z.union([z.number().int(), z.string()]).optional(),
    cancelAtPeriodEnd: z.boolean().optional(),
    cancelNow: z.boolean().optional(),
    defaultTaxRates: z.union([z.array(z.string()), z.string()]).optional(),
    items: z
      .array(Schemas$InvoicePreviewBodySubscriptionDetailsItemsItem.out)
      .optional(),
    prorationBehavior: z
      .enum(["always_invoice", "create_prorations", "none"])
      .optional(),
    prorationDate: z.number().int().optional(),
    resumeAt: z.enum(["now"]).optional(),
    startDate: z.number().int().optional(),
    trialEnd: z.union([z.enum(["now"]), z.number().int()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billingCycleAnchor: "billing_cycle_anchor",
      cancelAt: "cancel_at",
      cancelAtPeriodEnd: "cancel_at_period_end",
      cancelNow: "cancel_now",
      defaultTaxRates: "default_tax_rates",
      items: "items",
      prorationBehavior: "proration_behavior",
      prorationDate: "proration_date",
      resumeAt: "resume_at",
      startDate: "start_date",
      trialEnd: "trial_end",
    });
  });

export const Schemas$InvoicePreviewBodySubscriptionDetails = {
  in: SchemaIn$InvoicePreviewBodySubscriptionDetails,
  out: SchemaOut$InvoicePreviewBodySubscriptionDetails,
};
