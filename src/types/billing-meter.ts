import {
  BillingMeterResourceAggregationSettings,
  External$BillingMeterResourceAggregationSettings,
  Schemas$BillingMeterResourceAggregationSettings,
} from "./billing-meter-resource-aggregation-settings";
import {
  BillingMeterResourceBillingMeterStatusTransitions,
  External$BillingMeterResourceBillingMeterStatusTransitions,
  Schemas$BillingMeterResourceBillingMeterStatusTransitions,
} from "./billing-meter-resource-billing-meter-status-transitions";
import {
  BillingMeterResourceBillingMeterValue,
  External$BillingMeterResourceBillingMeterValue,
  Schemas$BillingMeterResourceBillingMeterValue,
} from "./billing-meter-resource-billing-meter-value";
import {
  BillingMeterResourceCustomerMappingSettings,
  External$BillingMeterResourceCustomerMappingSettings,
  Schemas$BillingMeterResourceCustomerMappingSettings,
} from "./billing-meter-resource-customer-mapping-settings";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Meters specify how to aggregate meter events over a billing period. Meter events represent the actions that customers take in your system. Meters attach to prices and form the basis of the bill.
 *
 * Related guide: [Usage based billing](https://docs.stripe.com/billing/subscriptions/usage-based)
 */
export type BillingMeter = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  customerMapping: BillingMeterResourceCustomerMappingSettings;
  defaultAggregation: BillingMeterResourceAggregationSettings;
  /**
   * The meter's name.
   */
  displayName: string;
  /**
   * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
   */
  eventName: string;
  /**
   * The time window to pre-aggregate meter events for, if any.
   */
  eventTimeWindow?: ("day" | "hour") | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.meter";
  /**
   * The meter's status.
   */
  status: "active" | "inactive";
  statusTransitions: BillingMeterResourceBillingMeterStatusTransitions;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
  valueSettings: BillingMeterResourceBillingMeterValue;
};

/**
 * @internal
 * BillingMeter without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeter = {
  created: number;
  customer_mapping: External$BillingMeterResourceCustomerMappingSettings;
  default_aggregation: External$BillingMeterResourceAggregationSettings;
  display_name: string;
  event_name: string;
  event_time_window?: ("day" | "hour") | null | undefined;
  id: string;
  livemode: boolean;
  object: "billing.meter";
  status: "active" | "inactive";
  status_transitions: External$BillingMeterResourceBillingMeterStatusTransitions;
  updated: number;
  value_settings: External$BillingMeterResourceBillingMeterValue;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeter
 */
const SchemaIn$BillingMeter: z.ZodType<
  BillingMeter, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    customer_mapping: Schemas$BillingMeterResourceCustomerMappingSettings.in,
    default_aggregation: Schemas$BillingMeterResourceAggregationSettings.in,
    display_name: z.string(),
    event_name: z.string(),
    event_time_window: z.enum(["day", "hour"]).nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.meter"]),
    status: z.enum(["active", "inactive"]),
    status_transitions:
      Schemas$BillingMeterResourceBillingMeterStatusTransitions.in,
    updated: z.number().int(),
    value_settings: Schemas$BillingMeterResourceBillingMeterValue.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customer_mapping: "customerMapping",
      default_aggregation: "defaultAggregation",
      display_name: "displayName",
      event_name: "eventName",
      event_time_window: "eventTimeWindow",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      status_transitions: "statusTransitions",
      updated: "updated",
      value_settings: "valueSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeter
 */
const SchemaOut$BillingMeter: z.ZodType<
  External$BillingMeter, // output type of this zod object
  z.ZodTypeDef,
  BillingMeter // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    customerMapping: Schemas$BillingMeterResourceCustomerMappingSettings.out,
    defaultAggregation: Schemas$BillingMeterResourceAggregationSettings.out,
    displayName: z.string(),
    eventName: z.string(),
    eventTimeWindow: z.enum(["day", "hour"]).nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.meter"]),
    status: z.enum(["active", "inactive"]),
    statusTransitions:
      Schemas$BillingMeterResourceBillingMeterStatusTransitions.out,
    updated: z.number().int(),
    valueSettings: Schemas$BillingMeterResourceBillingMeterValue.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      customerMapping: "customer_mapping",
      defaultAggregation: "default_aggregation",
      displayName: "display_name",
      eventName: "event_name",
      eventTimeWindow: "event_time_window",
      id: "id",
      livemode: "livemode",
      object: "object",
      status: "status",
      statusTransitions: "status_transitions",
      updated: "updated",
      valueSettings: "value_settings",
    });
  });

export const Schemas$BillingMeter = {
  in: SchemaIn$BillingMeter,
  out: SchemaOut$BillingMeter,
};
