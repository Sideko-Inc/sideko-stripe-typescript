import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyMetadataObj0
 */
export type AccountPersonUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountPersonUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyMetadataObj0
 */
const SchemaIn$AccountPersonUpdateBodyMetadataObj0: z.ZodType<
  AccountPersonUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyMetadataObj0
 */
const SchemaOut$AccountPersonUpdateBodyMetadataObj0: z.ZodType<
  External$AccountPersonUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountPersonUpdateBodyMetadataObj0 = {
  in: SchemaIn$AccountPersonUpdateBodyMetadataObj0,
  out: SchemaOut$AccountPersonUpdateBodyMetadataObj0,
};
