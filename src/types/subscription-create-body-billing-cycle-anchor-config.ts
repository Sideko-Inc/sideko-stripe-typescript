import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Mutually exclusive with billing_cycle_anchor and only valid with monthly and yearly price intervals. When provided, the billing_cycle_anchor is set to the next occurence of the day_of_month at the hour, minute, and second UTC.
 */
export type SubscriptionCreateBodyBillingCycleAnchorConfig = {
  dayOfMonth: number;
  hour?: number | undefined;
  minute?: number | undefined;
  month?: number | undefined;
  second?: number | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyBillingCycleAnchorConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyBillingCycleAnchorConfig = {
  day_of_month: number;
  hour?: number | undefined;
  minute?: number | undefined;
  month?: number | undefined;
  second?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyBillingCycleAnchorConfig
 */
const SchemaIn$SubscriptionCreateBodyBillingCycleAnchorConfig: z.ZodType<
  SubscriptionCreateBodyBillingCycleAnchorConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day_of_month: z.number().int(),
    hour: z.number().int().optional(),
    minute: z.number().int().optional(),
    month: z.number().int().optional(),
    second: z.number().int().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyBillingCycleAnchorConfig
 */
const SchemaOut$SubscriptionCreateBodyBillingCycleAnchorConfig: z.ZodType<
  External$SubscriptionCreateBodyBillingCycleAnchorConfig, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyBillingCycleAnchorConfig // the object to be transformed
> = z
  .object({
    dayOfMonth: z.number().int(),
    hour: z.number().int().optional(),
    minute: z.number().int().optional(),
    month: z.number().int().optional(),
    second: z.number().int().optional(),
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

export const Schemas$SubscriptionCreateBodyBillingCycleAnchorConfig = {
  in: SchemaIn$SubscriptionCreateBodyBillingCycleAnchorConfig,
  out: SchemaOut$SubscriptionCreateBodyBillingCycleAnchorConfig,
};
