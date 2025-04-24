import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountExternalAccountUpdateBodyMetadataObj0
 */
export type AccountExternalAccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountExternalAccountUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountExternalAccountUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountExternalAccountUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountExternalAccountUpdateBodyMetadataObj0
 */
const SchemaIn$AccountExternalAccountUpdateBodyMetadataObj0: z.ZodType<
  AccountExternalAccountUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountExternalAccountUpdateBodyMetadataObj0
 */
const SchemaOut$AccountExternalAccountUpdateBodyMetadataObj0: z.ZodType<
  External$AccountExternalAccountUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountExternalAccountUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountExternalAccountUpdateBodyMetadataObj0 = {
  in: SchemaIn$AccountExternalAccountUpdateBodyMetadataObj0,
  out: SchemaOut$AccountExternalAccountUpdateBodyMetadataObj0,
};
