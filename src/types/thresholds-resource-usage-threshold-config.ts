import {
  BillingMeter,
  External$BillingMeter,
  Schemas$BillingMeter,
} from "./billing-meter";
import {
  External$ThresholdsResourceUsageAlertFilter,
  Schemas$ThresholdsResourceUsageAlertFilter,
  ThresholdsResourceUsageAlertFilter,
} from "./thresholds-resource-usage-alert-filter";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The usage threshold alert configuration enables setting up alerts for when a certain usage threshold on a specific meter is crossed.
 */
export type ThresholdsResourceUsageThresholdConfig = {
  /**
   * The filters allow limiting the scope of this usage alert. You can only specify up to one filter at this time.
   */
  filters?: ThresholdsResourceUsageAlertFilter[] | null | undefined;
  /**
   * The value at which this alert will trigger.
   */
  gte: number;
  /**
   * The [Billing Meter](/api/billing/meter) ID whose usage is monitored.
   */
  meter: string | BillingMeter;
  /**
   * Defines how the alert will behave.
   */
  recurrence: "one_time";
};

/**
 * @internal
 * ThresholdsResourceUsageThresholdConfig without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ThresholdsResourceUsageThresholdConfig = {
  filters?: External$ThresholdsResourceUsageAlertFilter[] | null | undefined;
  gte: number;
  meter: string | External$BillingMeter;
  recurrence: "one_time";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ThresholdsResourceUsageThresholdConfig
 */
const SchemaIn$ThresholdsResourceUsageThresholdConfig: z.ZodType<
  ThresholdsResourceUsageThresholdConfig, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    filters: z
      .array(z.lazy(() => Schemas$ThresholdsResourceUsageAlertFilter.in))
      .nullable()
      .optional(),
    gte: z.number().int(),
    meter: z.union([z.string(), Schemas$BillingMeter.in]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ThresholdsResourceUsageThresholdConfig
 */
const SchemaOut$ThresholdsResourceUsageThresholdConfig: z.ZodType<
  External$ThresholdsResourceUsageThresholdConfig, // output type of this zod object
  z.ZodTypeDef,
  ThresholdsResourceUsageThresholdConfig // the object to be transformed
> = z
  .object({
    filters: z
      .array(z.lazy(() => Schemas$ThresholdsResourceUsageAlertFilter.out))
      .nullable()
      .optional(),
    gte: z.number().int(),
    meter: z.union([z.string(), Schemas$BillingMeter.out]),
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

export const Schemas$ThresholdsResourceUsageThresholdConfig = {
  in: SchemaIn$ThresholdsResourceUsageThresholdConfig,
  out: SchemaOut$ThresholdsResourceUsageThresholdConfig,
};
