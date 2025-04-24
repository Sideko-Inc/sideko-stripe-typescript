import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type IssuingAuthorizationMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * IssuingAuthorizationMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingAuthorizationMetadata = {
  [additionalProperty: string]:
    | External$IssuingAuthorizationMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingAuthorizationMetadata
 */
const SchemaIn$IssuingAuthorizationMetadata: z.ZodType<
  IssuingAuthorizationMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingAuthorizationMetadata
 */
const SchemaOut$IssuingAuthorizationMetadata: z.ZodType<
  External$IssuingAuthorizationMetadata, // output type of this zod object
  z.ZodTypeDef,
  IssuingAuthorizationMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$IssuingAuthorizationMetadata = {
  in: SchemaIn$IssuingAuthorizationMetadata,
  out: SchemaOut$IssuingAuthorizationMetadata,
};
