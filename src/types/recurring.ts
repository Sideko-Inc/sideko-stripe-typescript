import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type Recurring = {
  /**
   * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
   */
  interval: "day" | "month" | "week" | "year";
  /**
   * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
   */
  intervalCount: number;
  /**
   * The meter tracking the usage of a metered price
   */
  meter?: string | null | undefined;
  /**
   * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
   */
  usageType: "licensed" | "metered";
};

/**
 * @internal
 * Recurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Recurring = {
  interval: "day" | "month" | "week" | "year";
  interval_count: number;
  meter?: string | null | undefined;
  usage_type: "licensed" | "metered";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Recurring
 */
const SchemaIn$Recurring: z.ZodType<
  Recurring, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    interval_count: z.number().int(),
    meter: z.string().nullable().optional(),
    usage_type: z.enum(["licensed", "metered"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      interval_count: "intervalCount",
      meter: "meter",
      usage_type: "usageType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Recurring
 */
const SchemaOut$Recurring: z.ZodType<
  External$Recurring, // output type of this zod object
  z.ZodTypeDef,
  Recurring // the object to be transformed
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    intervalCount: z.number().int(),
    meter: z.string().nullable().optional(),
    usageType: z.enum(["licensed", "metered"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      intervalCount: "interval_count",
      meter: "meter",
      usageType: "usage_type",
    });
  });

export const Schemas$Recurring = {
  in: SchemaIn$Recurring,
  out: SchemaOut$Recurring,
};
