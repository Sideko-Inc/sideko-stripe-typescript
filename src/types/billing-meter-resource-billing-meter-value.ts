import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingMeterResourceBillingMeterValue = {
  /**
   * The key in the meter event payload to use as the value for this meter.
   */
  eventPayloadKey: string;
};

/**
 * @internal
 * BillingMeterResourceBillingMeterValue without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterResourceBillingMeterValue = {
  event_payload_key: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterResourceBillingMeterValue
 */
const SchemaIn$BillingMeterResourceBillingMeterValue: z.ZodType<
  BillingMeterResourceBillingMeterValue, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    event_payload_key: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      event_payload_key: "eventPayloadKey",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterResourceBillingMeterValue
 */
const SchemaOut$BillingMeterResourceBillingMeterValue: z.ZodType<
  External$BillingMeterResourceBillingMeterValue, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterResourceBillingMeterValue // the object to be transformed
> = z
  .object({
    eventPayloadKey: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventPayloadKey: "event_payload_key",
    });
  });

export const Schemas$BillingMeterResourceBillingMeterValue = {
  in: SchemaIn$BillingMeterResourceBillingMeterValue,
  out: SchemaOut$BillingMeterResourceBillingMeterValue,
};
