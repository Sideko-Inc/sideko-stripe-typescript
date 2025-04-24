import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum
 */
export type InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum // the object to be transformed
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

export const Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum =
  {
    in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum,
    out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum,
  };
