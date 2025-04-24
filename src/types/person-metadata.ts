import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type PersonMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PersonMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PersonMetadata = {
  [additionalProperty: string]: External$PersonMetadata | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PersonMetadata
 */
const SchemaIn$PersonMetadata: z.ZodType<
  PersonMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PersonMetadata
 */
const SchemaOut$PersonMetadata: z.ZodType<
  External$PersonMetadata, // output type of this zod object
  z.ZodTypeDef,
  PersonMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PersonMetadata = {
  in: SchemaIn$PersonMetadata,
  out: SchemaOut$PersonMetadata,
};
