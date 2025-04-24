import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionItemUpdateBodyPriceDataRecurring
 */
export type SubscriptionItemUpdateBodyPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * SubscriptionItemUpdateBodyPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemUpdateBodyPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemUpdateBodyPriceDataRecurring
 */
const SchemaIn$SubscriptionItemUpdateBodyPriceDataRecurring: z.ZodType<
  SubscriptionItemUpdateBodyPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemUpdateBodyPriceDataRecurring
 */
const SchemaOut$SubscriptionItemUpdateBodyPriceDataRecurring: z.ZodType<
  External$SubscriptionItemUpdateBodyPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemUpdateBodyPriceDataRecurring // the object to be transformed
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

export const Schemas$SubscriptionItemUpdateBodyPriceDataRecurring = {
  in: SchemaIn$SubscriptionItemUpdateBodyPriceDataRecurring,
  out: SchemaOut$SubscriptionItemUpdateBodyPriceDataRecurring,
};
