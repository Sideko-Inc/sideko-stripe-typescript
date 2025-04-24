import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring
 */
export type CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring
 */
const SchemaIn$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring: z.ZodType<
  CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring
 */
const SchemaOut$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring: z.ZodType<
  External$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring,
    out: SchemaOut$CustomerSubscriptionCreateBodyItemsItemPriceDataRecurring,
  };
