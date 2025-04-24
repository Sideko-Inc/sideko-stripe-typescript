import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
export type TaxRateMetadata = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TaxRateMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRateMetadata = {
  [additionalProperty: string]:
    | (External$TaxRateMetadata | null)
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRateMetadata
 */
const SchemaIn$TaxRateMetadata: z.ZodType<
  TaxRateMetadata, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRateMetadata
 */
const SchemaOut$TaxRateMetadata: z.ZodType<
  External$TaxRateMetadata, // output type of this zod object
  z.ZodTypeDef,
  TaxRateMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TaxRateMetadata = {
  in: SchemaIn$TaxRateMetadata,
  out: SchemaOut$TaxRateMetadata,
};
