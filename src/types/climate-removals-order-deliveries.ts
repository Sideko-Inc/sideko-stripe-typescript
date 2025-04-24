import {
  ClimateRemovalsLocation,
  External$ClimateRemovalsLocation,
  Schemas$ClimateRemovalsLocation,
} from "./climate-removals-location";
import {
  ClimateSupplier,
  External$ClimateSupplier,
  Schemas$ClimateSupplier,
} from "./climate-supplier";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The delivery of a specified quantity of carbon for an order.
 */
export type ClimateRemovalsOrderDeliveries = {
  /**
   * Time at which the delivery occurred. Measured in seconds since the Unix epoch.
   */
  deliveredAt: number;
  location?: ClimateRemovalsLocation | undefined;
  /**
   * Quantity of carbon removal supplied by this delivery.
   */
  metricTons: string;
  /**
   * Once retired, a URL to the registry entry for the tons from this delivery.
   */
  registryUrl?: string | null | undefined;
  /**
   * A supplier of carbon removal.
   */
  supplier: ClimateSupplier;
};

/**
 * @internal
 * ClimateRemovalsOrderDeliveries without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateRemovalsOrderDeliveries = {
  delivered_at: number;
  location?: External$ClimateRemovalsLocation | undefined;
  metric_tons: string;
  registry_url?: string | null | undefined;
  supplier: External$ClimateSupplier;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateRemovalsOrderDeliveries
 */
const SchemaIn$ClimateRemovalsOrderDeliveries: z.ZodType<
  ClimateRemovalsOrderDeliveries, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    delivered_at: z.number().int(),
    location: Schemas$ClimateRemovalsLocation.in.optional(),
    metric_tons: z.string(),
    registry_url: z.string().nullable().optional(),
    supplier: Schemas$ClimateSupplier.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      delivered_at: "deliveredAt",
      location: "location",
      metric_tons: "metricTons",
      registry_url: "registryUrl",
      supplier: "supplier",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateRemovalsOrderDeliveries
 */
const SchemaOut$ClimateRemovalsOrderDeliveries: z.ZodType<
  External$ClimateRemovalsOrderDeliveries, // output type of this zod object
  z.ZodTypeDef,
  ClimateRemovalsOrderDeliveries // the object to be transformed
> = z
  .object({
    deliveredAt: z.number().int(),
    location: Schemas$ClimateRemovalsLocation.out.optional(),
    metricTons: z.string(),
    registryUrl: z.string().nullable().optional(),
    supplier: Schemas$ClimateSupplier.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deliveredAt: "delivered_at",
      location: "location",
      metricTons: "metric_tons",
      registryUrl: "registry_url",
      supplier: "supplier",
    });
  });

export const Schemas$ClimateRemovalsOrderDeliveries = {
  in: SchemaIn$ClimateRemovalsOrderDeliveries,
  out: SchemaOut$ClimateRemovalsOrderDeliveries,
};
