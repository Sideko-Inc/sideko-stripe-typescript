import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring
 */
export type SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    intervalCount?: number | undefined;
  };

/**
 * @internal
 * SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring
 */
const SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring: z.ZodType<
  SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring
 */
const SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring: z.ZodType<
  External$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring =
  {
    in: SchemaIn$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring,
    out: SchemaOut$SubscriptionScheduleCreateBodyPhasesItemItemsItemPriceDataRecurring,
  };
