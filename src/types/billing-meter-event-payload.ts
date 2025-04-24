import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The payload of the event. This contains the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://stripe.com/docs/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
 */
export type BillingMeterEventPayload = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * BillingMeterEventPayload without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterEventPayload = {
  [additionalProperty: string]:
    | External$BillingMeterEventPayload
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterEventPayload
 */
const SchemaIn$BillingMeterEventPayload: z.ZodType<
  BillingMeterEventPayload, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterEventPayload
 */
const SchemaOut$BillingMeterEventPayload: z.ZodType<
  External$BillingMeterEventPayload, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterEventPayload // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BillingMeterEventPayload = {
  in: SchemaIn$BillingMeterEventPayload,
  out: SchemaOut$BillingMeterEventPayload,
};
