import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleCreateBodyMetadataObj0
 */
export type AccountPeopleCreateBodyMetadataObj0 = {
  [additionalProperty: string]: string | null | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyMetadataObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyMetadataObj0 = {
  [additionalProperty: string]:
    | External$AccountPeopleCreateBodyMetadataObj0
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyMetadataObj0
 */
const SchemaIn$AccountPeopleCreateBodyMetadataObj0: z.ZodType<
  AccountPeopleCreateBodyMetadataObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyMetadataObj0
 */
const SchemaOut$AccountPeopleCreateBodyMetadataObj0: z.ZodType<
  External$AccountPeopleCreateBodyMetadataObj0, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyMetadataObj0 // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$AccountPeopleCreateBodyMetadataObj0 = {
  in: SchemaIn$AccountPeopleCreateBodyMetadataObj0,
  out: SchemaOut$AccountPeopleCreateBodyMetadataObj0,
};
