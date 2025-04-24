import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionsResourceBillingCycleAnchorConfig = {
  /**
   * The day of the month of the billing_cycle_anchor.
   */
  dayOfMonth: number;
  /**
   * The hour of the day of the billing_cycle_anchor.
   */
  hour?: number | null | undefined;
  /**
   * The minute of the hour of the billing_cycle_anchor.
   */
  minute?: number | null | undefined;
  /**
   * The month to start full cycle billing periods.
   */
  month?: number | null | undefined;
  /**
   * The second of the minute of the billing_cycle_anchor.
   */
  second?: number | null | undefined;
};

/**
 * @internal
 * SubscriptionsResourceBillingCycleAnchorConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionsResourceBillingCycleAnchorConfig = {
  day_of_month: number;
  hour?: number | null | undefined;
  minute?: number | null | undefined;
  month?: number | null | undefined;
  second?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionsResourceBillingCycleAnchorConfig
 */
const SchemaIn$SubscriptionsResourceBillingCycleAnchorConfig: z.ZodType<
  SubscriptionsResourceBillingCycleAnchorConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day_of_month: z.number().int(),
    hour: z.number().int().nullable().optional(),
    minute: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    second: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day_of_month: "dayOfMonth",
      hour: "hour",
      minute: "minute",
      month: "month",
      second: "second",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionsResourceBillingCycleAnchorConfig
 */
const SchemaOut$SubscriptionsResourceBillingCycleAnchorConfig: z.ZodType<
  External$SubscriptionsResourceBillingCycleAnchorConfig, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionsResourceBillingCycleAnchorConfig // the object to be transformed
> = z
  .object({
    dayOfMonth: z.number().int(),
    hour: z.number().int().nullable().optional(),
    minute: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    second: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      dayOfMonth: "day_of_month",
      hour: "hour",
      minute: "minute",
      month: "month",
      second: "second",
    });
  });

export const Schemas$SubscriptionsResourceBillingCycleAnchorConfig = {
  in: SchemaIn$SubscriptionsResourceBillingCycleAnchorConfig,
  out: SchemaOut$SubscriptionsResourceBillingCycleAnchorConfig,
};
