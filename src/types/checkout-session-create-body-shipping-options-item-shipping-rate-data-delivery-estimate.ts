import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data-delivery-estimate-maximum";
import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data-delivery-estimate-minimum";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate =
  {
    maximum?:
      | CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum
      | undefined;
    minimum?:
      | CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum
      | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate =
  {
    maximum?:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum
      | undefined;
    minimum?:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum.in.optional(),
    minimum:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate // the object to be transformed
> = z
  .object({
    maximum:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMaximum.out.optional(),
    minimum:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimateMinimum.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataDeliveryEstimate,
  };
