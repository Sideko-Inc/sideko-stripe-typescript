import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardUpdateBodyMetadataObj0
 */
export type IssuingCardUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * IssuingCardUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$IssuingCardUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardUpdateBodyMetadataObj0
 */
const SchemaIn$IssuingCardUpdateBodyMetadataObj0: z.ZodType<
  IssuingCardUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardUpdateBodyMetadataObj0
 */
const SchemaOut$IssuingCardUpdateBodyMetadataObj0: z.ZodType<
  External$IssuingCardUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$IssuingCardUpdateBodyMetadataObj0 = {
  in: SchemaIn$IssuingCardUpdateBodyMetadataObj0,
  out: SchemaOut$IssuingCardUpdateBodyMetadataObj0,
};
