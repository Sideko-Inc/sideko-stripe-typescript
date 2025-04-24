import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data-delivery-estimate-maximum";
import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data-delivery-estimate-minimum";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate =
  {
    maximum?:
      | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum
      | undefined;
    minimum?:
      | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum
      | undefined;
  };

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate =
  {
    maximum?:
      | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum
      | undefined;
    minimum?:
      | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum.in.optional(),
    minimum:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate // the object to be transformed
> = z
  .object({
    maximum:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMaximum.out.optional(),
    minimum:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimateMinimum.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate,
    out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataDeliveryEstimate,
  };
