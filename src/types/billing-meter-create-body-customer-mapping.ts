import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Fields that specify how to map a meter event to a customer.
 */
export type BillingMeterCreateBodyCustomerMapping = {
  eventPayloadKey: string;
  type: "by_id";
};

/**
 * @internal
 * BillingMeterCreateBodyCustomerMapping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterCreateBodyCustomerMapping = {
  event_payload_key: string;
  type: "by_id";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterCreateBodyCustomerMapping
 */
const SchemaIn$BillingMeterCreateBodyCustomerMapping: z.ZodType<
  BillingMeterCreateBodyCustomerMapping, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterCreateBodyCustomerMapping
 */
const SchemaOut$BillingMeterCreateBodyCustomerMapping: z.ZodType<
  External$BillingMeterCreateBodyCustomerMapping, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterCreateBodyCustomerMapping // the object to be transformed
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

export const Schemas$BillingMeterCreateBodyCustomerMapping = {
  in: SchemaIn$BillingMeterCreateBodyCustomerMapping,
  out: SchemaOut$BillingMeterCreateBodyCustomerMapping,
};
