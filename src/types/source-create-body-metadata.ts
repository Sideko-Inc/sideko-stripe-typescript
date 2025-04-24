import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SourceCreateBodyMetadata
 */
export type SourceCreateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * SourceCreateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodyMetadata = {
  [additionalProperty: string]:
    | External$SourceCreateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodyMetadata
 */
const SchemaIn$SourceCreateBodyMetadata: z.ZodType<
  SourceCreateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodyMetadata
 */
const SchemaOut$SourceCreateBodyMetadata: z.ZodType<
  External$SourceCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$SourceCreateBodyMetadata = {
  in: SchemaIn$SourceCreateBodyMetadata,
  out: SchemaOut$SourceCreateBodyMetadata,
};
