import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The recurring components of a price such as `interval` and `usage_type`.
 */
export type PriceCreateBodyRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
  meter?: string | undefined;
  usageType?: ("licensed" | "metered") | undefined;
};

/**
 * @internal
 * PriceCreateBodyRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyRecurring = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
  meter?: string | undefined;
  usage_type?: ("licensed" | "metered") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyRecurring
 */
const SchemaIn$PriceCreateBodyRecurring: z.ZodType<
  PriceCreateBodyRecurring, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    interval_count: z.number().int().optional(),
    meter: z.string().optional(),
    usage_type: z.enum(["licensed", "metered"]).optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyRecurring
 */
const SchemaOut$PriceCreateBodyRecurring: z.ZodType<
  External$PriceCreateBodyRecurring, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyRecurring // the object to be transformed
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]),
    intervalCount: z.number().int().optional(),
    meter: z.string().optional(),
    usageType: z.enum(["licensed", "metered"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      intervalCount: "interval_count",
      meter: "meter",
      usageType: "usage_type",
    });
  });

export const Schemas$PriceCreateBodyRecurring = {
  in: SchemaIn$PriceCreateBodyRecurring,
  out: SchemaOut$PriceCreateBodyRecurring,
};
