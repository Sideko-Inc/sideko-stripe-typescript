import {
  External$FileLinkUpdateBodyMetadataObj0,
  FileLinkUpdateBodyMetadataObj0,
  Schemas$FileLinkUpdateBodyMetadataObj0,
} from "./file-link-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FileLinkUpdateBody
 */
export type FileLinkUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A future timestamp after which the link will no longer be usable, or `now` to expire the link immediately.
   */
  expiresAt?: ("now" | number | string) | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (FileLinkUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (("now" | number | string) | undefined)
    | ((FileLinkUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * FileLinkUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileLinkUpdateBody = {
  expand?: string[] | undefined;
  expires_at?: ("now" | number | string) | undefined;
  metadata?: (External$FileLinkUpdateBodyMetadataObj0 | string) | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (("now" | number | string) | undefined)
    | ((External$FileLinkUpdateBodyMetadataObj0 | string) | undefined)
    | External$FileLinkUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileLinkUpdateBody
 */
const SchemaIn$FileLinkUpdateBody: z.ZodType<
  FileLinkUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expires_at: z
      .union([z.enum(["now"]), z.number().int(), z.string()])
      .optional(),
    metadata: z
      .union([Schemas$FileLinkUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expires_at: "expiresAt",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileLinkUpdateBody
 */
const SchemaOut$FileLinkUpdateBody: z.ZodType<
  External$FileLinkUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  FileLinkUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    expiresAt: z
      .union([z.enum(["now"]), z.number().int(), z.string()])
      .optional(),
    metadata: z
      .union([Schemas$FileLinkUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      expiresAt: "expires_at",
      metadata: "metadata",
    });
  });

export const Schemas$FileLinkUpdateBody = {
  in: SchemaIn$FileLinkUpdateBody,
  out: SchemaOut$FileLinkUpdateBody,
};
