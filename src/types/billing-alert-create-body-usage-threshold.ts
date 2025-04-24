import {
  BillingAlertCreateBodyUsageThresholdFiltersItem,
  External$BillingAlertCreateBodyUsageThresholdFiltersItem,
  Schemas$BillingAlertCreateBodyUsageThresholdFiltersItem,
} from "./billing-alert-create-body-usage-threshold-filters-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The configuration of the usage threshold.
 */
export type BillingAlertCreateBodyUsageThreshold = {
  filters?: BillingAlertCreateBodyUsageThresholdFiltersItem[] | undefined;
  gte: number;
  meter?: string | undefined;
  recurrence: "one_time";
};

/**
 * @internal
 * BillingAlertCreateBodyUsageThreshold without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingAlertCreateBodyUsageThreshold = {
  filters?:
    | External$BillingAlertCreateBodyUsageThresholdFiltersItem[]
    | undefined;
  gte: number;
  meter?: string | undefined;
  recurrence: "one_time";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingAlertCreateBodyUsageThreshold
 */
const SchemaIn$BillingAlertCreateBodyUsageThreshold: z.ZodType<
  BillingAlertCreateBodyUsageThreshold, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters: z
      .array(Schemas$BillingAlertCreateBodyUsageThresholdFiltersItem.in)
      .optional(),
    gte: z.number().int(),
    meter: z.string().optional(),
    recurrence: z.enum(["one_time"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      gte: "gte",
      meter: "meter",
      recurrence: "recurrence",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingAlertCreateBodyUsageThreshold
 */
const SchemaOut$BillingAlertCreateBodyUsageThreshold: z.ZodType<
  External$BillingAlertCreateBodyUsageThreshold, // output type of this zod object
  z.ZodTypeDef,
  BillingAlertCreateBodyUsageThreshold // the object to be transformed
> = z
  .object({
    filters: z
      .array(Schemas$BillingAlertCreateBodyUsageThresholdFiltersItem.out)
      .optional(),
    gte: z.number().int(),
    meter: z.string().optional(),
    recurrence: z.enum(["one_time"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      filters: "filters",
      gte: "gte",
      meter: "meter",
      recurrence: "recurrence",
    });
  });

export const Schemas$BillingAlertCreateBodyUsageThreshold = {
  in: SchemaIn$BillingAlertCreateBodyUsageThreshold,
  out: SchemaOut$BillingAlertCreateBodyUsageThreshold,
};
