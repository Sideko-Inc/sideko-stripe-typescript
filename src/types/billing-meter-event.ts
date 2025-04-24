import {
  BillingMeterEventPayload,
  External$BillingMeterEventPayload,
  Schemas$BillingMeterEventPayload,
} from "./billing-meter-event-payload";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Meter events represent actions that customers take in your system. You can use meter events to bill a customer based on their usage. Meter events are associated with billing meters, which define both the contents of the event’s payload and how to aggregate those events.
 */
export type BillingMeterEvent = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  eventName: string;
  /**
   * A unique identifier for the event.
   */
  identifier: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.meter_event";
  /**
   * The payload of the event. This contains the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://stripe.com/docs/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
   */
  payload: BillingMeterEventPayload;
  /**
   * The timestamp passed in when creating the event. Measured in seconds since the Unix epoch.
   */
  timestamp: number;
};

/**
 * @internal
 * BillingMeterEvent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterEvent = {
  created: number;
  event_name: string;
  identifier: string;
  livemode: boolean;
  object: "billing.meter_event";
  payload: External$BillingMeterEventPayload;
  timestamp: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterEvent
 */
const SchemaIn$BillingMeterEvent: z.ZodType<
  BillingMeterEvent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    event_name: z.string(),
    identifier: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.meter_event"]),
    payload: Schemas$BillingMeterEventPayload.in,
    timestamp: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      event_name: "eventName",
      identifier: "identifier",
      livemode: "livemode",
      object: "object",
      payload: "payload",
      timestamp: "timestamp",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterEvent
 */
const SchemaOut$BillingMeterEvent: z.ZodType<
  External$BillingMeterEvent, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterEvent // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    eventName: z.string(),
    identifier: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.meter_event"]),
    payload: Schemas$BillingMeterEventPayload.out,
    timestamp: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      eventName: "event_name",
      identifier: "identifier",
      livemode: "livemode",
      object: "object",
      payload: "payload",
      timestamp: "timestamp",
    });
  });

export const Schemas$BillingMeterEvent = {
  in: SchemaIn$BillingMeterEvent,
  out: SchemaOut$BillingMeterEvent,
};
