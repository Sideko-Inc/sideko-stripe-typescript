import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type ChargeMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeMetadata = {
  [additionalProperty: string]: External$ChargeMetadata | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeMetadata
 */
const SchemaIn$ChargeMetadata: z.ZodType<
  ChargeMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeMetadata
 */
const SchemaOut$ChargeMetadata: z.ZodType<
  External$ChargeMetadata, // output type of this zod object
  z.ZodTypeDef,
  ChargeMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeMetadata = {
  in: SchemaIn$ChargeMetadata,
  out: SchemaOut$ChargeMetadata,
};
