import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum // the object to be transformed
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

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum =
  {
    in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum,
    out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum,
  };
