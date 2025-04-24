import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceUpdateBodyMetadataObj0
 */
export type SourceUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SourceUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$SourceUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceUpdateBodyMetadataObj0
 */
const SchemaIn$SourceUpdateBodyMetadataObj0: z.ZodType<
  SourceUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceUpdateBodyMetadataObj0
 */
const SchemaOut$SourceUpdateBodyMetadataObj0: z.ZodType<
  External$SourceUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  SourceUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SourceUpdateBodyMetadataObj0 = {
  in: SchemaIn$SourceUpdateBodyMetadataObj0,
  out: SchemaOut$SourceUpdateBodyMetadataObj0,
};
