import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCreateBodyMetadataObj0
 */
export type CustomerCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyMetadataObj0
 */
const SchemaIn$CustomerCreateBodyMetadataObj0: z.ZodType<
  CustomerCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyMetadataObj0
 */
const SchemaOut$CustomerCreateBodyMetadataObj0: z.ZodType<
  External$CustomerCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerCreateBodyMetadataObj0 = {
  in: SchemaIn$CustomerCreateBodyMetadataObj0,
  out: SchemaOut$CustomerCreateBodyMetadataObj0,
};
