import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyMetadataObj0
 */
export type AccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyMetadataObj0
 */
const SchemaIn$AccountUpdateBodyMetadataObj0: z.ZodType<
  AccountUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyMetadataObj0
 */
const SchemaOut$AccountUpdateBodyMetadataObj0: z.ZodType<
  External$AccountUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountUpdateBodyMetadataObj0 = {
  in: SchemaIn$AccountUpdateBodyMetadataObj0,
  out: SchemaOut$AccountUpdateBodyMetadataObj0,
};
