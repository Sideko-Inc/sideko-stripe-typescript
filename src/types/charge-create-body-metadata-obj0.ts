import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeCreateBodyMetadataObj0
 */
export type ChargeCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * ChargeCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$ChargeCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeCreateBodyMetadataObj0
 */
const SchemaIn$ChargeCreateBodyMetadataObj0: z.ZodType<
  ChargeCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeCreateBodyMetadataObj0
 */
const SchemaOut$ChargeCreateBodyMetadataObj0: z.ZodType<
  External$ChargeCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  ChargeCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ChargeCreateBodyMetadataObj0 = {
  in: SchemaIn$ChargeCreateBodyMetadataObj0,
  out: SchemaOut$ChargeCreateBodyMetadataObj0,
};
