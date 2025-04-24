import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum,
  };
