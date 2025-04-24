import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ExternalAccountCreateBodyMetadataObj0
 */
export type ExternalAccountCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ExternalAccountCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExternalAccountCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ExternalAccountCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExternalAccountCreateBodyMetadataObj0
 */
const SchemaIn$ExternalAccountCreateBodyMetadataObj0: z.ZodType<
  ExternalAccountCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExternalAccountCreateBodyMetadataObj0
 */
const SchemaOut$ExternalAccountCreateBodyMetadataObj0: z.ZodType<
  External$ExternalAccountCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ExternalAccountCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ExternalAccountCreateBodyMetadataObj0 = {
  in: SchemaIn$ExternalAccountCreateBodyMetadataObj0,
  out: SchemaOut$ExternalAccountCreateBodyMetadataObj0,
};
