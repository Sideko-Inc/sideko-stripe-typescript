import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata
 */
export type SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata =
  {
    [additionalProperty: string]:
      | External$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata,
    out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItemMetadata,
  };
