import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring
 */
export type CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring = {
  interval: "day" | "month" | "week" | "year";
  intervalCount?: number | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring =
  {
    interval: "day" | "month" | "week" | "year";
    interval_count?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring
 */
const SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring: z.ZodType<
  CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring
 */
const SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring: z.ZodType<
  External$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring =
  {
    in: SchemaIn$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring,
    out: SchemaOut$CheckoutSessionCreateBodyLineItemsItemPriceDataRecurring,
  };
