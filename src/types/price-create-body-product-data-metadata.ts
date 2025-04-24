import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceCreateBodyProductDataMetadata
 */
export type PriceCreateBodyProductDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PriceCreateBodyProductDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyProductDataMetadata = {
  [additionalProperty: string]:
    | External$PriceCreateBodyProductDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyProductDataMetadata
 */
const SchemaIn$PriceCreateBodyProductDataMetadata: z.ZodType<
  PriceCreateBodyProductDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyProductDataMetadata
 */
const SchemaOut$PriceCreateBodyProductDataMetadata: z.ZodType<
  External$PriceCreateBodyProductDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyProductDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PriceCreateBodyProductDataMetadata = {
  in: SchemaIn$PriceCreateBodyProductDataMetadata,
  out: SchemaOut$PriceCreateBodyProductDataMetadata,
};
