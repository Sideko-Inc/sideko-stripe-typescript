import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleUpdateBodyDocumentsVisa
 */
export type AccountPeopleUpdateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyDocumentsVisa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyDocumentsVisa = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyDocumentsVisa
 */
const SchemaIn$AccountPeopleUpdateBodyDocumentsVisa: z.ZodType<
  AccountPeopleUpdateBodyDocumentsVisa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyDocumentsVisa
 */
const SchemaOut$AccountPeopleUpdateBodyDocumentsVisa: z.ZodType<
  External$AccountPeopleUpdateBodyDocumentsVisa, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyDocumentsVisa // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPeopleUpdateBodyDocumentsVisa = {
  in: SchemaIn$AccountPeopleUpdateBodyDocumentsVisa,
  out: SchemaOut$AccountPeopleUpdateBodyDocumentsVisa,
};
