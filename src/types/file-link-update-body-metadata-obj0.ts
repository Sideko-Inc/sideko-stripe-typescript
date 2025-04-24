import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FileLinkUpdateBodyMetadataObj0
 */
export type FileLinkUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * FileLinkUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileLinkUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$FileLinkUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileLinkUpdateBodyMetadataObj0
 */
const SchemaIn$FileLinkUpdateBodyMetadataObj0: z.ZodType<
  FileLinkUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileLinkUpdateBodyMetadataObj0
 */
const SchemaOut$FileLinkUpdateBodyMetadataObj0: z.ZodType<
  External$FileLinkUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  FileLinkUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$FileLinkUpdateBodyMetadataObj0 = {
  in: SchemaIn$FileLinkUpdateBodyMetadataObj0,
  out: SchemaOut$FileLinkUpdateBodyMetadataObj0,
};
