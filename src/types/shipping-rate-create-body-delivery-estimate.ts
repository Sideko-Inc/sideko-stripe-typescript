import {
  External$ShippingRateCreateBodyDeliveryEstimateMaximum,
  Schemas$ShippingRateCreateBodyDeliveryEstimateMaximum,
  ShippingRateCreateBodyDeliveryEstimateMaximum,
} from "./shipping-rate-create-body-delivery-estimate-maximum";
import {
  External$ShippingRateCreateBodyDeliveryEstimateMinimum,
  Schemas$ShippingRateCreateBodyDeliveryEstimateMinimum,
  ShippingRateCreateBodyDeliveryEstimateMinimum,
} from "./shipping-rate-create-body-delivery-estimate-minimum";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
 */
export type ShippingRateCreateBodyDeliveryEstimate = {
  maximum?: ShippingRateCreateBodyDeliveryEstimateMaximum | undefined;
  minimum?: ShippingRateCreateBodyDeliveryEstimateMinimum | undefined;
};

/**
 * @internal
 * ShippingRateCreateBodyDeliveryEstimate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCreateBodyDeliveryEstimate = {
  maximum?: External$ShippingRateCreateBodyDeliveryEstimateMaximum | undefined;
  minimum?: External$ShippingRateCreateBodyDeliveryEstimateMinimum | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCreateBodyDeliveryEstimate
 */
const SchemaIn$ShippingRateCreateBodyDeliveryEstimate: z.ZodType<
  ShippingRateCreateBodyDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum:
      Schemas$ShippingRateCreateBodyDeliveryEstimateMaximum.in.optional(),
    minimum:
      Schemas$ShippingRateCreateBodyDeliveryEstimateMinimum.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCreateBodyDeliveryEstimate
 */
const SchemaOut$ShippingRateCreateBodyDeliveryEstimate: z.ZodType<
  External$ShippingRateCreateBodyDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCreateBodyDeliveryEstimate // the object to be transformed
> = z
  .object({
    maximum:
      Schemas$ShippingRateCreateBodyDeliveryEstimateMaximum.out.optional(),
    minimum:
      Schemas$ShippingRateCreateBodyDeliveryEstimateMinimum.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$ShippingRateCreateBodyDeliveryEstimate = {
  in: SchemaIn$ShippingRateCreateBodyDeliveryEstimate,
  out: SchemaOut$ShippingRateCreateBodyDeliveryEstimate,
};
