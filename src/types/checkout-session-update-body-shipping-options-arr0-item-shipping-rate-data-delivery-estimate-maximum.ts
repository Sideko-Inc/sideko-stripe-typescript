import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum // the object to be transformed
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

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum,
    out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum,
  };
