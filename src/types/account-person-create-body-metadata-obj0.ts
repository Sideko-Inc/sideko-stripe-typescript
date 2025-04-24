import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBodyMetadataObj0
 */
export type AccountPersonCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountPersonCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyMetadataObj0
 */
const SchemaIn$AccountPersonCreateBodyMetadataObj0: z.ZodType<
  AccountPersonCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyMetadataObj0
 */
const SchemaOut$AccountPersonCreateBodyMetadataObj0: z.ZodType<
  External$AccountPersonCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountPersonCreateBodyMetadataObj0 = {
  in: SchemaIn$AccountPersonCreateBodyMetadataObj0,
  out: SchemaOut$AccountPersonCreateBodyMetadataObj0,
};
