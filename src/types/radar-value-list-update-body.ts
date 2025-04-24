import {
  External$RadarValueListUpdateBodyMetadata,
  RadarValueListUpdateBodyMetadata,
  Schemas$RadarValueListUpdateBodyMetadata,
} from "./radar-value-list-update-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RadarValueListUpdateBody
 */
export type RadarValueListUpdateBody = {
  /**
   * The name of the value list for use in rules.
   */
  alias?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: RadarValueListUpdateBodyMetadata | undefined;
  /**
   * The human-readable name of the value list.
   */
  name?: string | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | (RadarValueListUpdateBodyMetadata | undefined)
    | (string | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * RadarValueListUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueListUpdateBody = {
  alias?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$RadarValueListUpdateBodyMetadata | undefined;
  name?: string | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | (External$RadarValueListUpdateBodyMetadata | undefined)
    | (string | undefined)
    | External$RadarValueListUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueListUpdateBody
 */
const SchemaIn$RadarValueListUpdateBody: z.ZodType<
  RadarValueListUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alias: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$RadarValueListUpdateBodyMetadata.in.optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueListUpdateBody
 */
const SchemaOut$RadarValueListUpdateBody: z.ZodType<
  External$RadarValueListUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  RadarValueListUpdateBody // the object to be transformed
> = z
  .object({
    alias: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$RadarValueListUpdateBodyMetadata.out.optional(),
    name: z.string().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      alias: "alias",
      expand: "expand",
      metadata: "metadata",
      name: "name",
    });
  });

export const Schemas$RadarValueListUpdateBody = {
  in: SchemaIn$RadarValueListUpdateBody,
  out: SchemaOut$RadarValueListUpdateBody,
};
