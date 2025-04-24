import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
 */
export type SubscriptionScheduleConfigurationItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleConfigurationItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleConfigurationItemMetadata = {
  [additionalProperty: string]:
    | (External$SubscriptionScheduleConfigurationItemMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleConfigurationItemMetadata
 */
const SchemaIn$SubscriptionScheduleConfigurationItemMetadata: z.ZodType<
  SubscriptionScheduleConfigurationItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleConfigurationItemMetadata
 */
const SchemaOut$SubscriptionScheduleConfigurationItemMetadata: z.ZodType<
  External$SubscriptionScheduleConfigurationItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleConfigurationItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleConfigurationItemMetadata = {
  in: SchemaIn$SubscriptionScheduleConfigurationItemMetadata,
  out: SchemaOut$SubscriptionScheduleConfigurationItemMetadata,
};
