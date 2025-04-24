import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeUpdateBodyMetadataObj0
 */
export type IssuingDisputeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * IssuingDisputeUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$IssuingDisputeUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeUpdateBodyMetadataObj0
 */
const SchemaIn$IssuingDisputeUpdateBodyMetadataObj0: z.ZodType<
  IssuingDisputeUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeUpdateBodyMetadataObj0
 */
const SchemaOut$IssuingDisputeUpdateBodyMetadataObj0: z.ZodType<
  External$IssuingDisputeUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$IssuingDisputeUpdateBodyMetadataObj0 = {
  in: SchemaIn$IssuingDisputeUpdateBodyMetadataObj0,
  out: SchemaOut$IssuingDisputeUpdateBodyMetadataObj0,
};
