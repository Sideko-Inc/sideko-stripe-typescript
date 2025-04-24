import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeUpdateBodyMetadataObj0
 */
export type ChargeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ChargeUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeUpdateBodyMetadataObj0
 */
const SchemaIn$ChargeUpdateBodyMetadataObj0: z.ZodType<
  ChargeUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeUpdateBodyMetadataObj0
 */
const SchemaOut$ChargeUpdateBodyMetadataObj0: z.ZodType<
  External$ChargeUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeUpdateBodyMetadataObj0 = {
  in: SchemaIn$ChargeUpdateBodyMetadataObj0,
  out: SchemaOut$ChargeUpdateBodyMetadataObj0,
};
