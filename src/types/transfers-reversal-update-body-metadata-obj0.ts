import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransfersReversalUpdateBodyMetadataObj0
 */
export type TransfersReversalUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TransfersReversalUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransfersReversalUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TransfersReversalUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransfersReversalUpdateBodyMetadataObj0
 */
const SchemaIn$TransfersReversalUpdateBodyMetadataObj0: z.ZodType<
  TransfersReversalUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransfersReversalUpdateBodyMetadataObj0
 */
const SchemaOut$TransfersReversalUpdateBodyMetadataObj0: z.ZodType<
  External$TransfersReversalUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TransfersReversalUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TransfersReversalUpdateBodyMetadataObj0 = {
  in: SchemaIn$TransfersReversalUpdateBodyMetadataObj0,
  out: SchemaOut$TransfersReversalUpdateBodyMetadataObj0,
};
