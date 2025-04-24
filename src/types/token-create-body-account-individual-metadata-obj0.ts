import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TokenCreateBodyAccountIndividualMetadataObj0
 */
export type TokenCreateBodyAccountIndividualMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * TokenCreateBodyAccountIndividualMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TokenCreateBodyAccountIndividualMetadataObj0 = {
  [additionalProperty: string]:
    | External$TokenCreateBodyAccountIndividualMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TokenCreateBodyAccountIndividualMetadataObj0
 */
const SchemaIn$TokenCreateBodyAccountIndividualMetadataObj0: z.ZodType<
  TokenCreateBodyAccountIndividualMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TokenCreateBodyAccountIndividualMetadataObj0
 */
const SchemaOut$TokenCreateBodyAccountIndividualMetadataObj0: z.ZodType<
  External$TokenCreateBodyAccountIndividualMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  TokenCreateBodyAccountIndividualMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$TokenCreateBodyAccountIndividualMetadataObj0 = {
  in: SchemaIn$TokenCreateBodyAccountIndividualMetadataObj0,
  out: SchemaOut$TokenCreateBodyAccountIndividualMetadataObj0,
};
