import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0
 */
export type CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0 = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0 =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0
 */
const SchemaIn$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0: z.ZodType<
  CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0
 */
const SchemaOut$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0: z.ZodType<
  External$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0 // the object to be transformed
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

export const Schemas$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0 =
  {
    in: SchemaIn$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0,
    out: SchemaOut$CustomerSubscriptionModifyBodyPendingInvoiceItemIntervalObj0,
  };
