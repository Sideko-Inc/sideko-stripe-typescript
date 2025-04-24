import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionItemCreateBodyPriceDataRecurring
 */
export type SubscriptionItemCreateBodyPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * SubscriptionItemCreateBodyPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionItemCreateBodyPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionItemCreateBodyPriceDataRecurring
 */
const SchemaIn$SubscriptionItemCreateBodyPriceDataRecurring: z.ZodType<
  SubscriptionItemCreateBodyPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionItemCreateBodyPriceDataRecurring
 */
const SchemaOut$SubscriptionItemCreateBodyPriceDataRecurring: z.ZodType<
  External$SubscriptionItemCreateBodyPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionItemCreateBodyPriceDataRecurring // the object to be transformed
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

export const Schemas$SubscriptionItemCreateBodyPriceDataRecurring = {
  in: SchemaIn$SubscriptionItemCreateBodyPriceDataRecurring,
  out: SchemaOut$SubscriptionItemCreateBodyPriceDataRecurring,
};
