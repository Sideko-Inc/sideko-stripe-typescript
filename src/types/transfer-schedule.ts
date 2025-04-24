import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TransferSchedule = {
  /**
   * The number of days charges for the account will be held before being paid out.
   */
  delayDays: number;
  /**
   * How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
   */
  interval: string;
  /**
   * The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
   */
  monthlyAnchor?: number | undefined;
  /**
   * The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.
   */
  weeklyAnchor?: string | undefined;
};

/**
 * @internal
 * TransferSchedule without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransferSchedule = {
  delay_days: number;
  interval: string;
  monthly_anchor?: number | undefined;
  weekly_anchor?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransferSchedule
 */
const SchemaIn$TransferSchedule: z.ZodType<
  TransferSchedule, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delay_days: z.number().int(),
    interval: z.string(),
    monthly_anchor: z.number().int().optional(),
    weekly_anchor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delay_days: "delayDays",
      interval: "interval",
      monthly_anchor: "monthlyAnchor",
      weekly_anchor: "weeklyAnchor",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransferSchedule
 */
const SchemaOut$TransferSchedule: z.ZodType<
  External$TransferSchedule, // output type of this zod object
  z.ZodTypeDef,
  TransferSchedule // the object to be transformed
> = z
  .object({
    delayDays: z.number().int(),
    interval: z.string(),
    monthlyAnchor: z.number().int().optional(),
    weeklyAnchor: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delayDays: "delay_days",
      interval: "interval",
      monthlyAnchor: "monthly_anchor",
      weeklyAnchor: "weekly_anchor",
    });
  });

export const Schemas$TransferSchedule = {
  in: SchemaIn$TransferSchedule,
  out: SchemaOut$TransferSchedule,
};
