import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingTransactionUpdateBodyMetadataObj0
 */
export type IssuingTransactionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * IssuingTransactionUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$IssuingTransactionUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionUpdateBodyMetadataObj0
 */
const SchemaIn$IssuingTransactionUpdateBodyMetadataObj0: z.ZodType<
  IssuingTransactionUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionUpdateBodyMetadataObj0
 */
const SchemaOut$IssuingTransactionUpdateBodyMetadataObj0: z.ZodType<
  External$IssuingTransactionUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$IssuingTransactionUpdateBodyMetadataObj0 = {
  in: SchemaIn$IssuingTransactionUpdateBodyMetadataObj0,
  out: SchemaOut$IssuingTransactionUpdateBodyMetadataObj0,
};
