import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonUpdateBodyDocumentsCompanyAuthorization
 */
export type AccountPersonUpdateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPersonUpdateBodyDocumentsCompanyAuthorization without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonUpdateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonUpdateBodyDocumentsCompanyAuthorization
 */
const SchemaIn$AccountPersonUpdateBodyDocumentsCompanyAuthorization: z.ZodType<
  AccountPersonUpdateBodyDocumentsCompanyAuthorization, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonUpdateBodyDocumentsCompanyAuthorization
 */
const SchemaOut$AccountPersonUpdateBodyDocumentsCompanyAuthorization: z.ZodType<
  External$AccountPersonUpdateBodyDocumentsCompanyAuthorization, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonUpdateBodyDocumentsCompanyAuthorization // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPersonUpdateBodyDocumentsCompanyAuthorization = {
  in: SchemaIn$AccountPersonUpdateBodyDocumentsCompanyAuthorization,
  out: SchemaOut$AccountPersonUpdateBodyDocumentsCompanyAuthorization,
};
