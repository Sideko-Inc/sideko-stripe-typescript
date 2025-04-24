import {
  ClimateProductCurrentPricesPerMetricTon,
  External$ClimateProductCurrentPricesPerMetricTon,
  Schemas$ClimateProductCurrentPricesPerMetricTon,
} from "./climate-product-current-prices-per-metric-ton";
import {
  ClimateSupplier,
  External$ClimateSupplier,
  Schemas$ClimateSupplier,
} from "./climate-supplier";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A Climate product represents a type of carbon removal unit available for reservation.
 * You can retrieve it to see the current price and availability.
 */
export type ClimateProduct = {
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Current prices for a metric ton of carbon removal in a currency's smallest unit.
   */
  currentPricesPerMetricTon: ClimateProductCurrentPricesPerMetricTon;
  /**
   * The year in which the carbon removal is expected to be delivered.
   */
  deliveryYear?: number | null | undefined;
  /**
   * Unique identifier for the object. For convenience, Climate product IDs are human-readable strings
   * that start with `climsku_`. See [carbon removal inventory](https://stripe.com/docs/climate/orders/carbon-removal-inventory)
   * for a list of available carbon removal products.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The quantity of metric tons available for reservation.
   */
  metricTonsAvailable: string;
  /**
   * The Climate product's name.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "climate.product";
  /**
   * The carbon removal suppliers that fulfill orders for this Climate product.
   */
  suppliers: ClimateSupplier[];
};

/**
 * @internal
 * ClimateProduct without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateProduct = {
  created: number;
  current_prices_per_metric_ton: External$ClimateProductCurrentPricesPerMetricTon;
  delivery_year?: number | null | undefined;
  id: string;
  livemode: boolean;
  metric_tons_available: string;
  name: string;
  object: "climate.product";
  suppliers: External$ClimateSupplier[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateProduct
 */
const SchemaIn$ClimateProduct: z.ZodType<
  ClimateProduct, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z.number().int(),
    current_prices_per_metric_ton:
      Schemas$ClimateProductCurrentPricesPerMetricTon.in,
    delivery_year: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metric_tons_available: z.string(),
    name: z.string(),
    object: z.enum(["climate.product"]),
    suppliers: z.array(Schemas$ClimateSupplier.in),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      current_prices_per_metric_ton: "currentPricesPerMetricTon",
      delivery_year: "deliveryYear",
      id: "id",
      livemode: "livemode",
      metric_tons_available: "metricTonsAvailable",
      name: "name",
      object: "object",
      suppliers: "suppliers",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateProduct
 */
const SchemaOut$ClimateProduct: z.ZodType<
  External$ClimateProduct, // output type of this zod object
  z.ZodTypeDef,
  ClimateProduct // the object to be transformed
> = z
  .object({
    created: z.number().int(),
    currentPricesPerMetricTon:
      Schemas$ClimateProductCurrentPricesPerMetricTon.out,
    deliveryYear: z.number().int().nullable().optional(),
    id: z.string(),
    livemode: z.boolean(),
    metricTonsAvailable: z.string(),
    name: z.string(),
    object: z.enum(["climate.product"]),
    suppliers: z.array(Schemas$ClimateSupplier.out),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      currentPricesPerMetricTon: "current_prices_per_metric_ton",
      deliveryYear: "delivery_year",
      id: "id",
      livemode: "livemode",
      metricTonsAvailable: "metric_tons_available",
      name: "name",
      object: "object",
      suppliers: "suppliers",
    });
  });

export const Schemas$ClimateProduct = {
  in: SchemaIn$ClimateProduct,
  out: SchemaOut$ClimateProduct,
};
