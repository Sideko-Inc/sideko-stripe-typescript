import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type RadarValueListUpdateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * RadarValueListUpdateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueListUpdateBodyMetadata = {
  [additionalProperty: string]:
    | External$RadarValueListUpdateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueListUpdateBodyMetadata
 */
const SchemaIn$RadarValueListUpdateBodyMetadata: z.ZodType<
  RadarValueListUpdateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueListUpdateBodyMetadata
 */
const SchemaOut$RadarValueListUpdateBodyMetadata: z.ZodType<
  External$RadarValueListUpdateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  RadarValueListUpdateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$RadarValueListUpdateBodyMetadata = {
  in: SchemaIn$RadarValueListUpdateBodyMetadata,
  out: SchemaOut$RadarValueListUpdateBodyMetadata,
};
