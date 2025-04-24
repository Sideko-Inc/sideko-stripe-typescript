import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data-delivery-estimate-maximum";
import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data-delivery-estimate-minimum";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate =
  {
    maximum?:
      | InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum
      | undefined;
    minimum?:
      | InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum
      | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate =
  {
    maximum?:
      | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum
      | undefined;
    minimum?:
      | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    maximum:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum.in.optional(),
    minimum:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate // the object to be transformed
> = z
  .object({
    maximum:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMaximum.out.optional(),
    minimum:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimateMinimum.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      maximum: "maximum",
      minimum: "minimum",
    });
  });

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate =
  {
    in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate,
    out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataDeliveryEstimate,
  };
