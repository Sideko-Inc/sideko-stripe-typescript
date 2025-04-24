import {
  External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum,
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum,
  Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum,
} from "./invoice-create-body-shipping-cost-shipping-rate-data-delivery-estimate-maximum";
import {
  External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum,
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum,
  Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum,
} from "./invoice-create-body-shipping-cost-shipping-rate-data-delivery-estimate-minimum";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate
 */
export type InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate = {
  maximum?:
    | InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum
    | undefined;
  minimum?:
    | InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum
    | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate =
  {
    maximum?:
      | External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum
      | undefined;
    minimum?:
      | External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum.in.optional(),
    minimum:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate // the object to be transformed
> = z
  .object({
    maximum:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMaximum.out.optional(),
    minimum:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimateMinimum.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate =
  {
    in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate,
    out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataDeliveryEstimate,
  };
