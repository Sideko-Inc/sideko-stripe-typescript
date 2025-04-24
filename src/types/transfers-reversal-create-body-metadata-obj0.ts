import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransfersReversalCreateBodyMetadataObj0
 */
export type TransfersReversalCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TransfersReversalCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransfersReversalCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TransfersReversalCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransfersReversalCreateBodyMetadataObj0
 */
const SchemaIn$TransfersReversalCreateBodyMetadataObj0: z.ZodType<
  TransfersReversalCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransfersReversalCreateBodyMetadataObj0
 */
const SchemaOut$TransfersReversalCreateBodyMetadataObj0: z.ZodType<
  External$TransfersReversalCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TransfersReversalCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TransfersReversalCreateBodyMetadataObj0 = {
  in: SchemaIn$TransfersReversalCreateBodyMetadataObj0,
  out: SchemaOut$TransfersReversalCreateBodyMetadataObj0,
};
