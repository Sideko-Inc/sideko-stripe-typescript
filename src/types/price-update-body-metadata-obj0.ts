import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PriceUpdateBodyMetadataObj0
 */
export type PriceUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PriceUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PriceUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceUpdateBodyMetadataObj0
 */
const SchemaIn$PriceUpdateBodyMetadataObj0: z.ZodType<
  PriceUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceUpdateBodyMetadataObj0
 */
const SchemaOut$PriceUpdateBodyMetadataObj0: z.ZodType<
  External$PriceUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PriceUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PriceUpdateBodyMetadataObj0 = {
  in: SchemaIn$PriceUpdateBodyMetadataObj0,
  out: SchemaOut$PriceUpdateBodyMetadataObj0,
};
