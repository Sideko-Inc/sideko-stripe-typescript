import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyMetadataObj0
 */
export type SubscriptionScheduleCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$SubscriptionScheduleCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyMetadataObj0
 */
const SchemaIn$SubscriptionScheduleCreateBodyMetadataObj0: z.ZodType<
  SubscriptionScheduleCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyMetadataObj0
 */
const SchemaOut$SubscriptionScheduleCreateBodyMetadataObj0: z.ZodType<
  External$SubscriptionScheduleCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleCreateBodyMetadataObj0 = {
  in: SchemaIn$SubscriptionScheduleCreateBodyMetadataObj0,
  out: SchemaOut$SubscriptionScheduleCreateBodyMetadataObj0,
};
