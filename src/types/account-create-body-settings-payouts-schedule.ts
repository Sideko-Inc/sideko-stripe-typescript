import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsPayoutsSchedule
 */
export type AccountCreateBodySettingsPayoutsSchedule = {
  delayDays?: ("minimum" | number) | undefined;
  interval?: ("daily" | "manual" | "monthly" | "weekly") | undefined;
  monthlyAnchor?: number | undefined;
  weeklyAnchor?:
    | (
        | "friday"
        | "monday"
        | "saturday"
        | "sunday"
        | "thursday"
        | "tuesday"
        | "wednesday"
      )
    | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsPayoutsSchedule without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsPayoutsSchedule = {
  delay_days?: ("minimum" | number) | undefined;
  interval?: ("daily" | "manual" | "monthly" | "weekly") | undefined;
  monthly_anchor?: number | undefined;
  weekly_anchor?:
    | (
        | "friday"
        | "monday"
        | "saturday"
        | "sunday"
        | "thursday"
        | "tuesday"
        | "wednesday"
      )
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsPayoutsSchedule
 */
const SchemaIn$AccountCreateBodySettingsPayoutsSchedule: z.ZodType<
  AccountCreateBodySettingsPayoutsSchedule, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delay_days: z.union([z.enum(["minimum"]), z.number().int()]).optional(),
    interval: z.enum(["daily", "manual", "monthly", "weekly"]).optional(),
    monthly_anchor: z.number().int().optional(),
    weekly_anchor: z
      .enum([
        "friday",
        "monday",
        "saturday",
        "sunday",
        "thursday",
        "tuesday",
        "wednesday",
      ])
      .optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsPayoutsSchedule
 */
const SchemaOut$AccountCreateBodySettingsPayoutsSchedule: z.ZodType<
  External$AccountCreateBodySettingsPayoutsSchedule, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsPayoutsSchedule // the object to be transformed
> = z
  .object({
    delayDays: z.union([z.enum(["minimum"]), z.number().int()]).optional(),
    interval: z.enum(["daily", "manual", "monthly", "weekly"]).optional(),
    monthlyAnchor: z.number().int().optional(),
    weeklyAnchor: z
      .enum([
        "friday",
        "monday",
        "saturday",
        "sunday",
        "thursday",
        "tuesday",
        "wednesday",
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delayDays: "delay_days",
      interval: "interval",
      monthlyAnchor: "monthly_anchor",
      weeklyAnchor: "weekly_anchor",
    });
  });

export const Schemas$AccountCreateBodySettingsPayoutsSchedule = {
  in: SchemaIn$AccountCreateBodySettingsPayoutsSchedule,
  out: SchemaOut$AccountCreateBodySettingsPayoutsSchedule,
};
