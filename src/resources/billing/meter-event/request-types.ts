import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingMeterEventCreateBodyPayload,
  External$BillingMeterEventCreateBodyPayload,
  Schemas$BillingMeterEventCreateBodyPayload,
} from "@sideko-inc/stripe/types/billing-meter-event-create-body-payload";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  eventName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A unique identifier for the event. If not provided, one is generated. We recommend using UUID-like identifiers. We will enforce uniqueness within a rolling period of at least 24 hours. The enforcement of uniqueness primarily addresses issues arising from accidental retries or other problems occurring within extremely brief time intervals. This approach helps prevent duplicate entries and ensures data integrity in high-frequency operations.
   */
  identifier?: string | undefined;
  /**
   * The payload of the event. This must contain the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
   */
  payload: BillingMeterEventCreateBodyPayload;
  /**
   * The time of the event. Measured in seconds since the Unix epoch. Must be within the past 35 calendar days or up to 5 minutes in the future. Defaults to current timestamp if not specified.
   */
  timestamp?: number | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  event_name: string;
  expand?: string[] | undefined;
  identifier?: string | undefined;
  payload: External$BillingMeterEventCreateBodyPayload;
  timestamp?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    event_name: z.string(),
    expand: z.array(z.string()).optional(),
    identifier: z.string().optional(),
    payload: Schemas$BillingMeterEventCreateBodyPayload.in,
    timestamp: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      event_name: "eventName",
      expand: "expand",
      identifier: "identifier",
      payload: "payload",
      timestamp: "timestamp",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    eventName: z.string(),
    expand: z.array(z.string()).optional(),
    identifier: z.string().optional(),
    payload: Schemas$BillingMeterEventCreateBodyPayload.out,
    timestamp: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventName: "event_name",
      expand: "expand",
      identifier: "identifier",
      payload: "payload",
      timestamp: "timestamp",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
