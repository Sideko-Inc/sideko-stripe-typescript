import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to a phase. Metadata on a schedule's phase will update the underlying subscription's `metadata` when the phase is entered. Updating the underlying subscription's `metadata` directly will not affect the current phase's `metadata`.
 */
export type SubscriptionSchedulePhaseConfigurationMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionSchedulePhaseConfigurationMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionSchedulePhaseConfigurationMetadata = {
  [additionalProperty: string]:
    | (External$SubscriptionSchedulePhaseConfigurationMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionSchedulePhaseConfigurationMetadata
 */
const SchemaIn$SubscriptionSchedulePhaseConfigurationMetadata: z.ZodType<
  SubscriptionSchedulePhaseConfigurationMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionSchedulePhaseConfigurationMetadata
 */
const SchemaOut$SubscriptionSchedulePhaseConfigurationMetadata: z.ZodType<
  External$SubscriptionSchedulePhaseConfigurationMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionSchedulePhaseConfigurationMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionSchedulePhaseConfigurationMetadata = {
  in: SchemaIn$SubscriptionSchedulePhaseConfigurationMetadata,
  out: SchemaOut$SubscriptionSchedulePhaseConfigurationMetadata,
};
