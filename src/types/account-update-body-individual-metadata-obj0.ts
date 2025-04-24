import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyIndividualMetadataObj0
 */
export type AccountUpdateBodyIndividualMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountUpdateBodyIndividualMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyIndividualMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountUpdateBodyIndividualMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyIndividualMetadataObj0
 */
const SchemaIn$AccountUpdateBodyIndividualMetadataObj0: z.ZodType<
  AccountUpdateBodyIndividualMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyIndividualMetadataObj0
 */
const SchemaOut$AccountUpdateBodyIndividualMetadataObj0: z.ZodType<
  External$AccountUpdateBodyIndividualMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyIndividualMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountUpdateBodyIndividualMetadataObj0 = {
  in: SchemaIn$AccountUpdateBodyIndividualMetadataObj0,
  out: SchemaOut$AccountUpdateBodyIndividualMetadataObj0,
};
