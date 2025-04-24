import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeUpdateBodyMetadataObj0
 */
export type DisputeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * DisputeUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$DisputeUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeUpdateBodyMetadataObj0
 */
const SchemaIn$DisputeUpdateBodyMetadataObj0: z.ZodType<
  DisputeUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeUpdateBodyMetadataObj0
 */
const SchemaOut$DisputeUpdateBodyMetadataObj0: z.ZodType<
  External$DisputeUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  DisputeUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$DisputeUpdateBodyMetadataObj0 = {
  in: SchemaIn$DisputeUpdateBodyMetadataObj0,
  out: SchemaOut$DisputeUpdateBodyMetadataObj0,
};
