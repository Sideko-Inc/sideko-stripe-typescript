import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransferUpdateBodyMetadataObj0
 */
export type TransferUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TransferUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransferUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$TransferUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransferUpdateBodyMetadataObj0
 */
const SchemaIn$TransferUpdateBodyMetadataObj0: z.ZodType<
  TransferUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransferUpdateBodyMetadataObj0
 */
const SchemaOut$TransferUpdateBodyMetadataObj0: z.ZodType<
  External$TransferUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TransferUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TransferUpdateBodyMetadataObj0 = {
  in: SchemaIn$TransferUpdateBodyMetadataObj0,
  out: SchemaOut$TransferUpdateBodyMetadataObj0,
};
