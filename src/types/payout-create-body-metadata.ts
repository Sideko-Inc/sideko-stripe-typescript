import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type PayoutCreateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PayoutCreateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutCreateBodyMetadata = {
  [additionalProperty: string]:
    | External$PayoutCreateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutCreateBodyMetadata
 */
const SchemaIn$PayoutCreateBodyMetadata: z.ZodType<
  PayoutCreateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutCreateBodyMetadata
 */
const SchemaOut$PayoutCreateBodyMetadata: z.ZodType<
  External$PayoutCreateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  PayoutCreateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PayoutCreateBodyMetadata = {
  in: SchemaIn$PayoutCreateBodyMetadata,
  out: SchemaOut$PayoutCreateBodyMetadata,
};
