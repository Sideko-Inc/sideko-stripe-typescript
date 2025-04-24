import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type CustomerCardCreateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * CustomerCardCreateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCardCreateBodyMetadata = {
  [additionalProperty: string]:
    | External$CustomerCardCreateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCardCreateBodyMetadata
 */
const SchemaIn$CustomerCardCreateBodyMetadata: z.ZodType<
  CustomerCardCreateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCardCreateBodyMetadata
 */
const SchemaOut$CustomerCardCreateBodyMetadata: z.ZodType<
  External$CustomerCardCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  CustomerCardCreateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CustomerCardCreateBodyMetadata = {
  in: SchemaIn$CustomerCardCreateBodyMetadata,
  out: SchemaOut$CustomerCardCreateBodyMetadata,
};
