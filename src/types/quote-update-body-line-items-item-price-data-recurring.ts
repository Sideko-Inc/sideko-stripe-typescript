import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * QuoteUpdateBodyLineItemsItemPriceDataRecurring
 */
export type QuoteUpdateBodyLineItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * QuoteUpdateBodyLineItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyLineItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  interval_count?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyLineItemsItemPriceDataRecurring
 */
const SchemaIn$QuoteUpdateBodyLineItemsItemPriceDataRecurring: z.ZodType<
  QuoteUpdateBodyLineItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyLineItemsItemPriceDataRecurring
 */
const SchemaOut$QuoteUpdateBodyLineItemsItemPriceDataRecurring: z.ZodType<
  External$QuoteUpdateBodyLineItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyLineItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$QuoteUpdateBodyLineItemsItemPriceDataRecurring = {
  in: SchemaIn$QuoteUpdateBodyLineItemsItemPriceDataRecurring,
  out: SchemaOut$QuoteUpdateBodyLineItemsItemPriceDataRecurring,
};
