import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateData,
  InvoiceUpdateBodyShippingCostObj0ShippingRateData,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateData,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0
 */
export type InvoiceUpdateBodyShippingCostObj0 = {
  shippingRate?: string | undefined;
  shippingRateData?:
    | InvoiceUpdateBodyShippingCostObj0ShippingRateData
    | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0 = {
  shipping_rate?: string | undefined;
  shipping_rate_data?:
    | External$InvoiceUpdateBodyShippingCostObj0ShippingRateData
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_rate: z.string().optional(),
    shipping_rate_data:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate: "shippingRate",
      shipping_rate_data: "shippingRateData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0 // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
    shippingRateData:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
      shippingRateData: "shipping_rate_data",
    });
  });

export const Schemas$InvoiceUpdateBodyShippingCostObj0 = {
  in: SchemaIn$InvoiceUpdateBodyShippingCostObj0,
  out: SchemaOut$InvoiceUpdateBodyShippingCostObj0,
};
