import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionCreateBodyPendingInvoiceItemIntervalObj0
 */
export type SubscriptionCreateBodyPendingInvoiceItemIntervalObj0 = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyPendingInvoiceItemIntervalObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0 = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyPendingInvoiceItemIntervalObj0
 */
const SchemaIn$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0: z.ZodType<
  SubscriptionCreateBodyPendingInvoiceItemIntervalObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0
 */
const SchemaOut$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0: z.ZodType<
  External$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyPendingInvoiceItemIntervalObj0 // the object to be transformed
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

export const Schemas$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0 = {
  in: SchemaIn$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0,
  out: SchemaOut$SubscriptionCreateBodyPendingInvoiceItemIntervalObj0,
};
