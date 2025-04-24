import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionUpdateBodyItemsItemPriceDataRecurring
 */
export type SubscriptionUpdateBodyItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyItemsItemPriceDataRecurring
 */
const SchemaIn$SubscriptionUpdateBodyItemsItemPriceDataRecurring: z.ZodType<
  SubscriptionUpdateBodyItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyItemsItemPriceDataRecurring
 */
const SchemaOut$SubscriptionUpdateBodyItemsItemPriceDataRecurring: z.ZodType<
  External$SubscriptionUpdateBodyItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$SubscriptionUpdateBodyItemsItemPriceDataRecurring = {
  in: SchemaIn$SubscriptionUpdateBodyItemsItemPriceDataRecurring,
  out: SchemaOut$SubscriptionUpdateBodyItemsItemPriceDataRecurring,
};
