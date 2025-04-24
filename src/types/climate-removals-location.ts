import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ClimateRemovalsLocation = {
  /**
   * The city where the supplier is located.
   */
  city?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country where the supplier is located.
   */
  country: string;
  /**
   * The geographic latitude where the supplier is located.
   */
  latitude?: number | null | undefined;
  /**
   * The geographic longitude where the supplier is located.
   */
  longitude?: number | null | undefined;
  /**
   * The state/county/province/region where the supplier is located.
   */
  region?: string | null | undefined;
};

/**
 * @internal
 * ClimateRemovalsLocation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateRemovalsLocation = {
  city?: string | null | undefined;
  country: string;
  latitude?: number | null | undefined;
  longitude?: number | null | undefined;
  region?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateRemovalsLocation
 */
const SchemaIn$ClimateRemovalsLocation: z.ZodType<
  ClimateRemovalsLocation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    city: z.string().nullable().optional(),
    country: z.string(),
    latitude: z.number().nullable().optional(),
    longitude: z.number().nullable().optional(),
    region: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      latitude: "latitude",
      longitude: "longitude",
      region: "region",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateRemovalsLocation
 */
const SchemaOut$ClimateRemovalsLocation: z.ZodType<
  External$ClimateRemovalsLocation, // output type of this zod object
  z.ZodTypeDef,
  ClimateRemovalsLocation // the object to be transformed
> = z
  .object({
    city: z.string().nullable().optional(),
    country: z.string(),
    latitude: z.number().nullable().optional(),
    longitude: z.number().nullable().optional(),
    region: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      city: "city",
      country: "country",
      latitude: "latitude",
      longitude: "longitude",
      region: "region",
    });
  });

export const Schemas$ClimateRemovalsLocation = {
  in: SchemaIn$ClimateRemovalsLocation,
  out: SchemaOut$ClimateRemovalsLocation,
};
