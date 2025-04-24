import {
  BillingMeterEventAdjustmentCreateBodyCancel,
  External$BillingMeterEventAdjustmentCreateBodyCancel,
  Schemas$BillingMeterEventAdjustmentCreateBodyCancel,
} from "./billing-meter-event-adjustment-create-body-cancel";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingMeterEventAdjustmentCreateBody
 */
export type BillingMeterEventAdjustmentCreateBody = {
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

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (BillingMeterEventAdjustmentCreateBodyCancel | undefined)
    | string
    | (string[] | undefined)
    | "cancel"
    | any
    | null
    | undefined;
};

/**
 * @internal
 * BillingMeterEventAdjustmentCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterEventAdjustmentCreateBody = {
  cancel?: External$BillingMeterEventAdjustmentCreateBodyCancel | undefined;
  event_name: string;
  expand?: string[] | undefined;
  type: "cancel";

  [additionalProperty: string]:
    | (External$BillingMeterEventAdjustmentCreateBodyCancel | undefined)
    | string
    | (string[] | undefined)
    | "cancel"
    | External$BillingMeterEventAdjustmentCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterEventAdjustmentCreateBody
 */
const SchemaIn$BillingMeterEventAdjustmentCreateBody: z.ZodType<
  BillingMeterEventAdjustmentCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancel: Schemas$BillingMeterEventAdjustmentCreateBodyCancel.in.optional(),
    event_name: z.string(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cancel"]),
  })
  .catchall(zodRequiredAny)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterEventAdjustmentCreateBody
 */
const SchemaOut$BillingMeterEventAdjustmentCreateBody: z.ZodType<
  External$BillingMeterEventAdjustmentCreateBody, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterEventAdjustmentCreateBody // the object to be transformed
> = z
  .object({
    cancel: Schemas$BillingMeterEventAdjustmentCreateBodyCancel.out.optional(),
    eventName: z.string(),
    expand: z.array(z.string()).optional(),
    type: z.enum(["cancel"]),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cancel: "cancel",
      eventName: "event_name",
      expand: "expand",
      type: "type",
    });
  });

export const Schemas$BillingMeterEventAdjustmentCreateBody = {
  in: SchemaIn$BillingMeterEventAdjustmentCreateBody,
  out: SchemaOut$BillingMeterEventAdjustmentCreateBody,
};
