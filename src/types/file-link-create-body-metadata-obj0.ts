import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FileLinkCreateBodyMetadataObj0
 */
export type FileLinkCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * FileLinkCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FileLinkCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$FileLinkCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FileLinkCreateBodyMetadataObj0
 */
const SchemaIn$FileLinkCreateBodyMetadataObj0: z.ZodType<
  FileLinkCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FileLinkCreateBodyMetadataObj0
 */
const SchemaOut$FileLinkCreateBodyMetadataObj0: z.ZodType<
  External$FileLinkCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  FileLinkCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$FileLinkCreateBodyMetadataObj0 = {
  in: SchemaIn$FileLinkCreateBodyMetadataObj0,
  out: SchemaOut$FileLinkCreateBodyMetadataObj0,
};
