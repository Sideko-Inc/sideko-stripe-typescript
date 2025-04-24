import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type RadarReviewResourceSession = {
  /**
   * The browser used in this browser session (e.g., `Chrome`).
   */
  browser?: string | null | undefined;
  /**
   * Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
   */
  device?: string | null | undefined;
  /**
   * The platform for the browser session (e.g., `Macintosh`).
   */
  platform?: string | null | undefined;
  /**
   * The version for the browser session (e.g., `61.0.3163.100`).
   */
  version?: string | null | undefined;
};

/**
 * @internal
 * RadarReviewResourceSession without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarReviewResourceSession = {
  browser?: string | null | undefined;
  device?: string | null | undefined;
  platform?: string | null | undefined;
  version?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarReviewResourceSession
 */
const SchemaIn$RadarReviewResourceSession: z.ZodType<
  RadarReviewResourceSession, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    browser: z.string().nullable().optional(),
    device: z.string().nullable().optional(),
    platform: z.string().nullable().optional(),
    version: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      browser: "browser",
      device: "device",
      platform: "platform",
      version: "version",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarReviewResourceSession
 */
const SchemaOut$RadarReviewResourceSession: z.ZodType<
  External$RadarReviewResourceSession, // output type of this zod object
  z.ZodTypeDef,
  RadarReviewResourceSession // the object to be transformed
> = z
  .object({
    browser: z.string().nullable().optional(),
    device: z.string().nullable().optional(),
    platform: z.string().nullable().optional(),
    version: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      browser: "browser",
      device: "device",
      platform: "platform",
      version: "version",
    });
  });

export const Schemas$RadarReviewResourceSession = {
  in: SchemaIn$RadarReviewResourceSession,
  out: SchemaOut$RadarReviewResourceSession,
};
