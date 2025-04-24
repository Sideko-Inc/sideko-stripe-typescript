import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ShippingRateDeliveryEstimateBound = {
  /**
   * A unit of time.
   */
  unit: "business_day" | "day" | "hour" | "month" | "week";
  /**
   * Must be greater than 0.
   */
  value: number;
};

/**
 * @internal
 * ShippingRateDeliveryEstimateBound without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateDeliveryEstimateBound = {
  unit: "business_day" | "day" | "hour" | "month" | "week";
  value: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateDeliveryEstimateBound
 */
const SchemaIn$ShippingRateDeliveryEstimateBound: z.ZodType<
  ShippingRateDeliveryEstimateBound, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateDeliveryEstimateBound
 */
const SchemaOut$ShippingRateDeliveryEstimateBound: z.ZodType<
  External$ShippingRateDeliveryEstimateBound, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateDeliveryEstimateBound // the object to be transformed
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

export const Schemas$ShippingRateDeliveryEstimateBound = {
  in: SchemaIn$ShippingRateDeliveryEstimateBound,
  out: SchemaOut$ShippingRateDeliveryEstimateBound,
};
