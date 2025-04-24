import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyIndividualMetadataObj0
 */
export type AccountCreateBodyIndividualMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountCreateBodyIndividualMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyIndividualMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountCreateBodyIndividualMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyIndividualMetadataObj0
 */
const SchemaIn$AccountCreateBodyIndividualMetadataObj0: z.ZodType<
  AccountCreateBodyIndividualMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyIndividualMetadataObj0
 */
const SchemaOut$AccountCreateBodyIndividualMetadataObj0: z.ZodType<
  External$AccountCreateBodyIndividualMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyIndividualMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountCreateBodyIndividualMetadataObj0 = {
  in: SchemaIn$AccountCreateBodyIndividualMetadataObj0,
  out: SchemaOut$AccountCreateBodyIndividualMetadataObj0,
};
