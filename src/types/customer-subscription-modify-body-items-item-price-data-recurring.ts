import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring
 */
export type CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring
 */
const SchemaIn$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring: z.ZodType<
  CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring
 */
const SchemaOut$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring: z.ZodType<
  External$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring,
    out: SchemaOut$CustomerSubscriptionModifyBodyItemsItemPriceDataRecurring,
  };
