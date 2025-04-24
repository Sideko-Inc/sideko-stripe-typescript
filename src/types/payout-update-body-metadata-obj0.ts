import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PayoutUpdateBodyMetadataObj0
 */
export type PayoutUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * PayoutUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PayoutUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$PayoutUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PayoutUpdateBodyMetadataObj0
 */
const SchemaIn$PayoutUpdateBodyMetadataObj0: z.ZodType<
  PayoutUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PayoutUpdateBodyMetadataObj0
 */
const SchemaOut$PayoutUpdateBodyMetadataObj0: z.ZodType<
  External$PayoutUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  PayoutUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$PayoutUpdateBodyMetadataObj0 = {
  in: SchemaIn$PayoutUpdateBodyMetadataObj0,
  out: SchemaOut$PayoutUpdateBodyMetadataObj0,
};
