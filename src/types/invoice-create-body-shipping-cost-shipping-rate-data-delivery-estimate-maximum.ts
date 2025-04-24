import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum
 */
export type InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum // the object to be transformed
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

export const Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum =
  {
    in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum,
    out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum,
  };
