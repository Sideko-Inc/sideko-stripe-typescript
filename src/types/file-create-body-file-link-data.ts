import {
  External$FileCreateBodyFileLinkDataMetadataObj0,
  FileCreateBodyFileLinkDataMetadataObj0,
  Schemas$FileCreateBodyFileLinkDataMetadataObj0,
} from "./file-create-body-file-link-data-metadata-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Optional parameters that automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
 */
export type FileCreateBodyFileLinkData = {
  create: boolean;
  expiresAt?: number | undefined;
  metadata?: (FileCreateBodyFileLinkDataMetadataObj0 | string) | undefined;
};

/**
 * @internal
 * FileCreateBodyFileLinkData without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileCreateBodyFileLinkData = {
  create: boolean;
  expires_at?: number | undefined;
  metadata?:
    | (External$FileCreateBodyFileLinkDataMetadataObj0 | string)
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileCreateBodyFileLinkData
 */
const SchemaIn$FileCreateBodyFileLinkData: z.ZodType<
  FileCreateBodyFileLinkData, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    create: z.boolean(),
    expires_at: z.number().int().optional(),
    metadata: z
      .union([Schemas$FileCreateBodyFileLinkDataMetadataObj0.in, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      create: "create",
      expires_at: "expiresAt",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileCreateBodyFileLinkData
 */
const SchemaOut$FileCreateBodyFileLinkData: z.ZodType<
  External$FileCreateBodyFileLinkData, // output type of this zod object
  z.ZodTypeDef,
  FileCreateBodyFileLinkData // the object to be transformed
> = z
  .object({
    create: z.boolean(),
    expiresAt: z.number().int().optional(),
    metadata: z
      .union([Schemas$FileCreateBodyFileLinkDataMetadataObj0.out, z.string()])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      create: "create",
      expiresAt: "expires_at",
      metadata: "metadata",
    });
  });

export const Schemas$FileCreateBodyFileLinkData = {
  in: SchemaIn$FileCreateBodyFileLinkData,
  out: SchemaOut$FileCreateBodyFileLinkData,
};
