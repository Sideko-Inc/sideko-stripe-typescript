import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Options to configure Radar. See [Radar Session](https://stripe.com/docs/radar/radar-session) for more information.
 */
export type RadarRadarOptions = {
  /**
   * A [Radar Session](https://stripe.com/docs/radar/radar-session) is a snapshot of the browser metadata and device details that help Radar make more accurate predictions on your payments.
   */
  session?: string | undefined;
};

/**
 * @internal
 * RadarRadarOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarRadarOptions = {
  session?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarRadarOptions
 */
const SchemaIn$RadarRadarOptions: z.ZodType<
  RadarRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarRadarOptions
 */
const SchemaOut$RadarRadarOptions: z.ZodType<
  External$RadarRadarOptions, // output type of this zod object
  z.ZodTypeDef,
  RadarRadarOptions // the object to be transformed
> = z
  .object({
    session: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      session: "session",
    });
  });

export const Schemas$RadarRadarOptions = {
  in: SchemaIn$RadarRadarOptions,
  out: SchemaOut$RadarRadarOptions,
};
