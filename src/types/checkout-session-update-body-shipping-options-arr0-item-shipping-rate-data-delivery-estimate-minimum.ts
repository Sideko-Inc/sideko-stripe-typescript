import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum =
  {
    unit: "business_day" | "day" | "hour" | "month" | "week";
    value: number;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum // the object to be transformed
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

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum,
    out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum,
  };
