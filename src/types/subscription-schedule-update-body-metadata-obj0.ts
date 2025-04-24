import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyMetadataObj0
 */
export type SubscriptionScheduleUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$SubscriptionScheduleUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyMetadataObj0
 */
const SchemaIn$SubscriptionScheduleUpdateBodyMetadataObj0: z.ZodType<
  SubscriptionScheduleUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyMetadataObj0
 */
const SchemaOut$SubscriptionScheduleUpdateBodyMetadataObj0: z.ZodType<
  External$SubscriptionScheduleUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleUpdateBodyMetadataObj0 = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyMetadataObj0,
  out: SchemaOut$SubscriptionScheduleUpdateBodyMetadataObj0,
};
