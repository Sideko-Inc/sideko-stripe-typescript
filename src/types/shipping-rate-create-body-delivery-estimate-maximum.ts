import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateCreateBodyDeliveryEstimateMaximum
 */
export type ShippingRateCreateBodyDeliveryEstimateMaximum = {
  unit: "business_day" | "day" | "hour" | "month" | "week";
  value: number;
};

/**
 * @internal
 * ShippingRateCreateBodyDeliveryEstimateMaximum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCreateBodyDeliveryEstimateMaximum = {
  unit: "business_day" | "day" | "hour" | "month" | "week";
  value: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCreateBodyDeliveryEstimateMaximum
 */
const SchemaIn$ShippingRateCreateBodyDeliveryEstimateMaximum: z.ZodType<
  ShippingRateCreateBodyDeliveryEstimateMaximum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCreateBodyDeliveryEstimateMaximum
 */
const SchemaOut$ShippingRateCreateBodyDeliveryEstimateMaximum: z.ZodType<
  External$ShippingRateCreateBodyDeliveryEstimateMaximum, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCreateBodyDeliveryEstimateMaximum // the object to be transformed
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

export const Schemas$ShippingRateCreateBodyDeliveryEstimateMaximum = {
  in: SchemaIn$ShippingRateCreateBodyDeliveryEstimateMaximum,
  out: SchemaOut$ShippingRateCreateBodyDeliveryEstimateMaximum,
};
