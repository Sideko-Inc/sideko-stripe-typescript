import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RadarReviewResourceLocation = {
  /**
   * The city where the payment originated.
   */
  city?: string | null | undefined;
  /**
   * Two-letter ISO code representing the country where the payment originated.
   */
  country?: string | null | undefined;
  /**
   * The geographic latitude where the payment originated.
   */
  latitude?: number | null | undefined;
  /**
   * The geographic longitude where the payment originated.
   */
  longitude?: number | null | undefined;
  /**
   * The state/county/province/region where the payment originated.
   */
  region?: string | null | undefined;
};

/**
 * @internal
 * RadarReviewResourceLocation without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarReviewResourceLocation = {
  city?: string | null | undefined;
  country?: string | null | undefined;
  latitude?: number | null | undefined;
  longitude?: number | null | undefined;
  region?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarReviewResourceLocation
 */
const SchemaIn$RadarReviewResourceLocation: z.ZodType<
  RadarReviewResourceLocation, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    city: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarReviewResourceLocation
 */
const SchemaOut$RadarReviewResourceLocation: z.ZodType<
  External$RadarReviewResourceLocation, // output type of this zod object
  z.ZodTypeDef,
  RadarReviewResourceLocation // the object to be transformed
> = z
  .object({
    city: z.string().nullable().optional(),
    country: z.string().nullable().optional(),
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

export const Schemas$RadarReviewResourceLocation = {
  in: SchemaIn$RadarReviewResourceLocation,
  out: SchemaOut$RadarReviewResourceLocation,
};
