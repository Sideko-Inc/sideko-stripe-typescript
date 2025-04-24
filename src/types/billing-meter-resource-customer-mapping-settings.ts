import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingMeterResourceCustomerMappingSettings = {
  /**
   * The key in the meter event payload to use for mapping the event to a customer.
   */
  eventPayloadKey: string;
  /**
   * The method for mapping a meter event to a customer.
   */
  type: "by_id";
};

/**
 * @internal
 * BillingMeterResourceCustomerMappingSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterResourceCustomerMappingSettings = {
  event_payload_key: string;
  type: "by_id";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterResourceCustomerMappingSettings
 */
const SchemaIn$BillingMeterResourceCustomerMappingSettings: z.ZodType<
  BillingMeterResourceCustomerMappingSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    event_payload_key: z.string(),
    type: z.enum(["by_id"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      event_payload_key: "eventPayloadKey",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterResourceCustomerMappingSettings
 */
const SchemaOut$BillingMeterResourceCustomerMappingSettings: z.ZodType<
  External$BillingMeterResourceCustomerMappingSettings, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterResourceCustomerMappingSettings // the object to be transformed
> = z
  .object({
    eventPayloadKey: z.string(),
    type: z.enum(["by_id"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventPayloadKey: "event_payload_key",
      type: "type",
    });
  });

export const Schemas$BillingMeterResourceCustomerMappingSettings = {
  in: SchemaIn$BillingMeterResourceCustomerMappingSettings,
  out: SchemaOut$BillingMeterResourceCustomerMappingSettings,
};
