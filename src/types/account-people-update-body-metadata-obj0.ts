import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleUpdateBodyMetadataObj0
 */
export type AccountPeopleUpdateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountPeopleUpdateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyMetadataObj0
 */
const SchemaIn$AccountPeopleUpdateBodyMetadataObj0: z.ZodType<
  AccountPeopleUpdateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyMetadataObj0
 */
const SchemaOut$AccountPeopleUpdateBodyMetadataObj0: z.ZodType<
  External$AccountPeopleUpdateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountPeopleUpdateBodyMetadataObj0 = {
  in: SchemaIn$AccountPeopleUpdateBodyMetadataObj0,
  out: SchemaOut$AccountPeopleUpdateBodyMetadataObj0,
};
