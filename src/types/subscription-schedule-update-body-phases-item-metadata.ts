import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemMetadata
 */
export type SubscriptionScheduleUpdateBodyPhasesItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemMetadata = {
  [additionalProperty: string]:
    | External$SubscriptionScheduleUpdateBodyPhasesItemMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemMetadata
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemMetadata: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemMetadata
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemMetadata: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemMetadata = {
  in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemMetadata,
  out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemMetadata,
};
