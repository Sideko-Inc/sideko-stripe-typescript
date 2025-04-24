import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionPendingInvoiceItemInterval = {
  /**
   * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
   */
  interval: "day" | "month" | "week" | "year";
  /**
   * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
   */
  intervalCount: number;
};

/**
 * @internal
 * SubscriptionPendingInvoiceItemInterval without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionPendingInvoiceItemInterval = {
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionPendingInvoiceItemInterval
 */
const SchemaIn$SubscriptionPendingInvoiceItemInterval: z.ZodType<
  SubscriptionPendingInvoiceItemInterval, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    interval_count: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      interval_count: "intervalCount",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionPendingInvoiceItemInterval
 */
const SchemaOut$SubscriptionPendingInvoiceItemInterval: z.ZodType<
  External$SubscriptionPendingInvoiceItemInterval, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionPendingInvoiceItemInterval // the object to be transformed
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    intervalCount: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      intervalCount: "interval_count",
    });
  });

export const Schemas$SubscriptionPendingInvoiceItemInterval = {
  in: SchemaIn$SubscriptionPendingInvoiceItemInterval,
  out: SchemaOut$SubscriptionPendingInvoiceItemInterval,
};
