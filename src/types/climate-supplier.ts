import {
  ClimateRemovalsLocation,
  External$ClimateRemovalsLocation,
  Schemas$ClimateRemovalsLocation,
} from "./climate-removals-location";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A supplier of carbon removal.
 */
export type ClimateSupplier = {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Link to a webpage to learn more about the supplier.
   */
  infoUrl: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The locations in which this supplier operates.
   */
  locations: ClimateRemovalsLocation[];
  /**
   * Name of this carbon removal supplier.
   */
  name: string;
  /**
   * String representing the object’s type. Objects of the same type share the same value.
   */
  object: "climate.supplier";
  /**
   * The scientific pathway used for carbon removal.
   */
  removalPathway:
    | "biomass_carbon_removal_and_storage"
    | "direct_air_capture"
    | "enhanced_weathering";
};

/**
 * @internal
 * ClimateSupplier without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateSupplier = {
  id: string;
  info_url: string;
  livemode: boolean;
  locations: External$ClimateRemovalsLocation[];
  name: string;
  object: "climate.supplier";
  removal_pathway:
    | "biomass_carbon_removal_and_storage"
    | "direct_air_capture"
    | "enhanced_weathering";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateSupplier
 */
const SchemaIn$ClimateSupplier: z.ZodType<
  ClimateSupplier, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    info_url: z.string(),
    livemode: z.boolean(),
    locations: z.array(Schemas$ClimateRemovalsLocation.in),
    name: z.string(),
    object: z.enum(["climate.supplier"]),
    removal_pathway: z.enum([
      "biomass_carbon_removal_and_storage",
      "direct_air_capture",
      "enhanced_weathering",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      info_url: "infoUrl",
      livemode: "livemode",
      locations: "locations",
      name: "name",
      object: "object",
      removal_pathway: "removalPathway",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateSupplier
 */
const SchemaOut$ClimateSupplier: z.ZodType<
  External$ClimateSupplier, // output type of this zod object
  z.ZodTypeDef,
  ClimateSupplier // the object to be transformed
> = z
  .object({
    id: z.string(),
    infoUrl: z.string(),
    livemode: z.boolean(),
    locations: z.array(Schemas$ClimateRemovalsLocation.out),
    name: z.string(),
    object: z.enum(["climate.supplier"]),
    removalPathway: z.enum([
      "biomass_carbon_removal_and_storage",
      "direct_air_capture",
      "enhanced_weathering",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      infoUrl: "info_url",
      livemode: "livemode",
      locations: "locations",
      name: "name",
      object: "object",
      removalPathway: "removal_pathway",
    });
  });

export const Schemas$ClimateSupplier = {
  in: SchemaIn$ClimateSupplier,
  out: SchemaOut$ClimateSupplier,
};
