import {
  External$ShippingRateDeliveryEstimateBound,
  Schemas$ShippingRateDeliveryEstimateBound,
  ShippingRateDeliveryEstimateBound,
} from "./shipping-rate-delivery-estimate-bound";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ShippingRateDeliveryEstimate = {
  maximum?: ShippingRateDeliveryEstimateBound | undefined;
  minimum?: ShippingRateDeliveryEstimateBound | undefined;
};

/**
 * @internal
 * ShippingRateDeliveryEstimate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateDeliveryEstimate = {
  maximum?: External$ShippingRateDeliveryEstimateBound | undefined;
  minimum?: External$ShippingRateDeliveryEstimateBound | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateDeliveryEstimate
 */
const SchemaIn$ShippingRateDeliveryEstimate: z.ZodType<
  ShippingRateDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum: Schemas$ShippingRateDeliveryEstimateBound.in.optional(),
    minimum: Schemas$ShippingRateDeliveryEstimateBound.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateDeliveryEstimate
 */
const SchemaOut$ShippingRateDeliveryEstimate: z.ZodType<
  External$ShippingRateDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateDeliveryEstimate // the object to be transformed
> = z
  .object({
    maximum: Schemas$ShippingRateDeliveryEstimateBound.out.optional(),
    minimum: Schemas$ShippingRateDeliveryEstimateBound.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$ShippingRateDeliveryEstimate = {
  in: SchemaIn$ShippingRateDeliveryEstimate,
  out: SchemaOut$ShippingRateDeliveryEstimate,
};
