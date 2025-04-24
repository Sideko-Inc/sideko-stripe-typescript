import {
  External$InvoiceCreateBodyShippingCostShippingRateData,
  InvoiceCreateBodyShippingCostShippingRateData,
  Schemas$InvoiceCreateBodyShippingCostShippingRateData,
} from "./invoice-create-body-shipping-cost-shipping-rate-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for the cost of shipping for this invoice.
 */
export type InvoiceCreateBodyShippingCost = {
  shippingRate?: string | undefined;
  shippingRateData?: InvoiceCreateBodyShippingCostShippingRateData | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCost = {
  shipping_rate?: string | undefined;
  shipping_rate_data?:
    | External$InvoiceCreateBodyShippingCostShippingRateData
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCost
 */
const SchemaIn$InvoiceCreateBodyShippingCost: z.ZodType<
  InvoiceCreateBodyShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_rate: z.string().optional(),
    shipping_rate_data:
      Schemas$InvoiceCreateBodyShippingCostShippingRateData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate: "shippingRate",
      shipping_rate_data: "shippingRateData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCost
 */
const SchemaOut$InvoiceCreateBodyShippingCost: z.ZodType<
  External$InvoiceCreateBodyShippingCost, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCost // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
    shippingRateData:
      Schemas$InvoiceCreateBodyShippingCostShippingRateData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
      shippingRateData: "shipping_rate_data",
    });
  });

export const Schemas$InvoiceCreateBodyShippingCost = {
  in: SchemaIn$InvoiceCreateBodyShippingCost,
  out: SchemaOut$InvoiceCreateBodyShippingCost,
};
