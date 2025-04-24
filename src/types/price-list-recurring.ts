import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Only return prices with these recurring fields.
 */
export type PriceListRecurring = {
  interval?: ("day" | "month" | "week" | "year") | undefined;
  meter?: string | undefined;
  usageType?: ("licensed" | "metered") | undefined;
};

/**
 * @internal
 * PriceListRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceListRecurring = {
  interval?: ("day" | "month" | "week" | "year") | undefined;
  meter?: string | undefined;
  usage_type?: ("licensed" | "metered") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceListRecurring
 */
const SchemaIn$PriceListRecurring: z.ZodType<
  PriceListRecurring, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]).optional(),
    meter: z.string().optional(),
    usage_type: z.enum(["licensed", "metered"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      meter: "meter",
      usage_type: "usageType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceListRecurring
 */
const SchemaOut$PriceListRecurring: z.ZodType<
  External$PriceListRecurring, // output type of this zod object
  z.ZodTypeDef,
  PriceListRecurring // the object to be transformed
> = z
  .object({
    interval: z.enum(["day", "month", "week", "year"]).optional(),
    meter: z.string().optional(),
    usageType: z.enum(["licensed", "metered"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      interval: "interval",
      meter: "meter",
      usageType: "usage_type",
    });
  });

export const Schemas$PriceListRecurring = {
  in: SchemaIn$PriceListRecurring,
  out: SchemaOut$PriceListRecurring,
};
