import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type NotificationEventData = {
  /**
   * Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](https://stripe.com/docs/api#invoice_object) as the value of the object key.
   */
  object: Record<string, any>;
  /**
   * Object containing the names of the updated attributes and their values prior to the event (only included in events of type `*.updated`). If an array attribute has any updated elements, this object contains the entire array. In Stripe API versions 2017-04-06 or earlier, an updated array attribute in this object includes only the updated array elements.
   */
  previousAttributes?: Record<string, any> | undefined;
};

/**
 * @internal
 * NotificationEventData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$NotificationEventData = {
  object: Record<string, any>;
  previous_attributes?: Record<string, any> | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object NotificationEventData
 */
const SchemaIn$NotificationEventData: z.ZodType<
  NotificationEventData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    object: z.record(z.string(), z.any()),
    previous_attributes: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      object: "object",
      previous_attributes: "previousAttributes",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$NotificationEventData
 */
const SchemaOut$NotificationEventData: z.ZodType<
  External$NotificationEventData, // output type of this zod object
  z.ZodTypeDef,
  NotificationEventData // the object to be transformed
> = z
  .object({
    object: z.record(z.string(), z.any()),
    previousAttributes: z.record(z.string(), z.any()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      object: "object",
      previousAttributes: "previous_attributes",
    });
  });

export const Schemas$NotificationEventData = {
  in: SchemaIn$NotificationEventData,
  out: SchemaOut$NotificationEventData,
};
