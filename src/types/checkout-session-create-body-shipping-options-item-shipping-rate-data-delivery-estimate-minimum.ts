import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum,
  };
