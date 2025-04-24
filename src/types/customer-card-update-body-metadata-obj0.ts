import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCardUpdateBodyMetadataObj0
 */
export type CustomerCardUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerCardUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCardUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerCardUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCardUpdateBodyMetadataObj0
 */
const SchemaIn$CustomerCardUpdateBodyMetadataObj0: z.ZodType<
  CustomerCardUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCardUpdateBodyMetadataObj0
 */
const SchemaOut$CustomerCardUpdateBodyMetadataObj0: z.ZodType<
  External$CustomerCardUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerCardUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerCardUpdateBodyMetadataObj0 = {
  in: SchemaIn$CustomerCardUpdateBodyMetadataObj0,
  out: SchemaOut$CustomerCardUpdateBodyMetadataObj0,
};
