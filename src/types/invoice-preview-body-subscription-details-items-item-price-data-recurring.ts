import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring
 */
export type InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring
 */
const SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring: z.ZodType<
  InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring
 */
const SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring: z.ZodType<
  External$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring =
  {
    in: SchemaIn$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring,
    out: SchemaOut$InvoicePreviewBodySubscriptionDetailsItemsItemPriceDataRecurring,
  };
