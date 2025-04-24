import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemMetadata
 */
export type SubscriptionScheduleCreateBodyPhasesItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemMetadata = {
  [additionalProperty: string]:
    | External$SubscriptionScheduleCreateBodyPhasesItemMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemMetadata
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemMetadata: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemMetadata
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemMetadata: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemMetadata = {
  in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemMetadata,
  out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemMetadata,
};
