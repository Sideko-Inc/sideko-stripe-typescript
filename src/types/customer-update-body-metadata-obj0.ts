import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerUpdateBodyMetadataObj0
 */
export type CustomerUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$CustomerUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyMetadataObj0
 */
const SchemaIn$CustomerUpdateBodyMetadataObj0: z.ZodType<
  CustomerUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyMetadataObj0
 */
const SchemaOut$CustomerUpdateBodyMetadataObj0: z.ZodType<
  External$CustomerUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerUpdateBodyMetadataObj0 = {
  in: SchemaIn$CustomerUpdateBodyMetadataObj0,
  out: SchemaOut$CustomerUpdateBodyMetadataObj0,
};
