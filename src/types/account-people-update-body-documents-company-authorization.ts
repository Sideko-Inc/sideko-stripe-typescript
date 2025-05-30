import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleUpdateBodyDocumentsCompanyAuthorization
 */
export type AccountPeopleUpdateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPeopleUpdateBodyDocumentsCompanyAuthorization without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleUpdateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleUpdateBodyDocumentsCompanyAuthorization
 */
const SchemaIn$AccountPeopleUpdateBodyDocumentsCompanyAuthorization: z.ZodType<
  AccountPeopleUpdateBodyDocumentsCompanyAuthorization, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleUpdateBodyDocumentsCompanyAuthorization
 */
const SchemaOut$AccountPeopleUpdateBodyDocumentsCompanyAuthorization: z.ZodType<
  External$AccountPeopleUpdateBodyDocumentsCompanyAuthorization, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleUpdateBodyDocumentsCompanyAuthorization // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPeopleUpdateBodyDocumentsCompanyAuthorization = {
  in: SchemaIn$AccountPeopleUpdateBodyDocumentsCompanyAuthorization,
  out: SchemaOut$AccountPeopleUpdateBodyDocumentsCompanyAuthorization,
};
