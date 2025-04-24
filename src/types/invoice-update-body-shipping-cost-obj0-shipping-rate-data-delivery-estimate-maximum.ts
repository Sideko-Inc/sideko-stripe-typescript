import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    unit: z.enum(["business_day", "day", "hour", "month", "week"]),
    value: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      unit: "unit",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum // the object to be transformed
> = z
  .object({
    unit: z.enum(["business_day", "day", "hour", "month", "week"]),
    value: z.number().int(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      unit: "unit",
      value: "value",
    });
  });

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum =
  {
    in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum,
    out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum,
  };
