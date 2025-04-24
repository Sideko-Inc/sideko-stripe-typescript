import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRateUpdateBodyMetadataObj0
 */
export type TaxRateUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TaxRateUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRateUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TaxRateUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRateUpdateBodyMetadataObj0
 */
const SchemaIn$TaxRateUpdateBodyMetadataObj0: z.ZodType<
  TaxRateUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRateUpdateBodyMetadataObj0
 */
const SchemaOut$TaxRateUpdateBodyMetadataObj0: z.ZodType<
  External$TaxRateUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TaxRateUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TaxRateUpdateBodyMetadataObj0 = {
  in: SchemaIn$TaxRateUpdateBodyMetadataObj0,
  out: SchemaOut$TaxRateUpdateBodyMetadataObj0,
};
