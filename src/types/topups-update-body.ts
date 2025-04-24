import {
  External$TopupsUpdateBodyMetadataObj0,
  Schemas$TopupsUpdateBodyMetadataObj0,
  TopupsUpdateBodyMetadataObj0,
} from "./topups-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TopupsUpdateBody
 */
export type TopupsUpdateBody = {
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TopupsUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | ((TopupsUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TopupsUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TopupsUpdateBody = {
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?: (External$TopupsUpdateBodyMetadataObj0 | string) | undefined;

  [additionalProperty: string]:
    | (string | undefined)
    | (string[] | undefined)
    | ((External$TopupsUpdateBodyMetadataObj0 | string) | undefined)
    | External$TopupsUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TopupsUpdateBody
 */
const SchemaIn$TopupsUpdateBody: z.ZodType<
  TopupsUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TopupsUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TopupsUpdateBody
 */
const SchemaOut$TopupsUpdateBody: z.ZodType<
  External$TopupsUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  TopupsUpdateBody // the object to be transformed
> = z
  .object({
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TopupsUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      description: "description",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$TopupsUpdateBody = {
  in: SchemaIn$TopupsUpdateBody,
  out: SchemaOut$TopupsUpdateBody,
};
