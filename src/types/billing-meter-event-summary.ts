import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A billing meter event summary represents an aggregated view of a customer's billing meter events within a specified timeframe. It indicates how much
 * usage was accrued by a customer for that period.
 *
 * Note: Meters events are aggregated asynchronously so the meter event summaries provide an eventually consistent view of the reported usage.
 */
export type BillingMeterEventSummary = {
  /**
   * Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). The aggregation strategy is defined on meter via `default_aggregation`.
   */
  aggregatedValue: number;
  /**
   * End timestamp for this event summary (exclusive). Must be aligned with minute boundaries.
   */
  endTime: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The meter associated with this event summary.
   */
  meter: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.meter_event_summary";
  /**
   * Start timestamp for this event summary (inclusive). Must be aligned with minute boundaries.
   */
  startTime: number;
};

/**
 * @internal
 * BillingMeterEventSummary without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterEventSummary = {
  aggregated_value: number;
  end_time: number;
  id: string;
  livemode: boolean;
  meter: string;
  object: "billing.meter_event_summary";
  start_time: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterEventSummary
 */
const SchemaIn$BillingMeterEventSummary: z.ZodType<
  BillingMeterEventSummary, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aggregated_value: z.number(),
    end_time: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    meter: z.string(),
    object: z.enum(["billing.meter_event_summary"]),
    start_time: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aggregated_value: "aggregatedValue",
      end_time: "endTime",
      id: "id",
      livemode: "livemode",
      meter: "meter",
      object: "object",
      start_time: "startTime",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterEventSummary
 */
const SchemaOut$BillingMeterEventSummary: z.ZodType<
  External$BillingMeterEventSummary, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterEventSummary // the object to be transformed
> = z
  .object({
    aggregatedValue: z.number(),
    endTime: z.number().int(),
    id: z.string(),
    livemode: z.boolean(),
    meter: z.string(),
    object: z.enum(["billing.meter_event_summary"]),
    startTime: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aggregatedValue: "aggregated_value",
      endTime: "end_time",
      id: "id",
      livemode: "livemode",
      meter: "meter",
      object: "object",
      startTime: "start_time",
    });
  });

export const Schemas$BillingMeterEventSummary = {
  in: SchemaIn$BillingMeterEventSummary,
  out: SchemaOut$BillingMeterEventSummary,
};
