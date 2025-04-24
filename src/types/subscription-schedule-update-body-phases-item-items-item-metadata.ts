import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata
 */
export type SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata =
  {
    [additionalProperty: string]:
      | External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItemMetadata,
  };
