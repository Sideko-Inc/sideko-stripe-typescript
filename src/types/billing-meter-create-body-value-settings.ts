import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Fields that specify how to calculate a meter event's value.
 */
export type BillingMeterCreateBodyValueSettings = {
  eventPayloadKey: string;
};

/**
 * @internal
 * BillingMeterCreateBodyValueSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterCreateBodyValueSettings = {
  event_payload_key: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterCreateBodyValueSettings
 */
const SchemaIn$BillingMeterCreateBodyValueSettings: z.ZodType<
  BillingMeterCreateBodyValueSettings, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterCreateBodyValueSettings
 */
const SchemaOut$BillingMeterCreateBodyValueSettings: z.ZodType<
  External$BillingMeterCreateBodyValueSettings, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterCreateBodyValueSettings // the object to be transformed
> = z
  .object({
    eventPayloadKey: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      eventPayloadKey: "event_payload_key",
    });
  });

export const Schemas$BillingMeterCreateBodyValueSettings = {
  in: SchemaIn$BillingMeterCreateBodyValueSettings,
  out: SchemaOut$BillingMeterCreateBodyValueSettings,
};
