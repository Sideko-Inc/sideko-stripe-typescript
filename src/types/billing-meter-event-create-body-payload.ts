import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The payload of the event. This must contain the fields corresponding to a meter's `customer_mapping.event_payload_key` (default is `stripe_customer_id`) and `value_settings.event_payload_key` (default is `value`). Read more about the [payload](https://docs.stripe.com/billing/subscriptions/usage-based/recording-usage#payload-key-overrides).
 */
export type BillingMeterEventCreateBodyPayload = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * BillingMeterEventCreateBodyPayload without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingMeterEventCreateBodyPayload = {
  [additionalProperty: string]:
    | External$BillingMeterEventCreateBodyPayload
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingMeterEventCreateBodyPayload
 */
const SchemaIn$BillingMeterEventCreateBodyPayload: z.ZodType<
  BillingMeterEventCreateBodyPayload, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingMeterEventCreateBodyPayload
 */
const SchemaOut$BillingMeterEventCreateBodyPayload: z.ZodType<
  External$BillingMeterEventCreateBodyPayload, // output type of this zod object
  z.ZodTypeDef,
  BillingMeterEventCreateBodyPayload // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BillingMeterEventCreateBodyPayload = {
  in: SchemaIn$BillingMeterEventCreateBodyPayload,
  out: SchemaOut$BillingMeterEventCreateBodyPayload,
};
