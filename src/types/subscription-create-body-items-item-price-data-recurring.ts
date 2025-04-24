import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyItemsItemPriceDataRecurring
 */
export type SubscriptionCreateBodyItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyItemsItemPriceDataRecurring
 */
const SchemaIn$SubscriptionCreateBodyItemsItemPriceDataRecurring: z.ZodType<
  SubscriptionCreateBodyItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyItemsItemPriceDataRecurring
 */
const SchemaOut$SubscriptionCreateBodyItemsItemPriceDataRecurring: z.ZodType<
  External$SubscriptionCreateBodyItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyItemsItemPriceDataRecurring = {
  in: SchemaIn$SubscriptionCreateBodyItemsItemPriceDataRecurring,
  out: SchemaOut$SubscriptionCreateBodyItemsItemPriceDataRecurring,
};
