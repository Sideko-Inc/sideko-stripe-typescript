import {
  ClimateRemovalsProductsPrice,
  External$ClimateRemovalsProductsPrice,
  Schemas$ClimateRemovalsProductsPrice,
} from "./climate-removals-products-price";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Current prices for a metric ton of carbon removal in a currency's smallest unit.
 */
export type ClimateProductCurrentPricesPerMetricTon = {
  [additionalProperty: string]: ClimateRemovalsProductsPrice | null | undefined;
};

/**
 * @internal
 * ClimateProductCurrentPricesPerMetricTon without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateProductCurrentPricesPerMetricTon = {
  [additionalProperty: string]:
    | External$ClimateProductCurrentPricesPerMetricTon
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateProductCurrentPricesPerMetricTon
 */
const SchemaIn$ClimateProductCurrentPricesPerMetricTon: z.ZodType<
  ClimateProductCurrentPricesPerMetricTon, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$ClimateRemovalsProductsPrice.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateProductCurrentPricesPerMetricTon
 */
const SchemaOut$ClimateProductCurrentPricesPerMetricTon: z.ZodType<
  External$ClimateProductCurrentPricesPerMetricTon, // output type of this zod object
  z.ZodTypeDef,
  ClimateProductCurrentPricesPerMetricTon // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$ClimateRemovalsProductsPrice.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ClimateProductCurrentPricesPerMetricTon = {
  in: SchemaIn$ClimateProductCurrentPricesPerMetricTon,
  out: SchemaOut$ClimateProductCurrentPricesPerMetricTon,
};
