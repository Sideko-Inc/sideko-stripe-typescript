import { zodTransform } from "@sideko-inc/stripe/core";
import {
  BillingMeterEventAdjustmentCreateBodyCancel,
  External$BillingMeterEventAdjustmentCreateBodyCancel,
  Schemas$BillingMeterEventAdjustmentCreateBodyCancel,
} from "@sideko-inc/stripe/types/billing-meter-event-adjustment-create-body-cancel";
import * as z from "zod";

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * Specifies which event to cancel.
   */
  cancel?: BillingMeterEventAdjustmentCreateBodyCancel | undefined;
  /**
   * The name of the meter event. Corresponds with the `event_name` field on a meter.
   */
  eventName: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
   */
  type: "cancel";
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  cancel?: External$BillingMeterEventAdjustmentCreateBodyCancel | undefined;
  event_name: string;
  expand?: string[] | undefined;
  type: "cancel";
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
    cancel: Schemas$BillingMeterEventAdjustmentCreateBodyCancel.in.optional(),
    event_name: z.string(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cancel"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancel: "cancel",
      event_name: "eventName",
      expand: "expand",
      type: "type",
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
    cancel: Schemas$BillingMeterEventAdjustmentCreateBodyCancel.out.optional(),
    eventName: z.string(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cancel"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cancel: "cancel",
      eventName: "event_name",
      expand: "expand",
      type: "type",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};
