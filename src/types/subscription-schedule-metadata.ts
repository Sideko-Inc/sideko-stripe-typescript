import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type SubscriptionScheduleMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleMetadata = {
  [additionalProperty: string]:
    | (External$SubscriptionScheduleMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleMetadata
 */
const SchemaIn$SubscriptionScheduleMetadata: z.ZodType<
  SubscriptionScheduleMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleMetadata
 */
const SchemaOut$SubscriptionScheduleMetadata: z.ZodType<
  External$SubscriptionScheduleMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleMetadata = {
  in: SchemaIn$SubscriptionScheduleMetadata,
  out: SchemaOut$SubscriptionScheduleMetadata,
};
