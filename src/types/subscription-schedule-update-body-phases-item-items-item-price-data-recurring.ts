import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring
 */
export type SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    intervalCount?: number | undefined;
  };

/**
 * @internal
 * SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring
 */
const SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring: z.ZodType<
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    interval_count: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      interval_count: "intervalCount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring
 */
const SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring: z.ZodType<
  External$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring // the object to be transformed
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    intervalCount: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      intervalCount: "interval_count",
    });
  });

export const Schemas$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring =
  {
    in: SchemaIn$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring,
    out: SchemaOut$SubscriptionScheduleUpdateBodyPhasesItemItemsItemPriceDataRecurring,
  };
