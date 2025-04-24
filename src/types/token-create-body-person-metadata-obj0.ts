import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyPersonMetadataObj0
 */
export type TokenCreateBodyPersonMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TokenCreateBodyPersonMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyPersonMetadataObj0 = {
  [additionalProperty: string]:
    | External$TokenCreateBodyPersonMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyPersonMetadataObj0
 */
const SchemaIn$TokenCreateBodyPersonMetadataObj0: z.ZodType<
  TokenCreateBodyPersonMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyPersonMetadataObj0
 */
const SchemaOut$TokenCreateBodyPersonMetadataObj0: z.ZodType<
  External$TokenCreateBodyPersonMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyPersonMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TokenCreateBodyPersonMetadataObj0 = {
  in: SchemaIn$TokenCreateBodyPersonMetadataObj0,
  out: SchemaOut$TokenCreateBodyPersonMetadataObj0,
};
