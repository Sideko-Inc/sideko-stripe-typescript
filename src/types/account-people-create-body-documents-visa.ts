import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleCreateBodyDocumentsVisa
 */
export type AccountPeopleCreateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyDocumentsVisa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyDocumentsVisa
 */
const SchemaIn$AccountPeopleCreateBodyDocumentsVisa: z.ZodType<
  AccountPeopleCreateBodyDocumentsVisa, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyDocumentsVisa
 */
const SchemaOut$AccountPeopleCreateBodyDocumentsVisa: z.ZodType<
  External$AccountPeopleCreateBodyDocumentsVisa, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyDocumentsVisa // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPeopleCreateBodyDocumentsVisa = {
  in: SchemaIn$AccountPeopleCreateBodyDocumentsVisa,
  out: SchemaOut$AccountPeopleCreateBodyDocumentsVisa,
};
