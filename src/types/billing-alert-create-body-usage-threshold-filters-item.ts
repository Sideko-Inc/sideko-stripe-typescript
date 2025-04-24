import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingAlertCreateBodyUsageThresholdFiltersItem
 */
export type BillingAlertCreateBodyUsageThresholdFiltersItem = {
  customer?: string | undefined;
  type: "customer";
};

/**
 * @internal
 * BillingAlertCreateBodyUsageThresholdFiltersItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingAlertCreateBodyUsageThresholdFiltersItem = {
  customer?: string | undefined;
  type: "customer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingAlertCreateBodyUsageThresholdFiltersItem
 */
const SchemaIn$BillingAlertCreateBodyUsageThresholdFiltersItem: z.ZodType<
  BillingAlertCreateBodyUsageThresholdFiltersItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer: z.string().optional(),
    type: z.enum(["customer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingAlertCreateBodyUsageThresholdFiltersItem
 */
const SchemaOut$BillingAlertCreateBodyUsageThresholdFiltersItem: z.ZodType<
  External$BillingAlertCreateBodyUsageThresholdFiltersItem, // output type of this zod object
  z.ZodTypeDef,
  BillingAlertCreateBodyUsageThresholdFiltersItem // the object to be transformed
> = z
  .object({
    customer: z.string().optional(),
    type: z.enum(["customer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customer: "customer",
      type: "type",
    });
  });

export const Schemas$BillingAlertCreateBodyUsageThresholdFiltersItem = {
  in: SchemaIn$BillingAlertCreateBodyUsageThresholdFiltersItem,
  out: SchemaOut$BillingAlertCreateBodyUsageThresholdFiltersItem,
};
