import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountPersonCreateBodyDocumentsCompanyAuthorization
 */
export type AccountPersonCreateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * @internal
 * AccountPersonCreateBodyDocumentsCompanyAuthorization without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountPersonCreateBodyDocumentsCompanyAuthorization = {
  files?: (string | string)[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountPersonCreateBodyDocumentsCompanyAuthorization
 */
const SchemaIn$AccountPersonCreateBodyDocumentsCompanyAuthorization: z.ZodType<
  AccountPersonCreateBodyDocumentsCompanyAuthorization, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountPersonCreateBodyDocumentsCompanyAuthorization
 */
const SchemaOut$AccountPersonCreateBodyDocumentsCompanyAuthorization: z.ZodType<
  External$AccountPersonCreateBodyDocumentsCompanyAuthorization, // output type of this zod object
  z.ZodTypeDef,
  AccountPersonCreateBodyDocumentsCompanyAuthorization // the object to be transformed
> = z
  .object({
    files: z.array(z.union([z.string(), z.string()])).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      files: "files",
    });
  });

export const Schemas$AccountPersonCreateBodyDocumentsCompanyAuthorization = {
  in: SchemaIn$AccountPersonCreateBodyDocumentsCompanyAuthorization,
  out: SchemaOut$AccountPersonCreateBodyDocumentsCompanyAuthorization,
};
