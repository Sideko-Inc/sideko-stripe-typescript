import {
  BillingMeterCreateBodyCustomerMapping,
  External$BillingMeterCreateBodyCustomerMapping,
  Schemas$BillingMeterCreateBodyCustomerMapping,
} from "./billing-meter-create-body-customer-mapping";
import {
  BillingMeterCreateBodyDefaultAggregation,
  External$BillingMeterCreateBodyDefaultAggregation,
  Schemas$BillingMeterCreateBodyDefaultAggregation,
} from "./billing-meter-create-body-default-aggregation";
import {
  BillingMeterCreateBodyValueSettings,
  External$BillingMeterCreateBodyValueSettings,
  Schemas$BillingMeterCreateBodyValueSettings,
} from "./billing-meter-create-body-value-settings";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingMeterCreateBody
 */
export type BillingMeterCreateBody = {
  /**
   * Fields that specify how to map a meter event to a customer.
   */
  customerMapping?: BillingMeterCreateBodyCustomerMapping | undefined;
  /**
   * The default settings to aggregate a meter's events with.
   */
  defaultAggregation: BillingMeterCreateBodyDefaultAggregation;
  /**
   * The meter’s name. Not visible to the customer.
   */
  displayName: string;
  /**
   * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
   */
  eventName: string;
  /**
   * The time window to pre-aggregate meter events for, if any.
   */
  eventTimeWindow?: ("day" | "hour") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Fields that specify how to calculate a meter event's value.
   */
  valueSettings?: BillingMeterCreateBodyValueSettings | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (BillingMeterCreateBodyCustomerMapping | undefined)
    | BillingMeterCreateBodyDefaultAggregation
    | string
    | string
    | (("day" | "hour") | undefined)
    | (string[] | undefined)
    | (BillingMeterCreateBodyValueSettings | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingMeterCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterCreateBody = {
  customer_mapping?: External$BillingMeterCreateBodyCustomerMapping | undefined;
  default_aggregation: External$BillingMeterCreateBodyDefaultAggregation;
  display_name: string;
  event_name: string;
  event_time_window?: ("day" | "hour") | undefined;
  expand?: string[] | undefined;
  value_settings?: External$BillingMeterCreateBodyValueSettings | undefined;

  [additionalProperty: string]:
    | (External$BillingMeterCreateBodyCustomerMapping | undefined)
    | External$BillingMeterCreateBodyDefaultAggregation
    | string
    | string
    | (("day" | "hour") | undefined)
    | (string[] | undefined)
    | (External$BillingMeterCreateBodyValueSettings | undefined)
    | External$BillingMeterCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterCreateBody
 */
const SchemaIn$BillingMeterCreateBody: z.ZodType<
  BillingMeterCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    customer_mapping:
      Schemas$BillingMeterCreateBodyCustomerMapping.in.optional(),
    default_aggregation: Schemas$BillingMeterCreateBodyDefaultAggregation.in,
    display_name: z.string(),
    event_name: z.string(),
    event_time_window: z.enum(["day", "hour"]).optional(),
    expand: z.array(z.string()).optional(),
    value_settings: Schemas$BillingMeterCreateBodyValueSettings.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customer_mapping: "customerMapping",
      default_aggregation: "defaultAggregation",
      display_name: "displayName",
      event_name: "eventName",
      event_time_window: "eventTimeWindow",
      expand: "expand",
      value_settings: "valueSettings",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterCreateBody
 */
const SchemaOut$BillingMeterCreateBody: z.ZodType<
  External$BillingMeterCreateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterCreateBody // the object to be transformed
> = z
  .object({
    customerMapping:
      Schemas$BillingMeterCreateBodyCustomerMapping.out.optional(),
    defaultAggregation: Schemas$BillingMeterCreateBodyDefaultAggregation.out,
    displayName: z.string(),
    eventName: z.string(),
    eventTimeWindow: z.enum(["day", "hour"]).optional(),
    expand: z.array(z.string()).optional(),
    valueSettings: Schemas$BillingMeterCreateBodyValueSettings.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      customerMapping: "customer_mapping",
      defaultAggregation: "default_aggregation",
      displayName: "display_name",
      eventName: "event_name",
      eventTimeWindow: "event_time_window",
      expand: "expand",
      valueSettings: "value_settings",
    });
  });

export const Schemas$BillingMeterCreateBody = {
  in: SchemaIn$BillingMeterCreateBody,
  out: SchemaOut$BillingMeterCreateBody,
};
