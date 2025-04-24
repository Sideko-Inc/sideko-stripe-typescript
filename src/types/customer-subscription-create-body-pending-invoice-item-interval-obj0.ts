import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0
 */
export type CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0 = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0 =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0
 */
const SchemaIn$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0: z.ZodType<
  CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0
 */
const SchemaOut$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0: z.ZodType<
  External$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0 // the object to be transformed
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

export const Schemas$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0 =
  {
    in: SchemaIn$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0,
    out: SchemaOut$CustomerSubscriptionCreateBodyPendingInvoiceItemIntervalObj0,
  };
