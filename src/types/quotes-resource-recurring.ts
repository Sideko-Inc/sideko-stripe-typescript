import {
  External$QuotesResourceTotalDetails,
  QuotesResourceTotalDetails,
  Schemas$QuotesResourceTotalDetails,
} from "./quotes-resource-total-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type QuotesResourceRecurring = {
  /**
   * Total before any discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
   */
  interval: "day" | "month" | "week" | "year";
  /**
   * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
   */
  intervalCount: number;
  totalDetails: QuotesResourceTotalDetails;
};

/**
 * @internal
 * QuotesResourceRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuotesResourceRecurring = {
  amount_subtotal: number;
  amount_total: number;
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  total_details: External$QuotesResourceTotalDetails;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuotesResourceRecurring
 */
const SchemaIn$QuotesResourceRecurring: z.ZodType<
  QuotesResourceRecurring, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_subtotal: z.number().int(),
    amount_total: z.number().int(),
    interval: z.enum(["day", "month", "week", "year"]),
    interval_count: z.number().int(),
    total_details: z.lazy(() => Schemas$QuotesResourceTotalDetails.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_subtotal: "amountSubtotal",
      amount_total: "amountTotal",
      interval: "interval",
      interval_count: "intervalCount",
      total_details: "totalDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuotesResourceRecurring
 */
const SchemaOut$QuotesResourceRecurring: z.ZodType<
  External$QuotesResourceRecurring, // output type of this zod object
  z.ZodTypeDef,
  QuotesResourceRecurring // the object to be transformed
> = z
  .object({
    amountSubtotal: z.number().int(),
    amountTotal: z.number().int(),
    interval: z.enum(["day", "month", "week", "year"]),
    intervalCount: z.number().int(),
    totalDetails: z.lazy(() => Schemas$QuotesResourceTotalDetails.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountSubtotal: "amount_subtotal",
      amountTotal: "amount_total",
      interval: "interval",
      intervalCount: "interval_count",
      totalDetails: "total_details",
    });
  });

export const Schemas$QuotesResourceRecurring = {
  in: SchemaIn$QuotesResourceRecurring,
  out: SchemaOut$QuotesResourceRecurring,
};
