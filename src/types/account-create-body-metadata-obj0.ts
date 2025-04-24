import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyMetadataObj0
 */
export type AccountCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyMetadataObj0
 */
const SchemaIn$AccountCreateBodyMetadataObj0: z.ZodType<
  AccountCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyMetadataObj0
 */
const SchemaOut$AccountCreateBodyMetadataObj0: z.ZodType<
  External$AccountCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountCreateBodyMetadataObj0 = {
  in: SchemaIn$AccountCreateBodyMetadataObj0,
  out: SchemaOut$AccountCreateBodyMetadataObj0,
};
