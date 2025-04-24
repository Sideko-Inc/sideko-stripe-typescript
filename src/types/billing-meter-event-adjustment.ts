import {
  BillingMeterResourceBillingMeterEventAdjustmentCancel,
  External$BillingMeterResourceBillingMeterEventAdjustmentCancel,
  Schemas$BillingMeterResourceBillingMeterEventAdjustmentCancel,
} from "./billing-meter-resource-billing-meter-event-adjustment-cancel";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A billing meter event adjustment is a resource that allows you to cancel a meter event. For example, you might create a billing meter event adjustment to cancel a meter event that was created in error or attached to the wrong customer.
 */
export type BillingMeterEventAdjustment = {
  cancel?: BillingMeterResourceBillingMeterEventAdjustmentCancel | undefined;
  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  eventName: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "billing.meter_event_adjustment";
  /**
   * The meter event adjustment's status.
   */
  status: "complete" | "pending";
  /**
   * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
   */
  type: "cancel";
};

/**
 * @internal
 * BillingMeterEventAdjustment without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterEventAdjustment = {
  cancel?:
    | External$BillingMeterResourceBillingMeterEventAdjustmentCancel
    | undefined;
  event_name: string;
  livemode: boolean;
  object: "billing.meter_event_adjustment";
  status: "complete" | "pending";
  type: "cancel";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterEventAdjustment
 */
const SchemaIn$BillingMeterEventAdjustment: z.ZodType<
  BillingMeterEventAdjustment, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancel:
      Schemas$BillingMeterResourceBillingMeterEventAdjustmentCancel.in.optional(),
    event_name: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.meter_event_adjustment"]),
    status: z.enum(["complete", "pending"]),
    type: z.enum(["cancel"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancel: "cancel",
      event_name: "eventName",
      livemode: "livemode",
      object: "object",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterEventAdjustment
 */
const SchemaOut$BillingMeterEventAdjustment: z.ZodType<
  External$BillingMeterEventAdjustment, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterEventAdjustment // the object to be transformed
> = z
  .object({
    cancel:
      Schemas$BillingMeterResourceBillingMeterEventAdjustmentCancel.out.optional(),
    eventName: z.string(),
    livemode: z.boolean(),
    object: z.enum(["billing.meter_event_adjustment"]),
    status: z.enum(["complete", "pending"]),
    type: z.enum(["cancel"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancel: "cancel",
      eventName: "event_name",
      livemode: "livemode",
      object: "object",
      status: "status",
      type: "type",
    });
  });

export const Schemas$BillingMeterEventAdjustment = {
  in: SchemaIn$BillingMeterEventAdjustment,
  out: SchemaOut$BillingMeterEventAdjustment,
};
