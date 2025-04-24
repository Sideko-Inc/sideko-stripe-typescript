import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductCreateBodyDefaultPriceDataMetadata
 */
export type ProductCreateBodyDefaultPriceDataMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ProductCreateBodyDefaultPriceDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductCreateBodyDefaultPriceDataMetadata = {
  [additionalProperty: string]:
    | External$ProductCreateBodyDefaultPriceDataMetadata
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductCreateBodyDefaultPriceDataMetadata
 */
const SchemaIn$ProductCreateBodyDefaultPriceDataMetadata: z.ZodType<
  ProductCreateBodyDefaultPriceDataMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductCreateBodyDefaultPriceDataMetadata
 */
const SchemaOut$ProductCreateBodyDefaultPriceDataMetadata: z.ZodType<
  External$ProductCreateBodyDefaultPriceDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  ProductCreateBodyDefaultPriceDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ProductCreateBodyDefaultPriceDataMetadata = {
  in: SchemaIn$ProductCreateBodyDefaultPriceDataMetadata,
  out: SchemaOut$ProductCreateBodyDefaultPriceDataMetadata,
};
