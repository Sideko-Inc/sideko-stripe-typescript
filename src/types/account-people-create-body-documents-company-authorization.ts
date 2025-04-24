import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPeopleCreateBodyDocumentsCompanyAuthorization
 */
export type AccountPeopleCreateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPeopleCreateBodyDocumentsCompanyAuthorization without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPeopleCreateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPeopleCreateBodyDocumentsCompanyAuthorization
 */
const SchemaIn$AccountPeopleCreateBodyDocumentsCompanyAuthorization: z.ZodType<
  AccountPeopleCreateBodyDocumentsCompanyAuthorization, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPeopleCreateBodyDocumentsCompanyAuthorization
 */
const SchemaOut$AccountPeopleCreateBodyDocumentsCompanyAuthorization: z.ZodType<
  External$AccountPeopleCreateBodyDocumentsCompanyAuthorization, // output type of this zod object
  z.ZodTypeDef,
  AccountPeopleCreateBodyDocumentsCompanyAuthorization // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPeopleCreateBodyDocumentsCompanyAuthorization = {
  in: SchemaIn$AccountPeopleCreateBodyDocumentsCompanyAuthorization,
  out: SchemaOut$AccountPeopleCreateBodyDocumentsCompanyAuthorization,
};
