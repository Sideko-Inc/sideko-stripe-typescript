import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
 */
export type ClimateOrderUpdateBodyMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ClimateOrderUpdateBodyMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateOrderUpdateBodyMetadata = {
  [additionalProperty: string]:
    | External$ClimateOrderUpdateBodyMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateOrderUpdateBodyMetadata
 */
const SchemaIn$ClimateOrderUpdateBodyMetadata: z.ZodType<
  ClimateOrderUpdateBodyMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateOrderUpdateBodyMetadata
 */
const SchemaOut$ClimateOrderUpdateBodyMetadata: z.ZodType<
  External$ClimateOrderUpdateBodyMetadata, // output type of this zod object
  z.ZodTypeDef,
  ClimateOrderUpdateBodyMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ClimateOrderUpdateBodyMetadata = {
  in: SchemaIn$ClimateOrderUpdateBodyMetadata,
  out: SchemaOut$ClimateOrderUpdateBodyMetadata,
};
